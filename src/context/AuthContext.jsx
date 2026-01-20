import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isOnboarded, setIsOnboarded] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [session, setSession] = useState(null);

    const saveUserToDatabase = async (userData) => {
        const { error } = await supabase
            .from('users')
            .upsert({
                id: userData.googleId,
                email: userData.email,
                name: userData.name,
                picture: userData.picture,
                profile: userData.profile || null,
                updated_at: new Date().toISOString(),
            }, { onConflict: 'id' });

        if (error) {
            console.error('Error saving user to database:', error);
        }
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (session?.user) {
                const userData = {
                    name: session.user.user_metadata.name || session.user.user_metadata.full_name,
                    email: session.user.email,
                    picture: session.user.user_metadata.avatar_url || session.user.user_metadata.picture,
                    googleId: session.user.id,
                };
                setUser(userData);
                saveUserToDatabase(userData);
                const savedOnboarded = localStorage.getItem('krea_onboarded');
                const onboarded = savedOnboarded === 'true';
                setIsOnboarded(onboarded);
                // Show onboarding if user hasn't completed it
                if (!onboarded) {
                    setShowOnboarding(true);
                }
            }
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (session?.user) {
                const userData = {
                    name: session.user.user_metadata.name || session.user.user_metadata.full_name,
                    email: session.user.email,
                    picture: session.user.user_metadata.avatar_url || session.user.user_metadata.picture,
                    googleId: session.user.id,
                };
                setUser(userData);
                saveUserToDatabase(userData);
                // Check if user needs onboarding
                const savedOnboarded = localStorage.getItem('krea_onboarded');
                const onboarded = savedOnboarded === 'true';
                setIsOnboarded(onboarded);
                if (!onboarded) {
                    setShowOnboarding(true);
                }
            } else {
                setUser(null);
                setShowOnboarding(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        // Use production URL if available, otherwise use current origin
        const redirectUrl = import.meta.env.PROD 
            ? window.location.origin 
            : window.location.origin;
            
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: redirectUrl,
            },
        });
        if (error) {
            console.error('Error logging in:', error);
        }
    };

    const login = (credentialResponse) => {
        loginWithGoogle();
    };

    const completeOnboarding = async (profileData) => {
        const updatedUser = { ...user, profile: profileData };
        setUser(updatedUser);
        setIsOnboarded(true);
        setShowOnboarding(false);
        localStorage.setItem('krea_user', JSON.stringify(updatedUser));
        localStorage.setItem('krea_onboarded', 'true');
        await saveUserToDatabase(updatedUser);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setIsOnboarded(false);
        setSession(null);
        localStorage.removeItem('krea_user');
        localStorage.removeItem('krea_onboarded');
    };

    return (
        <AuthContext.Provider value={{
            user,
            session,
            isOnboarded,
            showOnboarding,
            setShowOnboarding,
            login,
            loginWithGoogle,
            logout,
            completeOnboarding,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
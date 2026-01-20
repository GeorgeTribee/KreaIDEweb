import React, { useState } from 'react';
import LoginModal from './LoginModal';
import ProfileDropdown from './ProfileDropdown';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { user } = useAuth();
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <nav className="fixed flex animate-fade-slide-in z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center">
                <div className="flex shadow-orange-900/50 bg-[#020617]/90 border-orange-500/30 border rounded-full pt-2 pr-6 pb-2 pl-6 shadow-2xl backdrop-blur-xl gap-x-6 gap-y-1 items-center font-geist-mono">
                    <span className="inline-flex items-baseline justify-center text-lg font-bold tracking-tighter text-white gap-0.5">
                        krea
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mb-0.5"></div>
                    </span>

                    <div className="hidden md:flex items-center gap-4 text-xs font-medium text-zinc-500">
                        <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
                        <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
                        <a href="#" className="hover:text-orange-400 transition-colors">Docs</a>
                        <a href="#footer" className="hover:text-orange-400 transition-colors">Contact Us</a>
                    </div>

                    <button className="hover:bg-orange-400/90 transition-colors shadow-orange-500/40 active:scale-95 text-xs font-medium text-zinc-950 bg-orange-500 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-lg">
                        Launch Krea IDE
                    </button>
                    {user ? (
                        <ProfileDropdown />
                    ) : (
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="hidden md:block hover:bg-orange-400/90 transition-colors shadow-orange-500/40 active:scale-95 text-xs font-medium text-zinc-950 bg-orange-500 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-lg"
                        >
                            Log In
                        </button>
                    )}
                </div>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}

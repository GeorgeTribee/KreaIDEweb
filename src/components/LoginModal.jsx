import React from 'react';
import { X } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';

export default function LoginModal({ isOpen, onClose }) {
    const { login } = useAuth();

    if (!isOpen) return null;

    const handleGoogleSuccess = (credentialResponse) => {
        console.log('Google Login Success:', credentialResponse);
        login(credentialResponse);
        onClose();
    };

    const handleGoogleError = () => {
        console.log('Google Login Failed');
        alert('Google sign-in failed. Please try again.');
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-24"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-[90%] md:w-[50%] max-w-lg bg-black border border-orange-500/30 rounded-2xl p-8 shadow-2xl shadow-orange-900/20 animate-fade-slide-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="inline-flex items-baseline justify-center text-2xl font-bold tracking-tighter text-white gap-0.5 mb-4">
                        krea
                        <div className="w-2 h-2 bg-orange-500 rounded-full mb-0.5"></div>
                    </span>
                    <h2 className="text-xl font-semibold text-white font-manrope">Welcome back</h2>
                    <p className="text-sm text-zinc-400 mt-2">Sign in to continue to Krea IDE</p>
                </div>

                {/* Google Sign In Button */}
                <div className="flex justify-center">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        theme="filled_black"
                        size="large"
                        width="100%"
                        text="continue_with"
                        shape="pill"
                    />
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-zinc-800"></div>
                    <span className="text-xs text-zinc-500">or</span>
                    <div className="flex-1 h-px bg-zinc-800"></div>
                </div>

                {/* Email Input */}
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                    />
                    <button className="w-full bg-orange-500 hover:bg-orange-400/90 text-zinc-950 font-medium py-3 px-4 rounded-full transition-all active:scale-95 shadow-lg shadow-orange-500/40">
                        Continue with Email
                    </button>
                </div>

                {/* Footer */}
                <p className="text-xs text-zinc-500 text-center mt-6">
                    By continuing, you agree to our <a href="#" className="text-orange-400 hover:underline">Terms</a> and <a href="#" className="text-orange-400 hover:underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}

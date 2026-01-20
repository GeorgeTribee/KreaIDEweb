import React, { useState, useRef, useEffect } from 'react';
import { LogOut, Settings, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ProfileModal from './ProfileModal';
import SettingsModal from './SettingsModal';

export default function ProfileDropdown() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!user) return null;

    const handleProfileClick = (e) => {
        e.stopPropagation();
        setIsOpen(false);
        setIsProfileOpen(true);
    };

    const handleSettingsClick = (e) => {
        e.stopPropagation();
        setIsOpen(false);
        setIsSettingsOpen(true);
    };

    return (
        <>
            <div className="relative" ref={dropdownRef}>
                {/* Avatar Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-full hover:bg-zinc-800/50 transition-colors"
                >
                    <div className="relative">
                        <img
                            src={user.picture}
                            alt={user.name}
                            className="w-8 h-8 rounded-full border-2 border-orange-500/50"
                        />
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu - centered under the avatar */}
                {isOpen && (
                    <div className="absolute top-12 w-64 bg-black border border-orange-500/30 rounded-xl shadow-2xl shadow-orange-900/20 overflow-hidden animate-fade-slide-in" style={{ right: '-100px' }}>
                        {/* User Info */}
                        <div className="p-4 border-b border-zinc-800">
                            <div className="flex items-center gap-3">
                                <img
                                    src={user.picture}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">
                                        {user.profile?.username || user.name}
                                    </p>
                                    <p className="text-xs text-zinc-500 truncate">{user.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2">
                            <button
                                onClick={handleProfileClick}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                            >
                                <User className="w-4 h-4" />
                                Profile
                            </button>
                            <button
                                onClick={handleSettingsClick}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                            >
                                <Settings className="w-4 h-4" />
                                Settings
                            </button>
                        </div>

                        {/* Sign Out */}
                        <div className="p-2 border-t border-zinc-800">
                            <button
                                onClick={() => {
                                    logout();
                                    setIsOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </>
    );
}

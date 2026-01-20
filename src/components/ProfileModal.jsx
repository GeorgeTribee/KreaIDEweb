import React from 'react';
import { X, Mail, Target, Users, Briefcase, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ProfileModal({ isOpen, onClose }) {
    const { user } = useAuth();

    if (!isOpen || !user) return null;

    const profile = user.profile || {};

    return (
        <div
            className="fixed inset-0 z-[200]"
            onClick={onClose}
        >
            {/* Light backdrop - no blur */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Compact Card Modal */}
            <div
                className="absolute top-20 right-4 md:right-20 w-80 bg-black border border-orange-500/30 rounded-xl shadow-2xl shadow-orange-900/30 animate-fade-slide-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors z-10"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* User Header */}
                <div className="p-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                        <img
                            src={user.picture}
                            alt={user.name}
                            className="w-12 h-12 rounded-full border-2 border-orange-500/50"
                        />
                        <div className="flex-1 min-w-0">
                            <h2 className="text-base font-semibold text-white truncate">
                                {profile.username || user.name}
                            </h2>
                            <p className="text-xs text-zinc-500 flex items-center gap-1 truncate">
                                <Mail className="w-3 h-3" />
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Plan Badge */}
                <div className="p-4 border-b border-zinc-800">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-wide">Current Plan</p>
                            <p className="text-sm font-semibold text-orange-500 flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Free Plan
                            </p>
                        </div>
                        <button className="text-xs px-3 py-1.5 bg-orange-500 text-zinc-950 rounded-full font-medium hover:bg-orange-400 transition-colors">
                            Upgrade
                        </button>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="p-4 space-y-2">
                    {profile.usecase && (
                        <div className="flex items-center gap-2 text-xs">
                            <Briefcase className="w-4 h-4 text-orange-500" />
                            <span className="text-zinc-400">Using for:</span>
                            <span className="text-white">{profile.usecase === 'personal' ? 'Personal' : profile.usecase === 'work' ? 'Work' : 'Both'}</span>
                        </div>
                    )}

                    {profile.teamsize && (
                        <div className="flex items-center gap-2 text-xs">
                            <Users className="w-4 h-4 text-orange-500" />
                            <span className="text-zinc-400">Team:</span>
                            <span className="text-white">{profile.teamsize}</span>
                        </div>
                    )}

                    {profile.goals && (
                        <div className="flex items-center gap-2 text-xs">
                            <Target className="w-4 h-4 text-orange-500" />
                            <span className="text-zinc-400">Goals:</span>
                            <span className="text-white truncate">{profile.goals}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

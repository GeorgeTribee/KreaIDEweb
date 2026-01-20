import React, { useState } from 'react';
import { X, ChevronRight, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const STEPS = [
    {
        id: 'username',
        title: 'Choose your username',
        subtitle: 'This is how others will see you'
    },
    {
        id: 'source',
        title: 'Where did you hear about Krea?',
        subtitle: 'Help us understand our community'
    },
    {
        id: 'usecase',
        title: 'How will you use Krea?',
        subtitle: 'We\'ll personalize your experience'
    },
    {
        id: 'teamsize',
        title: 'How many people in your team?',
        subtitle: 'Help us tailor recommendations'
    },
    {
        id: 'goals',
        title: 'What do you want to build?',
        subtitle: 'Tell us about your goals'
    }
];

const SOURCE_OPTIONS = [
    'Twitter/X', 'YouTube', 'Google Search', 'Friend or colleague', 'Reddit', 'Other'
];

const USECASE_OPTIONS = [
    { id: 'personal', label: 'Personal Projects', icon: '🏠' },
    { id: 'work', label: 'Work / Business', icon: '💼' },
    { id: 'both', label: 'Both', icon: '🔄' }
];

const TEAM_OPTIONS = [
    'Just me', '2-5 people', '6-15 people', '16-50 people', '50+ people'
];

export default function OnboardingModal() {
    const { user, showOnboarding, completeOnboarding } = useAuth();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        username: user?.name?.split(' ')[0] || '',
        source: '',
        usecase: '',
        teamsize: '',
        goals: ''
    });

    if (!showOnboarding) return null;

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            completeOnboarding(formData);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isStepValid = () => {
        const step = STEPS[currentStep];
        switch (step.id) {
            case 'username': return formData.username.trim().length >= 2;
            case 'source': return formData.source !== '';
            case 'usecase': return formData.usecase !== '';
            case 'teamsize': return formData.teamsize !== '';
            case 'goals': return formData.goals.trim().length >= 5;
            default: return true;
        }
    };

    const renderStepContent = () => {
        const step = STEPS[currentStep];

        switch (step.id) {
            case 'username':
                return (
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        placeholder="Enter your username"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors text-lg"
                        autoFocus
                    />
                );

            case 'source':
                return (
                    <div className="grid grid-cols-2 gap-3">
                        {SOURCE_OPTIONS.map((option) => (
                            <button
                                key={option}
                                onClick={() => setFormData({ ...formData, source: option })}
                                className={`p-4 rounded-xl border text-left transition-all ${formData.source === option
                                        ? 'border-orange-500 bg-orange-500/10 text-white'
                                        : 'border-zinc-800 hover:border-zinc-700 text-zinc-400'
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                );

            case 'usecase':
                return (
                    <div className="space-y-3">
                        {USECASE_OPTIONS.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setFormData({ ...formData, usecase: option.id })}
                                className={`w-full p-4 rounded-xl border flex items-center gap-4 transition-all ${formData.usecase === option.id
                                        ? 'border-orange-500 bg-orange-500/10 text-white'
                                        : 'border-zinc-800 hover:border-zinc-700 text-zinc-400'
                                    }`}
                            >
                                <span className="text-2xl">{option.icon}</span>
                                <span className="text-lg">{option.label}</span>
                                {formData.usecase === option.id && (
                                    <Check className="w-5 h-5 text-orange-500 ml-auto" />
                                )}
                            </button>
                        ))}
                    </div>
                );

            case 'teamsize':
                return (
                    <div className="space-y-3">
                        {TEAM_OPTIONS.map((option) => (
                            <button
                                key={option}
                                onClick={() => setFormData({ ...formData, teamsize: option })}
                                className={`w-full p-4 rounded-xl border text-left transition-all ${formData.teamsize === option
                                        ? 'border-orange-500 bg-orange-500/10 text-white'
                                        : 'border-zinc-800 hover:border-zinc-700 text-zinc-400'
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                );

            case 'goals':
                return (
                    <textarea
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        placeholder="e.g., Build a SaaS app, create personal portfolio, prototype ideas quickly..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none h-32"
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 overflow-y-auto">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative w-[90%] md:w-[50%] max-w-lg bg-black border border-orange-500/30 rounded-2xl p-8 shadow-2xl shadow-orange-900/20 animate-fade-slide-in mb-16">
                {/* Progress */}
                <div className="flex gap-1 mb-8">
                    {STEPS.map((_, index) => (
                        <div
                            key={index}
                            className={`flex-1 h-1 rounded-full transition-colors ${index <= currentStep ? 'bg-orange-500' : 'bg-zinc-800'
                                }`}
                        />
                    ))}
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white font-manrope">
                        {STEPS[currentStep].title}
                    </h2>
                    <p className="text-sm text-zinc-400 mt-2">
                        {STEPS[currentStep].subtitle}
                    </p>
                </div>

                {/* Content */}
                <div className="mb-8">
                    {renderStepContent()}
                </div>

                {/* Footer */}
                <div className="flex gap-3">
                    {currentStep > 0 && (
                        <button
                            onClick={handleBack}
                            className="px-6 py-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                        >
                            Back
                        </button>
                    )}
                    <button
                        onClick={handleNext}
                        disabled={!isStepValid()}
                        className={`flex-1 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all ${isStepValid()
                                ? 'bg-orange-500 text-zinc-950 hover:bg-orange-400 shadow-lg shadow-orange-500/40'
                                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            }`}
                    >
                        {currentStep === STEPS.length - 1 ? 'Complete Setup' : 'Continue'}
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

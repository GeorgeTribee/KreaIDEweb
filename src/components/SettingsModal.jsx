import React, { useState, useEffect } from 'react';
import { X, Zap, BookOpen, Rocket, ChevronRight, ChevronDown, Check, Play, Terminal, Wand2, Code, Layers, MessageSquare, FileCode, Copy, Sparkles, Layout, ShoppingCart, Users, Palette } from 'lucide-react';

export default function SettingsModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('upgrade');
    const [expandedSection, setExpandedSection] = useState(null);
    const [terminalText, setTerminalText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    const plans = [
        { name: 'Free', price: '$0', features: ['3 Projects', 'Basic AI', 'Community support'], current: true },
        { name: 'Pro', price: '$19', features: ['Unlimited Projects', 'Advanced AI', 'Priority support', 'Custom themes'], popular: true },
        { name: 'Ultra', price: '$49', features: ['Everything in Pro', 'Supabase integration', 'Stripe integration', 'SSO'] },
    ];

    // Terminal simulation for video tutorial
    const terminalDemo = `user ▸ Build a React pricing component with 3 tiers
ide ▸ Creating Pricing.jsx...
ide ▸ ✓ Component generated with Free, Pro, Ultra tiers
ide ▸ ✓ Added responsive grid layout
ide ▸ ✓ Styled with dark theme`;

    useEffect(() => {
        if (expandedSection === 'video' && terminalText === '') {
            let i = 0;
            const interval = setInterval(() => {
                if (i <= terminalDemo.length) {
                    setTerminalText(terminalDemo.slice(0, i));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 20);
            return () => clearInterval(interval);
        }
    }, [expandedSection]);

    // Cursor blink effect
    useEffect(() => {
        const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
        return () => clearInterval(cursorInterval);
    }, []);

    if (!isOpen) return null;

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
        if (section === 'video') setTerminalText('');
    };

    const promptExamples = [
        { prompt: "Build a todo app with add, complete, and delete", desc: "Simple CRUD operations" },
        { prompt: "Create a dark-themed dashboard with charts and stats cards", desc: "Complex layout" },
        { prompt: "Add user authentication with Google sign-in", desc: "Integration" },
        { prompt: "Make the navbar sticky and add a mobile hamburger menu", desc: "Responsive design" },
    ];

    const projectTemplates = [
        { icon: Layout, name: "Portfolio Website", desc: "Hero, projects, about, contact", tags: ["React", "Tailwind"] },
        { icon: ShoppingCart, name: "E-commerce Store", desc: "Products, cart, checkout", tags: ["React", "Stripe"] },
        { icon: Users, name: "SaaS Dashboard", desc: "Analytics, users, settings", tags: ["React", "Charts"] },
        { icon: Palette, name: "Blog Platform", desc: "Posts, comments, markdown", tags: ["React", "MDX"] },
    ];

    return (
        <div
            className="fixed inset-0 z-[200]"
            onClick={onClose}
        >
            {/* Light backdrop - no blur */}
            <div className="fixed inset-0 bg-black/50" />

            {/* Settings Card */}
            <div
                className="absolute top-16 right-4 md:right-10 w-[95vw] md:w-[600px] max-h-[85vh] bg-black border border-orange-500/30 rounded-xl shadow-2xl shadow-orange-900/30 animate-fade-slide-in overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                    <h2 className="text-lg font-semibold text-white font-manrope">Settings</h2>
                    <button
                        onClick={onClose}
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-zinc-800 overflow-x-auto">
                    {[
                        { id: 'upgrade', label: 'Upgrade', icon: Zap },
                        { id: 'howto', label: 'How to Use', icon: BookOpen },
                        { id: 'quickstart', label: 'Quick Start', icon: Rocket },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-3 text-xs font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                                ? 'text-orange-500 border-b-2 border-orange-500 -mb-px'
                                : 'text-zinc-400 hover:text-white'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-4 overflow-y-auto max-h-[calc(85vh-120px)]">
                    {/* Upgrade Plan Tab */}
                    {activeTab === 'upgrade' && (
                        <div className="grid md:grid-cols-3 gap-3">
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`p-4 rounded-xl border transition-all ${plan.popular
                                        ? 'border-orange-500/50 bg-orange-500/5'
                                        : 'border-zinc-800 hover:border-zinc-700'
                                        }`}
                                >
                                    {plan.popular && (
                                        <span className="text-[10px] text-orange-500 font-semibold uppercase tracking-wider">
                                            Popular
                                        </span>
                                    )}
                                    <h3 className="text-base font-semibold text-white mt-1">{plan.name}</h3>
                                    <p className="text-xl font-bold text-white mt-1">
                                        {plan.price}<span className="text-xs text-zinc-500">/mo</span>
                                    </p>
                                    <ul className="mt-3 space-y-1.5">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                                                <Check className="w-3 h-3 text-orange-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`w-full mt-3 py-2 rounded-full text-xs font-medium transition-all ${plan.current
                                            ? 'bg-zinc-800 text-zinc-400 cursor-default'
                                            : plan.popular
                                                ? 'bg-orange-500 text-zinc-950 hover:bg-orange-400'
                                                : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700'
                                            }`}
                                        disabled={plan.current}
                                    >
                                        {plan.current ? 'Current' : 'Upgrade'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* How to Use Tab */}
                    {activeTab === 'howto' && (
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/20">
                                <h3 className="text-base font-semibold text-white mb-2">What is Krea IDE?</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Krea is an AI-powered development environment that transforms natural language into production-ready code.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { icon: Terminal, title: 'AI Terminal', desc: 'Chat with AI to generate code' },
                                    { icon: Wand2, title: 'Smart Autocomplete', desc: 'AI-powered suggestions' },
                                    { icon: Code, title: 'Code Generation', desc: 'Full components & apps' },
                                    { icon: Layers, title: 'Multi-file Support', desc: 'Manage entire projects' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2 p-3 bg-zinc-900/50 rounded-lg">
                                        <feature.icon className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <div>
                                            <p className="text-xs font-medium text-white">{feature.title}</p>
                                            <p className="text-[11px] text-zinc-500">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quick Start Tab - Enhanced */}
                    {activeTab === 'quickstart' && (
                        <div className="space-y-3">
                            {/* Video Tutorial Section */}
                            <div className="border border-zinc-800 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleSection('video')}
                                    className="w-full flex items-center justify-between p-3 hover:bg-zinc-900/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-500/10 rounded-lg">
                                            <Play className="w-4 h-4 text-orange-500" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-sm font-medium text-white">Video Tutorial</h4>
                                            <p className="text-xs text-zinc-500">Watch the terminal in action</p>
                                        </div>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${expandedSection === 'video' ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedSection === 'video' && (
                                    <div className="p-3 pt-0">
                                        <div className="bg-zinc-950 rounded-lg p-3 font-mono text-xs border border-zinc-800">
                                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-zinc-800">
                                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="text-zinc-500 text-[10px] ml-2">krea terminal</span>
                                            </div>
                                            <pre className="text-zinc-300 whitespace-pre-wrap leading-relaxed">
                                                {terminalText}
                                                {showCursor && <span className="text-orange-500">▌</span>}
                                            </pre>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Build Your First App Section */}
                            <div className="border border-zinc-800 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleSection('build')}
                                    className="w-full flex items-center justify-between p-3 hover:bg-zinc-900/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-500/10 rounded-lg">
                                            <Rocket className="w-4 h-4 text-orange-500" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-sm font-medium text-white">Build Your First App</h4>
                                            <p className="text-xs text-zinc-500">Step-by-step guide</p>
                                        </div>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${expandedSection === 'build' ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedSection === 'build' && (
                                    <div className="p-3 pt-0 space-y-2">
                                        {[
                                            { step: 1, title: 'Click "Launch Krea IDE"', desc: 'Opens the development environment' },
                                            { step: 2, title: 'Type your idea', desc: 'e.g. "Create a todo app with dark theme"' },
                                            { step: 3, title: 'Watch it build', desc: 'AI generates all files automatically' },
                                            { step: 4, title: 'Preview & iterate', desc: 'See live preview, ask for changes' },
                                            { step: 5, title: 'Export & deploy', desc: 'Download code or deploy directly' },
                                        ].map((item) => (
                                            <div key={item.step} className="flex items-start gap-2 p-2 bg-zinc-900/30 rounded-lg">
                                                <div className="w-5 h-5 rounded-full bg-orange-500 text-zinc-950 text-[10px] font-bold flex items-center justify-center shrink-0">{item.step}</div>
                                                <div>
                                                    <p className="text-xs font-medium text-white">{item.title}</p>
                                                    <p className="text-[11px] text-zinc-500">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* AI Features Deep Dive Section */}
                            <div className="border border-zinc-800 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleSection('ai')}
                                    className="w-full flex items-center justify-between p-3 hover:bg-zinc-900/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-500/10 rounded-lg">
                                            <Sparkles className="w-4 h-4 text-orange-500" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-sm font-medium text-white">AI Prompt Examples</h4>
                                            <p className="text-xs text-zinc-500">How to describe your ideas</p>
                                        </div>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${expandedSection === 'ai' ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedSection === 'ai' && (
                                    <div className="p-3 pt-0 space-y-2">
                                        {promptExamples.map((item, i) => (
                                            <div key={i} className="p-2 bg-zinc-900/30 rounded-lg group">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] text-zinc-500 uppercase">{item.desc}</span>
                                                    <Copy className="w-3 h-3 text-zinc-600 group-hover:text-orange-500 cursor-pointer transition-colors" />
                                                </div>
                                                <p className="text-xs text-white mt-1 font-mono">&quot;{item.prompt}&quot;</p>
                                            </div>
                                        ))}
                                        <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                            <p className="text-[11px] text-orange-400"><strong>Tip:</strong> Be specific! Include theme, layout, features, and style preferences.</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Example Projects Section */}
                            <div className="border border-zinc-800 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleSection('templates')}
                                    className="w-full flex items-center justify-between p-3 hover:bg-zinc-900/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-500/10 rounded-lg">
                                            <FileCode className="w-4 h-4 text-orange-500" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-sm font-medium text-white">Project Templates</h4>
                                            <p className="text-xs text-zinc-500">Start from a template</p>
                                        </div>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${expandedSection === 'templates' ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedSection === 'templates' && (
                                    <div className="p-3 pt-0 grid grid-cols-2 gap-2">
                                        {projectTemplates.map((template, i) => (
                                            <div key={i} className="p-3 bg-zinc-900/30 rounded-lg hover:bg-zinc-900/50 transition-colors cursor-pointer group">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <template.icon className="w-4 h-4 text-orange-500" />
                                                    <span className="text-xs font-medium text-white group-hover:text-orange-400 transition-colors">{template.name}</span>
                                                </div>
                                                <p className="text-[10px] text-zinc-500 mb-2">{template.desc}</p>
                                                <div className="flex gap-1">
                                                    {template.tags.map((tag, j) => (
                                                        <span key={j} className="px-1.5 py-0.5 bg-zinc-800 rounded text-[9px] text-zinc-400">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

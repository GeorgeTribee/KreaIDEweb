import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Send, Copy, Check } from 'lucide-react';

// Pre-defined code templates for different components
const codeTemplates = {
    pricing: `import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
    const [billing, setBilling] = useState('monthly');

    const plans = [
        {
            name: "Free",
            price: billing === 'monthly' ? "0" : "0",
            description: "For personal projects.",
            features: ["3 Projects", "Basic support", "1GB Storage"],
            cta: "Get Started",
            highlight: false
        },
        {
            name: "Pro",
            price: billing === 'monthly' ? "19" : "15",
            description: "For professionals.",
            features: ["Unlimited Projects", "Priority support", "100GB Storage", "Custom domains"],
            cta: "Go Pro",
            highlight: true
        },
        {
            name: "Enterprise",
            price: billing === 'monthly' ? "49" : "39",
            description: "For large teams.",
            features: ["Everything in Pro", "SSO", "Dedicated support", "SLA"],
            cta: "Contact Sales",
            highlight: false
        }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-4">
                    Simple Pricing
                </h2>
                <div className="flex justify-center gap-4 mb-12">
                    <button onClick={() => setBilling('monthly')} 
                        className={\`px-4 py-2 rounded \${billing === 'monthly' ? 'bg-orange-500' : 'bg-zinc-800'}\`}>
                        Monthly
                    </button>
                    <button onClick={() => setBilling('yearly')}
                        className={\`px-4 py-2 rounded \${billing === 'yearly' ? 'bg-orange-500' : 'bg-zinc-800'}\`}>
                        Yearly
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className={\`p-8 rounded-xl border \${plan.highlight ? 'border-orange-500 bg-zinc-900' : 'border-zinc-800 bg-zinc-950'}\`}>
                            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                            <div className="text-4xl font-bold text-white mt-4">\${plan.price}<span className="text-sm text-zinc-400">/mo</span></div>
                            <p className="text-zinc-400 mt-2">{plan.description}</p>
                            <ul className="mt-6 space-y-3">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-zinc-300">
                                        <Check className="w-4 h-4 text-orange-500" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={\`w-full mt-8 py-3 rounded-lg font-medium \${plan.highlight ? 'bg-orange-500 text-black' : 'bg-zinc-800 text-white'}\`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}`,

    navbar: `import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="text-xl font-bold text-white">
                        Logo
                    </a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a key={link.name} href={link.href} 
                               className="text-zinc-400 hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <button className="px-4 py-2 bg-orange-500 text-black rounded-lg font-medium hover:bg-orange-400 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-zinc-800">
                        {links.map((link) => (
                            <a key={link.name} href={link.href}
                               className="block py-3 text-zinc-400 hover:text-white">
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full mt-4 px-4 py-3 bg-orange-500 text-black rounded-lg font-medium">
                            Get Started
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}`,

    footer: `import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    const links = {
        Product: ['Features', 'Pricing', 'Changelog', 'Docs'],
        Company: ['About', 'Blog', 'Careers', 'Contact'],
        Legal: ['Privacy', 'Terms', 'License'],
    };

    return (
        <footer className="bg-black border-t border-zinc-800 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Logo</h3>
                        <p className="text-zinc-400 text-sm">
                            Build amazing products with our platform.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-zinc-400 hover:text-white"><Github className="w-5 h-5" /></a>
                            <a href="#" className="text-zinc-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-zinc-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold mb-4">{category}</h4>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-zinc-400 hover:text-white text-sm">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-sm">
                    © {new Date().getFullYear()} Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}`,

    hero: `import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-400 text-sm">New Feature Available</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Build Amazing
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Products</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                    The modern platform for building beautiful, responsive websites and applications with ease.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-colors flex items-center justify-center gap-2">
                        Get Started <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-colors">
                        View Demo
                    </button>
                </div>
            </div>
        </section>
    );
}`,

    card: `import React from 'react';

export default function Card({ title, description, image, tags }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-colors group">
            <div className="aspect-video bg-zinc-800 overflow-hidden">
                <img src={image || '/placeholder.jpg'} alt={title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
                <div className="flex gap-2 mb-3">
                    {tags?.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm">{description}</p>
            </div>
        </div>
    );
}`,

    button: `import React from 'react';

export default function Button({ children, variant = 'primary', size = 'md', ...props }) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors";
    
    const variants = {
        primary: "bg-orange-500 text-black hover:bg-orange-400",
        secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
        outline: "border border-orange-500 text-orange-500 hover:bg-orange-500/10",
        ghost: "text-zinc-400 hover:text-white hover:bg-zinc-800",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`} {...props}>
            {children}
        </button>
    );
}`
};

// Detect what component the user is asking for
const detectComponentRequest = (input) => {
    const lower = input.toLowerCase();

    // Keywords for each component type
    const patterns = {
        pricing: ['pricing', 'price', 'plan', 'subscription', 'tier'],
        navbar: ['navbar', 'nav', 'navigation', 'header', 'menu'],
        footer: ['footer', 'bottom'],
        hero: ['hero', 'landing', 'banner', 'headline', 'main section'],
        card: ['card', 'tile', 'item'],
        button: ['button', 'btn', 'cta'],
    };

    for (const [component, keywords] of Object.entries(patterns)) {
        if (keywords.some(keyword => lower.includes(keyword))) {
            return component;
        }
    }
    return null;
};

// Check if input looks like a component generation request
const isComponentRequest = (input) => {
    const lower = input.toLowerCase();
    const actionWords = ['create', 'make', 'build', 'generate', 'i want', 'i need', 'give me', 'show me', 'add', 'design'];
    const componentWords = ['component', 'section', 'page', 'ui', 'interface', 'navbar', 'footer', 'header', 'pricing', 'hero', 'card', 'button', 'nav', 'menu'];

    const hasAction = actionWords.some(word => lower.includes(word));
    const hasComponent = componentWords.some(word => lower.includes(word));

    return hasAction || hasComponent;
};

export default function Hero() {
    const [history, setHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [kreaInstalled, setKreaInstalled] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    // Focus input on mount
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Stream code with typing effect
    const streamCode = async (code, componentName) => {
        setHistory(prev => [...prev, { type: 'output', content: `Analyzing request...` }]);
        await new Promise(r => setTimeout(r, 500));

        setHistory(prev => [...prev, { type: 'output', content: `Generating ${componentName} component...` }]);
        await new Promise(r => setTimeout(r, 800));

        // Add code window entry
        setHistory(prev => [...prev, { type: 'code-stream', content: '', filename: `${componentName}.jsx` }]);

        // Stream the code
        for (let i = 0; i <= code.length; i += Math.floor(Math.random() * 8) + 4) {
            const currentCode = code.slice(0, i);
            setHistory(prev => {
                const newHistory = [...prev];
                newHistory[newHistory.length - 1].content = currentCode;
                return newHistory;
            });
            await new Promise(r => setTimeout(r, 8));
        }

        // Ensure complete code is shown
        setHistory(prev => {
            const newHistory = [...prev];
            newHistory[newHistory.length - 1].content = code;
            return newHistory;
        });

        await new Promise(r => setTimeout(r, 300));
        setHistory(prev => [...prev, {
            type: 'output',
            content: `✓ Component generated successfully!\n\nFile saved to: src/components/${componentName}.jsx\n\nYou can now import it with:\nimport ${componentName} from './components/${componentName}';`
        }]);
    };

    // Simulated command responses
    const processCommand = async (command) => {
        const cmd = command.trim().toLowerCase();

        // Add command to history
        setHistory(prev => [...prev, { type: 'input', content: command }]);
        setCommandHistory(prev => [...prev, command]);
        setHistoryIndex(-1);
        setIsProcessing(true);

        // Simulate processing delay
        await new Promise(r => setTimeout(r, 300 + Math.random() * 300));

        // Check if Krea is installed first - only allow install command and basic commands before installation
        if (!kreaInstalled) {
            if (cmd === 'npm i krea-ide@latest' || cmd === 'npm install krea-ide@latest') {
                // Krea installation animation
                setHistory(prev => [...prev, { type: 'output', content: 'Installing krea-ide@latest...' }]);
                await new Promise(r => setTimeout(r, 600));

                setHistory(prev => [...prev, { type: 'output', content: '[....................] \\ - resolving: krea-ide@latest' }]);
                await new Promise(r => setTimeout(r, 500));

                setHistory(prev => [...prev, { type: 'output', content: '[####................] \\ - reify: react@18.2.0' }]);
                await new Promise(r => setTimeout(r, 400));

                setHistory(prev => [...prev, { type: 'output', content: '[########............] \\ - reify: react-dom@18.2.0' }]);
                await new Promise(r => setTimeout(r, 350));

                setHistory(prev => [...prev, { type: 'output', content: '[##########..........] \\ - reify: tailwindcss@3.4.0' }]);
                await new Promise(r => setTimeout(r, 400));

                setHistory(prev => [...prev, { type: 'output', content: '[############........] \\ - reify: @radix-ui/react-slot' }]);
                await new Promise(r => setTimeout(r, 350));

                setHistory(prev => [...prev, { type: 'output', content: '[##############......] \\ - reify: class-variance-authority' }]);
                await new Promise(r => setTimeout(r, 300));

                setHistory(prev => [...prev, { type: 'output', content: '[################....] \\ - reify: shadcn-ui@latest' }]);
                await new Promise(r => setTimeout(r, 400));

                setHistory(prev => [...prev, { type: 'output', content: '[##################..] \\ - reify: lucide-react' }]);
                await new Promise(r => setTimeout(r, 350));

                setHistory(prev => [...prev, { type: 'output', content: '[####################] ✓ - complete' }]);
                await new Promise(r => setTimeout(r, 400));

                setHistory(prev => [...prev, {
                    type: 'output',
                    content: `
added 247 packages in 4.2s

Packages installed:
  ✓ react@18.2.0
  ✓ react-dom@18.2.0  
  ✓ tailwindcss@3.4.0
  ✓ shadcn-ui@latest
  ✓ lucide-react@0.294.0
  ✓ + 242 dependencies

✓ krea-ide@latest installed successfully!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To launch Krea IDE, run:

  $ krea

or

  $ launch krea

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
                }]);

                setKreaInstalled(true);
                setIsProcessing(false);
                return;
            } else if (cmd === 'clear' || cmd === 'cls') {
                setHistory([]);
                setIsProcessing(false);
                return;
            } else {
                setHistory(prev => [...prev, {
                    type: 'output',
                    content: `Krea IDE is not installed.

To install Krea IDE, run:

  $ npm i krea-ide@latest`
                }]);
                setIsProcessing(false);
                return;
            }
        }

        // Krea is installed - check if it's a component generation request
        if (isComponentRequest(command)) {
            const componentType = detectComponentRequest(command);
            if (componentType && codeTemplates[componentType]) {
                const componentName = componentType.charAt(0).toUpperCase() + componentType.slice(1);
                await streamCode(codeTemplates[componentType], componentName);
                setIsProcessing(false);
                return;
            }
        }

        // Command responses (only available after Krea installation)
        if (cmd === 'clear' || cmd === 'cls') {
            setHistory([]);
        } else if (cmd === 'ls' || cmd === 'dir') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: `node_modules/    package.json    src/
public/          README.md       vite.config.js
package-lock.json                tailwind.config.js`
            }]);
        } else if (cmd === 'pwd') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: '/Users/developer/projects/krea-ide'
            }]);
        } else if (cmd === 'date') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: new Date().toString()
            }]);
        } else if (cmd === 'whoami') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: 'developer'
            }]);
        } else if (cmd.startsWith('echo ')) {
            const text = command.slice(5);
            setHistory(prev => [...prev, {
                type: 'output',
                content: text
            }]);
        } else if (cmd === 'node -v' || cmd === 'node --version') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: 'v20.10.0'
            }]);
        } else if (cmd === 'npm -v' || cmd === 'npm --version') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: '10.2.3'
            }]);
        } else if (cmd === 'krea' || cmd === 'launch krea') {
            setHistory(prev => [...prev, { type: 'output', content: 'Launching Krea IDE...' }]);
            await new Promise(r => setTimeout(r, 500));
            setHistory(prev => [...prev, {
                type: 'output',
                content: `🚀 Krea IDE v1.0.0

Welcome to Krea Terminal IDE!
An AI-powered React IDE that runs in your terminal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Select a mode:

  1. components  - Generate individual React components
  2. ui          - Build complete UI interfaces  
  3. websites    - Create full websites

Or just describe what you want to build:
  • "create a pricing section with 3 plans"
  • "make a responsive navbar"
  • "generate a footer component"
  • "build a hero section"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
            }]);
        } else if (cmd === 'components') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: `Component mode activated.
What component do you need? (e.g., "pricing section", "navbar", "footer")`
            }]);
        } else if (cmd === 'ui') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: `UI mode activated.
Describe the interface you want to build.`
            }]);
        } else if (cmd === 'websites') {
            setHistory(prev => [...prev, {
                type: 'output',
                content: `Website mode activated.
What kind of website do you want to create?`
            }]);
        } else if (cmd === '' || !cmd) {
            // Empty command, do nothing
        } else {
            setHistory(prev => [...prev, {
                type: 'output',
                content: `command not found: ${command}

Try 'krea' to launch Krea IDE or describe what you want to build.`
            }]);
        }

        setIsProcessing(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() && !isProcessing) {
            processCommand(inputValue);
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                setInputValue(commandHistory[commandHistory.length - 1 - newIndex] || '');
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInputValue(commandHistory[commandHistory.length - 1 - newIndex] || '');
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInputValue('');
            }
        }
    };

    const clearTerminal = () => {
        setHistory([]);
    };

    return (
        <section className="flex flex-col overflow-hidden selection:selection:text-white text-white w-full pt-32 pb-20 relative" id="hero">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f9731622,_transparent_55%),radial-gradient(circle_at_bottom,_#fb923c11,_transparent_60%),linear-gradient(to_right,#020617,#020617)] pointer-events-none -z-0"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-orange-700/5 blur-[140px] pointer-events-none -z-0"></div>

            <div className="md:px-6 flex flex-col w-full max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative items-center">

                <div className="w-px hidden md:block overflow-hidden bg-gradient-to-b from-transparent via-orange-900/60 to-transparent h-full absolute top-0 left-4">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-v"></div>
                </div>

                <div className="absolute top-0 right-4 h-full w-px bg-gradient-to-b from-transparent via-orange-900/60 to-transparent hidden md:block overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-v"></div>
                </div>

                <div className="text-center max-w-4xl mx-auto mb-16 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-500/30 bg-orange-950/30 mb-10 animate-fade-slide-in font-geist-mono">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-orange-400 opacity-60"></span>
                            <span className="relative inline-flex h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-xs font-medium text-orange-300 uppercase tracking-[0.25em]">
                            Krea terminal ide · v1.0
                        </span>
                    </div>

                    <h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium tracking-tight mb-5 bg-clip-text text-transparent bg-gradient-to-br from-orange-200 via-white to-orange-500/40 animate-fade-slide-in font-geist delay-100">
                        Launch an AI‑Powered React IDE
                        <span className="block text-zinc-400/90">
                            directly from your terminal.
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed animate-fade-slide-in font-geist delay-200">
                        Spin up a terminal IDE, chat with AI, and live‑generate React + TailwindCSS + shadcn/ui components, interfaces, and full websites — without leaving the command line.
                    </p>
                </div>

                <div className="flex w-screen mb-16 relative items-center justify-center animate-fade-slide-in delay-300">
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-900 to-orange-900 w-full max-w-[calc(50%-100px)] relative overflow-hidden group">
                        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-beam-h"></div>
                    </div>

                    <button className="relative z-20 inline-block whitespace-nowrap text-xs uppercase font-medium text-orange-50 bg-black border-orange-400 border mr-5 ml-5 pt-3 pr-7 pb-3 pl-7 no-underline before:absolute before:-left-[2px] before:top-[6px] before:h-[calc(100%-12px)] before:w-[calc(100%+4px)] before:bg-black before:content-[''] before:transition-transform before:duration-300 before:ease-in-out before:scale-y-100 hover:before:scale-y-0 after:absolute after:-top-[2px] after:left-[6px] after:h-[calc(100%+4px)] after:w-[calc(100%-12px)] after:bg-black after:content-[''] after:transition-transform after:duration-300 after:delay-500 after:ease-in-out after:scale-x-100 hover:after:scale-x-0 font-geist-mono tracking-[0.2em]">
                        <span className="relative z-10">krea ide . launch</span>
                    </button>

                    <div className="h-px bg-gradient-to-l from-transparent via-orange-900 to-orange-900 w-full max-w-[calc(50%-100px)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-transparent via-orange-500 to-transparent animate-beam-h-rev"></div>
                    </div>
                </div>

                {/* INTERACTIVE TERMINAL */}
                <div className="min-h-[400px] flex animate-fade-slide-in delay-500 w-full max-w-6xl mr-auto ml-auto relative justify-center">
                    <div className="pointer-events-none z-0 hidden md:block w-full h-full absolute top-0 right-0 bottom-0 left-0">
                        <div className="absolute top-[35%] left-0 right-0 h-px bg-orange-500/5 -translate-y-1/2 overflow-hidden"></div>
                    </div>

                    <div className="z-10 w-full max-w-4xl mt-10 relative font-geist-mono">
                        <div className="shadow-black/60 transition-shadow bg-black border-orange-500/40 border ring-0 pt-2 pr-2 pb-2 pl-2 shadow-2xl">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-orange-500/20 bg-zinc-950">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 cursor-pointer hover:bg-rose-400 transition-colors"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 cursor-pointer hover:bg-amber-300 transition-colors"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500/80 cursor-pointer hover:bg-orange-400 transition-colors"></div>
                                    <span className="text-[0.65rem] uppercase tracking-[0.22em] text-zinc-500 ml-3">
                                        krea / ai-terminal-ide
                                    </span>
                                </div>
                                <span className="text-[0.65rem] text-orange-400 tracking-[0.2em] uppercase">
                                    Krea IDE
                                </span>
                            </div>

                            {/* Interactive Terminal Body */}
                            <div
                                className="bg-[#020617] p-5 min-h-[350px] flex flex-col gap-3 border border-orange-500/10 font-geist-mono text-xs overflow-hidden relative cursor-text"
                                onClick={() => inputRef.current?.focus()}
                            >
                                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%]"></div>

                                <div className="space-y-3 z-10 flex-1 overflow-y-auto max-h-[400px] scrollbar-hide" ref={scrollRef}>
                                    {/* Welcome message */}
                                    {history.length === 0 && (
                                        <div className="text-zinc-500 animate-fade-in">
                                            <div className="text-orange-400 mb-2">Welcome to Krea Terminal</div>
                                            <div className="mb-3">To get started, install Krea IDE:</div>
                                            <div className="text-zinc-300 bg-zinc-900/50 px-3 py-2 border border-orange-500/20 inline-block">
                                                $ npm i krea-ide@latest
                                            </div>
                                        </div>
                                    )}

                                    {history.map((entry, i) => (
                                        <div key={i} className="animate-fade-in">
                                            {entry.type === 'input' ? (
                                                <div className="flex items-start">
                                                    <span className="text-orange-400 mr-2">user ▸</span>
                                                    <span className="text-zinc-200">{entry.content}</span>
                                                </div>
                                            ) : entry.type === 'code-stream' ? (
                                                <div className="mt-2 mb-2 bg-zinc-900/80 rounded border border-orange-500/20 overflow-hidden">
                                                    <div className="flex items-center justify-between px-3 py-2 bg-zinc-800/50 border-b border-orange-500/10">
                                                        <span className="text-[0.65rem] text-orange-400 font-medium">{entry.filename || 'Component.jsx'}</span>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[0.6rem] text-zinc-500">React + TailwindCSS</span>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    navigator.clipboard.writeText(entry.content);
                                                                    setCopiedIndex(i);
                                                                    setTimeout(() => setCopiedIndex(null), 2000);
                                                                }}
                                                                className="flex items-center gap-1 px-2 py-1 text-[0.6rem] text-zinc-400 hover:text-orange-400 hover:bg-zinc-700/50 rounded transition-all cursor-pointer"
                                                                title="Copy code"
                                                            >
                                                                {copiedIndex === i ? (
                                                                    <><Check className="w-3 h-3 text-green-400" /><span className="text-green-400">Copied!</span></>
                                                                ) : (
                                                                    <><Copy className="w-3 h-3" /><span>Copy</span></>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 text-[0.65rem] leading-relaxed overflow-x-auto max-h-[300px] overflow-y-auto scrollbar-hide">
                                                        <pre className="font-geist-mono">
                                                            {(() => {
                                                                const highlightCode = (code) => {
                                                                    if (!code) return null;
                                                                    const parts = code.split(/(\b(?:export|default|function|const|let|var|return|import|from|if|else|async|await|true|false|null|undefined)\b|"[^"]*"|'[^']*'|`[^`]*`|[{}[\](),.<>=;:]|\b\d+\b)/g);
                                                                    return parts.map((part, index) => {
                                                                        if (/^(export|default|function|const|let|var|return|import|from|if|else|async|await)$/.test(part)) {
                                                                            return <span key={index} className="text-purple-400">{part}</span>;
                                                                        } else if (/^(true|false|null|undefined)$/.test(part)) {
                                                                            return <span key={index} className="text-orange-400">{part}</span>;
                                                                        } else if (/^"[^"]*"$/.test(part) || /^'[^']*'$/.test(part) || /^`[^`]*`$/.test(part)) {
                                                                            return <span key={index} className="text-green-300">{part}</span>;
                                                                        } else if (/^[{}[\](),.<>=;:]$/.test(part)) {
                                                                            return <span key={index} className="text-zinc-500">{part}</span>;
                                                                        } else if (/^\d+$/.test(part)) {
                                                                            return <span key={index} className="text-cyan-400">{part}</span>;
                                                                        } else if (/^[A-Z][a-zA-Z0-9]*$/.test(part)) {
                                                                            return <span key={index} className="text-yellow-200">{part}</span>;
                                                                        } else {
                                                                            return <span key={index} className="text-zinc-300">{part}</span>;
                                                                        }
                                                                    });
                                                                };
                                                                return highlightCode(entry.content);
                                                            })()}
                                                        </pre>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex items-start">
                                                    <span className="text-orange-500 mr-2">ide ▸</span>
                                                    <span className="text-zinc-400 whitespace-pre-wrap">{entry.content}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Active Input Line */}
                                    <form onSubmit={handleSubmit} className="flex items-center gap-2 text-xs z-10 min-h-[20px]">
                                        <span className="text-orange-400">user ▸</span>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            disabled={isProcessing}
                                            className="flex-1 bg-transparent text-zinc-200 outline-none border-none caret-orange-500 placeholder:text-zinc-600"
                                            placeholder={isProcessing ? "Processing..." : "Type a command..."}
                                            autoComplete="off"
                                            spellCheck="false"
                                        />
                                        <span className={`w-2 h-4 bg-orange-500/50 ${isProcessing ? 'animate-pulse' : 'animate-blink'}`}></span>
                                    </form>

                                </div>
                            </div>

                            {/* Terminal Footer Controls */}
                            <div className="flex items-center justify-between mt-3 px-3 pb-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500">
                                        modes
                                    </span>
                                    <div className="flex gap-1 text-[0.65rem]">
                                        <span className="px-2 py-1 border border-orange-500/40 text-orange-300 bg-black/60">
                                            interactive
                                        </span>
                                        <span className="px-2 py-1 border border-orange-500/20 text-zinc-400 bg-black/40">
                                            chat
                                        </span>
                                        <span className="px-2 py-1 border border-orange-500/20 text-zinc-400 bg-black/40">
                                            generate ui
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        className="hover:bg-zinc-900 hover:text-orange-300 flex transition-all text-orange-400 bg-black/80 w-9 h-9 border-orange-500/40 border items-center justify-center cursor-pointer"
                                        onClick={clearTerminal}
                                        title="Clear terminal"
                                    >
                                        <Terminal className="w-4 h-4" strokeWidth={1.5} />
                                    </button>
                                    <button
                                        className="hover:bg-orange-500 hover:text-black flex transition-all text-orange-300 bg-orange-600/80 w-9 h-9 border-orange-400 border items-center justify-center cursor-pointer active:scale-95"
                                        onClick={handleSubmit}
                                        disabled={isProcessing || !inputValue.trim()}
                                        title="Run command"
                                    >
                                        <Send className="w-4 h-4" strokeWidth={1.5} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 opacity-70 mt-16 items-center font-geist-mono">
                    <div className="flex items-center gap-2 text-orange-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase">
                        <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                        <span>react + tailwindcss + shadcn/ui · generated straight from terminal</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

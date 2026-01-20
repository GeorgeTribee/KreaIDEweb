import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, ArrowUpRight, Braces, Cpu } from 'lucide-react';
import clsx from 'clsx';

export default function Features() {
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef([]);
    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

    const tabs = [
        {
            title: "Chat‑Driven Component Generation",
            description: "Describe a React component, UI section, or full page in plain language. The IDE streams back React + TailwindCSS + shadcn/ui code directly in your terminal."
        },
        {
            title: "IDE Commands & Refactors",
            description: "Use commands like :extract-component or :add-variant to refactor existing files without opening your GUI editor."
        },
        {
            title: "Full App Scaffolding",
            description: "Spin up dashboards, marketing sites, or internal tools. The AI wires layouts, navigation, and shadcn/ui primitives into a cohesive React app."
        }
    ];

    useEffect(() => {
        const activeEl = tabsRef.current[activeTab];
        if (activeEl) {
            setIndicatorStyle({
                top: activeEl.offsetTop,
                height: activeEl.offsetHeight
            });
        }
    }, [activeTab]);

    return (
        <section className="bg-zinc-950/50 border-orange-500/20 border-t pt-32 pb-32 relative" id="features">
            <div className="animate-fade-slide-in max-w-7xl border-orange-500/20 border mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full gap-x-16 gap-y-16 items-center">
                    {/* LEFT COLUMN: Features Grid */}
                    <div className="grid grid-cols-2 animate-fade-slide-in w-full gap-x-4 gap-y-4">
                        <div className="bg-black border border-orange-500/40 rounded-none p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden group hover:border-orange-400 transition-all duration-300 animate-fade-slide-in">
                            <div className="absolute top-0 right-0 bottom-0 left-0"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-400/60"></div>

                            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-[80px] pointer-events-none group-hover:bg-orange-500/20 transition-colors">
                            </div>

                            <div className="flex items-center gap-4 z-10">
                                <span className="text-6xl text-orange-300 tracking-tight font-manrope font-medium">
                                    10x
                                </span>
                                <div className="flex flex-col justify-center h-full pt-1">
                                    <span className="text-[10px] uppercase tracking-[0.28em] text-orange-400 font-semibold mb-1 font-geist-mono">
                                        ship speed
                                    </span>
                                    <div className="h-0.5 w-16 bg-zinc-900 overflow-hidden">
                                        <div className="h-full w-full bg-orange-400 origin-left animate-shimmer"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px] font-medium font-geist">
                                Go from prompt to React + TailwindCSS + shadcn/ui code in seconds — inside a familiar terminal flow.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-black border border-orange-500/30 rounded-none p-8 flex-1 flex flex-col justify-center gap-3 hover:bg-zinc-950 hover:border-orange-400/70 transition-all duration-300 group relative overflow-hidden animate-fade-slide-in">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731611_1px,transparent_1px),linear-gradient(to_bottom,#f9731611_1px,transparent_1px)] bg-[size:24px_24px] opacity-70">
                                </div>
                                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/40 group-hover:border-orange-300 transition-colors">
                                </div>

                                <div className="relative z-10 flex items-center justify-between animate-fade-slide-in">
                                    <div className="w-12 h-12 bg-zinc-950 border border-orange-500/40 flex items-center justify-center text-orange-300 group-hover:text-orange-200 group-hover:border-orange-300/70 transition-all rounded-none">
                                        <MessageSquare className="text-base" strokeWidth={1.5} />
                                    </div>
                                    <ArrowUpRight className="text-zinc-600 group-hover:text-orange-200 transition-colors" strokeWidth={1.5} />
                                </div>
                                <span className="relative z-10 text-zinc-200 text-sm font-medium font-geist group-hover:text-white mt-2">
                                    Natural language → IDE actions
                                </span>
                                <p className="relative z-10 text-xs text-zinc-500 font-geist">
                                    Type how you think: generate pages, tweak components, refactor props — all via chat.
                                </p>
                            </div>

                            <div className="bg-black border border-orange-500/30 rounded-none p-8 flex-1 flex flex-col justify-center gap-3 hover:bg-zinc-950 hover:border-orange-400/70 transition-all duration-300 group relative overflow-hidden animate-fade-slide-in">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731611_1px,transparent_1px),linear-gradient(to_bottom,#f9731611_1px,transparent_1px)] bg-[size:24px_24px] opacity-70">
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/40 group-hover:border-orange-300 transition-colors">
                                </div>

                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="w-12 h-12 bg-zinc-950 border border-orange-500/40 flex items-center justify-center text-orange-300 group-hover:text-orange-200 group-hover:border-orange-300/70 transition-all rounded-none">
                                        <Braces className="text-base" strokeWidth={1.5} />
                                    </div>
                                    <ArrowUpRight className="text-zinc-600 group-hover:text-orange-200 transition-colors" strokeWidth={1.5} />
                                </div>
                                <span className="relative z-10 text-zinc-200 text-sm font-medium font-geist group-hover:text-white mt-2">
                                    Production React code
                                </span>
                                <p className="relative z-10 text-xs text-zinc-500 font-geist">
                                    Clean, typed components using TailwindCSS and shadcn/ui primitives — no lock‑in magic.
                                </p>
                            </div>
                        </div>

                        {/* IDE Generation Preview Tile */}
                        <div className="col-span-2 bg-black rounded-none relative overflow-hidden min-h-[300px] flex items-end group border border-orange-500/20 hover:border-orange-400/60 transition-all duration-500 animate-fade-slide-in">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731611_1px,transparent_1px),linear-gradient(to_bottom,#f9731611_1px,transparent_1px)] bg-[size:24px_24px] opacity-60">
                            </div>
                            <div className="bg-gradient-to-t from-black via-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0">
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[85%]">
                                <div className="bg-zinc-950/95 backdrop-blur-xl border border-orange-500/40 p-1 shadow-2xl shadow-black/60 transform group-hover:-translate-y-2 transition-transform duration-500 rounded-none">
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-orange-500/20 bg-black/80">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 bg-orange-500/60"></div>
                                            <div className="w-2 h-2 bg-orange-500/40"></div>
                                        </div>
                                        <div className="text-[0.65rem] font-geist-mono text-orange-400/80 tracking-[0.2em] uppercase">
                                            krea · generating react ui...
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-5">
                                        <div className="flex gap-5 items-start">
                                            <div className="w-16 h-16 bg-gradient-to-br from-orange-900/40 to-orange-500/30 border border-orange-500/50 animate-pulse flex items-center justify-center rounded-none">
                                                <Cpu className="text-orange-300 text-xl" strokeWidth={1.5} />
                                            </div>
                                            <div className="flex-1 space-y-3 py-1 text-xs font-geist-mono text-zinc-300">
                                                <div className="h-2 bg-zinc-900/80 w-3/4 rounded"></div>
                                                <div className="h-2 bg-zinc-900/80 w-1/2 rounded"></div>
                                                <div className="h-2 bg-zinc-900/80 w-5/6 rounded"></div>
                                                <div className="pt-2 text-[0.7rem] text-orange-300">
                                                    <span className="text-orange-500 mr-1">[ai]</span> wiring components:
                                                    <span className="text-orange-200 ml-1">layout</span>,
                                                    <span className="text-orange-200">navigation</span>,
                                                    <span className="text-orange-200">section blocks</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-3 border-t border-orange-500/20">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-orange-500 animate-pulse"></div>
                                                <span className="text-[0.65rem] text-orange-200 font-geist-mono uppercase tracking-[0.22em]">
                                                    processing prompt
                                                </span>
                                            </div>
                                            <span className="text-[0.65rem] text-zinc-500 font-geist-mono">
                                                742 ms
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Tabs */}
                    <div className="flex flex-col lg:pl-4 animate-fade-slide-in pl-0 justify-center">
                        <div className="flex items-center gap-2 text-orange-400 text-xs font-medium mb-8 font-geist-mono">
                            <div className="w-1 h-1 bg-orange-400"></div>
                            <span className="uppercase tracking-[0.28em] text-zinc-500">
                                terminal workflows
                            </span>
                        </div>

                        <h2 className="md:text-4xl leading-[1.15] animate-fade-slide-in text-3xl font-medium text-white tracking-tight font-manrope mb-10">
                            Use your terminal as an
                            <span className="text-orange-300"> AI‑driven IDE.</span>
                        </h2>

                        {/* Tab Wrapper */}
                        <div className="border-orange-500/30 border-l pl-8 relative space-y-0">
                            <div
                                className="absolute left-[-1px] w-[1px] bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
                            >
                            </div>

                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    ref={el => tabsRef.current[index] = el}
                                    className={clsx(
                                        "group animate-fade-slide-in pb-10 cursor-pointer relative",
                                        activeTab === index ? "active" : ""
                                    )}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <div className="pointer-events-none">
                                        <h3 className={clsx(
                                            "text-base font-medium font-geist mb-3 transition-colors duration-300",
                                            activeTab === index ? "text-white" : "text-zinc-500 group-hover:text-white"
                                        )}>
                                            {tab.title}
                                        </h3>
                                        <p className={clsx(
                                            "text-sm leading-relaxed font-medium font-geist max-w-md transition-colors duration-300",
                                            activeTab === index ? "text-zinc-400" : "text-zinc-600 group-hover:text-zinc-400"
                                        )}>
                                            {tab.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="animate-fade-slide-in mt-10">
                            <button className="bg-orange-500 text-black px-7 py-3 rounded-none text-xs hover:bg-orange-400 transition-all shadow-[0_0_18px_-5px_rgba(249,115,22,0.9)] active:translate-y-0.5 font-semibold font-geist-mono tracking-[0.24em] uppercase animate-fade-slide-in">
                                npm i krea-ide@latest
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

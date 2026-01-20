import React from 'react';
import { GitBranch, MonitorPlay, ArrowUpRight } from 'lucide-react';

export default function Architecture() {
    return (
        <section className="overflow-hidden pt-32 pb-32 relative" id="testimonial">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-orange-900/25 via-transparent to-orange-700/20 blur-3xl -z-10"></div>

            <div className="animate-fade-slide-in max-w-7xl mr-auto ml-auto pr-6 pl-6">
                <div className="flex flex-col gap-16 w-full max-w-[1400px] mr-auto ml-auto gap-x-12 gap-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col animate-fade-slide-in max-w-xl gap-x-8 gap-y-8">
                            <div className="animate-fade-slide-in">
                                <span className="inline-flex items-center px-3 py-1 bg-orange-950/30 border border-orange-500/30 text-[0.7rem] text-orange-300 uppercase mb-6 font-semibold tracking-[0.28em] font-geist-mono">
                                    ide architecture
                                </span>
                                <h2 className="text-3xl lg:text-4xl text-white mb-5 leading-[1.1] tracking-tight font-manrope font-medium">
                                    Intelligent terminal‑native
                                    <span className="text-orange-300"> UI assembly engine.</span>
                                </h2>
                                <p className="text-base text-zinc-400 leading-relaxed font-medium font-geist">
                                    Krea parses your chat and commands to build semantic React trees. It maps terminal intent to TailwindCSS layout and shadcn/ui primitives — so you stay in the flow.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 animate-fade-slide-in gap-x-6 gap-y-6">
                                <div className="flex flex-col gap-3 group">
                                    <div className="w-10 h-10 flex items-center justify-center text-orange-300 bg-black border border-orange-500/30 group-hover:border-orange-400 transition-colors">
                                        <GitBranch className="text-sm" strokeWidth={1.5} />
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-snug font-medium font-geist">
                                        Understands component hierarchies and state flows from natural language.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 group">
                                    <div className="w-10 h-10 flex items-center justify-center text-orange-300 bg-black border border-orange-500/30 group-hover:border-orange-400 transition-colors">
                                        <MonitorPlay className="text-sm" strokeWidth={1.5} />
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-snug font-medium font-geist">
                                        Generates responsive layouts that feel native to your existing React codebase.
                                    </p>
                                </div>
                            </div>

                            <div className="animate-fade-slide-in pt-4">
                                <button className="bg-orange-500 text-black px-7 py-3 text-xs hover:bg-orange-400 transition-all shadow-[0_0_18px_-5px_rgba(249,115,22,0.9)] active:translate-y-0.5 font-semibold font-geist-mono tracking-[0.24em] uppercase animate-fade-slide-in">
                                    run krea ide
                                </button>
                            </div>
                        </div>

                        {/* Right card - Visualization */}
                        <div className="overflow-hidden shadow-orange-900/5 group hover:border-orange-500/40 transition-colors duration-500 animate-fade-slide-in bg-black border-orange-500/30 border relative shadow-2xl min-h-[400px] flex flex-col">
                            <div className="flex items-center justify-between px-4 py-2 border-b border-orange-500/20 bg-zinc-950">
                                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500 font-geist-mono">
                                    AST Visualization
                                </span>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                                    <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                                </div>
                            </div>
                            <div className="p-6 font-geist-mono text-xs text-zinc-400 overflow-hidden relative flex-1">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
                                <pre className="leading-relaxed">
                                    <span className="text-orange-500">const</span> <span className="text-yellow-200">App</span> = () ={'>'} {'{'}{'\n'}
                                    {'  '}<span className="text-orange-500">return</span> (<br />
                                    {'    '}<span className="text-blue-300">&lt;Layout&gt;</span><br />
                                    {'      '}<span className="text-blue-300">&lt;Header</span> <span className="text-purple-300">variant</span>=<span className="text-green-300">"sticky"</span> /&gt;<br />
                                    {'      '}<span className="text-blue-300">&lt;Sidebar&gt;</span><br />
                                    {'        '}<span className="text-blue-300">&lt;NavItems</span> <span className="text-purple-300">items</span>={'{'}routes{'}'} /&gt;<br />
                                    {'      '}<span className="text-blue-300">&lt;/Sidebar&gt;</span><br />
                                    {'      '}<span className="text-blue-300">&lt;Main&gt;</span><br />
                                    {'        '}<span className="text-blue-300">&lt;DashboardGrid /&gt;</span><br />
                                    {'      '}<span className="text-blue-300">&lt;/Main&gt;</span><br />
                                    {'    '}<span className="text-blue-300">&lt;/Layout&gt;</span><br />
                                    {'  '});<br />
                                    {'}'}
                                </pre>
                                <div className="mt-8 border-t border-orange-500/10 pt-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[0.6rem] uppercase tracking-wider text-orange-500">Component Tree</span>
                                        <span className="text-[0.6rem] text-zinc-600">Live Update</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-20 w-1/3 bg-orange-900/20 border border-orange-500/20 rounded-sm relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50"></div>
                                        </div>
                                        <div className="h-20 w-2/3 bg-orange-900/10 border border-orange-500/10 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { ArrowUpRight, Github, Twitter, Disc } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-orange-500/20 border-t pt-20 pb-20" id="footer">
            <div className="animate-fade-slide-in max-w-7xl mr-auto ml-auto pr-6 pl-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16 w-full">
                    <div className="col-span-1 md:col-span-12 flex gap-3 md:gap-5 animate-fade-slide-in pb-4 gap-x-3 gap-y-3 items-baseline">
                        <span className="inline-flex items-baseline justify-center text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] font-bold tracking-tighter text-white gap-2 md:gap-4">
                            krea
                            <div className="w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-orange-500 rounded-full mb-4 md:mb-6 lg:mb-10"></div>
                        </span>
                        <span className="text-xl md:text-3xl font-normal text-zinc-500 tracking-tight font-geist mb-4 md:mb-6 lg:mb-10 block">
                            terminal ide
                        </span>
                    </div>

                    <div className="col-span-1 md:col-span-12 w-full h-px bg-orange-500/30 animate-fade-slide-in"></div>

                    <div className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-fade-slide-in mt-2 gap-x-12 gap-y-12">
                        <div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-10">
                            <p className="text-base text-zinc-400 font-light font-geist leading-relaxed max-w-md">
                                Plug Krea into your workflow and keep shipping from the comfort of your terminal.
                            </p>

                            <div className="flex items-center gap-4">
                                <button className="bg-orange-500 hover:bg-orange-400 text-black px-7 py-3 rounded-lg text-xs font-medium transition-colors font-geist-mono tracking-[0.18em] uppercase duration-300">
                                    Launch Krea IDE
                                </button>
                                <button className="w-14 h-14 rounded-full bg-zinc-900 hover:bg-zinc-800 text-orange-300 flex items-center justify-center transition-colors duration-300 group">
                                    <ArrowUpRight className="w-[18px] h-[18px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-medium font-manrope">Product</h4>
                                <ul className="space-y-2 text-sm text-zinc-500 font-geist">
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Integrations</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Changelog</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-medium font-manrope">Resources</h4>
                                <ul className="space-y-2 text-sm text-zinc-500 font-geist">
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Documentation</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">API Reference</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Community</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Blog</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-medium font-manrope">Company</h4>
                                <ul className="space-y-2 text-sm text-zinc-500 font-geist">
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Legal</a></li>
                                    <li><a href="#" className="hover:text-orange-300 transition-colors">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row animate-fade-slide-in border-orange-500/20 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
                    <p className="text-[0.7rem] text-zinc-600 font-medium font-geist">
                        © 2025 Krea Studio. Built for terminal‑native React teams.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-500 hover:text-orange-300 transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-orange-300 transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-orange-300 transition-colors">
                            <Disc className="w-4 h-4" /> {/* Disc icon as Discord placeholder */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import React from 'react';
import clsx from 'clsx';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Frontend Engineer",
        company: "Vercel",
        content: "Krea has completely transformed how I prototype. Being able to generate shadcn/ui components directly from the terminal is a game changer.",
        avatar: "SC"
    },
    {
        name: "Alex Rivera",
        role: "CTO",
        company: "StartupX",
        content: "The terminal-native workflow feels so natural. I don't have to context switch between my IDE and a browser anymore.",
        avatar: "AR"
    },
    {
        name: "Jordan Lee",
        role: "Indie Hacker",
        company: "Self",
        content: "I built my entire SaaS landing page in 30 minutes using Krea. The code quality is surprisingly good and production-ready.",
        avatar: "JL"
    },
    {
        name: "Emily Zhang",
        role: "Product Designer",
        company: "Figma",
        content: "Finally, a tool that understands design systems. The generated layouts respect our Tailwind config perfectly.",
        avatar: "EZ"
    },
    {
        name: "David Kim",
        role: "Full Stack Dev",
        company: "Netflix",
        content: "It's like having a senior React developer pair programming with you in the terminal. Incredible speed boost.",
        avatar: "DK"
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 overflow-hidden relative border-t border-orange-500/10 bg-black">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl text-white font-manrope font-medium mb-4">
                    Loved by builders
                </h2>
                <p className="text-zinc-400 font-geist">
                    Join thousands of developers shipping faster with Krea.
                </p>
            </div>

            <div className="relative w-full overflow-hidden flex flex-col gap-8">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Top Row - Right to Left */}
                <div className="flex w-max animate-marquee-scroll gap-6 will-change-transform">
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                        <div
                            key={`row1-${i}`}
                            className="w-[350px] shrink-0 bg-zinc-900/50 border border-orange-500/10 p-6 rounded-2xl flex flex-col gap-4 hover:border-orange-500/30 transition-colors group"
                        >
                            <p className="text-zinc-300 text-sm leading-relaxed font-geist">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs font-geist-mono">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium font-manrope">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-zinc-500 text-xs font-geist">
                                        {testimonial.role} @ {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row - Left to Right */}
                <div className="flex w-max animate-marquee-scroll-rev gap-6 will-change-transform">
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                        <div
                            key={`row2-${i}`}
                            className="w-[350px] shrink-0 bg-zinc-900/50 border border-orange-500/10 p-6 rounded-2xl flex flex-col gap-4 hover:border-orange-500/30 transition-colors group"
                        >
                            <p className="text-zinc-300 text-sm leading-relaxed font-geist">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs font-geist-mono">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium font-manrope">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-zinc-500 text-xs font-geist">
                                        {testimonial.role} @ {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

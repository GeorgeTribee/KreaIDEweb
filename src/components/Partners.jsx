import React from 'react';

const partners = [
    "Vercel", "Stripe", "Supabase", "OpenAI", "Tailwind Labs", "Resend", "Clerk", "Raycast"
];

export default function Partners() {
    return (
        <section className="py-12 overflow-hidden relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <p className="text-sm md:text-base font-geist text-zinc-500 tracking-wide">
                    Trusted every day by millions of professional developers.
                </p>
            </div>

            <div className="relative w-full overflow-hidden border-y border-orange-500/10 py-12">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

                <div className="flex w-max animate-marquee-scroll gap-24 items-center">
                    {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                        <div
                            key={i}
                            className="group cursor-pointer shrink-0"
                        >
                            <span className="text-xl md:text-2xl font-manrope font-semibold text-zinc-600 transition-all duration-300 group-hover:text-orange-400 group-hover:scale-110 inline-block group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

export default function Pricing() {
    const [billing, setBilling] = useState('monthly');

    const plans = [
        {
            name: "Free",
            price: billing === 'monthly' ? "0" : "0",
            description: "For personal projects and experiments.",
            features: ["Local terminal access", "Basic React scaffolding", "Community support", "3 Projects limit"],
            cta: "Start for Free",
            highlight: false
        },
        {
            name: "Pro",
            price: billing === 'monthly' ? "19" : "15",
            description: "For professional developers shipping apps.",
            features: ["Unlimited AI generations", "Advanced refactoring tools", "Priority support", "Unlimited Projects", "Custom themes"],
            cta: "Get Pro",
            highlight: true
        },
        {
            name: "Ultra",
            price: billing === 'monthly' ? "49" : "39",
            description: "The complete toolkit for scaling globally.",
            features: ["Supabase integration", "Custom domain support", "Stripe pay integration", "SSO & Admin controls", "Dedicated support"],
            cta: "Go Ultra",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-32 relative border-t border-orange-500/20">
            <div className="animate-fade-slide-in max-w-7xl mr-auto ml-auto pr-6 pl-6">
                <div className="animate-fade-slide-in text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight font-manrope font-medium">
                        Simple plans for terminal‑first builders
                    </h2>
                    <p className="text-base text-zinc-400 font-medium font-geist">
                        Use Krea IDE for quick experiments, side projects, or full‑scale products.
                    </p>

                    <div className="flex items-center justify-center mt-8">
                        <div className="bg-black p-1 rounded-full border border-orange-500/30 flex items-center">
                            <button
                                onClick={() => setBilling('monthly')}
                                className={clsx(
                                    "px-6 py-2 rounded-full text-xs font-medium font-geist transition-all",
                                    billing === 'monthly' ? "bg-zinc-900 text-white shadow-sm" : "text-zinc-400 hover:text-white"
                                )}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBilling('yearly')}
                                className={clsx(
                                    "px-6 py-2 rounded-full text-xs font-medium font-geist transition-all flex items-center",
                                    billing === 'yearly' ? "bg-zinc-900 text-white shadow-sm" : "text-zinc-400 hover:text-white"
                                )}
                            >
                                Yearly
                                <span className="text-orange-400 text-[0.7rem] ml-1 font-medium font-geist">
                                    -20%
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={clsx(
                                "relative p-8 border flex flex-col bg-black transition-all duration-300 group hover:border-orange-500/50",
                                plan.highlight ? "border-orange-500/50 shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]" : "border-orange-500/20"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black text-[0.6rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-white mb-2 font-manrope">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-white font-manrope">${plan.price}</span>
                                    <span className="text-zinc-500 text-sm">/mo</span>
                                </div>
                                <p className="text-zinc-400 text-sm mt-3 font-geist leading-relaxed min-h-[40px]">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-geist">
                                        <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={clsx(
                                "w-full py-3 text-xs font-semibold uppercase tracking-widest font-geist-mono transition-all",
                                plan.highlight
                                    ? "bg-orange-500 text-black hover:bg-orange-400 shadow-[0_0_15px_-5px_rgba(249,115,22,0.5)]"
                                    : "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700"
                            )}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

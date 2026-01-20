import React from 'react';
import clsx from 'clsx';

const stats = {
    activeUsers: {
        label: "Active Users",
        value: "10k+",
        description: "Join over 10,000 developers relying on Krea daily for their mission-critical production workflows and rapid prototyping."
    },
    components: {
        label: "Components",
        value: "2M+",
        description: "From simple buttons to complex dashboards, millions of React components have been generated via natural language prompts."
    },
    appsDeployed: {
        label: "Apps Deployed",
        value: "50k+",
        description: "Scale your ideas instantly. Over 50,000 full-stack applications have been shipped directly from the Krea terminal to global CDNs."
    },
    uptime: {
        label: "Uptime",
        value: "99%",
        description: "Reliable infrastructure powered by edge computing networks."
    },
    latency: {
        label: "Global Latency",
        value: "<50ms",
        description: "Edge network optimization ensuring near-instantaneous responses regardless of your geographic location."
    },
    retention: {
        label: "Retention",
        value: "94%",
        description: "Teams that start with Krea stay with Krea. Our developer retention rate speaks for itself."
    }
};

function AnalyticsCard({ stat, className, minHeight = "min-h-[160px]" }) {
    return (
        <div className={clsx("bg-black border border-orange-500/40 rounded-none p-6 flex flex-col justify-between relative overflow-hidden group hover:border-orange-400 transition-all duration-300 w-full h-full", minHeight, className)}>
            <div className="absolute top-0 right-0 bottom-0 left-0"></div>
            {/* Corner border matching 10x card */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-400/60"></div>

            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-[80px] pointer-events-none group-hover:bg-orange-500/20 transition-colors"></div>

            <div className="flex flex-col gap-4 z-10">
                <div className="flex items-start justify-between gap-4">
                    <span className="text-3xl md:text-4xl text-orange-300 tracking-tight font-manrope font-medium">
                        {stat.value}
                    </span>
                </div>

                <div className="flex flex-col justify-center pt-1">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-orange-400 font-semibold mb-2 font-geist-mono">
                        {stat.label}
                    </span>
                    <div className="h-0.5 w-16 bg-zinc-900 overflow-hidden">
                        <div className="h-full w-full bg-orange-400 origin-left animate-shimmer"></div>
                    </div>
                </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed font-medium font-geist mt-auto relative z-10 pt-4">
                {stat.description}
            </p>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="hidden md:flex flex-col justify-between items-center py-6 bg-black border border-orange-500/40 h-full w-full">
            <div className="flex flex-col gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full border border-orange-500/40 bg-orange-500/10 hover:bg-orange-500/40 transition-colors duration-300"></div>
                ))}
            </div>
            <div className="text-[10px] font-geist-mono text-orange-500/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                SYSTEM STATUS
            </div>
        </div>
    );
}

export default function Analytics() {
    return (
        <section className="py-16 border-t border-orange-500/20 bg-black relative overflow-hidden" id="analytics">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f973160a,_transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">

                    {/* Sidebar: Spans 2 Rows (Hidden on Mobile) */}
                    <div className="md:col-span-1 md:row-span-2 hidden md:block">
                        <Sidebar />
                    </div>

                    {/* Active Users: Wide Box */}
                    <div className="md:col-span-7">
                        <AnalyticsCard stat={stats.activeUsers} minHeight="min-h-[180px]" />
                    </div>

                    {/* Components: Tall Box (Spans 2 Rows) */}
                    <div className="md:col-span-4 md:row-span-2">
                        <AnalyticsCard stat={stats.components} minHeight="min-h-[180px] md:h-full" />
                    </div>

                    {/* Row 2 Middle */}
                    <div className="md:col-span-4">
                        <AnalyticsCard stat={stats.appsDeployed} minHeight="min-h-[180px]" />
                    </div>
                    <div className="md:col-span-3">
                        <AnalyticsCard stat={stats.uptime} minHeight="min-h-[180px]" />
                    </div>

                    {/* Row 3 (Bottom) */}
                    <div className="md:col-span-8">
                        <AnalyticsCard stat={stats.latency} minHeight="min-h-[180px]" />
                    </div>
                    <div className="md:col-span-4">
                        <AnalyticsCard stat={stats.retention} minHeight="min-h-[180px]" />
                    </div>

                </div>
            </div>
        </section>
    );
}

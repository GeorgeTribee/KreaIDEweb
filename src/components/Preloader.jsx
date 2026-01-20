import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Preloader({ onComplete }) {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fade out after 2.5s
        const timer = setTimeout(() => {
            setIsFading(true);

            // Call onComplete after fade animation (e.g. 500ms)
            setTimeout(() => {
                onComplete();
            }, 500);

        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={clsx(
            "fixed inset-0 z-[100] bg-[#000000] flex items-center justify-center transition-opacity duration-500",
            isFading ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-baseline gap-2 animate-pulse">
                    <h1 className="text-4xl font-medium tracking-tighter text-white font-geist select-none">
                        krea
                    </h1>
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                </div>
                <div className="h-[1px] w-24 bg-zinc-800 overflow-hidden relative mt-2">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-orange-500/50 animate-[shimmer_1s_infinite]"></div>
                </div>
            </div>
        </div>
    );
}

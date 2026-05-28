'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/statsData';

function TickerRow({
    direction,
    tilt,
    duration,
    zIndex,
}: {
    direction: 'left' | 'right';
    tilt: number;
    duration: number;
    zIndex: number;
}) {
    const duplicated = [...stats, ...stats, ...stats];
    // left → animate x: 0 → -33.33%   right → animate x: -33.33% → 0
    const animate = direction === 'left'
        ? { x: [0, '-33.33%'] }
        : { x: ['-33.33%', 0] };

    return (
        <div
            className="relative py-3 md:py-4"
            style={{ transform: `rotate(${tilt}deg)`, transformOrigin: 'center', zIndex }}
        >
            <div className="bg-[#1A1F1E] shadow-2xl overflow-hidden relative border-y border-[#00E08F]/20">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-50" />

                {/* Scrolling strip */}
                <div className="py-3 md:py-4">
                    <motion.div
                        className="flex gap-10 whitespace-nowrap"
                        animate={animate}
                        transition={{
                            x: { repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' },
                        }}
                    >
                        {duplicated.map((stat, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 font-bold text-lg md:text-2xl lg:text-3xl"
                            >
                                <span className="text-[#00E08F]">▲</span>
                                <span className="text-[#C2C2C2] tracking-tight font-accent">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-50" />
            </div>
        </div>
    );
}

export default function StatsTicker() {
    return (
        <section className="relative z-20 pointer-events-none">
            <div className="pointer-events-auto flex flex-col gap-1.5 sm:gap-2">

                {/* Row 1 — tilted left, scrolls left */}
                <TickerRow direction="left"  tilt={-3} duration={28} zIndex={4} />

                {/* Row 2 — tilted right (opposite), scrolls right */}
                <TickerRow direction="right" tilt={3}  duration={24} zIndex={3} />

            </div>

            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#070B0B] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#070B0B] to-transparent pointer-events-none z-10" />
        </section>
    );
}

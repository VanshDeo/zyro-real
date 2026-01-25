'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/statsData';

export default function StatsTicker() {
    // Duplicate stats for seamless infinite scroll
    const duplicatedStats = [...stats, ...stats, ...stats];

    return (
        <section className="relative -my-24 md:-my-32 z-20 pointer-events-none">
            <div className="pointer-events-auto">
                {/* Geometric Background Patterns - Subtle */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Geometric shapes */}
                    <div className="absolute top-20 right-32 w-40 h-40 bg-[#00E08F] opacity-5" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="150,200 180,280 120,280" fill="rgba(0,224,143,0.1)" />
                        <polygon points="85,5 95,25 75,25" fill="rgba(0,224,143,0.08)" />
                        <line x1="0" y1="30%" x2="40%" y2="10%" stroke="rgba(0,224,143,0.1)" strokeWidth="2" />
                    </svg>
                </div>

                {/* Paper Wrap Effect - Multiple Overlapping Layers */}
                <div className="relative py-8 md:py-12">
                    {/* Back Layer - Slightly visible behind */}
                    <div
                        className="absolute inset-0 bg-[#E8E4D8] shadow-xl opacity-40"
                        style={{
                            transform: 'rotate(-2deg) translateY(8px)',
                            transformOrigin: 'center',
                            zIndex: 1
                        }}
                    />

                    {/* Middle Layer */}
                    <div
                        className="absolute inset-0 bg-[#EDE9DD] shadow-2xl opacity-60"
                        style={{
                            transform: 'rotate(-2.5deg) translateY(4px)',
                            transformOrigin: 'center',
                            zIndex: 2
                        }}
                    />

                    {/* Main Front Layer - Tilted Banner with scrolling text */}
                    <div
                        className="relative"
                        style={{
                            transform: 'rotate(-3deg)',
                            transformOrigin: 'center',
                            zIndex: 3
                        }}
                    >
                        {/* Cream/Beige Background Banner */}
                        <div className="bg-[#F5F1E8] shadow-2xl overflow-hidden relative">

                            {/* Decorative top edge with green accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-50" />

                            {/* Scrolling Text Container */}
                            <div className="py-6 md:py-8">
                                <motion.div
                                    className="flex gap-12 whitespace-nowrap"
                                    animate={{
                                        x: [0, '-33.33%'],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            duration: 30,
                                            ease: 'linear',
                                        },
                                    }}
                                >
                                    {duplicatedStats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 font-bold text-xl md:text-3xl lg:text-4xl"
                                            style={{
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                            }}
                                        >
                                            <span className="text-[#00E08F]">▲</span>
                                            <span className="text-gray-800 tracking-tight">{stat.label}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Decorative bottom edge with green accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Gradient Fade Edges for scrolling effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#070B0B] to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#070B0B] to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}

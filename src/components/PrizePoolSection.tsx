'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './AdvancedAnimations';
import Image from 'next/image';
import { prizes } from '@/lib/prizesData';

export default function PrizePoolSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <section ref={containerRef} className="section relative overflow-hidden bg-[#070B0B]">
            {/* Parallax Background Image */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image
                    src="/images/hero-leaves.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-30 scale-110"
                />
            </motion.div>

            {/* Global Overlay */}
            <div className="absolute inset-0 bg-[#070B0B]/40 z-[1] pointer-events-none" />

            {/* Top/Bottom Blends */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />

            {/* Side Blends */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B0B] via-transparent to-[#070B0B] z-[1] pointer-events-none" />

            {/* Left Circuit Decoration */}
            <div className="absolute -left-10 lg:left-0 top-0 pointer-events-none z-10 w-full h-full">
                <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-80">
                    <path d="M50 100 L50 200 L80 230 L80 600 L50 630 L50 800" stroke="#00E08F" strokeWidth="2" fill="none" />
                    <rect x="46" y="96" width="8" height="8" fill="#00E08F" filter="url(#glow)" />
                    <rect x="46" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow)" transform="rotate(45 50 796)" />
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Right Circuit Decoration */}
            <div className="absolute -right-10 lg:right-0 top-0 pointer-events-none h-full">
                <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-80">
                    <path d="M50 100 L50 200 L20 230 L20 600 L50 630 L50 800" stroke="#00E08F" strokeWidth="2" fill="none" />
                    <rect x="46" y="96" width="8" height="8" fill="#00E08F" filter="url(#glow2)" />
                    <rect x="46" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow2)" transform="rotate(45 50 796)" />
                    <defs>
                        <filter id="glow2">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="container-custom relative z-10 px-4 md:px-0">
                {/* Section Title */}
                <Reveal>
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-white">PRIZE</span>{' '}
                            <span className="text-gradient">POOL</span>
                        </motion.h2>
                        <motion.p
                            className="text-[#A1A1A1] text-base md:text-lg max-w-2xl mx-auto px-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Compete for exciting prizes and recognition. Top performers will be rewarded!
                        </motion.p>
                    </div>
                </Reveal>

                {/* Prize Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto md:items-end px-4 md:px-0">
                    {prizes.map((prize, index) => (
                        <motion.div
                            key={prize.place}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative ml-12 mr-4 md:mx-0 md:order-${prize.order}`}
                            style={{ transform: typeof window !== 'undefined' && window.innerWidth >= 768 ? `scale(${prize.scale})` : 'scale(1)' }}
                        >
                            {/* Winner Badge */}
                            {prize.popular && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-[#00E08F] text-black px-4 py-1 rounded-full text-sm font-bold">
                                        WINNER
                                    </div>
                                </div>
                            )}

                            {/* Outer Border Container */}
                            <div
                                className="relative bg-[#1F2937]"
                                style={{
                                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                    padding: '1px'
                                }}
                            >
                                {/* Inner Card */}
                                <div
                                    className="relative p-6 md:p-8 bg-black/80 backdrop-blur-md h-full"
                                    style={{
                                        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                        borderLeft: '4px solid #00E08F'
                                    }}
                                >
                                    {/* Glow Effect */}
                                    <div
                                        className="absolute -right-10 -top-10 w-32 h-32 opacity-20 blur-2xl rounded-full bg-[#00E08F]"
                                    />

                                    {/* Header with Place Badge and Number */}
                                    <div className="flex items-start justify-between mb-6 relative z-10">
                                        <div className="text-sm font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00E08F]">
                                            {prize.place} Place
                                        </div>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg font-bold text-black text-lg bg-[#00E08F] shadow-[0_0_15px_rgba(0,224,143,0.5)]">
                                            {prize.place === '1st' ? '1' : prize.place === '2nd' ? '2' : '3'}
                                        </div>
                                    </div>

                                    {/* Prize Amount */}
                                    <div className="mb-6 relative z-10">
                                        <div className={`text-4xl md:text-5xl font-bold text-[#00E08F]`}>
                                            {prize.prize}
                                        </div>
                                    </div>

                                    {/* Perks List */}
                                    <ul className="space-y-2 md:space-y-3 text-left relative z-10">
                                        {prize.perks.map((perk, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2 md:gap-3 text-gray-400"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * i }}
                                            >
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#00E08F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-xs md:text-sm">{perk}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Info */}
                <Reveal>
                    <div className="text-center mt-12 md:mt-16 px-4">
                        <p className="text-[#A1A1A1] mb-4 text-base md:text-lg">
                            Total Prize Pool: <span className="text-[#00E08F] font-bold text-xl md:text-2xl">₹1,00,000 and Growing</span>
                        </p>
                        <p className="text-[#A1A1A1] text-xs md:text-sm">
                            Additional prizes and recognition for notable participants will be announced later 
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

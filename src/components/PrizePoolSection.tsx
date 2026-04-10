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
            <div className="absolute left-0 top-0 pointer-events-none z-10 w-full h-full hidden sm:block">
                <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-80">
                    <path d="M50 100 L50 200 L80 230 L80 600 L50 630 L50 800" stroke="#00E08F" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }} />
                    <rect x="46" y="96" width="8" height="8" fill="#00E08F" />
                    <rect x="46" y="792" width="8" height="8" fill="#00E08F" transform="rotate(45 50 796)" />
                </svg>
            </div>

            {/* Right Circuit Decoration */}
            <div className="absolute right-0 top-0 pointer-events-none h-full hidden sm:block">
                <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-80">
                    <path d="M50 100 L50 200 L20 230 L20 600 L50 630 L50 800" stroke="#00E08F" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }} />
                    <rect x="46" y="96" width="8" height="8" fill="#00E08F" />
                    <rect x="46" y="792" width="8" height="8" fill="#00E08F" transform="rotate(45 50 796)" />
                </svg>
            </div>

            <div className="container-custom relative z-10 px-4 md:px-0">
                {/* Section Title */}
                <Reveal>
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display tracking-wider"
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
                <div className="flex flex-col md:flex-row justify-center md:items-end gap-6 md:gap-4 lg:gap-8 max-w-6xl mx-auto px-4 md:px-0 mt-10">
                    {prizes.map((prize, index) => {
                        // Responsive ordering: 1st is top on mobile, center on desktop
                        const orderClass = prize.place === '1st' ? 'order-1 md:order-2' : 
                                           prize.place === '2nd' ? 'order-2 md:order-1' : 
                                           'order-3';
                        
                        // Responsive scaling: 1st is largest on desktop
                        const scaleClass = prize.place === '1st' ? 'md:scale-110 z-10' :
                                           prize.place === '2nd' ? 'md:scale-95 z-0' :
                                                                   'md:scale-90 z-0';

                        return (
                        <motion.div
                            key={prize.place}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative w-full md:w-1/3 ${orderClass} ${scaleClass}`}
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
                                        <div className="text-sm font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00E08F] font-accent">
                                            {prize.place} Place
                                        </div>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg font-bold text-black text-lg bg-[#00E08F] shadow-[0_0_15px_rgba(0,224,143,0.5)] font-accent">
                                            {prize.place === '1st' ? '1' : prize.place === '2nd' ? '2' : '3'}
                                        </div>
                                    </div>

                                    {/* Prize Amount */}
                                    <div className="mb-6 relative z-10">
                                        <div className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#00E08F] font-mono`}>
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
                        );
                    })}
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

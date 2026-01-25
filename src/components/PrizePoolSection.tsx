'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './AdvancedAnimations';
import Image from 'next/image';

const prizes = [
    {
        place: '2nd',
        prize: '₹50,000',
        icon: '🥈',
        color: 'from-gray-400 to-gray-600',
        borderColor: '#9CA3AF',
        perks: [
            'Cash Prize: ₹50,000',
            'Certificate of Achievement',
            'Mentorship Session',
            'Swag Kit',
            'LinkedIn Feature'
        ],
        popular: false,
        scale: 0.95
    },
    {
        place: '1st',
        prize: '₹1,00,000',
        icon: '🏆',
        color: 'from-yellow-400 to-yellow-600',
        borderColor: '#00E08F',
        perks: [
            'Cash Prize: ₹1,00,000',
            'Winner Trophy',
            'Industry Internship Opportunity',
            '1-Year Premium Membership',
            'Featured Article',
            'Exclusive Networking Event'
        ],
        popular: true,
        scale: 1.05
    },
    {
        place: '3rd',
        prize: '₹25,000',
        icon: '🥉',
        color: 'from-orange-400 to-orange-600',
        borderColor: '#CD7F32',
        perks: [
            'Cash Prize: ₹25,000',
            'Certificate of Excellence',
            'Swag Kit',
            'Community Recognition'
        ],
        popular: false,
        scale: 0.90
    }
];

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
                            className="relative ml-12 mr-4 md:mx-0"
                            style={{ transform: window.innerWidth >= 768 ? `scale(${prize.scale})` : 'scale(1)' }}
                        >
                            {/* Winner Badge */}
                            {prize.popular && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                                    <motion.div
                                        className="bg-[#00E08F] text-black px-4 py-1 rounded-full text-sm font-bold"
                                        animate={{
                                            y: [0, -5, 0],
                                            boxShadow: [
                                                '0 0 20px rgba(0, 224, 143, 0.5)',
                                                '0 0 30px rgba(0, 224, 143, 0.8)',
                                                '0 0 20px rgba(0, 224, 143, 0.5)'
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        WINNER
                                    </motion.div>
                                </div>
                            )}

                            {/* Outer Border Container */}
                            <div
                                style={{
                                    background: prize.popular ? '#00E08F' : prize.borderColor,
                                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                    padding: prize.popular ? '2px' : '1px'
                                }}
                            >
                                {/* Inner Card */}
                                <div
                                    className="relative overflow-hidden h-full"
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        backdropFilter: 'blur(20px)',
                                        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                        padding: window.innerWidth >= 768 ? '2rem' : '1.5rem'
                                    }}
                                >
                                    {/* Background Glow */}
                                    {prize.popular && (
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-b from-[#00E08F]/10 to-transparent pointer-events-none"
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                    )}

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        {/* Trophy Icon */}
                                        <motion.div
                                            className="text-5xl md:text-7xl mb-3 md:mb-4"
                                            animate={{
                                                rotate: prize.popular ? [0, 10, -10, 0] : 0,
                                                scale: prize.popular ? [1, 1.1, 1] : 1
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            {prize.icon}
                                        </motion.div>

                                        {/* Place */}
                                        <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">{prize.place} Place</h3>

                                        {/* Prize Amount */}
                                        <div className="mb-4 md:mb-8">
                                            <motion.div
                                                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}
                                                animate={prize.popular ? {
                                                    scale: [1, 1.05, 1],
                                                } : {}}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                {prize.prize}
                                            </motion.div>
                                        </div>

                                        {/* Perks List */}
                                        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-8 text-left">
                                            {prize.perks.map((perk, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-2 md:gap-3 text-[#A1A1A1]"
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
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Info */}
                <Reveal>
                    <div className="text-center mt-12 md:mt-16 px-4">
                        <p className="text-[#A1A1A1] mb-4 text-base md:text-lg">
                            Total Prize Pool: <span className="text-[#00E08F] font-bold text-xl md:text-2xl">₹1,75,000</span>
                        </p>
                        <p className="text-[#A1A1A1] text-xs md:text-sm">
                            Additional prizes and recognition for notable participants
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

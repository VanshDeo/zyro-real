'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Reveal } from './AdvancedAnimations';
import Image from 'next/image';

import { SPONSORS } from '@/lib/partnersData';

// Split sponsors into two rows
const row1 = SPONSORS.slice(0, Math.ceil(SPONSORS.length / 2));
const row2 = SPONSORS.slice(Math.ceil(SPONSORS.length / 2));

export default function PartnersSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(row1.length / 3));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(row1.length / 3)) % Math.ceil(row1.length / 3));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(row1.length / 3));
    };

    return (
        <section ref={containerRef} className="section relative overflow-hidden bg-[#070B0B]">
            {/* Parallax Background Image - Copied from Hero */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image
                    src="/images/hero-leaves.jpg"
                    alt="Tropical leaves background"
                    fill
                    className="object-cover opacity-40 scale-110"
                />
            </motion.div>

            {/* Global Overlay to darken - Fixed position (no parallax) */}
            <div className="absolute inset-0 bg-[#070B0B]/30 z-[1] pointer-events-none" />

            {/* Stronger Top/Bottom Blends - Fixed position (no parallax) */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />

            {/* Side Blends - Fixed position (no parallax) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B0B] via-transparent to-[#070B0B] z-[1] pointer-events-none" />

            {/* Left Circuit Decoration - Matching FAQ Style */}
            <div className="absolute -left-10 lg:left-0 top-0 pointer-events-none z-10 w-full h-full">
                <svg width="120" height="100%" viewBox="0 0 120 800" preserveAspectRatio="none" className="opacity-90">
                    {/* Main path starting lower to align with title */}
                    <path d="M60 100 L60 200 L90 230 L90 550 L60 580 L60 800" stroke="#00E08F" strokeWidth="2" fill="none" />

                    {/* Top Square Node */}
                    <rect x="56" y="96" width="8" height="8" fill="#00E08F" filter="url(#glow-p)" />

                    {/* Bottom Diamond Node */}
                    <rect x="56" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow-p)" transform="rotate(45 60 796)" />

                    <defs>
                        <filter id="glow-p">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Right Circuit Decoration - Matching FAQ Style */}
            <div className="absolute -right-10 lg:right-0 top-0 pointer-events-none z-10 h-full hidden lg:block">
                <svg width="120" height="100%" viewBox="0 0 120 800" preserveAspectRatio="none" className="opacity-90">
                    {/* Mirrored path: 30 instead of 90 */}
                    <path d="M60 100 L60 200 L30 230 L30 550 L60 580 L60 800" stroke="#00E08F" strokeWidth="2" fill="none" />

                    {/* Top Square Node */}
                    <rect x="56" y="96" width="8" height="8" fill="#00E08F" filter="url(#glow-p2)" />

                    {/* Bottom Diamond Node */}
                    <rect x="56" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow-p2)" transform="rotate(45 60 796)" />

                    <defs>
                        <filter id="glow-p2">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="container-custom relative z-10 py-20">
    <Reveal direction="up">
        <div className="mb-12 ml-12 md:ml-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider">
                Community
            </h2>
        </div>
    </Reveal>

    <motion.div
        className="relative ml-12 mr-4 md:mx-0 mb-16"
        style={{ background: '#1F2937', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))', padding: '1px' }}
    >
        <div className="relative overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(20px)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}>

            <div className="relative px-8 py-10">
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{ x: ['0%', '-100%'] }} // LEFT
                        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    >
                        {[...row1, ...row1].map((partner, index) => (
                            <a key={`community-${index}`} href="/" className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center rounded-lg border border-gray-700/50 bg-black/40 p-4">
                                    <Image
                                        src={partner.url}
                                        alt={partner.sponsor}
                                        fill
                                        className="object-contain p-3" // ❌ removed grayscale
                                    />
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.div>

    {/* ================= SPONSORS ================= */}

    <Reveal direction="up">
        <div className="mb-12 ml-12 md:ml-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider">
                Sponsors
            </h2>
        </div>
    </Reveal>

    <motion.div
        className="relative ml-12 mr-4 md:mx-0"
        style={{ background: '#1F2937', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))', padding: '1px' }}
    >
        <div className="relative overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(20px)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}>

            <div className="relative px-8 py-10">
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{ x: ['-100%', '0%'] }} // RIGHT (opposite)
                        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    >
                        {[...row2, ...row2].map((partner, index) => (
                            <a key={`sponsor-${index}`} href="/" className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center rounded-lg border border-gray-700/50 bg-black/40 p-4">
                                    <Image
                                        src={partner.url}
                                        alt={partner.sponsor}
                                        fill
                                        className="object-contain p-3" // ❌ removed grayscale
                                    />
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.div>
</div>




            
        </section>
    );
}

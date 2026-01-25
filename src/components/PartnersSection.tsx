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
                            Partners
                        </h2>
                    </div>
                </Reveal>

                {/* Glassmorphic Container with Background Image - Cyber HUD Style */}
                <motion.div
                    className="relative ml-12 mr-4 md:mx-0"
                    style={{ background: '#1F2937', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))', padding: '1px' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative overflow-hidden" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(20px)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}>

                        {/* Background Image - 3D geometric shapes */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 right-0 w-1/2 h-full">
                                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-900 transform rotate-45 opacity-30"
                                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                                <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-gray-600 to-gray-800 transform -rotate-12 opacity-20"
                                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                            </div>
                        </div>

                        {/* Logo Container with Fade Effects */}
                        <div className="relative px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12">
                            {/* Left Fade */}
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />

                            {/* Right Fade */}
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

                            {/* Row 1 */}
                            <div className="mb-8 overflow-hidden">
                                <motion.div
                                    className="flex gap-16 items-center justify-center"
                                    animate={{ x: -currentIndex * 300 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    {row1.map((partner, index) => (
                                        <div
                                            key={`row1-${partner.id}`}
                                            className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                                        >
                                            <div
                                                className="relative w-full h-full flex items-center justify-center rounded-lg border border-gray-700/50 bg-black/40 backdrop-blur-sm p-4"
                                                style={{
                                                    background: 'rgba(66, 65, 65, 0.6)',
                                                }}
                                            >
                                                <Image
                                                    src={partner.url}
                                                    alt={partner.sponsor}
                                                    fill
                                                    className="object-contain opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0 p-3"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Row 2 */}
                            <div className="overflow-hidden">
                                <motion.div
                                    className="flex gap-16 items-center justify-center"
                                    animate={{ x: -currentIndex * 300 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    {row2.map((partner, index) => (
                                        <div
                                            key={`row2-${partner.id}`}
                                            className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                                        >
                                            <div
                                                className="relative w-full h-full flex items-center justify-center rounded-lg border border-gray-700/50 bg-black/40 backdrop-blur-sm p-4"
                                                style={{
                                                   background: 'rgba(66, 65, 65, 0.6)',
                                                }}
                                            >
                                                <Image
                                                    src={partner.url}
                                                    alt={partner.sponsor}
                                                    fill
                                                    className="object-contain opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0 p-3"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Controls */}
                <motion.div
                    className="flex items-center justify-center gap-6 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="relative w-[180px] h-[60px] flex items-center justify-center gap-6">
                        {/* SVG Background Border & Glow */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180 60" fill="none">
                            <path
                                d="M 20 1 L 160 1 L 179 30 L 160 59 L 20 59 L 1 30 Z"
                                stroke="#00E08F"
                                strokeWidth="1.5"
                                fill="rgba(0,0,0,0.8)"
                                className="drop-shadow-[0_0_8px_rgba(0,224,143,0.4)]"
                            />
                        </svg>

                        {/* Content (Buttons) */}
                        <div className="relative z-10 flex items-center gap-6">
                            <motion.button
                                onClick={handlePrevious}
                                className="text-white hover:text-[#00E08F] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={handleNext}
                                className="text-white hover:text-[#00E08F] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

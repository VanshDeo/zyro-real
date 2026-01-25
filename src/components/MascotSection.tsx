'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Reveal } from './AdvancedAnimations';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { features } from '@/lib/featuresData';

export default function MascotSection() {
    const [currentFeature, setCurrentFeature] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update feature based on scroll progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const featureIndex = Math.floor(latest * features.length);
        // Clamp index between 0 and features.length - 1
        const newIndex = Math.min(Math.max(featureIndex, 0), features.length - 1);
        if (newIndex !== currentFeature) {
            setCurrentFeature(newIndex);
        }
    });



    // Scroll to specific feature section
    const scrollToFeature = (index: number) => {
        if (!containerRef.current) return;
        const totalHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        // Calculate the scroll position for the desired index
        // The scrollable area is (totalHeight - viewportHeight)
        // We divide this by features.length to find the "slot" for each feature
        const scrollableDistance = totalHeight - viewportHeight;
        const scrollPerFeature = scrollableDistance / features.length;

        // Target scroll is start of section + (index * scrollPerSection) + small offset to center it
        const targetScroll = containerRef.current.offsetTop + (index * scrollPerFeature) + (scrollPerFeature / 2);

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    };

    const nextFeature = () => {
        const next = (currentFeature + 1) % features.length;
        scrollToFeature(next);
    };

    const prevFeature = () => {
        const prev = (currentFeature - 1 + features.length) % features.length;
        scrollToFeature(prev);
    };

    return (
        <div ref={containerRef} className="relative h-[200vh] md:h-[300vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden selection:bg-[#00E08F] selection:text-black">
                {/* Background decorative lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Vertical lines */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`v-line-${i}`}
                            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#00E08F]/10 to-transparent"
                            style={{ left: `${10 + i * 12}%` }}
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                        />
                    ))}

                    {/* Horizontal lines */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`h-line-${i}`}
                            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00E08F]/5 to-transparent"
                            style={{ top: `${15 + i * 15}%` }}
                            animate={{ opacity: [0.05, 0.15, 0.05] }}
                            transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
                        />
                    ))}
                </div>

                {/* Background gradient */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 50%, rgba(0, 224, 143, 0.08) 0%, transparent 50%)'
                    }}
                />

                {/* Left Circuit Decoration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 hidden lg:block">
                    <svg width="100" height="600" viewBox="0 0 100 600" className="opacity-80">
                        <line x1="50" y1="0" x2="50" y2="200" stroke="#00E08F" strokeWidth="2" />
                        <line x1="50" y1="200" x2="80" y2="230" stroke="#00E08F" strokeWidth="2" />
                        <line x1="80" y1="230" x2="80" y2="370" stroke="#00E08F" strokeWidth="2" />
                        <line x1="80" y1="370" x2="50" y2="400" stroke="#00E08F" strokeWidth="2" />
                        <line x1="50" y1="400" x2="50" y2="600" stroke="#00E08F" strokeWidth="2" />

                        <circle cx="50" cy="200" r="4" fill="#00E08F" filter="url(#glow)" />
                        <circle cx="80" cy="230" r="4" fill="#00E08F" filter="url(#glow)" />
                        <circle cx="80" cy="370" r="4" fill="#00E08F" filter="url(#glow)" />
                        <circle cx="50" cy="400" r="4" fill="#00E08F" filter="url(#glow)" />

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
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 hidden lg:block">
                    <svg width="100" height="600" viewBox="0 0 100 600" className="opacity-80">
                        <line x1="50" y1="0" x2="50" y2="200" stroke="#00E08F" strokeWidth="2" />
                        <line x1="50" y1="200" x2="20" y2="230" stroke="#00E08F" strokeWidth="2" />
                        <line x1="20" y1="230" x2="20" y2="370" stroke="#00E08F" strokeWidth="2" />
                        <line x1="20" y1="370" x2="50" y2="400" stroke="#00E08F" strokeWidth="2" />
                        <line x1="50" y1="400" x2="50" y2="600" stroke="#00E08F" strokeWidth="2" />

                        <circle cx="50" cy="200" r="4" fill="#00E08F" filter="url(#glow2)" />
                        <circle cx="20" cy="230" r="4" fill="#00E08F" filter="url(#glow2)" />
                        <circle cx="20" cy="370" r="4" fill="#00E08F" filter="url(#glow2)" />
                        <circle cx="50" cy="400" r="4" fill="#00E08F" filter="url(#glow2)" />

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


                {/* Navigation Arrows - Fixed to Left Screen Edge */}
                <div className="absolute left-4 sm:left-10 md:left-24 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
                    <motion.button
                        onClick={prevFeature}
                        className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group hover:bg-[#00E08F]/10 rounded-xl transition-all border border-[#00E08F]/20 hover:border-[#00E08F]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#00E08F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </motion.button>
                    <motion.button
                        onClick={nextFeature}
                        className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group hover:bg-[#00E08F]/10 rounded-xl transition-all border border-[#00E08F]/20 hover:border-[#00E08F]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#00E08F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.button>
                </div>

                {/* Progress Indicator - Fixed to Right Screen Edge */}
                <div className="absolute right-4 sm:right-10 md:right-24 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
                    {features.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`w-2 h-2 rounded-full cursor-pointer ${index === currentFeature ? 'bg-[#00E08F]' : 'bg-[#1F2937]'}`}
                            animate={{ scale: index === currentFeature ? 1.3 : 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => scrollToFeature(index)}
                        />
                    ))}
                </div>


                <div className="container-custom relative h-full flex items-center z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full relative h-full">
                        {/* Center Column Structure */}
                        <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block overflow-hidden">
                            {/* Top Column - Moved down closer to center */}
                            <motion.div
                                className="absolute -top-30 left-[72%] -translate-x-1/2 w-80 h-[calc(50%-80px)]"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dlrlet9fg/image/upload/v1769273202/column_fpptih.png"
                                    alt="Top Column"
                                    fill
                                    className="object-cover object-bottom"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 via-30% to-transparent" />
                            </motion.div>

                            {/* Bottom Column - Fit to bottom */}
                            <motion.div
                                className="absolute -bottom-30 left-[72%] -translate-x-1/2 w-80 h-[calc(50%-80px)]"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dlrlet9fg/image/upload/v1769273202/column-bottom-revert_dtkh7l.png"
                                    alt="Bottom Column"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-30% to-transparent" />
                            </motion.div>
                        </div>

                        {/* Center Feature Logo - Bigger and No Box */}
                        <div className="absolute left-[72%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentFeature}
                                    initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0, rotate: 45 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="relative z-30"
                                >
                                    {/* Glowing bloom effect behind logo */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#00E08F] blur-[80px] opacity-40 rounded-full" />

                                    <div className="w-40 h-40 text-[#00E08F] drop-shadow-[0_0_30px_rgba(0,224,143,0.9)]">
                                        {features[currentFeature].logo}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* LEFT - Features Content */}
                        <div className="space-y-10 relative">
                            {/* Navigation Arrows Removed from here */}


                            <Reveal direction="up">
                                <div className="mb-16">
                                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                        Tracks
                                    </h2>
                                </div>
                            </Reveal>

                            <div className="relative h-[500px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentFeature}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            mass: 0.8
                                        }}
                                        className="absolute inset-0 space-y-8"
                                    >
                                        {/* Feature Number and Title */}
                                        <motion.div
                                            className="space-y-4"
                                            initial={{ y: 20 }}
                                            animate={{ y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <span className="text-[#6B7280] text-xl font-medium tracking-widest block mb-2">
                                                {features[currentFeature].number}
                                            </span>
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00E08F] leading-tight">
                                                {features[currentFeature].title}
                                            </h3>
                                        </motion.div>

                                        {/* Feature Cards */}
                                        <div className="grid grid-cols-1 gap-4">
                                            {features[currentFeature].cards.map((card, i) => (
                                                <motion.div
                                                    key={`${currentFeature}-${i}`}
                                                    className="bg-black/60 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-6 hover:border-[#00E08F]/30 transition-all"
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.08 }}
                                                    whileHover={{
                                                        boxShadow: '0 8px 32px rgba(0, 224, 143, 0.15)',
                                                        y: -2
                                                    }}
                                                >
                                                    <p className="text-[#9CA3AF] text-base leading-relaxed">
                                                        {card}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Feature Button */}
                                        {features[currentFeature].button && (
                                            <motion.button
                                                onClick={features[currentFeature].button.action}
                                                className="mt-6 px-8 py-4 bg-[#00E08F] text-black font-semibold rounded-xl hover:bg-[#00E08F]/90 transition-all shadow-lg shadow-[#00E08F]/20 hover:shadow-[#00E08F]/40 hover:scale-105 active:scale-95"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {features[currentFeature].button.text}
                                            </motion.button>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>


                        </div>


                        {/* RIGHT - Robot Mascot Only (NO phone) */}
                        <motion.div
                            className="relative lg:absolute lg:bottom-50 lg:-right-62 h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto flex flex-col items-center justify-end gap-12 lg:mb-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Robot Mascot */}
                            <div className="relative w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[450px]">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <video
                                        key="robot-mascot"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain"
                                    >
                                        <source
                                            src="https://res.cloudinary.com/dlrlet9fg/video/upload/c_crop,h_1080,w_510/v1769278556/robot1_ioekuk.webm"
                                            type="video/mp4"
                                        />
                                    </video>
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 via-30% to-transparent pointer-events-none" />
                            </div>

                            {/* Feature indicator */}
                            <motion.div
                                key={currentFeature}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center"
                            >
                                <p className="text-white/40 text-sm uppercase tracking-wider">
                                    Feature {features[currentFeature].number}
                                </p>
                                <p className="text-white text-lg font-medium mt-2">
                                    {features[currentFeature].title}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Global Bottom Blend Overlay - Ensures seamless transition to next section */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/95 to-transparent z-[60] pointer-events-none" />
            </div>
        </div>
    );
}

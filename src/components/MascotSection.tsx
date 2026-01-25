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


                {/* Right Circuit Decoration - Tracks Specific Bracket Style */}



                {/* Sidebar Navigation - Desktop Only - Hexagon Style Vertical Column */}
                <div className="absolute left-30 top-1/2 -translate-y-1/2 flex-col gap-8 z-[90] hidden lg:flex">
                    <div className="relative w-[60px] h-[180px] flex flex-col items-center justify-center gap-6">
                        {/* SVG Background Border & Glow - Vertical */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 180" fill="none">
                            <path
                                d="M 1 20 L 1 160 L 30 179 L 59 160 L 59 20 L 30 1 Z"
                                stroke="#00E08F"
                                strokeWidth="1.5"
                                fill="rgba(0,0,0,0.8)"
                                className="drop-shadow-[0_0_8px_rgba(0,224,143,0.4)]"
                            />
                        </svg>

                        {/* Content (Buttons Vertical) */}
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <motion.button
                                onClick={prevFeature}
                                className="text-white hover:text-[#00E08F] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={nextFeature}
                                className="text-white hover:text-[#00E08F] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
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


                <div className="container-custom relative h-full flex items-center z-30">
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
                        <div className="space-y-10 relative pt-24 lg:pt-0">



                            <Reveal direction="up">
                                <div className="mb-16 ml-12">
                                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider">
                                        Tracks
                                    </h2>
                                </div>
                            </Reveal>

                            <div className="relative min-h-[400px] lg:h-[500px] h-auto overflow-visible z-[50]">
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
                                        className="relative lg:absolute w-full lg:inset-0 space-y-8"
                                    >
                                        {/* Feature Number and Title */}
                                        <motion.div
                                            className="space-y-4 ml-12"
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
                                        <div className="grid grid-cols-1 gap-4 ml-12 mr-4">
                                            {features[currentFeature].cards.map((card, i) => (
                                                <motion.div
                                                    key={`${currentFeature}-${i}`}
                                                    className="relative group"
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.08 }}
                                                >
                                                    {/* Outer Border Container */}
                                                    <div
                                                        className="bg-[#1F2937]"
                                                        style={{
                                                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                                            padding: '1px'
                                                        }}
                                                    >
                                                        {/* Inner Content Container */}
                                                        <div
                                                            className="bg-black/60 backdrop-blur-sm p-6 h-full"
                                                            style={{
                                                                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                                                            }}
                                                        >
                                                            <p className="text-[#9CA3AF] text-base leading-relaxed">
                                                                {card}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Feature Button */}
                                        {features[currentFeature].button && (
                                            <div className="mt-12 ml-16 md:ml-12 relative z-[90] inline-block">
                                                <motion.button
                                                    onClick={features[currentFeature].button.action}
                                                    className="relative group cursor-pointer border-none bg-transparent p-0 outline-none"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <div
                                                        className="p-[1px] bg-[#00E08F] transition-all duration-300 group-hover:bg-[#00E08F] group-hover:shadow-[0_0_15px_rgba(0,224,143,0.4)]"
                                                        style={{
                                                            clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)',
                                                            filter: 'drop-shadow(0 0 5px rgba(0, 224, 143, 0.2))'
                                                        }}
                                                    >
                                                        <div
                                                            className="relative flex items-center justify-center px-10 py-4 bg-black/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#00E08F]/20"
                                                            style={{
                                                                clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)'
                                                            }}
                                                        >
                                                            <span className="text-[#00E08F] font-bold text-lg tracking-wide uppercase group-hover:text-white transition-colors">
                                                                {features[currentFeature].button.text}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.button>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation Arrows - Mobile Only (Bottom) */}
                            <div className="flex justify-start mt-2 ml-16 md:ml-12 relative z-[90] lg:hidden">
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
                                            onClick={prevFeature}
                                            className="text-white hover:text-[#00E08F] transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </motion.button>

                                        <motion.button
                                            onClick={nextFeature}
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
                            </div>


                        </div>


                        {/* RIGHT - Robot Mascot Only (NO phone) */}
                        <motion.div
                            className="relative lg:absolute lg:bottom-50 lg:-right-62 h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto flex flex-col items-center justify-end gap-12 lg:mb-0 mt-12 lg:mt-0 z-[70]"
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

                        </motion.div>
                    </div>
                </div>

                {/* Global Bottom Blend Overlay - Ensures seamless transition to next section */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/95 to-transparent z-[25] pointer-events-none" />
            </div>
        </div>
    );
}

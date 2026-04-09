'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FadeIn, Floating, GlowPulse } from './AnimationWrappers';
import { Parallax, MagneticButton, Reveal, GradientText, MorphingBlob } from './AdvancedAnimations';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useState, useEffect } from 'react';

/* ── Registration Countdown Timer ────────────────────────────── */
function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Deadline: 7th May 2026 midnight (IST)
        const targetDate = new Date('2026-05-07T23:59:59+05:30').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(d).padStart(2, '0'),
                hours: String(h).padStart(2, '0'),
                minutes: String(m).padStart(2, '0'),
                seconds: String(s).padStart(2, '0')
            });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        // Prevents hydration mismatch by reserving space layout identical to the active timer
        return <div className="h-[72px] sm:h-[84px] md:h-[96px] w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] mx-auto invisible" />;
    }

    return (
        <div className="flex flex-col items-center pt-2 sm:pt-4 mx-auto w-full z-20">
            <p className="text-[#00E08F] font-accent uppercase tracking-[0.2em] text-[8px] sm:text-[10px] mb-2 sm:mb-3 opacity-80 shadow-[#00E08F]">
                Registration Closes In
            </p>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 font-mono">
                {/* Days */}
                <div className="flex flex-col items-center">
                    <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] flex items-center justify-center bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-widest">{timeLeft.days}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-white/50 mt-1 sm:mt-2 uppercase tracking-wide">Days</span>
                </div>
                
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00E08F] animate-pulse pb-5 sm:pb-6">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                    <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] flex items-center justify-center bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-widest">{timeLeft.hours}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-white/50 mt-1 sm:mt-2 uppercase tracking-wide">Hrs</span>
                </div>

                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00E08F] animate-pulse pb-5 sm:pb-6">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                    <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] flex items-center justify-center bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-widest">{timeLeft.minutes}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-white/50 mt-1 sm:mt-2 uppercase tracking-wide">Min</span>
                </div>

                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00E08F] animate-pulse pb-5 sm:pb-6">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                    <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] flex items-center justify-center bg-[#00E08F]/10 border border-[#00E08F]/30 rounded-xl backdrop-blur-md shadow-[0_0_15px_rgba(0,224,143,0.15)]">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00E08F] tracking-widest">{timeLeft.seconds}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-[#00E08F]/50 mt-1 sm:mt-2 uppercase tracking-wide shadow-[#00E08F]">Sec</span>
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    const containerRef = useRef(null);

    // Typewriter effect for description
    const description = "Zyro is the annual Robotics and Hardware hackathon of Kalyani Government Engineering College! Be ready for 24 hours of relentless building, where robotics meets raw hardware engineering. Join Zyro for an intensive hackathon dedicated to crafting the future at the intersection of silicon and nature.";
    const { displayedText, isComplete } = useTypewriter(description, 30, 1000);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-start md:items-center pt-24 md:pt-24 lg:pt-24 md:pb-10 lg:pb-12 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[#070B0B]" />
            <MorphingBlob className="w-[600px] h-[600px] top-1/4 -left-1/4" />

            {/* FAQ Style Background Image */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image
                    src="/images/hero-leaves.jpg"
                    alt="Tropical leaves background"
                    fill
                    className="object-cover opacity-80 scale-110"
                />
            </motion.div>

            {/* FAQ Style Global Overlays */}
            <div className="absolute inset-0 bg-[#070B0B]/30 z-[1] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-[#070B0B] via-[#070B0B]/90 to-transparent z-[1] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />
            {/* Right edge blend (Middle of screen) - Extended smooth fade */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#070B0B] from-30% via-[#070B0B]/90 via-50% to-transparent" />

            {/* Foreground Content (Leaf + Video) */}
            <motion.div className="absolute inset-0 z-[2]" style={{ y: backgroundY }}>
                {/* Right Half Video Background */}
                <div
                    className="absolute bottom-0 md:top-25 right-0 w-full lg:w-1/2 h-[500px] md:h-full z-[1] pointer-events-none block"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)'
                    }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain object-center md:object-right md:translate-x-16 scale-90 md:scale-[0.85]"
                    >
                        <source src="/videos/hero_m4_bg.mp4" type="video/mp4" />
                    </video>
                    {/* Left edge blend for video - Stronger - Desktop Only */}
                    <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#070B0B] from-20% via-[#070B0B]/80 via-40% to-transparent pointer-events-none hidden md:block" />
                </div>
            </motion.div>

            {/* Mobile Text Visibility Overlay - Darkens background video/image only on mobile */}
            <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none md:hidden" />

            <motion.div
                className="container-custom relative z-10 w-full"
                style={{ y: textY, opacity }}
            >
                <div className="flex flex-col justify-center items-center w-full mt-6 md:mt-8 lg:mt-8 z-20">
                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center space-y-5 md:space-y-3 lg:space-y-4 w-full max-w-4xl mx-auto">
                        
                        {/* Logo Container */}
                        <div className="flex flex-col items-center text-center space-y-6 md:space-y-3 lg:space-y-4 w-full">
                            <motion.div
                                initial={{ y: 100, rotateX: -90 }}
                                animate={{ y: 0, rotateX: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                style={{ transformOrigin: 'bottom' }}
                            >
                                <motion.img
                                    src="https://res.cloudinary.com/dkxskaege/image/upload/v1775026905/Zyro-logo_qabb2l.png"
                                    alt="Zyro Logo"
                                    className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[650px] h-auto object-contain mx-auto"
                                    animate={{
                                        filter: [
                                            'drop-shadow(0 0 15px rgba(0, 224, 143, 0.4))',
                                            'drop-shadow(0 0 30px rgba(0, 224, 143, 0.7))',
                                            'drop-shadow(0 0 15px rgba(0, 224, 143, 0.4))'
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Content (Description) */}
                            <Reveal delay={0.6} direction="up">
                                {/* Outer div pre-allocates space using invisible full text */}
                                <div className="relative text-xs sm:text-sm md:text-base max-w-xl xl:max-w-3xl leading-relaxed text-center mx-auto">
                                    {/* Invisible spacer — holds full height */}
                                    <p className="invisible select-none" aria-hidden="true">
                                        {description}
                                    </p>
                                    {/* Visible typewriter overlay */}
                                    <p className="absolute inset-0 text-[#A1A1A1]">
                                        {displayedText}
                                        {!isComplete && (
                                            <span className="inline-block w-0.5 h-4 bg-[#00E08F] ml-0.5 animate-pulse" />
                                        )}
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Registration Timer */}
                        <Reveal delay={0.7} direction="up">
                            <div className="-mt-1 sm:-mt-2 md:-mt-3 xl:-mt-2 relative z-20">
                                <CountdownTimer />
                            </div>
                        </Reveal>

                        {/* Buttons Area */}
                        <div className="flex flex-col items-center w-full z-20 mt-6 md:mt-3 lg:mt-4 mb-safe pb-10 md:pb-4">
                            <Reveal delay={0.8} direction="up">
                                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center w-full">
                                    {/* Register Now Button */}
                                    <a
                                        href="https://www.namespace.world/events/256WHF"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group cursor-pointer w-full max-w-[260px] sm:max-w-none sm:w-52 md:w-64 block"
                                        style={{ filter: 'drop-shadow(0 0 5px rgba(0, 224, 143, 0.2))' }}
                                    >
                                        <div
                                            className="p-[1px] bg-[#00E08F] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,143,0.5)]"
                                            style={{ clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)' }}
                                        >
                                            <div
                                                className="relative flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-black/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#00E08F]/20"
                                                style={{ clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)' }}
                                            >
                                                <span className="text-[#00E08F] font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase group-hover:text-black transition-colors font-accent whitespace-nowrap">
                                                    Register Now
                                                </span>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Download Brochure Button */}
                                    <a
                                        href="Brochure/Zyro%20Brouchre.pdf"
                                        download="Zyro_Hackathon_Brochure.pdf"
                                        className="relative group cursor-pointer w-full max-w-[260px] sm:max-w-none sm:w-52 md:w-64 block"
                                    >
                                        <div
                                            className="p-[1px] bg-[#00E08F]/50 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                            style={{ clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)' }}
                                        >
                                            <div
                                                className="relative flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-black/60 backdrop-blur-md transition-colors duration-300 group-hover:bg-black/80"
                                                style={{ clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)' }}
                                            >
                                                <span className="text-white font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase group-hover:text-[#00E08F] transition-colors font-accent whitespace-nowrap">
                                                    Brochure
                                                </span>
                                            </div>
                                        </div>
                                    </a>



                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1 h-2 bg-[#00E08F] rounded-full"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

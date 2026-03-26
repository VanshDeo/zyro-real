'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FadeIn, Floating, GlowPulse } from './AnimationWrappers';
import { Parallax, MagneticButton, Reveal, GradientText, MorphingBlob } from './AdvancedAnimations';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
    const containerRef = useRef(null);
    console.log('ZYRO 2026 Best.');
    // Typewriter effect for description
    const description = "Be ready for 24 hours of relentless building, where robotics meets raw hardware engineering. Join Zyro for an intensive hackathon dedicated to crafting the future at the intersection of silicon and nature.";
    const { displayedText, isComplete } = useTypewriter(description, 30, 1000);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
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
                        className="w-full h-full object-contain object-center md:object-right md:translate-x-16"
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
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col min-h-[calc(100vh-160px)] md:min-h-0 space-y-8 lg:pt-0 pt-6">
                        {/* Logo Container - Big and centered on mobile */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                            <motion.div
                                initial={{ y: 100, rotateX: -90 }}
                                animate={{ y: 0, rotateX: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                style={{ transformOrigin: 'bottom' }}
                            >
                                <motion.img
                                    src="https://res.cloudinary.com/dkxskaege/image/upload/v1769346773/Zyro_kvywql.png"
                                    alt="Zyro Logo"
                                    className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain mx-auto lg:mx-0"
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

                            {/* Content (Description) - Immediately under logo on mobile */}
                            <Reveal delay={0.6} direction="up">
                                <p className="text-[#A1A1A1] text-base sm:text-lg md:text-xl max-w-md leading-relaxed lg:pl-12">
                                    {displayedText}
                                    {!isComplete && (
                                        <span className="inline-block w-0.5 h-5 bg-[#00E08F] ml-1 animate-pulse" />
                                    )}
                                </p>
                            </Reveal>
                        </div>

                        {/* Buttons Area - Directly under content */}
                        <div className="flex flex-col items-center lg:items-start pb-10 md:pb-0">
                            <Reveal delay={0.8} direction="up">
                                <div className="flex flex-col sm:flex-row flex-wrap gap-6 lg:pl-12 items-center">
                                    {/* Register Now Button */}
                                    
                                    
                                    
                                    {/* <div
                                        className="relative group cursor-pointer w-full sm:w-64"
                                        style={{ filter: 'drop-shadow(0 0 5px rgba(0, 224, 143, 0.2))' }}
                                    
                                    >
                                        <div 
                                            className="p-[1px] bg-[#00E08F] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,224,143,0.4)]"
                                            style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
                                        >

                                         
                                                
                                            <div
                                                className="relative flex items-center justify-center px-10 py-5 bg-black/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#00E08F]/20"
                                                style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
                                            >
                                                <a
                                                    href="https://www.namespace.world/events/256WHF"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#00E08F] font-bold text-xl tracking-wide uppercase group-hover:text-white transition-colors"
                                                >
                                                    Register Now
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}




                                    <div
    className="relative group cursor-pointer w-full sm:w-64"
    style={{ filter: 'drop-shadow(0 0 5px rgba(0, 224, 143, 0.2))' }}
    onClick={() => window.open("https://www.namespace.world/events/256WHF", "_blank")}
>
    <div 
        className="p-[1px] bg-[#00E08F] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,224,143,0.4)]"
        style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
    >
        <div
            className="relative flex items-center justify-center px-10 py-5 bg-black/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#00E08F]/20"
            style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
        >
            <span className="text-[#00E08F] font-bold text-xl tracking-wide uppercase group-hover:text-white transition-colors">
                Register Now
            </span>
        </div>
    </div>
</div>


                                    {/* Download Brochure Button */}
                                    {/* <div className="relative group cursor-pointer w-full sm:w-64">
                                        <div
                                            className="p-[1px] bg-white/50 transition-all duration-300 group-hover:bg-[#00E08F]"
                                            style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
                                        >
                                            <div
                                                className="relative flex items-center justify-center px-10 py-5 bg-black/60 backdrop-blur-md transition-colors duration-300 group-hover:bg-black/80"
                                                style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
                                            >
                                                <a
                                                    href="Brochure\Zyro Brouchre.pdf"
                                                    download="Zyro_Hackathon_Brochure.pdf"
                                                    className="text-white font-bold text-xl tracking-wide uppercase group-hover:text-[#00E08F] transition-colors"
                                                >
                                                    Brochure
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div
    className="relative group cursor-pointer w-full sm:w-64"
    onClick={() => {
        const link = document.createElement("a");
        link.href = "Brochure/Zyro Brouchre.pdf";
        link.download = "Zyro_Hackathon_Brochure.pdf";
        link.click();
    }}
>
    <div
        className="p-[1px] bg-[#00E08F]/50 transition-all duration-300 group-hover:bg-white"
        style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
    >
        <div
            className="relative flex items-center justify-center px-10 py-5 bg-black/60 backdrop-blur-md transition-colors duration-300 group-hover:bg-black/80"
            style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}
        >
            <span className="text-white font-bold text-xl tracking-wide uppercase group-hover:text-[#00E08F] transition-colors">
                Brochure
            </span>
        </div>
    </div>
</div>



                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Content - Floating Cards (Desktop Only) */}
                    <div className="relative hidden lg:block h-[500px]">

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

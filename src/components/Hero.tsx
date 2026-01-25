'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FadeIn, Floating, GlowPulse } from './AnimationWrappers';
import { Parallax, MagneticButton, Reveal, GradientText, MorphingBlob } from './AdvancedAnimations';

export default function Hero() {
    const containerRef = useRef(null);
    console.log('sri**** ****ra rendi');
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
            {/* <MorphingBlob className="w-[400px] h-[400px] bottom-1/4 right-0" /> */}

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
                {/* Left Leaf Background */}
                <motion.div
                    className="absolute top-0 left-0 w-[60%] h-full z-0 pointer-events-none"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {/* <img
                        src="/leaf-left.png"
                        alt="Background Leaf"
                        className="w-full h-full object-cover object-left opacity-80"
                    /> */}
                </motion.div>

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
                    {/* Top edge blend removed in favor of CSS mask for better image blending */}
                </div>
            </motion.div>

            {/* Mobile Text Visibility Overlay - Darkens background video/image only on mobile */}
            <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none md:hidden" />

            <motion.div
                className="container-custom relative z-10"
                style={{ y: textY, opacity }}
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Headline with Staggered Animation */}
                        <div className="overflow-hidden">
                            {/* <motion.h1
                                className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    initial={{ y: 100, rotateX: -90 }}
                                    animate={{ y: 0, rotateX: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                    style={{ transformOrigin: 'bottom' }}
                                >
                                    <span className="text-white inline-block">Tech</span>
                                </motion.div>
                                <motion.div
                                    initial={{ y: 100, rotateX: -90 }}
                                    animate={{ y: 0, rotateX: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                    style={{ transformOrigin: 'bottom' }}
                                >
                                    <GradientText className="font-extrabold">Nature</GradientText>
                                </motion.div>
                            </motion.h1> */}

                            <motion.div
                                initial={{ y: 100, rotateX: -90 }}
                                animate={{ y: 0, rotateX: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                style={{ transformOrigin: 'bottom' }}
                            >
                                <motion.img
                                    src="https://res.cloudinary.com/dkxskaege/image/upload/v1769346773/Zyro_kvywql.png"
                                    alt="Zyro Logo"
                                    className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
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
                        </div>

                        <Reveal delay={0.6} direction="up">
                            <p className="text-[#A1A1A1] text-sm sm:text-base md:text-lg max-w-md leading-relaxed lg:ml-12">
                                Be ready for 24 hours of relentless building, where robotics meets raw hardware engineering. Join Zyro for an intensive hackathon dedicated to crafting the future at the intersection of silicon and nature.
                            </p>
                        </Reveal>

                        <Reveal delay={0.8} direction="up">
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:ml-12 items-center">
                                {/* Register Now Button - Hexagonal Border Fix */}
                                <div
                                    className="relative group cursor-pointer w-full sm:w-64"
                                    style={{
                                        filter: 'drop-shadow(0 0 5px rgba(0, 224, 143, 0.2))'
                                    }}
                                >
                                    {/* Border Container (The Background acts as border) */}
                                    <div
                                        className="p-[1px] bg-[#00E08F] transition-all duration-300 group-hover:bg-[#00E08F] group-hover:shadow-[0_0_15px_rgba(0,224,143,0.4)]"
                                        style={{
                                            clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)'
                                        }}
                                    >
                                        {/* Inner Content */}
                                        <div
                                            className="relative flex items-center justify-center px-10 py-4 bg-black/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#00E08F]/20"
                                            style={{
                                                clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)'
                                            }}
                                        >
                                            <a
                                                href="https://unstop.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#00E08F] font-bold text-lg tracking-wide uppercase group-hover:text-white transition-colors"
                                            >
                                                Register Now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Download Brochure Button - Hexagonal Border Fix */}
                                <div
                                    className="relative group cursor-pointer w-full sm:w-64"
                                >
                                    {/* Border Container */}
                                    <div
                                        className="p-[1px] bg-white/50 transition-all duration-300 group-hover:bg-[#00E08F]"
                                        style={{
                                            clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)'
                                        }}
                                    >
                                        {/* Inner Content */}
                                        <div
                                            className="relative flex items-center justify-center px-4 py-4 bg-black/60 backdrop-blur-md transition-colors duration-300 group-hover:bg-black/80"
                                            style={{
                                                clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)'
                                            }}
                                        >
                                            <a
                                                href="/Brochure/hackathonBrochure.pdf"
                                                download="Zyro_Hackathon_Brochure.pdf"
                                                className="text-white font-bold text-lg tracking-wide uppercase group-hover:text-[#00E08F] transition-colors"
                                            >
                                                Download Brochure
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Tags with staggered reveal */}
                        {/* <Reveal delay={1.0} direction="left">
                            <div className="flex flex-wrap gap-3 pt-4">
                                <motion.span
                                    className="tag"
                                    whileHover={{ borderColor: '#00E08F', color: '#00E08F', scale: 1.05 }}
                                >
                                    <motion.span
                                        className="green-dot"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    Intersection of technology and nature
                                </motion.span>
                            </div>
                        </Reveal> */}

                        {/* <Reveal delay={1.2} direction="left">
                            <div className="flex flex-wrap gap-3">
                                <motion.span
                                    className="tag"
                                    whileHover={{ borderColor: '#00E08F', color: '#00E08F', scale: 1.05 }}
                                >
                                    Pioneering green tech
                                </motion.span>
                                <motion.span
                                    className="tag"
                                    whileHover={{ borderColor: '#00E08F', color: '#00E08F', scale: 1.05 }}
                                >
                                    Creating a cleaner world
                                </motion.span>
                            </div>
                        </Reveal> */}

                    </div>

                    {/* Right Content - Floating Cards */}
                    <div className="relative hidden lg:block h-[500px]">
                        {/* Clients Card */}
                        {/* <Parallax speed={0.3}>
                            <motion.div
                                className="glass rounded-2xl p-4"
                                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                whileHover={{ boxShadow: '0 0 40px rgba(0, 224, 143, 0.3)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                className={`w-10 h-10 rounded-full border-2 border-[#070B0B] ${i === 0 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                                                    i === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                                                        'bg-gradient-to-br from-purple-400 to-purple-600'
                                                    }`}
                                                initial={{ scale: 0, x: 20 }}
                                                animate={{ scale: 1, x: 0 }}
                                                transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <motion.p
                                            className="text-white font-bold text-lg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.1 }}
                                        >
                                            578M +
                                        </motion.p>
                                        <p className="text-[#A1A1A1] text-sm">Clients Active</p>
                                    </div>
                                </div>
                            </motion.div>
                        </Parallax> */}

                        {/* Green Innovation Card */}
                        {/* <Parallax speed={0.5}>
                            <Floating duration={5} distance={12}>
                                <motion.div
                                    className="absolute top-24 right-0 glass-green rounded-2xl p-5 max-w-xs"
                                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-white font-semibold text-lg">Green innovation</h3>
                                            <p className="text-[#A1A1A1] text-sm mt-1">
                                                Join us in building harmonious balance between nature
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Floating>
                        </Parallax> */}

                        {/* Innovative Nature Card */}
                        {/* <Parallax speed={0.7}>
                            <Floating duration={6} distance={8}>
                                <motion.div
                                    className="absolute top-64 left-1/4 glass rounded-2xl p-5 max-w-xs"
                                    initial={{ opacity: 0, y: 50, rotateX: 20 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                    whileHover={{ boxShadow: '0 0 40px rgba(0, 224, 143, 0.2)' }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <motion.span
                                            className="green-dot"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                boxShadow: ['0 0 5px #00E08F', '0 0 20px #00E08F', '0 0 5px #00E08F']
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <h3 className="text-white font-semibold">Innovative nature</h3>
                                    </div>
                                    <p className="text-[#A1A1A1] text-sm">
                                        We&apos;re dedicated to preserving the planet while enhancing everyday life.
                                    </p>
                                </motion.div>
                            </Floating>
                        </Parallax> */}

                        {/* Sustainable Future Card */}
                        {/* <Parallax speed={0.4}>
                            <Floating duration={4.5} distance={10}>
                                <motion.div
                                    className="absolute bottom-32 right-8 glass rounded-2xl p-4"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 1.1, type: 'spring' }}
                                    whileHover={{ boxShadow: '0 0 40px rgba(0, 224, 143, 0.2)' }}
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="w-12 h-12 rounded-xl overflow-hidden"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Image
                                                src="/images/forest-preview.jpg"
                                                alt="Forest"
                                                width={48}
                                                height={48}
                                                className="object-cover w-full h-full"
                                            />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">Nature for a</h3>
                                            <p className="text-[#00E08F] text-sm">sustainable future</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Floating>
                        </Parallax> */}

                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator with enhanced animation */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 cursor-pointer"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    whileHover={{ borderColor: '#00E08F' }}
                >
                    <motion.div
                        className="w-1.5 h-3 bg-[#00E08F] rounded-full"
                        animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
                <motion.p
                    className="text-[#A1A1A1] text-xs mt-2 text-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Scroll
                </motion.p>
            </motion.div>
        </section>
    );
}

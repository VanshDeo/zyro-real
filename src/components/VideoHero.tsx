'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface VideoHeroProps {
    videoSrc?: string;
    posterSrc?: string;
    children: React.ReactNode;
}

export default function VideoHero({ videoSrc, posterSrc, children }: VideoHeroProps) {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    return (
        <section ref={containerRef} className="relative min-h-screen overflow-hidden">
            {/* Video Background */}
            {videoSrc && (
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ scale }}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={posterSrc}
                        onLoadedData={() => setIsLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#070B0B]/70 via-[#070B0B]/50 to-[#070B0B]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#070B0B]/80 to-transparent" />
                </motion.div>
            )}

            {/* Fallback gradient background when no video */}
            {!videoSrc && (
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#070B0B] via-[#0a1a15] to-[#070B0B]">
                    {/* Animated gradient orbs */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00E08F]/10 blur-3xl"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00E08F]/5 blur-3xl"
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 40, 0],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    />
                </div>
            )}

            {/* Content */}
            <motion.div
                className="relative z-10"
                style={{ opacity }}
            >
                {children}
            </motion.div>
        </section>
    );
}

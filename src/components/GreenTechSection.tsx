'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimationWrappers';
import { Parallax, Reveal, MorphingBlob } from './AdvancedAnimations';
import AnimatedCounter from './AnimatedCounter';

export default function GreenTechSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section ref={containerRef} className="section relative overflow-hidden">
            {/* Background morphing blobs */}
            <MorphingBlob className="w-[400px] h-[400px] top-0 right-0 opacity-40" />
            <MorphingBlob className="w-[300px] h-[300px] bottom-1/4 left-0 opacity-30" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image Grid with Parallax */}
                    <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <StaggerItem>
                                <motion.div
                                    className="card p-0 overflow-hidden"
                                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 224, 143, 0.15)' }}
                                >
                                    <div className="relative aspect-square overflow-hidden">
                                        <motion.div style={{ y, rotate }} className="absolute inset-0">
                                            <Image
                                                src="/images/forest-canopy.jpg"
                                                alt="Forest canopy"
                                                fill
                                                className="object-cover hover:scale-110 transition-transform duration-700"
                                            />
                                        </motion.div>

                                        {/* Gradient overlay on hover */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-[#00E08F]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>
                                </motion.div>
                            </StaggerItem>
                            <StaggerItem>
                                <motion.div
                                    className="card p-4"
                                    whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 224, 143, 0.1)' }}
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-[#00E08F] flex items-center justify-center"
                                            animate={{
                                                boxShadow: [
                                                    '0 0 10px rgba(0, 224, 143, 0.3)',
                                                    '0 0 30px rgba(0, 224, 143, 0.6)',
                                                    '0 0 10px rgba(0, 224, 143, 0.3)'
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                        >
                                            <svg className="w-5 h-5 text-[#070B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <span className="text-white text-sm font-medium">Eco Certified</span>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        </div>
                        <div className="space-y-4 pt-8">
                            <StaggerItem>
                                <motion.div
                                    className="card p-4 relative overflow-hidden"
                                    whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 224, 143, 0.1)' }}
                                >
                                    {/* Animated progress ring */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 w-24 h-24"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="none"
                                                stroke="rgba(0, 224, 143, 0.1)"
                                                strokeWidth="2"
                                            />
                                            <motion.circle
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="none"
                                                stroke="#00E08F"
                                                strokeWidth="2"
                                                strokeDasharray="251.2"
                                                strokeDashoffset="50"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </motion.div>

                                    <p className="text-[#A1A1A1] text-sm mb-2">Carbon Neutral</p>
                                    <motion.p
                                        className="text-white text-2xl font-bold"
                                        animate={{
                                            color: ['#ffffff', '#00E08F', '#ffffff']
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        98%
                                    </motion.p>
                                </motion.div>
                            </StaggerItem>
                            <StaggerItem>
                                <motion.div
                                    className="card p-0 overflow-hidden"
                                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 224, 143, 0.2)' }}
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src="/images/earth-glow.jpg"
                                            alt="Earth glow"
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Animated glow ring overlay */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                            animate={{
                                                opacity: [0.3, 0.6, 0.3]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            <div className="w-3/4 h-3/4 rounded-full border border-[#00E08F]/50 shadow-[0_0_30px_rgba(0,224,143,0.3)]" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <Reveal direction="right">
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Pioneering green tech for{' '}
                                <motion.span
                                    className="text-[#00E08F] inline-block relative"
                                    animate={{
                                        textShadow: [
                                            '0 0 10px rgba(0, 224, 143, 0.3)',
                                            '0 0 30px rgba(0, 224, 143, 0.6)',
                                            '0 0 10px rgba(0, 224, 143, 0.3)'
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    eco-conscious
                                </motion.span>{' '}
                                living
                            </h2>
                        </Reveal>

                        <Reveal direction="right" delay={0.2}>
                            <motion.div
                                className="glass rounded-2xl p-6"
                                whileHover={{ boxShadow: '0 0 50px rgba(0, 224, 143, 0.2)' }}
                            >
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <Image
                                            src="/images/forest-preview.jpg"
                                            alt="Forest"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Nature for a</h3>
                                        <motion.p
                                            className="text-[#00E08F]"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            sustainable future
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>

                        {/* Animated Stats */}
                        <Reveal direction="right" delay={0.4}>
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                {[
                                    { value: 7000, suffix: '+', label: 'Tech Nature' },
                                    { value: 57.21, suffix: 'K', label: 'Tech solutions', decimals: 2 },
                                    { value: 8.721, suffix: 'K+', label: 'Environmental', decimals: 3 }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="text-center"
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <p className="stat-value">
                                            <AnimatedCounter
                                                end={stat.value}
                                                suffix={stat.suffix}
                                                duration={2500}
                                                decimals={stat.decimals || 0}
                                            />
                                        </p>
                                        <motion.p
                                            className="text-[#A1A1A1] text-sm mt-1"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                        >
                                            {stat.label}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Floating Background Glow */}
            <motion.div
                className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 224, 143, 0.08) 0%, transparent 70%)'
                }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </section>
    );
}

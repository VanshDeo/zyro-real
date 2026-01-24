'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FadeIn, ScaleIn, Floating } from './AnimationWrappers';
import { Parallax, ConnectingLine, Reveal, MorphingBlob } from './AdvancedAnimations';

export default function InnovationSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

    return (
        <section ref={containerRef} className="section relative overflow-hidden">
            {/* Morphing background */}
            <MorphingBlob className="w-[500px] h-[500px] top-0 left-1/4 opacity-50" />

            <div className="container-custom relative z-10">
                <Reveal direction="down">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Harness the power of green{' '}
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
                                innovation
                                {/* Underline animation */}
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-[#00E08F] to-transparent"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </motion.span>
                        </h2>
                    </div>
                </Reveal>

                <div className="relative">
                    {/* Main Terrarium Image */}
                    <motion.div style={{ scale }}>
                        <motion.div
                            className="glass rounded-3xl p-8 max-w-4xl mx-auto relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ boxShadow: '0 0 80px rgba(0, 224, 143, 0.2)' }}
                        >
                            {/* Connecting lines from center */}
                            <ConnectingLine className="absolute left-0 top-1/3 w-1/4" delay={0.5} />
                            <ConnectingLine className="absolute right-0 top-1/2 w-1/4" delay={0.7} />
                            <ConnectingLine className="absolute right-0 bottom-1/4 w-1/5" delay={0.9} />

                            <motion.div
                                className="relative aspect-[16/9] rounded-2xl overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div style={{ y: backgroundY }}>
                                    <Image
                                        src="/images/terrarium.jpg"
                                        alt="Green terrarium innovation"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#070B0B]/60 to-transparent" />

                                {/* Animated scan line */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 224, 143, 0.1) 50%, transparent 100%)',
                                        height: '100px'
                                    }}
                                    animate={{ y: ['-100px', '500px'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                />
                            </motion.div>

                            {/* Floating Info Cards with enhanced animations */}
                            <Parallax speed={0.3}>
                                <Floating duration={4} distance={8}>
                                    <motion.div
                                        className="absolute -left-4 top-1/4 glass rounded-xl p-4 max-w-[200px]"
                                        initial={{ opacity: 0, x: -100, rotateY: -30 }}
                                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 224, 143, 0.2)' }}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <motion.span
                                                className="green-dot"
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                            <span className="text-white text-sm font-medium">Green Innovation</span>
                                        </div>
                                        <p className="text-[#A1A1A1] text-xs">
                                            Sustainable technology solutions
                                        </p>
                                    </motion.div>
                                </Floating>
                            </Parallax>

                            <Parallax speed={0.5}>
                                <Floating duration={5} distance={10}>
                                    <motion.div
                                        className="absolute -right-4 top-1/3 glass rounded-xl p-4 max-w-[200px]"
                                        initial={{ opacity: 0, x: 100, rotateY: 30 }}
                                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7, duration: 0.8 }}
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 224, 143, 0.2)' }}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <motion.div
                                                className="w-8 h-8 rounded-lg bg-[#00E08F]/20 flex items-center justify-center"
                                                whileHover={{ backgroundColor: 'rgba(0, 224, 143, 0.4)', rotate: 10 }}
                                            >
                                                <svg className="w-4 h-4 text-[#00E08F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </motion.div>
                                            <span className="text-white text-sm font-medium">Quality First</span>
                                        </div>
                                        <p className="text-[#A1A1A1] text-xs">
                                            Premium eco-friendly products
                                        </p>
                                    </motion.div>
                                </Floating>
                            </Parallax>

                            <Parallax speed={0.4}>
                                <Floating duration={4.5} distance={12}>
                                    <motion.div
                                        className="absolute -right-8 bottom-1/4 glass rounded-xl p-4 max-w-[180px]"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.9, duration: 0.8 }}
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 224, 143, 0.2)' }}
                                    >
                                        <p className="text-[#00E08F] text-sm font-medium">Nature for a</p>
                                        <p className="text-white text-sm">sustainable future</p>
                                    </motion.div>
                                </Floating>
                            </Parallax>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background Glow with parallax */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 224, 143, 0.1) 0%, transparent 70%)',
                    y: backgroundY
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </section>
    );
}
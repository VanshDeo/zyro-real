'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { StaggerContainer, StaggerItem } from './AnimationWrappers';
import { Parallax, Reveal, MagneticButton } from './AdvancedAnimations';

export default function IntersectionSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="section relative overflow-hidden">
            <div className="container-custom">
                <Reveal direction="right">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            The intersection of
                        </h2>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-[#00E08F]"
                            animate={{
                                textShadow: [
                                    '0 0 10px rgba(0, 224, 143, 0.3)',
                                    '0 0 20px rgba(0, 224, 143, 0.5)',
                                    '0 0 10px rgba(0, 224, 143, 0.3)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            technology and nature
                        </motion.h2>
                    </div>
                </Reveal>

                <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Forest Image Card with Parallax */}
                    <StaggerItem className="row-span-2">
                        <div className="row-span-2">
                            <motion.div
                                className="card group cursor-pointer h-full overflow-hidden"
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 224, 143, 0.15)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                                    <motion.div style={{ y: y1 }} className="absolute inset-0">
                                        <Image
                                            src="/images/forest-path.jpg"
                                            alt="Forest path"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B0B] via-transparent to-transparent" />

                                    {/* Hover overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-[#00E08F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </StaggerItem>

                    {/* Stats Card */}
                    <StaggerItem>
                        <div>
                            <motion.div
                                className="card h-full"
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 224, 143, 0.15)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-white font-semibold mb-2">
                                    Nature for a<br />
                                    <span className="text-[#00E08F]">sustainable future</span>
                                </h3>
                                <p className="text-[#A1A1A1] text-sm mb-6">
                                    We&apos;re dedicated to preserving the planet while enhancing everyday life.
                                </p>
                                <div className="space-y-3">
                                    <motion.div
                                        className="flex justify-between items-center"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-[#A1A1A1] text-sm">Tech Solutions</span>
                                        <motion.span
                                            className="text-white font-bold"
                                            whileHover={{ color: '#00E08F', scale: 1.1 }}
                                        >
                                            7000+
                                        </motion.span>
                                    </motion.div>
                                    <motion.div
                                        className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    />
                                    <motion.div
                                        className="flex justify-between items-center"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-[#A1A1A1] text-sm">Eco Projects</span>
                                        <motion.span
                                            className="text-white font-bold"
                                            whileHover={{ color: '#00E08F', scale: 1.1 }}
                                        >
                                            57.21K
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </StaggerItem>

                    {/* Experience Card */}
                    <StaggerItem>
                        <div>
                            <motion.div
                                className="card bg-[#00E08F]/10 border-[#00E08F]/30 h-full relative overflow-hidden"
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 20px 40px rgba(0, 224, 143, 0.25)',
                                    backgroundColor: 'rgba(0, 224, 143, 0.15)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Animated background gradient */}
                                <motion.div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 50%, rgba(0, 224, 143, 0.3) 0%, transparent 50%)'
                                    }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />

                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        Experience
                                    </h3>
                                    <h4 className="text-2xl md:text-3xl font-bold text-[#00E08F] mb-4">
                                        the future of<br />technology
                                    </h4>
                                    <MagneticButton>
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-[#00E08F] flex items-center justify-center cursor-pointer"
                                            whileHover={{ scale: 1.2, boxShadow: '0 0 40px rgba(0, 224, 143, 0.6)' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.svg
                                                className="w-5 h-5 text-[#070B0B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                whileHover={{ x: 3 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </motion.svg>
                                        </motion.div>
                                    </MagneticButton>
                                </div>
                            </motion.div>
                        </div>
                    </StaggerItem>

                    {/* Nature Image Card */}
                    <StaggerItem>
                        <div>
                            <motion.div
                                className="card group cursor-pointer h-full overflow-hidden"
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 224, 143, 0.15)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden">
                                    <motion.div style={{ y: y2 }} className="absolute inset-0">
                                        <Image
                                            src="/images/nature-stream.jpg"
                                            alt="Nature stream"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </motion.div>

                                    {/* Shimmer effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </StaggerItem>

                    {/* Icon Features */}
                    <StaggerItem>
                        <div>
                            <motion.div
                                className="card h-full"
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 224, 143, 0.15)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', label: 'Green Innovation' },
                                        { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', label: 'Smart Solutions' }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex flex-col items-center text-center p-4"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <motion.div
                                                className="w-12 h-12 rounded-xl bg-[#00E08F]/20 flex items-center justify-center mb-3"
                                                whileHover={{
                                                    backgroundColor: 'rgba(0, 224, 143, 0.4)',
                                                    rotate: 10,
                                                    boxShadow: '0 0 20px rgba(0, 224, 143, 0.4)'
                                                }}
                                            >
                                                <svg className="w-6 h-6 text-[#00E08F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                </svg>
                                            </motion.div>
                                            <span className="text-[#A1A1A1] text-xs">{item.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}

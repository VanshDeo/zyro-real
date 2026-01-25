'use client';

import { motion } from 'framer-motion';
import { Reveal } from './AdvancedAnimations';

export default function AboutSection() {
    return (
        <section className="section relative overflow-hidden bg-black py-20">
            {/* Left Circuit Decoration */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden md:block">
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

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* LEFT - Text Content */}
                    <div className="space-y-8">
                        {/* Big Heading - FAQ Style */}
                        <Reveal direction="up">
                            <div className="mb-2">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                    ABOUT ZYRO
                                </h2>
                            </div>
                        </Reveal>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00E08F] leading-tight mb-6">
                                Pioneering the Future of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E08F] to-[#00E08F]/50">
                                    Green Technology
                                </span>
                            </h3>
                            <p className="text-[#C2C2C2] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                                Zyro represents the convergence of sustainable innovation and advanced artificial intelligence. We are building an ecosystem where technology doesn't just serve humanity, but actively regenerates our planet.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-6">
                            {/* Feature Card 1 - Clipped Border */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative group"
                                style={{
                                    background: '#646464',
                                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                                    padding: '1px'
                                }}
                            >
                                <div
                                    className="relative bg-black w-full h-full p-6 flex items-start gap-4"
                                    style={{
                                        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                                    }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#00E08F]/10 flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#00E08F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">Sustainable Power</h4>
                                        <p className="text-[#C2C2C2] text-sm">Harnessing renewable energy sources to power next-generation computing infrastructure.</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature Card 2 - Clipped Border */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative group"
                                style={{
                                    background: '#646464',
                                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                                    padding: '1px'
                                }}
                            >
                                <div
                                    className="relative bg-black w-full h-full p-6 flex items-start gap-4"
                                    style={{
                                        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                                    }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#00E08F]/10 flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#00E08F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">AI Optimization</h4>
                                        <p className="text-[#C2C2C2] text-sm">Smart algorithms that dynamically adjust energy consumption for maximum efficiency.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT - Video Content with FAQ Style Border */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Wrapper for the clipped border effect */}
                        <div
                            className="relative w-full aspect-[4/5] sm:aspect-[691/920] max-w-md mx-auto lg:max-w-none"
                            style={{
                                background: '#646464',
                                clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)',
                                padding: '1px'
                            }}
                        >
                            <div
                                className="relative w-full h-full bg-black overflow-hidden"
                                style={{
                                    clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-80"
                                >
                                    <source
                                        src="https://res.cloudinary.com/dlrlet9fg/video/upload/c_crop,h_920,w_691/v1769283228/plant_oaq28v.webm"
                                        type="video/webm"
                                    />
                                    <source
                                        src="https://res.cloudinary.com/dlrlet9fg/video/upload/c_crop,h_920,w_691/v1769283228/plant_oaq28v.webm"
                                        type="video/mp4"
                                    />
                                </video>

                                {/* Overlay gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

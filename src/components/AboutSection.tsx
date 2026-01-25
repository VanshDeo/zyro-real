'use client';

import { motion } from 'framer-motion';
import { Reveal } from './AdvancedAnimations';

export default function AboutSection() {
    return (
        <section className="section relative overflow-hidden bg-black py-20">
            {/* Left Circuit Decoration - Standard FAQ Style - Desktop Only */}
            <div className="absolute left-0 top-0 pointer-events-none z-0 w-full h-full hidden lg:block">
                <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-80">
                    {/* Path matching About section flow */}
                    <path d="M50 0 L50 200 L80 230 L80 570 L50 600 L50 800" stroke="#00E08F" strokeWidth="2" fill="none" />

                    {/* Top Square Node */}
                    <rect x="46" y="0" width="8" height="8" fill="#00E08F" filter="url(#glow)" />

                    {/* Bottom Diamond Node */}
                    <rect x="46" y="600" width="8" height="8" fill="#00E08F" filter="url(#glow)" transform="rotate(45 50 604)" />

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
                                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white lg:ml-12">
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
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00E08F] leading-tight mb-6 lg:ml-12">
                                Pioneering the Future of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E08F] to-[#00E08F]/50">
                                    Green Technology
                                </span>
                            </h3>
                            <p className="text-[#C2C2C2] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl lg:ml-12">
                                Zyro represents the convergence of sustainable innovation and advanced artificial intelligence. We are building an ecosystem where technology doesn't just serve humanity, but actively regenerates our planet.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-6">
                            {/* Feature Card 1 - Constructed Border */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative group p-6 bg-black"
                            >
                                {/* Border Top (Shortened for Left Corner) */}
                                <div className="absolute top-0 left-[20px] right-0 h-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />
                                {/* Border Bottom (Shortened for Right Corner - Starts at 1px) */}
                                <div className="absolute bottom-0 left-[1px] right-[20px] h-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />
                                {/* Border Left (Shortened for Top Corner - Shifted to 1px) */}
                                <div className="absolute top-[20px] bottom-0 left-[1px] w-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />
                                {/* Border Right (Shortened for Bottom Corner) */}
                                <div className="absolute top-0 bottom-[20px] right-0 w-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />

                                {/* Angled Corner: Top-Left - SVG */}
                                <svg className="absolute top-0 left-0 w-[20px] h-[20px] pointer-events-none overflow-visible">
                                    <line x1="1" y1="20" x2="20" y2="0" stroke="#646464" strokeWidth="1" className="group-hover:stroke-[#00E08F] transition-colors" />
                                </svg>
                                {/* Angled Corner: Bottom-Right - SVG */}
                                <svg className="absolute bottom-0 right-0 w-[20px] h-[20px] pointer-events-none overflow-visible">
                                    <line x1="1" y1="20" x2="20" y2="0" stroke="#646464" strokeWidth="1" className="group-hover:stroke-[#00E08F] transition-colors" />
                                </svg>

                                <div className="relative w-full h-full flex items-start gap-4 z-10">
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

                            {/* Feature Card 2 - Constructed Border */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative group p-6 bg-black"
                            >
                                {/* Border Top (Shortened for Left Corner) */}
                                <div className="absolute top-0 left-[20px] right-0 h-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />
                                {/* Border Bottom (Shortened for Right Corner - Starts at 1px) */}
                                <div className="absolute bottom-0 left-[1px] right-[20px] h-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />
                                {/* Border Left (Shortened for Top Corner - Shifted to 1px) */}
                                <div className="absolute top-[20px] bottom-0 left-[1px] w-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />
                                {/* Border Right (Shortened for Bottom Corner) */}
                                <div className="absolute top-0 bottom-[20px] right-0 w-[1px] bg-[#646464] group-hover:bg-[#00E08F] transition-colors" />

                                {/* Angled Corner: Top-Left - SVG */}
                                <svg className="absolute top-0 left-0 w-[20px] h-[20px] pointer-events-none overflow-visible">
                                    <line x1="1" y1="20" x2="20" y2="0" stroke="#646464" strokeWidth="1" className="group-hover:stroke-[#00E08F] transition-colors" />
                                </svg>
                                {/* Angled Corner: Bottom-Right - SVG */}
                                <svg className="absolute bottom-0 right-0 w-[20px] h-[20px] pointer-events-none overflow-visible">
                                    <line x1="1" y1="20" x2="20" y2="0" stroke="#646464" strokeWidth="1" className="group-hover:stroke-[#00E08F] transition-colors" />
                                </svg>

                                <div className="relative w-full h-full flex items-start gap-4 z-10">
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

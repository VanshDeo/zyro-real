'use client';

import { motion } from 'framer-motion';
import { Reveal } from './AdvancedAnimations';
import { businessComponents } from '@/lib/businessComponentsData';



export default function BusinessModelSection() {
    return (
        <section className="section relative overflow-hidden bg-black min-h-screen flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                >
                    <source src="https://res.cloudinary.com/dlrlet9fg/video/upload/v1769270495/9a163233-0ae9-4c7d-873f-220ab0943ea0_e5wthk.mp4" type="video/webm" />
                </video>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Left Circuit Decoration */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg width="120" height="600" viewBox="0 0 120 600" className="opacity-90">
                    <line x1="60" y1="0" x2="60" y2="200" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="200" x2="90" y2="230" stroke="#00E08F" strokeWidth="2" />
                    <line x1="90" y1="230" x2="90" y2="370" stroke="#00E08F" strokeWidth="2" />
                    <line x1="90" y1="370" x2="60" y2="400" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="400" x2="60" y2="600" stroke="#00E08F" strokeWidth="2" />

                    <defs>
                        <filter id="glow-bm">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Right Circuit Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg width="120" height="600" viewBox="0 0 120 600" className="opacity-90">
                    <line x1="60" y1="0" x2="60" y2="200" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="200" x2="30" y2="230" stroke="#00E08F" strokeWidth="2" />
                    <line x1="30" y1="230" x2="30" y2="370" stroke="#00E08F" strokeWidth="2" />
                    <line x1="30" y1="370" x2="60" y2="400" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="400" x2="60" y2="600" stroke="#00E08F" strokeWidth="2" />

                    <defs>
                        <filter id="glow-bm2">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Heading - Left aligned like Shieldeum */}
            <div className="absolute top-[4%] left-[15%] z-10 mb-20 hidden md:block">
                <Reveal direction="up">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase mb-20" >
                        Timeline
                    </h2>
                </Reveal>
            </div>

            {/* Main Visualization Container - Full width for proper label positioning */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mt-20 md:mt-32 z-10">
                {/* Component Labels with Connecting Lines */}
                {businessComponents.map((component, index) => {
                    // Calculate diagonal line endpoint using trigonometry
                    const angleRad = (component.lineAngle * Math.PI) / 180;
                    const endX = Math.cos(angleRad) * component.lineLength;
                    const endY = Math.sin(angleRad) * component.lineLength;
                    const svgWidth = Math.abs(endX) + 40;
                    const svgHeight = Math.abs(endY) + 40;
                    const startX = svgWidth / 2;
                    const startY = 10;

                    return (
                        <motion.div
                            key={component.id}
                            className="absolute"
                            style={component.position}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Label Box with structured content */}
                            <div
                                className="px-6 py-4 text-white relative mb-6"
                                style={{
                                    borderLeft: component.border.includes('left') ? '1px solid rgb(59, 67, 67)' : 'none',
                                    borderRight: component.border.includes('right') ? '1px solid rgb(59, 67, 67)' : 'none',
                                    borderBottom: component.border.includes('bottom') ? '1px solid rgb(59, 67, 67)' : 'none',
                                    borderTop: component.border.includes('top') ? '1px solid rgb(59, 67, 67)' : 'none',
                                    borderRadius: component.border === 'right-bottom' ? '0 0 4px 0' :
                                        component.border === 'left-bottom' ? '0 0 0 4px' :
                                            component.border === 'right-top' ? '0 4px 0 0' :
                                                component.border === 'left-top' ? '4px 0 0 0' : '0',
                                    minWidth: '150px'
                                }}
                            >
                                {/* Number badge */}
                                <div
                                    className="absolute -top-3 -left-3 w-7 h-7 flex items-center justify-center text-xs font-bold"
                                    style={{
                                        backgroundColor: component.color,
                                        color: '#000',
                                        borderRadius: '4px',
                                        boxShadow: '0 0 10px rgba(0, 224, 143, 0.6)'
                                    }}
                                >
                                    {component.number}
                                </div>

                                {/* Date */}
                                <div
                                    className="text-xs font-semibold mb-2"
                                    style={{ color: component.color }}
                                >
                                    {component.date}
                                </div>

                                {/* Title */}
                                <div className="text-sm sm:text-base md:text-lg font-bold mb-1">
                                    {component.title}
                                </div>

                                {/* Description */}
                                <div className="text-xs text-gray-400">
                                    {component.description}
                                </div>
                            </div>

                            {/* Connecting Line - Diagonal/Angled */}
                            <svg
                                className={`absolute left-1/2 -translate-x-1/2 pointer-events-none ${component.lineAngle < 0 ? '-top-4' : 'top-full'}`}
                                width={svgWidth}
                                height={svgHeight}
                                style={{ overflow: 'visible' }}
                            >
                                <motion.line
                                    x1={startX}
                                    y1={startY}
                                    x2={startX + endX}
                                    y2={startY + endY}
                                    stroke="#00E08F"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                                />
                                <motion.circle
                                    cx={startX + endX}
                                    cy={startY + endY}
                                    r="4"
                                    fill="#00E08F"
                                    filter={`url(#glow-line-${component.id})`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                                />
                                <defs>
                                    <filter id={`glow-line-${component.id}`}>
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                            </svg>
                        </motion.div>
                    );
                })}

                {/* Central Visualization Area (Video provides the 3D elements) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 flex items-center justify-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {/* The video background shows the 3D isometric visualization */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

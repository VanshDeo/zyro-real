'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features } from '@/lib/featuresData';

/* ── Robot Video Center ──────────────────────────────────────── */
function RobotVideo({ className = '' }: { className?: string }) {
    return (
        <div className={`relative flex items-center justify-center pointer-events-none ${className}`}>
            <video
                autoPlay loop muted playsInline
                className="w-full h-auto object-contain relative z-10"
            >
                <source src="https://res.cloudinary.com/dlrlet9fg/video/upload/c_crop,h_1080,w_510/v1769278556/robot1_ioekuk.webm" type="video/webm" />
            </video>
        </div>
    );
}

/* ── Icon Node Wrapper ─────────────────────────────────────── */
const IconWrapper = ({
    children,
    className = "",
    isHighlighted = false,
    isHovered = false,
    animationDelay = 0,
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    isHighlighted?: boolean;
    isHovered?: boolean;
    animationDelay?: number;
    onClick?: () => void;
}) => (
    <div
        onClick={onClick}
        className={`
            backdrop-blur-xl rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
            ${isHighlighted
                ? "bg-[#070B0B]/80 border border-[#00E08F]/50 shadow-[0_0_20px_rgba(0,224,143,0.3)] animate-breathing-glow z-20"
                : `bg-[#070B0B]/60 border border-white/10 ${!isHovered && "animate-float"} z-10`
            }
            ${isHovered
                ? "bg-[#0A1612]/90 border-[#00E08F]/70 scale-110 shadow-[0_0_30px_rgba(0,224,143,0.4)] z-30"
                : "hover:bg-white/10 hover:border-white/20"
            }
            ${className}
        `}
        style={{ animationDelay: `${animationDelay}s` }}
    >
        {/* Rotating technical ring */}
        <div className={`absolute inset-[-4px] rounded-full border-[0.5px] border-dashed transition-all duration-300 pointer-events-none 
            ${isHovered ? "border-[#00E08F] animate-[spin_6s_linear_infinite]" : "border-[#00E08F]/20 animate-[spin_12s_linear_infinite_reverse]"}
        `} />
        {children}
    </div>
);

/* ── Main Connected Orbit Grid ───────────────────────────────── */
function OrbitGrid({ 
    selectedTrack, 
    setSelectedTrack 
}: { 
    selectedTrack: typeof features[0],
    setSelectedTrack: (f: typeof features[0]) => void 
}) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Layout configuration (Percentage-based Native Ellipse)
    // By using percentages instead of strict pixel scales, the nodes organically stretch out 
    // depending on whether the screen is narrow (mobile) or widescreen (desktop).
    const rx = 38; // Horizontal spread (Viewport %)
    const ry = 40; // Vertical spread (Viewport %)
    
    // The central cut-out gap for the SVG lines is modeled as an ellipse to perfectly match 
    // the bounding box shape of the preloaded central Dashboard Rectangle.
    const centralRx = 18; // Horizontal inner gap (%)
    const centralRy = 12; // Vertical inner gap (%)

    return (
        <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center mx-auto px-4 md:px-8">
            
            {/* Connecting Lines SVG */}
            <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none z-0">
                <defs>
                    <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                <g>
                    {features.map((feature, i) => {
                        let angleInDegrees = -90 + i * (360 / features.length);
                        // Visually nudge the perfectly-horizontal nodes downwards so they dodge the central dashboard on narrow screens
                        if (i === 2) angleInDegrees += 32;
                        if (i === 5) angleInDegrees -= 32;
                        const angleInRadians = angleInDegrees * (Math.PI / 180);

                        // Points on the geometry using pure percentages to match the HTML divs perfectly
                        // Start point originates from the ellipse bounding the central glass rectangle
                        const startX = `${50 + centralRx * Math.cos(angleInRadians)}%`;
                        const startY = `${50 + centralRy * Math.sin(angleInRadians)}%`;
                        // Slight inner tracking for the outer point to connect to the node border, not its center
                        const endX = `${50 + (rx - 4) * Math.cos(angleInRadians)}%`;
                        const endY = `${50 + (ry - 4) * Math.sin(angleInRadians)}%`;

                        const isHovered = hoveredId === feature.number;

                        return (
                            <g key={`connection-${feature.number}`}>
                                <line
                                    x1={startX}
                                    y1={startY}
                                    x2={endX}
                                    y2={endY}
                                    stroke={isHovered ? "#00E08F" : "rgba(255,255,255,0.15)"}
                                    strokeWidth={isHovered ? "3" : "1.5"}
                                    strokeDasharray={isHovered ? "0" : "6 6"}
                                    className="transition-all duration-300"
                                    style={{ opacity: isHovered ? 1 : 0.4 }}
                                    filter={isHovered ? "url(#glow-line)" : ""}
                                />
                                {/* Data traveling pulse */}
                                <circle 
                                    r={isHovered ? "4" : "2"} 
                                    fill={isHovered ? "#FFFFFF" : "#00E08F"} 
                                    filter="url(#glow-line)"
                                >
                                    <animateMotion
                                      dur={`${2.5 + (i * 0.2)}s`}
                                      repeatCount="indefinite"
                                      path={`M 50% 50% L ${endX} ${endY}`}
                                    />
                                </circle>
                            </g>
                        );
                    })}
                </g>
            </svg>

            {/* Hub Anchor - Fills container */}
            <div className="absolute inset-0 z-10">

                {/* Orbit Nodes mapped via Native Percentages */}
                {features.map((feature, i) => {
                    let angleInDegrees = -90 + i * (360 / features.length);
                    // Dynamically push the horizontal nodes downward below the bounding box of the central UI Rect 
                    if (i === 2) angleInDegrees += 32;
                    if (i === 5) angleInDegrees -= 32;
                    const angleInRadians = angleInDegrees * (Math.PI / 180);

                    // Dynamic coordinates allowing them to spread based on Viewport
                    const leftPos = 50 + rx * Math.cos(angleInRadians);
                    const topPos = 50 + ry * Math.sin(angleInRadians);

                    return (
                        <div
                            key={feature.number}
                            className="absolute z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${leftPos}%`, top: `${topPos}%` }}
                            onMouseEnter={() => setHoveredId(feature.number)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <IconWrapper
                                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[90px] lg:h-[90px]"
                                isHovered={hoveredId === feature.number}
                                animationDelay={i * 0.2}
                                onClick={() => setSelectedTrack(feature)}
                            >
                                <div className="text-[#00E08F] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-90 transition-all duration-300 group-hover:scale-110 flex items-center justify-center drop-shadow-[0_0_8px_rgba(0,224,143,0.9)]">
                                    {/* Advanced Dynamic PNG Re-coloring System */}
                                    {(feature.logo as React.ReactElement<any>)?.props?.src ? (
                                        <div 
                                            className="w-full h-full bg-[#00E08F]"
                                            style={{ 
                                                WebkitMaskImage: `url(${(feature.logo as React.ReactElement<any>).props.src})`, 
                                                WebkitMaskSize: 'contain', 
                                                WebkitMaskRepeat: 'no-repeat', 
                                                WebkitMaskPosition: 'center',
                                                maskImage: `url(${(feature.logo as React.ReactElement<any>).props.src})`,
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center'
                                            }}
                                        />
                                    ) : (
                                        React.cloneElement(feature.logo as React.ReactElement<any>, { className: "w-full h-full object-contain" })
                                    )}
                                </div>
                            </IconWrapper>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── Main Section Output ──────────────────────────────────────── */
export default function MascotSection() {
    // Feature[0] is default natively to prevent pop-up UI style, acts as constant Dashboard
    const [selectedTrack, setSelectedTrack] = useState<typeof features[0]>(features[0]);

    return (
        <section className="relative bg-black py-6 md:py-8 h-[100svh] min-h-[600px] overflow-hidden flex flex-col items-center">
            {/* Specific injected animations from the user's snippet */}
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-8px) scale(1.02); }
                    100% { transform: translateY(0px) scale(1); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(0, 224, 143, 0.3); }
                    50% { box-shadow: 0 0 45px 15px rgba(0, 224, 143, 0.15); }
                    100% { box-shadow: 0 0 20px 0px rgba(0, 224, 143, 0.3); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 3.5s ease-in-out infinite;
                }
                `}
            </style>

            {/* Background Robot Video */}
            <div className="absolute inset-x-0 top-0 bottom-0 z-0 flex items-center justify-center opacity-30 pointer-events-none translate-y-[10vh] md:translate-y-[15vh]">
                <RobotVideo className="w-[200px] sm:w-[300px] md:w-[450px] lg:w-[520px]" />
            </div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(0,224,143,0.1),rgba(0,0,0,0))]" />
            </div>

            {/* Titles */}
            <motion.div
                className="relative z-30 text-center w-full px-6 flex-none mt-2 md:mt-4 mb-2 md:mb-6"
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
            >
                <p className="text-[#00E08F] font-accent font-semibold uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-2">
                    Hackathon
                </p>
                <h2 className="font-display font-bold text-white uppercase tracking-widest leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    PROBLEM <span className="text-[#00E08F]" style={{ textShadow: '0 0 20px rgba(0,224,143,0.3)' }}>TRACKS</span>
                </h2>
                <p className="text-white/40 text-xs sm:text-sm md:text-base mt-3 max-w-sm mx-auto">
                    Explore the problem domains surrounding the core. Click any node.
                </p>
            </motion.div>

            {/* Network / Orbit Layout */}
            <div className="relative z-10 flex-grow flex items-center justify-center w-full min-h-0 pb-6 md:pb-10">
                <OrbitGrid selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} />

                {/* ════════════════════════════════════════
                    NATIVE RESOLUTION CENTRAL COMPONENT UI
                    ════════════════════════════════════════ */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex items-center justify-center pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTrack.number}
                            initial={{ opacity: 0, scale: 0.95, y: 10, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.95, y: -10, filter: 'blur(10px)' }}
                            transition={{ duration: 0.3 }}
                            className="relative flex flex-col items-start justify-center p-4 sm:p-5 lg:p-6 w-[85vw] sm:w-[70vw] max-w-[360px] md:max-w-[400px] h-auto rounded-2xl bg-[#0A1010]/95 backdrop-blur-2xl border border-[#00E08F]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(0,224,143,0.1)] pointer-events-auto"
                        >
                            {/* High-tech horizontal scan-lines/borders */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E08F] to-transparent shadow-[0_0_10px_#00E08F]" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-30" />
                            
                            <div className="flex flex-col w-full gap-3 sm:gap-4">
                                {/* Inline Header for Compact Size */}
                                <div className="flex items-center gap-3 w-full border-b border-[#00E08F]/20 pb-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-xl bg-[#00E08F]/10 border border-[#00E08F]/40 flex items-center justify-center text-[#00E08F] shadow-[0_0_20px_rgba(0,224,143,0.4)] p-1.5 drop-shadow-[0_0_8px_rgba(0,224,143,0.6)]">
                                        {(selectedTrack.logo as React.ReactElement<any>)?.props?.src ? (
                                            <div 
                                                className="w-full h-full bg-[#00E08F]"
                                                style={{ 
                                                    WebkitMaskImage: `url(${(selectedTrack.logo as React.ReactElement<any>).props.src})`, 
                                                    WebkitMaskSize: 'contain', 
                                                    WebkitMaskRepeat: 'no-repeat', 
                                                    WebkitMaskPosition: 'center',
                                                    maskImage: `url(${(selectedTrack.logo as React.ReactElement<any>).props.src})`,
                                                    maskSize: 'contain',
                                                    maskRepeat: 'no-repeat',
                                                    maskPosition: 'center'
                                                }}
                                            />
                                        ) : (
                                            React.cloneElement(selectedTrack.logo as React.ReactElement<any>, { className: "w-full h-full object-contain" })
                                        )}
                                    </div>
                                    <div className="flex flex-col flex-1 text-left justify-center">
                                        <h3 className="text-white text-sm sm:text-base lg:text-lg font-accent font-bold leading-tight drop-shadow-lg">
                                            {selectedTrack.title}
                                        </h3>
                                    </div>
                                </div>
                                {/* Description Layout */}
                                <p className="text-white/80 text-[9px] sm:text-[10px] lg:text-xs leading-relaxed w-full line-clamp-5 text-left">
                                    {selectedTrack.cards[0]}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
}

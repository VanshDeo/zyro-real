'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

const LOGO_URL = 'https://res.cloudinary.com/dkxskaege/image/upload/v1775026905/Zyro-logo_qabb2l.png';
const PRELOADER_DURATION = 3500; // Total visible time (ms)
const EXIT_DURATION = 800;       // Fade-out time (ms)

// Stroke-draw animation for geometric frame lines
const frameStroke: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 2, ease: 'easeInOut' },
            opacity: { duration: 0.3 },
        },
    },
};

// Circuit trace lines — delayed slightly after main frame
const traceStroke: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 0.6,
        transition: {
            pathLength: { duration: 1.5, ease: 'easeInOut', delay: 0.5 },
            opacity: { duration: 0.3, delay: 0.5 },
        },
    },
};

// Node dots at line endpoints
const nodeDot: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.4, delay: 1.8, ease: 'backOut' },
    },
};

// Logo image reveal
const logoReveal: Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, delay: 0.8, ease: 'easeOut' },
    },
};

// Reduced-motion variants — instant show, no complex transforms
const instantShow: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [exit, setExit] = useState(false);
    const [imgError, setImgError] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    // Stable callback ref to avoid re-creating timers
    const stableOnComplete = useCallback(onComplete, [onComplete]);

    useEffect(() => {
        let innerTimer: NodeJS.Timeout;
        const timer = setTimeout(() => {
            setExit(true);
            innerTimer = setTimeout(stableOnComplete, EXIT_DURATION);
        }, prefersReducedMotion ? 1200 : PRELOADER_DURATION);

        return () => {
            clearTimeout(timer);
            clearTimeout(innerTimer);
        };
    }, [stableOnComplete, prefersReducedMotion]);

    // Pick motion-safe or instant variants
    const frame = prefersReducedMotion ? instantShow : frameStroke;
    const trace = prefersReducedMotion ? instantShow : traceStroke;
    const node = prefersReducedMotion ? instantShow : nodeDot;
    const logo = prefersReducedMotion ? instantShow : logoReveal;

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
            role="status"
            aria-label="Loading Zyro"
            aria-live="polite"
            initial={{ opacity: 1 }}
            animate={exit ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: 'easeInOut' }}
            style={exit ? { pointerEvents: 'none' } : undefined}
        >
            <div className="relative flex flex-col items-center justify-center px-4">
                {/* Geometric Frame + Logo Container */}
                <motion.div
                    className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]"
                    initial={prefersReducedMotion ? undefined : { filter: 'drop-shadow(0 0 0px rgba(0, 224, 143, 0))' }}
                    animate={prefersReducedMotion ? undefined : {
                        filter: 'drop-shadow(0 0 15px rgba(0, 224, 143, 0.7)) drop-shadow(0 0 40px rgba(0, 224, 143, 0.3))',
                    }}
                    transition={prefersReducedMotion ? undefined : { duration: 3, ease: 'linear' }}
                >
                    {/* SVG Frame */}
                    <svg
                        viewBox="0 0 420 420"
                        className="absolute inset-0 w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <motion.g initial="hidden" animate="visible">
                            {/* Outer hexagonal frame */}
                            <motion.path
                                variants={frame}
                                d="M210 20 L380 110 L380 310 L210 400 L40 310 L40 110 Z"
                                stroke="#00E08F"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            {/* Inner hexagonal frame */}
                            <motion.path
                                variants={frame}
                                d="M210 50 L355 125 L355 295 L210 370 L65 295 L65 125 Z"
                                stroke="#00E08F"
                                strokeWidth="1"
                                strokeLinejoin="round"
                                opacity={0.4}
                            />

                            {/* Corner accent lines */}
                            <motion.line variants={trace} x1="210" y1="20" x2="210" y2="-15" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="195" y1="20" x2="225" y2="20" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="380" y1="110" x2="410" y2="93" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="380" y1="110" x2="400" y2="130" stroke="white" strokeWidth="0.5" />
                            <motion.line variants={trace} x1="380" y1="310" x2="410" y2="327" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="210" y1="400" x2="210" y2="435" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="195" y1="400" x2="225" y2="400" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="40" y1="310" x2="10" y2="327" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="40" y1="110" x2="10" y2="93" stroke="#00E08F" strokeWidth="1" />
                            <motion.line variants={trace} x1="40" y1="110" x2="20" y2="130" stroke="white" strokeWidth="0.5" />

                            {/* Horizontal scan lines */}
                            <motion.line variants={trace} x1="65" y1="210" x2="0" y2="210" stroke="white" strokeWidth="0.5" />
                            <motion.line variants={trace} x1="355" y1="210" x2="420" y2="210" stroke="white" strokeWidth="0.5" />

                            {/* Diagonal decorative lines */}
                            <motion.line variants={trace} x1="85" y1="140" x2="50" y2="120" stroke="white" strokeWidth="0.5" />
                            <motion.line variants={trace} x1="335" y1="280" x2="370" y2="300" stroke="white" strokeWidth="0.5" />
                            <motion.line variants={trace} x1="335" y1="140" x2="370" y2="120" stroke="white" strokeWidth="0.5" />
                            <motion.line variants={trace} x1="85" y1="280" x2="50" y2="300" stroke="white" strokeWidth="0.5" />

                            {/* Node dots — hex corners */}
                            <motion.circle variants={node} cx="210" cy="20" r="4" fill="#00E08F" />
                            <motion.circle variants={node} cx="380" cy="110" r="4" fill="#00E08F" />
                            <motion.circle variants={node} cx="380" cy="310" r="4" fill="#00E08F" />
                            <motion.circle variants={node} cx="210" cy="400" r="4" fill="#00E08F" />
                            <motion.circle variants={node} cx="40" cy="310" r="4" fill="#00E08F" />
                            <motion.circle variants={node} cx="40" cy="110" r="4" fill="#00E08F" />

                            {/* Node dots — trace endpoints */}
                            <motion.circle variants={node} cx="210" cy="-15" r="3" fill="white" />
                            <motion.circle variants={node} cx="210" cy="435" r="3" fill="white" />
                            <motion.circle variants={node} cx="0" cy="210" r="3" fill="white" />
                            <motion.circle variants={node} cx="420" cy="210" r="3" fill="white" />

                            {/* Small accent dots on edges */}
                            <motion.circle variants={node} cx="295" cy="65" r="2" fill="#00E08F" opacity={0.6} />
                            <motion.circle variants={node} cx="125" cy="65" r="2" fill="#00E08F" opacity={0.6} />
                            <motion.circle variants={node} cx="295" cy="355" r="2" fill="#00E08F" opacity={0.6} />
                            <motion.circle variants={node} cx="125" cy="355" r="2" fill="#00E08F" opacity={0.6} />
                        </motion.g>
                    </svg>

                    {/* Logo Image */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={logo}
                        initial="hidden"
                        animate="visible"
                    >
                        {imgError ? (
                            /* Fallback: text-based logo if image fails */
                            <span className="text-[#00E08F] text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-widest">
                                ZYRO
                            </span>
                        ) : (
                            <Image
                                src={LOGO_URL}
                                alt="Zyro Logo"
                                width={240}
                                height={240}
                                className="w-[150px] h-auto sm:w-[200px] md:w-[240px] object-contain"
                                priority
                                onError={() => setImgError(true)}
                            />
                        )}
                    </motion.div>
                </motion.div>

                {/* Loading Text */}
                <motion.p
                    className="mt-8 sm:mt-12 text-[#00E08F] text-sm sm:text-base md:text-lg tracking-[0.5em] font-medium font-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: prefersReducedMotion ? 0.2 : 1, duration: 0.5 }}
                    aria-hidden="true"
                >
                    INITIALIZING
                </motion.p>

                {/* Screen-reader only text */}
                <span className="sr-only">Loading Zyro application, please wait…</span>
            </div>
        </motion.div>
    );
}

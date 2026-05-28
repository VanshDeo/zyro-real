'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

// Parallax container that moves elements at different speeds
interface ParallaxProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <motion.div ref={ref} style={{ y: smoothY }} className={className}>
            {children}
        </motion.div>
    );
}





// SVG Path drawing animation
interface DrawSVGPathProps {
    d: string;
    stroke?: string;
    strokeWidth?: number;
    duration?: number;
    delay?: number;
    className?: string;
}

export function DrawSVGPath({
    d,
    stroke = '#00E08F',
    strokeWidth = 2,
    duration = 2,
    delay = 0,
    className = ''
}: DrawSVGPathProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.svg ref={ref} className={className} viewBox="0 0 100 100" fill="none">
            <motion.path
                d={d}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{
                    pathLength: { duration, delay, ease: 'easeInOut' },
                    opacity: { duration: 0.3, delay }
                }}
            />
        </motion.svg>
    );
}

// Animated line connecting two points
interface ConnectingLineProps {
    className?: string;
    delay?: number;
}

export function ConnectingLine({ className = '', delay = 0 }: ConnectingLineProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className={`h-px bg-gradient-to-r from-transparent via-[#00E08F] to-transparent ${className}`}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
    );
}

// Reveal animation from different directions
interface RevealProps {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
}

export function Reveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = ''
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const directions = {
        left: { x: -50, y: 0 },
        right: { x: 50, y: 0 },
        up: { x: 0, y: 50 },
        down: { x: 0, y: -50 }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction],
                filter: 'blur(10px)'
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)'
            } : {}}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    );
}

// Magnetic button effect
interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
}

export function MagneticButton({ children, className = '' }: MagneticButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
            {children}
        </motion.div>
    );
}

// Section navigation dots
interface SectionDotsProps {
    sections: string[];
    activeSection: number;
    onSectionClick?: (index: number) => void;
}

export function SectionDots({ sections, activeSection, onSectionClick }: SectionDotsProps) {
    return (
        <motion.div
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            {sections.map((_, index) => (
                <motion.button
                    key={index}
                    onClick={() => onSectionClick?.(index)}
                    className={`w-3 h-3 rounded-full border-2 border-[#00E08F] transition-colors ${activeSection === index ? 'bg-[#00E08F]' : 'bg-transparent'
                        }`}
                    whileHover={{ scale: 1.3 }}
                    animate={activeSection === index ? {
                        boxShadow: ['0 0 10px rgba(0, 224, 143, 0.5)', '0 0 20px rgba(0, 224, 143, 0.8)', '0 0 10px rgba(0, 224, 143, 0.5)']
                    } : {}}
                    transition={{ duration: 1.5, repeat: activeSection === index ? Infinity : 0 }}
                />
            ))}
        </motion.div>
    );
}

// Typewriter text effect
interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export function Typewriter({ text, delay = 0, speed = 50, className = '' }: TypewriterProps) {
    const [displayText, setDisplayText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let i = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [isInView, text, delay, speed]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-[#00E08F] ml-1 align-middle"
            />
        </span>
    );
}

// Gradient text animation
interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
    return (
        <motion.span
            className={`bg-clip-text text-transparent bg-gradient-to-r from-[#00E08F] via-white to-[#00E08F] bg-[length:200%_auto] ${className}`}
            animate={{
                backgroundPosition: ['0% center', '200% center']
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
            }}
        >
            {children}
        </motion.span>
    );
}

// Morphing blob background
interface MorphingBlobProps {
    className?: string;
}

export function MorphingBlob({ className = '' }: MorphingBlobProps) {
    return (
        <motion.div
            className={`absolute rounded-full bg-[#00E08F]/20 blur-3xl ${className}`}
            animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
                borderRadius: ['50%', '40%', '50%']
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
        />
    );
}

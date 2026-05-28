'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottieAnimationProps {
    animationData?: object;
    animationUrl?: string;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
    size?: number;
}

export default function LottieAnimation({
    animationData,
    animationUrl,
    loop = true,
    autoplay = true,
    className = '',
    size = 200
}: LottieAnimationProps) {
    // Default eco-themed animation data (simplified leaf animation)
    const defaultAnimation = {
        v: "5.7.4",
        fr: 60,
        ip: 0,
        op: 120,
        w: 200,
        h: 200,
        nm: "Eco Animation",
        layers: [
            {
                ddd: 0,
                ind: 1,
                ty: 4,
                nm: "Leaf",
                sr: 1,
                ks: {
                    o: { a: 0, k: 100 },
                    r: {
                        a: 1,
                        k: [
                            { t: 0, s: [-10], e: [10] },
                            { t: 60, s: [10], e: [-10] },
                            { t: 120, s: [-10] }
                        ]
                    },
                    p: { a: 0, k: [100, 100] },
                    s: {
                        a: 1,
                        k: [
                            { t: 0, s: [100, 100], e: [110, 110] },
                            { t: 60, s: [110, 110], e: [100, 100] },
                            { t: 120, s: [100, 100] }
                        ]
                    }
                },
                shapes: [
                    {
                        ty: "gr",
                        it: [
                            {
                                ty: "el",
                                s: { a: 0, k: [50, 80] },
                                p: { a: 0, k: [0, -20] }
                            },
                            {
                                ty: "fl",
                                c: { a: 0, k: [0, 0.88, 0.56, 1] }
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return (
        <motion.div
            className={`flex items-center justify-center ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Suspense fallback={
                <motion.div
                    className="w-20 h-20 rounded-full border-4 border-[#00E08F]/30 border-t-[#00E08F]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
            }>
                <Lottie
                    animationData={animationData || defaultAnimation}
                    loop={loop}
                    autoplay={autoplay}
                    style={{ width: size, height: size }}
                />
            </Suspense>
        </motion.div>
    );
}

// Pre-built eco animations
export function LeafAnimation({ size = 100 }: { size?: number }) {
    return (
        <motion.div
            className="relative"
            style={{ width: size, height: size }}
        >
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                >
                    <motion.div
                        className="w-8 h-16 rounded-full bg-gradient-to-t from-green-600 to-green-400"
                        style={{
                            transformOrigin: 'bottom center',
                            rotate: i * 120
                        }}
                        animate={{
                            scaleY: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                </motion.div>
            ))}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-4 h-4 rounded-full bg-[#00E08F]" />
            </motion.div>
        </motion.div>
    );
}

export function PulseRing({ size = 100, color = '#00E08F' }: { size?: number; color?: string }) {
    return (
        <div className="relative" style={{ width: size, height: size }}>
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: color }}
                    animate={{
                        scale: [1, 2, 2],
                        opacity: [0.6, 0, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: 'easeOut'
                    }}
                />
            ))}
            <div
                className="absolute inset-0 rounded-full m-auto"
                style={{
                    width: size * 0.3,
                    height: size * 0.3,
                    backgroundColor: color,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </div>
    );
}

export function GlowingOrb({ size = 80 }: { size?: number }) {
    return (
        <motion.div
            className="relative rounded-full"
            style={{ width: size, height: size }}
            animate={{
                boxShadow: [
                    '0 0 20px rgba(0, 224, 143, 0.3), inset 0 0 20px rgba(0, 224, 143, 0.1)',
                    '0 0 40px rgba(0, 224, 143, 0.6), inset 0 0 30px rgba(0, 224, 143, 0.2)',
                    '0 0 20px rgba(0, 224, 143, 0.3), inset 0 0 20px rgba(0, 224, 143, 0.1)'
                ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div
                className="w-full h-full rounded-full bg-gradient-to-br from-[#00E08F] to-green-600"
                style={{
                    background: 'radial-gradient(circle at 30% 30%, #00E08F, #059669)'
                }}
            />
            {/* Reflection */}
            <div
                className="absolute top-2 left-3 w-1/3 h-1/4 rounded-full bg-white/30 blur-sm"
            />
        </motion.div>
    );
}

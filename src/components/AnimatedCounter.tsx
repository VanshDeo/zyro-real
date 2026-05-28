'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    decimals?: number;
    className?: string;
}

export default function AnimatedCounter({
    end,
    suffix = '',
    prefix = '',
    duration = 2000,
    decimals = 0,
    className = ''
}: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = Date.now();
            const startValue = 0;

            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);

                // Easing function (ease-out)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentValue = startValue + (end - startValue) * easeOut;

                setCount(currentValue);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    const formatNumber = (num: number) => {
        if (decimals > 0) {
            return num.toFixed(decimals);
        }

        // Format with K suffix for thousands
        if (num >= 1000) {
            return (num / 1000).toFixed(2) + 'K';
        }

        return Math.floor(num).toLocaleString();
    };

    return (
        <span ref={ref} className={className}>
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
}

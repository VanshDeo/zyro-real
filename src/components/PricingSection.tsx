'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './AdvancedAnimations';
import Image from 'next/image';

const pricingPlans = [
    {
        name: 'Starter',
        price: '49',
        period: 'month',
        description: 'Perfect for individuals and small teams getting started',
        features: [
            'Up to 5 team members',
            '10GB cloud storage',
            'Basic analytics dashboard',
            'Email support',
            'Mobile app access',
            'API access'
        ],
        popular: false
    },
    {
        name: 'Professional',
        price: '99',
        period: 'month',
        description: 'Best for growing businesses and teams',
        features: [
            'Up to 20 team members',
            '100GB cloud storage',
            'Advanced analytics & insights',
            'Priority 24/7 support',
            'Mobile & desktop apps',
            'Full API access',
            'Custom integrations',
            'Advanced security features'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored solutions for large organizations',
        features: [
            'Unlimited team members',
            'Unlimited cloud storage',
            'Enterprise analytics suite',
            'Dedicated account manager',
            'All platform access',
            'Custom API development',
            'White-label options',
            'SLA guarantees',
            'On-premise deployment'
        ],
        popular: false
    }
];

export default function PricingSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <section ref={containerRef} className="section relative overflow-hidden bg-[#070B0B]">
            {/* Parallax Background Image */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image
                    src="/images/hero-leaves.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-30 scale-110"
                />
            </motion.div>

            {/* Global Overlay */}
            <div className="absolute inset-0 bg-[#070B0B]/40 z-[1] pointer-events-none" />

            {/* Top/Bottom Blends */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />

            {/* Side Blends */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B0B] via-transparent to-[#070B0B] z-[1] pointer-events-none" />

            {/* Left Circuit Decoration */}
            <div className="absolute -left-10 lg:left-0 top-0 pointer-events-none z-10 w-full h-full">
                <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-80">
                    <path d="M50 100 L50 200 L80 230 L80 600 L50 630 L50 800" stroke="#00E08F" strokeWidth="2" fill="none" />
                    <rect x="46" y="96" width="8" height="8" fill="#00E08F" filter="url(#glow)" />
                    <rect x="46" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow)" transform="rotate(45 50 796)" />
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

            {/* Right Circuit Decoration */}
            <div className="absolute -right-10 lg:right-0 top-0 pointer-events-none h-full">
                <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-80">
                    <path d="M50 100 L50 200 L20 230 L20 600 L50 630 L50 800" stroke="#00E08F" strokeWidth="2" fill="none" />
                    <rect x="46" y="96" width="8" height="8" fill="#00E08F" filter="url(#glow2)" />
                    <rect x="46" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow2)" transform="rotate(45 50 796)" />
                    <defs>
                        <filter id="glow2">
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
                {/* Section Title */}
                <Reveal>
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl md:text-6xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-white">PRICING</span>{' '}
                            <span className="text-gradient">PLANS</span>
                        </motion.h2>
                        <motion.p
                            className="text-[#A1A1A1] text-lg max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Choose the perfect plan for your needs. All plans include our core features.
                        </motion.p>
                    </div>
                </Reveal>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative ${plan.popular ? 'md:-mt-8 md:mb-0' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-[#00E08F] text-black px-4 py-1 rounded-full text-sm font-bold">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Outer Border Container */}
                            <div
                                style={{
                                    background: plan.popular ? '#00E08F' : '#1F2937',
                                    clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
                                    padding: plan.popular ? '2px' : '1px'
                                }}
                            >
                                {/* Inner Card */}
                                <div
                                    className="relative overflow-hidden h-full"
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        backdropFilter: 'blur(20px)',
                                        clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
                                        padding: '2rem'
                                    }}
                                >
                                    {/* Background Glow */}
                                    {plan.popular && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#00E08F]/10 to-transparent pointer-events-none" />
                                    )}

                                    {/* Plan Name */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <p className="text-[#A1A1A1] text-sm mb-6">{plan.description}</p>

                                        {/* Price */}
                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2">
                                                {plan.price === 'Custom' ? (
                                                    <span className="text-4xl font-bold text-[#00E08F]">Custom</span>
                                                ) : (
                                                    <>
                                                        <span className="text-2xl font-semibold text-[#00E08F]">$</span>
                                                        <span className="text-5xl font-bold text-[#00E08F]">{plan.price}</span>
                                                        <span className="text-[#A1A1A1]">/{plan.period}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-3 text-[#A1A1A1]"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * i }}
                                                >
                                                    <svg className="w-5 h-5 text-[#00E08F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-sm">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <motion.button
                                            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                                    ? 'bg-[#00E08F] text-black hover:bg-[#00E08F]/90'
                                                    : 'bg-transparent border-2 border-[#00E08F] text-[#00E08F] hover:bg-[#00E08F]/10'
                                                }`}
                                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 224, 143, 0.3)' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <Reveal>
                    <div className="text-center mt-16">
                        <p className="text-[#A1A1A1] mb-4">
                            Not sure which plan is right for you?
                        </p>
                        <motion.button
                            className="text-[#00E08F] font-semibold hover:underline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact us for a personalized recommendation →
                        </motion.button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimationWrappers';

export default function Footer() {
    return (
        <footer className="section border-t border-[#00E08F]/20 relative overflow-hidden bg-gradient-to-b from-[#070B0B] to-black">
            <div className="container-custom relative z-10">
                {/* Main Footer - Responsive Grid Layout */}
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-start text-center md:text-left mb-12">
                    {/* Logo & Description */}
                    <StaggerItem>
                        <div className="space-y-6">
                            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
                                    <motion.img
                                        src="https://res.cloudinary.com/dkxskaege/image/upload/v1775026905/Zyro-logo_qabb2l.png"
                                        alt="Zyro Logo"
                                        className="w-auto h-16 object-contain"
                                        animate={{
                                            filter: [
                                                'drop-shadow(0 0 5px rgba(0, 224, 143, 0.3))',
                                                'drop-shadow(0 0 15px rgba(0, 224, 143, 0.5))',
                                                'drop-shadow(0 0 5px rgba(0, 224, 143, 0.3))'
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </Link>
                            </motion.div>
                            <p className="text-white/65 text-sm xl:text-base max-w-sm mx-auto md:mx-0 leading-relaxed">
                                Pioneering green technology for a sustainable future. Join us in creating a cleaner world.
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Navigation Links - Horizontal */}
                    <StaggerItem>
                        <div className="flex flex-col items-center md:items-start h-full">
                            <h3 className="text-white font-bold mb-6 text-lg font-accent tracking-widest uppercase">Navigation</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4 mb-8">
                                {['Home', 'About', 'Tracks', 'Timeline', 'Partners', 'FAQ'].map((item) => (
                                    <motion.div
                                        key={item}
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <Link href={`#${item.toLowerCase()}`} className="text-[#A1A1A1] hover:text-[#00E08F] transition-colors text-sm flex items-center gap-1 group">
                                            <motion.span
                                                variants={{
                                                    rest: { opacity: 0, x: 5 },
                                                    hover: { opacity: 1, x: 0 }
                                                }}
                                                className="text-[#00E08F] font-semibold"
                                            >
                                                [
                                            </motion.span>
                                            <span className="relative z-10">{item}</span>
                                            <motion.span
                                                variants={{
                                                    rest: { opacity: 0, x: -5 },
                                                    hover: { opacity: 1, x: 0 }
                                                }}
                                                className="text-[#00E08F] font-semibold"
                                            >
                                                ]
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links (Nested in middle column) */}
                            <h3 className="text-white font-bold mb-6 text-lg font-accent tracking-widest uppercase mt-auto">Connect</h3>
                            <div className="flex items-center justify-center md:justify-start gap-4">
        {/* Removing old social comments block */}
        {[
            {
                icon: "M20.52 3.48A11.78 11.78 0 0012.03 0C5.41 0 .06 5.35.06 11.97c0 2.11.55 4.17 1.6 6L0 24l6.19-1.63a11.93 11.93 0 005.84 1.49h.01c6.62 0 11.97-5.35 11.97-11.97 0-3.19-1.24-6.19-3.49-8.41zM12.04 21.6a9.57 9.57 0 01-4.87-1.34l-.35-.2-3.67.96.98-3.58-.23-.37a9.55 9.55 0 01-1.47-5.1c0-5.29 4.31-9.6 9.6-9.6 2.56 0 4.96 1 6.77 2.8a9.52 9.52 0 012.82 6.78c0 5.29-4.31 9.6-9.58 9.6zm5.26-7.18c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51h-.56c-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.15.19 1.96 2.99 4.76 4.19.67.29 1.19.46 1.6.59.67.21 1.27.18 1.75.11.53-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z",
                label: "WhatsApp",
                link: "https://chat.whatsapp.com/FFvOe4T22Kv1XmGauaRcqK"
            },
            {
                icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                label: "Instagram",
                link: "https://www.instagram.com/zyro_kgec"
            },
            {
                icon: "M20.447 20.452H16.89v-5.569c0-1.328-.025-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.347V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.367-1.851 3.598 0 4.263 2.368 4.263 5.455v6.287zM5.337 7.433a2.065 2.065 0 11.001-4.131 2.065 2.065 0 01-.001 4.131zM6.78 20.452H3.894V9H6.78v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                label: "LinkedIn",
                link: "https://www.linkedin.com/company/zyro-kalyani-government-engineering-college/posts/?feedView=all"
            }
        ].map((social, i) => (
            <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[rgba(0,224,143,0.05)] border border-[#00E08F]/20 flex items-center justify-center group"
                whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(0, 224, 143, 0.15)',
                    borderColor: 'rgba(0, 224, 143, 0.5)',
                    boxShadow: '0 0 20px rgba(0, 224, 143, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
            >
                <svg className="w-5 h-5 text-[#00E08F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                </svg>
            </motion.a>
        ))}
            </div>
        </div>
    </StaggerItem>
                    {/* Contact Information */}
                    <StaggerItem>
                        <div className="flex flex-col md:col-span-2 lg:col-span-1 border-t md:border-t-0 md:border-l border-[#00E08F]/20 pt-8 md:pt-0 md:pl-8 space-y-8">
                            {/* Contact Us Section */}
                            <div className="text-center md:text-left">
                                <h3 className="text-white font-bold mb-3 text-lg tracking-widest font-accent uppercase">Contact Us</h3>
                                <p className="text-[#A1A1A1] text-sm md:text-base break-all">
                                    <a href="mailto:kgec.robotics.club@kgec.edu.in" className="hover:text-[#00E08F] hover:underline transition-colors block">
                                        kgec.robotics.club@kgec.edu.in
                                    </a>
                                </p>
                            </div>

                            {/* For Any Query Section */}
                            <div className="text-center md:text-left">
                                <h3 className="text-white font-bold mb-4 text-lg tracking-widest font-accent uppercase">Query Contacts</h3>
                                <ul className="space-y-3 text-sm md:text-base">
                                    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/80 gap-1 border-b border-white/5 pb-2">
                                        <span className="font-semibold text-white/90">AGNIDIPTA BASU</span> 
                                        <a href="tel:+916289661833" className="text-[#00E08F] hover:text-white transition-colors">+91 62896 61833</a>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/80 gap-1 border-b border-white/5 pb-2">
                                        <span className="font-semibold text-white/90">MD AYMAN SIDDIQUE</span> 
                                        <a href="tel:+919330448596" className="text-[#00E08F] hover:text-white transition-colors">+91 93304 48596</a>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/80 gap-1 border-b border-white/5 pb-2">
                                        <span className="font-semibold text-white/90">SWASTIK BAIDYA</span> 
                                        <a href="tel:+917439798517" className="text-[#00E08F] hover:text-white transition-colors">+91 74397 98517</a>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/80 gap-1 border-b border-white/5 pb-2">
                                        <span className="font-semibold text-white/90">ANIRBAN MUKHERJEE</span> 
                                        <a href="tel:+916291830010" className="text-[#00E08F] hover:text-white transition-colors">+91 62918 30010</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>

                {/* Bottom Bar - Divider Line */}
                <div className="border-t border-[#00E08F]/10 pt-6">
                    
                        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 text-center md:text-left">
                            <p className="text-[#A1A1A1] text-sm">
                                © 2026 Zyro. All rights reserved.
                            </p>
                            <a
                                href="https://kgec-robotics-society.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-white/25 hover:text-white/55 transition-colors duration-200"
                                title="KGEC Robotics Society"
                            >
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1.5-8.5c0 .828.672 1.5 1.5 1.5.552 0 1.035-.298 1.299-.742l1.299.75C14.114 13.942 13.107 14.5 12 14.5c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.107 0 2.114.558 2.598 1.492l-1.299.75A1.5 1.5 0 0012 10a1.5 1.5 0 00-1.5 1.5z"/>
                                </svg>
                                <span className="text-[10px] font-mono tracking-widest uppercase">KGEC ROBOTICS SOCIETY</span>
                            </a>
                        </div>
                    
                </div>
            </div>

            {/* Background Glow Effects */}
            <motion.div
                className="absolute bottom-0 left-1/4 w-[400px] h-[200px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(0, 224, 143, 0.08) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[400px] h-[200px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(0, 224, 143, 0.08) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                }}
                animate={{
                    opacity: [0.6, 0.3, 0.6]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2.5
                }}
            />
        </footer>
    );
}

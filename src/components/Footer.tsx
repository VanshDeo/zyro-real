'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimationWrappers';

export default function Footer() {
    return (
        <footer className="section border-t border-[#00E08F]/20 relative overflow-hidden bg-gradient-to-b from-[#070B0B] to-black">
            <div className="container-custom relative z-10">
                {/* Main Footer - Centered Layout */}
                <StaggerContainer staggerDelay={0.1} className="flex flex-col items-center text-center mb-12">
                    {/* Logo & Description */}
                    <StaggerItem>
                        <div className="space-y-6 mb-12">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href="/" className="flex items-center justify-center gap-2">
                                    <motion.img
                                        src="/zyro-logo.svg"
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
                            <p className="text-[#A1A1A1] text-base max-w-2xl mx-auto">
                                Pioneering green technology for a sustainable future. Join us in creating a cleaner world.
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Navigation Links - Horizontal */}
                    <StaggerItem>
                        <div className="mb-12">
                            <h3 className="text-white font-semibold mb-6 text-lg">Navigation</h3>
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
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
                        </div>
                    </StaggerItem>

                    {/* Social Links */}
                    {/* <StaggerItem>
                        <div className="flex items-center gap-4 mb-8">
                            {[
                                { icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', label: 'Twitter' },
                                { icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z', label: 'Pinterest' },
                                { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', label: 'Instagram' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
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
                    </StaggerItem> */}




<StaggerItem>
    <div className="flex items-center gap-4 mb-8">
        {[
            {
                icon: "M20.52 3.48A11.78 11.78 0 0012.03 0C5.41 0 .06 5.35.06 11.97c0 2.11.55 4.17 1.6 6L0 24l6.19-1.63a11.93 11.93 0 005.84 1.49h.01c6.62 0 11.97-5.35 11.97-11.97 0-3.19-1.24-6.19-3.49-8.41zM12.04 21.6a9.57 9.57 0 01-4.87-1.34l-.35-.2-3.67.96.98-3.58-.23-.37a9.55 9.55 0 01-1.47-5.1c0-5.29 4.31-9.6 9.6-9.6 2.56 0 4.96 1 6.77 2.8a9.52 9.52 0 012.82 6.78c0 5.29-4.31 9.6-9.58 9.6zm5.26-7.18c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51h-.56c-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.15.19 1.96 2.99 4.76 4.19.67.29 1.19.46 1.6.59.67.21 1.27.18 1.75.11.53-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z",
                label: "WhatsApp",
                link: "https://chat.whatsapp.com/FFvOe4T22Kv1XmGauaRcqK"
            },
            {
                icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z",
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
</StaggerItem>

                    {/* Contact Information */}
                    <StaggerItem>
                        <div className="mb-12 space-y-8">
                            {/* Contact Us Section */}
                            <div className="text-center">
                                <h3 className="text-white font-bold mb-3 text-xl tracking-wide">CONTACT US</h3>
                                <p className="text-[#A1A1A1] text-sm">
                                    Email: <a href="mailto:kgec.robotics.club@kgec.edu.in" className="text-white hover:text-[#00E08F] transition-colors">kgec.robotics.club@kgec.edu.in</a>
                                </p>
                            </div>

                            {/* For Any Query Section */}
                            <div className="text-center">
                                <h3 className="text-white font-bold mb-4 text-xl tracking-wide">FOR ANY QUERY ASK US:</h3>
                                <div className="space-y-2">
                                    <p className="text-white text-sm">
                                        <span className="font-medium">AGNIDIPTA BASU:</span> <a href="tel:+918145069918" className="hover:text-[#00E08F] transition-colors">+91 62896 61833</a>
                                    </p>
                                    <p className="text-white text-sm">
                                        <span className="font-medium">SAIKAT PANDA:</span> <a href="tel:+917319096784" className="hover:text-[#00E08F] transition-colors">+91 93394 26745</a>
                                    </p>
                                    <p className="text-white text-sm">
                                        <span className="font-medium">ANIRBAN MUKHERJEE:</span> <a href="tel:+919051617498" className="hover:text-[#00E08F] transition-colors">+91 62918 30010</a>
                                    </p>
                                    <p className="text-white text-sm">
                                        <span className="font-medium">DEEP RUDRA:</span> <a href="tel:+919339426745" className="hover:text-[#00E08F] transition-colors">+91 70637 40034</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>

                {/* Bottom Bar - Divider Line */}
                <div className="border-t border-[#00E08F]/10 pt-6">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                            <p className="text-[#A1A1A1] text-sm">
                                © 2026 Zyro. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <motion.div whileHover={{ color: '#00E08F' }}>
                                    {/* <Link href="/privacy" className="text-[#A1A1A1] hover:text-[#00E08F] transition-colors text-sm">Privacy Policy</Link> */}
                                </motion.div>
                                <motion.div whileHover={{ color: '#00E08F' }}>
                                    {/* <Link href="/terms" className="text-[#A1A1A1] hover:text-[#00E08F] transition-colors text-sm">Terms of Service</Link> */}
                                </motion.div>
                            </div>
                        </div>
                    </FadeIn>
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

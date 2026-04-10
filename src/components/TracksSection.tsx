'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features, Feature } from '@/lib/featuresData';

/* ── Reusable CSS-Mask icon renderer ────────────────────────── */
function MaskedIcon({
    logo,
    className = '',
}: {
    logo: React.ReactNode;
    className?: string;
}) {
    const el = logo as React.ReactElement<any>;
    const src: string | undefined = el?.props?.src;
    if (src) {
        return (
            <div
                className={`bg-[#00E08F] ${className}`}
                style={{
                    WebkitMaskImage: `url(${src})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${src})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                }}
            />
        );
    }
    return <div className={className}>{logo}</div>;
}

/* ── Chevron icon ────────────────────────────────────────────── */
const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);

/* ── Folder icon ─────────────────────────────────────────────── */
const FolderOpenIcon = () => (
    <svg className="w-4 h-4 text-yellow-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
    </svg>
);

/* ── Desktop Explorer Panel ──────────────────────────────────── */
function ExplorerPanel({
    selected,
    onSelect,
}: {
    selected: Feature;
    onSelect: (f: Feature) => void;
}) {
    return (
        <div className="flex flex-col h-full w-[260px] lg:w-[320px] shrink-0">
            <div className="px-4 py-2.5 border-b border-white/10 flex items-center gap-2">
                <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-accent font-semibold">Explorer</span>
            </div>
            <div className="px-3 py-2 flex items-center gap-2 text-white/70 select-none">
                <ChevronRight />
                <FolderOpenIcon />
                <span className="text-sm font-accent font-semibold tracking-wide text-yellow-400/90">Problem Tracks</span>
            </div>
            <div className="flex flex-col overflow-y-auto flex-1 pr-1 pb-3">
                {features.map((feature, i) => {
                    const isSelected = feature.number === selected.number;
                    return (
                        <motion.button
                            key={feature.number}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.06 }}
                            onClick={() => onSelect(feature)}
                            className={`
                                group relative flex items-center gap-2.5 pl-8 pr-3 py-2 text-left w-full
                                transition-all duration-200 rounded-sm
                                ${isSelected
                                    ? 'bg-[#00E08F]/15 border-l-2 border-[#00E08F] text-white'
                                    : 'border-l-2 border-transparent text-white/55 hover:text-white/90 hover:bg-white/5'
                                }
                            `}
                        >
                            <div className="absolute left-[26px] top-0 bottom-0 w-px bg-white/8 pointer-events-none" />
                            <MaskedIcon
                                logo={feature.logo}
                                className={`w-4 h-4 shrink-0 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}
                            />
                            <span className="text-xs font-mono truncate">{feature.title}</span>
                            {isSelected && (
                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00E08F] shadow-[0_0_6px_#00E08F] shrink-0" />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

/* ── Detail content (shared between mobile + desktop) ────────── */
function DetailContent({ track }: { track: Feature }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={track.number}
                initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5 w-full"
            >
                {/* Icon + title */}
                <div className="flex items-start gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#00E08F]/10 border border-[#00E08F]/30 flex items-center justify-center p-2.5 shadow-[0_0_24px_rgba(0,224,143,0.2)] shrink-0">
                        <MaskedIcon logo={track.logo} className="w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-center gap-1 min-w-0">
                        <span className="text-[#00E08F] text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-mono uppercase">
                            Track {track.number}
                        </span>
                        <h2 className="text-white text-base md:text-2xl lg:text-3xl font-accent font-bold uppercase tracking-widest leading-tight">
                            {track.title}
                        </h2>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-[#00E08F]/50 via-[#00E08F]/20 to-transparent" />

                {/* Description */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-white/50 text-[10px] tracking-[0.2em] font-mono uppercase">// Description</h3>
                    {track.cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.08 + idx * 0.07 }}
                            className="relative p-4 rounded-xl bg-white/5 border border-white/10"
                        >
                            <div className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-[#00E08F]/50" />
                            <p className="text-white/80 text-sm leading-relaxed pl-3">{card}</p>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </AnimatePresence>
    );
}

/* ── IDE title bar ───────────────────────────────────────────── */
function IDETitleBar({ title }: { title: string }) {
    return (
        <div
            className="relative z-10 flex items-center gap-2 px-4 py-3 border-b border-white/10 shrink-0"
            style={{ background: 'rgba(6, 10, 12, 0.80)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-4 text-white/30 text-[11px] font-mono tracking-wider truncate">
                zyro / problem-tracks / {title.replace(/ /g, '-').toLowerCase()}.track
            </span>
        </div>
    );
}

/* ── IDE video bg ────────────────────────────────────────────── */
function IDEVideoBg() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl bg-black flex items-center justify-center">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover object-top">
                <source src="https://res.cloudinary.com/dlrlet9fg/video/upload/c_crop,h_1080,w_510/v1769278556/robot1_ioekuk.webm" type="video/webm" />
                <source src="/videos/hero_m4_bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_50%_50%,rgba(0,224,143,0.08),transparent)]" />
        </div>
    );
}

const ideStyle = {
    border: '1px solid rgba(0, 224, 143, 0.18)',
    boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 60px rgba(0,224,143,0.06)'
};

/* ── Main Section ────────────────────────────────────────────── */
export default function TracksSection() {
    const [selected, setSelected] = useState<Feature>(features[0]);

    return (
        <section id="tracks" className="relative w-full overflow-hidden bg-[#070B0B]">

            {/* ── Section heading ── */}
            <motion.div
                className="text-center pt-12 pb-6 px-6"
                initial={{ opacity: 0, y: -14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
            >
                <p className="text-[#00E08F] font-accent font-semibold uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-2">
                    Hackathon
                </p>
                <h2 className="font-display font-bold text-white uppercase tracking-widest text-3xl sm:text-4xl md:text-5xl">
                    PROBLEM <span className="text-[#00E08F]" style={{ textShadow: '0 0 24px rgba(0,224,143,0.4)' }}>TRACKS</span>
                </h2>
                <p className="text-white/60 text-xs sm:text-sm mt-3 max-w-sm mx-auto">
                    7 tracks. Tap any to explore the problem domain.
                </p>
            </motion.div>

            {/* ════════════════════════════════════════
                MOBILE LAYOUT  (< md)
                Icon pills → tap → detail card below
                ════════════════════════════════════════ */}
            <div className="block md:hidden px-4 pb-12">
                {/* Icon pill area - wrapped layout for mobile */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-6 pb-2 px-1">
                    {features.map((f) => {
                        const isSelected = f.number === selected.number;
                        return (
                            <motion.button
                                key={f.number}
                                onClick={() => setSelected(f)}
                                whileTap={{ scale: 0.92 }}
                                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-accent transition-all duration-200
                                    ${isSelected
                                        ? 'bg-[#00E08F]/20 border-[#00E08F]/60 text-white shadow-[0_0_12px_rgba(0,224,143,0.3)]'
                                        : 'bg-white/5 border-white/10 text-white/50'
                                    }`}
                            >
                                <MaskedIcon
                                    logo={f.logo}
                                    className={`w-4 h-4 shrink-0 ${isSelected ? 'opacity-100' : 'opacity-40'}`}
                                />
                                <span className="truncate max-w-[100px]">{f.title}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Detail card — natural height, no scrollbar */}
                <motion.div
                    className="relative rounded-2xl overflow-hidden"
                    style={ideStyle}
                    layout
                >
                    <IDEVideoBg />
                    <IDETitleBar title={selected.title} />
                    <div
                        className="relative z-10 p-5"
                        style={{ background: 'rgba(10, 15, 18, 0.65)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
                    >
                        <DetailContent track={selected} />
                    </div>
                </motion.div>
            </div>

            {/* ════════════════════════════════════════
                DESKTOP LAYOUT  (≥ md)
                Fixed-height IDE shell, side-by-side
                ════════════════════════════════════════ */}
            <div className="hidden md:flex items-center justify-center px-8 lg:px-16 pb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full max-w-6xl h-[72vh] min-h-[520px] flex flex-col rounded-2xl overflow-hidden relative"
                    style={ideStyle}
                >
                    <IDEVideoBg />
                    <IDETitleBar title={selected.title} />

                    {/* Panels */}
                    <div className="relative z-10 flex flex-row flex-1 min-h-0">
                        {/* Left: Explorer */}
                        <div
                            className="border-r border-white/10 flex flex-col overflow-hidden shrink-0"
                            style={{ background: 'rgba(10, 16, 22, 0.65)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                        >
                            <ExplorerPanel selected={selected} onSelect={setSelected} />
                        </div>

                        {/* Right: Detail — scroll only if content overflows */}
                        <div
                            className="flex-1 overflow-y-auto p-6 lg:p-8"
                            style={{ background: 'rgba(13, 20, 26, 0.45)' }}
                        >
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/30 mb-6">
                                <span className="text-yellow-400/60">Problem Tracks</span>
                                <span>/</span>
                                <span className="text-white/55">{selected.title}</span>
                            </div>
                            <DetailContent track={selected} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Types ─────────────────────────────────────────────────────── */
interface Team { idx: number; team: string; members: string[]; }
interface SelectedData { round1: Team[]; finalRound: Team[]; }
type ActiveRound = 'round1' | 'finalRound';

const ROUND_LABELS: Record<ActiveRound, { badge: string; full: string }> = {
  round1:     { badge: 'Phase 1', full: 'Phase 1' },
  finalRound: { badge: 'Phase 2', full: 'Phase 2' },
};

/* ── Team card ──────────────────────────────────────────────────── */
function TeamCard({ team, index, isFinal }: { team: Team; index: number; isFinal: boolean }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, delay: index * 0.015 }}
            className="flex flex-col gap-2 px-3.5 py-3 rounded-xl
                       bg-white/[0.03] border border-white/[0.07]
                       hover:bg-white/[0.055] hover:border-[#00E08F]/20
                       transition-colors duration-200"
        >
            {/* Team name row */}
            <div className="flex items-center gap-2">
                <span className={`flex-shrink-0 text-[9px] font-bold tabular-nums px-1.5 py-0.5 rounded-md
                                  ${isFinal
                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                    : 'bg-[#00E08F]/10 text-[#00E08F] border border-[#00E08F]/20'}`}>
                    {isFinal ? 'P2' : 'P1'}
                </span>
                <span className="text-white/90 font-semibold font-accent text-[12px] tracking-wide truncate">
                    {team.team}
                </span>
                <span className="ml-auto flex-shrink-0 text-white/25 text-[10px]">
                    {team.members.length}
                </span>
            </div>

            {/* Members — plain list */}
            <p className="text-white/40 text-[10px] leading-relaxed">
                {team.members.join(' · ')}
            </p>
        </motion.div>
    );
}

/* ── Search bar ─────────────────────────────────────────────────── */
function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div className="relative">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/25 pointer-events-none"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
            </svg>
            <input
                type="search"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Search team or member…"
                className="w-full pl-7 pr-3 py-2 rounded-lg text-[12px] text-white/80
                           bg-white/[0.04] border border-white/[0.08]
                           placeholder:text-white/20 outline-none
                           focus:border-[#00E08F]/40 focus:bg-white/[0.06]
                           transition-all duration-200"
            />
            {value && (
                <button onClick={() => onChange('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}

/* ── Full Section (used in /leaderboard) ─────────────────────────── */
export function SelectedTeamsFull() {
    const [data, setData]         = useState<SelectedData | null>(null);
    const [activeRound, setRound] = useState<ActiveRound>('round1');
    const [query, setQuery]       = useState('');

    useEffect(() => {
        fetch('/selected.json').then(r => r.json()).then(setData).catch(console.error);
    }, []);

    const filtered = useMemo(() => {
        if (!data) return [];
        const pool = data[activeRound];
        if (!query.trim()) return pool;
        const q = query.toLowerCase();
        return pool.filter(t =>
            t.team.toLowerCase().includes(q) ||
            t.members.some(m => m.toLowerCase().includes(q))
        );
    }, [data, activeRound, query]);

    const r1Count     = data?.round1.length ?? 0;
    const finalCount  = data?.finalRound.length ?? 0;
    const r1Members   = data?.round1.reduce((a, t) => a + t.members.length, 0) ?? 0;
    const fnlMembers  = data?.finalRound.reduce((a, t) => a + t.members.length, 0) ?? 0;

    const tabs = [
        { key: 'round1' as const,     label: 'Phase 1', count: r1Count,    color: '#00E08F' },
        { key: 'finalRound' as const, label: 'Phase 2', count: finalCount, color: '#f59e0b' },
    ];

    return (
        <div className="w-full">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-2 mb-5">
                {/* Round tabs */}
                <div className="flex gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/[0.07] flex-shrink-0">
                    {tabs.map(tab => {
                        const active = activeRound === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => { setRound(tab.key); setQuery(''); }}
                                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md
                                            text-[11px] font-accent font-semibold uppercase tracking-widest
                                            transition-all duration-200
                                            ${active ? 'text-[#070B0B]' : 'text-white/40 hover:text-white/70'}`}
                                style={active ? { backgroundColor: tab.color } : {}}
                            >
                                {tab.label}
                                <span className={`text-[9px] font-bold px-1 py-0.5 rounded-full
                                                  ${active ? 'bg-black/20 text-[#070B0B]' : 'bg-white/10 text-white/40'}`}>
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Search */}
                <div className="flex-1"><SearchBar value={query} onChange={setQuery} /></div>

                {/* Count */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03]
                                border border-white/[0.06] flex-shrink-0">
                    <span className="text-sm font-display font-bold text-white">{filtered.length}</span>
                    <span className="text-white/30 text-[10px] uppercase tracking-wider font-accent">teams</span>
                    <span className="text-white/15 text-[10px] ml-1">
                        · {ROUND_LABELS[activeRound].full} · {activeRound === 'round1' ? r1Members : fnlMembers} members
                    </span>
                </div>
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
                {!data ? (
                    <div key="sk" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="h-20 rounded-xl bg-white/[0.025] animate-pulse" />
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="py-12 text-center">
                        <p className="text-white/30 text-sm">No match for &ldquo;{query}&rdquo;</p>
                        <button onClick={() => setQuery('')}
                                className="mt-2 text-[#00E08F] text-xs hover:underline">Clear</button>
                    </motion.div>
                ) : (
                    <motion.div key={activeRound} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                transition={{ duration: 0.18 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                        {filtered.map((team, i) => (
                            <TeamCard key={`${activeRound}-${team.idx}`}
                                      team={team} index={i}
                                      isFinal={activeRound === 'finalRound'} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ── Compact Preview (used on home page) ─────────────────────────── */
export default function SelectedTeamsSection() {
    const [data, setData] = useState<SelectedData | null>(null);

    useEffect(() => {
        fetch('/selected.json').then(r => r.json()).then(setData).catch(console.error);
    }, []);

    const r1Count    = data?.round1.length ?? 0;
    const fnlCount   = data?.finalRound.length ?? 0;
    const totalMembers = data
        ? data.round1.reduce((a, t) => a + t.members.length, 0) +
          data.finalRound.reduce((a, t) => a + t.members.length, 0)
        : 0;

    /* Show first 6 teams across both rounds for the preview */
    const previewTeams = data
        ? [...data.finalRound.slice(0, 3), ...data.round1.slice(0, 3)]
        : [];

    return (
        <section className="relative overflow-hidden bg-[#070B0B] py-10 sm:py-14
                            border-t border-b border-white/[0.05]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B0B] via-[#00E08F]/[0.02] to-[#070B0B]
                            pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="h-px w-5 bg-[#00E08F]/60" />
                            <span className="text-[#00E08F] text-[9px] font-accent uppercase tracking-[0.35em] font-semibold">
                                Zyro &apos;26
                            </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white uppercase
                                       font-display tracking-wider leading-none">
                            Selected <span className="text-[#00E08F]">Teams</span>
                        </h2>
                    </div>

                    {/* Stats pills */}
                    <div className="flex gap-2 sm:ml-auto flex-wrap">
                        {[
                            { val: r1Count,      label: 'Phase 1',      color: '#00E08F' },
                            { val: fnlCount,     label: 'Phase 2',      color: '#f59e0b' },
                            { val: totalMembers, label: 'Participants', color: 'white'   },
                        ].map(s => (
                            <div key={s.label}
                                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                            bg-white/[0.04] border border-white/[0.07]">
                                <span className="text-sm font-display font-bold"
                                      style={{ color: s.color }}>
                                    {s.val}
                                </span>
                                <span className="text-white/35 text-[10px] uppercase tracking-wider font-accent">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preview strip — 6 cards, 3 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
                    {!data
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="h-16 rounded-xl bg-white/[0.025] animate-pulse" />
                          ))
                        : previewTeams.map((team, i) => {
                            const isFinal = i < 3;
                            return (
                                <motion.div
                                    key={team.team}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl
                                               bg-white/[0.03] border border-white/[0.07]"
                                >
                                    <span className={`flex-shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-md
                                                      ${isFinal
                                                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                        : 'bg-[#00E08F]/10 text-[#00E08F] border border-[#00E08F]/20'}`}>
                                        {isFinal ? 'P2' : 'P1'}
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-white/85 font-semibold font-accent text-[11px] truncate">
                                            {team.team}
                                        </p>
                                        <p className="text-white/30 text-[10px] truncate">
                                            {team.members.slice(0, 3).join(' · ')}
                                            {team.members.length > 3 ? ` +${team.members.length - 3}` : ''}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                          })
                    }
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <a href="/leaderboard"
                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                                  bg-[#00E08F] text-[#070B0B] text-xs font-accent font-bold
                                  uppercase tracking-widest hover:bg-[#00E08F]/90
                                  transition-colors duration-200 group">
                        View All Teams
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <span className="text-white/25 text-[11px]">
                        {r1Count + fnlCount} teams total on the leaderboard page
                    </span>
                </div>
            </div>
        </section>
    );
}

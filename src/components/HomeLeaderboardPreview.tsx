'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from './AdvancedAnimations';

interface User { name: string; role: string; score: number; }

const RANK_CFG = [
  { label: '🥇', text: 'text-yellow-400' },
  { label: '🥈', text: 'text-slate-300'  },
  { label: '🥉', text: 'text-orange-400' },
];

export default function HomeLeaderboardPreview() {
  const [data, setData]     = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then(j => { if (Array.isArray(j)) setData(j.slice(0, 5)); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#070B0B] py-14 sm:py-20
                        border-t border-white/[0.05]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                      bg-[#00E08F] rounded-full blur-[140px] opacity-[0.04] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <Reveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="h-px w-5 bg-[#00E08F]/60" />
                <span className="text-[#00E08F] text-[9px] font-accent uppercase tracking-[0.35em] font-semibold">
                  Leaderboard
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider font-display">
                Top <span className="text-[#00E08F]">Contributors</span>
              </h2>
            </div>

            <Link
              href="/leaderboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         border border-white/[0.1] text-white/45 text-[11px] font-accent
                         uppercase tracking-widest hover:border-[#00E08F]/40
                         hover:text-[#00E08F] transition-all duration-200 group self-start sm:self-auto"
            >
              Full board
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <div className="rounded-2xl border border-white/[0.07] overflow-hidden
                          bg-white/[0.015] backdrop-blur-xl max-w-2xl">

            {loading ? (
              /* Skeleton rows */
              <div className="divide-y divide-white/[0.05]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4">
                    <div className="w-5 h-4 rounded bg-white/[0.05] animate-pulse" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-3 w-32 rounded bg-white/[0.05] animate-pulse" />
                      <div className="h-2 w-16 rounded bg-white/[0.03] animate-pulse" />
                    </div>
                    <div className="h-4 w-12 rounded bg-white/[0.05] animate-pulse" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="divide-y divide-white/[0.05]">
                {data.map((user, idx) => {
                  const rc = idx < 3 ? RANK_CFG[idx] : null;
                  return (
                    <motion.div
                      key={user.name}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex items-center gap-4 px-5 py-3.5
                                 hover:bg-white/[0.03] transition-colors group"
                    >
                      {/* Rank */}
                      <div className="w-6 text-center flex-shrink-0">
                        {rc ? (
                          <span className="text-base select-none">{rc.label}</span>
                        ) : (
                          <span className="text-white/20 text-xs font-accent">{idx + 1}</span>
                        )}
                      </div>

                      {/* Name / role */}
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm truncate transition-colors
                                       ${rc
                                         ? `text-white group-hover:${rc.text}`
                                         : 'text-white/65 group-hover:text-white/90'}`}>
                          {user.name}
                        </p>
                        <p className="text-white/25 text-[9px] uppercase tracking-wider font-accent truncate">
                          {user.role}
                        </p>
                      </div>

                      {/* Score */}
                      <div className="text-right flex-shrink-0">
                        <p className={`font-display font-bold tabular-nums text-sm
                                       ${rc ? rc.text : 'text-white/40'}`}>
                          {user.score.toLocaleString()}
                        </p>
                        <p className="text-white/20 text-[9px] uppercase tracking-wider font-accent">pts</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-white/20 text-[10px] font-accent uppercase tracking-wider">
                Showing top 5
              </span>
              <Link href="/leaderboard"
                    className="text-[#00E08F] text-[10px] font-accent font-semibold uppercase
                               tracking-widest hover:underline underline-offset-4">
                See all →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

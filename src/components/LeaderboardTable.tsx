'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface User { name: string; role: string; score: number; }

const RANK_COLORS = [
  { text: 'text-yellow-400', label: '🥇' },
  { text: 'text-slate-300',  label: '🥈' },
  { text: 'text-orange-400', label: '🥉' },
];

const FILTERS = ['All-Time', 'Monthly', 'Weekly'] as const;
type Filter = typeof FILTERS[number];

export default function LeaderboardTable({ users }: { users: User[] }) {
  const [filter, setFilter] = useState<Filter>('All-Time');

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 px-0">

      {/* Header */}
      <div className="flex flex-col xs:flex-row items-start xs:items-center
                      justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 px-1">
        <div>
          <h3 className="text-xs sm:text-sm font-accent font-bold text-white uppercase tracking-[0.2em]">
            Full Rankings
          </h3>
          <p className="text-white/25 text-[10px] mt-0.5">{users.length} participants</p>
        </div>

        {/* Filter pills */}
        <div className="flex gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/[0.07] flex-shrink-0">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md
                          text-[10px] sm:text-[11px] font-accent font-semibold
                          uppercase tracking-wider transition-all duration-200 whitespace-nowrap
                          ${filter === f
                            ? 'bg-[#00E08F] text-[#070B0B]'
                            : 'text-white/35 hover:text-white/70'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl sm:rounded-2xl border border-white/[0.07] overflow-hidden
                      bg-white/[0.015] backdrop-blur-xl">

        {/* Column header — mobile: rank+name+score; sm+: +role */}
        <div className="grid grid-cols-[36px_1fr_60px] sm:grid-cols-[44px_1fr_100px_80px]
                        gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5
                        bg-white/[0.03] border-b border-white/[0.06]">
          <span className="text-[9px] font-accent uppercase tracking-[0.15em] text-white/25 text-center">#</span>
          <span className="text-[9px] font-accent uppercase tracking-[0.15em] text-white/25">Name</span>
          <span className="text-[9px] font-accent uppercase tracking-[0.15em] text-white/25
                           hidden sm:block">Role</span>
          <span className="text-[9px] font-accent uppercase tracking-[0.15em] text-white/25 text-right">Score</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/[0.05]">
          <AnimatePresence mode="popLayout">
            {users.length === 0 ? (
              <div className="py-14 text-center text-white/25 text-sm">No data yet.</div>
            ) : users.map((user, idx) => {
              const rank  = idx + 1;
              const rc    = rank <= 3 ? RANK_COLORS[rank - 1] : null;
              const isTop = rank <= 3;

              return (
                <motion.div
                  key={`${user.name}-${idx}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(idx * 0.02, 0.4), duration: 0.25 }}
                  className="grid grid-cols-[36px_1fr_60px] sm:grid-cols-[44px_1fr_100px_80px]
                              gap-2 sm:gap-3 items-center
                              px-3 sm:px-5 py-2.5 sm:py-3
                              hover:bg-white/[0.025] transition-colors group"
                >
                  {/* Rank */}
                  <div className="flex justify-center">
                    {isTop ? (
                      <span className="text-base sm:text-lg select-none">{rc!.label}</span>
                    ) : (
                      <span className="text-white/20 text-[11px] font-accent tabular-nums text-center">
                        {rank}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <div className="min-w-0">
                    <p className={`font-semibold text-xs sm:text-sm truncate transition-colors duration-200
                                   ${isTop
                                     ? `text-white group-hover:${rc!.text}`
                                     : 'text-white/65 group-hover:text-white/90'}`}>
                      {user.name}
                    </p>
                    {isTop && (
                      <p className="text-[#00E08F]/40 text-[8px] sm:text-[9px] uppercase tracking-wider font-accent">
                        Top Contributor
                      </p>
                    )}
                    {/* Role shown inline on mobile */}
                    <p className="text-white/20 text-[8px] uppercase tracking-wider font-accent
                                  truncate sm:hidden mt-0.5">
                      {user.role}
                    </p>
                  </div>

                  {/* Role — desktop only column */}
                  <span className="text-white/25 text-[10px] uppercase tracking-wider font-accent
                                   hidden sm:block truncate">
                    {user.role}
                  </span>

                  {/* Score */}
                  <div className="text-right">
                    <span className={`font-display font-bold tabular-nums
                                      ${isTop
                                        ? 'text-[#00E08F] text-sm sm:text-base'
                                        : 'text-white/45 text-xs sm:text-sm'}`}>
                      {user.score.toLocaleString()}
                    </span>
                    <p className="text-white/15 text-[8px] sm:text-[9px] uppercase tracking-wider font-accent">pts</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

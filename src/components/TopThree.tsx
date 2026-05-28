'use client';

import { motion } from 'framer-motion';

interface User { name: string; role: string; score: number; }

const RANK_CFG = [
  { medal: '🥇', barColor: '#fbbf24', glowColor: 'rgba(251,191,36,0.15)',  barH: 'h-16 sm:h-20', scoreSize: 'text-xl sm:text-2xl' },
  { medal: '🥈', barColor: '#94a3b8', glowColor: 'rgba(148,163,184,0.10)', barH: 'h-9  sm:h-12',  scoreSize: 'text-base sm:text-lg' },
  { medal: '🥉', barColor: '#f97316', glowColor: 'rgba(249,115,22,0.10)',  barH: 'h-6  sm:h-8',   scoreSize: 'text-base sm:text-lg' },
];

export default function TopThree({ users }: { users: User[] }) {
  if (!users || users.length === 0) return null;

  const top = users.slice(0, 3);
  // display order: 2nd · 1st · 3rd (podium style)
  // index map: podiumIdx 0 → rank 1, podiumIdx 1 → rank 0, podiumIdx 2 → rank 2
  const podium = [top[1], top[0], top[2]].filter(Boolean);

  return (
    <div className="flex items-end justify-center gap-2 xs:gap-4 sm:gap-6 mb-8 mt-4 px-2 sm:px-4">
      {podium.map((user, podiumIdx) => {
        const rank = podiumIdx === 1 ? 0 : podiumIdx === 0 ? 1 : 2;
        const cfg  = RANK_CFG[rank];
        const isFirst = rank === 0;

        return (
          <motion.div
            key={user.name}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: rank * 0.1, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex flex-col items-center flex-1
                        ${isFirst ? '-translate-y-3 sm:-translate-y-4' : ''}
                        min-w-0 max-w-[120px] sm:max-w-[160px]`}
          >
            {/* Ambient glow */}
            <div className="absolute inset-x-0 bottom-0 h-24 rounded-full blur-2xl -z-10"
                 style={{ background: cfg.glowColor }} />

            {/* Medal */}
            <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 select-none">{cfg.medal}</span>

            {/* Name */}
            <p className="text-white font-bold font-accent text-center text-[11px] sm:text-[13px]
                          truncate w-full px-1 mb-0.5 leading-tight">
              {user.name}
            </p>

            {/* Role */}
            <p className="text-white/30 text-[8px] sm:text-[9px] uppercase tracking-wider font-accent
                          text-center truncate w-full px-1 mb-2 sm:mb-3">
              {user.role}
            </p>

            {/* Score */}
            <div className="mb-3 sm:mb-4 flex items-baseline gap-0.5 sm:gap-1 justify-center">
              <span className={`font-display font-bold text-white ${cfg.scoreSize}`}>
                {user.score.toLocaleString()}
              </span>
              <span className="text-white/25 text-[8px] sm:text-[9px] uppercase tracking-wider">pts</span>
            </div>

            {/* Podium bar */}
            <div className={`w-full rounded-t-md ${cfg.barH} opacity-15`}
                 style={{ background: cfg.barColor }} />
            <div className="w-full h-[2px]" style={{ background: cfg.barColor }} />
          </motion.div>
        );
      })}
    </div>
  );
}

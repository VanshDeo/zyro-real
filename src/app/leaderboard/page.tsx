'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopThree from '@/components/TopThree';
import LeaderboardTable from '@/components/LeaderboardTable';
import { SelectedTeamsFull } from '@/components/SelectedTeamsSection';
import { Reveal } from '@/components/AdvancedAnimations';
import { motion, AnimatePresence } from 'framer-motion';

interface User { name: string; role: string; score: number; }
type Tab = 'partners' | 'evangelists' | 'teams';

const TABS: { key: Tab; label: string; short: string }[] = [
  { key: 'partners',    label: 'Community Partners', short: 'Partners'  },
  { key: 'evangelists', label: 'Evangelists',         short: 'Evangels'  },
  { key: 'teams',       label: 'Selected Teams',      short: 'Teams'     },
];

function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`rounded-xl bg-white/[0.04] animate-pulse ${className}`} />;
}

export default function LeaderboardPage() {
  const [data, setData]       = useState<{ partners: User[]; evangelists: User[] }>({ partners: [], evangelists: [] });
  const [loading, setLoading] = useState(true);
  const [active, setActive]   = useState<Tab>('partners');

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then((json: User[]) => {
        if (Array.isArray(json)) {
          setData({
            partners:    json.filter(u => u.role.toLowerCase() === 'partner'),
            evangelists: json.filter(u => u.role.toLowerCase() === 'evangelist'),
          });
        }
      })
      .catch(e => console.error('Leaderboard fetch failed', e))
      .finally(() => setLoading(false));
  }, []);

  // Auto-switch to teams tab when navigating via #teams hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#teams') {
      setActive('teams');
      // Small delay so the DOM is painted before scrolling
      setTimeout(() => {
        document.getElementById('teams')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, []);

  const users = active === 'partners' ? data.partners : data.evangelists;

  return (
    <main className="min-h-screen bg-[#070B0B] selection:bg-[#00E08F] selection:text-black">
      <Header />

      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none -z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2
                        w-[400px] sm:w-[700px] lg:w-[900px]
                        h-[300px] sm:h-[500px] lg:h-[600px]
                        bg-[#00E08F] rounded-full blur-[120px] sm:blur-[180px] opacity-[0.03]" />
        <div className="absolute top-[30%] right-[-20%] sm:right-[-15%]
                        w-[300px] sm:w-[500px]
                        h-[300px] sm:h-[500px]
                        bg-emerald-700 rounded-full blur-[120px] sm:blur-[150px] opacity-[0.04]" />
      </div>

      <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 min-h-screen">
        <div className="container-custom px-4 sm:px-6 lg:px-8">

          {/* ── Page header ── */}
          <Reveal direction="up">
            <div className="text-center mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="h-px w-6 sm:w-10 bg-[#00E08F]/40" />
                <span className="text-[#00E08F] text-[8px] sm:text-[9px] font-accent
                                 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-semibold">
                  Zyro &apos;26
                </span>
                <div className="h-px w-6 sm:w-10 bg-[#00E08F]/40" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                             font-bold text-white uppercase tracking-wider
                             font-display leading-none mb-2 sm:mb-3">
                Leader<span className="text-[#00E08F]">board</span>
              </h1>
              <p className="text-white/30 max-w-xs sm:max-w-xl mx-auto text-xs sm:text-sm leading-relaxed px-4 sm:px-0">
                Recognizing the top contributors and community members shaping the future of Zyro.
              </p>
            </div>
          </Reveal>

          {/* ── Tab bar ── */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex justify-center mb-8 sm:mb-10 px-2">
              {/* Scrollable on tiny screens */}
              <div id="teams"
                   className="relative flex gap-1 p-1 rounded-xl
                               bg-white/[0.04] border border-white/[0.07]
                               overflow-x-auto max-w-full scrollbar-none">
                {TABS.map(tab => {
                  const isActive = active === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActive(tab.key)}
                      className={`relative flex-shrink-0 rounded-lg cursor-pointer z-10
                                  px-3 sm:px-5 py-2 sm:py-2.5
                                  text-[10px] sm:text-[11px] font-accent font-bold
                                  uppercase tracking-widest transition-colors duration-200
                                  ${isActive ? 'text-[#070B0B]' : 'text-white/35 hover:text-white/70'}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tab-pill"
                          className="absolute inset-0 rounded-lg bg-[#00E08F] -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 38 }}
                        />
                      )}
                      {/* Short label on mobile, full on sm+ */}
                      <span className="sm:hidden">{tab.short}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* ── Tab content ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {active === 'teams' ? (
                /* ── Selected Teams ── */
                <div>
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-white font-display
                                   uppercase tracking-wider">
                      Qualified <span className="text-[#00E08F]">Teams</span>
                    </h2>
                    <p className="text-white/25 text-[10px] sm:text-xs mt-1 font-accent">
                      Phase 1 · Phase 2 — search by team or member name
                    </p>
                  </div>
                  <SelectedTeamsFull />
                </div>

              ) : loading ? (
                /* ── Skeleton ── */
                <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
                  {/* Podium skeleton */}
                  <div className="flex items-end justify-center gap-3 sm:gap-6 px-4">
                    <Skeleton className="h-36 sm:h-48 flex-1 max-w-[100px] sm:max-w-[140px]" />
                    <Skeleton className="h-44 sm:h-56 flex-1 max-w-[120px] sm:max-w-[160px] -translate-y-3" />
                    <Skeleton className="h-28 sm:h-40 flex-1 max-w-[100px] sm:max-w-[140px]" />
                  </div>
                  {/* Table skeleton */}
                  <Skeleton className="h-64 sm:h-96 w-full" />
                </div>

              ) : (
                /* ── Rankings ── */
                <>
                  <TopThree users={users} />
                  <LeaderboardTable users={users} />
                </>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      <Footer />
    </main>
  );
}

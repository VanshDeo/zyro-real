'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Trophy } from 'lucide-react';
import { Reveal } from './AdvancedAnimations';

interface User {
  name: string;
  role: string;
  score: number;
}

export default function HomeLeaderboardPreview() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/leaderboard');
        const json = await res.json();
        if (Array.isArray(json)) {
          // Get the absolute top 5 regardless of role.
          setData(json.slice(0, 5));
        }
      } catch (error) {
        console.error("Failed to fetch preview leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#070B0B] py-16 sm:py-24 border-t border-white/5">
      <div className="container-custom relative z-10">
        <Reveal direction="up">
          <div className="mb-10 text-center">
             <div className="flex items-center justify-center gap-4 mb-2">
                 <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#00E08F]/40 to-transparent" />
                 <span className="text-[#00E08F] text-xs font-accent uppercase tracking-[0.3em] font-semibold flex items-center gap-1">
                     <Trophy className="w-4 h-4" /> Leaderboard
                 </span>
                 <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#00E08F]/40 to-transparent" />
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider font-display">
                 🔥 Top Contributors
             </h2>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/[0.02] border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
              <CardContent className="p-0">
                {loading ? (
                   <div className="p-8 text-center text-white/50">Loading leaderboard...</div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {data.map((user, index) => (
                      <div 
                        key={user.name} 
                        className="flex items-center justify-between p-4 sm:p-6 hover:bg-white/[0.04] transition-colors group"
                      >
                         <div className="flex items-center gap-4">
                           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                              ${index === 0 ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/50' : 
                                index === 1 ? 'bg-gray-300/20 text-gray-300 border border-gray-300/50' : 
                                index === 2 ? 'bg-orange-400/20 text-orange-400 border border-orange-400/50' : 
                                'bg-white/5 text-white/50 border border-white/10'}`}>
                             {index + 1}
                           </div>
                           <div>
                             <h4 className="text-white font-medium text-lg leading-tight group-hover:text-[#00E08F] transition-colors">{user.name}</h4>
                             <span className="text-white/40 text-xs tracking-wider uppercase">{user.role}</span>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-xl font-display font-bold text-white">{user.score.toLocaleString()}</div>
                           <div className="text-[#00E08F] text-[10px] uppercase tracking-widest">Points</div>
                         </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Link href="/leaderboard">
                 <Button className="bg-[#00E08F] hover:bg-[#00E08F]/90 text-black font-semibold tracking-widest uppercase px-8 py-6 rounded-none transition-all hover:scale-105 active:scale-95 group">
                   View Full Leaderboard
                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

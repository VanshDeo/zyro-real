'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopThree from '@/components/TopThree';
import LeaderboardTable from '@/components/LeaderboardTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Reveal } from '@/components/AdvancedAnimations';
import { Skeleton } from '@/components/ui/skeleton';

interface User {
  name: string;
  role: string;
  score: number;
}

export default function LeaderboardPage() {
  const [data, setData] = useState<{ partners: User[]; evangelists: User[] }>({ partners: [], evangelists: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/leaderboard');
        const json: User[] = await res.json();
        
        if (Array.isArray(json)) {
          setData({
            partners: json.filter((u) => u.role.toLowerCase() === 'partner'),
            evangelists: json.filter((u) => u.role.toLowerCase() === 'evangelist'),
          });
        }
      } catch (error) {
        console.error("Failed to fetch leaderboard data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen relative bg-[#070B0B] selection:bg-[#00E08F] selection:text-black">
      <Header />

      <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00E08F] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

        <div className="container-custom relative z-10">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wider font-display mb-4">
                Leaderboard
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Recognizing the top contributors and community members shaping the future.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            {loading ? (
               <div className="space-y-8 max-w-5xl mx-auto">
                 <div className="flex justify-center mb-12">
                   <Skeleton className="h-14 w-64 bg-white/5 rounded-xl" />
                 </div>
                 <div className="flex gap-4 justify-center">
                    <Skeleton className="h-64 w-64 bg-white/5 rounded-xl" />
                    <Skeleton className="h-72 w-72 bg-white/5 rounded-xl -translate-y-4" />
                    <Skeleton className="h-64 w-64 bg-white/5 rounded-xl" />
                 </div>
                 <Skeleton className="h-[400px] w-full bg-white/5 rounded-2xl" />
               </div>
            ) : (
              <Tabs defaultValue="partners" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="bg-white/5 border border-white/10 p-1 rounded-xl">
                    <TabsTrigger 
                      value="partners" 
                      className="data-[state=active]:bg-[#00E08F] data-[state=active]:text-black text-white/50 px-8 py-3 rounded-lg transition-all font-bold tracking-wider uppercase cursor-pointer"
                    >
                      Community Partners
                    </TabsTrigger>
                    <TabsTrigger 
                      value="evangelists" 
                      className="data-[state=active]:bg-[#00E08F] data-[state=active]:text-black text-white/50 px-8 py-3 rounded-lg transition-all font-bold tracking-wider uppercase cursor-pointer"
                    >
                      Evangelists
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="partners" className="mt-0 outline-none animate-in fade-in duration-500">
                  <TopThree users={data.partners} />
                  <LeaderboardTable users={data.partners} />
                </TabsContent>

                <TabsContent value="evangelists" className="mt-0 outline-none animate-in fade-in duration-500">
                  <TopThree users={data.evangelists} />
                  <LeaderboardTable users={data.evangelists} />
                </TabsContent>
              </Tabs>
            )}
          </Reveal>
        </div>
      </div>

      <Footer />
    </main>
  );
}

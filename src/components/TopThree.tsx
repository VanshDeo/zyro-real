'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';

interface User {
  name: string;
  role: string;
  score: number;
}

export default function TopThree({ users }: { users: User[] }) {
  if (!users || users.length === 0) return null;

  // Ensure we have exactly up to 3 users
  const topUsers = [...users].slice(0, 3);

  const getRankInfo = (index: number) => {
    switch(index) {
      case 0: return { rank: '🥇 1st', color: 'from-yellow-300 via-yellow-500 to-yellow-600', shadow: 'shadow-[#fde047]/30', orderClass: 'order-1 md:order-2' };
      case 1: return { rank: '🥈 2nd', color: 'from-gray-300 via-gray-400 to-gray-500', shadow: 'shadow-gray-400/30', orderClass: 'order-2 md:order-1' };
      case 2: return { rank: '🥉 3rd', color: 'from-orange-300 via-amber-600 to-orange-700', shadow: 'shadow-amber-600/30', orderClass: 'order-3 md:order-3' };
      default: return { rank: '', color: '', shadow: '', orderClass: '' };
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 mt-8 mb-16">
      {topUsers.map((user, i) => {
        const isFirst = i === 0;
        const { rank, color, shadow, orderClass } = getRankInfo(i);

        return (
          <motion.div
            key={user.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            className={`w-full md:w-64 relative ${orderClass} ${isFirst ? 'md:-translate-y-6 md:scale-110 z-10' : 'z-0'}`}
          >
            {/* Glowing background behind card */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} blur-xl opacity-20 pointer-events-none`} />
            
            <Card className={`relative overflow-hidden border-white/10 bg-white/[0.03] backdrop-blur-xl ${shadow} shadow-2xl`}>
              <div className={`h-1 w-full bg-gradient-to-r ${color}`} />
              <CardContent className="pt-6 pb-8 px-6 flex flex-col items-center text-center">
                
                <div className="relative mb-4">
                  <div className={`w-20 h-20 rounded-full p-[2px] bg-gradient-to-br ${color}`}>
                    <div className="w-full h-full rounded-full bg-[#070B0B] overflow-hidden flex items-center justify-center relative">
                       {/* Placeholder Avatar */}
                       <Image 
                          src={`https://api.dicebear.com/9.x/notionists/svg?seed=${user.name}`} 
                          alt={user.name} 
                          fill 
                          className="object-cover"
                       />
                    </div>
                  </div>
                  <Badge className={`absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r ${color} text-black font-bold border-none whitespace-nowrap`}>
                    {rank}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mt-2 truncate w-full">{user.name}</h3>
                <p className="text-[#00E08F] text-sm tracking-widest uppercase mt-1 mb-3">{user.role}</p>
                
                <div className="flex items-baseline gap-1 mt-auto">
                  <span className="text-3xl font-display font-bold text-white">{user.score.toLocaleString()}</span>
                  <span className="text-white/50 text-xs tracking-widest uppercase">pts</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

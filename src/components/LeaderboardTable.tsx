'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface User {
  name: string;
  role: string;
  score: number;
}

export default function LeaderboardTable({ users }: { users: User[] }) {
  const [filter, setFilter] = useState<'All-Time' | 'Monthly' | 'Weekly'>('All-Time');

  return (
    <div className="w-full max-w-5xl mx-auto backdrop-blur-xl bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-8 shadow-xl mt-8">
      {/* Header and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="text-2xl font-display font-medium text-white tracking-widest uppercase">
          Rankings
        </h3>
        <div className="flex bg-[#070B0B] p-1 rounded-lg border border-white/10">
          {['Weekly', 'Monthly', 'All-Time'].map((f) => (
            <Button
              key={f}
              variant="ghost"
              size="sm"
              onClick={() => setFilter(f as typeof filter)}
              className={`rounded-md transition-all ${
                filter === f
                  ? 'bg-[#00E08F] text-black hover:bg-[#00E08F]/90 font-bold'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {f}
            </Button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-white/10 overflow-hidden">
        <Table>
          <TableHeader className="bg-white/5 pointer-events-none">
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="w-16 text-center text-white/50 tracking-widest font-accent">Rank</TableHead>
              <TableHead className="text-white/50 tracking-widest font-accent">Name</TableHead>
              <TableHead className="text-white/50 tracking-widest font-accent">Role</TableHead>
              <TableHead className="text-right text-white/50 tracking-widest font-accent">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow className="border-white/10">
                <TableCell colSpan={4} className="h-24 text-center text-white/50">
                  No data available.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user, index) => {
                const rank = index + 1;
                const isTopThree = rank <= 3;
                return (
                  <TableRow 
                    key={`${user.name}-${index}`}
                    className="border-white/10 hover:bg-white/[0.04] transition-colors"
                  >
                    <TableCell className="text-center font-bold">
                      {isTopThree ? (
                        <span className={`inline-block w-6 text-xl ${
                          rank === 1 ? 'text-yellow-400' :
                          rank === 2 ? 'text-gray-300' :
                          'text-orange-400'
                        }`}>
                          #{rank}
                        </span>
                      ) : (
                        <span className="text-white/50">#{rank}</span>
                      )}
                    </TableCell>
                    <TableCell className="font-medium text-white text-base">
                      {user.name}
                      {isTopThree && (
                         <Badge variant="outline" className="ml-3 border-[#00E08F]/30 text-[#00E08F] bg-[#00E08F]/10 scale-90 hidden sm:inline-flex">
                           Top Contributor
                         </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-white/60">
                      {user.role}
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="font-display font-medium text-lg text-[#00E08F]">
                        {user.score.toLocaleString()}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Header           from '@/components/Header';
import Preloader        from '@/components/Preloader';
import Hero             from '@/components/Hero';
import AboutSection     from '@/components/AboutSection';
import PrizePoolSection from '@/components/PrizePoolSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import TracksSection   from '@/components/TracksSection';
import PartnersSection  from '@/components/PartnersSection';
import FAQSection       from '@/components/FAQSection';
import Footer           from '@/components/Footer';
import HomeLeaderboardPreview from '@/components/HomeLeaderboardPreview';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen relative">
      {/* ── Preloader ── */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* ── Page content ── */}
      <div className="relative z-10">
        <Header />

        {/* Hero & Stats */}
        <div id="home">
          <Hero />
        </div>

        {/* About */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Prizes */}
        <div id="prizes">
          <PrizePoolSection />
        </div>

        {/* Timeline */}
        <div id="timeline">
          <BusinessModelSection />
        </div>

        {/* Tracks */}
        <div id="tracks">
          <TracksSection />
        </div>

        {/* Community & Sponsors */}
        <div id="partners">
          <PartnersSection />
        </div>

        {/* Leaderboard Preview */}
        <HomeLeaderboardPreview />

        {/* FAQ */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Footer / Terms */}
        <div id="terms">
          <Footer />
        </div>
      </div>
    </main>
  );
}

'use client';

import Header from '@/components/Header';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import AboutSection from '@/components/AboutSection';
import InnovationSection from '@/components/InnovationSection';
import IntersectionSection from '@/components/IntersectionSection';
import MascotSection from '@/components/MascotSection';
import VideoShowcase from '@/components/VideoShowcase';
import GreenTechSection from '@/components/GreenTechSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import PartnersSection from '@/components/PartnersSection';
import StatsTicker from '@/components/StatsTicker';
import PrizePoolSection from '@/components/PrizePoolSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {/* Particle Background - Behind everything */}
      {/* <ParticleBackground /> */}

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div id="home">
          <Hero />
        </div>
        <StatsTicker />
        <div id="about">
          <AboutSection />
        </div>
          <div id="prizes">
          <PrizePoolSection />
        </div>
         <div id="timeline">
          <BusinessModelSection />
        </div>
        {/* <InnovationSection /> */}
        <div id="tracks">
          <MascotSection />
        </div>
        {/* <IntersectionSection /> */}
        {/* <VideoShowcase /> */}
        {/* <GreenTechSection /> */}
       
        <div id="partners">
          <PartnersSection />
        </div>

      
        <div id="faq">
          <FAQSection />
        </div>
        <div id="terms">
          <Footer />
        </div>
      </div>
    </main>
  );
}

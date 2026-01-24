import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InnovationSection from '@/components/InnovationSection';
import IntersectionSection from '@/components/IntersectionSection';
import MascotSection from '@/components/MascotSection';
import VideoShowcase from '@/components/VideoShowcase';
import GreenTechSection from '@/components/GreenTechSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import PartnersSection from '@/components/PartnersSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Particle Background - Behind everything */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        {/* <InnovationSection /> */}
        <MascotSection />
        {/* <IntersectionSection /> */}
        {/* <VideoShowcase /> */}
        {/* <GreenTechSection /> */}
        <BusinessModelSection />
        <PartnersSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}

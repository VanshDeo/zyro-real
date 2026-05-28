'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState, FC, ReactNode, SVGProps } from 'react';
import { Reveal } from './AdvancedAnimations';
import Image from 'next/image';
import { COMMUNITY, SPONSORS } from '@/lib/partnersData';

// Inline utility to merge tailwind classes cleanly without needing external dependencies like 'clsx'
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

/* ── Custom Smart Layout Hook ────────────────────────────────── */
function computeSmartLayout<T>(items: T[], columns: number) {
  if (columns === 0) return [];
  
  const result: { item: T; colSpan: number }[] = [];
  const pending = items.map((it, idx) => {
    // Basic logic to request double-width for some random aesthetics
    const isLarge = idx === 0 || idx === 3 || idx === 7 || idx === 10;
    let span = isLarge ? 2 : 1;
    if (span > columns) span = columns;
    return { item: it, desiredSpan: span, processed: false };
  });

  let currentRowSpace = columns;

  while (pending.some(p => !p.processed)) {
    // Rule 1: Try to find an element that fits perfectly in remaining space (Dense packing)
    const fitIdx = pending.findIndex(p => !p.processed && p.desiredSpan <= currentRowSpace);

    if (fitIdx !== -1) {
      const p = pending[fitIdx];
      p.processed = true;
      result.push({ item: p.item, colSpan: p.desiredSpan });
      currentRowSpace -= p.desiredSpan;

      if (currentRowSpace === 0) currentRowSpace = columns; // Row complete
    } else {
      // Rule 2: No element fits. This means remaining space < next element's desired span.
      // We force-shrink the closest remaining element so the space is perfectly filled without holes!
      const nextIdx = pending.findIndex(p => !p.processed);
      if (nextIdx !== -1) {
        const p = pending[nextIdx];
        p.processed = true;
        result.push({ item: p.item, colSpan: currentRowSpace });
        currentRowSpace = columns; // Row perfectly completed via shrinking
      }
    }
  }

  // Rule 3: Don't leave uneven spaces on the very last row! Stretch the last item.
  if (currentRowSpace > 0 && currentRowSpace < columns && result.length > 0) {
    result[result.length - 1].colSpan += currentRowSpace;
  }

  return result;
}

export const SmartGridLayout = ({
  className,
  items,
}: {
  className?: string;
  items: any[];
}) => {
  const [columns, setColumns] = useState(5); // Default desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setColumns(2); // Mobile
      else if (window.innerWidth < 1024) setColumns(4); // Tablet
      else setColumns(5); // Desktop
    };
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layout = computeSmartLayout(items, columns);

  // We map pure JS calculations to standard tailwind grid classes
  const spanClasses: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
  };

  return (
    <div
      className={cn(
        "grid w-full grid-flow-row auto-rows-[6rem] sm:auto-rows-[8rem] lg:auto-rows-[10rem] gap-3 lg:gap-4 mt-6",
        columns === 2 ? "grid-cols-2" : columns === 4 ? "grid-cols-4" : "grid-cols-5",
        className
      )}
    >
      {layout.map(({ item, colSpan }, i) => (
        <div
          key={item.id}
          className={cn(
            "group relative flex items-center justify-center p-4",
            "bg-white/[0.015] backdrop-blur-xl border border-white/5 overflow-hidden rounded-xl",
            "hover:bg-[#00E08F]/[0.03] transition-all duration-500 ease-in-out",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[inset_0_1px_0_rgba(0,224,143,0.3),_0_8px_32px_rgba(0,0,0,0.4)]",
            spanClasses[colSpan] || 'col-span-1'
          )}
        >
          {/* Soft glowing ambient light inside the card on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(0,224,143,0.1),transparent_75%)] pointer-events-none" />
          
          <div className="absolute inset-0 z-0 flex items-center justify-center p-3 sm:p-4 lg:p-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out">
             <Image
                 src={item.url}
                 alt={item.sponsor}
                 fill
                 sizes="(max-width: 640px) 150px, 250px"
                 className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(0,224,143,0.4)] transition-all duration-700"
             />
          </div>

          {/* Top glowing edge line that expands on hover */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#00E08F] to-transparent w-0 group-hover:w-[80%] transition-all duration-700 ease-out opacity-0 group-hover:opacity-100" />
          

        </div>
      ))}
    </div>
  );
};

/* ── Section Label ───────────────────────────────────────────── */
function SectionLabel({ text }: { text: string }) {
    return (
        <Reveal direction="up">
            <div className="mb-6 lg:mb-8">
                <div className="flex items-center gap-4 mb-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00E08F]/40 to-transparent" />
                    <span className="text-[#00E08F] text-xs font-accent uppercase tracking-[0.3em] font-semibold">
                        {text}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00E08F]/40 to-transparent" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider font-display text-center">
                    {text}
                </h2>
            </div>
        </Reveal>
    );
}

/* ── Partner Bento Integration ────────────────────────────────── */
function DynamicBentoLayout({ items }: { items: { id: number; sponsor: string; url: string }[] }) {
    return (
        <Reveal direction="up" delay={0.1}>
            <SmartGridLayout items={items} />
        </Reveal>
    );
}

/* ── Main Component ──────────────────────────────────────────── */
export default function PartnersSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-[#070B0B] py-16 sm:py-24">
            {/* Parallax background */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image
                    src="/images/hero-leaves.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-20 scale-110"
                    aria-hidden="true"
                />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#070B0B] from-5% via-[#070B0B]/90 to-[#070B0B]" />

            {/* Circuit decoration — left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10 hidden lg:block opacity-40">
                <svg width="80" height="100%" viewBox="0 0 80 800" preserveAspectRatio="none">
                    <path d="M40 80 L40 180 L65 210 L65 590 L40 620 L40 800" stroke="#00E08F" strokeWidth="1.5" fill="none" style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }} />
                    <rect x="36" y="76" width="8" height="8" fill="#00E08F" />
                    <rect x="36" y="796" width="8" height="8" fill="#00E08F" transform="rotate(45 40 800)" />
                </svg>
            </div>

            {/* Circuit decoration — right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10 hidden lg:block opacity-40">
                <svg width="80" height="100%" viewBox="0 0 80 800" preserveAspectRatio="none">
                    <path d="M40 80 L40 180 L15 210 L15 590 L40 620 L40 800" stroke="#00E08F" strokeWidth="1.5" fill="none" style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }} />
                    <rect x="36" y="76" width="8" height="8" fill="#00E08F" />
                    <rect x="36" y="796" width="8" height="8" fill="#00E08F" transform="rotate(45 40 800)" />
                </svg>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 space-y-24">
                
                {/* ── COMMUNITY ── */}
                <div>
                    <SectionLabel text="Community" />
                    <DynamicBentoLayout items={COMMUNITY} />
                </div>

                {/* ── SPONSORS ── */}
                <div>
                    <SectionLabel text="Sponsors" />
                    <DynamicBentoLayout items={SPONSORS} />
                </div>

            </div>
        </section>
    );
}

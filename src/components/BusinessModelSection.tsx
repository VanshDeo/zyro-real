"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./AdvancedAnimations";
import { businessComponents } from "@/lib/businessComponentsData";

export default function BusinessModelSection() {
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start 80%", "end 20%"]
  });

  return (
    <section className="section relative overflow-hidden bg-black min-h-screen py-10">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source
            src="https://res.cloudinary.com/dlrlet9fg/video/upload/v1769270495/9a163233-0ae9-4c7d-873f-220ab0943ea0_e5wthk.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Left Circuit Decoration - Standard FAQ Style - Desktop Only */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10 hidden lg:block">
        <svg
          width="100"
          height="600"
          viewBox="0 0 100 600"
          className="opacity-80"
        >
          <path
            d="M50 0 L50 200 L80 230 L80 370 L50 400 L50 600"
            stroke="#00E08F"
            strokeWidth="2"
            fill="none"
            style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }}
          />
          <rect x="46" y="0" width="8" height="8" fill="#00E08F" />
          <rect x="46" y="592" width="8" height="8" fill="#00E08F" transform="rotate(45 50 596)" />
        </svg>
      </div>

      {/* Right Circuit Decoration - Standard FAQ Style - Desktop Only */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10 hidden lg:block">
        <svg
          width="100"
          height="600"
          viewBox="0 0 100 600"
          className="opacity-80 scale-x-[-1]"
        >
          <path
            d="M50 0 L50 200 L80 230 L80 370 L50 400 L50 600"
            stroke="#00E08F"
            strokeWidth="2"
            fill="none"
            style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }}
          />
          <rect x="46" y="0" width="8" height="8" fill="#00E08F" />
          <rect x="46" y="592" width="8" height="8" fill="#00E08F" transform="rotate(45 50 596)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container-custom relative z-10 w-full h-full">
        {/* Title - Relative Flow for BOTH Mobile and Desktop (Standardized) */}
        <div className="relative z-10 mb-2 pt-4 md:pt-0">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-10 bg-[#00E08F]/70" />
              <span className="text-[#00E08F] text-xs font-accent uppercase tracking-[0.35em] font-semibold">Schedule</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase font-display tracking-wider">
              Timeline
            </h2>
          </Reveal>
        </div>

        {/* ==========================================
                MOBILE LAYOUT: Vertical Stack (One by One) 
                ========================================== */}
        {/* ==========================================
                MOBILE LAYOUT: Vertical Stack (One by One) 
                ========================================== */}
        <div ref={mobileContainerRef} className="relative w-full px-4 pb-10 mt-2 z-10 block md:hidden">
          {/* Static background dashed line */}
          <div className="absolute left-[27px] top-6 bottom-10 w-[2px] bg-[#00E08F]/10 border-l border-dashed border-[#00E08F]/20" />
          
          {/* Dynamic Interactive Scroll Line */}
          <motion.div 
            className="absolute left-[27px] top-6 bottom-10 w-[2px] bg-[#00E08F] origin-top"
            style={{ 
              scaleY: scrollYProgress,
              // filter: 'drop-shadow(0 0 4px #00E08F) drop-shadow(0 0 8px rgba(0,224,143,0.6))'
            }}
          />

          <div className="flex flex-col gap-6 pl-12">
            {businessComponents.map((component, index) => (
              <motion.div
                key={`mobile-${component.id}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[45px] top-5 w-4 h-4 rounded-full bg-black border-2 border-[#00E08F] shadow-[0_0_10px_rgba(0,224,143,0.6)] z-20" />

                {/* Card */}
                <div
                  className="relative bg-[#1F2937]"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                    padding: '1px',
                  }}
                >
                  <div
                    className="relative p-5 bg-black/85 backdrop-blur-md h-full"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                      borderLeft: `3px solid ${component.color}`,
                    }}
                  >
                    {/* Glow */}
                    <div
                      className="absolute -right-6 -top-6 w-24 h-24 opacity-15 blur-2xl rounded-full"
                      style={{ backgroundColor: component.color }}
                    />

                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <span
                        className="text-xs font-accent font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
                        style={{ color: component.color }}
                      >
                        {component.date}
                      </span>
                      <div
                        className="w-7 h-7 flex items-center justify-center rounded-lg font-bold font-accent text-black text-xs"
                        style={{ backgroundColor: component.color }}
                      >
                        {component.number}
                      </div>
                    </div>

                    <h3 className="text-base font-bold font-accent text-white mb-1.5 relative z-10 uppercase tracking-wide">
                      {component.title}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed relative z-10">
                      {component.description}
                    </p>

                    {component.button && (
                      <a
                        href={component.button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-4 py-1.5 text-xs font-accent font-bold uppercase tracking-widest text-black bg-[#00E08F] rounded-lg hover:opacity-85 transition relative z-50 pointer-events-auto"
                      >
                        {component.button.text}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================
                DESKTOP LAYOUT: Absolute Node Map 
                ========================================== */}
        <div className="relative w-full h-[520px] md:h-[620px] lg:h-[850px] mt-4 md:mt-6 lg:mt-8 z-10 hidden md:block">
          {/* Component Labels with Connecting Lines */}
          {businessComponents.map((component, index) => {
            // Calculate diagonal line endpoint using trigonometry
            const angleRad = (component.lineAngle * Math.PI) / 180;
            const endX = Math.cos(angleRad) * component.lineLength;
            const endY = Math.sin(angleRad) * component.lineLength;
            const svgWidth = Math.abs(endX) + 40;
            const svgHeight = Math.abs(endY) + 40;
            const startX = svgWidth / 2;
            const startY = 10;

            return (
              <motion.div
                key={component.id}
                className="absolute"
                style={component.position}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Label Box with structured content */}
                {/* Label Box - Cyber HUD Style for Desktop */}
                <div
                  className="relative bg-[#1F2937] w-48 md:w-56 lg:w-72"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    padding: "1px",
                  }}
                >
                  <div
                    className="relative p-6 bg-black/80 backdrop-blur-md h-full"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                      borderLeft: `4px solid ${component.color}`,
                    }}
                  >
                    {/* Glow Effect */}
                    <div
                      className="absolute -right-10 -top-10 w-32 h-32 opacity-20 blur-2xl rounded-full"
                      style={{ backgroundColor: component.color }}
                    />

                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div
                        className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10"
                        style={{ color: component.color }}
                      >
                        {component.date}
                      </div>
                      <div
                        className="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-black text-sm shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        style={{ backgroundColor: component.color }}
                      >
                        {component.number}
                      </div>
                    </div>

                    <h3 className="text-sm md:text-base lg:text-xl font-bold font-accent text-white mb-2 relative z-10 uppercase tracking-wide">
                      {component.title}
                    </h3>
                    <p className="text-white/70 text-[10px] md:text-xs leading-relaxed relative z-10">
                      {component.description}
                    </p>
                    {component.button && (
                      <a
                        href={component.button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-accent font-semibold uppercase tracking-widest text-[#00E08F] bg-[#00E08F]/10 border border-[#00E08F]/50 rounded-md hover:bg-[#00E08F] hover:text-black transition relative z-50 pointer-events-auto"
                      >
                        {component.button.text}
                      </a>
                    )}
                  </div>
                </div>

                {/* Connecting Line - Diagonal/Angled */}
                <svg
                  className={`absolute left-1/2 -translate-x-1/2 pointer-events-none ${component.lineAngle < 0 ? "-top-4" : "top-full"}`}
                  width={svgWidth}
                  height={svgHeight}
                  style={{ overflow: "visible" }}
                >
                  <motion.line
                    x1={startX}
                    y1={startY}
                    x2={startX + endX}
                    y2={startY + endY}
                    stroke="#00E08F"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                  <motion.circle
                    cx={startX + endX}
                    cy={startY + endY}
                    r="4"
                    fill="#00E08F"
                    style={{ filter: 'drop-shadow(0 0 4px #00E08F)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                  />
                </svg>
              </motion.div>
            );
          })}

          {/* Central Visualization Area (Video provides the 3D elements) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 flex items-center justify-center pointer-events-none">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* The video background shows the 3D isometric visualization */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

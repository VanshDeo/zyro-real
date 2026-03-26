"use client";

import { motion } from "framer-motion";
import { Reveal } from "./AdvancedAnimations";
import { businessComponents } from "@/lib/businessComponentsData";

export default function BusinessModelSection() {
  return (
    <section className="section relative overflow-hidden bg-black min-h-screen py-20">
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
            type="video/webm"
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
          />
          <rect
            x="46"
            y="0"
            width="8"
            height="8"
            fill="#00E08F"
            filter="url(#glow-bm)"
          />
          <rect
            x="46"
            y="592"
            width="8"
            height="8"
            fill="#00E08F"
            filter="url(#glow-bm)"
            transform="rotate(45 50 596)"
          />
          <defs>
            <filter id="glow-bm">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
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
          />
          <rect
            x="46"
            y="0"
            width="8"
            height="8"
            fill="#00E08F"
            filter="url(#glow-bm2)"
          />
          <rect
            x="46"
            y="592"
            width="8"
            height="8"
            fill="#00E08F"
            filter="url(#glow-bm2)"
            transform="rotate(45 50 596)"
          />
          <defs>
            <filter id="glow-bm2">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container-custom relative z-10 w-full h-full">
        {/* Title - Relative Flow for BOTH Mobile and Desktop (Standardized) */}
        <div className="relative z-10 mb-12 ml-12 md:ml-0 pt-24 md:pt-0">
          <Reveal direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase">
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
        <div className="relative w-full px-6 pb-20 mt-12 z-10 block lg:hidden">
          {/* Connecting Green Line */}
          <div className="absolute left-6 top-10 bottom-20 w-[2px] bg-gradient-to-b from-[#00E08F] via-[#00E08F]/50 to-transparent" />

          <div className="flex flex-col gap-12 pl-8">
            {businessComponents.map((component, index) => (
              <motion.div
                key={`mobile-${component.id}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Dot on the Line */}
                <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full bg-[#000] border-2 border-[#00E08F] shadow-[0_0_10px_#00E08F] z-20" />

                {/* Card Content - Cyber HUD Style */}
                <div
                  className="relative bg-[#1F2937]"
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
                        className="text-sm font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10"
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

                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                      {component.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                      {component.description}
                    </p>
                    {component.button && (
                      <button
                        onClick={component.button.action}
                        className="mt-4 px-4 py-2 text-sm font-semibold text-black bg-[#00E08F] rounded-md hover:opacity-80 transition"
                      >
                        {component.button.text}
                      </button>
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
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[850px] mt-20 md:mt-32 z-10 hidden lg:block">
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
                  className="relative bg-[#1F2937] w-72"
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

                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                      {component.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed relative z-10">
                      {component.description}
                    </p>
                    {component.button && (
                      <button
                        onClick={component.button.action}
                        className="mt-4 px-4 py-2 text-xs font-semibold text-black bg-[#00E08F] rounded-md hover:opacity-80 transition"
                      >
                        {component.button.text}
                      </button>
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
                    filter={`url(#glow-line-${component.id})`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                  />
                  <defs>
                    <filter id={`glow-line-${component.id}`}>
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </motion.div>
            );
          })}

          {/* Central Visualization Area (Video provides the 3D elements) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 flex items-center justify-center">
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
        <div className="text-center mt-12 md:mt-16 px-4 py-4">
          <p className="text-[#A1A1A1] text-xs md:text-sm">
            A comprehensive and detailed timeline will be shared soon. Stay tuned for further updates.
          </p>
        </div>
      </div>
    </section>
  );
}

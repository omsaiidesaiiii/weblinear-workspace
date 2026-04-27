"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const marqueeItems = [
  "Content Agencies",
  "Founders & Execs",
  "Social Media Managers",
  "Content Marketers",
  "Growth Teams",
];

export default function CTAWithVerticalMarquee() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % marqueeItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative py-32 overflow-hidden border-t border-white/5 bg-[#0a0812] min-h-[70vh] flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7c3aed]/10 via-[#0a0812] to-[#0a0812] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 grid grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-x border-white/5 opacity-20 pointer-events-none">
        <div className="border-r border-white/10 h-full"></div>
        <div className="h-full"></div>
        <div className="border-l border-white/10 h-full"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Dynamic Text Carousel/Marquee */}
          <div className="relative h-[400px] flex flex-col justify-center lg:order-1 order-2">
            <div className="relative h-32 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="absolute inset-0 flex items-center lg:justify-end justify-center"
                >
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-instrument font-medium tracking-tight text-center lg:text-right">
                    <span className="bg-gradient-to-r from-[#a484d7] via-white to-[#a484d7] text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(164,132,215,0.3)]">
                      {marqueeItems[activeIndex]}
                    </span>
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Visual indicator for the list */}
            <div className="mt-8 flex flex-col items-center lg:items-end space-y-2 opacity-40">
              {marqueeItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  animate={{ 
                    opacity: activeIndex === idx ? 1 : 0.3,
                    x: activeIndex === idx ? -10 : 0,
                    scale: activeIndex === idx ? 1.05 : 1
                  }}
                  className={cn(
                    "text-sm font-inter tracking-widest uppercase transition-colors",
                    activeIndex === idx ? "text-[#a484d7]" : "text-white"
                  )}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: CTA Content */}
          <div className="space-y-8 max-w-xl lg:order-2 order-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-full h-[32px] px-5 mb-8 shadow-2xl">
                <span className="text-[#a484d7] font-inter font-bold text-[10px] uppercase tracking-widest mr-2">New</span>
                <span className="text-white/80 font-inter font-medium text-[13px] tracking-tight">
                  The OS for modern teams
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-instrument font-medium leading-[1.1] tracking-tight text-white mb-6">
                Built for <br />
                <span className="text-white/40">Scale & Speed</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/50 font-inter leading-relaxed mb-10">
                Join thousands of visionary teams who have already stopped switching
                tabs and started accelerating their growth with Weblinear.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-10 py-4 bg-[#7c3aed] text-white rounded-full font-manrope font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:brightness-110 shadow-[0_0_40px_rgba(124,58,237,0.25)] border border-white/10">
                  <span className="relative z-10">Start Free Trial</span>
                </button>
                <button className="group relative px-10 py-4 bg-white/5 text-white rounded-full font-manrope font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 border border-white/10 backdrop-blur-sm">
                  <span className="relative z-10">Book a Demo</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

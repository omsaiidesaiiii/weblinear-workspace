"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Smartphone, Globe, BarChart3, ShieldCheck, Zap, Layout, Type } from "lucide-react";

// --- Visual Components from the premium bento ---

function TypeTester() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.4 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="font-instrument text-6xl md:text-8xl text-white font-medium"
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Aa
      </motion.span>
    </div>
  );
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"];

  return (
    <div className="h-full flex items-center justify-center px-4">
      <motion.div
        className={`grid ${layouts[layout]} gap-1.5 w-full max-w-[140px]`}
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-[#7c3aed]/20 rounded-md h-5 w-full border border-[#7c3aed]/30"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function SpeedIndicator() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="h-10 flex items-center justify-center overflow-hidden relative w-full">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="h-8 w-24 bg-white/10 rounded"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              exit={{ opacity: 0, y: -20, position: 'absolute' }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <motion.span
              key="text"
              initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              className="text-3xl md:text-4xl font-instrument font-medium text-white"
            >
              99.9%
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="text-sm text-purple-300/60 font-manrope font-semibold uppercase tracking-wider">Uptime SLA</span>
      <div className="w-full max-w-[120px] h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: loading ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
        />
      </div>
    </div>
  );
}

function SecurityBadge() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShields(prev => {
        const nextIndex = prev.findIndex(s => !s.active);
        if (nextIndex === -1) {
          return prev.map(() => ({ id: Math.random(), active: false }));
        }
        return prev.map((s, i) => i === nextIndex ? { ...s, active: true } : s);
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full gap-3">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={`w-14 h-14 rounded-xl flex items-center justify-center border ${
            shield.active ? 'bg-[#7c3aed]/20 border-[#7c3aed]/50 shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'bg-white/5 border-white/10'
          }`}
          animate={{ scale: shield.active ? 1.1 : 1, rotate: shield.active ? [0, -5, 5, 0] : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Lock className={`w-6 h-6 ${shield.active ? 'text-purple-300' : 'text-gray-600'}`} />
        </motion.div>
      ))}
    </div>
  );
}

function GlobalNetwork() {
  const [pulses] = useState([0, 1, 2, 3, 4]);

  return (
    <div className="flex items-center justify-center h-full relative">
      <Globe className="w-20 h-20 text-white/80 z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-20 h-20 border-2 border-[#7c3aed]/30 rounded-full"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: pulse * 0.8,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

export default function BentoShowcase() {
  return (
    <section className="w-full bg-[#0a0812] py-24 lg:py-32 relative z-10 overflow-hidden border-t border-white/5">
      {/* Hero-matching Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#1a103c_40%,#2d1b69_74%,#4c1d95_88%_50%)] opacity-20 pointer-events-none" />
      
      {/* Decorative Glows */}
      <figure className="bg-[#7c3aed]/10 pointer-events-none absolute -top-1/4 left-1/4 z-0 block aspect-square w-[500px] rounded-full blur-[120px]" />
      <figure className="bg-[#4c1d95]/10 pointer-events-none absolute -bottom-1/4 right-1/4 z-0 block aspect-square w-[500px] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
         
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-instrument text-white text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-6"
          >
            One Intelligent System. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-indigo-400">
              Limitless Possibilities.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-[18px] text-purple-100/60 leading-relaxed max-w-2xl"
          >
            Experience a workspace that adapts to your needs. From advanced analytics to global infrastructure, Weblinear brings everything together in one premium interface.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[220px]">
          
          {/* 1. Design & Typography - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-[#1a103c]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col hover:border-[#7c3aed]/50 transition-all cursor-pointer overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, backgroundColor: "rgba(26, 16, 60, 0.6)" }}
          >
            <div className="flex-1">
              <TypeTester />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2 text-purple-300">
                <Type className="w-5 h-5" />
                <h3 className="font-instrument text-2xl text-white font-medium">Brand Identity</h3>
              </div>
              <p className="text-purple-100/50 text-sm mt-1 leading-relaxed">Ensure visual consistency across every customer touchpoint with integrated design systems.</p>
            </div>
          </motion.div>

          {/* 2. Global Network - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-[#1a103c]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col hover:border-[#7c3aed]/50 transition-all cursor-pointer overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.3)" }}
          >
            <div className="flex-1 flex items-center justify-center">
              <GlobalNetwork />
            </div>
            <div className="mt-auto relative z-20 bg-[#2d1b69]/40 backdrop-blur-md rounded-2xl p-4 border border-[#7c3aed]/20">
              <div className="flex items-center gap-2 mb-2 text-purple-300">
                <Globe className="w-5 h-5" />
                <h3 className="font-instrument text-2xl text-white font-medium">Unified Platform</h3>
              </div>
              <p className="text-purple-100/50 text-sm mt-1 leading-relaxed">Connect your global team with lightning-fast collaboration tools and edge-optimized data.</p>
            </div>
          </motion.div>

          {/* 3. Layouts & Workflows - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-[#1a103c]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col hover:border-indigo-500/50 transition-all cursor-pointer overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <LayoutAnimation />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1 text-indigo-300">
                <Layout className="w-5 h-5" />
                <h3 className="font-instrument text-xl text-white font-medium">Smart Workflows</h3>
              </div>
              <p className="text-purple-100/50 text-sm mt-1">Adaptive grids that organize your tasks intelligently.</p>
            </div>
          </motion.div>

          {/* 4. Performance - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-[#1a103c]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col hover:border-purple-400/50 transition-all cursor-pointer overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <SpeedIndicator />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1 text-purple-300">
                <Zap className="w-5 h-5" />
                <h3 className="font-instrument text-xl text-white font-medium">Live Analytics</h3>
              </div>
              <p className="text-purple-100/50 text-sm mt-1">Real-time performance tracking with sub-second latency.</p>
            </div>
          </motion.div>

          {/* 5. Security - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-[#1a103c]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col hover:border-purple-500/50 transition-all cursor-pointer overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <SecurityBadge />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1 text-indigo-300">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-instrument text-xl text-white font-medium">Enterprise Security</h3>
              </div>
              <p className="text-purple-100/50 text-sm mt-1">Multi-layered encryption and proactive threat detection built-in.</p>
            </div>
          </motion.div>

          {/* 6. Mobile Ready - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-[#1a103c]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col hover:border-purple-600/50 transition-all cursor-pointer overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Smartphone className="w-16 h-16 text-purple-200 drop-shadow-[0_0_15px_rgba(124,58,237,0.4)]" />
              </motion.div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1 text-purple-300">
                <Smartphone className="w-5 h-5" />
                <h3 className="font-instrument text-xl text-white font-medium">Native Mobility</h3>
              </div>
              <p className="text-purple-100/50 text-sm mt-1">Access your entire workspace from any device, anywhere in the world.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

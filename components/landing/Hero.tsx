"use client";

import { motion } from "framer-motion";
import { BlurText } from "@/components/ui/blur-text";
import { PremiumButton } from "@/components/ui/premium-button";
import FUIHeroWithBorders from "@/components/ui/herowith-logos";

export default function Hero() {
  return (
    <FUIHeroWithBorders>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-32 lg:mt-40 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center bg-card dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-xl rounded-full h-[32px] pl-1 pr-4 mb-8 shadow-sm dark:shadow-2xl"
        >
          <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-0.5 font-inter font-bold text-[10px] uppercase tracking-wider mr-3 ml-0.5">
            New
          </span>
          <span className="text-foreground dark:text-white/80 font-inter font-medium text-[13px] tracking-tight">
            Weblinear Workspace v3.2 is here
          </span>
        </motion.div>

        {/* Headline */}
        <div className="font-instrument text-foreground dark:text-white text-5xl md:text-7xl lg:text-[100px] leading-[0.95] tracking-tighter max-w-5xl">
          <BlurText text="Run Your Business" delay={100} stepDuration={0.3} animateBy="words" as="div" />
          <BlurText text="from One Workspace" delay={400} stepDuration={0.3} animateBy="words" className="text-muted-foreground dark:text-white/40 block mt-2" as="div" />
        </div>

        {/* Subheadline */}
        <BlurText
          text="A deeply integrated platform designed for teams who value speed and simplicity. Manage everything in one place."
          className="font-inter text-[18px] md:text-[20px] text-muted-foreground dark:text-white/50 max-w-[600px] mt-8 leading-relaxed mx-auto text-center"
          as="p"
          delay={600}
          stepDuration={0.05}
          animateBy="words"
        />

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12"
        >
          <PremiumButton 
            className="px-10 py-4 text-[15px]"
          >
            Start Free Trial
          </PremiumButton>
          <PremiumButton 
            variant="secondary" 
            className="px-10 py-4 text-[15px] !font-semibold font-inter hover:!bg-secondary dark:hover:!bg-white/10"
          >
            Book a Demo
          </PremiumButton>
        </motion.div>
      </div>
    </FUIHeroWithBorders>
  );
}

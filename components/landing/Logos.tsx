"use client";

import { motion } from "framer-motion";
import { AnimatedLogoCloud } from "@/components/ui/herowith-logos";

export default function Logos() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full py-10 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-normal text-sm text-muted-foreground mb-6 tracking-wide uppercase">
          Trusted by growing businesses to automate operations and boost
          efficiency
        </p>
        <AnimatedLogoCloud />
      </div>
    </motion.section>
  );
}

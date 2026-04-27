"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function ValuePropBento() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
        <h2 className="font-instrument text-foreground dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
          Everything Your Business Needs — In One Place
        </h2>
        <p className="font-inter text-[18px] text-muted-foreground dark:text-white/70 max-w-2xl leading-relaxed">
          Stop switching between multiple tools. Weblinear Workspace brings
          your entire business ecosystem together — so you can focus on
          growth, not complexity.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3">
        <BentoCard
          eyebrow="Automation"
          title="Save 10+ hours every week"
          description="Automate repetitive tasks and workflows so your team can focus on what actually matters."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)] bg-cover bg-center opacity-40 mix-blend-luminosity" />
          }
        />
        <BentoCard
          eyebrow="Insights"
          title="Make smarter decisions"
          description="Access real-time insights and analytics across all your departments in a single unified dashboard."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] bg-cover bg-center opacity-40 mix-blend-luminosity" />
          }
        />
        <BentoCard
          eyebrow="Integration"
          title="Connect all departments"
          description="Seamlessly integrate sales, HR, finance, and operations to break down silos and work faster."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)] bg-cover bg-center opacity-40 mix-blend-luminosity" />
          }
        />
      </div>
    </div>
  );
}

export function BentoCard({
  dark = true,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-[2rem] h-[32rem]",
        "bg-card dark:bg-[#110e1a] border border-border dark:border-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(123,57,252,0.05)]",
        "hover:border-border/80 dark:hover:border-white/20 transition-colors duration-500"
      )}
    >
      <div className="absolute inset-0 z-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-card dark:from-[#110e1a] via-transparent to-transparent opacity-80" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-card dark:from-[#110e1a] via-transparent to-transparent opacity-80" />
        )}
      </div>
      <div className="relative p-10 z-20 mt-auto backdrop-blur-xl bg-card/80 dark:bg-[#110e1a]/60 border-t border-border dark:border-white/5 flex flex-col justify-end">
        <h3 className="font-manrope text-sm font-semibold tracking-wide uppercase text-primary dark:text-[#a484d7] mb-2">
          {eyebrow}
        </h3>
        <p className="text-2xl font-medium tracking-tight text-foreground dark:text-white mb-3">
          {title}
        </p>
        <p className="text-sm/6 text-muted-foreground dark:text-white/60">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
      
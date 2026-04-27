"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowRight,
  Hexagon
} from "lucide-react";

// Inline SVGs for social icons to avoid library versioning issues
const FacebookIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10 10 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10 10 0 0 1-15 0 2 2 0 0 1-2-2z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "#testimonials" },
      { title: "Integration", href: "/" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "/faqs" },
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Services", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Changelog", href: "/changelog" },
      { title: "Brand", href: "/brand" },
      { title: "Help", href: "/help" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "X (Twitter)", href: "#", icon: TwitterIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "GitHub", href: "#", icon: GithubIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full max-w-7xl mx-auto mt-12 lg:mt-16">
      {/* Background Container with premium styling */}
      <div className="relative w-full rounded-t-[2.5rem] lg:rounded-t-[4rem] border-t border-border dark:border-white/10 bg-background dark:bg-[#0a0812] overflow-hidden px-6 py-12 lg:py-16 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)] dark:shadow-none">
        
        {/* Premium Background Gradients matching Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 dark:bg-none dark:bg-[linear-gradient(to_bottom,#0a0812,#1a103c_40%,#2d1b69_74%,#4c1d95_88%_50%)] z-0 pointer-events-none opacity-50" />
        <div className="absolute left-1/2 -top-[100px] h-[300px] w-[1000px] lg:w-[120%] -translate-x-1/2 rounded-[100%] border border-primary/10 dark:border-purple-500/10 bg-background dark:bg-[#0a0812] bg-[radial-gradient(closest-side,rgba(124,58,237,0.1)_80%,transparent)] dark:bg-[radial-gradient(closest-side,#130d2b_80%,#7c3aed)] pointer-events-none z-0 opacity-100 dark:opacity-30 blur-2xl dark:blur-sm shadow-[0_10px_40px_rgba(124,58,237,0.05)]"></div>
        
        {/* Glow Line at top */}
        <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 dark:via-purple-500/50 to-transparent rounded-full blur-sm z-10" />

        <div className="relative z-10 grid w-full gap-12 xl:grid-cols-3 xl:gap-8">
          <AnimatedContainer className="space-y-6">
            <div className="flex items-center space-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary dark:text-[#a484d7]"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path
                  d="M2 17L12 22L22 17M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-foreground dark:text-white font-bold text-2xl tracking-tight">
                Weblinear
              </span>
            </div>
            <p className="font-normal text-muted-foreground dark:text-white/40 text-sm leading-relaxed max-w-xs">
              The modern business operating system designed for teams who value speed, beauty, and unified workflows.
            </p>
            <p className="font-normal text-muted-foreground/60 dark:text-white/20 text-xs pt-4">
              © {new Date().getFullYear()} Weblinear Inc. All rights reserved.
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="space-y-6">
                  <h3 className="text-foreground dark:text-white font-medium text-xs uppercase tracking-widest opacity-90">
                    {section.label}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="font-normal text-muted-foreground dark:text-white/40 hover:text-primary dark:hover:text-[#a484d7] text-sm flex items-center transition-all duration-300 group"
                        >
                          {link.icon && <link.icon className="mr-2 size-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
                          {link.title}
                          {!link.icon && (
                             <ArrowRight className="ml-1 size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Bottom Status Bar */}
       
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(8px)", y: 20, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

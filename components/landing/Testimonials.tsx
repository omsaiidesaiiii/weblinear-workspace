"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText } from "@/components/ui/blur-text";
import { Marquee } from "@/components/ui/marquee";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "David Chen",
    role: "Founder & CEO, VelocityTech",
    content:
      "Weblinear replaced 4 different tools we were paying for. Our team is working faster, and our financial reporting has never been clearer.",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Sales, OmniFlow",
    content:
      "The CRM and automation tools alone are worth the price. We've cut down our lead response time from hours to literally seconds.",
    gradient: "from-[#2d1b69] to-[#7c3aed]",
  },
  {
    name: "Marcus Johnson",
    role: "Director of HR, ShiftWorks",
    content:
      "Onboarding new employees used to be a massive headache. Now it's a seamless, beautiful experience. Best HR software we've used.",
    gradient: "from-[#4c1d95] to-[#2d1b69]",
  },
  {
    name: "Sarah Jenkins",
    role: "CTO, NexaGen",
    content:
      "The developer experience and API integration are top-notch. It saved us months of custom development and lowered our overhead.",
    gradient: "from-[#7c3aed] to-blue-600",
  },
  {
    name: "Michael Wu",
    role: "Operations Manager, PeakFlow",
    content:
      "Finally, a platform that actually understands how modern teams collaborate. Our productivity has increased by 40% since switching.",
    gradient: "from-blue-600 to-[#4c1d95]",
  },
  {
    name: "Jessica Lee",
    role: "Creative Director, BrightScale",
    content:
      "The interface is beautiful and intuitive. It's rare to find a tool that combines deep functionality with such a clean aesthetic.",
    gradient: "from-[#4c1d95] to-[#7c3aed]",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Fade in testimonials section
    gsap.fromTo(".testimonials-section", 
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 75%",
        },
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }
    );
  }, { scope: containerRef });

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="testimonials-section w-full bg-background dark:bg-[#0a0812] py-16 lg:py-20 relative z-10 overflow-hidden border-t border-border dark:border-white/5"
    >
      {/* Background decorative elements to match hero */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 dark:bg-[#4c1d95]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <BlurText
            text="Trusted by Visionary Teams"
            className="font-instrument text-foreground dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6"
            as="h2"
            delay={150}
          />
          <p className="font-inter text-[18px] text-muted-foreground dark:text-white/70 leading-relaxed">
            See how companies are accelerating their growth and simplifying
            their operations with Weblinear Workspace.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-8 py-10 overflow-hidden">
          <Marquee className="[--duration:30s]" pauseOnHover repeat={4}>
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Marquee>{" "}
          <Marquee
            direction="right"
            className="[--duration:40s]"
            pauseOnHover
            repeat={4}
          >
            {testimonials.slice(3).map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Marquee>
          {/* Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-[#0a0812]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-[#0a0812]"></div>
        </div>
      </div>
    </motion.section>
  );
}

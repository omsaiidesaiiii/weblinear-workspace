"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText } from "@/components/ui/blur-text";
import { PremiumButton } from "@/components/ui/premium-button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
  onItemsRef?: (items: HTMLElement[]) => void;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(containerRef.current.querySelectorAll('.marquee-item')) as HTMLElement[];
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex flex-col overflow-hidden",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Content Agencies",
  "Founders & Execs",
  "Social Media Managers",
  "Content Marketers",
  "Growth Teams",
];

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2.5;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        
        // Dynamic styling
        const opacity = 1 - normalizedDistance * 0.7;
        const scale = 1.1 - (normalizedDistance * 0.2);
        const isCentered = normalizedDistance < 0.2;

        (item as HTMLElement).style.opacity = opacity.toString();
        (item as HTMLElement).style.transform = `scale(${scale})`;
        (item as HTMLElement).style.color = isCentered ? "var(--primary)" : "var(--muted-foreground)";
        (item as HTMLElement).style.fontWeight = isCentered ? "500" : "300";
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  const ctaRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.fromTo(ctaRef.current, 
      { opacity: 0, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }
    );
  }, { scope: ctaRef });

  return (
    <section ref={ctaRef} className="relative w-full py-16 lg:py-20 overflow-hidden border-t border-border dark:border-white/5 bg-background dark:bg-[#0a0812] flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background dark:from-[#7c3aed]/10 dark:via-[#0a0812] dark:to-[#0a0812] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center bg-card dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-xl rounded-full h-[32px] px-5 mb-2 shadow-sm dark:shadow-2xl">
              <span className="text-foreground dark:text-white/80 font-inter font-medium text-[13px] tracking-tight">
                Weblinear Workspace
              </span>
            </div>
            
            <div className="text-5xl md:text-6xl lg:text-[70px] font-instrument font-medium leading-[1.05] tracking-tighter text-foreground dark:text-white">
              <BlurText text="Get Started" delay={100} stepDuration={0.3} animateBy="words" as="div" centered={false} />
              <BlurText text="in Minutes" delay={400} stepDuration={0.3} animateBy="words" className="text-muted-foreground dark:text-white/40 block" as="div" centered={false} />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground dark:text-white/50 font-inter leading-relaxed max-w-md">
              Start getting more distribution and ROI out of your content and business operations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <PremiumButton 
                className="px-10 py-4 text-[15px] uppercase"
               
              >
                START FREE TRIAL
              </PremiumButton>
              <PremiumButton 
                variant="secondary" 
                className="px-10 py-4 text-[15px] !font-semibold font-manrope hover:!bg-secondary dark:hover:!bg-white/10"
              >
                BOOK A DEMO
              </PremiumButton>
            </div>
          </div>

          {/* Right Marquee */}
          <div ref={marqueeRef} className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <VerticalMarquee speed={25} className="h-full">
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-4xl md:text-5xl lg:text-6xl font-instrument tracking-tight py-6 marquee-item text-center transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </VerticalMarquee>
              
              {/* Top vignette */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 dark:from-[#0a0812] dark:via-[#0a0812]/80 to-transparent z-10"></div>
              
              {/* Bottom vignette */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 dark:from-[#0a0812] dark:via-[#0a0812]/80 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

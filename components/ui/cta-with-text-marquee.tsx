"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

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
        (item as HTMLElement).style.color = isCentered ? "#a484d7" : "rgba(255, 255, 255, 0.4)";
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

  return (
    <section className="relative w-full py-32 overflow-hidden border-t border-white/5 bg-[#0a0812] min-h-[80vh] flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7c3aed]/10 via-[#0a0812] to-[#0a0812] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-full h-[32px] px-5 mb-4 shadow-2xl">
              <span className="text-white/80 font-inter font-medium text-[13px] tracking-tight">
                Weblinear Workspace
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-[80px] font-instrument font-medium leading-[1.05] tracking-tighter text-white">
              Get Started <br />
              <span className="text-white/40">in Minutes</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/50 font-inter leading-relaxed max-w-md">
              Start getting more distribution and ROI out of your content and business operations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-4 bg-[#7c3aed] text-white rounded-full font-manrope font-semibold text-[15px] hover:scale-[1.02] transition-all shadow-[0_0_40px_rgba(124,58,237,0.25)]">
                START FREE TRIAL
              </button>
              <button className="px-10 py-4 bg-white/5 text-white rounded-full font-manrope font-semibold text-[15px] hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm">
                BOOK A DEMO
              </button>
            </div>
          </div>

          {/* Right Marquee */}
          <div ref={marqueeRef} className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <VerticalMarquee speed={25} className="h-full">
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-instrument tracking-tight py-10 marquee-item text-center transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </VerticalMarquee>
              
              {/* Top vignette */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0a0812] via-[#0a0812]/80 to-transparent z-10"></div>
              
              {/* Bottom vignette */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0812] via-[#0a0812]/80 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

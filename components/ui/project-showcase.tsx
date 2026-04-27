"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BlurText } from "@/components/ui/blur-text"

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface Module {
  title: string
  description: string
  tag: string
  link: string
  image: string
}

const modules: Module[] = [
  {
    title: "Finance",
    description: "Track cashflow and monitor payments in real time.",
    tag: "Banking",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Analytics",
    description: "Turn complex datasets into actionable growth strategies.",
    tag: "Insights",
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "CRM",
    description: "Accelerate deal cycles with unified customer pipeline tracking.",
    tag: "Growth",
    link: "#",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "Operations",
    description: "Orchestrate projects and automate workflows in one place.",
    tag: "Efficiency",
    link: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.showcase-list-item');
    items.forEach((item, i) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1 // stagger items slightly as they scroll in
        }
      )
    });
  }, { scope: containerRef })

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.1),
        y: lerp(prev.y, mousePosition.y, 0.1),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove} 
      className="relative w-full max-w-5xl mx-auto px-6 py-16 lg:py-20"
    >
      {/* Background Section Header - More compact */}
      <div className="flex flex-col mb-10">
        <span className="text-purple-500 font-manrope text-[12px] font-semibold tracking-widest uppercase mb-3">Core Modules</span>
        <div className="font-instrument text-foreground dark:text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter">
          <BlurText text="One workspace" delay={100} stepDuration={0.3} animateBy="words" as="div" />
          <BlurText text="for everything." delay={400} stepDuration={0.3} animateBy="words" className="text-muted-foreground dark:text-white/40 block mt-1" as="div" />
        </div>
      </div>

      {/* Floating Image Preview - Reduced scale */}
      <div
        className="pointer-events-none absolute z-50 overflow-hidden rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-border dark:border-white/10 hidden md:block"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${smoothPosition.x + 30}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
          transition: "opacity 0.4s cubic-bezier(0.2, 0, 0.2, 1), scale 0.4s cubic-bezier(0.2, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[320px] h-[200px] bg-card dark:bg-[#1a103c] overflow-hidden">
          {modules.map((module, index) => (
            <img
              key={module.title}
              src={module.image}
              alt={module.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.15,
                filter: hoveredIndex === index ? "none" : "blur(20px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812]/40 to-transparent" />
        </div>
      </div>

      <div className="space-y-0 relative z-10">
        {modules.map((module, index) => (
          <a
            key={module.title}
            href={module.link}
            className="group block showcase-list-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-8 border-t border-border dark:border-white/5 transition-all duration-500 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-primary/5 dark:bg-white/[0.02] 
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                `}
              />

              <div className="relative flex items-center justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-3">
                    <h3 className={`font-instrument text-xl md:text-3xl text-foreground dark:text-white transition-all duration-500 ${hoveredIndex === index ? "translate-x-3" : ""}`}>
                      {module.title}
                    </h3>

                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-purple-500
                        transition-all duration-500 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-3 -translate-y-1.5 scale-110"
                            : "opacity-0 -translate-x-3 translate-y-3 scale-75"
                        }
                      `}
                    />
                  </div>

                  <p
                    className={`
                      font-inter text-sm md:text-base mt-2 max-w-lg transition-all duration-500
                      ${hoveredIndex === index ? "text-foreground dark:text-white/80 translate-x-3" : "text-muted-foreground dark:text-white/30"}
                    `}
                  >
                    {module.description}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span
                    className={`
                      font-inter text-[10px] md:text-xs font-semibold tracking-widest uppercase transition-all duration-500
                      ${hoveredIndex === index ? "text-primary dark:text-purple-400 translate-x-[-6px]" : "text-muted-foreground dark:text-white/20"}
                    `}
                  >
                    {module.tag}
                  </span>
                  <div className={`h-[1px] bg-purple-500 transition-all duration-700 ${hoveredIndex === index ? "w-10" : "w-0"}`} />
                </div>
              </div>
            </div>
          </a>
        ))}

        <div className="border-t border-border dark:border-white/5" />
      </div>
    </section>
  )
}

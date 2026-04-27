"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  direction?: "top" | "bottom";
  stepDuration?: number;
  easing?: [number, number, number, number] | string;
  animateBy?: "words" | "letters";
  as?: React.ElementType;
  centered?: boolean;
}

export function BlurText({
  text,
  delay = 100,
  className = "",
  direction = "top",
  stepDuration = 0.3,
  easing = "easeOut",
  animateBy = "words",
  as: Component = "p",
  centered = true,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stepDuration,
        delayChildren: delay / 1000,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: direction === "top" ? -20 : 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, ease: easing as any },
    },
  };

  return (
    <Component className={className} ref={ref}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn("flex flex-wrap", centered && "justify-center")}
      >
        {elements.map((element, i) => (
          <motion.span key={i} variants={item} className="inline-block">
            {element}
            {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

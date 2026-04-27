"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function PremiumButton({
  children,
  icon,
  className,
  variant = "primary",
  ...props
}: PremiumButtonProps) {
  return (
    <button 
      className={cn(
        "premium-button", 
        variant === "primary" ? "premium-button-primary" : "premium-button-secondary",
        className
      )} 
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

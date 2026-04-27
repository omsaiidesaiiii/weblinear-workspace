"use client";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Logos from "@/components/landing/Logos";
import Features from "@/components/landing/Features";
import Bento from "@/components/landing/Bento";
import Modules from "@/components/landing/Modules";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col selection:bg-[#7b39fc] selection:text-white bg-background transition-colors duration-500">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Bento />
      <Modules />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

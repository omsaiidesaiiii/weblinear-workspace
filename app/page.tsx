"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Blur navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full flex flex-col selection:bg-[#7b39fc] selection:text-white bg-background font-inter transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center overflow-hidden">
        {/* Video Background - No Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 min-h-screen w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
            type="video/mp4"
          />
        </video>

        {/* Navbar Overlay */}
        <header
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 ${
            scrolled ? "" : ""
          }`}
        >
          <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled ? "backdrop-blur-md bg-background/70 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" : "bg-transparent"
          }`}>
            {/* Logo */}
            <div className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white dark:text-white"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M2 17L12 22L22 17M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 text-white font-manrope font-bold text-lg tracking-tight">
                Weblinear
              </span>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity"
              >
                Home
              </a>
              <a
                href="#"
                className="flex items-center font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              <a
                href="#"
                className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity"
              >
                Reviews
              </a>
              <a
                href="#"
                className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity"
              >
                Contact us
              </a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <button className="bg-white border border-[#d4d4d4] text-[#171717] rounded-full font-manrope font-semibold text-[14px] px-5 py-2 hover:bg-gray-50 transition-colors">
                Sign In
              </button>
              <button className="bg-[#7b39fc] text-white rounded-full shadow-sm font-manrope font-semibold text-[14px] px-5 py-2 hover:brightness-110 transition-all hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Fullscreen Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background flex flex-col text-foreground animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-[16px]">
              <span className="font-manrope font-bold text-lg tracking-tight">
                Weblinear
              </span>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              <a href="#" className="font-manrope text-2xl font-medium">Home</a>
              <a href="#" className="font-manrope text-2xl font-medium">Services</a>
              <a href="#" className="font-manrope text-2xl font-medium">Reviews</a>
              <a href="#" className="font-manrope text-2xl font-medium">Contact us</a>
              <div className="flex flex-col space-y-4 pt-8 w-full px-12">
                <button className="w-full bg-primary text-primary-foreground rounded-[8px] font-manrope font-semibold text-[16px] py-3">
                  Sign In
                </button>
                <button className="w-full bg-[#7b39fc] text-white rounded-[8px] font-manrope font-semibold text-[16px] py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-32 lg:mt-40 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Tagline Pill */}
          <div className="flex items-center bg-[#55506e]/40 border border-[#a484d7]/50 backdrop-blur-md rounded-[10px] h-[38px] pl-1 pr-4 mb-6 shadow-lg">
            <span className="bg-[#7b39fc] text-white rounded-[6px] px-2 py-0.5 font-cabin font-medium text-[12px] mr-3 ml-0.5">
              New
            </span>
            <span className="text-white font-cabin font-medium text-[14px]">
              Say Hello to Weblinear Workspace v3.2
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-instrument text-white text-5xl md:text-7xl lg:text-[96px] leading-[1.1] tracking-tight max-w-5xl">
            Run Your Entire Business from One Intelligent Workspace
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-[18px] text-white/70 max-w-[662px] mt-6 leading-relaxed">
            Weblinear Workspace helps you manage accounts, CRM, HR, projects, and
            analytics — all in one powerful platform designed to scale your
            business faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <button className="bg-[#7b39fc] text-white rounded-[10px] font-cabin font-medium text-[16px] px-8 py-3.5 hover:brightness-110 transition-all hover:scale-105 shadow-[0_0_20px_rgba(123,57,252,0.3)]">
              Start Free Trial
            </button>
            <button className="bg-[#2b2344] text-[#f6f7f9] rounded-[10px] font-cabin font-medium text-[16px] px-8 py-3.5 hover:brightness-110 transition-all hover:scale-105">
              Book a Demo
            </button>
          </div>

          {/* Trust Line */}
          <p className="font-inter text-sm text-white/60 mt-12 mb-20">
            Trusted by growing businesses to automate operations and boost efficiency.
          </p>
        </div>

        {/* Decorative gradient overlay at bottom for smoother scroll transition */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      </section>

      {/* Dashboard Preview Section */}
      <section className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-24 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/10 bg-[#1a1528]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7b39fc]/10 to-transparent opacity-50 mix-blend-overlay"></div>
          <img 
            src="/dashboard-preview.png" 
            alt="Weblinear Workspace Dashboard" 
            className="w-full h-auto max-h-[650px] object-contain shadow-[0_0_50px_rgba(123,57,252,0.2)]"
          />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-border relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Section Heading */}
          <h2 className="font-instrument text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            Everything Your Business Needs — In One Place
          </h2>

          {/* Section Content */}
          <p className="font-inter text-[18px] text-muted-foreground max-w-2xl leading-relaxed mb-16">
            Stop switching between multiple tools. Weblinear Workspace brings
            your entire business ecosystem together — so you can focus on
            growth, not complexity.
          </p>

          {/* 3 Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Highlight 1 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 border border-border hover:bg-muted hover:border-accent transition-all group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#7b39fc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all">🚀</div>
              <p className="font-manrope font-semibold text-foreground text-lg leading-snug">
                Save 10+ hours every week with automation
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 border border-border hover:bg-muted hover:border-accent transition-all group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#7b39fc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all">📊</div>
              <p className="font-manrope font-semibold text-foreground text-lg leading-snug">
                Make smarter decisions with real-time insights
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 border border-border hover:bg-muted hover:border-accent transition-all group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#7b39fc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all">🔗</div>
              <p className="font-manrope font-semibold text-foreground text-lg leading-snug">
                Seamlessly connect all departments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full bg-background border-t border-border py-24 relative z-10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7b39fc]/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            
            {/* Left side: Text (Takes up 2 columns) */}
            <div className="lg:col-span-2 flex flex-col text-center lg:text-left">
              <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Built for Modern Businesses
              </h2>
              <p className="font-inter text-[18px] text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                From startups to growing enterprises, teams use Weblinear
                Workspace to streamline operations and scale confidently.
              </p>
            </div>

            {/* Right side: Stats Grid (Takes up 3 columns) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-6">
              {/* Stat 1 */}
              <div className="flex flex-col items-center lg:items-start p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-[#7b39fc]/30 transition-colors group">
                <span className="font-instrument text-5xl md:text-6xl text-white mb-2 group-hover:scale-105 transition-transform transform origin-left">
                  500+
                </span>
                <span className="font-manrope text-sm text-[#a484d7] font-semibold tracking-wide uppercase mt-1">
                  Businesses Onboarded
                </span>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center lg:items-start p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-[#7b39fc]/30 transition-colors group">
                <span className="font-instrument text-5xl md:text-6xl text-white mb-2 group-hover:scale-105 transition-transform transform origin-left">
                  10k+
                </span>
                <span className="font-manrope text-sm text-[#a484d7] font-semibold tracking-wide uppercase mt-1">
                  Transactions Managed
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center lg:items-start p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-[#7b39fc]/30 transition-colors group">
                <span className="font-instrument text-5xl md:text-6xl text-white mb-2 group-hover:scale-105 transition-transform transform origin-left">
                  99.9%
                </span>
                <span className="font-manrope text-sm text-[#a484d7] font-semibold tracking-wide uppercase mt-1">
                  Uptime Reliability
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Business Intelligence Section */}
      <section className="w-full bg-background py-24 lg:py-32 relative z-10 overflow-hidden border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left side: Content */}
            <div className="flex flex-col">
              <div className="inline-flex items-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-[#7b39fc] animate-pulse"></span>
                <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
                  From Your Dashboard
                </span>
              </div>
              
              <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Real-Time Business Intelligence at Your Fingertips
              </h2>
              
              <p className="font-inter text-[18px] text-white/70 max-w-lg leading-relaxed mb-10">
                Get a complete overview of your business performance with
                powerful analytics and dashboards.
              </p>
              
              {/* Feature Points */}
              <div className="flex flex-col space-y-5">
                {[
                  "Financial overview & KPI tracking",
                  "Income vs Expense insights",
                  "Cashflow trends & forecasting",
                  "Financial Health Index monitoring",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 group-hover:bg-[#7b39fc]/20 group-hover:border-[#7b39fc]/50 transition-colors">
                      <svg
                        className="w-4 h-4 text-white group-hover:text-[#a484d7] transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="font-inter text-white/90 text-[16px] group-hover:text-white transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Generated Image / Visual */}
            <div className="relative w-full group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#7b39fc]/20 blur-[80px] rounded-full transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/10 bg-[#1a1528] transform transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7b39fc]/10 to-transparent opacity-50 mix-blend-overlay"></div>
                <img 
                  src="/analytics-preview.png" 
                  alt="Weblinear Analytics Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Accounts & Finance Section */}
      <section className="w-full bg-background py-24 lg:py-32 relative z-10 overflow-hidden border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Reverse grid layout: Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left side: Generated Image / Visual */}
            <div className="relative w-full group order-2 lg:order-1">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#7b39fc]/15 blur-[80px] rounded-full transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/10 bg-[#1a1528] transform transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7b39fc]/10 to-transparent opacity-40 mix-blend-overlay"></div>
                <img 
                  src="/finance-preview.png" 
                  alt="Weblinear Finance Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right side: Content */}
            <div className="flex flex-col order-1 lg:order-2 lg:pl-10">
              <div className="inline-flex items-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6">
                <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
                  Accounts & Finance
                </span>
              </div>
              
              <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Take Full Control of Your Finances
              </h2>
              
              <p className="font-inter text-[18px] text-white/70 max-w-lg leading-relaxed mb-10">
                Manage your financial operations effortlessly with automated
                accounting and real-time tracking, so you always know where your
                money goes.
              </p>
              
              {/* Feature Points */}
              <div className="flex flex-col space-y-6">
                {[
                  { title: "Invoices & Bills", desc: "Never miss payments with automated reminders." },
                  { title: "Payment Tracking", desc: "Know exactly where your money goes in real-time." },
                  { title: "Bank KPIs", desc: "Monitor financial health instantly from one dashboard." },
                  { title: "Receivables & Payables", desc: "Stay cashflow positive with smart aging reports." },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex items-center justify-center w-8 h-8 mt-1 rounded-full bg-white/[0.03] border border-white/10 group-hover:bg-[#7b39fc]/20 group-hover:border-[#7b39fc]/50 transition-colors flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-[#a484d7] transition-colors"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-manrope font-semibold text-white text-[16px]">
                        {item.title}
                      </span>
                      <span className="font-inter text-white/60 text-[14px] mt-1 group-hover:text-white/80 transition-colors">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CRM Section (Bento Grid Layout) */}
      <section className="w-full bg-background py-24 lg:py-32 relative z-10 overflow-hidden border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6">
              <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
                Customer Relationship Management
              </span>
            </div>
            
            <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              Turn Leads into Lifelong Customers
            </h2>
            
            <p className="font-inter text-[18px] text-white/70 leading-relaxed">
              Build stronger relationships and close deals faster with a CRM
              that works as hard as your sales team.
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            
            {/* Bento Item 1: Large Card (Pipeline Management) */}
            <div className="md:col-span-2 rounded-3xl bg-[#110e1a] border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7b39fc]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-instrument text-3xl text-white mb-2">Pipeline Management</h3>
                  <p className="font-inter text-white/60">Visualize your sales process and identify bottlenecks instantly.</p>
                </div>
                {/* Abstract UI representation */}
                <div className="w-full flex space-x-4 mt-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-24 w-1/3 bg-white/5 rounded-t-xl border-t border-l border-r border-white/10 p-3">
                    <div className="w-1/2 h-2 bg-white/20 rounded-full mb-3"></div>
                    <div className="w-full h-8 bg-[#7b39fc]/20 rounded-lg border border-[#7b39fc]/30"></div>
                  </div>
                  <div className="h-32 w-1/3 bg-white/5 rounded-t-xl border-t border-l border-r border-white/10 p-3">
                    <div className="w-1/2 h-2 bg-white/20 rounded-full mb-3"></div>
                    <div className="w-full h-8 bg-white/10 rounded-lg mb-2"></div>
                    <div className="w-full h-8 bg-[#7b39fc]/20 rounded-lg border border-[#7b39fc]/30"></div>
                  </div>
                  <div className="h-40 w-1/3 bg-white/5 rounded-t-xl border-t border-l border-r border-white/10 p-3">
                    <div className="w-1/2 h-2 bg-white/20 rounded-full mb-3"></div>
                    <div className="w-full h-8 bg-white/10 rounded-lg mb-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Item 2: Small Card (Meeting Scheduling) */}
            <div className="rounded-3xl bg-[#110e1a] border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7b39fc]/20 blur-[50px] rounded-full"></div>
              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-instrument text-3xl text-white mb-2">Meeting Scheduling</h3>
                  <p className="font-inter text-white/60">Eliminate back-and-forth emails.</p>
                </div>
                <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mt-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#7b39fc] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-white/80 font-inter text-sm">Product Demo</span>
                  </div>
                  <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Bento Item 3: Small Card (Automated Follow-ups) */}
            <div className="rounded-3xl bg-[#110e1a] border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#7b39fc]/20 blur-[50px] rounded-full"></div>
              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-instrument text-3xl text-white mb-2">Automated Follow-ups</h3>
                  <p className="font-inter text-white/60">Engage prospects at the perfect time.</p>
                </div>
                <div className="w-full flex flex-col space-y-2 mt-4">
                  <div className="w-full h-10 bg-white/5 border border-white/10 rounded-lg flex items-center px-3 opacity-50"></div>
                  <div className="w-5/6 h-10 bg-[#7b39fc]/20 border border-[#7b39fc]/30 rounded-lg flex items-center px-3 translate-x-0 group-hover:translate-x-2 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-[#7b39fc]"></div>
                  </div>
                  <div className="w-4/6 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center px-3 opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Bento Item 4: Large Card (Client Portals) */}
            <div className="md:col-span-2 rounded-3xl bg-[#110e1a] border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all">
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#7b39fc]/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="font-instrument text-3xl text-white mb-2">Client Portals</h3>
                  <p className="font-inter text-white/60">Provide a premium, branded experience for your customers to view proposals, invoices, and sign contracts.</p>
                </div>
                <div className="md:w-1/2 w-full h-full flex justify-end items-center relative">
                  <div className="w-full max-w-[240px] aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-4 shadow-2xl translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                    <div className="w-full flex justify-between items-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-white/20"></div>
                      <div className="w-16 h-2 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="w-full h-24 bg-white/5 rounded-xl border border-white/5 mb-4"></div>
                    <div className="w-1/2 h-8 bg-[#7b39fc] rounded-lg mt-auto"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HR Management Section */}
      <section className="w-full bg-background py-24 lg:py-32 relative z-10 overflow-hidden border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left side: Content */}
            <div className="flex flex-col">
              <div className="inline-flex items-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6">
                <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
                  HR & Team Management
                </span>
              </div>
              
              <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Empower Your Most Valuable Asset
              </h2>
              
              <p className="font-inter text-[18px] text-white/70 max-w-lg leading-relaxed mb-10">
                Simplify onboarding, payroll, and performance tracking so you
                can focus on building an unstoppable team culture.
              </p>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Frictionless Onboarding", desc: "Up to speed in days, not weeks." },
                  { title: "One-Click Payroll", desc: "Process payments accurately." },
                  { title: "Performance Reviews", desc: "Track growth & development." },
                  { title: "Time & Attendance", desc: "Manage leave requests effortlessly." },
                ].map((item, index) => (
                  <div key={index} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-[#7b39fc]/10 hover:border-[#7b39fc]/30 transition-colors group">
                    <h3 className="font-manrope font-semibold text-white text-[16px] mb-1">{item.title}</h3>
                    <p className="font-inter text-white/50 text-[14px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: CSS UI Mockup */}
            <div className="relative w-full h-[500px] rounded-3xl bg-[#110e1a] border border-white/10 p-6 overflow-hidden flex flex-col group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7b39fc]/20 blur-[80px] rounded-full pointer-events-none"></div>
              
              {/* Fake Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7b39fc] to-[#a484d7] p-0.5">
                    <div className="w-full h-full rounded-full bg-[#110e1a] border border-white/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-manrope font-semibold">Sarah Jenkins</h4>
                    <p className="text-white/50 font-inter text-xs">Senior Designer</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-inter text-xs border border-green-500/20">Active</div>
              </div>

              {/* Fake Payroll/Time tracking rows */}
              <div className="flex-1 space-y-4 relative z-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-full bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between transform transition-transform duration-500 hover:translate-x-2 delay-${i * 100}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-24 h-2 bg-white/20 rounded-full"></div>
                        <div className="w-16 h-2 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-16 h-6 rounded-md bg-[#7b39fc]/20 border border-[#7b39fc]/30"></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Management Section (Full Width) */}
      <section className="w-full bg-background py-24 lg:py-32 relative z-10 overflow-hidden border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6 mx-auto">
            <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
              Projects & Tasks
            </span>
          </div>
          <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto">
            Execute Projects with Flawless Precision
          </h2>
          <p className="font-inter text-[18px] text-white/70 max-w-2xl mx-auto leading-relaxed">
            Keep your entire team aligned, hit deadlines consistently, and turn
            complex projects into clear, actionable workflows.
          </p>
        </div>

        {/* Full-width CSS Gantt Chart UI */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative group">
          <div className="w-full h-[400px] bg-[#110e1a] rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl">
            {/* Grid lines */}
            <div className="absolute inset-0 flex justify-between px-32 pointer-events-none opacity-20">
              {[1,2,3,4,5,6].map(i => <div key={i} className="w-px h-full bg-white/20"></div>)}
            </div>

            {/* Timelines */}
            <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
              {/* Task 1 */}
              <div className="w-full flex items-center">
                <div className="w-48 flex-shrink-0 font-manrope text-white/80 text-sm">Design Phase</div>
                <div className="flex-1 relative h-10 bg-white/5 rounded-full overflow-hidden border border-white/10 group-hover:border-[#7b39fc]/30 transition-colors">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7b39fc] to-[#a484d7] w-0 group-hover:w-[40%] transition-all duration-1000 ease-out rounded-full"></div>
                </div>
              </div>
              
              {/* Task 2 */}
              <div className="w-full flex items-center">
                <div className="w-48 flex-shrink-0 font-manrope text-white/80 text-sm">Frontend Dev</div>
                <div className="flex-1 relative h-10 bg-white/5 rounded-full overflow-hidden border border-white/10 group-hover:border-[#7b39fc]/30 transition-colors">
                  <div className="absolute top-0 left-[30%] h-full bg-gradient-to-r from-[#7b39fc] to-[#a484d7] w-0 group-hover:w-[50%] transition-all duration-1000 delay-300 ease-out rounded-full"></div>
                </div>
              </div>

              {/* Task 3 */}
              <div className="w-full flex items-center">
                <div className="w-48 flex-shrink-0 font-manrope text-white/80 text-sm">Backend API</div>
                <div className="flex-1 relative h-10 bg-white/5 rounded-full overflow-hidden border border-white/10 group-hover:border-[#7b39fc]/30 transition-colors">
                  <div className="absolute top-0 left-[20%] h-full bg-gradient-to-r from-[#7b39fc] to-[#a484d7] w-0 group-hover:w-[60%] transition-all duration-1000 delay-150 ease-out rounded-full"></div>
                </div>
              </div>

              {/* Task 4 */}
              <div className="w-full flex items-center">
                <div className="w-48 flex-shrink-0 font-manrope text-white/80 text-sm">QA & Testing</div>
                <div className="flex-1 relative h-10 bg-white/5 rounded-full overflow-hidden border border-white/10 group-hover:border-[#7b39fc]/30 transition-colors">
                  <div className="absolute top-0 left-[60%] h-full bg-gradient-to-r from-blue-500 to-[#7b39fc] w-0 group-hover:w-[30%] transition-all duration-1000 delay-500 ease-out rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Glass overlay text */}
            <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-sm shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-300">
              <h4 className="font-instrument text-2xl text-white mb-2">Dynamic Roadmaps</h4>
              <p className="font-inter text-white/70 text-sm">Visualize dependencies and hit deadlines consistently. Keep stakeholders informed without the busywork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Automation Section */}
      <section className="w-full bg-[#0a0812] py-24 lg:py-32 relative z-10 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7b39fc]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left Side: CSS Node UI (Visual) */}
            <div className="w-full lg:w-1/2 relative h-[450px] bg-[#110e1a] rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group order-2 lg:order-1">
              {/* Connecting Lines */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg className="w-full h-full" viewBox="0 0 500 300" preserveAspectRatio="none">
                  {/* Line 1 */}
                  <path d="M120,150 C200,150 200,80 280,80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" className="text-white group-hover:text-[#7b39fc] transition-colors duration-700" />
                  {/* Line 2 */}
                  <path d="M120,150 C200,150 200,220 280,220" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" className="text-white group-hover:text-[#7b39fc] transition-colors duration-700" />
                  {/* Line 3 */}
                  <path d="M340,80 C400,80 400,150 440,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" className="text-white group-hover:text-[#7b39fc] transition-colors duration-700" />
                  {/* Line 4 */}
                  <path d="M340,220 C400,220 400,150 440,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" className="text-white group-hover:text-[#7b39fc] transition-colors duration-700" />
                </svg>
                {/* Moving dot on paths */}
                <div className="absolute w-2 h-2 rounded-full bg-[#a484d7] shadow-[0_0_10px_2px_#7b39fc] animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Nodes */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Trigger Node */}
                <div className="absolute left-8 lg:left-12 flex flex-col items-center transform transition-transform group-hover:scale-105 duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7b39fc] to-[#a484d7] p-0.5 shadow-[0_0_30px_rgba(123,57,252,0.3)]">
                    <div className="w-full h-full bg-[#110e1a] rounded-[14px] flex items-center justify-center border border-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                  </div>
                  <span className="mt-3 text-xs font-inter text-white/60 font-semibold uppercase tracking-wider">New Lead</span>
                </div>

                {/* Action Nodes */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center transform transition-transform group-hover:translate-y-2 duration-500 delay-100">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#7b39fc]/50 hover:bg-[#7b39fc]/10 transition-colors">
                    <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="mt-2 text-[10px] font-inter text-white/40">Send Email</span>
                </div>

                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center transform transition-transform group-hover:-translate-y-2 duration-500 delay-200">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#7b39fc]/50 hover:bg-[#7b39fc]/10 transition-colors">
                    <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span className="mt-2 text-[10px] font-inter text-white/40">Create Task</span>
                </div>

                {/* Final State Node */}
                <div className="absolute right-8 lg:right-12 flex flex-col items-center transform transition-transform group-hover:scale-105 duration-500 delay-300">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="mt-3 text-xs font-inter text-white/60 font-semibold uppercase tracking-wider">Deal Won</span>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6">
                <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
                  Workflow Automation
                </span>
              </div>
              
              <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Automate the Busywork
              </h2>
              
              <p className="font-inter text-[18px] text-white/70 leading-relaxed mb-10">
                Connect your tools, trigger actions, and let Weblinear handle the repetitive tasks so you can focus on high-level strategy.
              </p>
              
              <ul className="space-y-5">
                {[
                  "Visual workflow builder with no coding required.",
                  "Pre-built templates for sales, HR, and finance.",
                  "Multi-step logic with conditional routing.",
                  "Seamless integration with 500+ third-party apps."
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#7b39fc]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#a484d7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="font-inter text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-black py-24 lg:py-32 relative z-10 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              Trusted by Visionary Teams
            </h2>
            <p className="font-inter text-[18px] text-white/70 leading-relaxed">
              See how companies are accelerating their growth and simplifying their operations with Weblinear Workspace.
            </p>
          </div>

          {/* Masonry / Grid for Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-[#110e1a] border border-white/10 rounded-3xl p-8 relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7b39fc]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#7b39fc]/20 transition-colors"></div>
              <div className="flex space-x-1 mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="font-inter text-white/80 text-lg mb-8 relative z-10 leading-relaxed">
                "Weblinear replaced 4 different tools we were paying for. Our team is working faster, and our financial reporting has never been clearer."
              </p>
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                  <div className="w-full h-full bg-black rounded-full border border-white/20"></div>
                </div>
                <div>
                  <h4 className="font-manrope font-semibold text-white">David Chen</h4>
                  <p className="font-inter text-sm text-white/50">Founder & CEO, VelocityTech</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#110e1a] border border-white/10 rounded-3xl p-8 relative group hover:-translate-y-2 transition-transform duration-500 lg:translate-y-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="flex space-x-1 mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="font-inter text-white/80 text-lg mb-8 relative z-10 leading-relaxed">
                "The CRM and automation tools alone are worth the price. We've cut down our lead response time from hours to literally seconds."
              </p>
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 p-[2px]">
                  <div className="w-full h-full bg-black rounded-full border border-white/20"></div>
                </div>
                <div>
                  <h4 className="font-manrope font-semibold text-white">Elena Rodriguez</h4>
                  <p className="font-inter text-sm text-white/50">VP of Sales, OmniFlow</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#110e1a] border border-white/10 rounded-3xl p-8 relative group hover:-translate-y-2 transition-transform duration-500 md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-green-500/20 transition-colors"></div>
              <div className="flex space-x-1 mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="font-inter text-white/80 text-lg mb-8 relative z-10 leading-relaxed">
                "Onboarding new employees used to be a massive headache. Now it's a seamless, beautiful experience. Best HR software we've used."
              </p>
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7b39fc] to-[#a484d7] p-[2px]">
                  <div className="w-full h-full bg-black rounded-full border border-white/20"></div>
                </div>
                <div>
                  <h4 className="font-manrope font-semibold text-white">Marcus Johnson</h4>
                  <p className="font-inter text-sm text-white/50">Director of HR, ShiftWorks</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-[#0a0812] py-24 lg:py-32 relative z-10 overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#7b39fc]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="inline-flex items-center justify-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6 mx-auto">
              <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
                Transparent Pricing
              </span>
            </div>
            <h2 className="font-instrument text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              One Platform. One Price.
            </h2>
            <p className="font-inter text-[18px] text-white/70 leading-relaxed">
              No hidden fees, no complex tiers, and no per-module pricing. Get access to the entire Weblinear ecosystem for your whole team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Starter Plan */}
            <div className="bg-[#110e1a] border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col relative group hover:border-white/20 transition-all duration-300">
              <h3 className="font-instrument text-3xl text-white mb-2">Starter</h3>
              <p className="font-inter text-white/50 mb-8">Perfect for small teams and startups.</p>
              <div className="flex items-baseline space-x-2 mb-8">
                <span className="font-instrument text-5xl text-white">$49</span>
                <span className="font-inter text-white/50">/user/month</span>
              </div>
              <button className="w-full py-3 px-6 rounded-full bg-white/5 border border-white/10 text-white font-manrope font-semibold hover:bg-white/10 transition-colors mb-8">
                Start Free Trial
              </button>
              <div className="flex flex-col space-y-4 flex-1">
                <span className="font-manrope font-semibold text-white/90 text-sm uppercase tracking-wider mb-2">What's included:</span>
                {[
                  "Full CRM & Pipeline Management",
                  "Basic Financial Reporting",
                  "Project Management Tools",
                  "Standard Support (24hr SLA)"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#a484d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-inter text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="bg-[#110e1a] border border-[#7b39fc]/50 rounded-3xl p-8 lg:p-10 flex flex-col relative group transform md:-translate-y-4 shadow-[0_0_40px_rgba(123,57,252,0.15)]">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7b39fc] to-[#a484d7] rounded-t-3xl"></div>
              <div className="absolute top-4 right-4 bg-[#7b39fc]/20 text-[#a484d7] px-3 py-1 rounded-full text-xs font-manrope font-semibold border border-[#7b39fc]/30">Most Popular</div>
              
              <h3 className="font-instrument text-3xl text-white mb-2">Business</h3>
              <p className="font-inter text-white/50 mb-8">For scaling companies needing advanced tools.</p>
              <div className="flex items-baseline space-x-2 mb-8">
                <span className="font-instrument text-5xl text-white">$99</span>
                <span className="font-inter text-white/50">/user/month</span>
              </div>
              <button className="w-full py-3 px-6 rounded-full bg-[#7b39fc] text-white font-manrope font-semibold hover:bg-[#6a2ce0] transition-colors mb-8 shadow-[0_0_20px_rgba(123,57,252,0.4)]">
                Start 14-Day Free Trial
              </button>
              <div className="flex flex-col space-y-4 flex-1">
                <span className="font-manrope font-semibold text-white/90 text-sm uppercase tracking-wider mb-2">Everything in Starter, plus:</span>
                {[
                  "Advanced Workflow Automation",
                  "Full HR & Payroll Suite",
                  "Custom Client Portals",
                  "Advanced Business Intelligence API",
                  "Priority 24/7 Support"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#7b39fc]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#a484d7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="font-inter text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-black py-24 lg:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-instrument text-white text-4xl md:text-5xl text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="flex flex-col space-y-4">
            {[
              { q: "Can I migrate my data from existing tools?", a: "Yes. Weblinear includes a free, white-glove migration service for all Business plan customers. We integrate with over 50 popular platforms to ensure a seamless transition without data loss." },
              { q: "Is my financial data secure?", a: "Security is our highest priority. We use bank-level AES-256 encryption, SOC 2 Type II compliance, and conduct regular third-party security audits to ensure your data is always protected." },
              { q: "Do I have to use all the modules?", a: "Not at all. While Weblinear is an all-in-one platform, it's highly modular. You can turn off any features (like HR or Project Management) that you don't currently need, keeping your interface clean and focused." },
              { q: "What kind of support do you offer?", a: "All users have access to our comprehensive knowledge base and email support. Business plan users receive priority 24/7 chat support and a dedicated Customer Success Manager." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#110e1a] border border-white/10 rounded-2xl overflow-hidden open:bg-white/[0.03] transition-colors duration-300">
                <summary className="font-manrope text-lg text-white font-semibold cursor-pointer p-6 flex justify-between items-center list-none outline-none">
                  {faq.q}
                  <span className="text-white/50 transform group-open:rotate-45 transition-transform duration-300 text-2xl leading-none">+</span>
                </summary>
                <div className="p-6 pt-0 font-inter text-white/60 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full relative py-32 overflow-hidden border-t border-white/5 bg-[#0a0812]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7b39fc]/20 via-[#0a0812] to-[#0a0812] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-20 text-center">
          <h2 className="font-instrument text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
            Ready to upgrade your<br />business operating system?
          </h2>
          <p className="font-inter text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join thousands of visionary teams who have already stopped switching tabs and started accelerating their growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-manrope font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Start 14-Day Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-manrope font-semibold text-lg hover:bg-white/5 transition-all duration-300">
              Book a Demo
            </button>
          </div>
          <p className="font-inter text-white/40 text-sm mt-6">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="w-full bg-black py-12 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7b39fc] to-[#a484d7] flex items-center justify-center">
              <span className="text-white font-bold text-xs">W</span>
            </div>
            <span className="text-white font-manrope font-bold tracking-tight">Weblinear Workspace</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="font-inter text-sm text-white/50 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="font-inter text-sm text-white/50 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="font-inter text-sm text-white/50 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="font-inter text-sm text-white/50 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 text-center md:text-left">
          <p className="font-inter text-xs text-white/30">&copy; {new Date().getFullYear()} Weblinear Inc. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
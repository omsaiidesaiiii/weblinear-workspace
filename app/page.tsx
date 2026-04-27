"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "@/components/theme-toggle";
import FUIHeroWithBorders, { AnimatedLogoCloud } from "@/components/ui/herowith-logos";
import BentoShowcase from "@/components/ui/bento-showcase";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import ValuePropBento from "@/components/bento";


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
      
      {/* Navbar Overlay */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
          <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled ? "backdrop-blur-sm bg-background/50 border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" : "bg-transparent"
          }`}>
            {/* Logo */}
            <div className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground dark:text-white"
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
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 text-foreground font-manrope font-bold text-lg tracking-tight">
                Weblinear
              </span>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
              >
                Home
              </a>
              <a
                href="#"
                className="flex items-center font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              <a
                href="#"
                className="font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
              >
                Reviews
              </a>
              <a
                href="#"
                className="font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
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
      </header>

      {/* Hero Section */}
      <FUIHeroWithBorders>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-32 lg:mt-40 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Tagline Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-full h-[32px] pl-1 pr-4 mb-8 shadow-2xl"
          >
            <span className="bg-[#7c3aed] text-white rounded-full px-2.5 py-0.5 font-inter font-bold text-[10px] uppercase tracking-wider mr-3 ml-0.5">
              New
            </span>
            <span className="text-white/80 font-inter font-medium text-[13px] tracking-tight">
              Weblinear Workspace v3.2 is here
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-instrument text-white text-5xl md:text-7xl lg:text-[100px] leading-[0.95] tracking-tighter max-w-5xl">
            Run Your Business <br className="hidden md:block"/> 
            <span className="text-white/40">from One Workspace</span>
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-[18px] md:text-[20px] text-white/50 max-w-[600px] mt-8 leading-relaxed">
            A deeply integrated platform designed for teams who value 
            speed and simplicity. Manage everything in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
            <button className="bg-[#7c3aed] text-white rounded-full font-inter font-semibold text-[15px] px-10 py-4 hover:brightness-110 transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(124,58,237,0.25)] border border-white/10">
              Start Free Trial
            </button>
            <button className="bg-white/5 text-white rounded-full font-inter font-semibold text-[15px] px-10 py-4 hover:bg-white/10 transition-all hover:scale-[1.02] border border-white/10 backdrop-blur-sm">
              Book a Demo
            </button>
          </div>
        </div>
      

        {/* Decorative gradient overlay at bottom for smoother scroll transition */}
        {/* <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" /> */}
      </FUIHeroWithBorders>

      {/* Trust & Logos Section */}
      <section className="w-full py-10 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-inter text-sm text-muted-foreground mb-6 tracking-wide uppercase">
            Trusted by growing businesses to automate operations and boost efficiency
          </p>
          <AnimatedLogoCloud />
        </div>
      </section>

      {/* Value Proposition Section (Bento Style) */}
      <ValuePropBento />

      {/* Premium Unified Features Showcase */}
      <BentoShowcase />

      {/* Selected Projects Showcase */}
      <ProjectShowcase />
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
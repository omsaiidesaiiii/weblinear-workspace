"use client";

import React from "react";
import { BarChart3, Users, Briefcase, TrendingUp, DollarSign } from "lucide-react";

export default function BentoShowcase() {
  return (
    <section className="w-full bg-background py-24 lg:py-32 relative z-10 overflow-hidden border-t border-border">
      {/* Background glow matching hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7b39fc]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center space-x-2 bg-[#7b39fc]/10 border border-[#7b39fc]/30 rounded-full px-3 py-1 w-fit mb-6 shadow-[0_0_20px_rgba(123,57,252,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#7b39fc] animate-pulse"></span>
            <span className="text-[#a484d7] font-manrope text-sm font-semibold tracking-wide uppercase">
              Unified Platform
            </span>
          </div>
          
          <h2 className="font-instrument text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            Everything You Need. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b39fc] via-[#d946ef] to-[#f97316]">
              One Intelligent System.
            </span>
          </h2>
          
          <p className="font-inter text-[18px] text-muted-foreground leading-relaxed">
            Run every department from one dashboard. Say goodbye to scattered tools and hello to seamless, automated operations that scale with you.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(0,1fr)]">
          
          {/* Row 1 */}
          {/* BIG: Analytics Dashboard (8 cols) */}
          <div className="md:col-span-8 rounded-[2rem] bg-muted/30 border border-white/5 p-8 md:p-10 relative overflow-hidden group hover:bg-muted/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(123,57,252,0.15)] hover:border-[#7b39fc]/30 flex flex-col justify-between min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7b39fc]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#7b39fc]/20 border border-[#7b39fc]/30 flex items-center justify-center mb-6 shadow-lg">
                  <BarChart3 className="w-7 h-7 text-[#a484d7]" />
                </div>
                <h3 className="font-instrument text-3xl md:text-4xl text-foreground mb-3 group-hover:text-[#a484d7] transition-colors">Business Intelligence</h3>
                <p className="font-inter text-muted-foreground text-lg max-w-md">Make smarter decisions with real-time, interactive data visualization and custom reporting.</p>
              </div>
              
              {/* Visual Element: Analytics Graph */}
              <div className="relative w-full h-48 bg-background/50 rounded-2xl border border-white/5 overflow-hidden flex items-end p-4 gap-2 lg:gap-3 group-hover:-translate-y-2 transition-transform duration-500 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-t from-[#7b39fc]/10 to-transparent"></div>
                {/* Fake Bars */}
                {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 55].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#7b39fc] to-[#d946ef] opacity-70 group-hover:opacity-100 transition-all duration-500" style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* SMALL: Stats (4 cols) */}
          <div className="md:col-span-4 rounded-[2rem] bg-gradient-to-br from-[#7b39fc]/20 via-background to-[#d946ef]/10 border border-[#7b39fc]/30 p-8 md:p-10 relative overflow-hidden group hover:border-[#d946ef]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,70,239,0.2)] flex flex-col justify-center min-h-[400px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#f97316]/20 blur-[60px] rounded-full group-hover:bg-[#f97316]/30 transition-colors duration-500"></div>
            <div className="relative z-10 flex flex-col space-y-10">
              <div className="group/stat">
                <h4 className="font-instrument text-6xl md:text-7xl text-foreground group-hover/stat:scale-105 transform origin-left transition-transform duration-500 group-hover:text-[#d946ef]">500+</h4>
                <p className="font-manrope text-muted-foreground font-semibold mt-2 uppercase tracking-wider text-sm group-hover/stat:text-foreground transition-colors">Enterprises Onboarded</p>
              </div>
              <div className="group/stat">
                <h4 className="font-instrument text-6xl md:text-7xl text-foreground group-hover/stat:scale-105 transform origin-left transition-transform duration-500 delay-75 group-hover:text-[#d946ef]">10k+</h4>
                <p className="font-manrope text-muted-foreground font-semibold mt-2 uppercase tracking-wider text-sm group-hover/stat:text-foreground transition-colors">Active Daily Users</p>
              </div>
              <div className="group/stat">
                <h4 className="font-instrument text-6xl md:text-7xl text-foreground group-hover/stat:scale-105 transform origin-left transition-transform duration-500 delay-150 group-hover:text-[#d946ef]">99.9%</h4>
                <p className="font-manrope text-muted-foreground font-semibold mt-2 uppercase tracking-wider text-sm group-hover/stat:text-foreground transition-colors">Uptime Reliability</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          {/* MEDIUM: CRM (5 cols) */}
          <div className="md:col-span-5 rounded-[2rem] bg-muted/30 border border-white/5 p-8 md:p-10 relative overflow-hidden group hover:bg-muted/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:border-[#f97316]/30 flex flex-col justify-between min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#f97316]/20 border border-[#f97316]/30 flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-7 h-7 text-[#f97316]" />
                </div>
                <h3 className="font-instrument text-3xl md:text-4xl text-foreground mb-3 group-hover:text-[#f97316] transition-colors">Smart CRM</h3>
                <p className="font-inter text-muted-foreground text-lg">Turn leads into lifelong customers with automated pipelines and follow-ups.</p>
              </div>
              
              {/* Visual Element: Pipeline */}
              <div className="w-full flex flex-col space-y-4 mt-10 group-hover:translate-x-2 transition-transform duration-500">
                <div className="w-full h-14 bg-background/60 rounded-xl border border-white/5 flex items-center px-5 space-x-4 shadow-sm">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-400"></div>
                  <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
                </div>
                <div className="w-[90%] h-14 bg-[#f97316]/20 rounded-xl border border-[#f97316]/40 flex items-center px-5 space-x-4 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#f97316] shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                  <div className="h-2 w-2/3 bg-[#f97316]/60 rounded-full"></div>
                </div>
                <div className="w-[80%] h-14 bg-background/60 rounded-xl border border-white/5 flex items-center px-5 space-x-4 shadow-sm">
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
                  <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* BIG: Finance Control (7 cols) */}
          <div className="md:col-span-7 rounded-[2rem] bg-muted/30 border border-white/5 p-8 md:p-10 relative overflow-hidden group hover:bg-muted/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:border-green-500/30 flex flex-col justify-between min-h-[400px]">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6 shadow-lg">
                  <DollarSign className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="font-instrument text-3xl md:text-4xl text-foreground mb-3 group-hover:text-green-400 transition-colors">Finance Control</h3>
                <p className="font-inter text-muted-foreground text-lg max-w-md">Track cashflow, revenue, and profit in real time without the messy spreadsheets.</p>
              </div>
              
              {/* Visual Element: Cashflow UI */}
              <div className="w-full flex flex-col sm:flex-row gap-4 mt-auto group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex-1 bg-background/80 rounded-2xl border border-white/5 p-6 relative overflow-hidden shadow-md">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-2xl"></div>
                  <p className="font-inter text-muted-foreground text-sm mb-2 font-medium">Total Revenue</p>
                  <p className="font-instrument text-4xl text-foreground mb-6">$124,500</p>
                  <div className="w-full flex items-end h-16 space-x-1.5">
                    {[3, 5, 4, 7, 6, 8, 10].map((h, i) => (
                      <div key={i} className="flex-1 bg-green-500/50 rounded-t-md hover:bg-green-400 transition-colors cursor-pointer" style={{ height: `${h * 10}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 bg-background/80 rounded-2xl border border-white/5 p-6 relative overflow-hidden shadow-md hidden sm:block">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl"></div>
                  <p className="font-inter text-muted-foreground text-sm mb-2 font-medium">Expenses</p>
                  <p className="font-instrument text-4xl text-foreground mb-6">$32,100</p>
                  <div className="w-full flex items-end h-16 space-x-1.5">
                    {[4, 3, 5, 4, 6, 4, 3].map((h, i) => (
                      <div key={i} className="flex-1 bg-red-500/50 rounded-t-md hover:bg-red-400 transition-colors cursor-pointer" style={{ height: `${h * 10}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          {/* MEDIUM: Projects (4 cols) */}
          <div className="md:col-span-4 rounded-[2rem] bg-muted/30 border border-white/5 p-8 relative overflow-hidden group hover:bg-muted/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 flex flex-col justify-between min-h-[320px]">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-instrument text-2xl md:text-3xl text-foreground mb-3 group-hover:text-blue-400 transition-colors">Projects & Tasks</h3>
              <p className="font-inter text-muted-foreground">Execute flawless roadmaps with interactive Kanban boards.</p>
            </div>
            
            {/* Visual: Task Board */}
            <div className="w-full flex space-x-3 mt-8 group-hover:scale-105 transition-transform duration-500 origin-bottom">
              <div className="flex-1 bg-background/50 rounded-xl p-3 space-y-3 border border-white/5 shadow-inner">
                <div className="w-full h-8 bg-white/10 rounded-md border border-white/5"></div>
                <div className="w-full h-12 bg-white/10 rounded-md border border-white/5"></div>
              </div>
              <div className="flex-1 bg-blue-500/10 rounded-xl p-3 space-y-3 border border-blue-500/20 shadow-md">
                <div className="w-full h-12 bg-blue-500/20 rounded-md border border-blue-500/30 shadow-sm"></div>
              </div>
              <div className="flex-1 bg-background/50 rounded-xl p-3 space-y-3 border border-white/5 shadow-inner hidden sm:block">
                 <div className="w-full h-10 bg-white/10 rounded-md border border-white/5"></div>
              </div>
            </div>
          </div>

          {/* SMALL: HR (4 cols) */}
          <div className="md:col-span-4 rounded-[2rem] bg-muted/30 border border-white/5 p-8 relative overflow-hidden group hover:bg-muted/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] hover:border-pink-500/30 flex flex-col justify-between min-h-[320px]">
             <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="font-instrument text-2xl md:text-3xl text-foreground mb-3 group-hover:text-pink-400 transition-colors">HR Management</h3>
              <p className="font-inter text-muted-foreground">Automate payroll, onboarding, and team tracking.</p>
            </div>
            {/* Visual: User profiles */}
            <div className="flex -space-x-4 mt-8 group-hover:translate-x-2 transition-transform duration-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full bg-background border-4 border-muted flex items-center justify-center z-10 overflow-hidden relative shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">
                   <div className={`absolute inset-0 opacity-60 ${i===1 ? 'bg-blue-400' : i===2 ? 'bg-pink-400' : i===3 ? 'bg-purple-400' : i===4 ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                   <Users className="w-6 h-6 text-white relative z-10 opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* SMALL: KPI Cards (4 cols) */}
          <div className="md:col-span-4 rounded-[2rem] bg-muted/30 border border-white/5 p-8 relative overflow-hidden group hover:bg-muted/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,70,239,0.15)] hover:border-[#d946ef]/30 flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#d946ef]/10 blur-[60px] rounded-full group-hover:bg-[#d946ef]/20 transition-colors duration-500 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#d946ef]/20 border border-[#d946ef]/30 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#d946ef]" />
              </div>
              <h3 className="font-instrument text-2xl md:text-3xl text-foreground mb-3 group-hover:text-[#d946ef] transition-colors">Performance KPIs</h3>
              <p className="font-inter text-muted-foreground">Monitor business health scores and milestones.</p>
            </div>
            
            {/* Visual: KPI Progress */}
            <div className="mt-8 space-y-5 group-hover:-translate-y-1 transition-transform duration-500">
               <div className="w-full bg-background/50 p-3 rounded-xl border border-white/5 shadow-sm">
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span className="text-muted-foreground">MRR Growth</span>
                    <span className="text-[#d946ef]">+24%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7b39fc] to-[#d946ef] w-[75%] rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
                  </div>
               </div>
               <div className="w-full bg-background/50 p-3 rounded-xl border border-white/5 shadow-sm">
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span className="text-muted-foreground">Retention Rate</span>
                    <span className="text-green-400">98%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[98%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

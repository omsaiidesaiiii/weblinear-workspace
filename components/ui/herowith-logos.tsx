"use client";

import React from 'react';
import clsx from 'clsx';

const FUIHeroWithBorders = ({ children }: { children?: React.ReactNode }) => {
    return (
        <section className="relative min-h-screen flex flex-col w-full overflow-hidden bg-white dark:bg-[#0a0812]">
            {/* Main Background Gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff,#f3e8ff_40%,#e9d5ff_80%)] dark:bg-[linear-gradient(to_bottom,#0a0812,#1a103c_40%,#2d1b69_74%,#4c1d95_88%_50%)] z-0" />
            
            {/* Bottom Curve/Glow */}
            <div className="absolute left-1/2 top-[calc(100%-100px)] lg:top-[calc(100%-165px)] h-[550px] w-[800px] md:h-[550px] md:w-[1200px] lg:h-[820px] lg:w-[115%] -translate-x-1/2 rounded-[100%] border border-purple-500/20 bg-[#0a0812] bg-[radial-gradient(closest-side,#130d2b_85%,#7c3aed)] pointer-events-none z-0 opacity-90 shadow-[0_-10px_40px_rgba(124,58,237,0.1)]"></div>
            
            {/* Grid Borders */}
            <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-black/5 dark:border-white/5 pointer-events-none">
                <div className="col-span-1 flex h-full items-center justify-center" />
                <div className="col-span-1 flex h-full items-center justify-center border-x border-black/5 dark:border-white/10" />
                <div className="col-span-1 flex h-full items-center justify-center" />
            </div>
            
            {/* Decorative Figures */}
            <figure className="bg-purple-500/20 pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]" />
            <figure className="bg-purple-400/10 pointer-events-none absolute left-[4vw] top-[64px] z-0 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block" />
            <figure className="bg-purple-600/10 pointer-events-none absolute bottom-[-50px] right-[7vw] z-0 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block" />
            
            <div className="relative z-10 flex flex-col items-center w-full">
                {children}
            </div>
        </section>
    )
}

export default FUIHeroWithBorders

const logos = [
    {
      name: 'Vercel',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
    },
    {
      name: 'Nextjs',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
    },
    {
      name: 'Prime',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
    },
    {
      name: 'Trustpilot',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
    },
    {
      name: 'Webflow',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
    },

    {
      name: 'Airbnb',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
    },
    {
      name: 'Tina',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
    },
    {
      name: 'Stackoverflow',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
    },
    {
      name: 'mistral',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
    },
  ]

  export const AnimatedLogoCloud = () => {
    return (
      <div className="w-full py-4 relative z-20">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes x-slider {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - 1.5rem)); }
          }
          .animate-x-slider {
            animation: x-slider 30s linear infinite;
          }
        `}} />
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}
          >
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-x-slider flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <img
                      key={key}
                      src={logo.url}
                      className="h-6 w-auto px-4 flex-none grayscale opacity-50 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
                      alt={logo.name}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

        

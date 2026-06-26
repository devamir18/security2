import React from 'react'
// import {  ShieldAlert, Zap } from 'lucide-react'

export default function Hero4() {
  return (
    <section className="w-full h-auto bg-[#0B0E14] flex justify-center py-20">
      <div className="w-full mx-2 md:max-w-5xl h-auto px-6 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
            ● CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl mt-6 font-semibold tracking-wider text-white">
            Operational Protocols
          </h2>
          <p className="text-base md:text-lg text-slate-400 tracking-wide mt-4 max-w-2xl">
            Our safety system is built to minimize reaction windows, optimize dispatch coordination, and secure perimeters when active threats emerge.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 bg-[#11151D]/60 backdrop-blur-md rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-[#161D28]/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.1) ] transition-all duration-300 group cursor-pointer">
            <div className="size-12 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              {/* <Radio className="size-6" /> */}
            </div>
            <h3 className="text-xl font-medium text-white tracking-wide">Sub-Second Distress Signal</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed tracking-wide">
              Instantly broadcast localized emergency triggers with micro-coordinates straight to tactical command units without delay.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-[#11151D]/60 backdrop-blur-md rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-[#161D28]/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group cursor-pointer">
            <div className="size-12 rounded-lg bg-[#FF4438]/10 border border-[#FF4438]/20 text-[#FF4438] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              {/* <ShieldAlert className="size-6" /> */}
            </div>
            <h3 className="text-xl font-medium text-white tracking-wide">Unified Agency Dispatch</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed tracking-wide">
              Cross-verify anomalies and sync local community responders, private infrastructure guards, and state services onto one radio map.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-[#11151D]/60 backdrop-blur-md rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-[#161D28]/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group cursor-pointer">
            <div className="size-12 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              {/* <Zap className="size-6" /> */}
            </div>
            <h3 className="text-xl font-medium text-white tracking-wide">Geofenced Risk Warning</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed tracking-wide">
              Establish digital defensive rings. Automatically alert users within a specific radius the millisecond an incident occurs nearby.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
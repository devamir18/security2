import React from 'react'
// import { Shield, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0B0E14] border-t border-white/10 flex justify-center pt-16 pb-12">
      <div className="w-full mx-2 md:max-w-5xl px-6 md:px-20">
        
        {/* Top Branding & Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Identity Pillar */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
              <div className="p-1.5 rounded bg-cyan-400/10 border border-cyan-400/30 text-cyan-400">
                {/* <Shield className="size-4" /> */}
              </div>
              BLOCKFORGE
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed tracking-wide">
              Architecting secure spatial infrastructure and low-latency tactical monitoring tools for community networks and enterprise perimeters.
            </p>
          </div>

          {/* Core Command Links */}
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Procedures</span>
            <a href="#ledger" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors tracking-wide">Live Ledger</a>
            <a href="#protocols" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors tracking-wide">Operations</a>
            <a href="#metrics" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors tracking-wide">Telemetry Data</a>
          </div>

          {/* Legal Security Architecture */}
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Framework</span>
            <a href="#privacy" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors tracking-wide">Privacy Manifest</a>
            <a href="#terms" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors tracking-wide">System Protocols</a>
            <a href="#contact" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors tracking-wide">Secure Terminal Contact</a>
          </div>

        </div>

        {/* Bottom Metadata & System Status Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-[11px] font-mono text-slate-500">
          
          {/* Copyright Stamp */}
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} BLOCKFORGE INDUSTRIAL. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Quick Scroll Core Action */}
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 border border-white/5 bg-[#11151D]/40 px-3 py-1.5 rounded-md transition-all group"
          >
            <span>RETURN_TO_CORE</span>
            {/* <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform" /> */}
          </button>

        </div>

      </div>
    </footer>
  )
}
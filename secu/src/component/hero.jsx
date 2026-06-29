import React from 'react'

export default function Hero() {

  return (
    <section className="relative bg-[#0B0E14] overflow-hidden py-24 px-6 border-b border-white/10">
  <div className="absolute top-1/4 left-1/4 size-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

  <div className="max-w-6xl mx-auto mt-10 md:mt-20 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full">
        ● Real-Time Safety Protocol
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 tracking-tight leading-none">
        Forge Secure <br />
        <span className="text-cyan-400">Communities.</span>
      </h1>
      <p className="text-lg text-slate-300 mt-6 max-w-md">
        Decentralized network architecture monitoring your environment—minutes before it hits the headlines.
      </p>
      
      <div className="mt-8 flex items-center gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-400 text-[#0B0E14] font-bold py-3 px-6 rounded-md transition-all">
          Launch Dashboard
        </button>
        <button className="border border-white/10 text-white hover:bg-white/5 font-semibold py-3 px-6 rounded-md transition-all">
          Explore Network
        </button>
      </div>
    </div>

    {/* Right Column: Live Feed / Mockup Layout Placeholder */}
    <div className="border border-white/10 bg-[#11151D] rounded-xl p-6 shadow-2xl shadow-black/40">
      {/* Live element code or network chart template goes here */}
    </div>
  </div>
</section>
  )
}

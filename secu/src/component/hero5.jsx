import React from 'react'

export default function SystemMetrics() {
  const stats = [
    { id: 1, value: "0.42s", label: "DISPATCH_LATENCY", desc: "Average time from distress signal ingestion to unit routing." },
    { id: 2, value: "1,842", label: "MONITORED_SECTORS", desc: "Active local perimeters and zones under continuous geofence guard." },
    { id: 3, value: "99.8%", label: "THREAT_MITIGATION", desc: "Successful early intervention rate across verified alerts." },
    { id: 4, value: "24/7", label: "NETWORK_UPTIME", desc: "Continuous automated aggregation across command systems." }
  ];

  return (
    <section className="w-full h-auto bg-[#0B0E14] flex justify-center pb-24">
      <div className="w-full mx-2 md:max-w-5xl h-auto px-6 md:px-20">
        
        {/* Dynamic Metric Border Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-b border-white/10 py-12 bg-[#11151D]/20 px-6 rounded-xl">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col space-y-2 group">
              
              {/* Telemetry Tag */}
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {stat.label}
              </span>
              
              {/* Massive Value Display */}
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                {stat.value}
              </h3>
              
              {/* Description context */}
              <p className="text-xs text-slate-400 leading-relaxed tracking-wide pt-1">
                {stat.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
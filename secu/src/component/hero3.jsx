import React from 'react'

export default function hero3() {

  return (
    <>
   <div className='w-full h-auto bg-[#0B0E14] flex justify-center '>
       
        <div className='w-full mx-2 md:max-w-5xl h-auto pb-12 rounded-b-2xl rounded-t-xl '>
           <div className='flex flex-col'>
             <span className="md:text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full">
        ● LIVE DATA ENGINE
      </span>
      <h2 className=' text-3xl md:text-6xl py-8 px-6 font-semibold tracking-wider '>The Real-Time Ledger</h2>
         <p className='text-base px-9 -mt-4 md:text-lg tracking-wide '>Cross-referencing verified network alert down to micro coordinate as anomalies occur</p>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-20 mt-20'>
            <div className="w-full h-auto flex flex-col space-y-5">
                <div className="w-full h-24 bg-[#11151D]/60 backdrop-blur-md rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-[#161D28]/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 ease-out cursor-pointer flex items-center px-6">

                  </div>
                   
                    <div className="w-full h-24 bg-[#11151D]/60 backdrop-blur-md rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-[#161D28]/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 ease-out cursor-pointer flex items-center px-6">

                  </div>

                   <div className="w-full h-24 bg-[#11151D]/60 backdrop-blur-md rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-[#161D28]/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 ease-out cursor-pointer flex items-center px-6">

                  </div>
            </div>

            {/* second section: The Interactive Map Interface */}
            <div className='w-full h-80 md:h-[20.5rem] bg-[#11151D] border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-2xl shadow-black/40'>
              
              {/* Grid Overlay Backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Concentric Radar Sweeper Circles */}
              <div className="absolute size-[260px] border border-white/5 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite]">
                <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-b from-cyan-500/20 to-transparent origin-bottom" />
              </div>
              <div className="absolute size-[160px] border border-white/5 rounded-full" />
              <div className="absolute size-[70px] border border-cyan-500/10 rounded-full bg-cyan-500/[0.01]" />

              {/* Map Target Node Coordinates Pings */}
              <div className="absolute top-[30%] left-[45%]">
                <span className="absolute inline-flex h-6 w-6 -left-1 -top-1 rounded-full bg-red-500/20 animate-ping" />
                <div className="size-4 rounded-full bg-red-500 border border-white/20 shadow-lg" />
              </div>

              <div className="absolute top-[65%] left-[25%] opacity-60">
                <span className="absolute inline-flex h-6 w-6 -left-1 -top-1 rounded-full bg-cyan-500/20 animate-ping" />
                <div className="size-4 rounded-full bg-cyan-500 border border-white/20 shadow-lg" />
              </div>

              <div className="absolute top-[45%] left-[75%] opacity-60">
                <div className="size-4 rounded-full bg-amber-500 border border-white/20 shadow-lg" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#0B0E14]/80 backdrop-blur-sm border border-white/5 px-4 py-2 rounded-lg flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>MATRIX_GRID // GPS_STREAM</span>
                <span className="text-cyan-400 animate-pulse">LIVE_CONNECT</span>
              </div>
            </div>
           
           </div>
        </div>
         
    </div>
    </>
  )
}
import React from 'react'

export default function hero2() {
    
  return (
    <div className='w-full h-auto bg-[#0B0E14] flex flex-col '>
        <div className='m-auto'>
            <h4 className='text-sm text-cyan-400 md:font-semibold mt-12 leading-tight tracking-widest text-center'>REAL STORIES</h4>
         <h2 className='text-3xl text-center font-semibold md:text-5xl text-white py-6 tracking-widest'>See how Citizen helps others</h2>
        </div>

        {/* Adjusted px-30 down to a standard responsive padding utility to ensure it stays inside screen margins */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 px-6 md:px-20 mt-20 mb-16 max-w-5xl mx-auto w-full'>
            
            {/* Category 1 */}
            <div className="flex flex-col items-center text-center"> 
              <div className='size-24 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-cyan-400/40 hover:bg-white/[0.02] transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='size-10'>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m1 17.93V17h-2v2.93A8 8 0 0 1 4.07 13H7v-2H4.07A8 8 0 0 1 11 4.07V7h2V4.07c3.61.45 6.48 3.32 6.93 6.93H17v2h2.93A8 8 0 0 1 13 19.93" /> 
                </svg>
              </div>
              <p className='py-4 text-sm font-medium text-slate-300 tracking-wide'>Civil Unrest & Active Shootouts</p>
            </div>
                
            {/* Category 2 */}
            <div className="flex flex-col items-center text-center"> 
              <div className='size-24 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-cyan-400/40 hover:bg-white/[0.02] transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='size-10'>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h3l3-9l6 18l3-9h3" />
                </svg>
              </div>
              <p className='py-4 text-sm font-medium text-slate-300 tracking-wide'>Critical Infrastructure Failures</p>
            </div>

            {/* Category 3 */}
            <div className="flex flex-col items-center text-center"> 
              <div className='size-24 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-cyan-400/40 hover:bg-white/[0.02] transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='size-10'>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor" d="M4.929 4.929a1 1 0 0 1 1.414 1.414A7.97 7.97 0 0 0 4 12a7.97 7.97 0 0 0 2.343 5.657A1 1 0 1 1 4.93 19.07A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.929-7.071m12.728 0a1 1 0 0 1 1.414 0A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.929 7.071a1 1 0 0 1-1.414-1.414A7.97 7.97 0 0 0 20 12a7.97 7.97 0 0 0-2.343-5.657a1 1 0 0 1 0-1.414M9.172 7.757a1 1 0 0 1 0 1.415A3.98 3.98 0 0 0 8 12c0 1.13.467 2.148 1.22 2.877a1 1 0 1 1-1.39 1.437A6 6 0 0 1 6 12c0-1.657.673-3.158 1.757-4.243a1 1 0 0 1 1.415 0m7.11.04A5.98 5.98 0 0 1 18 12a5.98 5.98 0 0 1-1.757 4.243a1 1 0 0 1-1.415-1.415A3.98 3.98 0 0 0 16 12c0-1.091-.436-2.08-1.145-2.802a1 1 0 0 1 1.427-1.401M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" />
                  </g>
                </svg>
              </div>
              <p className='py-4 text-sm font-medium text-slate-300 tracking-wide'>Urban Search & Rescue Ops</p>
            </div>

            {/* Category 4 */}
            <div className="flex flex-col items-center text-center"> 
              <div className='size-24 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-cyan-400/40 hover:bg-white/[0.02] transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='size-10'>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <g fill="none" fillRule="evenodd">
                    <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor" d="M7.747 5.592a24.3 24.3 0 0 1 3.672-3.406a1 1 0 0 1 1.162 0a25 25 0 0 1 3.672 3.406C18.584 8.256 20 11.088 20 14a8 8 0 1 1-16 0c0-2.912 1.415-5.743 3.747-8.408m4.696-.958A19 19 0 0 0 12 4.265l-.443.37a23 23 0 0 0-2.304 2.274C7.21 9.243 6 11.663 6 14c0 1.429.5 2.74 1.333 3.77a5 5 0 0 1-.023-.464c0-1.673.796-3.265 2.095-4.75c.6-.685 1.28-1.331 2.018-1.87a1 1 0 0 1 1.163 0c.74.53 1.42 1.187 2.018 1.87c1.3 1.485 2.095 3.077 2.095 4.75q0 .228-.022.452A5.98 5.98 0 0 0 18 14c0-2.338-1.21-4.757-3.253-7.091a23 23 0 0 0-2.304-2.275m-.439 8.152c-.385.342-.755.7-1.094 1.088c-1.01 1.154-1.6 2.334-1.6 3.432a2.694 2.694 0 0 0 5.389 0c0-1.098-.59-2.278-1.6-3.432c-.19-.218-1.133-1.121-1.095-1.088" />
                  </g>
                </svg>
              </div>
              <p className='py-4 text-sm font-medium text-slate-300 tracking-wide'>Environmental & Fire Alarms</p>
            </div>

        </div>
    </div>
  )
}
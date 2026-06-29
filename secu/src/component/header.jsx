import React from 'react'
import Logo2 from '../assets/images/logo2.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {

   const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return (
    <header className="relative w-full bg-[#0B0E14] z-50">

    {/* // large screen */}
    <section className='hidden md:flex fixed w-full h-24 justify-between items-center border-b border-white/10 px-10'>
        <div className="flex items-center gap-3">
            <img src={Logo2} alt="Logo" className="size-12 object-contain" />
            <h2 className="text-[#E8EAED] text-xl font-bold tracking-wide">Blockforge</h2>
        </div>

      
        <ul className="flex items-center space-x-9 list-none">
            <li className="text-[#CBD5E1] hover:text-white cursor-pointer font-medium text-base transition-colors">Premium</li>
            <li className="text-[#CBD5E1] hover:text-white cursor-pointer font-medium text-base transition-colors">Journalist</li>
            <li className="text-[#CBD5E1] hover:text-white cursor-pointer font-medium text-base transition-colors">Enterprise</li>
            <Link to="/login" className="bg-transparent hover:bg-white/5 text-[#E8EAED] font-semibold py-2 px-4 rounded border border-white/10 transition-colors text-sm">Log in</Link>
            <button className="bg-transparent hover:bg-white/5 text-[#E8EAED] font-semibold py-2 px-4 rounded border border-white/10 transition-colors text-sm">Get Started</button>
        </ul>
    </section>


    {/* // small screens */}
    <section className="md:hidden fixed flex w-full h-20 justify-between items-center px-4 border-b border-white/5">
      <div className="flex items-center gap-2">
            <img src={Logo2} alt="Logo" className="size-10 object-contain" />
            <h2 className="text-[#E8EAED] text-lg font-bold">Blockforge</h2>
        </div>

       <button onClick={toggleMenu} className="size-10 text-white flex items-center justify-center focus:outline-none" aria-label="Toggle menu">
  {isOpen ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
      <path 
        fill="none" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2.5" 
        d="M7 7l18 18M25 7L7 25" 
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
      <path 
        fill="none" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2.5" 
        d="M5 8h22M5 16h22M5 24h22" 
      />
    </svg>
  )}
</button>
    </section>

   
    <div className={`${isOpen ? "flex" : "hidden"} md:hidden absolute top-full left-0 w-full bg-[#0B0E14]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex-col gap-6 z-50`}> 
       <nav className="flex flex-col gap-4 list-none">
          <li className="text-[#CBD5E1] hover:text-white cursor-pointer font-medium text-lg transition-colors">Premium</li>
          <li className="text-[#CBD5E1] hover:text-white cursor-pointer font-medium text-lg transition-colors">Journalist</li>
          <li className="text-[#CBD5E1] hover:text-white cursor-pointer font-medium text-lg transition-colors">Enterprise</li>
        </nav>
        
        <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
          <Link to="/login" className="w-full bg-transparent hover:bg-white/5 text-[#E8EAED] font-semibold py-2.5 rounded-md border border-white/10 transition-colors">Log in</Link>
          <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0B0E14] font-bold py-2.5 rounded-md shadow-lg shadow-cyan-500/10 transition-colors">Get Started</button>
        </div>
    </div>
    
    </header>
  )
}
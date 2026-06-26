import React, { useState } from 'react';
import Logo2 from '../assets/images/logo2.png';

export default function Login() {

  const [formData, setFormData] = useState({ badgeId: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' }); // 'error' | 'success'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
    
      console.log('Sending credentials to secure cluster:', formData);
      
     
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatusMessage({ 
        type: 'success', 
        text: 'Access granted. Opening control panel...' 
      });

    } catch (error) {
      setStatusMessage({ 
        type: 'error', 
        text: 'Invalid Credentials. Entry denied.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      
      {/* Structural Shield Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="w-full max-w-md bg-[#11151D] p-8 rounded-2xl border border-white/5 shadow-2xl relative z-10">
        
        {/* Portal Branding */}
        <div className="flex flex-col items-center mb-8">
          <img src={Logo2} alt="Security Logo" className="size-16 object-contain mb-3" />
          <div className="text-[10px] font-bold tracking-widest text-blue-400 uppercase font-mono px-2.5 py-0.5 rounded border border-blue-500/20 bg-blue-500/5">
            Personnel Gate
          </div>
          <h1 className="text-xl font-bold text-[#E8EAED] mt-3">Blockforge Security</h1>
          <p className="text-xs text-[#CBD5E1]/50 mt-1">Authorized Command Personnel Only</p>
        </div>

        {/* Dynamic Alert Banner for Server Flags */}
        {statusMessage.text && (
          <div className={`p-3.5 mb-6 rounded-xl border text-xs font-mono transition-all duration-150 ${
            statusMessage.type === 'error' 
              ? 'bg-red-500/10 border-red-500/20 text-red-400' 
              : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
          }`}>
            <span className="mr-2">{statusMessage.type === 'error' ? '🚫' : '✅'}</span>
            {statusMessage.text}
          </div>
        )}

        {/* Access Form */}
        <form className="space-y-5" onSubmit={handleLoginSubmit}>
          
          {/* Badge ID / Email field */}
          <div>
            <label htmlFor="badgeId" className="block text-xs font-semibold tracking-wide text-[#CBD5E1]/80 uppercase">
              Badge ID or Email Address
            </label>
            <input
              id="badgeId"
              name="badgeId"
              type="text"
              required
              disabled={isLoading}
              value={formData.badgeId}
              onChange={handleInputChange}
              className="w-full bg-[#0B0E14] border border-white/10 rounded-xl px-4 py-3 text-[#E8EAED] placeholder-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm mt-1.5 disabled:opacity-40"
              placeholder="e.g., SEC-7720"
            />
          </div>

          {/* Secure Passphrase field */}
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-xs font-semibold tracking-wide text-[#CBD5E1]/80 uppercase">
                Security Password
              </label>
            </div>
            <div className="mt-1.5 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                disabled={isLoading}
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-[#0B0E14] border border-white/10 rounded-xl px-4 py-3 pr-12 text-[#E8EAED] placeholder-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm disabled:opacity-40"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/30 hover:text-white/50 text-xs font-semibold select-none"
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
          </div>

          {/* Session Configurations */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 bg-[#0B0E14] border-white/10 rounded accent-blue-500 focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs text-[#CBD5E1]/60 select-none">
                Remember terminal session
              </label>
            </div>
            <a href="#forgot" className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Trouble logging in?
            </a>
          </div>

          {/* Verification Actions */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900/50 disabled:text-white/30 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-600/10 transition-all flex justify-center items-center text-sm tracking-wide uppercase"
            >
              {isLoading ? (
                <span className="flex items-center gap-2 animate-pulse">
                  Verifying Identity...
                </span>
              ) : (
                'Secure Sign In'
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
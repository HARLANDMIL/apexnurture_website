
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #101624 0%, #1a2236 100%)',
      }}
      id="hero"
    >
      {/* Particle Background for ultra-futuristic effect */}
      <ParticleBackground />
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-0 lg:gap-20 z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Trust Badge - Ultra Minimal Modern */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative flex items-center justify-center mb-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#232b41] via-[#1a2236] to-[#38bdf8] flex items-center justify-center border-2 border-[#38bdf8]/40">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="#38bdf8" strokeWidth="2" fill="none" />
                  <path d="M9.5 14.5l3 3 5-6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
            <span className="text-sm font-medium tracking-wide text-[#b6c6e3] uppercase" style={{letterSpacing: '0.08em'}}>Custom AI Agent Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-orbitron mb-4 leading-tight text-white" style={{letterSpacing: '-0.02em'}}>
            <span className="block">Ultra-Modern</span>
            <span className="block text-[#38bdf8]">AI Agents</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#b6c6e3] mb-10 max-w-xl mx-auto lg:mx-0 font-light" style={{letterSpacing: '0.01em'}}>
            Automate, accelerate, and elevate your business with next-gen AI agents. Minimal effort. Maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="rounded-full px-8 text-base font-semibold bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#101624] transition shadow-none">
              Get Access Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold border-[#38bdf8] text-[#38bdf8] hover:bg-[#232b41] transition shadow-none">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Right: Visual/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center items-center mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center">
            {/* Minimal Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#38bdf8]/20 via-[#232b41]/60 to-[#101624]/80 rounded-3xl blur-2xl opacity-60"></div>
            {/* Minimal Card with Image */}
            <div className="relative w-full h-72 sm:h-80 rounded-3xl overflow-hidden border border-[#232b41] bg-[#181e2a]/80 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Agent Visualization"
                className="w-full h-full object-cover rounded-3xl opacity-70"
                draggable="false"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101624]/80 via-transparent to-transparent"></div>
              {/* Floating stat cards */}
              <motion.div
                className="absolute top-6 right-6 bg-[#38bdf8]/90 rounded-full px-5 py-2 text-xs font-semibold text-white border border-[#38bdf8]/40 backdrop-blur-sm shadow-none"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                85% Time Saved
              </motion.div>
              <motion.div
                className="absolute bottom-6 left-6 bg-[#232b41]/90 rounded-full px-5 py-2 text-xs font-semibold text-[#38bdf8] border border-[#38bdf8]/40 backdrop-blur-sm shadow-none"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              >
                +40% Revenue Boost
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
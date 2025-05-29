import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      id="hero"
    >
      {/* Animated Particle Background (only once, behind everything) */}
      <ParticleBackground />
      {/* Animated 3D Abstract Shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-[#38bdf8] to-[#232b41] rounded-full blur-2xl opacity-30 animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-16 right-1/4 w-56 h-56 bg-gradient-to-tr from-[#ff416c] to-[#38bdf8] rounded-3xl blur-3xl opacity-20 animate-pulse" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-tl from-[#232b41] to-[#38bdf8] rounded-full blur-xl opacity-20 animate-pulse" style={{transform: 'translate(-50%, -50%)'}} aria-hidden="true" />
        {/* Extra animated ring */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border-4 border-[#38bdf8]/30 rounded-full animate-spin-slow opacity-20" aria-hidden="true" />
      </div>
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center z-10 text-center relative">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full flex flex-col items-center justify-center text-center"
        >
          {/* Trust Badge - Ultra Minimal Modern with Glow */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative flex items-center justify-center mb-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#232b41] via-[#1a2236] to-[#38bdf8] flex items-center justify-center border border-[#38bdf8]/30 shadow-lg shadow-[#38bdf8]/20 animate-pulse">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="#38bdf8" strokeWidth="2" fill="none" />
                  <path d="M9.5 14.5l3 3 5-6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
            <span className="text-xs font-medium tracking-widest text-[#b6c6e3] uppercase">Custom AI Agent Development</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-orbitron mb-6 leading-tight text-white drop-shadow-xl" style={{letterSpacing: '-0.03em'}}>
            Build better AI agents
          </h1>
          <p className="text-lg sm:text-xl text-[#b6c6e3] mb-10 max-w-lg mx-auto font-light" style={{letterSpacing: '0.01em'}}>
            Face the future with confidence—custom AI agents to automate, accelerate, and elevate your business. Minimal effort. Maximum impact.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 text-base font-semibold bg-gradient-to-r from-[#ff416c] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#ff416c] text-white transition shadow-lg shadow-[#38bdf8]/30">
              Get Access Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold border-[#38bdf8] text-[#38bdf8] hover:bg-[#232b41] transition shadow-none">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Right: Visual/Mockup */}
        {/* 3D Abstract Shapes for Ultra Modern Look */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Example 3D shapes using gradients and blur for a modern effect */}
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-[#38bdf8] to-[#232b41] rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="absolute bottom-16 right-1/4 w-56 h-56 bg-gradient-to-tr from-[#ff416c] to-[#38bdf8] rounded-3xl blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-tl from-[#232b41] to-[#38bdf8] rounded-full blur-xl opacity-20 animate-pulse" style={{transform: 'translate(-50%, -50%)'}} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import TrustedBy from './TrustedBy';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24" id="hero">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-orbitron mb-6 leading-tight">
              Transform Your Business with <span className="text-gradient">Custom AI Agents</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Save time and boost revenue with AI agents that handle your repetitive tasks, 
              automate workflows, and deliver exceptional customer experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get Access Now
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            {/* Trusted by section */}

            {/*<div className="mt-12 flex items-center gap-6 text-gray-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                    alt={`Avatar ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-background-mid object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="font-semibold">Trusted by 500+ companies</div>
                <div className="text-sm">From startups to enterprises</div>
              </div>
            </div> */}
          </motion.div> 
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50"></div>
              
              {/* Main image container */}
              <div className="glass-card relative w-full h-96 sm:h-[450px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI Agent Visualization" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
                
                {/* Overlay design elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-start/80 via-transparent to-transparent"></div>
                
                {/* Floating stats cards */}
                <motion.div 
                  className="absolute top-6 right-6 glass-card !p-3 text-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="font-semibold text-primary">85% Time Saved</div>
                  <div className="text-xs text-gray-300">with AI Automation</div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 left-6 glass-card !p-3 text-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                >
                  <div className="font-semibold text-accent">+40% Revenue Boost</div>
                  <div className="text-xs text-gray-300">for our clients</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
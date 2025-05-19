import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Countdown from 'react-countdown';
import VanillaTilt from 'vanilla-tilt';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

// Define types for clarity
interface Suite {
  name: string;
  icon: string;
  description: string;
  setupPrice: number;
  monthlyPrice: number;
  yearlyPrice: number;
  goal: string;
  outcome: string;
  features: string[];
  tooltip: string;
}

// Custom hook for the 3D tilt effect
const useTilt = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.03
      });
    }
    return () => {
      if (ref.current) {
        (ref.current as any)?.vanillaTilt?.destroy();
      }
    };
  }, [ref]);
};

// Helper component for pricing cards
const PricingCard: React.FC<{ suite: Suite }> = ({ suite }) => {
  return (
    <GlassCard 
      className="h-full hover:scale-105 transition-transform duration-300"
      borderColor="border-purple-500/30"
      glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]"
    >
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
            <i className={`fa ${suite.icon} text-4xl text-purple-400`}></i>
          </div>
          <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">{suite.name}</h3>
          <p className="text-gray-400">{suite.description}</p>
        </div>

        <div className="text-center mb-8">
          <div className="text-3xl font-orbitron font-bold text-white mb-2">
            ${suite.setupPrice.toLocaleString()} <span className="text-base text-gray-400">setup</span>
          </div>
          <div className="text-xl text-purple-300">
            ${suite.monthlyPrice.toLocaleString()} 
            <span className="text-sm text-gray-400">/ month</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="text-green-400 font-semibold">{suite.goal}</div>
          <div className="text-gray-300">{suite.outcome}</div>
          <ul className="space-y-2">
            {suite.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <i className="fa fa-check text-purple-400"></i>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 relative group overflow-hidden"
          onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </Button>
      </div>
    </GlassCard>
  );
};

// Precision AI Implementation Suite card with modern, premium design elements and animations
const PrecisionCard: React.FC = () => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  useTilt(cardRef);

  const process = [
    { icon: "search", title: "Discover & Audit", desc: "2-week analysis", tooltip: "A 15-page report highlights key areas for improvement" },
    { icon: "code", title: "Design & Build", desc: "Custom solutions", tooltip: "Custom AI agents tailored to your needs" },
    { icon: "plug", title: "Deploy & Integrate", desc: "1-week setup", tooltip: "Full training for your team included" },
    { icon: "tools", title: "Optimize & Scale", desc: "Ongoing support", tooltip: "Monthly updates for sustained results" }
  ];

  const outcomes = [
    { icon: "tachometer-alt", text: "Boost Efficiency by 20%", subtext: "Automate tasks, saving 20+ hours/week" },
    { icon: "dollar-sign", text: "Increase Revenue by 15%", subtext: "Targeted AI agents drive conversions" },
    { icon: "piggy-bank", text: "Reduce Costs by 25%", subtext: "Minimize errors and labor expenses" },
    { icon: "check-circle", text: "Achieve ROI in 30 Days", subtext: "See results within the first month" },
    { icon: "rocket", text: "Future-Proof Your Business", subtext: "Ongoing optimization for scalability" }
  ];

  return (
    <div ref={cardRef} className="relative group">
      {/* 3D Orbiting Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-purple-500 rounded-full animate-orbit"
            style={{
              animationDelay: `${i * 2}s`,
              filter: 'blur(2px)',
              opacity: 0.6
            }}
          />
        ))}
      </div>

      <GlassCard 
        className="relative w-full transform transition-all duration-300 hover:scale-[1.03]
                   hover:shadow-[0_0_30px_rgba(128,0,128,0.4)]"
        borderColor="border-purple-500/30"
        glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]"
      >
        <div className="p-8 md:p-12 relative z-10">
          

          {/* Header with Enhanced Animation */}
          <div className="text-center mb-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-[38px] font-orbitron font-bold mb-4 text-white
                           animate-neonFlicker"
                  style={{ textShadow: '0 0 20px rgba(128,0,128,0.8), 0 0 30px rgba(128,0,128,0.5)' }}
              >
                Precision AI Implementation Suite
              </h2>
              <p className="text-xl text-gray-300 font-poppins mb-6 opacity-90">
                Bespoke AI Agents Tailored to Solve Your Unique Business Challenges
              </p>
              <p className="text-base text-gray-400 font-poppins leading-7 max-w-3xl mx-auto">
                The Precision AI Implementation Suite revolutionizes your business with fully customized AI agents
                that address your specific pain points, streamline operations, and drive measurable growth.
              </p>
            </motion.div>
          </div>

          {/* Pricing Section with Enhanced Animation */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <span className="absolute -top-6 right-0 bg-gradient-to-r from-purple-600 to-purple-400
                             text-white text-xs px-4 py-1 rounded-full animate-pulse">
                Save $4,500/year
              </span>
              <div className="text-4xl font-orbitron font-bold text-white mb-2"
                   style={{ textShadow: '0 0 15px rgba(128,0,128,0.6)' }}>
                $4,999 <span className="text-xl text-gray-400">setup</span>
              </div>
              <div className="text-2xl font-orbitron text-purple-300 mb-4">
                $1,499 <span className="text-base text-gray-400">/ month</span>
              </div>
              <div className="text-green-400 font-bold mb-2 animate-pulse">
                First Year Special: $1,124/mo
              </div>
            </motion.div>
          </div>

          {/* Process Steps with Enhanced Animation */}
          <div className="grid md:grid-cols-4 gap-8 mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-500/20 hidden md:block" />
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center relative group"
              >
                <div className="relative z-10 p-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/10 
                                flex items-center justify-center mb-4 group-hover:bg-purple-500/20 
                                transition-all duration-300 relative">
                    <i className={`fa fa-${step.icon} text-3xl text-purple-400 
                                 group-hover:text-purple-300 transition-all duration-300
                                 animate-pulse`}
                       style={{ filter: 'drop-shadow(0 0 8px rgba(128,0,128,0.6))' }}
                       title={step.tooltip} />
                  </div>
                  <h3 className="font-orbitron font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Outcomes Grid with Enhanced Animation */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start space-x-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center 
                              justify-center flex-shrink-0 group-hover:bg-purple-500/20 
                              transition-all duration-300">
                  <i className={`fa fa-${outcome.icon} text-2xl text-purple-400 
                               group-hover:text-purple-300 transition-all duration-300`}
                     style={{ filter: 'drop-shadow(0 0 8px rgba(128,0,128,0.6))' }} />
                </div>
                <div>
                  <h4 className="text-white font-orbitron font-bold mb-1">{outcome.text}</h4>
                  <p className="text-gray-400 text-sm">{outcome.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA & Timer Section */}
          <div className="text-center">
            <div className="mb-6 inline-block bg-purple-500/10 px-6 py-3 rounded-full 
                          border border-purple-500/30 animate-float">
              <span className="text-purple-300 font-orbitron">
                Exclusive Offer: Free 2-Week Workflow Audit ($999 Value)
              </span>
            </div>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 
                         hover:to-blue-600 text-xl px-12 py-4 mb-4 relative group overflow-hidden
                         animate-float"
              onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
            >
              <span className="relative z-10">Get Free Audit Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 
                            opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>
            <div className="text-orange-400 font-orbitron animate-pulse">
              <div className="text-lg font-bold mb-2">Only 5 Spots Left!</div>
              <Countdown 
                date={new Date('2025-05-21T11:31:00+02:00').getTime()}
                renderer={({ days, hours, minutes }) => (
                  <div className="flex items-center justify-center gap-4">
                    <div className="bg-purple-500/10 px-4 py-2 rounded-lg">
                      <span className="font-bold text-xl">{days}d</span>
                    </div>
                    <div className="bg-purple-500/10 px-4 py-2 rounded-lg">
                      <span className="font-bold text-xl">{hours}h</span>
                    </div>
                    <div className="bg-purple-500/10 px-4 py-2 rounded-lg">
                      <span className="font-bold text-xl">{minutes}m</span>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

// Main Pricing component
const Pricing: React.FC = () => {
  // Deadline: May 21, 2025, 11:31 AM SAST
  const deadline = new Date('2025-05-21T11:31:00+02:00').getTime();
  
  const suites: Suite[] = [
    {
      name: "E-Commerce Growth Suite",
      icon: "fa-shopping-cart",
      description: "Boost Sales and Streamline Operations with AI",
      setupPrice: 2999,
      monthlyPrice: 599,
      yearlyPrice: 5990, // 10 months for annual billing
      goal: "Increase online sales by 15-25% within 30 days",
      outcome: "Recover abandoned carts and automate customer service",
      features: [
        "AI-Powered Cart Recovery Agent",
        "Customer Service Chatbot",
        "Inventory Sync Automation",
        "Real-Time Analytics Dashboard"
      ],
      tooltip: "Perfect for online stores looking to increase sales and automate customer service"
    },
    {
      name: "Healthcare Admin Suite",
      icon: "fa-hospital",
      description: "Focus on Patient Care, Not Admin Tasks",
      setupPrice: 3499,
      monthlyPrice: 699,
      yearlyPrice: 6990,
      goal: "Reduce admin workload by 70% within 45 days",
      outcome: "Decrease no-shows and improve patient retention",
      features: [
        "AI Scheduling Agent",
        "Billing Automation",
        "Patient Follow-Up System",
        "Compliance Dashboard"
      ],
      tooltip: "Ideal for medical practices wanting to reduce administrative burden"
    },
    {
      name: "Real Estate Transaction Suite",
      icon: "fa-home",
      description: "Close Deals Faster with AI Automation",
      setupPrice: 2799,
      monthlyPrice: 549,
      yearlyPrice: 5490,
      goal: "Speed up deal closures by 10% within 45 days",
      outcome: "Reduce errors and improve response rates",
      features: [
        "Lead Qualification AI",
        "Document Automation",
        "Client Follow-Up System",
        "Transaction Tracking Dashboard"
      ],
      tooltip: "Perfect for real estate agencies looking to streamline transactions"
    }
  ];
  return (    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Enhanced Aurora Effect Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-start via-background-mid to-background-end"></div>
      
      {/* Multiple Aurora layers for depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 animate-aurora-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/10 via-transparent to-purple-900/10 animate-aurora-reverse"></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <div className="absolute inset-0 bg-noise"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Hero Pricing Intro */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
            style={{ textShadow: "0 0 15px rgba(128, 0, 128, 0.7)" }}
          >
            Elevate Your Business with AI Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins"
          >
            Discover our Precision Suite or Ready-to-Go solutions for instant impact
          </motion.p>
          
          <PrecisionCard />
        </div>
        

        {/* Ready-to-Go Suites Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-white"
            style={{ textShadow: "0 0 15px rgba(128, 0, 128, 0.7)" }}
          >
            Access our Ready-to-Go Suites
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-purple-300 font-poppins"
          >
            Start automating your business instantly with our specialized solutions
          </motion.p>
        </div>

        {/* Ready-to-Go Suites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {suites.map((suite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <PricingCard suite={suite} />
            </motion.div>
          ))}
        </div>

        {/* Final CTA *
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <GlassCard
            className="max-w-3xl mx-auto p-12"
            borderColor="border-purple-500/30"
            glowColor="shadow-[0_0_32px_8px_rgba(128,0,128,0.3)]"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-poppins">
              Book a Free Demo Today and See How Our AI Agents Can Transform Your Operations
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-xl px-12 py-4 relative group overflow-hidden"
              onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
            >
              <span className="relative z-10">Book Your Free Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
          </GlassCard>
        </motion.div> /*}

        {/* Footer */}

      </div>
    </section>
  );
};

export default Pricing;
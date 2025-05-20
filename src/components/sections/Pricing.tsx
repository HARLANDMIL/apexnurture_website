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
  const deadline = new Date('2025-05-22T13:01:00+02:00').getTime();

  const plans = [
    {
      name: "AI Candidate Pipeline Stack",
      subheadline: "Auto-Source, Qualify, and Follow Up with Top Candidates",
      niche: "Recruitment Agencies & HR Departments",
      price: "$1,899/month",
      addOn: "Custom Candidate CRM Build ($5,999 one-time)",
      features: [
        { icon: "fa-users", text: "Sourcing Agent", tooltip: "Sources from LinkedIn, job boards, and internal databases." },
        { icon: "fa-file-alt", text: "AI Screening Assistant", tooltip: "Flags red flags and ranks candidates by fit." },
        { icon: "fa-envelope", text: "Follow-up AI Recruiter", tooltip: "Boosts application completion by 25%." },
        { icon: "fa-chart-bar", text: "Client Report Bot", tooltip: "Keeps clients informed with actionable insights." },
        { icon: "fa-plug", text: "ATS Integration Module", tooltip: "Seamless integration with your existing systems." }
      ],
      outcome: "Hire 30% faster with less admin work and better candidates."
    },
    {
      name: "AI Course Funnel Stack",
      subheadline: "Turn Your Course Content into a 24/7 Client Acquisition Machine",
      niche: "Online Course Creators, Business Coaches",
      price: "$1,499/month",
      addOn: "High-Converting VSL & Funnel System ($4,999 one-time)",
      features: [
        { icon: "fa-video", text: "AI Webinar Repurposer", tooltip: "Creates blog posts, carousels, and more from recordings." },
        { icon: "fa-comments", text: "Lead Nurture Bot", tooltip: "Increases engagement by 20% with tailored messages." },
        { icon: "fa-tachometer-alt", text: "Funnel Optimizer Agent", tooltip: "Boosts upsell rates with data-driven insights." },
        { icon: "fa-star", text: "Testimonial Hunter Bot", tooltip: "Builds trust by showcasing client success." },
        { icon: "fa-desktop", text: "All-in-One Content CRM Dashboard", tooltip: "Track leads, content, and conversions in one place." }
      ],
      outcome: "Convert more viewers into clients automatically, even while you sleep."
    },
    {
      name: "AI Backoffice Stack",
      subheadline: "Cut Your Admin Workload by 60%—No Extra Hires Needed",
      niche: "Small to Mid-Sized Businesses",
      price: "$1699/month",
      addOn: "AI SOP Buildout + Full Process Automation ($5,999 one-time)",
      features: [
        { icon: "fa-file-invoice-dollar", text: "AI Quotation Assistant", tooltip: "Saves 10+ hours/week on quote creation." },
        { icon: "fa-calendar-check", text: "Task Scheduler Bot", tooltip: "Integrates with Slack, WhatsApp, or email." },
        { icon: "fa-headset", text: "Client Communication Agent", tooltip: "Reduces response time to under 5 minutes." },
        { icon: "fa-dollar-sign", text: "Payment Reminder Bot", tooltip: "Improves cash flow by 15% with gentle nudges." },
        { icon: "fa-chart-line", text: "Operations Dashboard", tooltip: "Identify bottlenecks and optimize efficiency." }
      ],
      outcome: "Save $2K–$6K/month in admin hours, delays, and follow-ups."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Hero Pricing Intro */}
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
          style={{ textShadow: "0 0 15px rgba(128, 0, 128, 0.7)" }}
        >
          Supercharge Your Business with AI-Powered Automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins"
        >
          Choose the perfect AI stack to streamline operations, boost conversions, and save time.
        </motion.p>
        <Button 
          className="bg-gradient-to-r from-purple-600 to-gray-400 hover:from-purple-700 hover:to-gray-500 text-xl px-12 py-4 relative group overflow-hidden"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="relative z-10">Find Your Plan</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-gray-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </Button>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* AI Candidate Pipeline Stack */}
        <GlassCard className="p-8 pricing-card border border-green-400/30 shadow-[0_0_20px_2px_rgba(0,255,170,0.2)] bg-[rgba(255,255,255,0.08)] backdrop-blur-[25px] rounded-[25px] relative overflow-hidden group hover:scale-[1.03] transition-transform duration-300" style={{ boxShadow: '0 0 10px rgba(0,255,170,0.5), inset 0 0 10px rgba(128,0,128,0.3)' }}>
          {/* Digital Wave Pattern */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="absolute left-0 top-0 w-full h-full opacity-20 animate-pulse" viewBox="0 0 400 200" fill="none"><path d="M0 100 Q100 150 200 100 T400 100" stroke="#00FFAA" strokeWidth="4" fill="none"/></svg>
          </div>
          <div className="text-center mb-4 relative z-10">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-400/10 flex items-center justify-center mb-4">
              <i className="fa fa-users text-4xl text-green-300 neon-outline group-hover:neon-fill-green transition-all duration-300 spin-on-hover" title="Sources from LinkedIn, job boards, and internal databases."></i>
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2" style={{ textShadow: '0 0 20px #00FFAA' }}>AI Candidate Pipeline Stack</h3>
            <p className="text-gray-300 mb-2 font-poppins text-lg">Auto-Source, Qualify, and Follow Up with Top Candidates</p>
            <p className="text-green-300 mb-2 font-poppins text-base">Recruitment Agencies & HR Departments</p>
            <div className="text-white font-bold mb-2 text-2xl">$1,499<span className="text-base text-gray-400 font-normal">/month</span></div>
            <div className="text-gray-400 mb-2 text-sm">Custom Candidate CRM Build ($5,999 one-time)</div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2"><i className="fa fa-users text-green-300 neon-outline group-hover:neon-fill-green spin-on-hover" title="Sources from LinkedIn, job boards, and internal databases."></i><span className="text-gray-300">Sourcing Agent</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-file-alt text-green-300 neon-outline group-hover:neon-fill-green spin-on-hover" title="Flags red flags and ranks candidates by fit."></i><span className="text-gray-300">AI Screening Assistant</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-envelope text-green-300 neon-outline group-hover:neon-fill-green spin-on-hover" title="Boosts application completion by 25%."></i><span className="text-gray-300">Follow-up AI Recruiter</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-chart-bar text-green-300 neon-outline group-hover:neon-fill-green spin-on-hover" title="Keeps clients informed with actionable insights."></i><span className="text-gray-300">Client Report Bot</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-plug text-green-300 neon-outline group-hover:neon-fill-green spin-on-hover" title="Seamless integration with your existing systems."></i><span className="text-gray-300">ATS Integration Module</span></li>
            </ul>
            <div className="text-green-400 font-bold mb-2 animate-pulse">Hire 30% faster with less admin work and better candidates.</div>
            <div className="text-green-300 font-orbitron text-sm mb-2 countdown">Limited Spots—Join Before May 22, 2025!</div>
            <Button className="w-full holographic-green text-white font-bold text-lg py-3 rounded-xl shadow-lg shimmer-on-hover pulse-on-hover ripple-on-click" onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}>
              Start Hiring Smarter
            </Button>
          </div>
        </GlassCard>

        {/* AI Course Funnel Stack */}
        <GlassCard className="p-8 pricing-card border border-blue-400/30 shadow-[0_0_20px_2px_rgba(0,212,255,0.2)] bg-[rgba(255,255,255,0.08)] backdrop-blur-[25px] rounded-[25px] relative overflow-hidden group hover:scale-[1.03] transition-transform duration-300" style={{ boxShadow: '0 0 10px rgba(0,212,255,0.5), inset 0 0 10px rgba(128,0,128,0.3)' }}>
          {/* Funnel Vortex Effect */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="absolute left-0 top-0 w-full h-full opacity-20 animate-spin-slow" viewBox="0 0 400 200" fill="none"><ellipse cx="200" cy="100" rx="180" ry="60" stroke="#00D4FF" strokeWidth="4" fill="none"/></svg>
          </div>
          <div className="text-center mb-4 relative z-10">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-400/10 flex items-center justify-center mb-4">
              <i className="fa fa-video text-4xl text-blue-300 solid-holo group-hover:spin-on-hover" title="Creates blog posts, carousels, and more from recordings."></i>
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2" style={{ textShadow: '0 0 20px #00D4FF' }}>AI Course Funnel Stack</h3>
            <p className="text-gray-300 mb-2 font-poppins text-lg">Turn Your Course Content into a 24/7 Client Acquisition Machine</p>
            <p className="text-blue-300 mb-2 font-poppins text-base">Online Course Creators, Business Coaches</p>
            <div className="text-white font-bold mb-2 text-2xl">$1,299<span className="text-base text-gray-400 font-normal">/month</span></div>
            <div className="text-gray-400 mb-2 text-sm">High-Converting VSL & Funnel System ($4,999 one-time)</div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2"><i className="fa fa-video text-blue-300 solid-holo group-hover:spin-on-hover" title="Creates blog posts, carousels, and more from recordings."></i><span className="text-gray-300">AI Webinar Repurposer</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-comments text-blue-300 solid-holo group-hover:spin-on-hover" title="Increases engagement by 20% with tailored messages."></i><span className="text-gray-300">Lead Nurture Bot</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-tachometer-alt text-blue-300 solid-holo group-hover:spin-on-hover" title="Boosts upsell rates with data-driven insights."></i><span className="text-gray-300">Funnel Optimizer Agent</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-star text-blue-300 solid-holo group-hover:spin-on-hover" title="Builds trust by showcasing client success."></i><span className="text-gray-300">Testimonial Hunter Bot</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-desktop text-blue-300 solid-holo group-hover:spin-on-hover" title="Track leads, content, and conversions in one place."></i><span className="text-gray-300">All-in-One Content CRM Dashboard</span></li>
            </ul>
            <div className="text-blue-400 font-bold mb-2 animate-pulse">Convert more viewers into clients automatically, even while you sleep.</div>
            <div className="text-blue-300 font-orbitron text-sm mb-2 countdown">Limited Spots—Join Before May 22, 2025!</div>
            <Button className="w-full holographic-blue text-white font-bold text-lg py-3 rounded-xl shadow-lg shimmer-on-hover pulse-on-hover ripple-on-click" onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}>
              Automate Your Funnel
            </Button>
          </div>
        </GlassCard>

        {/* AI Backoffice Stack */}
        <GlassCard className="p-8 pricing-card border border-orange-400/30 shadow-[0_0_20px_2px_rgba(255,170,0,0.2)] bg-[rgba(255,255,255,0.08)] backdrop-blur-[25px] rounded-[25px] relative overflow-hidden group hover:scale-[1.03] transition-transform duration-300" style={{ boxShadow: '0 0 10px rgba(255,170,0,0.5), inset 0 0 10px rgba(128,0,128,0.3)' }}>
          {/* Gear Rotation Effect */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="absolute left-0 top-0 w-full h-full opacity-20 animate-spin-slow" viewBox="0 0 400 200" fill="none"><g><circle cx="100" cy="100" r="40" stroke="#FFAA00" strokeWidth="6" fill="none"/><circle cx="300" cy="100" r="30" stroke="#FFAA00" strokeWidth="4" fill="none"/></g></svg>
          </div>
          <div className="text-center mb-4 relative z-10">
            <div className="w-16 h-16 mx-auto rounded-full bg-orange-400/10 flex items-center justify-center mb-4">
              <i className="fa fa-file-invoice-dollar text-4xl text-orange-300 duotone-glow group-hover:spin-on-hover" title="Saves 10+ hours/week on quote creation."></i>
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2" style={{ textShadow: '0 0 20px #FFAA00' }}>AI Backoffice Stack</h3>
            <p className="text-gray-300 mb-2 font-poppins text-lg">Cut Your Admin Workload by 60%—No Extra Hires Needed</p>
            <p className="text-orange-300 mb-2 font-poppins text-base">Small to Mid-Sized Businesses</p>
            <div className="text-white font-bold mb-2 text-2xl">$1,499<span className="text-base text-gray-400 font-normal">/month</span></div>
            <div className="text-gray-400 mb-2 text-sm">AI SOP Buildout + Full Process Automation ($5,999 one-time)</div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2"><i className="fa fa-file-invoice-dollar text-orange-300 duotone-glow group-hover:spin-on-hover" title="Saves 10+ hours/week on quote creation."></i><span className="text-gray-300">AI Quotation Assistant</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-calendar-check text-orange-300 duotone-glow group-hover:spin-on-hover" title="Integrates with Slack, WhatsApp, or email."></i><span className="text-gray-300">Task Scheduler Bot</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-headset text-orange-300 duotone-glow group-hover:spin-on-hover" title="Reduces response time to under 5 minutes."></i><span className="text-gray-300">Client Communication Agent</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-dollar-sign text-orange-300 duotone-glow group-hover:spin-on-hover" title="Improves cash flow by 15% with gentle nudges."></i><span className="text-gray-300">Payment Reminder Bot</span></li>
              <li className="flex items-center gap-2"><i className="fa fa-chart-line text-orange-300 duotone-glow group-hover:spin-on-hover" title="Identify bottlenecks and optimize efficiency."></i><span className="text-gray-300">Operations Dashboard</span></li>
            </ul>
            <div className="text-orange-400 font-bold mb-2 animate-pulse">Save $2K–$6K/month in admin hours, delays, and follow-ups.</div>
            <div className="text-orange-300 font-orbitron text-sm mb-2 countdown">Limited Spots—Join Before May 22, 2025!</div>
            <Button className="w-full holographic-orange text-white font-bold text-lg py-3 rounded-xl shadow-lg shimmer-on-hover pulse-on-hover ripple-on-click" onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}>
              Streamline Your Operations
            </Button>
          </div>
        </GlassCard>
      </div>

      {/* Headline for Precision AI Implementation Suite */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-orbitron font-bold text-white mb-4">Need a Tailored Solution?</h2>
        <p className="text-gray-300 text-lg">Explore our Precision AI Implementation Suite for bespoke solutions.</p>
      </div>

      {/* Precision AI Implementation Suite */}
      <div className="max-w-4xl mx-auto">
        <PrecisionCard />
      </div>
    </section>
  );
};

export default Pricing;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Users, Bot, Zap, CheckCircle, Info, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  // Precision Implementation Suite (Horizontal Card)
  const precisionSuite = {
    name: "Precision Implementation Suite",
    headline: "Tailored Solutions: Join the Precision Implementation Suite",
    subheadline: "Custom AI Agents & Automations Tailored to Your Business Needs",
    subtext: "We audit your business processes for 2 weeks, identify inefficiencies, build custom AI agents to solve them, and deploy within 30 days—not months.",
    steps: [
      { icon: "fa fa-search", title: "In-Depth Audit", text: "Analyze your processes to pinpoint inefficiencies." },
      { icon: "fa fa-lightbulb", title: "Identify Opportunities", text: "Uncover high-impact areas for AI automation." },
      { icon: "fa fa-code", title: "Build Custom AI Agents", text: "Develop tailored AI solutions for your challenges." },
      { icon: "fa fa-rocket", title: "Deploy in 30 Days", text: "Integrate, train, and optimize for results." }
    ],
    features: [
      "Comprehensive Audit Report: 15-page PDF with actionable insights.",
      "Custom AI Agents: 2–4 agents (e.g., support bot, lead nurturer).",
      "Seamless Integration: Fully integrated into your systems.",
      "Real-Time Analytics Dashboard: Track performance and ROI live.",
      "Ongoing Optimization: Monthly updates for sustained results."
    ],
    price: 5000,
    maintenance: 900,
    annotations: [
      "Pays for Itself Within 1 Month Through Efficiency Gains",
      "Trusted by 20+ Businesses for Tailored AI Solutions"
    ],
    urgency: "Limited Spots Available—Sign Up Before May 17, 2025!",
    cta: { text: "Get Started Now", href: "https://calendly.com/apexnurture/precision-suite" },
    learnMore: { text: "Learn More", href: "https://apexnurture.com/precision-ai-program" },
    countdownDeadline: new Date('2025-05-17T23:59:59').getTime()
  };

  const suites = [
    {
      name: "Lead-to-Client Conversion AI Suite",
      cardTitle: "Lead Gen Suite",
      accentColor: "from-[#800080] to-[#00FFFF]",
      badge: { text: "Most Popular", color: "bg-[#00FFFF] text-[#0F0C29] animate-pulse" },
      price: 2500,
      maintenance: 550,
      headline: "Turn Leads into Clients Fast",
      keyBenefit: "3×–5× more booked calls.",
      icon: <i className="fa fa-bolt text-4xl text-[#00FFFF]" />,
      href: "/lead-to-client",
      features: [
        { icon: "fa fa-calendar-check", text: "AI Appointment Setter: Books 3× more calls via WhatsApp/Email." },
        { icon: "fa fa-file-alt", text: "Content Repurposer: Turns webinars into 10+ lead magnets." },
        { icon: "fa fa-bell", text: "Auto-Follow-Up: Boosts lead response rates by 40%." },
        { icon: "fa fa-chart-line", text: "CRM Dashboard: Tracks performance in real-time." }
      ],
      roi: "Pays for itself after just 1 client.",
      social: "Used by 30+ consultants this quarter.",
      cta: { text: "Get Started Right", color: "from-[#800080] to-[#00FFFF]", href: "/lead-to-client" },
      miniCta: { text: "See Demo →", href: "https://www.youtube.com/watch?v=demo" },
      calculator: { text: "Estimate Your ROI", href: "https://typeform.com/to/roi-calc" }
    },
    {
      name: "AI Recruitment Automation Suite",
      cardTitle: "Recruitment Suite",
      accentColor: "from-[#00FF00] to-[#FFFFFF]",
      badge: { text: "Best Value", color: "bg-[#00FF00] text-[#0F0C29] animate-pulse" },
      price: 3000,
      maintenance: 700,
      headline: "Place Candidates 30% Faster",
      keyBenefit: "Cut screening time by 70%.",
      icon: <i className="fa fa-users text-4xl text-[#00FF00]" />,
      href: "/recruitment-automation",
      features: [
        { icon: "fa fa-id-badge", text: "CV Screening Bot: Cuts screening time by 70%." },
        { icon: "fa fa-user-check", text: "Follow-Up Agent: Reduces drop-off by 40%." },
        { icon: "fa fa-database", text: "Data Enricher: Sources 50+ qualified profiles/month." },
        { icon: "fa fa-tachometer-alt", text: "Performance Tracker: Monitors placement success." }
      ],
      roi: "Includes real-time updates + AI agent optimization.",
      social: "Trusted by 12+ agencies.",
      cta: { text: "Get Started Right", color: "from-[#00FF00] to-[#FFFFFF]", href: "/recruitment-automation" },
      miniCta: { text: "View Agent Flow →", href: "https://www.example.com/flow-diagram" },
      calculator: { text: "Estimate Your ROI", href: "https://typeform.com/to/roi-calc" }
    },
    {
      name: "Smart Business Ops Suite",
      cardTitle: "Business Ops Suite",
      accentColor: "from-[#800080] to-[#00FFFF]",
      badge: { text: "All-in-One", color: "bg-[#FF69B4] text-[#0F0C29] animate-pulse" },
      price: 3500,
      maintenance: 700,
      headline: "Save 20+ Hours/Week",
      keyBenefit: "Streamline ops instantly.",
      icon: <i className="fa fa-cogs text-4xl text-[#FF69B4]" />,
      href: "/business-ops",
      features: [
        { icon: "fa fa-headset", text: "AI Support Bot: Resolves 50% of inquiries instantly." },
        { icon: "fa fa-file-invoice-dollar", text: "Quotation Generator: Creates quotes in under 2 minutes." },
        { icon: "fa fa-tasks", text: "Task Scheduler: Reduces delays by 30%." },
        { icon: "fa fa-chart-pie", text: "Ops Dashboard: Tracks efficiency gains." }
      ],
      roi: "Saves $2,000/month in admin costs.",
      social: "'Doubled my efficiency in 2 weeks' – Sarah, SA SMB Owner.",
      cta: { text: "Get Started Right", color: "from-[#800080] to-[#00FFFF]", href: "/business-ops" },
      miniCta: { text: "Compare Features →", href: "https://www.example.com/comparison" },
      calculator: { text: "Estimate Your ROI", href: "https://typeform.com/to/roi-calc" }
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Find Your Perfect AI Suite" 
          subtitle="Transform your business with our specialized AI solutions tailored to your unique needs."
        />
        
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {suites.map((suite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex-1 min-w-[320px]"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`px-4 py-1 rounded-full text-sm font-bold shadow-lg ${suite.badge.color}`}>
                  {suite.badge.text}
                </div>
              </div>
              
              {/* Card */}
              <div className="h-full glassmorphism-container border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col p-6 rounded-2xl shadow-lg">
                {/* Card Title */}
                <div className="text-center mb-2">
                  <span className="inline-block text-base font-bold text-white bg-gradient-to-r from-purple-700 to-cyan-400 px-4 py-1 rounded-full mb-2" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: 1 }}>
                    {suite.cardTitle}
                  </span>
                </div>
                
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${suite.accentColor} bg-opacity-10 flex items-center justify-center`}>
                    {suite.icon}
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2 orbitron-glow">
                    {suite.headline}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4">
                    {suite.keyBenefit}
                  </p>
                  
                  {/* Pricing */}
                  <div className="flex flex-col items-center mb-2">
                    <span className="text-3xl font-orbitron font-bold text-white">
                      ${suite.price} <span className="text-base font-normal text-gray-400">one-time</span>
                    </span>
                    <span className="text-base text-gray-400 mt-1">
                      +${suite.maintenance}/mo optimization
                    </span>
                  </div>
                  <div className="text-sm text-purple-300 font-bold mb-1">
                    {suite.roi}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    {suite.social}
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-4 mb-6">
                  {suite.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <i className={`${feature.icon} text-lg text-purple-400`} />
                      <span className="text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={suite.cta.href}
                    className={`w-full block text-center px-6 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r ${suite.cta.color} shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/40 ultra-cta-glow pulse-cta mb-1`}
                  >
                    {suite.cta.text}
                  </a>
                  <a
                    href={suite.href}
                    className="w-full faded-cta-btn text-center px-6 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/20 hover:bg-gradient-to-r hover:from-purple-700/30 hover:to-cyan-400/20 hover:border-purple-400 hover:text-purple-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-md flex items-center justify-center gap-2 ultra-cta-fade"
                  >
                    <span className="opacity-80">
                      <i className="fa fa-info-circle mr-2 text-purple-300 text-xl" />
                      See Info
                    </span>
                  </a>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <a href={suite.miniCta.href} className="text-sm text-gray-300 underline hover:text-purple-400 transition-colors">
                    {suite.miniCta.text}
                  </a>
                  <a href={suite.calculator.href} className="text-sm text-gray-300 underline hover:text-purple-400 transition-colors animate-glow-underline">
                    {suite.calculator.text}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signal */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center mt-6 text-white">
          <span>Trusted by 100+ businesses in SA and UAE. Results in 14–30 days or your money back.</span>
          <span>
            <img src="https://flagcdn.com/za.svg" alt="SA" width={28} height={18} loading="lazy" className="inline rounded shadow-md mx-1 transition-opacity duration-1000" />
            <img src="https://flagcdn.com/ae.svg" alt="UAE" width={28} height={18} loading="lazy" className="inline rounded shadow-md mx-1 transition-opacity duration-1000" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users,
  Bot,
  Zap,
  CheckCircle,
  Info,
  ArrowRight
} from 'lucide-react';
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

  // Typewriter effect for headline
  const [typewriter, setTypewriter] = React.useState("");
  const typewriterText = "Need a Tailored Solution?";
  React.useEffect(() => {
    let i = 0;
    setTypewriter("");
    const interval = setInterval(() => {
      setTypewriter((prev) => prev + typewriterText[i]);
      i++;
      if (i >= typewriterText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

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
      social: "‘Doubled my efficiency in 2 weeks’ – Sarah, SA SMB Owner.",
      cta: { text: "Get Started Right", color: "from-[#800080] to-[#00FFFF]", href: "/business-ops" },
      miniCta: { text: "Compare Features →", href: "https://www.example.com/comparison" },
      calculator: { text: "Estimate Your ROI", href: "https://typeform.com/to/roi-calc" }
    }
  ];

  // Countdown Timer for urgency
  const [countdown, setCountdown] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setCountdown(Math.max(0, Math.floor((precisionSuite.countdownDeadline - now) / 1000)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function formatCountdown(seconds: number) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d > 0 ? d + 'd ' : ''}${h}h ${m}m ${s}s`;
  }

  return (
    <section className="py-32 relative overflow-hidden" id="pricing" style={{ background: "linear-gradient(to bottom, #0F0C29, #302B63, #24243E)" }}>
      {/* Particle background can be added here if desired */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Section for Pricing */}
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
                <div className={`px-4 py-1 rounded-full text-sm font-bold shadow-lg ${suite.badge.color}`}>{suite.badge.text}</div>
              </div>
              {/* Card */}
              <div className="h-full glassmorphism-container border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col p-6 rounded-2xl shadow-lg">
                {/* Card Title */}
                <div className="text-center mb-2">
                  <span className="inline-block text-base font-bold text-white bg-gradient-to-r from-purple-700 to-cyan-400 px-4 py-1 rounded-full mb-2" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: 1 }}>{suite.cardTitle}</span>
                </div>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${suite.accentColor} bg-opacity-10 flex items-center justify-center`}>{suite.icon}</div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2 orbitron-glow" style={{ fontFamily: 'Orbitron, sans-serif' }}>{suite.headline}</h3>
                  <p className="text-lg text-gray-300 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.keyBenefit}</p>
                  {/* Pricing */}
                  <div className="flex flex-col items-center mb-2">
                    <span className="text-3xl font-orbitron font-bold text-white">${suite.price} <span className="text-base font-normal text-gray-400">one-time</span></span>
                    <span className="text-base text-gray-400 mt-1">
                      +${suite.maintenance}/mo optimization
                      <span className="relative group ml-2">
                        <span className="underline cursor-help" tabIndex={0} aria-describedby={`maintenance-tooltip-${index}`}>?</span>
                        <span id={`maintenance-tooltip-${index}`} className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-white/10 text-gray-200 rounded-lg border border-purple-500 text-xs w-56 pointer-events-none z-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Includes updates, retraining, bug fixing, and usage analytics reporting.
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="text-sm text-purple-300 font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.roi}</div>
                  <div className="text-xs text-gray-400 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.social}</div>
                </div>
                {/* Features */}
                <div className="space-y-4 mb-6">
                  {suite.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <i className={`${feature.icon} text-lg text-purple-400`} aria-hidden="true"></i>
                      <span className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
                {/* CTAs */}
                <div className="flex flex-col gap-3 mt-2">
                  <a
                    href={suite.cta.href}
                    className={`w-full block text-center px-6 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r ${suite.cta.color} shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/40 ultra-cta-glow pulse-cta mb-1`}
                    aria-label={`Get started with ${suite.name}`}
                    tabIndex={0}
                    style={{ letterSpacing: 1.2, fontFamily: 'Poppins, Orbitron, sans-serif', fontWeight: 700, fontSize: 20 }}
                  >
                    Get Started Now
                  </a>
                  <a
                    href={suite.href}
                    className="w-full faded-cta-btn text-center px-6 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/20 hover:bg-gradient-to-r hover:from-purple-700/30 hover:to-cyan-400/20 hover:border-purple-400 hover:text-purple-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-md flex items-center justify-center gap-2 ultra-cta-fade"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: 0.5 }}
                    aria-label={`See more info about ${suite.name}`}
                    tabIndex={0}
                  >
                    <span className="opacity-80"><i className="fa fa-info-circle mr-2 text-purple-300 text-xl" aria-hidden="true"></i>See Info</span>
                  </a>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <a href={suite.miniCta.href} className="text-sm text-gray-300 underline hover:text-purple-400 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.miniCta.text}</a>
                  <a href={suite.calculator.href} className="text-sm text-gray-300 underline hover:text-purple-400 transition-colors animate-glow-underline" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.calculator.text}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Precision Implementation Suite Square Card */}
        <div className="w-full flex flex-col items-center justify-center fade-in-on-scroll mb-16">
          <div className="w-full max-w-6xl bg-gradient-to-br from-[#1a1333] to-[#1e2746] rounded-3xl shadow-2xl border border-white/10 px-8 py-12 md:px-20 md:py-16 flex flex-col items-center" style={{minHeight:'420px'}}>
            {/* Typewriter Headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 orbitron-glow" style={{ fontFamily: 'Orbitron, sans-serif', minHeight: '3.5rem', letterSpacing: 1.2 }}>
              {typewriter}
              <span className="border-r-2 border-white ml-1 animate-pulse" style={{display:typewriter.length < typewriterText.length ? 'inline-block':'none',height:'2.5rem'}}></span>
            </h2>
            <div className="text-2xl md:text-3xl font-bold text-white text-center mb-2 orbitron-glow" style={{ fontFamily: 'Orbitron, sans-serif' }}>{precisionSuite.headline}</div>
            <div className="text-lg md:text-xl text-purple-200 font-semibold mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>{precisionSuite.subheadline}</div>
            <div className="text-base text-gray-300 mb-6 text-center max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>{precisionSuite.subtext}</div>
            {/* Steps Inline */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 w-full justify-center">
              {precisionSuite.steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center flex-1 bg-white/5 rounded-xl p-4 shadow-sm min-w-[160px] max-w-xs mx-auto">
                  <i className={`${step.icon} text-3xl md:text-4xl text-[#a259ff] mb-2`} aria-hidden="true"></i>
                  <div className="font-bold text-white text-base md:text-lg mb-1 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>{step.title}</div>
                  <div className="text-xs md:text-sm text-gray-300 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>{step.text}</div>
                </div>
              ))}
            </div>
            {/* Features */}
            <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 w-full max-w-3xl mx-auto">
              {precisionSuite.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200 text-sm md:text-base"><i className="fa fa-check-circle text-[#00FFFF]" aria-hidden="true"></i>{feature}</li>
              ))}
            </ul>
            {/* Annotations */}
            <div className="mb-4 flex flex-col md:flex-row gap-2 justify-center">
              {precisionSuite.annotations.map((note, i) => (
                <span key={i} className="text-xs md:text-sm text-purple-300 font-semibold bg-white/5 rounded px-3 py-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{note}</span>
              ))}
            </div>
            {/* Pricing & CTA */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-3xl mx-auto mt-4 gap-6">
              <div className="mb-4 md:mb-0">
                <div className="text-2xl md:text-3xl font-bold text-white font-orbitron">${precisionSuite.price} <span className="text-base font-normal text-gray-400">one-time</span></div>
                <div className="text-base text-gray-400 mt-1">+${precisionSuite.maintenance}/mo optimization</div>
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                <a
                  href={precisionSuite.cta.href}
                  className="px-8 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-[#800080] to-[#00BFFF] shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/40 ultra-cta-glow pulse-cta text-center mb-1 animate-pulse"
                  style={{ letterSpacing: 1.2, fontFamily: 'Poppins, Orbitron, sans-serif', fontWeight: 700, fontSize: 20 }}
                  aria-label="Get started with Precision Implementation Suite"
                  tabIndex={0}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {precisionSuite.cta.text}
                </a>
                <div className="flex gap-3">
                  <a href={precisionSuite.learnMore.href} className="text-sm text-blue-300 underline hover:text-purple-400 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }} target="_blank" rel="noopener noreferrer">{precisionSuite.learnMore.text}</a>
                </div>
              </div>
            </div>
            {/* Urgency & Countdown */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-2 justify-center">
              <span className="text-sm text-pink-400 font-bold animate-pulse" style={{ fontFamily: 'Orbitron, sans-serif' }}>{precisionSuite.urgency}</span>
              <span className="text-xs text-white bg-gradient-to-r from-[#800080] to-[#00BFFF] px-3 py-1 rounded-full font-mono ml-0 md:ml-2 animate-glow-underline">
                {countdown > 0 ? `⏳ ${formatCountdown(countdown)}` : '⏳ 0h 0m 0s'}
              </span>
            </div>
          </div>
        </div>
        {/* Duplicate section title and subtitle removed above */}
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
                <div className={`px-4 py-1 rounded-full text-sm font-bold shadow-lg ${suite.badge.color}`}>{suite.badge.text}</div>
              </div>
              {/* Card */}
              <div className="h-full glassmorphism-container border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col p-6 rounded-2xl shadow-lg">
                {/* Card Title */}
                <div className="text-center mb-2">
                  <span className="inline-block text-base font-bold text-white bg-gradient-to-r from-purple-700 to-cyan-400 px-4 py-1 rounded-full mb-2" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: 1 }}>{suite.cardTitle}</span>
                </div>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${suite.accentColor} bg-opacity-10 flex items-center justify-center`}>{suite.icon}</div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2 orbitron-glow" style={{ fontFamily: 'Orbitron, sans-serif' }}>{suite.headline}</h3>
                  <p className="text-lg text-gray-300 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.keyBenefit}</p>
                  {/* Pricing */}
                  <div className="flex flex-col items-center mb-2">
                    <span className="text-3xl font-orbitron font-bold text-white">${suite.price} <span className="text-base font-normal text-gray-400">one-time</span></span>
                    <span className="text-base text-gray-400 mt-1">
                      +${suite.maintenance}/mo optimization
                      <span className="relative group ml-2">
                        <span className="underline cursor-help" tabIndex={0} aria-describedby={`maintenance-tooltip-${index}`}>?</span>
                        <span id={`maintenance-tooltip-${index}`} className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-white/10 text-gray-200 rounded-lg border border-purple-500 text-xs w-56 pointer-events-none z-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Includes updates, retraining, bug fixing, and usage analytics reporting.
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="text-sm text-purple-300 font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.roi}</div>
                  <div className="text-xs text-gray-400 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.social}</div>
                </div>
                {/* Features */}
                <div className="space-y-4 mb-6">
                  {suite.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <i className={`${feature.icon} text-lg text-purple-400`} aria-hidden="true"></i>
                      <span className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
                {/* CTAs */}
                <div className="flex flex-col gap-3 mt-2">
                  <a
                    href={suite.cta.href}
                    className={`w-full block text-center px-6 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r ${suite.cta.color} shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/40 ultra-cta-glow pulse-cta mb-1`}
                    aria-label={`Get started with ${suite.name}`}
                    tabIndex={0}
                    style={{ letterSpacing: 1.2, fontFamily: 'Poppins, Orbitron, sans-serif', fontWeight: 700, fontSize: 20 }}
                  >
                    Get Started Now
                  </a>
                  <a
                    href={suite.href}
                    className="w-full faded-cta-btn text-center px-6 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/20 hover:bg-gradient-to-r hover:from-purple-700/30 hover:to-cyan-400/20 hover:border-purple-400 hover:text-purple-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-md flex items-center justify-center gap-2 ultra-cta-fade"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: 0.5 }}
                    aria-label={`See more info about ${suite.name}`}
                    tabIndex={0}
                  >
                    <span className="opacity-80"><i className="fa fa-info-circle mr-2 text-purple-300 text-xl" aria-hidden="true"></i>See Info</span>
                  </a>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <a href={suite.miniCta.href} className="text-sm text-gray-300 underline hover:text-purple-400 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.miniCta.text}</a>
                  <a href={suite.calculator.href} className="text-sm text-gray-300 underline hover:text-purple-400 transition-colors animate-glow-underline" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.calculator.text}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom AI Development */}
        {/*}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#800080] to-[#4B0082] blur-xl opacity-30"></div>
          <div className="glass-card relative border-2 border-[#800080]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-orbitron font-bold mb-4">Need a Tailored Solution?</h3>
                <p className="text-xl mb-6">Custom AI starting at $1,500. Boost conversions, cut errors, and more.</p>
                
                <div className="space-y-4">
                  {[
                    "AI Sales Chatbot: Boosts conversions by 15%",
                    "AI Compliance Bot: Cuts errors by 90%",
                    "AI Lead Qualification: Improves lead quality by 30%"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#800080]" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="mt-8 bg-gradient-to-r from-[#800080] to-[#4B0082] hover:shadow-lg hover:shadow-[#800080]/25"
                  onClick={() => window.location.href = '/custom-ai-solutions'}
                >
                  Book a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="glass-card !bg-white/5">
                <div className="absolute -top-4 right-4">
                  <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                    First 5 clients get 10% off setup
                  </div>
                </div>
                
                <h4 className="text-lg font-orbitron font-bold mb-4">Our 4-Step Process</h4>
                <div className="space-y-4">
                  {[
                    "Share Needs → Discovery Call",
                    "Build & Test → Launch & Grow",
                    "Results in 14–30 days or your money back"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#800080]/20 flex items-center justify-center">
                        <span className="text-sm font-medium">{i + 1}</span>
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div> /*}

       {/* Final CTA Section removed as per user request */}
        {/* Trust Signal */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center mt-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span>Trusted by 100+ businesses in SA and UAE. Results in 14–30 days or your money back.</span>
          <span>
            <img src="https://flagcdn.com/za.svg" alt="SA" width={28} height={18} loading="lazy" className="inline rounded shadow-md mx-1 transition-opacity duration-1000" />
            <img src="https://flagcdn.com/ae.svg" alt="UAE" width={28} height={18} loading="lazy" className="inline rounded shadow-md mx-1 transition-opacity duration-1000" />
          </span>
        </div>
      {/* Inline style for faded CTA button */}
      <style>{`
        .faded-cta-btn {
          box-shadow: 0 2px 24px 0 rgba(128,0,128,0.10);
          transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s, transform 0.2s;
          filter: blur(0.1px) saturate(1.1);
        }
        .faded-cta-btn:hover, .faded-cta-btn:focus {
          background: linear-gradient(90deg, #a259ff22 0%, #00ffff22 100%);
          color: #a259ff;
          border-color: #a259ff;
          box-shadow: 0 4px 32px 0 #a259ff55, 0 0 0 2px #00ffff33;
          transform: scale(1.045);
        }
        .ultra-cta-glow {
          box-shadow: 0 0 32px 4px #a259ff55, 0 0 8px 2px #00ffff55;
          animation: ultra-glow 2.5s ease-in-out infinite alternate;
        }
        @keyframes ultra-glow {
          0% { box-shadow: 0 0 16px 2px #a259ff55, 0 0 4px 1px #00ffff33; }
          100% { box-shadow: 0 0 48px 8px #a259ff99, 0 0 16px 4px #00ffff99; }
        }
        .ultra-cta-fade {
          filter: blur(0.1px) brightness(1.08);
        }
      `}</style>
      </div>
    </section>
  );
};

export default Pricing;
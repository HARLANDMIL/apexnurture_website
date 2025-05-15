
import React, { useEffect, useRef, useState } from 'react';

// Font Awesome and Vanilla Tilt should be included in index.html as per project setup

const deadline = new Date('2025-05-17T16:29:00+02:00').getTime();

const howItWorks = [
  { icon: 'fa-search', title: 'In-Depth Business Audit', desc: 'We analyze your processes for 2 weeks to pinpoint inefficiencies.' },
  { icon: 'fa-lightbulb', title: 'Identify Automation Opportunities', desc: 'We uncover high-impact areas where AI can save time and boost revenue.' },
  { icon: 'fa-code', title: 'Build Custom AI Agents', desc: 'Our team designs and develops tailored AI agents to solve your challenges.' },
  { icon: 'fa-rocket', title: 'Deploy and Optimize in 30 Days', desc: 'We integrate your AI agents, provide training, and optimize for results.' },
];

const precisionFeatures = [
  { icon: 'fa-file-alt', text: 'Comprehensive Audit Report: Detailed 15-page PDF with actionable insights.' },
  { icon: 'fa-robot', text: 'Custom AI Agents: 2–4 tailored agents (e.g., support bot, lead nurturer).' },
  { icon: 'fa-plug', text: 'Seamless Integration: Fully integrated into your existing systems.' },
  { icon: 'fa-chart-line', text: 'Real-Time Analytics Dashboard: Track performance and ROI live.' },
  { icon: 'fa-tools', text: 'Ongoing Optimization: Monthly updates and fine-tuning for sustained results.' },
];

const precisionExamples = [
  { title: 'For Coaches', desc: 'Automate lead nurturing to book 3× more calls.' },
  { title: 'For Recruitment Agencies', desc: 'Screen CVs 70% faster with an AI agent.' },
  { title: 'For Small Businesses', desc: 'Resolve 50% of customer inquiries instantly.' },
];

const otherSuites = [
  {
    name: 'Lead Generation Suite',
    title: 'Convert Leads into Clients Faster with AI',
    subtitle: 'Boost Booked Calls by 3x - 5x in 30 Days',
    price: '$2,500 setup + $550/month',
    features: [
      'AI Appointment Setter: Automate Booking and Triple Your Calls',
      'Never Miss a Lead Again',
      'Content Repurposer: Generate 10+ Lead Magnets Instantly',
      'Save Hours on Content Creation',
      'Auto-Follow-Up: Increase Response Rates by 40% Automatically',
      'Keep Leads Engaged 24/7',
      'CRM Dashboard: Monitor Performance in Real-Time',
      'Make Data-Driven Decisions',
    ],
    annotations: [
      'Pays for Itself After Your First Client—Guaranteed',
      'Join 50+ Consultants Already Scaling Their Business',
    ],
    cta: '/lead-to-client',
    secondary: [
      { text: 'See Demo →', link: '/lead-to-client#demo' },
      { text: 'Estimate Your ROI', link: '/lead-to-client#roi' },
      { text: 'Book a Free Strategy Call', link: '/book-call' },
    ],
  },
  {
    name: 'Recruitment Suite',
    title: 'Slash Recruitment Time by 30% with AI',
    subtitle: 'Cut Screening Time by 70%',
    price: '$3,000 setup + $700/month',
    features: [
      'CV Screening Bot: Reduce Screening Time by 70%',
      'Screen CVs in Minutes, Not Hours',
      'Follow-Up Agent: Decrease Candidate Drop-Off by 40%',
      'Keep Candidates Engaged Automatically',
      'Data Enricher: Source 50+ Qualified Profiles Monthly',
      'Find Top Talent Faster',
      'Performance Tracker: Monitor Placement Success in Real-Time',
      'Optimize Your Recruitment Process',
    ],
    annotations: [
      'Get Real-Time Updates and AI Optimization Included',
      'Trusted by 12+ Top Recruitment Agencies',
    ],
    cta: '/recruitment-automation',
    secondary: [
      { text: 'View Agent Flow →', link: '/recruitment-automation#flow' },
      { text: 'Estimate Your ROI', link: '/recruitment-automation#roi' },
      { text: 'Book a Free Strategy Call', link: '/book-call' },
    ],
    badge: 'Most Popular',
  },
  {
    name: 'Small Business OPS Suite',
    title: 'Reclaim 20+ Hours a Week with AI Automation',
    subtitle: 'Streamline Operations and Save $2,000/Month',
    price: '$3,500 setup + $700/month',
    features: [
      'AI Support Bot: Resolve 50% of Inquiries Instantly',
      'Free Up Your Team for High-Value Tasks',
      'Quotation Generator: Create Quotes in Under 2 Minutes',
      'Close Deals Faster with Instant Quotes',
      'Task Scheduler: Reduce Delays by 30%',
      'Keep Projects on Track Automatically',
      'Ops Dashboard: Track Efficiency Gains in Real-Time',
      'Make Data-Driven Operational Decisions',
    ],
    annotations: [
      'Save $2,000/Month in Admin Costs',
      '"Doubled My Efficiency in 2 Weeks" – Sarah, Small Business Owner',
    ],
    cta: '/business-ops',
    secondary: [
      { text: 'Compare Features →', link: '/business-ops#compare' },
      { text: 'Estimate Your ROI', link: '/business-ops#roi' },
      { text: 'Book a Free Strategy Call', link: '/book-call' },
    ],
  },
];

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 0, minutes: 0 });
  const precisionRef = useRef<HTMLDivElement>(null);

  // Countdown Timer
  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const total = deadline - now;
      const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((total / (1000 * 60)) % 60));
      setTimeLeft({ days, hours, minutes });
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  // Vanilla Tilt 3D effect
  useEffect(() => {
    if (window.VanillaTilt && precisionRef.current) {
      window.VanillaTilt.init(document.querySelectorAll('.suite-card, .step-card'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      });
    }
  }, []);

  return (
    <section className="pricing-section relative flex flex-col items-center py-16 px-4 md:px-0 fade-in-on-scroll" style={{ background: 'linear-gradient(to bottom, #0F0C29, #302B63, #24243E)' }}>
      {/* Particle Background (orbiting 5 purple dots) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-4 h-4 rounded-full bg-purple-500 opacity-20 animate-orbit orbit-${i}`}
            style={{ animationDuration: '15s' }}
          ></span>
        ))}
      </div>
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-[36px] md:text-[36px] font-bold text-white text-center orbitron-glow mb-8 fade-in" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Find Your AI Suite
        </h1>
        {/* Precision AI Implementation Suite Subsection */}
        <div ref={precisionRef} className="suite-card glassmorphism-container w-full mb-12 p-8 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-[28px] md:text-[28px] font-bold text-white text-center orbitron-glow mb-2 fade-in" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Precision AI Implementation Suite
          </h2>
          <div className="text-[20px] md:text-[20px] text-gray-300 text-center mb-2 fade-in" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: 800 }}>
            Custom AI Agents & Automations Tailored to Your Business Needs
          </div>
          <div className="text-[16px] md:text-[16px] text-gray-300 text-center mb-6 fade-in" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: 800, lineHeight: 1.6 }}>
            We audit your business processes for 2 weeks, identify inefficiencies, build custom AI agents and automations to solve those problems, and deploy them within 30 days—not months.
          </div>
          {/* How It Works */}
          <div className="w-full mb-8">
            <h3 className="text-[24px] font-bold text-white text-center orbitron-glow mb-4 fade-in" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              How It Works: Your Path to AI-Powered Efficiency
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {howItWorks.map((step, idx) => (
                <div
                  key={step.title}
                  className="step-card glassmorphism-card flex-1 min-w-[180px] max-w-xs mx-auto p-6 rounded-xl border border-purple-500/40 backdrop-blur-md bg-white/10 mb-4 md:mb-0 fade-in-steps"
                  tabIndex={0}
                  aria-label={step.title}
                  style={{ animationDelay: `${0.3 * idx}s` }}
                >
                  <i className={`fa ${step.icon} text-3xl text-purple-500 mb-3 step-icon-glow`}></i>
                  <div className="text-white text-center font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{step.title}</div>
                  <div className="text-gray-300 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15 }}>{step.desc}</div>
                  {idx < howItWorks.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Pricing and Maintenance */}
          <div className="w-full mb-8 text-center">
            <h3 className="text-[24px] font-bold text-white orbitron-glow mb-2 fade-in" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Pricing Designed for Maximum ROI
            </h3>
            <div className="text-white text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="font-bold">One-Time Setup Fee:</span> $5,000 <span className="text-gray-400">(Includes audit, custom AI agent development, and deployment)</span>
            </div>
            <div className="text-white text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="font-bold">Monthly Maintenance & Optimization:</span> $900 <span className="text-gray-400">(Includes updates, retraining, priority support)</span>
            </div>
            <div className="text-purple-300 text-base mb-1 fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Typically Pays for Itself Within 1 Month Through Efficiency Gains
            </div>
            <div className="text-purple-300 text-base fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Trusted by 20+ Businesses for Tailored AI Solutions
            </div>
          </div>
          {/* Key Features */}
          <div className="w-full mb-8">
            <h3 className="text-[24px] font-bold text-white orbitron-glow mb-4 fade-in" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              What You Get with the Precision AI Suite
            </h3>
            <ul className="list-none flex flex-col gap-3 fade-in">
              {precisionFeatures.map((f, idx) => (
                <li key={f.text} className="flex items-center gap-3 feature-item" style={{ animationDelay: `${0.2 * idx}s` }}>
                  <i className={`fa ${f.icon} text-purple-400 feature-icon-glow`}></i>
                  <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Examples of Use Cases */}
          <div className="w-full mb-8">
            <h3 className="text-[24px] font-bold text-white orbitron-glow mb-4 fade-in" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Examples of What We Can Do for You
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {precisionExamples.map((ex, idx) => (
                <div
                  key={ex.title}
                  className="example-card glassmorphism-card flex-1 min-w-[180px] max-w-xs mx-auto p-4 rounded-xl border border-purple-500/40 backdrop-blur-md bg-white/10 mb-4 md:mb-0 shimmer fade-in"
                  tabIndex={0}
                  aria-label={ex.title}
                  style={{ animationDelay: `${0.2 * idx}s` }}
                >
                  <div className="text-white text-center font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{ex.title}</div>
                  <div className="text-gray-300 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15 }}>{ex.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Urgency Element */}
          <div className="border-2 border-orange-400 p-6 rounded-xl text-white text-center font-bold animate-pulse-urgency mb-6 countdown neon-orange-glow" style={{ fontFamily: 'Poppins, sans-serif', textShadow: '0 0 10px rgba(255, 165, 0, 0.7)' }}>
            Limited Spots Available—Sign Up Before May 17, 2025!<br />
            <span className="block mt-2 text-lg">
              Offer Ends in {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes!
            </span>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full mt-2 fade-in" style={{ padding: 20 }}>
            <a
              href="https://apexnurture.com/get-started"
              className="cta-button px-10 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-purple-800 via-purple-600 to-cyan-400 shadow-xl transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 pulse"
              aria-label="Get started with Precision AI Implementation Suite"
              style={{ position: 'relative', overflow: 'hidden', fontFamily: 'Poppins, sans-serif' }}
            >
              Get Started Now
            </a>
            <a
              href="/precision-ai-program"
              className="text-[14px] text-gray-300 underline underline-animation font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              aria-label="Learn more about Precision AI Implementation Suite"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Other Tailored Suites Subheading */}
        <h2 className="text-[28px] md:text-[28px] font-bold text-white text-center orbitron-glow mb-8 fade-in" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Other Tailored Suites
        </h2>
        {/* Other Suites Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {otherSuites.map((suite, idx) => (
            <div key={suite.name} className={`suite-card glassmorphism-card p-8 rounded-2xl shadow-lg flex flex-col items-center relative fade-in`} tabIndex={0} aria-label={suite.name} style={{ animationDelay: `${0.2 * idx}s` }}>
              {suite.badge && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-cyan-400 text-white px-4 py-1 rounded-full font-bold text-xs shadow-lg pulse">{suite.badge}</span>
              )}
              <h3 className="text-[22px] font-bold text-white text-center mb-2 orbitron-glow" style={{ fontFamily: 'Orbitron, sans-serif' }}>{suite.title}</h3>
              <div className="text-[16px] text-gray-300 text-center mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.subtitle}</div>
              <div className="text-[16px] text-white text-center font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{suite.price}</div>
              <ul className="list-disc text-left text-gray-300 mb-2 pl-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {suite.features.map((f, i) => (
                  <li key={f + i}>{f}</li>
                ))}
              </ul>
              <div className="text-purple-300 text-xs mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {suite.annotations.map((a, i) => (
                  <div key={a + i}>{a}</div>
                ))}
              </div>
              <a href={suite.cta} className="cta-button px-6 py-2 rounded-full font-bold text-white text-base bg-gradient-to-r from-purple-800 via-purple-600 to-cyan-400 shadow-xl transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 pulse mb-2" aria-label={`Get started with ${suite.name}`}>Get Started Now</a>
              <div className="flex flex-wrap gap-2 justify-center">
                {suite.secondary.map((s, i) => (
                  <a key={s.text + i} href={s.link} className="text-[14px] text-gray-300 underline underline-animation font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.text}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Additional Elements Below the Cards */}
        <div className="flex flex-col items-center gap-4 mb-4 fade-in" style={{ padding: 20 }}>
          <a href="/compare" className="text-[14px] text-gray-300 underline underline-animation font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Compare All Plans</a>
          <a href="/book-call" className="cta-button px-8 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-purple-800 via-purple-600 to-cyan-400 shadow-xl transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 pulse" aria-label="Book a Free Strategy Call">Not Sure Which Suite Fits? Book a Free Strategy Call</a>
        </div>
      </div>
      {/* Inline critical CSS for shimmer, neon, fade-in, etc. */}
      <style>{`
        .glassmorphism-container, .glassmorphism-card {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 15px;
          position: relative;
        }
        .shimmer {
          background: linear-gradient(45deg, rgba(128,0,128,0.1), rgba(0,255,255,0.1), rgba(128,0,128,0.1));
          background-size: 200% 200%;
          animation: shimmer 5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .orbitron-glow {
          text-shadow: 0 0 10px rgba(128,0,128,0.5), 0 0 20px rgba(128,0,128,0.3);
        }
        .fade-in { opacity: 0; animation: fadeIn 0.5s forwards; }
        .fade-in-steps { opacity: 0; animation: fadeIn 0.5s forwards; }
        .feature-item { opacity: 0; animation: fadeIn 0.5s forwards; }
        .example-card { opacity: 0; animation: fadeIn 0.5s forwards; }
        @keyframes fadeIn { to { opacity: 1; } }
        .step-icon-glow, .feature-icon-glow {
          filter: drop-shadow(0 0 5px rgba(128,0,128,0.6));
        }
        .step-connector {
          width: 3px; height: 40px; background: linear-gradient(180deg, #800080, #00FFFF);
          margin: 0 auto; border-radius: 2px; opacity: 0.7;
        }
        .pulse { animation: pulse 1.8s infinite; }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 #00ffaa55; }
          70% { box-shadow: 0 0 0 10px #00ffaa00; }
          100% { box-shadow: 0 0 0 0 #00ffaa00; }
        }
        .cta-button {
          background: linear-gradient(90deg, #800080 0%, #00FFFF 100%);
          font-weight: bold;
          font-size: 18px;
          color: #fff;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .cta-button:focus {
          outline: 2px solid #00ffaa;
        }
        .underline-animation {
          position: relative;
        }
        .underline-animation::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, #800080, #00ffaa);
          animation: underlineGlow 2s infinite alternate;
        }
        @keyframes underlineGlow {
          0% { opacity: 0.5; }
          100% { opacity: 1; box-shadow: 0 0 8px #00ffaa; }
        }
        .neon-orange-glow {
          box-shadow: 0 0 10px 2px rgba(255,165,0,0.7);
        }
        .animate-pulse-urgency {
          animation: pulseUrgency 2s infinite;
        }
        @keyframes pulseUrgency {
          0% { box-shadow: 0 0 0 0 #ffa50055; }
          70% { box-shadow: 0 0 0 10px #ffa50000; }
          100% { box-shadow: 0 0 0 0 #ffa50000; }
        }
        /* Orbiting dots */
        @keyframes orbit0 { 0% { transform: rotate(0deg) translateX(120px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); } }
        @keyframes orbit1 { 0% { transform: rotate(72deg) translateX(120px) rotate(0deg); } 100% { transform: rotate(432deg) translateX(120px) rotate(-360deg); } }
        @keyframes orbit2 { 0% { transform: rotate(144deg) translateX(120px) rotate(0deg); } 100% { transform: rotate(504deg) translateX(120px) rotate(-360deg); } }
        @keyframes orbit3 { 0% { transform: rotate(216deg) translateX(120px) rotate(0deg); } 100% { transform: rotate(576deg) translateX(120px) rotate(-360deg); } }
        @keyframes orbit4 { 0% { transform: rotate(288deg) translateX(120px) rotate(0deg); } 100% { transform: rotate(648deg) translateX(120px) rotate(-360deg); } }
        .orbit-0 { animation: orbit0 15s linear infinite; }
        .orbit-1 { animation: orbit1 15s linear infinite; }
        .orbit-2 { animation: orbit2 15s linear infinite; }
        .orbit-3 { animation: orbit3 15s linear infinite; }
        .orbit-4 { animation: orbit4 15s linear infinite; }
        @media (max-width: 768px) {
          .flex-row { flex-direction: column !important; }
          .step-card, .example-card, .suite-card { min-width: 100px; max-width: 100%; }
          .text-[36px] { font-size: 32px !important; }
          .text-[28px] { font-size: 24px !important; }
          .text-[20px] { font-size: 18px !important; }
          .text-[16px] { font-size: 14px !important; }
        }
      `}</style>
      {/* SEO Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Precision AI Implementation Suite",
          "description": "Custom AI agents and automations tailored to your business needs, deployed in 30 days.",
          "provider": { "@type": "Organization", "name": "Apex Nurture" },
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "5000", "name": "Precision AI Setup" }
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Lead Generation Suite",
          "description": "Boost booked calls by 3x - 5x with AI-driven lead nurturing.",
          "provider": { "@type": "Organization", "name": "Apex Nurture" },
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "2500", "name": "Lead Generation Setup" }
        }
      ]` }} />
    </section>
  );
};

export default Pricing;

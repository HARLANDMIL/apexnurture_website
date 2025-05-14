import React, { useEffect, useState } from "react";
import "../index.css";

const deadline = new Date("2025-05-16T14:25:00+02:00").getTime();

function getTimeRemaining() {
  const now = new Date().getTime();
  const total = deadline - now;
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((total / (1000 * 60)) % 60));
  return { days, hours, minutes };
}

const phases = [
  {
    icon: "fa-search",
    title: "AI Growth Blueprint™",
    text: "We audit your workflows (sales, support, marketing, etc.) in a 60-minute discovery call and deliver a custom AI Growth Blueprint with actionable solutions and projected ROI.",
    deliverable: "10–15 page PDF + Loom walkthrough + Quick Wins Checklist.",
    timeline: "Completed in 7 days.",
  },
  {
    icon: "fa-rocket",
    title: "Rapid AI Deployment™",
    text: "We build and integrate 2–4 AI agents (e.g., AI SDR, support bot) into your systems using no-code tools like Zapier and OpenAI APIs, with full onboarding in 7–14 days.",
    deliverable: "Live AI agents, user guide, 14-day priority support, First Results Report.",
    timeline: "7–14 days post-approval.",
  },
  {
    icon: "fa-chart-line",
    title: "AI Performance Boost™",
    text: "We monitor, optimize, and scale your AI agents with monthly reviews, new use-case suggestions, and dedicated support to ensure long-term ROI.",
    deliverable: "Monthly performance report, ongoing support, quarterly strategy session.",
    timeline: "Ongoing monthly service.",
  },
];

const PrecisionAIProgram: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  // Referrer check for access control
  useEffect(() => {
    // Commented out access control for debugging/visibility
    // const allowed = [
    //   "apexnurture.com",
    //   "lead-to-client",
    //   "recruitment-automation",
    //   "business-ops",
    // ];
    // const ref = document.referrer;
    // if (!allowed.some((a) => ref.includes(a))) {
    //   window.location.href = "https://www.apexnurture.com";
    // }
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000 * 60); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="tailored-solution relative min-h-screen flex flex-col items-center justify-start pt-10 pb-20 px-4 fade-in-on-scroll">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* You can reuse or extend your ParticleBackground component here */}
      </div>
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        {/* 1. Hero Area */}
        <section className="w-full text-center mb-10 p-8 md:p-16 fade-in-on-scroll">
          <h1 className="text-4xl md:text-[36px] font-bold text-white orbitron-glow mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Don’t Know How AI Can Transform Your Business?
          </h1>
          <h2 className="text-xl md:text-[20px] text-gray-300 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join the Precision AI Implementation Program and Unlock AI-Powered Growth in Just 7 Days.
          </h2>
          <p className="text-lg md:text-[18px] text-gray-300 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            We act as your AI transformation partner—auditing your business, identifying high-impact AI opportunities, and deploying tailored solutions that save time, boost revenue, and cut costs. Most clients see ROI in 14 days—or we refund you.
          </p>
        </section>
        {/* 2. Program Overview */}
        <section className="glassmorphism-container w-full mb-10 p-10 rounded-2xl fade-in-on-scroll">
          <h3 className="text-2xl font-bold text-white orbitron-glow mb-2 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Precision AI Implementation Program: Your Path to AI-Powered Success
          </h3>
          <p className="text-gray-300 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Pinpoint where AI can deliver the biggest impact for your business and implement tailored solutions to achieve measurable results in 14–30 days.
          </p>
        </section>
        {/* 3. 3-Phase Process Timeline */}
        <section className="w-full mb-10 fade-in-on-scroll">
          <div className="flex flex-col items-center gap-8">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="relative w-full flex flex-col md:flex-row items-center glassmorphism-card p-8 rounded-xl border border-white/20 backdrop-blur-md bg-white/10 mb-2">
                <div className="flex flex-col items-center md:items-start md:w-1/4 mb-4 md:mb-0">
                  <i className={`fa ${phase.icon} text-3xl text-purple-500 mb-2`}></i>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>{phase.title}</span>
                </div>
                <div className="md:w-3/4 text-left">
                  <p className="text-gray-300 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{phase.text}</p>
                  <div className="text-white text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}><b>Deliverable:</b> {phase.deliverable}</div>
                  <div className="text-purple-300 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}><b>Timeline:</b> {phase.timeline}</div>
                </div>
                {/* Timeline dot/connector */}
                {idx < phases.length - 1 && (
                  <span className="absolute left-1/2 top-full w-2 h-8 bg-gradient-to-b from-purple-500 to-transparent rounded-full animate-glow-timeline"></span>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* 4. Pricing Table */}
        <section className="glassmorphism-container w-full mb-10 p-8 rounded-2xl fade-in-on-scroll">
          <h4 className="text-xl font-bold text-white orbitron-glow mb-4 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Tailored Investment for Maximum ROI
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-white text-center border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-gradient-to-r from-purple-700 to-cyan-400">
                  <th className="p-2 rounded-l-lg">Phase</th>
                  <th className="p-2">Deliverable</th>
                  <th className="p-2 rounded-r-lg">Price (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="glassmorphism-card">
                  <td>AI Growth Blueprint™</td>
                  <td>Custom audit + AI roadmap</td>
                  <td>$397 (Free with Phase 2)</td>
                </tr>
                <tr className="glassmorphism-card">
                  <td>Rapid AI Deployment™</td>
                  <td>2–4 agents + integrations</td>
                  <td>$1,800–$5,000 (based on complexity)</td>
                </tr>
                <tr className="glassmorphism-card">
                  <td>AI Performance Boost™</td>
                  <td>Monthly optimization + support</td>
                  <td>$250–$700/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-gray-300 text-sm mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Pricing varies based on complexity (e.g., number of agents, integrations). Final quote provided after Phase 1.
          </div>
        </section>
        {/* 5. Trust Signals */}
        <section className="glassmorphism-container w-full mb-10 p-6 rounded-2xl flex flex-col items-center fade-in-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Trusted by 150+ Businesses in SA & UAE.
            </span>
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Featured in Tech Africa News.
            </span>
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Rated 4.9/5 by Clients for Fast ROI.
            </span>
            <span className="inline-block animate-spin-slow text-purple-400 neon-glow-badge px-4 py-1 rounded-full border border-purple-500 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <i className="fa fa-certificate mr-2"></i>Trusted Partner
            </span>
            <span className="ml-2">
              <span className="fi fi-za mr-1"></span>
              <span className="fi fi-ae"></span>
            </span>
          </div>
        </section>
        {/* 6. Guarantee */}
        <section className="w-full mb-10 fade-in-on-scroll">
          <div className="neon-highlight border-2 border-purple-500 p-6 rounded-xl text-white text-center font-bold animate-glow-3s" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Fast ROI Guarantee: If we don’t identify $5,000+ in savings or revenue opportunities in your AI Growth Blueprint™, we’ll refund your Phase 1 fee. Plus, see results in 14 days—or we’ll work for free until you do.
          </div>
        </section>
        {/* 7. Urgency Element */}
        <section className="w-full mb-10 fade-in-on-scroll">
          <div className="border-2 border-orange-400 p-6 rounded-xl text-white text-center font-bold animate-pulse-urgency" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Only 5 Spots Left This Month for Phase 1 at $397!<br />
            <span className="block mt-2 text-lg">
              Offer Ends in {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes!
            </span>
          </div>
        </section>
        {/* 8. CTA Section */}
        <section className="w-full fade-in-on-scroll">
          <div className="flex flex-col items-center p-10 rounded-2xl bg-gradient-to-r from-purple-900/60 to-cyan-700/60 animate-glow-bg-cta">
            <h5 className="text-2xl font-bold text-white orbitron-glow mb-2 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Ready to Unlock AI-Powered Growth?
            </h5>
            <p className="text-gray-300 text-center mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Join the Precision AI Implementation Program and see measurable results in as little as 14 days. Let’s transform your business—starting now.
            </p>
            <button
              className="cta-btn px-10 py-4 rounded-full font-bold text-white text-lg bg-gradient-to-r from-purple-700 to-cyan-400 shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 pulse-cta"
              aria-label="Get started with Precision AI Implementation Program"
              onMouseOver={e => (e.currentTarget.textContent = 'Start Today!')}
              onMouseOut={e => (e.currentTarget.textContent = 'Get Started Now')}
            >
              Get Started Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrecisionAIProgram;

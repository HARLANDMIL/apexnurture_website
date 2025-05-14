import React from "react";
import "../index.css";

const highlights = [
  {
    icon: "fa-search",
    title: "Audit Your Workflows in 7 Days",
  },
  {
    icon: "fa-rocket",
    title: "Deploy AI Agents in 14 Days",
  },
  {
    icon: "fa-shield-alt",
    title: "See ROI or Your Money Back",
  },
];

export const BriefOverview: React.FC = () => {
  return (
    <section className="brief-overview relative flex justify-center items-center py-10 px-4 md:px-0 fade-in-on-scroll">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* You can reuse or extend your ParticleBackground component here */}
      </div>
      <div className="relative z-10 w-full max-w-4xl glassmorphism-container flex flex-col items-center p-10 md:p-16 rounded-2xl shadow-lg">
        <h2
          className="text-3xl md:text-[30px] font-bold text-white text-center orbitron-glow mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Need a Custom AI Solution?
        </h2>
        <p
          className="text-lg md:text-[18px] text-gray-300 text-center mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          The Precision AI Implementation Program audits your business and deploys tailored AI agents to save time and boost revenue—fast.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center mb-8">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className="flex-1 glassmorphism-card flex flex-col items-center p-6 rounded-xl border border-white/20 backdrop-blur-md bg-white/10 min-w-[220px] mb-4 md:mb-0 fade-in-on-scroll"
            >
              <i className={`fa ${item.icon} text-3xl text-purple-500 mb-3`}></i>
              <span className="text-white text-center font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="text-white text-center mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Trusted by 150+ Businesses in SA & UAE.
        </div>
        <a
          href="/precision-ai-program"
          className="cta-btn px-8 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-purple-700 to-cyan-400 shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 pulse-cta"
          aria-label="Learn more about Precision AI Implementation Program"
        >
          Learn More &rarr;
        </a>
      </div>
    </section>
  );
};

export default BriefOverview;

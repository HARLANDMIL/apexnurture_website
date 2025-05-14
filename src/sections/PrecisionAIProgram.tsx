
import React, { useEffect, useState } from "react";
import "../index.css";

// Product schema for SEO
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Precision AI Implementation Program",
  "description": "A 3-phase, done-for-you AI implementation program for businesses: audit, deploy, and optimize custom AI agents for rapid ROI.",
  "brand": {
    "@type": "Brand",
    "name": "Apex Nurture"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "397",
    "availability": "https://schema.org/InStock",
    "url": "https://apexnurture.com/precision-ai-program"
  }
};

// Deadline: May 16, 2025, 17:06 SAST (UTC+2)
const deadline = new Date("2025-05-16T17:06:00+02:00").getTime();

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
    text: "We audit your business in a 60-minute call, pinpointing where AI can save time or boost revenue. You’ll get a tailored AI Growth Blueprint with a roadmap to success.",
    deliverables: [
      "Custom AI Growth Blueprint: 10–15 page PDF with actionable solutions.",
      "Loom Walkthrough: 15-minute video explaining your plan.",
      "Quick Wins Checklist: 3 immediate AI strategies to test now."
    ],
    outcome: "Discover $5,000+ in savings or revenue opportunities—or your money back.",
    timeline: "Done in 7 days."
  },
  {
    icon: "fa-rocket",
    title: "Rapid AI Deployment™",
    text: "We build and integrate 2–4 custom AI agents (e.g., AI SDR, support bot) into your systems, with full onboarding to get you started fast.",
    deliverables: [
      "Live AI Agents: Fully integrated into your workflows.",
      "User Guide: Step-by-step instructions + Loom video.",
      "14-Day Priority Support: We’re here to ensure success.",
      "First Results Report: See your early wins in 7 days."
    ],
    outcome: "Start seeing results in as little as 14 days.",
    timeline: "Deployed in 7–14 days."
  },
  {
    icon: "fa-chart-line",
    title: "AI Performance Boost™",
    text: "We monitor and optimize your AI agents monthly, ensuring they grow with your business and deliver lasting ROI.",
    deliverables: [
      "Monthly Performance Report: Track your gains with data.",
      "Ongoing Optimization: We fine-tune and add new automations.",
      "Quarterly Strategy Session: Plan your next AI wins.",
      "Dedicated Support: Email/Slack, 24-hour response."
    ],
    outcome: "Keep scaling your results with zero hassle.",
    timeline: "Ongoing monthly support."
  }
];

const PrecisionAIProgram: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  // Referrer check for access control (only allow from homepage, nav, or pricing links)
  useEffect(() => {
    // Only run access control in the browser (not during SSR or static build)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Allow direct navigation if user is already on the site (SPA navigation)
      // Only block if there is a referrer and it's from a different domain
      const ref = document.referrer;
      const isInternal = ref && (ref.includes('apexnurture.com') || ref.includes('lead-to-client') || ref.includes('recruitment-automation') || ref.includes('business-ops'));
      // If there is a referrer and it's NOT internal, block
      if (ref && !isInternal) {
        window.location.href = 'https://www.apexnurture.com';
      }
      // If there is NO referrer, allow (user typed URL, SPA, or bookmark)
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  // Inject Product schema for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(productSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // --- PAGE CONTENT ---
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-start pt-10 pb-20 px-4 fade-in-on-scroll"
      style={{
        background: "linear-gradient(to bottom, #0F0C29, #302B63, #24243E)",
        minHeight: "100vh",
      }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* ParticleBackground component can be used here for subtle effects */}
      </div>
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        {/* 1. Hero Area */}
        <section className="w-full text-center mb-10 p-10 md:p-[60px] fade-in-on-scroll">
          <h1
            className="text-[28px] md:text-[36px] font-bold text-white orbitron-glow mb-4"
            style={{ fontFamily: "Orbitron, sans-serif", textShadow: "0 0 8px #a259ff, 0 0 16px #a259ff" }}
          >
            Unlock AI-Powered Growth Without the Guesswork
          </h1>
          <h2
            className="text-[20px] md:text-[24px] text-gray-300 mb-4 font-bold"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            The Precision AI Implementation Program Finds, Builds, and Optimizes AI Solutions Tailored to Your Business—in Just 14 Days.
          </h2>
          <p
            className="text-[16px] md:text-[18px] text-gray-300 mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We audit your workflows, deploy custom AI agents, and ensure ongoing success. Save time, boost revenue, and cut costs—most clients see ROI in 14 days, or we refund you.
          </p>
        </section>
        {/* 2. Program Overview */}
        <section className="glassmorphism-container w-full mb-10 p-10 rounded-2xl fade-in-on-scroll">
          <h3 className="text-[24px] font-orbitron font-bold text-white neon-glow mb-2 text-center" style={{ textShadow: '0 0 8px #800080' }}>
            Your Path to AI-Driven Results in 3 Simple Steps
          </h3>
          <p className="text-gray-300 text-center font-poppins text-[16px] md:text-[18px]">
            We identify high-impact AI opportunities, implement tailored solutions, and optimize for maximum ROI—delivering results in 14–30 days, guaranteed.
          </p>
        </section>
        {/* 3. 3-Phase Process Timeline */}
        <section className="w-full mb-10 fade-in-on-scroll">
          <div className="flex flex-col items-center gap-8">
            {/* PHASE 1 */}
            <div className="relative w-full flex flex-col md:flex-row items-center glassmorphism-card p-8 rounded-xl border border-white/20 backdrop-blur-md bg-white/10 mb-2 fade-in-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col items-center md:items-start md:w-1/4 mb-4 md:mb-0">
                <i className="fa fa-search text-3xl text-purple-500 mb-2"></i>
                <span className="text-white font-orbitron font-bold text-lg neon-glow">AI Growth Blueprint™</span>
              </div>
              <div className="md:w-3/4 text-left">
                <p className="text-gray-300 mb-2 font-poppins text-[16px] md:text-[18px]">We audit your business in a 60-minute call, pinpointing where AI can save time or boost revenue. You’ll get a tailored AI Growth Blueprint with a roadmap to success.</p>
                <ul className="text-white text-sm mb-1 font-poppins list-disc ml-5">
                  <li>Custom AI Growth Blueprint: 10–15 page PDF with actionable solutions.</li>
                  <li>Loom Walkthrough: 15-minute video explaining your plan.</li>
                  <li>Quick Wins Checklist: 3 immediate AI strategies to test now.</li>
                </ul>
                <div className="text-purple-300 text-xs font-poppins mb-1"><b>Outcome:</b> Discover $5,000+ in savings or revenue opportunities—or your money back.</div>
                <div className="text-purple-300 text-xs font-poppins"><b>Timeline:</b> Done in 7 days.</div>
              </div>
              <span className="absolute left-1/2 top-full w-2 h-8 bg-gradient-to-b from-purple-500 to-transparent rounded-full animate-glow-timeline"></span>
            </div>
            {/* PHASE 2 */}
            <div className="relative w-full flex flex-col md:flex-row items-center glassmorphism-card p-8 rounded-xl border border-white/20 backdrop-blur-md bg-white/10 mb-2 fade-in-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center md:items-start md:w-1/4 mb-4 md:mb-0">
                <i className="fa fa-rocket text-3xl text-purple-500 mb-2"></i>
                <span className="text-white font-orbitron font-bold text-lg neon-glow">Rapid AI Deployment™</span>
              </div>
              <div className="md:w-3/4 text-left">
                <p className="text-gray-300 mb-2 font-poppins text-[16px] md:text-[18px]">We build and integrate 2–4 custom AI agents (e.g., AI SDR, support bot) into your systems, with full onboarding to get you started fast.</p>
                <ul className="text-white text-sm mb-1 font-poppins list-disc ml-5">
                  <li>Live AI Agents: Fully integrated into your workflows.</li>
                  <li>User Guide: Step-by-step instructions + Loom video.</li>
                  <li>14-Day Priority Support: We’re here to ensure success.</li>
                  <li>First Results Report: See your early wins in 7 days.</li>
                </ul>
                <div className="text-purple-300 text-xs font-poppins mb-1"><b>Outcome:</b> Start seeing results in as little as 14 days.</div>
                <div className="text-purple-300 text-xs font-poppins"><b>Timeline:</b> Deployed in 7–14 days.</div>
              </div>
              <span className="absolute left-1/2 top-full w-2 h-8 bg-gradient-to-b from-purple-500 to-transparent rounded-full animate-glow-timeline"></span>
            </div>
            {/* PHASE 3 */}
            <div className="relative w-full flex flex-col md:flex-row items-center glassmorphism-card p-8 rounded-xl border border-white/20 backdrop-blur-md bg-white/10 mb-2 fade-in-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col items-center md:items-start md:w-1/4 mb-4 md:mb-0">
                <i className="fa fa-chart-line text-3xl text-purple-500 mb-2"></i>
                <span className="text-white font-orbitron font-bold text-lg neon-glow">AI Performance Boost™</span>
              </div>
              <div className="md:w-3/4 text-left">
                <p className="text-gray-300 mb-2 font-poppins text-[16px] md:text-[18px]">We monitor and optimize your AI agents monthly, ensuring they grow with your business and deliver lasting ROI.</p>
                <ul className="text-white text-sm mb-1 font-poppins list-disc ml-5">
                  <li>Monthly Performance Report: Track your gains with data.</li>
                  <li>Ongoing Optimization: We fine-tune and add new automations.</li>
                  <li>Quarterly Strategy Session: Plan your next AI wins.</li>
                  <li>Dedicated Support: Email/Slack, 24-hour response.</li>
                </ul>
                <div className="text-purple-300 text-xs font-poppins mb-1"><b>Outcome:</b> Keep scaling your results with zero hassle.</div>
                <div className="text-purple-300 text-xs font-poppins"><b>Timeline:</b> Ongoing monthly support.</div>
              </div>
            </div>
          </div>
        </section>
        {/* 4. Pricing Table */}
        <section className="glassmorphism-container w-full mb-10 p-8 rounded-2xl fade-in-on-scroll">
          <h4 className="text-[22px] font-orbitron font-bold text-white neon-glow mb-4 text-center" style={{ textShadow: '0 0 8px #800080' }}>
            Invest in Results, Not Guesswork
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-white text-center border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-gradient-to-r from-purple-700 to-cyan-400">
                  <th className="p-2 rounded-l-lg">Phase</th>
                  <th className="p-2">What You Get</th>
                  <th className="p-2 rounded-r-lg">Price (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="glassmorphism-card">
                  <td>AI Growth Blueprint™</td>
                  <td>Audit, roadmap, quick wins</td>
                  <td>$397 (Free with Phase 2)</td>
                </tr>
                <tr className="glassmorphism-card">
                  <td>Rapid AI Deployment™</td>
                  <td>2–4 agents, integration, support</td>
                  <td>$1,800–$5,000 (based on complexity)</td>
                </tr>
                <tr className="glassmorphism-card">
                  <td>AI Performance Boost™</td>
                  <td>Optimization, reports, strategy sessions</td>
                  <td>$250–$700/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-gray-300 text-sm mt-2 font-poppins text-center">
            Your investment depends on complexity (e.g., number of agents). We’ll provide a custom quote after Phase 1.<br />
            <span className="text-purple-300 font-bold">Most clients save $5,000+ or gain 3× more revenue in 30 days.</span>
          </div>
        </section>
        {/* 5. Trust Signals */}
        <section className="glassmorphism-container w-full mb-10 p-6 rounded-2xl flex flex-col items-center fade-in-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <span className="text-white font-poppins">Trusted by 150+ Businesses in SA & UAE.</span>
            <span className="text-white font-poppins">Featured in Tech Africa News.</span>
            <span className="text-white font-poppins">‘Saved me 10 hours a week in the first month!’ <span className="text-purple-300">– John, SA SMB Owner</span></span>
            <span className="inline-block animate-spin-slow text-purple-400 neon-glow-badge px-4 py-1 rounded-full border border-purple-500 font-bold font-orbitron" style={{ textShadow: '0 0 8px #800080' }}>
              <i className="fa fa-certificate mr-2"></i>Trusted Partner
            </span>
            <span className="ml-2 flex items-center">
              <span className="fi fi-za mr-1 animate-fade-in"></span>
              <span className="fi fi-ae animate-fade-in"></span>
            </span>
          </div>
        </section>
        {/* 6. Guarantee */}
        <section className="w-full mb-10 fade-in-on-scroll">
          <div className="neon-highlight border-2 border-purple-500 p-6 rounded-xl text-white text-center font-bold animate-glow-3s font-poppins" style={{ textShadow: '0 0 8px #800080' }}>
            Our Promise: We’ll Find $5,000+ in Savings or Revenue Opportunities—or Your Money Back. Plus, See Results in 14 Days, or We’ll Work for Free Until You Do.
          </div>
        </section>
        {/* 7. Urgency Element */}
        <section className="w-full mb-10 fade-in-on-scroll">
          <div className="border-2 border-orange-400 p-6 rounded-xl text-white text-center font-bold animate-pulse-urgency font-poppins" style={{ textShadow: '0 0 8px #ff9900' }}>
            Only 5 Spots Left This Month for Phase 1 at $397!<br />
            <span className="block mt-2 text-lg">
              Offer Ends in {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes!
            </span>
          </div>
        </section>
        {/* 8. CTA Section */}
        <section className="w-full fade-in-on-scroll">
          <div className="flex flex-col items-center p-10 rounded-2xl bg-gradient-to-r from-purple-900/60 to-cyan-700/60 animate-glow-bg-cta">
            <h5 className="text-[24px] font-orbitron font-bold text-white neon-glow mb-2 text-center" style={{ textShadow: '0 0 8px #800080' }}>
              Ready to Transform Your Business with AI?
            </h5>
            <p className="text-gray-300 text-center mb-6 font-poppins text-[16px] md:text-[18px]">
              Join the Precision AI Implementation Program and start seeing results in as little as 14 days. Don’t miss out—spots are limited!
            </p>
            <button
              className="cta-btn px-10 py-4 rounded-full font-bold text-white text-[18px] font-poppins bg-gradient-to-r from-purple-700 to-cyan-400 shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 animate-pulse"
              aria-label="Get started with Precision AI Implementation Program"
              onMouseOver={e => (e.currentTarget.textContent = 'Start Today!')}
              onMouseOut={e => (e.currentTarget.textContent = 'Get Started Now')}
              tabIndex={0}
            >
              Get Started Now
            </button>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with real demo link
              className="mt-4 text-primary font-poppins underline text-[16px] hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See How It Works (Demo Video)"
            >
              See How It Works &rarr;
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrecisionAIProgram;

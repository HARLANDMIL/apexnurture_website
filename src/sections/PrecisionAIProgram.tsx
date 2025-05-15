import React, { useEffect, useState } from "react";
import "../index.css";
import ParticleBackground from "../components/ui/ParticleBackground";
import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

// Product schema for SEO
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Precision AI Implementation Program",
  "description": "A tailored AI implementation program that audits your business, deploys custom AI agents, and optimizes for results in 14 days.",
  "provider": {
    "@type": "Organization",
    "name": "Apex Nurture"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "397",
    "name": "AI Growth Blueprint"
  }
};

// Deadline: May 17, 2025, 09:58 SAST (UTC+2)
const deadline = new Date("2025-05-17T09:58:00+02:00").getTime();

const phases = [
  {
    icon: "fa-search",
    title: "AI Growth Blueprint™",
    text: "We conduct a 60-minute audit to identify AI opportunities that drive efficiency and revenue growth.",
    deliverables: [
      "📊 Custom AI Growth Blueprint: 10–15 page PDF with tailored strategies",
      "🎥 Loom Walkthrough Video: 15-minute personalized plan explanation",
      "✅ Quick Wins Checklist: 3 actionable AI strategies to implement immediately"
    ],
    outcome: "Uncover $5,000+ in savings or revenue opportunities—guaranteed.",
    timeline: "Completed in 7 Days"
  },
  {
    icon: "fa-rocket",
    title: "Rapid AI Deployment™",
    text: "We deploy 2–4 custom AI agents (e.g., AI SDR, support bot) with seamless integration and full onboarding.",
    deliverables: [
      "🤖 Live AI Agents: Fully integrated into your systems",
      "📝 User Guide & Video: Step-by-step instructions + Loom tutorial",
      "🛠️ 14-Day Priority Support: Dedicated assistance for a smooth start",
      "📈 First Results Report: Track early wins within 7 days"
    ],
    outcome: "See measurable results in just 14 days.",
    timeline: "Deployed in 7–14 Days"
  },
  {
    icon: "fa-chart-line",
    title: "AI Performance Boost™",
    text: "We optimize your AI agents monthly to maximize ROI and support your business growth.",
    deliverables: [
      "📊 Monthly Performance Report: Data-driven insights on your gains",
      "🔄 Continuous Optimization: Fine-tuning and new automations",
      "📞 Quarterly Strategy Calls: Plan your next AI-driven wins",
      "🖥️ Dedicated Support: Email/Slack, 24-hour response time"
    ],
    outcome: "Sustain and scale your results effortlessly.",
    timeline: "Ongoing Monthly Support"
  }
];

const PrecisionAIProgram: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 0, minutes: 0 });
  const [activePhase, setActivePhase] = useState(0);
  const [adminHours, setAdminHours] = useState(10);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = deadline - now;
      const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setTimeLeft({ days, hours, minutes });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, []);

  // Inject Product schema
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(productSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const calculateSavings = (hours: number) => {
    const hourlyRate = 80; // Example rate
    const monthlyHours = hours * 4; // 4 weeks
    return monthlyHours * hourlyRate;
  };

  const handleROICalculation = () => {
    const totalSavings = calculateSavings(adminHours);
    let current = 0;
    const step = Math.ceil(totalSavings / 20); // Animate in 20 steps
    
    const animation = setInterval(() => {
      current += step;
      if (current >= totalSavings) {
        current = totalSavings;
        clearInterval(animation);
      }
      setSavings(current);
    }, 50);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6" style={{ textShadow: "0 0 15px rgba(128, 0, 128, 0.8), 0 0 25px rgba(128, 0, 128, 0.4)" }}>
          Unlock Your Business Potential with Precision AI
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Audit, Build, and Optimize Tailored AI Solutions to Save Time, Boost Revenue, and Cut Costs—Results in 14 Days.
        </p>
        <p className="text-lg text-gray-400 mb-12">
          The Precision AI Implementation Program delivers measurable ROI fast. Join 150+ businesses already transforming with AI—see results in 14 days or your money back.
        </p>
      </motion.section>

      {/* Program Overview */}
      <section className="w-full max-w-5xl mx-auto mb-16">
        <GlassCard className="p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white text-center mb-8">
            Your AI-Powered Transformation in 3 Steps
          </h2>
          <p className="text-gray-300 text-center mb-12">
            We uncover high-impact AI opportunities, deploy tailored solutions, and optimize for sustained ROI—delivering results in 14–30 days, guaranteed.
          </p>

          {/* Phase Navigation Dots */}
          <div className="flex justify-center gap-4 mb-8">
            {phases.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activePhase === index ? 'bg-purple-500 scale-125' : 'bg-gray-600'
                }`}
                onClick={() => setActivePhase(index)}
                aria-label={`View phase ${index + 1}`}
              />
            ))}
          </div>

          {/* Phases */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: activePhase === index ? 1 : 0.5, x: 0 }}
                className="glassmorphism-card p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <i className={`fa ${phase.icon} text-3xl text-purple-500`} />
                  <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white">{phase.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{phase.text}</p>
                <ul className="space-y-3 mb-6">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="text-white">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
                  <p className="text-purple-400 font-bold">{phase.outcome}</p>
                  <p className="text-gray-400">{phase.timeline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* ROI Calculator */}
      <section className="w-full max-w-3xl mx-auto mb-16">
        <GlassCard className="p-8 text-center">
          <h2 className="text-2xl font-orbitron font-bold text-white mb-6">Calculate Your Potential Savings</h2>
          <div className="flex flex-col items-center gap-4">
            <input
              type="range"
              min="5"
              max="40"
              value={adminHours}
              onChange={(e) => setAdminHours(parseInt(e.target.value))}
              className="w-full max-w-md"
            />
            <p className="text-gray-300">Hours spent on admin tasks per week: {adminHours}</p>
            <Button onClick={handleROICalculation}>Calculate Savings</Button>
            {savings > 0 && (
              <p className="text-2xl font-bold text-purple-400">
                Potential Monthly Savings: ${savings.toLocaleString()}
              </p>
            )}
          </div>
        </GlassCard>
      </section>

      {/* Pricing Table */}
      <section className="w-full max-w-4xl mx-auto mb-16">
        <GlassCard className="p-8">
          <h2 className="text-2xl font-orbitron font-bold text-white text-center mb-8">
            Transparent Pricing for Proven Results
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 text-left">Phase</th>
                  <th className="py-4 text-left">What You Get</th>
                  <th className="py-4 text-right">Price (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4">AI Growth Blueprint™</td>
                  <td className="py-4">Audit, roadmap, quick wins</td>
                  <td className="py-4 text-right">$397 (Free with Phase 2)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4">Rapid AI Deployment™</td>
                  <td className="py-4">2–4 agents, integration, support</td>
                  <td className="py-4 text-right">$1,800–$5,000</td>
                </tr>
                <tr>
                  <td className="py-4">AI Performance Boost™</td>
                  <td className="py-4">Optimization, reports, strategy</td>
                  <td className="py-4 text-right">$250–$700/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GlassCard>
      </section>

      {/* Trust Signals */}
      <section className="w-full max-w-4xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-white text-center">
            <i className="fa fa-check-circle text-2xl text-purple-500 mb-2" />
            <p>Trusted by 150+ Businesses</p>
          </div>
          <div className="text-white text-center">
            <i className="fa fa-star text-2xl text-purple-500 mb-2" />
            <p>Featured in Tech Publications</p>
          </div>
          <div className="text-white text-center">
            <i className="fa fa-shield text-2xl text-purple-500 mb-2" />
            <p>Enterprise-Grade Security</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-3xl mx-auto text-center">
        <GlassCard className="p-8">
          <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
            Ready to Elevate Your Business with AI?
          </h2>
          <p className="text-gray-300 mb-6">
            Join the Precision AI Implementation Program today and see measurable results in 14 days.
          </p>
          <div className="border-2 border-orange-400 p-4 rounded-lg text-white mb-8 animate-pulse">
            Only 5 Spots Left for Phase 1 at $397!<br />
            <span className="text-sm">
              Offer Ends in {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes!
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-800 hover:to-blue-600"
              onClick={() => window.location.href = 'https://apexnurture.youcanbook.me'}
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '#learn-more'}
            >
              Schedule a Free Strategy Call
            </Button>
          </div>
        </GlassCard>
      </section>
    </main>
  );
};

export default PrecisionAIProgram;
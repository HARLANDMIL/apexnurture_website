import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import ParticleBackground from "../components/ui/ParticleBackground";

const highlights = [
  {
    icon: "fa-search",
    title: "AI Growth Blueprint™",
    back: "Identify $5,000+ in Savings or Revenue Opportunities."
  },
  {
    icon: "fa-rocket",
    title: "Deploy AI Agents in 14 Days",
    back: "Automate Sales, Support, or Marketing with 2–4 AI Agents."
  },
  {
    icon: "fa-shield-alt",
    title: "See ROI or Your Money Back",
    back: "Guaranteed Results in 14 Days—or We Work for Free."
  },
];

const calcSavings = (hours: number) => hours * 200 * 4; // 4 weeks/month

const BriefOverview: React.FC = () => {
  // Typewriter effect
  const [typed, setTyped] = useState("");
  const fullHeadline = "Need a Custom AI Solution for Your Business?";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullHeadline.slice(0, i + 1));
      i++;
      if (i === fullHeadline.length) clearInterval(interval);
    }, 2000 / fullHeadline.length);
    return () => clearInterval(interval);
  }, []);

  // Flip card state
  const [flipped, setFlipped] = useState([false, false, false]);
  const handleFlip = (idx: number) => {
    setFlipped((prev) => prev.map((f, i) => (i === idx ? !f : f)));
  };

  // ROI slider
  const [hours, setHours] = useState(10);
  const [showResult, setShowResult] = useState(false);

  // Countdown timer
  const deadline = new Date("2025-05-17T09:49:00+02:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 0, minutes: 0 });
  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const total = deadline - now;
      const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
      setTimeLeft({ days, hours, minutes });
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [deadline]);

  // Animated flags
  const [showFlag, setShowFlag] = useState(true);
  useEffect(() => {
    const flagInterval = setInterval(() => setShowFlag((f) => !f), 2000);
    return () => clearInterval(flagInterval);
  }, []);

  return (
    <section
      className="brief-overview relative flex justify-center items-center py-16 px-4 md:px-0 fade-in-on-scroll"
      style={{ background: "linear-gradient(to bottom, #0F0C29, #302B63, #24243E)" }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
        {/* Orbiting dots */}
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`absolute w-4 h-4 rounded-full bg-purple-500 opacity-20 animate-orbit orbit-${i}`}
              style={{ animationDuration: "15s" }}
            ></span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl glassmorphism-container flex flex-col items-center p-10 md:p-16 rounded-2xl shadow-lg">
        {/* Robot Icon */}
        <div className="text-4xl text-purple-500 mb-4 animate-spin-slow">
          <i className="fa fa-robot" style={{ filter: "drop-shadow(0 0 5px rgba(128, 0, 128, 0.5))" }}></i>
        </div>

        {/* Headline with typewriter */}
        <h2
          className="text-[28px] md:text-[32px] font-bold text-white text-center orbitron-glow mb-2 typewriter"
          style={{ fontFamily: 'Orbitron, sans-serif', minHeight: 40 }}
        >
          {typed}
        </h2>

        {/* Program Badge */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 text-white text-[16px] font-bold border-2 border-purple-500 neon-glow-badge rounded-full animate-glow-3s" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Precision AI Implementation Program
          </span>
        </div>

        {/* Description */}
        <p
          className="text-[16px] md:text-[18px] text-gray-300 text-center mb-8 max-w-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          The Precision AI Implementation Program audits your business, deploys custom AI agents, and optimizes for results in just 14 days. Save time, boost revenue, and cut costs—guaranteed.
        </p>

        {/* Flip Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center mb-8">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className={`flip-card flex-1 min-w-[220px] max-w-xs mx-auto cursor-pointer`}
              tabIndex={0}
              aria-label={item.title}
              onClick={() => handleFlip(idx)}
              onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && handleFlip(idx)}
            >
              <div className={`flip-card-inner ${flipped[idx] ? 'flipped' : ''}`}
                style={{ transition: 'transform 0.5s' }}
              >
                <div className="flip-card-front glassmorphism-card flex flex-col items-center p-6 rounded-xl border border-purple-500/40 backdrop-blur-md bg-white/10 mb-4 md:mb-0">
                  <i className={`fa ${item.icon} text-3xl text-purple-500 mb-3`}></i>
                  <span className="text-white text-center font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</span>
                </div>
                <div className="flip-card-back glassmorphism-card flex flex-col items-center p-6 rounded-xl border border-purple-500/80 backdrop-blur-md bg-white/20 mb-4 md:mb-0">
                  <span className="text-gray-200 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.back}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="w-full flex flex-col items-center mb-8">
          <div className="text-white font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            How Much Can You Save? Slide to See!
          </div>
          <input
            type="range"
            min={5}
            max={20}
            value={hours}
            onChange={e => { setHours(Number(e.target.value)); setShowResult(true); }}
            className="w-64 md:w-80 slider-glass mb-2"
            aria-label="Calculate potential savings"
          />
          <div
            className={`text-lg text-white font-bold transition-opacity duration-300 ${showResult ? 'opacity-100' : 'opacity-0'}`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {hours} Hours/Week = ${calcSavings(hours).toLocaleString()} / Month Saved
          </div>
        </div>

        {/* Urgency Element */}
        <div className="border-2 border-orange-400 p-6 rounded-xl text-white text-center font-bold animate-pulse-urgency mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Limited Spots Available—Join Before They're Gone!<br />
          <span className="block mt-2 text-lg">
            Offer Ends in {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes!
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full mt-2">
          <a
            href="/precision-ai-program"
            className="cta-btn px-10 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-purple-800 via-purple-600 to-cyan-400 shadow-xl transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 animate-pulse"
            aria-label="Get started immediately with Precision AI Implementation Program"
          >
            Get Started IMMEDIATELY
          </a>
          <a
            href="/precision-ai-program#learn-more"
            className="text-gray-300 hover:text-white underline decoration-purple-500 hover:decoration-white transition-all duration-300"
            aria-label="Learn more about Precision AI Implementation Program"
          >
            Learn More
          </a>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center mt-8 w-full">
          <div className="flex items-center gap-2 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span>Trusted by 150+ Businesses in SA & UAE.</span>
            {showFlag ? (
              <img src="https://flagcdn.com/za.svg" alt="SA" width={28} height={18} loading="lazy" className="rounded shadow-md transition-opacity duration-1000" />
            ) : (
              <img src="https://flagcdn.com/ae.svg" alt="UAE" width={28} height={18} loading="lazy" className="rounded shadow-md transition-opacity duration-1000" />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card { perspective: 1000px; }
        .flip-card-inner { position: relative; width: 100%; height: 180px; transform-style: preserve-3d; }
        .flip-card.flipped .flip-card-inner, .flip-card-inner.flipped { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; }
        .flip-card-back { transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; }
        .slider-glass { appearance: none; width: 100%; height: 8px; border-radius: 8px; background: linear-gradient(90deg, #800080 0%, #00FFFF 100%); outline: none; transition: background 0.3s; margin-bottom: 8px; }
        .slider-glass::-webkit-slider-thumb { appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #fff; border: 2px solid #800080; box-shadow: 0 0 10px #80008088; cursor: pointer; transition: background 0.3s; }
        .slider-glass::-moz-range-thumb { width: 24px; height: 24px; border-radius: 50%; background: #fff; border: 2px solid #800080; box-shadow: 0 0 10px #80008088; cursor: pointer; }
        .slider-glass::-ms-thumb { width: 24px; height: 24px; border-radius: 50%; background: #fff; border: 2px solid #800080; box-shadow: 0 0 10px #80008088; cursor: pointer; }
        .slider-glass:focus { outline: 2px solid #800080; }
        .typewriter { border-right: 2px solid #fff; white-space: nowrap; overflow: hidden; }
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
          .flip-card-inner { height: 160px; }
          .text-[32px] { font-size: 28px !important; }
          .text-[18px] { font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default BriefOverview;
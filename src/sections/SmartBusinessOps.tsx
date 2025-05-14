


import AnimatedCounter from '../components/ui/AnimatedCounter';
import CircularProgress from '../components/ui/CircularProgress';
import CountdownTimer from '../components/ui/CountdownTimer';
import TrustBadge from '../components/ui/TrustBadge';
import GlassCard from '../components/ui/GlassCard';

const SmartBusinessOps = () => {
  // Set countdown to 3 days from now
  const offerEnd = new Date();
  offerEnd.setDate(offerEnd.getDate() + 3);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-2 py-10 bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] relative overflow-hidden">
      {/* Spacer after navbar for ultra-modern look */}
      <div className="h-8 md:h-16" />
      {/* HERO SECTION */}
      <header className="w-full max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h1 className="font-orbitron font-bold text-white text-4xl md:text-5xl mb-4 neon-glow">Reclaim 20+ Hours a Week with AI Automation</h1>
        <p className="text-lg md:text-xl text-gray-300 font-poppins mb-6">Run Your SMB Smarter—Save 20+ Hours a Week</p>
        <p className="text-base md:text-lg text-gray-400 font-poppins mb-8">Automate support, quotes, and tasks to focus on growing your business, not managing it.</p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <AnimatedCounter to={20} duration={2000} className="text-5xl font-orbitron font-bold text-white neon-glow" suffix="+" />
          <div className="text-white font-orbitron text-lg" style={{textShadow:'0 0 10px #FF69B4'}}>Save 20+ Hours a Week on Admin Tasks</div>
        </div>
        <button className="mt-4 px-8 py-4 rounded-full font-orbitron font-bold text-lg text-white bg-gradient-to-r from-[#800080] to-[#00FFFF] shadow-lg transition-transform duration-200 hover:scale-110 animate-pulse focus:outline-none">Get Started Right – $3,500 + $700/month</button>
        <div className="mt-4 flex flex-col items-center">
          <span className="font-orbitron text-base md:text-lg text-white px-6 py-2 rounded-full bg-white/10 border-2 border-orange-400 animate-pulse neon-orange-glow" style={{textShadow:'0 0 10px #ff9900'}}>Only 10 Spots Left at 10% Off Setup!</span>
        </div>
      </header>

      {/* PAIN POINTS SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Your Admin Overload Ends Now</h2>
        <ul className="space-y-4">
          {[
            'Bogged down by repetitive admin tasks?',
            'Slow to respond to leads, losing opportunities?',
            'Project delays slowing your growth?',
          ].map((text, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-3 text-lg md:text-xl text-gray-300 font-poppins group cursor-pointer"
            >
              <span className="text-pink-400"><i className="fa fa-check"></i></span>
              <span className="relative group-hover:after:w-full after:transition-all after:duration-500 after:absolute after:left-0 after:-bottom-1 after:h-1 after:bg-pink-400 after:w-0 group-hover:after:animate-glow-underline">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SOLUTION SECTION */}
      <section className="w-full max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-8 neon-glow">Your Business Ops, Simplified</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <GlassCard borderColor="border-pink-400" glowColor="shadow-[0_0_24px_4px_rgba(255,105,180,0.3)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-pink-400/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-pink-400 text-3xl mb-2"><i className="fa fa-comments"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">AI Support Bot</div>
              <div className="font-poppins text-gray-300">Resolves 50% of inquiries instantly—no more backlog.</div>
            </div>
          </GlassCard>
          <GlassCard borderColor="border-pink-400" glowColor="shadow-[0_0_24px_4px_rgba(255,105,180,0.3)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-pink-400/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-pink-400 text-3xl mb-2"><i className="fa fa-file-invoice-dollar"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">Quotation Generator</div>
              <div className="font-poppins text-gray-300">Creates quotes in under 2 minutes, speeding up sales.</div>
            </div>
          </GlassCard>
          <GlassCard borderColor="border-pink-400" glowColor="shadow-[0_0_24px_4px_rgba(255,105,180,0.3)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-pink-400/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-pink-400 text-3xl mb-2"><i className="fa fa-tasks"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">Task Scheduler</div>
              <div className="font-poppins text-gray-300">Reduces project delays by 30%.</div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* OUTCOME SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Save Time, Grow Faster—Guaranteed</h2>
        <p className="font-poppins text-gray-300 mb-6">Save 20+ hours a week and speed up lead replies by 40% in 30 days—or your money back.</p>
        <div className="flex flex-col items-center">
          <CircularProgress value={90} color="#FF69B4" text="90% of SMBs See Results in 30 Days" />
        </div>
      </section>

      {/* STAT SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-8">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Trusted by SMBs Across SA</h2>
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center gap-3">
            <span className="font-poppins text-white text-lg">“Trusted by 100+ SA SMBs to streamline operations and fuel growth.”</span>
            <span className="inline-block animate-spin-slow">
              <TrustBadge text="Trusted Partner" colorClass="bg-pink-500" />
            </span>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <footer className="w-full max-w-2xl mx-auto text-center mb-8">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4 neon-glow">Ready to Take Back Your Time?</h2>
        <p className="font-poppins text-white mb-6">Start automating your business ops today. Results guaranteed in 30 days—or your money back.</p>
        <div className="flex flex-col items-center">
          <button
            className="mt-2 px-8 py-4 rounded-full font-orbitron font-bold text-lg text-white bg-gradient-to-r from-[#800080] to-[#00FFFF] shadow-lg transition-transform duration-200 hover:scale-110 animate-pulse focus:outline-none hover:border-2 hover:border-pink-400 hover:text-shadow-lg"
            onMouseOver={e => (e.currentTarget.textContent = 'Start Now!')}
            onMouseOut={e => (e.currentTarget.textContent = 'Book a Free Consultation')}
          >
            Book a Free Consultation
          </button>
          <CountdownTimer endDate={offerEnd} />
        </div>
      </footer>
    </div>
  );
};

export default SmartBusinessOps;

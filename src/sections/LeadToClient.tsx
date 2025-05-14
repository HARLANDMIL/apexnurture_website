


import AnimatedCounter from '../components/ui/AnimatedCounter';
import CircularProgress from '../components/ui/CircularProgress';
import CountdownTimer from '../components/ui/CountdownTimer';
import TrustBadge from '../components/ui/TrustBadge';
import GlassCard from '../components/ui/GlassCard';
import FlagIcon from '../components/ui/FlagIcon';

const LeadToClient = () => {
  // Set countdown to 3 days from now
  const offerEnd = new Date();
  offerEnd.setDate(offerEnd.getDate() + 3);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-2 py-10 bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] relative overflow-hidden">
      {/* Particle effect is handled globally */}
      {/* HERO SECTION */}
      <header className="w-full max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h1 className="font-orbitron font-bold text-white text-4xl md:text-5xl mb-4 neon-glow">Fill Your Calendar with High-Value Clients in 7 Days</h1>
        <p className="text-lg md:text-xl text-gray-300 font-poppins mb-6">Stop Chasing Leads—Book 3× More Sales Calls with AI</p>
        <p className="text-base md:text-lg text-gray-400 font-poppins mb-8">Automate your lead nurturing and watch your calendar fill up with qualified clients—no extra effort required.</p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <AnimatedCounter to={3} duration={2000} className="text-5xl font-orbitron font-bold text-white neon-glow" suffix="×" />
          <div className="text-white font-orbitron text-lg" style={{textShadow:'0 0 10px #80008080'}}>Clients See 3× More Booked Calls in Just 30 Days</div>
        </div>
        <button className="mt-4 px-8 py-4 rounded-full font-orbitron font-bold text-lg text-white bg-gradient-to-r from-[#800080] to-[#00FFFF] shadow-lg transition-transform duration-200 hover:scale-110 animate-pulse focus:outline-none">Get Started Right – $2,500 + $550/month</button>
        <div className="mt-4 flex flex-col items-center">
          <span className="font-orbitron text-base md:text-lg text-white px-6 py-2 rounded-full bg-white/10 border-2 border-orange-400 animate-pulse neon-orange-glow" style={{textShadow:'0 0 10px #ff9900'}}>Only 10 Spots Left at 10% Off Setup!</span>
        </div>
      </header>

      {/* PAIN POINTS SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Your Lead Conversion Struggles End Here</h2>
        <ul className="space-y-4">
          {[
            'Spending hours chasing leads with no results?',
            'Frustrated by low booking rates and no-shows?',
            'Missing out on high-value clients due to manual follow-ups?',
          ].map((text, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-3 text-lg md:text-xl text-gray-300 font-poppins group cursor-pointer"
            >
              <span className="text-purple-400"><i className="fa fa-check"></i></span>
              <span className="relative group-hover:after:w-full after:transition-all after:duration-500 after:absolute after:left-0 after:-bottom-1 after:h-1 after:bg-purple-500 after:w-0 group-hover:after:animate-glow-underline">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SOLUTION SECTION */}
      <section className="w-full max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-8 neon-glow">Your All-in-One Lead Conversion Machine</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <GlassCard borderColor="border-purple-500" glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-purple-500/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-purple-400 text-3xl mb-2"><i className="fa fa-calendar-check-o"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">AI Appointment Setter</div>
              <div className="font-poppins text-gray-300">Books 3× more calls via WhatsApp/Email—no manual effort.</div>
            </div>
          </GlassCard>
          <GlassCard borderColor="border-purple-500" glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-purple-500/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-purple-400 text-3xl mb-2"><i className="fa fa-refresh"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">Content Repurposer</div>
              <div className="font-poppins text-gray-300">Turns webinars into 10+ lead magnets in minutes.</div>
            </div>
          </GlassCard>
          <GlassCard borderColor="border-purple-500" glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-purple-500/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-purple-400 text-3xl mb-2"><i className="fa fa-bolt"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">Auto-Follow-Up</div>
              <div className="font-poppins text-gray-300">Boosts lead response rates by 40% with smart automation.</div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* OUTCOME SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">See Results Fast—or Your Money Back</h2>
        <p className="font-poppins text-gray-300 mb-6">Expect 3×–5× more booked calls in just 30–45 days. Your calendar will thank you.</p>
        <div className="flex flex-col items-center">
          <CircularProgress value={90} color="#00FFFF" text="90% of Clients See Results in 30 Days" />
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-8">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Real Coaches, Real Results</h2>
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="transition-transform duration-300 hover:rotate-y-6" style={{perspective:'600px'}}>
              <GlassCard className="p-6 text-gray-200 font-poppins text-lg shadow-lg" borderColor="border-purple-500">
                <blockquote className="mb-2">“I went from 2 calls a week to 10 in just 3 weeks. This suite is a game-changer!”</blockquote>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="font-orbitron font-bold text-white">Sarah</span>
                  <FlagIcon country="UAE" size={20} />
                  <span className="text-xs text-gray-400">Coach</span>
                </div>
              </GlassCard>
            </div>
            <div className="mt-4 flex justify-center">
              <TrustBadge text="Rated 4.9/5 by 50+ Coaches" colorClass="bg-purple-600" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <footer className="w-full max-w-2xl mx-auto text-center mb-8">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4 neon-glow">Ready to Fill Your Calendar with Dream Clients?</h2>
        <p className="font-poppins text-white mb-6">Start automating your lead nurturing today. Results guaranteed in 14 days—or your money back.</p>
        <div className="flex flex-col items-center">
          <button
            className="mt-2 px-8 py-4 rounded-full font-orbitron font-bold text-lg text-white bg-gradient-to-r from-[#800080] to-[#00FFFF] shadow-lg transition-transform duration-200 hover:scale-110 animate-pulse focus:outline-none hover:border-2 hover:border-purple-400 hover:text-shadow-lg"
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

export default LeadToClient;

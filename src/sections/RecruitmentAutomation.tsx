


import AnimatedCounter from '../components/ui/AnimatedCounter';
import CircularProgress from '../components/ui/CircularProgress';
import CountdownTimer from '../components/ui/CountdownTimer';
import TrustBadge from '../components/ui/TrustBadge';
import GlassCard from '../components/ui/GlassCard';
import FlagIcon from '../components/ui/FlagIcon';

const RecruitmentAutomation = () => {
  // Set countdown to 3 days from now
  const offerEnd = new Date();
  offerEnd.setDate(offerEnd.getDate() + 3);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-2 py-10 bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] relative overflow-hidden">
      {/* HERO SECTION */}
      <header className="w-full max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h1 className="font-orbitron font-bold text-white text-4xl md:text-5xl mb-4 neon-glow">Place Top Talent 30% Faster with AI Automation</h1>
        <p className="text-lg md:text-xl text-gray-300 font-poppins mb-6">Slash Recruitment Time by 30% Starting Today</p>
        <p className="text-base md:text-lg text-gray-400 font-poppins mb-8">Automate screening, follow-ups, and sourcing to place the best candidates faster than your competition.</p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <AnimatedCounter to={70} duration={2000} className="text-5xl font-orbitron font-bold text-white neon-glow" suffix="%" />
          <div className="text-white font-orbitron text-lg" style={{textShadow:'0 0 10px #00FF0080'}}>70% Faster Candidate Screening for Agencies</div>
        </div>
        <button className="mt-4 px-8 py-4 rounded-full font-orbitron font-bold text-lg text-white bg-gradient-to-r from-[#800080] to-[#00FFFF] shadow-lg transition-transform duration-200 hover:scale-110 animate-pulse focus:outline-none">Get Started Right – $3,000 + $700/month</button>
        <div className="mt-4 flex flex-col items-center">
          <span className="font-orbitron text-base md:text-lg text-white px-6 py-2 rounded-full bg-white/10 border-2 border-orange-400 animate-pulse neon-orange-glow" style={{textShadow:'0 0 10px #ff9900'}}>Only 10 Spots Left at 10% Off Setup!</span>
        </div>
      </header>

      {/* PAIN POINTS SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">End Your Recruitment Headaches</h2>
        <ul className="space-y-4">
          {[
            'Drowning in CVs with no time to screen?',
            'Losing candidates to slow responses?',
            'Struggling to find top talent in a competitive market?',
          ].map((text, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-3 text-lg md:text-xl text-gray-300 font-poppins group cursor-pointer"
            >
              <span className="text-green-400"><i className="fa fa-check"></i></span>
              <span className="relative group-hover:after:w-full after:transition-all after:duration-500 after:absolute after:left-0 after:-bottom-1 after:h-1 after:bg-green-400 after:w-0 group-hover:after:animate-glow-underline">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SOLUTION SECTION */}
      <section className="w-full max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-8 neon-glow">Your Recruitment Powerhouse</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <GlassCard borderColor="border-green-400" glowColor="shadow-[0_0_24px_4px_rgba(0,255,0,0.3)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-green-400/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-green-400 text-3xl mb-2"><i className="fa fa-search"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">CV Screening Bot</div>
              <div className="font-poppins text-gray-300">Cuts screening time by 70%—focus on the best candidates.</div>
            </div>
          </GlassCard>
          <GlassCard borderColor="border-green-400" glowColor="shadow-[0_0_24px_4px_rgba(0,255,0,0.3)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-green-400/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-green-400 text-3xl mb-2"><i className="fa fa-envelope"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">Follow-Up Agent</div>
              <div className="font-poppins text-gray-300">Reduces candidate drop-off by 40% via WhatsApp/Email.</div>
            </div>
          </GlassCard>
          <GlassCard borderColor="border-green-400" glowColor="shadow-[0_0_24px_4px_rgba(0,255,0,0.3)]" className="flex-1 p-6 min-w-[220px] max-w-xs text-center hover:shadow-green-400/60 relative">
            <div className="flex flex-col items-center">
              <span className="text-green-400 text-3xl mb-2"><i className="fa fa-linkedin"></i></span>
              <div className="font-orbitron text-xl text-white mb-2">Data Enricher</div>
              <div className="font-poppins text-gray-300">Sources 50+ qualified profiles/month from LinkedIn.</div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* OUTCOME SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Faster Placements, Guaranteed</h2>
        <p className="font-poppins text-gray-300 mb-6">Place candidates 30% faster and double your qualified interviews in 30 days—or your money back.</p>
        <div className="flex flex-col items-center">
          <CircularProgress value={85} color="#00FF00" text="85% of Agencies Place Faster in 30 Days" />
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="w-full max-w-2xl mx-auto text-center mb-8">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Real Agencies, Real Wins</h2>
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="transition-transform duration-300 hover:rotate-y-6" style={{perspective:'600px'}}>
              <GlassCard className="p-6 text-gray-200 font-poppins text-lg shadow-lg" borderColor="border-green-400">
                <blockquote className="mb-2">“I saved 10 hours a week and placed 15% more candidates in the first month alone.”</blockquote>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="font-orbitron font-bold text-white">JobFind</span>
                  <FlagIcon country="SA" size={20} />
                  <span className="text-xs text-gray-400">Agency</span>
                </div>
              </GlassCard>
            </div>
            <div className="mt-4 flex justify-center">
              <TrustBadge text="Rated 4.8/5 by 40+ Agencies" colorClass="bg-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <footer className="w-full max-w-2xl mx-auto text-center mb-8">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4 neon-glow">Ready to Outplace the Competition?</h2>
        <p className="font-poppins text-white mb-6">Start automating your recruitment process now. Results guaranteed in 14 days—or your money back.</p>
        <div className="flex flex-col items-center">
          <button
            className="mt-2 px-8 py-4 rounded-full font-orbitron font-bold text-lg text-white bg-gradient-to-r from-[#800080] to-[#00FFFF] shadow-lg transition-transform duration-200 hover:scale-110 animate-pulse focus:outline-none hover:border-2 hover:border-green-400 hover:text-shadow-lg"
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

export default RecruitmentAutomation;

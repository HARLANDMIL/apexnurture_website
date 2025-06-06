import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import ProblemSolution from './components/sections/ProblemSolution';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import SuccessStories from './components/sections/SuccessStories';
import BookACall from './components/sections/BookACall';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';
import TermsOfService from './components/sections/TermsOfService';
import PrivacyPolicy from './components/sections/PrivacyPolicy';
import RefundPolicy from './components/sections/RefundPolicy';

import SmartBusinessOps from './sections/SmartBusinessOps';
import RecruitmentAutomation from './sections/RecruitmentAutomation';
import LeadToClient from './sections/LeadToClient';
import PrecisionAIProgram from './sections/PrecisionAIProgram';

function App() {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-background-start via-background-mid to-background-end overflow-hidden">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/business-ops" element={<SmartBusinessOps />} />
            <Route path="/recruitment-automation" element={<RecruitmentAutomation />} />
            <Route path="/lead-to-client" element={<LeadToClient />} />
            <Route path="/precision-ai-program" element={<PrecisionAIProgram />} />
            <Route path="/" element={
              <>
                <Hero />
                <TrustedBy />
                <ProblemSolution />
                <HowItWorks />
                <Services />
                <Testimonials />
                <Pricing />
                <SuccessStories />
                <BookACall />
                <FAQ />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
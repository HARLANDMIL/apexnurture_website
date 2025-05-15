import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import SuccessStories from './components/sections/SuccessStories';
import BookACall from './components/sections/BookACall';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/ui/ParticleBackground';
import TermsOfService from './components/sections/TermsOfService';
import PrivacyPolicy from './components/sections/PrivacyPolicy';
import RefundPolicy from './components/sections/RefundPolicy';

// Import the missing AI Suite pages
import SmartBusinessOps from './sections/SmartBusinessOps';
import RecruitmentAutomation from './sections/RecruitmentAutomation';
import LeadToClient from './sections/LeadToClient';
import BriefOverview from './sections/BriefOverview';
import PrecisionAIProgram from './sections/PrecisionAIProgram';
import PrecisionAICard from './sections/PrecisionAICard';

function App() {
  // Handle fade-in on scroll for .fade-in-on-scroll
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
        <ParticleBackground />
        <div className="relative min-h-screen bg-gradient-to-br from-background-start via-background-mid to-background-end">
          <Navbar />
          <Routes>
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            {/* Add AI Suite routes */}
            <Route path="/business-ops" element={<SmartBusinessOps />} />
            <Route path="/recruitment-automation" element={<RecruitmentAutomation />} />
            <Route path="/lead-to-client" element={<LeadToClient />} />
            <Route path="/precision-ai-program" element={<PrecisionAIProgram />} />
            <Route path="/" element={
              <>
                <Hero />
                <ProblemSolution />
                <HowItWorks />
                <Services />
                <Pricing />
                {/* Insert PrecisionAICard below Pricing and above Testimonials as requested */}
                <PrecisionAICard />
                <Testimonials />
                <BriefOverview />
                <SuccessStories />
                <BookACall />
                <FAQ />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
}

export default App;
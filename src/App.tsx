import React, { useEffect } from 'react';
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

function App() {
  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen bg-gradient-to-br from-background-start via-background-mid to-background-end">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Services />
        <Testimonials />
        <Pricing />
        <SuccessStories />
        <BookACall />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
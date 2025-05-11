import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X , AlignRight, AlignCenter} from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Our Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Our AI Suites', href: '#pricing' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            { /* Logo <Cpu className="h-8 w-8 text-primary animate-pulse-slow" /> */}
            <span className="font-orbitron font-bold text-xl md:text-2xl">Apex Nurture</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>            <Button 
              className="bg-purple-600 text-white hover:bg-purple-700 hover:shadow-[0_0_10px_#800080] transition-all duration-300"
              onClick={() => window.open('https://apexnurture.youcanbook.me/', '_blank')}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <AlignCenter size={24} /> : <AlignRight size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass mt-4 rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary py-2 px-3 rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}              <Button 
                className="mt-2 bg-purple-600 text-white hover:bg-purple-700 hover:shadow-[0_0_10px_#800080] transition-all duration-300"
                onClick={() => {
                  toggleMenu();
                  window.open('https://apexnurture.youcanbook.me/', '_blank');
                }}
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
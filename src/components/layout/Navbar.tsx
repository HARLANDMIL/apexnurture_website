import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSuites, setShowSuites] = useState(false);

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

  const mainNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Updated suiteLinks to include the new AI Suite pages
  const suiteLinks = [
    { 
      name: 'Lead-to-Client Conversion', 
      href: '/lead-to-client',
      description: 'Turn leads into booked calls effortlessly'
    },
    { 
      name: 'Recruitment Automation', 
      href: '/recruitment-automation',
      description: 'Speed up placements with AI precision'
    },
    { 
      name: 'Smart Business Ops', 
      href: '/business-ops',
      description: 'Automate ops and save time'
    }
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
          <a href="/" className="flex items-center gap-2">
            <Cpu className="h-8 w-8 text-primary" />
            <span className="font-orbitron font-bold text-xl md:text-2xl">Apex Nurture</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              
              {/* AI Suites Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowSuites(true)}
                onMouseLeave={() => setShowSuites(false)}
              >
                <button 
                  className="flex items-center gap-1 text-gray-300 hover:text-primary transition-colors font-medium"
                  onClick={() => setShowSuites(!showSuites)}
                >
                  AI Suites
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {showSuites && (
                  <div className="absolute top-full left-0 mt-2 w-72 glass rounded-lg overflow-hidden">
                    <div className="py-2">
                      {suiteLinks.map((suite) => (
                        <a
                          key={suite.name}
                          href={suite.href}
                          className="block px-4 py-3 hover:bg-white/10 transition-colors"
                        >
                          <div className="font-medium text-white">{suite.name}</div>
                          <div className="text-sm text-gray-400">{suite.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              className="bg-purple-600 text-white hover:bg-purple-700 hover:shadow-[0_0_10px_#800080] transition-all duration-300"
              onClick={() => window.open('https://apexnurture.youcanbook.me/', '_blank')}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary py-2 px-3 rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile AI Suites Section */}
              <div className="py-2 px-3">
                <div className="font-medium text-primary mb-2">AI Suites</div>
                {suiteLinks.map((suite) => (
                  <a
                    key={suite.name}
                    href={suite.href}
                    className="block py-2 text-gray-300 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {suite.name}
                  </a>
                ))}
              </div>
              
              <Button 
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
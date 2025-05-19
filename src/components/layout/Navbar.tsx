import React, { useState, useEffect, useCallback } from 'react';
import { Menu, AlignCenter } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarLink = ({ name, href, onClick }: { name: string; href: string; onClick?: () => void }) => (
  <motion.a
    href={href}
    className="relative text-gray-300/90 hover:text-white transition-colors duration-300 
             font-medium px-2 py-1 group"
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    onClick={onClick}
  >
    <span className="relative z-10">{name}</span>
    <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 
                 transition-transform duration-300 origin-left rounded-md"></div>
  </motion.a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainNavLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'AI Suites', href: '#pricing' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md
        ${scrolled 
          ? 'bg-background-start/40 shadow-[0_0_20px_rgba(0,0,0,0.3)] border-b border-white/5' 
          : 'bg-transparent'
        } py-4`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center gap-4 md:gap-8">
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Home"
          >
            <div className="relative">
              <span className="font-orbitron font-bold text-xl md:text-2xl bg-clip-text text-transparent 
                             bg-gradient-to-r from-white via-white to-white/80
                             group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500
                             transition-all duration-300">
                Apex Nurture
              </span>
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-purple-500 
                            group-hover:w-full transition-all duration-300"></div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {mainNavLinks.map((link) => (
                <NavbarLink key={link.name} name={link.name} href={link.href} />
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-primary/80 to-purple-600/80 
                         hover:from-primary hover:to-purple-600 text-white font-medium
                         shadow-[0_0_15px_rgba(0,255,255,0.15)]
                         hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
                         transition-all duration-300 px-6"
                onClick={() => window.open('https://apexnurture.youcanbook.me/', '_blank')}
              >
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 
                             translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
                             duration-1000"></div>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <AlignCenter size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: 'easeInOut',
                height: { duration: 0.4 },
              }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-xl 
                       backdrop-blur-xl bg-gradient-to-b from-background-start/60 to-background-mid/60
                       border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col space-y-4">
                {mainNavLinks.map((link) => (
                  <NavbarLink
                    key={link.name}
                    name={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                  />
                ))}
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    className="w-full mt-2 bg-gradient-to-r from-primary/80 to-purple-600/80 
                             hover:from-primary hover:to-purple-600 text-white font-medium
                             shadow-[0_0_15px_rgba(0,255,255,0.15)]
                             hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
                             transition-all duration-300"
                    onClick={() => {
                      toggleMenu();
                      window.open('https://apexnurture.youcanbook.me/', '_blank');
                    }}
                  >
                    <span className="relative z-10">Book a Call</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 
                                 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
                                 duration-1000"></div>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
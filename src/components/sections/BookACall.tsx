import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const BookACall: React.FC = () => {
  return (
    <section 
      id="book-call" 
      className="py-24 relative"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-30"></div>
          
          {/* Content container */}
          <div className="glass relative py-12 px-6 md:py-16 md:px-12 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
                Ready to Automate Your Business?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Book a free strategy call to discuss how our AI agents can transform your operations
                and boost your productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">
                  Book a Call Now
                </Button>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </div>
              
              <p className="mt-6 text-gray-400">
                No obligation, 30-minute call with our AI solutions experts.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BookACall;
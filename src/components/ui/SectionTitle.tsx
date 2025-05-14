import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <div className="relative inline-block">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-orbitron text-gradient">
          {title}
        </h2>
        <div className="w-full h-2 rounded-full bg-gradient-to-r from-purple-700 via-blue-400 to-cyan-400 opacity-80 absolute left-0 bottom-0" style={{height: '8px', marginTop: '-12px'}}></div>
      </div>
      {subtitle && (
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
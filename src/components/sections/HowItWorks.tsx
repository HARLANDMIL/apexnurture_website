import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Bot, Zap, Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-primary" />,
      title: "Custom Blueprint Creation",
      description: "We start by analyzing your business processes to identify repetitive tasks and create a custom AI automation blueprint.",
      delay: 0.1,
    },
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "AI Agent Development",
      description: "Our engineers develop custom AI agents using advanced machine learning models tailored to your specific business needs.",
      delay: 0.3,
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Seamless Integration",
      description: "We integrate your new AI agents with your existing systems and workflows with minimal disruption to your operations.",
      delay: 0.5,
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Optimization & Support",
      description: "Continuous monitoring and optimization ensure your AI agents keep improving, while our team provides ongoing support.",
      delay: 0.7,
    },
  ];

  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="How We Build Your AI Agents" 
          subtitle="Our proven four-step process transforms your business operations with custom AI solutions."
        />
        
        <div className="timeline-container relative py-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: step.delay }}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 last:mb-0 relative ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Step number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background-mid border-4 border-primary flex items-center justify-center font-orbitron font-bold z-10 md:static md:translate-x-0">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className={`glass-card md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {step.icon}
                  <h3 className="text-2xl font-orbitron font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
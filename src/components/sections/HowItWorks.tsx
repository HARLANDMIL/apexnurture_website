import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Phone, Cog, Rocket } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      number: "01",
      title: "Share Your Needs",
      description: "Start by filling out our simple online form to tell us about your business and automation goals. Whether you're looking to generate more leads, streamline support, or scale operations, we'll gather the key details to understand your needs.",
      clientAction: "Completes a form with business details, challenges, and desired outcomes.",
      apexAction: "Reviews the form and schedules a free discovery call to dive deeper.",
      delay: 0.1,
    },
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      number: "02",
      title: "Discovery & Strategy Call",
      description: "Join us for a 30-minute discovery call where we map out your specific challenges and design a tailored AI automation solution. We'll recommend the perfect suite and outline a clear plan to achieve your goals.",
      clientAction: "Attends the call, provides additional details (e.g., CRM integrations, workflows).",
      apexAction: "Proposes a solution, confirms deliverables, and sets expectations.",
      delay: 0.3,
    },
    {
      icon: <Cog className="w-12 h-12 text-primary" />,
      number: "03",
      title: "Build & Test Your AI Suite",
      description: "Our team builds your custom AI automation suite in 7–14 days, depending on complexity. We handle everything—development, integrations, and rigorous testing—to ensure flawless performance. You'll get regular updates on progress.",
      clientAction: "Provides feedback during revisions (2–3 included per suite).",
      apexAction: "Delivers a fully functional suite, complete with dashboards and SOP videos.",
      delay: 0.5,
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      number: "04",
      title: "Launch & Grow with Support",
      description: "Launch your AI suite and watch it transform your business—whether it's doubling booked calls or cutting support tickets by 50%. We provide onboarding, training, and ongoing maintenance to keep your workflows optimized and running smoothly.",
      clientAction: "Implements the suite with our guidance, tracks results via dashboards.",
      apexAction: "Offers monthly support, tuning, and strategy calls to maximize ROI.",
      delay: 0.7,
    },
  ];

  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="How It Works: Transform Your Business in 4 Easy Steps" 
          subtitle="Our proven four-step process transforms your business operations with custom AI solutions."
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-[28px] top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-20 md:left-1/2 md:-translate-x-[0.5px]" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: step.delay }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Step Number and Icon */}
              <div className="flex items-center gap-4 md:w-1/2">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-background-mid border-4 border-primary flex items-center justify-center">
                    <span className="font-orbitron font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary opacity-10 animate-pulse" />
                </div>
              </div>
              
              {/* Content */}
              <div className={`glass-card md:w-1/2 ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <div className={`flex items-center gap-4 mb-4 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}>
                  {step.icon}
                  <h3 className="text-2xl font-orbitron font-bold">{step.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{step.description}</p>
                
                <div className="space-y-4 border-t border-white/10 pt-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-primary text-sm font-semibold">Client Action:</div>
                    <p className="text-sm text-gray-400">{step.clientAction}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-secondary text-sm font-semibold">Apex Nurture Action:</div>
                    <p className="text-sm text-gray-400">{step.apexAction}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25"
            onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
          >
            Start Automating Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
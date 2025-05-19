import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket,
  Search, 
  FileText, 
  Users, 
  ShoppingCart,
  Database,
  ChevronRight
} from 'lucide-react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Rocket className="w-10 h-10 text-primary" />,
      title: "Appointment Setter Agent",
      description: "Turn leads into booked sales calls — automatically. This AI agent follows up with your leads on WhatsApp, Email, or SMS until they book. It handles objections, answers FAQs, and personalizes messages for every contact..",
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Data Enrichment Agent",
      description: "This AI agent enriches your leads with data from over 100 sources, including LinkedIn, Google, and more. It provides you with the most relevant information to close deals faster.",
    },
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "Custom Research Agent",
      description: "This AI agent gathers, analyzes, and summarizes information from diverse sources. It can be customized to focus on specific topics or industries, providing you with the insights you need.",
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Content Generation",
      description: "Creative AI agents that produce blog posts, social media content, and marketing copy.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Sales Enablement",
      description: "AI systems that qualify leads, personalize outreach, and accelerate your sales pipeline.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "E-commerce Optimization",
      description: "Intelligent agents that enhance product recommendations and shopping experiences.",
    },
  ];

  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our AI Agent Services" 
          subtitle="Discover how our specialized AI agents can transform different aspects of your business."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-6 p-4 rounded-full bg-background-mid inline-block">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary-light font-medium flex items-center transition-colors"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white
                     bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full
                     hover:from-primary hover:to-secondary
                     transition-all duration-300 ease-out
                     shadow-[0_0_20px_rgba(79,70,229,0.3)]
                     hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]
                     backdrop-blur-sm"
          >
            And Much More
            <ChevronRight className="w-5 h-5 animate-pulse" />
          </a>
          <div className="mt-4 text-gray-400 text-sm">
            Discover our full suite of AI solutions
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
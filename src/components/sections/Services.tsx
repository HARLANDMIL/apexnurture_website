import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Calendar, 
  Search, 
  FileText, 
  Users, 
  ShoppingCart 
} from 'lucide-react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const Services: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: "Customer Service Agents",
      description: "AI-powered assistants that handle customer inquiries 24/7, improving response times and satisfaction.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-primary" />,
      title: "Scheduling Assistants",
      description: "Intelligent agents that manage calendars, set meetings, and optimize your time automatically.",
    },
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "Research Agents",
      description: "AI researchers that gather, analyze, and summarize information from diverse sources.",
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
      </div>
    </section>
  );
};

export default Services;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button 
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-orbitron font-semibold text-lg">{question}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
      </button>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-5 text-gray-300">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What types of businesses can benefit from AI agents?",
      answer: "Any business with repetitive tasks can benefit from AI agents. This includes customer service, sales, marketing, operations, and administrative functions across industries like e-commerce, SaaS, healthcare, finance, and more."
    },
    {
      question: "How long does it take to develop and implement an AI agent?",
      answer: "The timeline varies based on complexity, but most clients see their first AI agent launched within 2-4 weeks of starting. Our process includes analysis, development, testing, and integration phases to ensure a smooth implementation."
    },
    {
      question: "Do I need technical expertise to use your AI agents?",
      answer: "Not at all. Our AI agents are designed to be user-friendly, and we provide comprehensive training and support. Our team handles all the technical aspects, from development to integration and maintenance."
    },
    {
      question: "How do your AI agents learn and improve over time?",
      answer: "Our AI agents use machine learning to continuously improve based on interactions and feedback. They learn from patterns, corrections, and new information, becoming more effective as they process more data from your business operations."
    },
    {
      question: "What kind of ROI can I expect from implementing AI agents?",
      answer: "Most clients see ROI within 3-6 months. The returns come from time savings (typically 20-40 hours per week for a small team), reduced errors, increased capacity, improved customer satisfaction, and the ability to scale operations without proportionally increasing staff."
    },
    {
      question: "How secure is my data with your AI agents?",
      answer: "Security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and strict access controls. All agents are compliant with GDPR, CCPA, and other relevant regulations, and we never use client data to train other systems."
    },
  ];

  return (
    <section className="py-24 relative" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Get answers to common questions about our AI agent solutions."
        />
        
        <div className="max-w-3xl mx-auto glass-card">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <a 
            href="#book-call" 
            className="text-primary hover:text-primary-light font-medium underline"
          >
            Contact our team for answers
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Clock, FileCheck, Users, Bot, Gauge, Bell, Database } from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: 899,
      maintenance: 250,
      tagline: "Perfect for solopreneurs & small teams automating 1 core workflow",
      features: [
        "1 Custom AI Agent (e.g., Booking Assistant or Lead Nurturer)",
        "Built with Make.com or N8N (no-code workflow automation)",
        "Basic integration with Calendly, Google Sheets, and Email",
        "1 revision included",
        "5 days setup turnaround",
        "Agent blueprint + instructions",
      ],
      isPopular: false,
      icon: <Bot className="w-12 h-12 text-primary" />,
    },
    {
      name: "Pro Automation Stack",
      price: 1499,
      maintenance: 550,
      tagline: "For small businesses automating up to 3 critical workflows",
      features: [
        "Up to 3 Custom AI Agents (Booking, Follow-up, CRM Sync, etc.)",
        "Multi-platform integrations (WhatsApp, Email, CRMs, Forms)",
        "Data pipelines with Make.com / N8N",
        "Slack/Email alert triggers",
        "Onboarding session + SOP video",
        "2 revisions",
        "7-day delivery",
        "Free data enrichment and analysis",
      ],
      isPopular: true,
      icon: <Gauge className="w-12 h-12 text-primary" />,
    },
    {
      name: "Done-For-You Automation Suite",
      price: 3500,
      maintenance: 899,
      isMonthlyMaintenance: true,
      tagline: "Best for serious growth teams scaling with automation",
      features: [
        "Up to 7 AI Agents across your sales + ops workflow",
        "Custom-built GPT workflows with memory/context",
        "Full CRM + Booking + Lead Nurturing setup",
        "Custom dashboards (Notion, Google Sheets, Airtable)",
        "Custom API integration if needed",
        "Priority support + Quarterly Optimization",
        "Launch + SOP + Training for team",
        "3 revisions",
        "10-day delivery",
        "Monthly optimization suggestions",
        "Priority support and rapid fixes",
      ],
      isPopular: false,
      icon: <Database className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Choose Your Automation Plan" 
          subtitle="Select the perfect AI automation package tailored to your business needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-6 inset-x-0 flex justify-center z-10">
                  <div className="bg-primary text-background-start px-6 py-2 rounded-full text-base font-bold shadow-lg shadow-primary/30 transform hover:scale-105 transition-transform">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`glass-card h-full flex flex-col ${
                plan.isPopular ? 'border-2 border-primary scale-105 relative z-0' : 'border-white/10'
              }`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background-mid flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-4xl font-orbitron font-bold">${plan.price}</span>
                    <span className="text-gray-400">one-time</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    +${plan.maintenance} {plan.isMonthlyMaintenance ? 'monthly' : 'one-time'} maintenance fee
                  </div>
                  <p className="text-gray-300 mb-6">{plan.tagline}</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto space-y-4">
                  <Button 
                    variant={plan.isPopular ? 'primary' : 'outline'} 
                    className="w-full justify-center"
                    onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
                  >
                    Get Started
                  </Button>
                  <p className="text-sm text-center text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {plan.name === "Starter" ? "5 days delivery" : 
                     plan.name === "Pro Automation Stack" ? "7 days delivery" : 
                     "10 days delivery"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Limited Time Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="glass-card border-2 border-primary relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-xl opacity-30 animate-pulse"></div>
            <div className="relative p-8 text-center">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-orbitron font-bold mb-2">
                Limited Offer: Get 1 FREE AI Agent Setup
              </h3>
              <p className="text-2xl text-primary mb-2">worth $499</p>
              <p className="text-gray-300 mb-6 text-lg">
                Sign up for any Pro or Suite Plan this week only. Limited to 5 clients per month. Act fast!
              </p>
              <Button variant="primary" size="lg" className="text-lg px-10">
                Claim Your Free Agent Now
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center mt-12 text-gray-300">
          <p>Need a custom plan? <a href="#book-call" className="text-primary hover:text-primary-light underline">Contact us</a> for a tailored solution.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
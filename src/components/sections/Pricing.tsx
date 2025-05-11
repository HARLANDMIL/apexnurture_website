import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Clock, Bot as Robot, MessageSquare, Database, Settings, Info } from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "LeadGen Suite",
      price: 899,
      maintenance: 250,
      tagline: "Perfect for solopreneurs & small teams automating 1 core workflow",
      outcome: "Automate your lead generation and booking process in 5 days",
      features: [
        "1 Custom AI Agent (Booking or Lead Nurturing)",
        "Built with Make.com or N8N",
        "Basic integration (Calendly, Sheets, Email)",
        "1 revision included",
        "5 days setup turnaround",
        "Agent blueprint + instructions",
        "Basic monitoring",
        "Email support"
      ],
      isPopular: false,
      icon: <Robot className="w-12 h-12 text-primary" />,
      delivery: "5 days",
    },
    {
      name: "Pro Automation Stack",
      price: 1499,
      maintenance: 550,
      tagline: "For small businesses automating up to 3 critical workflows",
      outcome: "Triple your workflow efficiency with integrated AI agents",
      features: [
        "Up to 3 Custom AI Agents",
        "Multi-platform integrations",
        "Advanced data pipelines",
        "Slack/Email alert triggers",
        "Onboarding session + SOP video",
        "2 revisions",
        "Priority support",
        "Free data enrichment"
      ],
      isPopular: true,
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      delivery: "7 days",
      badgeColor: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      name: "Done-For-You Suite",
      price: 3500,
      maintenance: 899,
      tagline: "Best for serious growth teams scaling with automation",
      outcome: "Full workflow automation with custom AI integration",
      features: [
        "Up to 7 AI Agents",
        "Custom GPT workflows with memory",
        "Full CRM + Lead Nurturing setup",
        "Custom dashboards & API integration",
        "Quarterly optimization sessions",
        "3 revisions",
        "24/7 priority support",
        "Team training included"
      ],
      isPopular: false,
      icon: <Database className="w-12 h-12 text-primary" />,
      delivery: "10 days",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Choose Your Automation Suite" 
          subtitle="Transform your business with our comprehensive AI automation suites. Each suite is designed to deliver specific outcomes and ROI."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {plan.isPopular && (
                <div className="absolute -top-6 inset-x-0 flex justify-center z-10">
                  <div className={`${plan.badgeColor || 'bg-primary'} text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-primary/30 transform hover:scale-105 transition-transform`}>
                    Most Popular Choice
                  </div>
                </div>
              )}
              
              <div className={`glass-card h-full flex flex-col relative ${
                plan.isPopular ? 'border-2 border-primary shadow-2xl shadow-primary/20' : 'border border-white/10'
              }`}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-background-mid/50 flex items-center justify-center border border-primary/30">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">{plan.name}</h3>
                  <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-orbitron font-bold">
                      ${plan.price}
                      <span className="text-sm font-normal text-gray-400"> one-time</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      +${plan.maintenance}/month maintenance
                      <div className="group relative inline-block ml-2">
                        <Info className="w-4 h-4 text-primary inline cursor-help" />
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-background-mid rounded-lg border border-primary text-xs w-48 pointer-events-none">
                          Includes monitoring, updates, and support
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                    <p className="text-sm font-medium">{plan.tagline}</p>
                  </div>
                  
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-primary text-sm font-medium">{plan.outcome}</p>
                  </div>
                </div>
                
                <div className="flex-grow px-6 pt-0">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-6 mt-6 border-t border-white/10">
                  <Button 
                    variant={plan.isPopular ? 'primary' : 'secondary'} 
                    className="w-full justify-center"
                    onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
                  >
                    Get Started
                  </Button>
                  <p className="text-sm text-center text-gray-400 mt-4">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {plan.delivery} delivery
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
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card border-2 border-primary relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-xl opacity-20 animate-pulse"></div>
            <div className="relative p-8 text-center">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-orbitron font-bold mb-2">
                Limited Time Offer: Build & Launch Any Suite in 7 Days—or It's Free!
              </h3>
              <p className="text-2xl text-primary mb-2">Plus, 50% off first month's Ops Fee</p>
              <p className="text-gray-300 mb-6 text-lg">
                Limited to first 3 clients this month. Secure your spot now!
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="text-lg px-10"
                onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
              >
                Claim Your Spot Now
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center mt-12 text-gray-300">
          <p>Need a custom solution? <a href="#book-call" className="text-primary hover:text-primary-light underline">Schedule a consultation</a> for a tailored automation strategy.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
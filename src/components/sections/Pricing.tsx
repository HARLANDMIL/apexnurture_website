import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Clock, Bot as Robot, MessageSquare, Database, Settings, Info } from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "LeadGen Suite",
      price: 2500,
      maintenance: 499,
      tagline: "Perfect for businesses looking to automate lead generation and booking workflows",
      outcome: "Double your booked calls in 30 days with automated lead nurturing and booking",
      features: [
        "WhatsApp/Email Lead Qualifier",
        "Auto-Booking Agent",
        "CRM Sync & Reporting Dashboard",
        "1 Strategy Call Monthly",
        "2 Revisions",
        "Ongoing monitoring and tuning",
        "Priority support"
      ],
      isPopular: false,
      icon: <Robot className="w-12 h-12 text-primary" />,
      delivery: "7 days",
    },
    {
      name: "Sales Conversion Suite",
      price: 4000,
      maintenance: 799,
      tagline: "For businesses ready to automate their sales funnel and close more deals",
      outcome: "Increase your sales conversion rate by 25% with AI-driven proposals and follow-ups",
      features: [
        "Proposal Writer Bot",
        "Drip Follow-Up Sequence",
        "Sales Q&A Agent (GPT-powered)",
        "Conversion Analytics Dashboard",
        "4 Revisions",
        "Monthly performance reviews",
        "Priority support and hotfixes"
      ],
      isPopular: false,
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      delivery: "7 days",
    },
    {
      name: "Ops & Onboarding Suite",
      price: 3000,
      maintenance: 599,
      tagline: "Streamline client onboarding and support with intelligent automation",
      outcome: "Cut onboarding time by 50% and reduce support queries with automated workflows",
      features: [
        "Client Onboarding Workflow Bot",
        "FAQ & Support Chatbot",
        "No-Show Recovery Agent",
        "SOP Automation & Training Docs",
        "3 Revisions",
        "Ongoing monitoring and updates",
        "Priority support"
      ],
      isPopular: false,
      icon: <Settings className="w-12 h-12 text-primary" />,
      delivery: "7 days",
    },
    {
      name: "Full Automation Suite",
      price: 8000,
      maintenance: 1199,
      tagline: "The ultimate solution for businesses seeking complete AI-driven automation",
      outcome: "Achieve 90% automation across your business, driving efficiency and revenue growth",
      features: [
        "All 12+ Agents from Above Suites",
        "Custom API Integrations",
        "Dedicated Success Manager",
        "Quarterly Optimization Workshop",
        "Unlimited Revisions",
        "Comprehensive monitoring",
        "Dedicated support manager"
      ],
      isPopular: true,
      icon: <Database className="w-12 h-12 text-primary" />,
      delivery: "7 days",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Choose Your Automation Suite" 
          subtitle="Unlock the full potential of AI automation with our comprehensive suites. Each suite delivers a specific business outcome—whether it's lead generation, sales conversion, or operational efficiency. Start seeing results in as little as 7 days."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="bg-primary text-background-start px-6 py-2 rounded-full text-base font-bold shadow-lg shadow-primary/30 transform hover:scale-105 transition-transform">
                    Best Value
                  </div>
                </div>
              )}
              
              <div className={`glass-card h-full flex flex-col hover:scale-105 transition-transform duration-300 ${
                plan.isPopular ? 'border-2 border-primary relative z-0' : 'border-white/10'
              }`}>
                <div className="text-center mb-6 p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background-mid flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-4xl font-orbitron font-bold">${plan.price}</span>
                    <span className="text-gray-400">setup</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    +${plan.maintenance}/month maintenance
                    <div className="group relative inline-block ml-2">
                      <Info className="w-4 h-4 text-primary inline cursor-help" />
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-background-mid rounded-lg border border-primary text-xs w-48 pointer-events-none">
                        Includes ongoing monitoring, tuning, and priority support
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.tagline}</p>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-primary text-sm font-medium">{plan.outcome}</p>
                  </div>
                </div>
                
                <div className="flex-grow p-6 pt-0">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 space-y-4">
                  <Button 
                    variant={plan.isPopular ? 'primary' : 'outline'} 
                    className="w-full justify-center"
                    onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
                  >
                    Get Started
                  </Button>
                  <p className="text-sm text-center text-gray-400">
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
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="glass-card border-2 border-[#FF4500] relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4500] to-primary blur-xl opacity-30 animate-pulse"></div>
            <div className="relative p-8 text-center">
              <Zap className="w-16 h-16 text-[#FF4500] mx-auto mb-4" />
              <h3 className="text-3xl font-orbitron font-bold mb-2">
                Limited Time Offer: Build & Launch Any Suite in 7 Days—or It's Free!
              </h3>
              <p className="text-2xl text-[#FF4500] mb-2">Plus, 50% off first month's Ops Fee</p>
              <p className="text-gray-300 mb-6 text-lg">
                Limited to first 3 clients this month. Secure your spot now!
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="text-lg px-10 bg-gradient-to-r from-primary to-[#00FFFF] hover:scale-105 transition-transform"
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
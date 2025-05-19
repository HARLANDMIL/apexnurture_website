import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Countdown from 'react-countdown';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

// Define types for clarity
interface Suite {
  name: string;
  icon: string;
  description: string;
  setupPrice: number;
  monthlyPrice: number;
  yearlyPrice: number;
  goal: string;
  outcome: string;
  features: string[];
  tooltip: string;
}

// Helper component for pricing cards
const PricingCard: React.FC<{ suite: Suite; isYearly: boolean }> = ({ suite, isYearly }) => {
  return (
    <GlassCard 
      className="h-full hover:scale-105 transition-transform duration-300"
      borderColor="border-purple-500/30"
      glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]"
    >
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
            <i className={`fa ${suite.icon} text-4xl text-purple-400`}></i>
          </div>
          <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">{suite.name}</h3>
          <p className="text-gray-400">{suite.description}</p>
        </div>

        <div className="text-center mb-8">
          <div className="text-3xl font-orbitron font-bold text-white mb-2">
            ${suite.setupPrice.toLocaleString()} <span className="text-base text-gray-400">setup</span>
          </div>
          <div className="text-xl text-purple-300">
            ${isYearly ? Math.round(suite.yearlyPrice / 12).toLocaleString() : suite.monthlyPrice.toLocaleString()} 
            <span className="text-sm text-gray-400">/ month</span>
          </div>
          {isYearly && (
            <div className="text-green-400 text-sm mt-2">
              Save ${(suite.monthlyPrice * 12 - suite.yearlyPrice).toLocaleString()} yearly
            </div>
          )}
        </div>

        <div className="space-y-4 mb-8">
          <div className="text-green-400 font-semibold">{suite.goal}</div>
          <div className="text-gray-300">{suite.outcome}</div>
          <ul className="space-y-2">
            {suite.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <i className="fa fa-check text-purple-400"></i>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 relative group overflow-hidden"
          onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </Button>
      </div>
    </GlassCard>
  );
};

// Main Pricing component
const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  
  // Deadline: May 21, 2025, 11:31 AM SAST
  const deadline = new Date('2025-05-21T11:31:00+02:00').getTime();
  
  const faqs = [
    {
      question: "What makes your AI agents different from ChatGPT?",
      answer: "Unlike ChatGPT, our AI agents are custom-built for your specific business processes, integrate with your existing tools, and operate 24/7 without human intervention. They learn from your business data and improve over time."
    },
    {
      question: "How long does implementation take?",
      answer: "Our Ready-to-Go suites can be implemented within 7-14 days. For the Precision AI Implementation Suite, we typically complete the full setup within 30 days, with initial automation starting in as little as 2 weeks."
    },
    {
      question: "Do I need technical knowledge to use the AI agents?",
      answer: "No technical knowledge is required. We handle all the technical implementation and provide a user-friendly dashboard for monitoring. Our team also provides comprehensive training and ongoing support."
    },
    {
      question: "What kind of ROI can I expect?",
      answer: "Our clients typically see 200-300% ROI within the first 3 months. This comes from reduced labor costs, increased efficiency, and improved customer satisfaction. We provide detailed ROI tracking through our analytics dashboard."
    },
    {
      question: "What happens after implementation?",
      answer: "You'll receive ongoing support, monthly optimization sessions, and regular updates to your AI agents. We monitor performance 24/7 and make proactive improvements to ensure maximum efficiency."
    }
  ];
  
  const suites = [
    {
      name: "E-Commerce Growth Suite",
      icon: "fa-shopping-cart",
      description: "Boost Sales and Streamline Operations with AI",
      setupPrice: 2999,
      monthlyPrice: 599,
      yearlyPrice: 5990, // 10 months for annual billing
      goal: "Increase online sales by 15-25% within 30 days",
      outcome: "Recover abandoned carts and automate customer service",
      features: [
        "AI-Powered Cart Recovery Agent",
        "Customer Service Chatbot",
        "Inventory Sync Automation",
        "Real-Time Analytics Dashboard"
      ],
      tooltip: "Perfect for online stores looking to increase sales and automate customer service"
    },
    {
      name: "Healthcare Admin Suite",
      icon: "fa-hospital",
      description: "Focus on Patient Care, Not Admin Tasks",
      setupPrice: 3499,
      monthlyPrice: 699,
      yearlyPrice: 6990,
      goal: "Reduce admin workload by 70% within 45 days",
      outcome: "Decrease no-shows and improve patient retention",
      features: [
        "AI Scheduling Agent",
        "Billing Automation",
        "Patient Follow-Up System",
        "Compliance Dashboard"
      ],
      tooltip: "Ideal for medical practices wanting to reduce administrative burden"
    },
    {
      name: "Real Estate Transaction Suite",
      icon: "fa-home",
      description: "Close Deals Faster with AI Automation",
      setupPrice: 2799,
      monthlyPrice: 549,
      yearlyPrice: 5490,
      goal: "Speed up deal closures by 10% within 45 days",
      outcome: "Reduce errors and improve response rates",
      features: [
        "Lead Qualification AI",
        "Document Automation",
        "Client Follow-Up System",
        "Transaction Tracking Dashboard"
      ],
      tooltip: "Perfect for real estate agencies looking to streamline transactions"
    }
  ];
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]" id="pricing">
      {/* Aurora Effect Overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 animate-aurora"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Hero Pricing Intro */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
            style={{ textShadow: "0 0 15px rgba(128, 0, 128, 0.7)" }}
          >
            Elevate Your Business with AI Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins"
          >
            Discover our Precision Suite or Ready-to-Go solutions for instant impact
          </motion.p>
          

          <GlassCard 
            className="w-full hover:border-purple-500/50 transition-all duration-300"
            borderColor="border-purple-500/30"
            glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <TypeAnimation
                  sequence={[
                    'Precision AI Implementation Suite',
                    1000,
                    'Custom AI Agents for Your Business',
                    1000
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                  className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-white"
                  style={{ textShadow: "0 0 15px rgba(128, 0, 128, 0.8)" }}
                />
                <p className="text-xl text-purple-300 font-poppins">Bespoke AI Agents Tailored to Your Business Needs</p>
              </div>

              {/* Pricing & Offer */}
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <span className="absolute -top-6 right-0 bg-purple-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                    Save $4,500/year
                  </span>
                  <div className="text-4xl font-orbitron font-bold text-white mb-2">
                    $4,999 <span className="text-xl text-gray-400">setup</span>
                  </div>
                  <div className="text-2xl font-orbitron text-purple-300 mb-4">
                    $1,499 <span className="text-base text-gray-400">/ month</span>
                  </div>
                  <div className="text-green-400 font-bold mb-2">First Year Special: $1,124/mo</div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="grid md:grid-cols-4 gap-8 mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-500/20 hidden md:block"></div>
                {[
                  { icon: "search", title: "Audit Workflows", desc: "2-week analysis", tooltip: "Detailed 15-page PDF with actionable insights" },
                  { icon: "code", title: "Design AI Agents", desc: "Custom solutions", tooltip: "2–4 tailored agents for your business" },
                  { icon: "plug", title: "Implement", desc: "30-day deployment", tooltip: "Fully integrated into your systems" },
                  { icon: "tools", title: "Optimize", desc: "Monthly updates", tooltip: "Priority support and continuous fine-tuning" }
                ].map((step, i) => (
                  <div key={i} className="text-center relative">
                    <div className="relative z-10 bg-background p-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group hover:bg-purple-500/20 transition-all duration-300">
                        <i className={`fa fa-${step.icon} text-3xl text-purple-400 group-hover:text-purple-300`} title={step.tooltip}></i>
                      </div>
                      <h3 className="font-orbitron font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA & Timer */}
              <div className="text-center">
                <div className="mb-6 inline-block bg-purple-500/10 px-6 py-3 rounded-full border border-purple-500/30">
                  <span className="text-purple-300 font-orbitron">
                    Exclusive Offer: Free 2-Week Workflow Audit ($999 Value)
                  </span>
                </div>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-xl px-12 py-4 mb-4 relative group overflow-hidden"
                  onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
                >
                  <span className="relative z-10">Get Free Audit Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                <div className="text-orange-400 font-orbitron animate-pulse">
                  <div className="text-lg font-bold mb-2">Only 5 Spots Left!</div>
                  <Countdown 
                    date={deadline}
                    renderer={({ days, hours, minutes }) => (
                      <div className="flex items-center justify-center gap-4">
                        <div className="bg-purple-500/10 px-3 py-1 rounded">
                          <span className="font-bold">{days}d</span>
                        </div>
                        <div className="bg-purple-500/10 px-3 py-1 rounded">
                          <span className="font-bold">{hours}h</span>
                        </div>
                        <div className="bg-purple-500/10 px-3 py-1 rounded">
                          <span className="font-bold">{minutes}m</span>
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Ready-to-Go Suites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {suites.map((suite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <PricingCard suite={suite} isYearly={isYearly} />
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard 
                key={index}
                className="overflow-hidden transition-all duration-300"
                borderColor={selectedFaq === index ? "border-purple-500" : "border-purple-500/30"}
                glowColor="shadow-[0_0_24px_4px_rgba(128,0,128,0.2)]"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <span className="font-orbitron text-white">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-purple-400 transition-transform ${
                      selectedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {selectedFaq === index && (
                  <div className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <GlassCard
            className="max-w-3xl mx-auto p-12"
            borderColor="border-purple-500/30"
            glowColor="shadow-[0_0_32px_8px_rgba(128,0,128,0.3)]"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-poppins">
              Book a Free Demo Today and See How Our AI Agents Can Transform Your Operations
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-xl px-12 py-4 relative group overflow-hidden"
              onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
            >
              <span className="relative z-10">Book Your Free Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
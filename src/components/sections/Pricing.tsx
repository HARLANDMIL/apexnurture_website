import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users,
  Bot,
  Zap,
  CheckCircle,
  Info,
  ArrowRight
} from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  const suites = [
    {
      name: "Lead-to-Client Conversion",
      accentColor: "from-[#00FFFF] to-[#0099FF]",
      badge: "For Coaches & Consultants",
      price: 2500,
      maintenance: 550,
      headline: "Turn Leads into Clients Fast",
      keyBenefit: "3×–5× more booked calls",
      icon: <MessageSquare className="w-12 h-12" />,
      href: "/lead-to-client",
      features: [
        "AI Appointment Setter with smart qualification",
        "Content Repurposer for lead magnets",
        "Auto-Follow-Up with 40% higher response rates",
        "Real-time CRM Dashboard integration"
      ]
    },
    {
      name: "Recruitment Automation",
      accentColor: "from-[#00FF00] to-[#00CC00]",
      badge: "For Recruitment Agencies",
      price: 3000,
      maintenance: 700,
      headline: "Place Candidates 30% Faster",
      keyBenefit: "Cut screening time by 70%",
      icon: <Users className="w-12 h-12" />,
      href: "/recruitment-automation",
      features: [
        "CV Screening Bot with 90% accuracy",
        "Smart candidate matching system",
        "Automated follow-up sequences",
        "Placement pipeline dashboard"
      ]
    },
    {
      name: "Smart Business Ops",
      accentColor: "from-[#FF69B4] to-[#FF1493]",
      badge: "For SMBs",
      price: 3500,
      maintenance: 700,
      headline: "Save 20+ Hours/Week",
      keyBenefit: "Streamline ops instantly",
      icon: <Bot className="w-12 h-12" />,
      href: "/business-ops",
      features: [
        "AI Support Bot with 70% resolution rate",
        "Smart quotation generator",
        "Automated task scheduling",
        "Self-learning FAQ system"
      ]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Find Your AI Solution" 
          subtitle="Solve your biggest challenge with our AI Suites or a custom solution. Results in 14–30 days—guaranteed."
        />
        
        {/* Main Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {suites.map((suite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`bg-gradient-to-r ${suite.accentColor} px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
                  {suite.badge}
                </div>
              </div>

              {/* Card */}
              <div className="h-full glass-card border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${suite.accentColor} bg-opacity-10 flex items-center justify-center`}>
                    {suite.icon}
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">{suite.headline}</h3>
                  <p className="text-lg text-gray-300 mb-4">{suite.keyBenefit}</p>
                  
                  {/* Pricing */}
                  <div className="text-4xl font-orbitron font-bold">
                    ${suite.price}
                    <span className="text-sm font-normal text-gray-400"> one-time</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    +${suite.maintenance}/month maintenance
                    <div className="group relative inline-block ml-2">
                      <Info className="w-4 h-4 text-primary inline cursor-help" />
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-background-mid rounded-lg border border-primary text-xs w-48 pointer-events-none">
                        Includes monitoring, updates, and support
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {suite.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full justify-center bg-gradient-to-r ${suite.accentColor} hover:shadow-lg transition-all duration-300`}
                  onClick={() => window.location.href = suite.href}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom AI Development */}
        {/*}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#800080] to-[#4B0082] blur-xl opacity-30"></div>
          <div className="glass-card relative border-2 border-[#800080]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-orbitron font-bold mb-4">Need a Tailored Solution?</h3>
                <p className="text-xl mb-6">Custom AI starting at $1,500. Boost conversions, cut errors, and more.</p>
                
                <div className="space-y-4">
                  {[
                    "AI Sales Chatbot: Boosts conversions by 15%",
                    "AI Compliance Bot: Cuts errors by 90%",
                    "AI Lead Qualification: Improves lead quality by 30%"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#800080]" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="mt-8 bg-gradient-to-r from-[#800080] to-[#4B0082] hover:shadow-lg hover:shadow-[#800080]/25"
                  onClick={() => window.location.href = '/custom-ai-solutions'}
                >
                  Book a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="glass-card !bg-white/5">
                <div className="absolute -top-4 right-4">
                  <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                    First 5 clients get 10% off setup
                  </div>
                </div>
                
                <h4 className="text-lg font-orbitron font-bold mb-4">Our 4-Step Process</h4>
                <div className="space-y-4">
                  {[
                    "Share Needs → Discovery Call",
                    "Build & Test → Launch & Grow",
                    "Results in 14–30 days or your money back"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#800080]/20 flex items-center justify-center">
                        <span className="text-sm font-medium">{i + 1}</span>
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div> /*}

        {/* Trust Signal */}
        <div className="text-center mt-12 text-gray-300">
          Trusted by 100+ businesses in SA and UAE. Results in 14–30 days or your money back.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
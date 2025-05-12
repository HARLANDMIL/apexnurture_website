import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Calendar,
  Bot,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Rocket,
  Settings,
  FileText,
  Database,
  Code,
  Workflow
} from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  const suites = [
    {
      name: "AI Lead Generation Suite",
      accentColor: "from-[#00FFFF] to-[#0099FF]",
      badge: "Lead Magnet",
      price: 1800,
      maintenance: 499,
      primaryGoal: "Generate, qualify, and convert leads on autopilot across multiple platforms",
      problemsSolved: "Slow follow-ups, wasted leads, manual booking, low conversion rates",
      icon: <MessageSquare className="w-12 h-12" />,
      deliverables: [
        "AI Booking Agent (WhatsApp/Email/Website)",
        "Lead Nurturing Agent (contextual drip messaging)",
        "CRM Auto-Sync (Pipedrive, HubSpot, etc.)",
        "Lead Dashboard (Airtable/Notion/Google Sheets)",
        "WhatsApp DM Automation",
        "Onboarding & SOP Video, 2 Revisions"
      ],
      outcome: "2–5x more booked calls with the same traffic, 50% less manual effort, 24/7 lead conversion",
      ctaText: "Get Started with LeadGen"
    },
    {
      name: "Support & Retention Suite",
      accentColor: "from-[#00FF00] to-[#00CC00]",
      badge: "Customer Happiness",
      price: 1500,
      maintenance: 499,
      primaryGoal: "Automate 24/7 customer support and boost retention with intelligent workflows",
      problemsSolved: "Overloaded support staff, long response times, missed renewals",
      icon: <Users className="w-12 h-12" />,
      deliverables: [
        "AI Support Agent (FAQ + GPT-powered intent handling)",
        "WhatsApp Support Bot (with human escalation)",
        "Renewal/Check-in Follow-up Agent",
        "Ticket System Integration (optional)",
        "Customer Feedback Collector",
        "Onboarding, SOP Video, Training Guide, 3 Revisions"
      ],
      outcome: "50–70% fewer support tickets, higher customer retention, 24/7 intelligent responses",
      ctaText: "Get Started with Support"
    },
    {
      name: "AI Growth Suite",
      accentColor: "from-[#FF69B4] to-[#FF1493]",
      badge: "Recommended",
      price: 2000,
      maintenance: 599,
      primaryGoal: "Scale your brand presence with AI-driven content marketing and outreach",
      problemsSolved: "Slow content creation, inconsistent social presence, manual outreach",
      icon: <Rocket className="w-12 h-12" />,
      isPopular: true,
      deliverables: [
        "AI Content Repurposing Pipeline (webinar to 10+ pieces)",
        "Email/DM Outreach Agent (personalized B2B prospecting)",
        "Content Scheduler/Poster (LinkedIn, Instagram, etc.)",
        "Notion Content Dashboard + GPT Writing Assistant",
        "Influencer/Lead Sourcing Workflow",
        "Onboarding, SOP Video, 2 Strategy Calls, 2 Revisions"
      ],
      outcome: "10–20x more content output, consistent inbound leads, no need for expensive teams",
      ctaText: "Get Started with Growth"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Unlock Growth with Our AI Automation Suites" 
          subtitle="Choose the perfect AI automation suite to transform your business. Each suite is designed to solve specific challenges, save you time, and drive measurable results. From lead generation to custom workflows, we've got you covered—starting in as little as 7 days."
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
                <div className={`bg-gradient-to-r ${suite.accentColor} px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-${suite.accentColor}/30`}>
                  {suite.badge}
                </div>
              </div>

              {/* Card */}
              <div className={`h-full glass-card border border-white/10 hover:border-${suite.accentColor}/50 transition-all duration-300 backdrop-blur-xl ${
                suite.isPopular ? 'ring-2 ring-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : ''
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${suite.accentColor} bg-opacity-10 flex items-center justify-center`}>
                    {suite.icon}
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">{suite.name}</h3>
                  <div className="w-24 h-[2px] bg-gradient-to-r from-white/20 to-white/0 mx-auto mb-4"></div>
                  
                  {/* Pricing */}
                  <div className="text-4xl font-orbitron font-bold">
                    ${suite.price}
                    <span className="text-sm font-normal text-gray-400"> one-time</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    +${suite.maintenance}/month maintenance
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Primary Goal */}
                  <div className="p-4 rounded-lg bg-white/5">
                    <p className="font-medium text-center">{suite.primaryGoal}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    {suite.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 text-gradient-${suite.accentColor}`} />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                    <p className="text-sm font-medium text-center">{suite.outcome}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button 
                    className={`w-full justify-center bg-gradient-to-r ${suite.accentColor} hover:shadow-lg hover:shadow-${suite.accentColor}/25 transition-all duration-300`}
                    onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
                  >
                    {suite.ctaText}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom AI Workflow Suite (Horizontal Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-16"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#800080] to-[#4B0082] blur-xl opacity-30"></div>
          <div className="glass-card relative border-2 border-[#800080] backdrop-blur-xl">
            <div className="absolute -top-4 left-8">
              <div className="bg-gradient-to-r from-[#800080] to-[#4B0082] px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                Premium Solution
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-orbitron font-bold mb-4">Custom AI Workflow Suite</h3>
                <p className="text-xl mb-6">Solve your unique, high-impact challenges with a fully custom AI automation system</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Deep Discovery Call + Problem Mapping",
                    "Custom GPT Workflow (Make.com/N8N/Gumloop)",
                    "3–6 Step Automation Pipeline",
                    "CRM/Internal Tool Integrations (API-based)",
                    "Custom Interface or Dashboard (if needed)",
                    "Full Documentation + Training, 2–3 Revisions"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#800080] mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="mb-6">
                  <div className="text-4xl font-orbitron font-bold">
                    $2,500–$5,000+
                    <span className="text-sm font-normal text-gray-400"> one-time</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    +$699+/month maintenance
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 mb-8">
                  <p className="font-medium">
                    Tailored solution to save time/money, high perceived value, perfect for premium clients
                  </p>
                </div>

                <Button 
                  className="w-full md:w-auto px-12 bg-gradient-to-r from-[#800080] to-[#4B0082] hover:shadow-lg hover:shadow-[#800080]/25"
                  onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
                >
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Limited Time Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-24"
        >
          <div className="glass-card border-2 border-primary relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-xl opacity-20 animate-pulse"></div>
            <div className="relative p-12 text-center">
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
                className="text-lg px-12 py-6 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
                onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
              >
                Claim Your Spot Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
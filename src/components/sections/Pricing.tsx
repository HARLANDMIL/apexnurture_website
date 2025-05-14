import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users,
  Bot,
  Zap,
  CheckCircle,
  Info,
  Clock,
  FileText,
  Shield
} from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  const suites = [
    {
      name: "Lead-to-Client Conversion AI Suite",
      accentColor: "from-[#00FFFF] to-[#0099FF]",
      badge: "For Coaches & Consultants",
      price: 2500,
      maintenance: 550,
      primaryGoal: "Turn leads into booked calls effortlessly",
      problemsSolved: "Manual follow-ups, missed opportunities, scheduling chaos",
      icon: <MessageSquare className="w-12 h-12" />,
      deliverables: [
        {
          title: "AI Appointment Setter",
          description: "Books 3x more calls with smart qualification"
        },
        {
          title: "Webinar Repurposer",
          description: "Creates 10+ content pieces from each webinar"
        },
        {
          title: "Auto-Follow-Up",
          description: "Increases response rates by 40% with smart timing"
        },
        {
          title: "CRM Dashboard",
          description: "Tracks conversion metrics in real-time"
        }
      ],
      outcome: "3×–5× more booked calls, 50% less manual work, and consistent lead nurturing",
      ctaText: "Get Started Now"
    },
    {
      name: "AI Recruitment Automation Suite",
      accentColor: "from-[#00FF00] to-[#00CC00]",
      badge: "For Recruitment Agencies",
      price: 3000,
      maintenance: 700,
      primaryGoal: "Speed up placements with AI precision",
      problemsSolved: "Slow CV screening, manual matching, delayed follow-ups",
      icon: <Users className="w-12 h-12" />,
      deliverables: [
        {
          title: "CV Screening Bot",
          description: "Processes 100+ CVs in minutes with 90% accuracy"
        },
        {
          title: "Job Match Scorecard",
          description: "Ranks candidates automatically with custom criteria"
        },
        {
          title: "Follow-Up Agent",
          description: "Maintains engagement with personalized messaging"
        },
        {
          title: "CRM Tracker",
          description: "Monitors placement pipeline in real-time"
        }
      ],
      outcome: "30% faster placements, doubled candidate pipeline, automated screening",
      ctaText: "Get Started Now"
    },
    {
      name: "Smart Business Ops Suite",
      accentColor: "from-[#FF69B4] to-[#FF1493]",
      badge: "For SMBs",
      price: 3500,
      maintenance: 700,
      primaryGoal: "Automate ops and save time",
      problemsSolved: "Repetitive tasks, support overload, manual scheduling",
      icon: <Bot className="w-12 h-12" />,
      deliverables: [
        {
          title: "AI Support Bot",
          description: "Resolves 70% of queries automatically"
        },
        {
          title: "Quotation Generator",
          description: "Creates accurate quotes in seconds"
        },
        {
          title: "Task Scheduler",
          description: "Automates routine task management"
        },
        {
          title: "FAQ Bot",
          description: "Learns from customer interactions"
        }
      ],
      outcome: "Saves 20+ hours/week, improves response times by 80%, reduces errors",
      ctaText: "Get Started Now"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Choose Your AI Automation Suite" 
          subtitle="Transform your business with AI suites built for results. See impact in as little as 7 days."
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
                  <h3 className="text-2xl font-orbitron font-bold mb-2">{suite.name}</h3>
                  <div className="w-24 h-[2px] bg-gradient-to-r from-white/20 to-white/0 mx-auto mb-4"></div>
                  
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

                {/* Content */}
                <div className="space-y-6">
                  {/* Primary Goal */}
                  <div className="p-4 rounded-lg bg-white/5">
                    <p className="font-medium text-center">{suite.primaryGoal}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-4">
                    {suite.deliverables.map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 text-primary" />
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-gray-400">{item.description}</div>
                          </div>
                        </div>
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
                    className={`w-full justify-center bg-gradient-to-r ${suite.accentColor} hover:shadow-lg transition-all duration-300`}
                    onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
                  >
                    {suite.ctaText}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom AI Development */}
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
                Custom AI Development
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-orbitron font-bold mb-4">Custom AI for Your Unique Needs</h3>
                <p className="text-xl mb-6">Tailored solutions starting at $1,500–$5,000 one-time + $500–$1,000/month</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "AI Sales Chatbot",
                      description: "Increases conversions by 15% with smart lead qualification"
                    },
                    {
                      title: "AI Proposal Generator",
                      description: "Creates custom proposals 60% faster with higher win rates"
                    },
                    {
                      title: "AI Compliance Bot",
                      description: "Reduces compliance errors by 90% with automated checks"
                    }
                  ].map((example, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#800080] mt-1" />
                      <div>
                        <div className="font-medium">{example.title}</div>
                        <div className="text-sm text-gray-400">{example.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Example Custom Solution */}
                <div className="glass-card !bg-white/5 mb-8">
                  <h4 className="text-lg font-orbitron font-bold mb-4">Example Custom Solution</h4>
                  <p className="text-sm text-gray-400 mb-4">
                    A real estate agency needed to automate their property viewing scheduling:
                  </p>
                  <div className="space-y-3">
                    {[
                      "AI Scheduler reduced booking time by 80%",
                      "Automated follow-ups increased viewing attendance by 40%",
                      "Integration with CRM improved lead tracking by 60%",
                      "Custom dashboard provided real-time performance metrics"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#800080]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-medium">{i + 1}</span>
                        </div>
                        <p className="text-sm">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full md:w-auto px-12 bg-gradient-to-r from-[#800080] to-[#4B0082] hover:shadow-lg hover:shadow-[#800080]/25"
                  onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
                >
                  Book Free Consultation
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
                10% Off Setup Fee If You Sign Up in 7 Days!
              </h3>
              <p className="text-2xl text-primary mb-2">Plus, First Month's Maintenance Free</p>
              <p className="text-gray-300 mb-6">
                Trusted by 50+ UAE agencies and 100+ SA SMBs
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="text-lg px-12 py-6 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
                onClick={() => window.open('https://forms.fillout.com/t/rpJmYE6G9tus', '_blank')}
              >
                Claim Your Discount Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
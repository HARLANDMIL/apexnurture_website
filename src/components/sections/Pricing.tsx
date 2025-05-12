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
  Workflow,
  Info
} from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Pricing: React.FC = () => {
  const suites = [
    {
      name: "AI Lead Generation Suite",
      accentColor: "from-[#00FFFF] to-[#0099FF]",
      badge: "Most Popular",
      price: 1799,
      maintenance: 895,
      primaryGoal: "Generate, qualify, and convert leads on autopilot across multiple platforms",
      problemsSolved: "Slow follow-ups, wasted leads, manual booking, low conversion rates",
      icon: <MessageSquare className="w-12 h-12" />,
      deliverables: [
        {
          title: "AI Booking Agent",
          description: "Converts 30% more inbound leads into booked calls via WhatsApp/Email/Website"
        },
        {
          title: "Lead Nurturing Agent",
          description: "Increases lead response rates by 40% with contextual drip messaging"
        },
        {
          title: "CRM Auto-Sync",
          description: "Saves 5+ hours/week by automating data entry (Pipedrive, HubSpot, etc.)"
        },
        {
          title: "Lead Dashboard",
          description: "Tracks lead-to-call conversion rates in real-time (Airtable/Notion/Google Sheets)"
        },
        {
          title: "WhatsApp DM Automation",
          description: "Engages 80% of ad responders within 5 minutes"
        },
        {
          title: "Onboarding & SOP Video",
          description: "Ensures 100% setup clarity with 2 revisions included"
        }
      ],
      outcome: "Generate 2–5x more booked calls, reduce manual effort by 50%, and add $5,000–$10,000/month in new revenue",
      ctaText: "Get Started with LeadGen"
    },
    {
      name: "Recruitment Suite",
      accentColor: "from-[#00FF00] to-[#00CC00]",
      badge: "Customer Happiness",
      price: 1499,
      maintenance: 795,
      primaryGoal: "Speed up placements, reduce admin time, and boost revenue with end-to-end AI automation",
      problemsSolved: "Slow candidate sourcing, manual scheduling, low response rates",
      icon: <Users className="w-12 h-12" />,
      deliverables: [
        {
          title: "AI Candidate Follow-up Bot",
          description: "Engages candidates via Email/WhatsApp, reducing follow-up time by 60%",
        },


        {
          title: "Interview Booking Automation",
          description: "Cuts scheduling time by 50& with auto-syn(eg.Calendy, Google Workspace, MsOffice) "
        },
        {
          title: "Linkedln Cold Outreach Agent",
          description: "Sources 50+ high-quality candidates/month with personalized messages"


        },
        {
          title: "Custom Pipeline & Applicant Tracking Dashboard",
          description: "Organizes candidates in your CRM (e.g., GoHighLevel), saving 5+ hours/week"


        },
        {
          title: "Client Status Update Automation",
          description: "ends weekly updates, boosting client satisfaction by 20%."
        },
        {
          title: "Onboarding & Training Support",
          description: "Ensures team adoption in under 1 week with SOP videos and 2 revisions"
        }
      ],
      outcome: "Reduce candidate sourcing time by 50%, increase placements by 20%, and save income  on admin tasks",
      ctaText: "Get Started with Recruitment"
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
        {
          title: "AI Content Repurposing Pipeline",
          description: "Produces 10+ pieces of content per asset, saving 20+ hours/month"
        },
        {
          title: "Email/DM Outreach Agent",
          description: "Generates 15% more responses with personalized B2B prospecting"
        },
        {
          title: "Content Scheduler/Poster",
          description: "Boosts social engagement by 30% with auto-posts (LinkedIn, Instagram, etc.)"
        },
        {
          title: "Notion Content Dashboard",
          description: "Cuts content planning time by 50% with GPT Writing Assistant"
        },
        {
          title: "Influencer/Lead Sourcing Workflow",
          description: "Identifies 50+ high-potential leads/month for outreach"
        },
        {
          title: "Complete Onboarding",
          description: "100% clarity with SOP video, 2 strategy calls, 2 revisions"
        }
      ],
      outcome: "Increase content output by 10–20x, grow inbound leads by 20%, and save $3,000–$5,000/month on content teams",
      ctaText: "Get Started with Growth"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Unlock Growth with Our AI Automation Suites" 
          subtitle="Choose the perfect AI automation suite to transform your business. Each suite delivers measurable results—saving time, boosting revenue, and streamlining operations. Start seeing impact in as little as 7 days."
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
                    <div className="group relative inline-block ml-2">
                      <Info className="w-4 h-4 text-primary inline cursor-help" />
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-background-mid rounded-lg border border-primary text-xs w-48 pointer-events-none">
                        Includes consultations, updates, and support
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
                          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 text-gradient-${suite.accentColor}`} />
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

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-orbitron font-bold mb-4">Custom AI Workflow Suite</h3>
                <p className="text-xl mb-6">Solve your unique, high-impact challenges with a fully custom AI automation system</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Deep Discovery Call + Problem Mapping",
                      description: "Identifies your top bottleneck, saving 10–20 hours/week"
                    },
                    {
                      title: "Custom GPT Workflow",
                      description: "Automates a critical process, reducing errors by 90%"
                    },
                    {
                      title: "3–6 Step Automation Pipeline",
                      description: "Streamlines operations, cutting process time by 50%"
                    },
                    {
                      title: "CRM/Internal Tool Integrations",
                      description: "Syncs data seamlessly, saving 5+ hours/week"
                    },
                    {
                      title: "Custom Interface or Dashboard",
                      description: "Improves decision-making by 30% with real-time insights"
                    },
                    {
                      title: "Full Documentation Package",
                      description: "Ensures 100% team adoption in under 1 week"
                    }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#800080] mt-1" />
                      <div>
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-sm text-gray-400">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <div className="text-4xl font-orbitron font-bold">
                    $2,500–$5,000+
                    <span className="text-sm font-normal text-gray-400"> one-time</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    +$699+/month maintenance
                    <div className="group relative inline-block ml-2">
                      <Info className="w-4 h-4 text-primary inline cursor-help" />
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-background-mid rounded-lg border border-primary text-xs w-48 pointer-events-none">
                        Includes tuning, extensions, monitoring
                      </div>
                    </div>
                  </div>
                </div>

                {/* Example Workflow */}
                <div className="glass-card !bg-white/5 mb-8">
                  <h4 className="text-lg font-orbitron font-bold mb-4">Example Custom Workflow</h4>
                  <p className="text-sm text-gray-400 mb-4">
                    A real estate agency in the UAE struggles with manually qualifying leads and scheduling property viewings across multiple agents.
                  </p>
                  <div className="space-y-3">
                    {[
                      "AI Lead Qualifier captures and scores leads from website forms and WhatsApp inquiries, filtering out low-intent prospects (e.g., 70% accuracy)",
                      "Auto-Scheduling Agent syncs with agents' calendars (via Calendly API) and books viewings, reducing scheduling time by 80%",
                      "Follow-Up Agent sends personalized post-viewing messages via WhatsApp, increasing follow-up conversion by 25%",
                      "Custom Dashboard in Airtable tracks lead-to-viewing conversion rates, helping optimize marketing spend by 15%"
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#800080]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-medium">{i + 1}</span>
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
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
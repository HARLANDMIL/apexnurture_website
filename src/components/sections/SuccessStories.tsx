import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      company: "TechFlow Solutions",
      industry: "Software Development",
      title: "From Email Chaos to Inbox Zero",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "TechFlow's customer support team was drowning in emails, with response times averaging 24+ hours. Our custom AI email agent now categorizes, prioritizes, and responds to 80% of inquiries automatically.",
      results: [
        { icon: <Clock />, label: "Response time reduced from 24 hours to 30 minutes" },
        { icon: <DollarSign />, label: "Customer retention improved by 35%" },
      ],
      quote: "We've completely transformed our customer experience while saving thousands in staffing costs.",
      person: "Sarah Johnson, CEO",
    },
    {
      company: "GrowthBox Marketing",
      industry: "Digital Marketing",
      title: "AI-Powered Content Creation",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "GrowthBox needed to scale content creation for dozens of clients without expanding their team. Our AI content generation agents now produce blog drafts, social posts, and email newsletters at 5x their previous pace.",
      results: [
        { icon: <Clock />, label: "Content production increased by 400%" },
        { icon: <DollarSign />, label: "Client capacity doubled without adding staff" },
      ],
      quote: "These AI agents have become our secret weapon for scaling our agency.",
      person: "Michael Zhang, Marketing Director",
    },
  ];

  return (
    <section className="py-24 relative" id="success-stories">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Success Stories" 
          subtitle="Real results from real businesses using our AI agent solutions."
        />
        
        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative overflow-hidden rounded-2xl aspect-video">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-1/2">
                <Card>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{story.industry}</div>
                      <h3 className="text-3xl font-orbitron font-bold mb-2">{story.company}</h3>
                      <h4 className="text-xl font-medium text-gradient">{story.title}</h4>
                    </div>
                    
                    <p className="text-gray-300">{story.description}</p>
                    
                    <div className="space-y-3 my-6">
                      {story.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-background-mid flex items-center justify-center text-primary">
                            {result.icon}
                          </div>
                          <span className="font-medium">{result.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-300">
                      "{story.quote}" <span className="block mt-2 text-sm font-medium text-white">— {story.person}</span>
                    </blockquote>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
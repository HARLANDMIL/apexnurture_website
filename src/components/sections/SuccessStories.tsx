import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button'; // Ensure this path is correct

const SuccessStories: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const stories = [
    {
  company: "HarmonyPath Consulting",
  industry: "Business Consulting",
  title: "Scaling Lead Generation with Custom AI Agents",
  image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "BrightPath Consulting struggled to manage a growing influx of leads, with 40% slipping through the cracks. Our Precision AI Implementation Suite audited their processes and deployed a custom lead nurturing agent, automating follow-ups and prioritizing high-value prospects.",
  results: [
    { icon: <Clock />, label: "Lead conversion rate increased by 45%" },
    { icon: <DollarSign />, label: "Follow-up time reduced from 48 hours to 2 hours" },
  ],
  quote: "Apex Nurture’s custom AI agents turned our lead generation into a well-oiled machine—our revenue has never been higher!",
  person: "Michael Carter, Founder",
    },

    
  {
  company: "TrendyWear Boutique",
  industry: "E-Commerce",
  title: "Recovering Lost Sales with AI-Powered Automation",
  image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "TrendyWear Boutique was losing 25% of potential sales due to abandoned carts. Our E-Commerce Growth Suite deployed an AI agent that automatically sends personalized recovery emails, re-engaging customers at the right moment.",
  results: [
    { icon: <Clock />, label: "Abandoned cart recovery rate improved by 30%" },
    { icon: <DollarSign />, label: "Monthly revenue increased by $15,000" },
  ],
  quote: "The AI recovery agent paid for itself in the first month—it’s like having a sales team that never sleeps!",
  person: "Emily Davis, Store Manager",
},

{
  company: "HealthFirst Clinic",
  industry: "Healthcare",
  title: "Streamlining Patient Care with AI Automation",
  image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "HealthFirst Clinic was overwhelmed by administrative tasks, leading to a 15% no-show rate for appointments. Our Healthcare Admin Automation Suite implemented an AI scheduling agent that sends reminders and reschedules seamlessly, freeing up staff to focus on patient care.",
  results: [
    { icon: <Clock />, label: "No-show rate decreased by 40%" },
    { icon: <DollarSign />, label: "Patient satisfaction improved by 20%" },
  ],
  quote: "Apex Nurture’s AI solution has allowed us to prioritize what matters most—our patients. It’s been a game-changer.",
  person: "Dr. Linda Patel, Chief Medical Officer",
}
  // Add more stories as needed

  ];

  return (
    <section className="py-24 relative" id="success-stories">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Success Stories" 
          subtitle="Real results from real businesses using our AI agent solutions."
        />
          <div className="space-y-16">
          {(showAll ? stories : stories.slice(0, 2)).map((story, index) => (
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
            </motion.div>          ))}
          
          <div className="flex justify-center mt-8">            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-black via-gray-900 to-black text-white font-orbitron hover:from-gray-900 hover:via-black hover:to-gray-900"
            >
              {showAll ? 'Close' : 'View More'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
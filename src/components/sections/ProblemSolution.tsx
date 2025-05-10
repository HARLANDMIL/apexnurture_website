import React from 'react';
import { CheckCircle, Clock, Settings, Brain, BarChart } from 'lucide-react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const ProblemSolution: React.FC = () => {
  const cards = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Manual Work Overload",
      problem: "Spending hours on repetitive, low-value tasks",
      solution: "AI-powered automation handles mundane work 24/7",
    },
    {
      icon: <Settings className="w-10 h-10 text-primary" />,
      title: "Complex Workflows",
      problem: "Struggling with disconnected tools and processes",
      solution: "Seamless AI integration across your entire tech stack",
    },
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "Decision Fatigue",
      problem: "Overwhelmed by constant small decisions",
      solution: "AI agents that learn and make smart choices for you",
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Scaling Challenges",
      problem: "Unable to grow without adding more staff",
      solution: "Infinitely scalable AI systems that grow with you",
    }
  ];

  return (
    <section className="py-24 relative" id="problems">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Stop Struggling with Repetitive Tasks" 
          subtitle="Our AI agents eliminate the daily grind, giving you back time to focus on what truly matters."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Card key={index}>
              <div className="flex flex-col h-full">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-orbitron font-bold mb-3">{card.title}</h3>
                
                <div className="mb-4">
                  <div className="text-red-400 mb-1 text-sm">THE PROBLEM</div>
                  <p className="text-gray-300">{card.problem}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="text-green-400 mb-1 text-sm">THE SOLUTION</div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white">{card.solution}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
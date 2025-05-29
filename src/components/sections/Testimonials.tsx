import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechFlow",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The AI agents developed by Apex Nurture have transformed our customer service operations. We're now handling 3x the volume with the same team size, and our satisfaction scores have never been higher.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      title: "CTO, InnovateCorp",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "As a tech company, we were skeptical about outsourcing our AI needs. Apex Nurture proved us wrong. Their custom agents seamlessly integrated with our existing systems and delivered ROI within weeks.",
      stars: 5,
    },
    {
      name: "Elena Rodriguez",
      title: "Operations Director, GrowthBox",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Our email management was a constant bottleneck until we implemented Apex Nurture's AI solution. Now our inbox is organized automatically, and no important messages fall through the cracks.",
      stars: 4,
    },
    {
      name: "David Williams",
      title: "Founder, LaunchPad",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "As a startup founder, I was drowning in administrative tasks. Apex Nurture's AI agents now handle my scheduling, email, and data entry, giving me back 20+ hours weekly to focus on growth.",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + (window.innerWidth >= 1024 ? 3 : 1));

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 relative" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what our clients have experienced with our AI solutions."
        />
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-6 w-full"
              initial={false}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full lg:min-w-[calc(33.333%-1rem)]"
                >
                  <Card className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                          />
                        ))}
                      </div>
                      <p className="italic text-gray-300 mb-6">"{testimonial.quote}"</p>
                      <div className="mt-auto flex items-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        />
                        <div>
                          <div className="font-orbitron font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center z-10 hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center z-10 hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
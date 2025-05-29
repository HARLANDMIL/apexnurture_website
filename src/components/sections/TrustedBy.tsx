import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  hoverColor: string;
}

const partners: Partner[] = [ 
  { id: 1, name: 'Kanmon', logo: '/partners/kanmon.svg', hoverColor: '#4F46E5' },
  { id: 2, name: 'Thinkific', logo: '/partners/thinkific.svg', hoverColor: '#EC4899' },
  { id: 3, name: 'Plane', logo: '/partners/plane.svg', hoverColor: '#3B82F6' },
  { id: 4, name: 'Papaya', logo: '/partners/papaya.svg', hoverColor: '#F59E0B' },
  { id: 5, name: 'Gusto', logo: '/partners/gusto.svg', hoverColor: '#10B981' },
  { id: 6, name: 'Elevate', logo: '/partners/elevate.svg', hoverColor: '#8B5CF6' },
  { id: 7, name: 'Salsa', logo: '/partners/salsa.svg', hoverColor: '#EF4444' },
];

const TrustedBy = () => {
  const scrollControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startScrollAnimation = async () => {
      await scrollControls.start({
        x: [0, -1920],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }
        }
      });
    };

    startScrollAnimation();
  }, [scrollControls]);

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(120deg, #fff 0%, #f7fafd 100%)' }}
      ref={containerRef}
    >
      <div className="max-w-[1920px] mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-bold text-primary mb-16"
        >
          Trusted by Industry Leaders
        </motion.h3>

        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              className="flex items-center space-x-24"
              animate={scrollControls}
            >
              {[...partners, ...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="relative group"
                >
                  <div className="w-36 h-20 relative flex items-center justify-center">
                    {/* Card hover effect: subtle border and shadow for accessibility */}
                    <div 
                      className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300"
                      style={{ background: '#fff', zIndex: 1 }}
                    />
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="relative w-full h-full object-contain p-4 transition-all duration-500 
                               filter grayscale group-hover:grayscale-0 group-hover:scale-110
                               group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.10)]"
                      style={{ zIndex: 2 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

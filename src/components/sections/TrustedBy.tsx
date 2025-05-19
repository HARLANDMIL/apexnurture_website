import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  hoverColor: string;
}

const partners: Partner[] = [  { id: 1, name: 'Kanmon', logo: '/partners/kanmon.svg', hoverColor: '#4F46E5' },
  { id: 2, name: 'Fizz', logo: '/partners/fizz.svg', hoverColor: '#EC4899' },
  { id: 3, name: 'Plane', logo: '/partners/plane.svg', hoverColor: '#3B82F6' },
  { id: 4, name: 'Papaya', logo: '/partners/papaya.svg', hoverColor: '#F59E0B' },
  { id: 5, name: 'Gusto', logo: '/partners/gusto.svg', hoverColor: '#10B981' },
  { id: 6, name: 'Elevate', logo: '/partners/elevate.svg', hoverColor: '#8B5CF6' },
  { id: 7, name: 'Salsa', logo: '/partners/salsa.svg', hoverColor: '#EF4444' },
];

const TrustedBy = () => {
  const scrollControls1 = useAnimation();
  const scrollControls2 = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startScrollAnimation = async () => {
      await Promise.all([
        scrollControls1.start({
          x: [0, -1920],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }
        }),
        scrollControls2.start({
          x: [-1920, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }
        })
      ]);
    };

    startScrollAnimation();
  }, [scrollControls1, scrollControls2]);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background-end/30 to-transparent backdrop-blur-sm" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-medium text-gray-300 mb-12"
        >
          Trusted by Industry Leaders
        </motion.h3>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background-end to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background-end to-transparent z-10" />

          {/* First row - moving left */}
          <motion.div
            className="flex items-center space-x-16 mb-12"
            animate={scrollControls1}
          >
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="relative group"
              >
                <div className="w-32 h-16 relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                       style={{ backgroundColor: `${partner.hoverColor}33` }}
                  />
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second row - moving right */}
          <motion.div
            className="flex items-center space-x-16"
            animate={scrollControls2}
          >
            {[...partners.reverse(), ...partners].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}-reverse`}
                className="relative group"
              >
                <div className="w-32 h-16 relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                       style={{ backgroundColor: `${partner.hoverColor}33` }}
                  />
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

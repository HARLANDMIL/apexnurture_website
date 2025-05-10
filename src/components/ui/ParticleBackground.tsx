import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#4F46E5", "#6366F1", "#818CF8"],
          },
          links: {
            color: "#818CF8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200
              }
            }
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800
            },
            value: 80
          },
          opacity: {
            value: { min: 0.3, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              startValue: "min",
              destroy: "max",
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              startValue: "min",
              destroy: "max",
              sync: false
            }
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "bubble"]
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: {
              enable: true,
              delay: 0.5
            }
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.7,
                color: "#6366F1"
              }
            },
            bubble: {
              distance: 200,
              size: 5,
              duration: 2,
              opacity: 0.8,
              color: "#4F46E5"
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticleBackground;
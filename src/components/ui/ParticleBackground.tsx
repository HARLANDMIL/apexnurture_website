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
      className="fixed inset-0 w-full h-full"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#93C5FD", "#60A5FA", "#3B82F6", "#2563EB"],
          },
          links: {
            color: "#60A5FA",
            distance: 150,
            enable: true,
            opacity: 0.6,
            width: 2,
            triangles: {
              enable: true,
              opacity: 0.15
            }
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce"
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
              width: 1920,
              height: 1080
            },
            value: 120
          },
          opacity: {
            value: { min: 0.5, max: 0.9 },
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
            value: { min: 2.5, max: 5 },
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
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.9,
                color: "#93C5FD"
              }
            },
            bubble: {
              distance: 200,
              size: 8,
              duration: 2,
              opacity: 1,
              color: "#60A5FA"
            },
            push: {
              quantity: 6
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
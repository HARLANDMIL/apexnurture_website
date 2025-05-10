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
            value: ["#60A5FA", "#3B82F6", "#2563EB", "#1D4ED8"],
          },
          links: {
            color: "#60A5FA",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
            triangles: {
              enable: true,
              opacity: 0.1
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
              width: 800,
              height: 800
            },
            value: 100
          },
          opacity: {
            value: { min: 0.4, max: 0.8 },
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
            value: { min: 2, max: 4 },
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
                opacity: 0.8,
                color: "#60A5FA"
              }
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.9,
              color: "#3B82F6"
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
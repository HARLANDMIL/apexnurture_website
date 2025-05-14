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
      className="absolute inset-0 w-full h-full"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          number: { value: 10, density: { enable: true, area: 800 } },
          opacity: { value: 0.15, random: true },
          size: { value: { min: 2, max: 4 }, random: true },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          shape: { type: "circle" },
        },
        detectRetina: true,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: false, mode: "repulse" },
            onClick: { enable: false, mode: "push" },
            resize: true,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
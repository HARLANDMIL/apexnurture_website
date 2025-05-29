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
      className="absolute inset-0 w-full h-full z-0"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#38bdf8" },
          number: { value: 40, density: { enable: true, area: 900 } },
          opacity: { value: 0.18, random: true },
          size: { value: { min: 2, max: 4 }, random: true },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false },
          },
          shape: { type: "circle" },
          links: {
            enable: true,
            distance: 140,
            color: "#38bdf8",
            opacity: 0.15,
            width: 1.2,
          },
        },
        detectRetina: true,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: false },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.25 },
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
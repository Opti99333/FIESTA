import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import tacopart from "../assets/taco-rain.png";

const SombreroRain: React.FC = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = {
  fullScreen: { enable: false },
  detectRetina: false,
  fpsLimit: 60,
  particles: {
    number: { value: 4, density: { enable: true, area: 1100 } },
    move: {
      enable: true,                
      direction: "bottom",
      outModes: { default: "out" },
      speed: { min: 5, max: 5 },
      straight: false,
      angle: { offset: 0, value: 10 },  
    },
    rotate: {
      value: { min: 0, max: 360 },
      direction: "random",
      animation: { enable: true, speed: 10, sync: false }
    },
    tilt: {
      enable: true,
      value: { min: 0, max: 360 },
      animation: { enable: true, speed: 8, sync: false }
    },
    wobble: { enable: true, distance: 10, speed: { min: -1, max: 1 } },
    opacity: { value: 1 },
    size: { value: { min: 9, max: 36 } },
    shape: {
      type: "image",
      options: {
        image: [{ src: tacopart, width: 64, height: 64 }]
      }
    }
  },
  interactivity: {
    events: { onHover: { enable: false }, onClick: { enable: false } }
  }
};


  if (!ready) return null;

  return (
    <div className="sombrero-rain">
      <Particles id="sombreroParticles" options={options as any} />
    </div>
  );
};

export default SombreroRain;

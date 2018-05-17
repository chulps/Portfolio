import React from "react";
import Particles from 'react-particles-js';

const ParticlesComp = () => {
  
  return (
    <Particles
          params={{
            particles: {
              number: { value: 20, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 2, color: "#00ffff" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: true,
                  speed: 5,
                  opacity_min: 0.008120772123013452,
                  sync: false
                }
              },
              size: {
                value: 1,
                random: false,
                anim: { enable: true, speed: 8, size_min: 0.05, sync: false }
              },
              line_linked: {
                enable: false,
                distance: 40,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 40,
                direction: "top-left",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: false, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 300,
                  size: 2,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true


            }
          }
          style={{
            objectFit: 'cover',
            marginTop: '-8vh',

          }}
        />
  );
};

export default ParticlesComp;

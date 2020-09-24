import React from 'react'
import Particles from "react-tsparticles"

export default function BackgroundParticle() {
  return (
    <div
        style={{
          zIndex: `-100`,
        }}
        className="absolute inset-0"
      >
        <Particles
          id="tsparticles"
          className="w-full h-full"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: false,
                  mode: "remove",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 8,
                  size: 40,
                  speed: 3,
                },
                push: {
                  particles_nb: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            particles: {
              color: {
                value: "#acacac",
              },
              line_linked: {
                color: "#acacac",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "out",
                random: false,
                speed: 6,
                straight: false,
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              size: {
                random: true,
                value: 3,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
  )
}

'use client'

import { Particles } from "react-tsparticles"
import { loadFull} from "tsparticles"
import { useCallback } from "react"

const ParticlesContainer = () => {

  const ParticlesInit = useCallback(async (engine: any) => {
     await loadFull(engine)
  }, [])

  const  particlesLoaded = useCallback(async () => {}, [])

  return (
    <Particles id="tsparticles" init={ParticlesInit} loaded={particlesLoaded}
    className="w-full absolute translate-z-0 left-0 right-0 bottom-0 top-0"
     options={{
      fullScreen: {enable: false},
      background: {
        color: {
          value: ''
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 90
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#00df9a',
        },
        links: {
          color: '#00df9a',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
           value: {
            min: 1,
            max: 5
           }
        }
      },
      detectRetina: true
     }}/>
  )
}

export default ParticlesContainer
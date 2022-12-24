export const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 400,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 0.1,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: false,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

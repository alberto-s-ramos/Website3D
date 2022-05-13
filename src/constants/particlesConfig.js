let particles = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "attract",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      attract: {
        distance: 150,
      },
    },
  },
  particles: { 
    color: {
      value: "#ffffff",
    },
    lineLinked: {
        enable: true,
        distance: 50,
        color: "#ffffff",
        opacity: 0.05,
        width: 2
    },
    move: {
      direction: "top",
      enable: true,
      random: true,
      speed: 0.8,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.1, max: 1.2 },
    },
  },
  detectRetina: true,
}

export default particles
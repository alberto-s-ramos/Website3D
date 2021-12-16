let particles = {
    "particles": {
        "number": {
          "value": 10,
          "density": {
            "enable": true,
            "value_area": 50
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.3,
            "opacity_min": 0.2,
            "sync": false
          }
        },
        "size": {
          "value": 1.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 50,
          "color": "#ffffff",
          "opacity": 0.05,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 0.3 ,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
}

export default particles
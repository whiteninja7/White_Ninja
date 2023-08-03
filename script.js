particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 100
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

const parallaxSections = document.querySelectorAll('.parallax');

function parallaxScroll() {
    parallaxSections.forEach(section => {
        const scrollPos = window.scrollY;
        const parallaxFactor = section.dataset.parallax || 0.3;
        section.style.transform = `translateY(${scrollPos * parallaxFactor}px)`;
    });
}

window.addEventListener('scroll', parallaxScroll);

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const animatedText = document.querySelector('.animated-text');
animatedText.innerHTML = animatedText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const letters = document.querySelectorAll('.letter');
letters.forEach(letter => {
    letter.style.display = 'inline-block';
    letter.style.transform = 'translateY(100%)';
    letter.style.opacity = '0';
    letter.style.animation = 'letterReveal 0.8s forwards ease ' + Math.random() * 0.5 + 's';
});

const css = `
@keyframes letterReveal {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`;

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

const slideshowContainer = document.querySelector('.slideshow-container');
const slides = Array.from(slideshowContainer.querySelectorAll('.slide'));
let slideIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

showSlide(slideIndex);
setInterval(nextSlide, 5000);

const counter = document.querySelector('.counter');

function animateCounter(target, duration) {
    const fps = 60;
    const frameDuration = 1000 / fps;
    const totalFrames = Math.round(duration / frameDuration);
    const countIncrement = Math.ceil(target / totalFrames);

    let currentCount = 0;
    let frame = 0;

    function updateCount() {
        if (frame < totalFrames) {
            currentCount += countIncrement;
            counter.textContent = currentCount;
            frame++;
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target;
        }
    }

    updateCount();
}

animateCounter(1000, 2000);

const soulsButtons = document.querySelectorAll('.souls-button');

soulsButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 200);
    });
});

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 50, 
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff",
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
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
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
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
const body = document.body;

const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';

body.appendChild(cursorGlow);

body.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    cursorGlow.style.left = `${clientX}px`;
    cursorGlow.style.top = `${clientY}px`;
});

body.addEventListener('mouseleave', () => {
    cursorGlow.style.display = 'none';
});
body.addEventListener('mouseenter', () => {
    cursorGlow.style.display = 'block';
});

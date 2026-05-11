// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows immediately
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with some delay/easing
        gsap.to(cursorOutline, {
            x: posX,
            y: posY,
            duration: 0.15,
            ease: "power2.out"
        });
    });

    // Hover effects
    const links = document.querySelectorAll('a, button, .project-card, .skill-tag, .feature-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(cursorOutline, {
                scale: 1.5,
                backgroundColor: "rgba(0, 242, 234, 0.1)",
                borderColor: "rgba(0, 242, 234, 0.8)",
                duration: 0.2
            });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(cursorOutline, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(0, 242, 234, 0.5)",
                duration: 0.2
            });
        });
    });
}

// Spotlight Effect for Features
const spotlightCards = document.querySelectorAll('.spotlight-card');
document.addEventListener('mousemove', (e) => {
    spotlightCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Hero Animation
const tl = gsap.timeline();

tl.to('.hero-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
})
    .to('.hero-word-1', {
        y: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.8")
    .to('.hero-word-2', {
        y: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=1.0")
    .to('.hero-desc', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    .to('.hero-btn', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
    }, "-=0.8");

// About Section Animation
gsap.to('.about-image', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out"
});

gsap.to('.about-content', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.2
});

// Features Animation
gsap.to('.feature-header', {
    scrollTrigger: {
        trigger: '#features',
        start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
});

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
        delay: index * 0.1
    });
});

// Work Section Animation
const projects = document.querySelectorAll('.project-card');
projects.forEach((project, index) => {
    gsap.from(project, {
        scrollTrigger: {
            trigger: project,
            start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});

// Skills Animation - REMOVED (Handled by CSS Marquee)

// Resume Animation
const resumeItems = document.querySelectorAll('.resume-item');
resumeItems.forEach((item, index) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.2
    });
});

// Resume Line Fill
gsap.to('.resume-line-fill', {
    scrollTrigger: {
        trigger: '#resume',
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1,
    },
    height: '100%',
    ease: 'none'
});

// Resume CTA
gsap.to('.resume-cta', {
    scrollTrigger: {
        trigger: '.resume-cta',
        start: 'top 90%',
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
});

// Contact Animation
gsap.from('#contact h2', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 75%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from('#contact a.group', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 75%',
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "elastic.out(1, 0.5)"
});

// Parallax for Hero Shapes
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    gsap.to('.hero-shapes div', {
        x: x,
        y: y,
        duration: 2,
        ease: "power2.out"
    });
});

// 3D Tilt Effect
const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; // Increased rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

// Update Current Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Toggle Projects
const toggleBtn = document.getElementById('toggle-projects');
const extraProjects = document.getElementById('extra-projects');

if (toggleBtn && extraProjects) {
    toggleBtn.addEventListener('click', () => {
        const isHidden = extraProjects.classList.contains('hidden');
        if (isHidden) {
            extraProjects.classList.remove('hidden');
            // Trigger animation for new projects
            const newProjects = extraProjects.querySelectorAll('.project-card');
            gsap.from(newProjects, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2
            });
            toggleBtn.querySelector('span').textContent = 'Show Less';
        } else {
            extraProjects.classList.add('hidden');
            toggleBtn.querySelector('span').textContent = 'Read More';
            // Scroll back to work section top
            document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

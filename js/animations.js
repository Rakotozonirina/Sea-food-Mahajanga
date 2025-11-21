document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar animation
    gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });

    // Hero Section animation
    gsap.from(".hero-section > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
    });

    // Banner animation
    gsap.from(".baniere img", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".baniere",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Service/Cards animation
    gsap.utils.toArray(".service > div").forEach((card, i) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Conservation Section
    gsap.from(".conservation h1", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".conservation",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.utils.toArray(".detail-conservation").forEach((section) => {
        const img = section.querySelector("img");
        const text = section.querySelector("article");

        if (img) {
            gsap.from(img, {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        if (text) {
            gsap.from(text, {
                x: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    });

    // Footer animation
    gsap.from("footer > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

    // Subpages: Main Title
    const mainTitle = document.querySelector("main > h1");
    if (mainTitle) {
        gsap.from(mainTitle, {
            y: -30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });
    }

    // Subpages: Containers (Image + Text)
    gsap.utils.toArray(".container").forEach((container) => {
        gsap.from(container.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Where to Eat: Places
    gsap.utils.toArray(".place").forEach((place) => {
        gsap.from(place.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: place,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
});

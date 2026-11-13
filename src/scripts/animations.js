import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
console.log("GSAP version", gsap.version);

 // STEP 3
      gsap.registerPlugin(ScrollTrigger);
      gsap.from("#services", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#services",
          start: "top 80%",
          markers: true,
          toggleActions: "play none none reverse",
        },
      });
      
    // MAIN INTRO TIMELINE
    const tl = gsap.timeline({ paused: true });

    function playIntroTimeline() {
      tl.clear();

      tl.from("#hero h1", {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .from("nav a", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out"
      }, "-=0.3")
      .from("#hero .hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.5
      }, "-=0.25");

      tl.play(0);
    }

    playIntroTimeline();

    // NEW: SCRUB SCROLL PROGRESS BAR
    gsap.fromTo(
      "#progressBar",
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2
        }
      }
    );

    // NEW: PIN SERVICES SECTION
    ScrollTrigger.create({
      trigger: "#services",
      start: "top top",
      end: "+=500",
      pin: true,
      pinSpacing: true,
      markers: true
    });

    // HERO BADGE ANIMATION
    gsap.from("#hero span", {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.2
    });

    // HERO PARAGRAPH ANIMATION
    gsap.from("#hero p", {
      y: 25,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.3,
      ease: "power3.out"
    });

    // FLOATING FASHION EMOJI
    gsap.to(".hero-fashion-icon", {
      y: -15,
      rotation: 8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // FASHION CARDS: HOVER ANIMATIONS
    document.querySelectorAll(".fashion-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // FASHION ICONS: HOVER ANIMATIONS
    document.querySelectorAll(".fashion-card > div").forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          rotation: 8,
          scale: 1.12,
          duration: 0.3,
          ease: "back.out(2)"
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // SECTION HEADINGS: ANIMATE ON SCROLL
    gsap.utils.toArray("main section h2").forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    // FASHION CARDS: ANIMATE ON SCROLL
    gsap.utils.toArray(".fashion-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        delay: (index % 3) * 0.12,
        ease: "power3.out"
      });
    });

    // BUTTON HOVER ANIMATION
    document.querySelectorAll(".btn-primary").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.25,
          ease: "power2.out"
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.25,
          ease: "power2.out"
        });
      });
    });

    // ABOUT SECTION ANIMATION
    gsap.from("#about > div", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // CONTACT FORM FIELD ANIMATION
    gsap.from("#contactForm > div", {
      scrollTrigger: {
        trigger: "#contactForm",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    });

    // DARK MODE BUTTON
    const toggleButton = document.querySelector("#toggledark");

    toggleButton.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      gsap.fromTo(
        toggleButton,
        { rotation: 0 },
        {
          rotation: 360,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(toggleButton, { rotation: 0 });
          }
        }
      );
    });

    // REPLAY INTRO ANIMATION
    document.querySelector("#replayTimeline").addEventListener("click", () => {
      playIntroTimeline();
    });

    // DEMO CONTACT FORM
    document.querySelector("#contactForm").addEventListener("submit", (event) => {
      event.preventDefault();

      document.querySelector("#formStatus").textContent =
        "Thank you! This demo form does not send messages to a server.";

      gsap.fromTo(
        "#formStatus",
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        }
      );
    });
 

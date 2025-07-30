document.addEventListener("DOMContentLoaded", () => {
  window.lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("header h1", { autoAlpha: 0, y: -30, duration: 1.2, ease: "power3.out", delay: 0.3 });
  gsap.from("header p", { autoAlpha: 0, y: -20, duration: 1, ease: "power2.out", delay: 0.7 });

  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    gsap.fromTo(section,
      { autoAlpha: 0, y: 70 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom top",
          toggleActions: "play none none none",
        }
      }
    );
  });
});

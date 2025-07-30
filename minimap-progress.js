document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progressBar");
  const minimapItems = document.querySelectorAll(".minimap-item");
  const sections = document.querySelectorAll("section");

  function updateProgressBar() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
  }

  window.addEventListener('scroll', updateProgressBar);
  updateProgressBar();

  const sectionTitles = {
    'mindmap-section': 'System Flow Mind Map',
    'nodejs-intro': 'Node.js Runtime',
    'express-arch': 'Express.js Architecture',
    'http-lifecycle': 'HTTP Lifecycle',
    'auth-jwt': 'Authentication (JWT)',
    'error-handling': 'Error Handling',
    'folder-structure': 'Folder Structure'
  };

  minimapItems.forEach(item => {
    const sectionId = item.getAttribute('data-section-id');
    item.setAttribute('data-tooltip', sectionTitles[sectionId] || sectionId);
  });

  function updateMinimapActiveStateAndIndicator() {
    let currentActiveSection = null;
    let maxIntersectionRatio = 0;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const intersectionStart = Math.max(0, rect.top);
      const intersectionEnd = Math.min(viewportHeight, rect.bottom);
      const intersectionHeight = intersectionEnd - intersectionStart;
      const sectionVisibleHeight = Math.min(viewportHeight, rect.height);

      if (sectionVisibleHeight > 0) {
        const ratio = intersectionHeight / sectionVisibleHeight;

        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            if (ratio > maxIntersectionRatio) {
                maxIntersectionRatio = ratio;
                currentActiveSection = section;
            }
        }
      }
    });

    minimapItems.forEach(item => {
      const sectionId = item.getAttribute('data-section-id');
      const minimapIndicator = item.querySelector('.minimap-scroll-indicator');

      if (currentActiveSection && sectionId === currentActiveSection.id) {
        item.classList.add('active');

        const sectionRect = currentActiveSection.getBoundingClientRect();
        const sectionHeight = currentActiveSection.scrollHeight;
        const viewportTop = 0;
        const viewportBottom = window.innerHeight;

        const scrolledInSection = Math.max(0, viewportTop - sectionRect.top);
        let sectionProgress = (scrolledInSection / (sectionHeight - viewportBottom)) * 100;

        sectionProgress = Math.min(100, Math.max(0, sectionProgress));

        if (minimapIndicator) {
            minimapIndicator.style.height = sectionProgress + "%";
        }

      } else {
        item.classList.remove('active');
        if (minimapIndicator) {
            minimapIndicator.style.height = "0%";
        }
      }
    });
  }

  minimapItems.forEach(item => {
    const sectionId = item.getAttribute('data-section-id');
    const targetSection = document.getElementById(sectionId);

    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (targetSection) {
        if (typeof window.lenis !== 'undefined' && window.lenis) {
          window.lenis.scrollTo(targetSection, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  window.addEventListener('scroll', updateMinimapActiveStateAndIndicator);
  updateMinimapActiveStateAndIndicator();
});

// Loader CSS-only 4s + fade out
setTimeout(() => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.transition = 'opacity 1s';
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 1000);
  }
}, 4000);  // Exact 4s display



// Parallax & Scroll Animations
gsap.utils.toArray('.parallax').forEach(section => {
  const bg = section.getAttribute('data-bg');
  section.style.backgroundImage = `url(${bg})`;
  gsap.to(section, {
    backgroundPosition: `50% ${innerHeight / 2}px`,
    ease: "none",
    scrollTrigger: { trigger: section, scrub: true }
  });
});

// Float Menu Active
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#float-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// AOS-like with GSAP
gsap.from("header", { y: -100, duration: 1, ease: "bounce.out" });
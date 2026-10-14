const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});

const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.hero-dot')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeHeroSlide = 0;
let heroTimer;

function showHeroSlide(index) {
  activeHeroSlide = index;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === index);
  });
  heroDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === index;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-pressed', String(isActive));
  });
}

function restartHeroTimer() {
  window.clearInterval(heroTimer);
  if (!reduceMotion) {
    heroTimer = window.setInterval(() => {
      showHeroSlide((activeHeroSlide + 1) % heroSlides.length);
    }, 7000);
  }
}

heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showHeroSlide(index);
    restartHeroTimer();
  });
});
restartHeroTimer();

document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#planSelect').value = link.dataset.plan;
  });
});

document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const details = [
    'Bonjour WinniSteps, j’aimerais parler de mon installation à Winnipeg.',
    '',
    `Nom : ${form.get('name')}`,
    `Téléphone / WhatsApp : ${form.get('phone')}`,
    form.get('country') && `Pays de départ : ${form.get('country')}`,
    `Statut : ${form.get('status')}`,
    form.get('arrival') && `Arrivée prévue : ${form.get('arrival')}`,
    `Personnes : ${form.get('people')}`,
    `Formule : ${form.get('plan')}`,
    form.get('message') && `Message : ${form.get('message')}`,
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/12048902944?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer');
});

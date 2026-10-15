// Navigation mobile : synchronise l’état du bouton et du panneau pour les interactions tactiles et clavier.
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

// Dictionnaire d’interface : conserver les mêmes clés dans les deux langues facilite toute évolution de contenu.
const siteCopy = {
  fr: {
    title: 'WinniSteps — Bienvenue chez vous, à Winnipeg',
    description: 'WinniSteps vous accompagne dans votre installation à Winnipeg : accueil à l\'aéroport, logement, démarches et repères pour commencer votre nouvelle vie.',
    menuLabel: 'Ouvrir le menu',
    switchLabel: 'Passer le site en anglais',
    navLabel: 'Navigation principale',
    nav: ['Notre accompagnement', 'Votre parcours', 'Découvrir Winnipeg', 'Parlons de votre arrivée'],
    hero: {
      eyebrow: 'ACCUEIL &amp; INSTALLATION · WINNIPEG',
      title: 'Votre nouvelle vie<br><em>commence ici.</em>',
      lede: 'On vous accueille à Winnipeg et on vous accompagne, pas à pas, pour trouver vos repères, organiser votre installation et commencer à vous sentir chez vous.',
      primary: 'Découvrir nos formules', secondary: 'Voir votre parcours',
      dots: 'Choisir une photo de Winnipeg', photo: 'Winnipeg et ses lieux emblématiques',
      caption: 'Winnipeg, Manitoba', captionSmall: 'On est là pour vos premiers pas.',
      bottom: ['01 — S\'INSTALLER ENSEMBLE', 'UN PAS À LA FOIS <b>↓</b>'],
    },
    intro: {
      index: '01 <span>—</span> WINNISTEPS',
      heading: 'Le début d\'une nouvelle vie mérite <em>un peu de douceur.</em>',
      paragraph: 'Changer de pays, c\'est excitant. Les premières démarches, le logement, les repères… ça peut aussi faire beaucoup. WinniSteps vous accompagne dès votre arrivée à Winnipeg pour que vous puissiez vous concentrer sur l\'essentiel : vous sentir chez vous.',
      link: 'Faisons connaissance <span></span>', stamp: 'À VOS CÔTÉS', stampBody: 'de<br>l\'aéroport<br>à la maison',
    },
    journey: {
      index: '02 <span>—</span> VOTRE PARCOURS',
      heading: 'Les premiers pas,<br><em>bien accompagnés.</em>',
      intro: 'Quatre étapes pour transformer une arrivée en nouveau départ. Nous sommes là pour rendre chaque étape plus facile.',
      titles: ['On vous accueille', 'On trouve vos repères', 'On simplifie les démarches', 'On vous connecte'],
      descriptions: [
        'À votre arrivée à l\'aéroport, on est là pour vous conduire jusqu\'à votre logement.',
        'Airbnb ou maison clé en main : on vous aide à trouver un endroit où poser vos valises.',
        'On vous accompagne pour les démarches essentielles des premiers jours.',
        'Rencontrez les organismes et les ressources qui vous aideront à bâtir votre vie ici.',
      ],
    },
    packages: {
      index: '03 <span>—</span> NOTRE ACCOMPAGNEMENT',
      heading: 'Le bon soutien,<br><em>pour votre projet.</em>',
      intro: 'Chaque parcours est différent. Choisissez l\'accompagnement qui vous ressemble — tous commencent par un accueil chaleureux à l\'aéroport.',
      tier: ['01 / L\'ESSENTIEL', '02 / LE CONFORT', '03 / LE CLÉ EN MAIN', '04 / À VOTRE MESURE'],
      descriptions: ['Les premiers repères pour prendre votre élan.', 'Un logement prêt à vous accueillir.', 'Vous arrivez, l\'essentiel est déjà en place.', 'Un accompagnement adapté à votre arrivée.'],
      features: [
        ['Accueil et récupération à l\'aéroport', 'Assistance aux démarches administratives', 'Présentation aux organismes', 'Recherche d\'un Airbnb'],
        ['Accueil et récupération à l\'aéroport', 'Assistance aux démarches administratives', 'Présentation aux organismes', 'Recherche d\'une maison clé en main'],
        ['Accueil et récupération à l\'aéroport', 'Assistance aux démarches administratives', 'Présentation aux organismes', 'Maison équipée : meubles, lits, cuisine', 'Achat d\'une voiture'],
        ['Accueil et récupération à l\'aéroport', 'Assistance aux démarches administratives', 'Présentation aux organismes', 'Maison équipée : meubles, lits, cuisine'],
      ],
      recommended: 'LE PLUS COMPLET',
      links: ['Parler de Silver', 'Parler de Gold', 'Parler de Platinum', 'Parler de Diamond'],
      price: 'Chaque projet est unique. <strong>Tarif sur demande</strong> — parlons de vos besoins.',
    },
    city: {
      index: '04 <span>—</span> DÉCOUVRIR WINNIPEG',
      heading: 'Une ville à découvrir.<br><em>Une vie à construire.</em>',
      intro: 'Winnipeg est une ville accueillante, créative et pleine de caractère. Voici quelques endroits qui pourraient vite devenir les vôtres.',
      link: 'On vous la fait découvrir <span></span>',
      titles: ['Le Palais législatif', 'Le Musée des droits de la personne', 'Saint-Boniface', 'L\'hiver, version Winnipeg', 'Le centre-ville'],
      descriptions: [
        'Un monument emblématique et ses jardins au cœur de Winnipeg.',
        'Une architecture remarquable à La Fourche.',
        'Le quartier francophone, relié au centre-ville par l\'Esplanade Riel.',
        'Des patinoires sur les rivières gelées et des sentiers enneigés.',
        'Espaces verts, services et commerces au cœur de la ville.',
      ],
      imageAlt: ['Le Palais législatif du Manitoba et ses jardins', 'Le Musée canadien pour les droits de la personne en hiver', 'L\'Esplanade Riel au coucher du soleil', 'Patineurs sur la rivière gelée à Winnipeg', 'Une avenue du centre-ville de Winnipeg en été'],
    },
    contact: {
      index: '05 <span>—</span> PARLONS DE VOTRE ARRIVÉE',
      heading: 'Votre nouvelle vie<br>commence <em>ici.</em>',
      intro: 'Dites-nous où vous en êtes dans votre projet. Un conseiller WinniSteps vous répondra rapidement sur WhatsApp.',
      phone: 'Ou appelez-nous directement', formTitle: 'Un petit mot pour commencer',
      labels: ['Votre nom *', 'Téléphone / WhatsApp *', 'Pays de départ', 'Votre statut', 'Arrivée prévue', 'Personnes', 'La formule qui vous intéresse', 'Votre message'],
      placeholders: ['Comment vous appelez-vous ?', '+1 (204) 555-0123', 'Ex. : Sénégal', 'Parlez-nous un peu de votre projet…'],
      status: ['Résident permanent', 'Permis d\'études', 'Permis de travail', 'Autre'],
      people: ['1 personne', '2 personnes', '3 personnes', '4 personnes', '5 personnes ou plus'],
      plan: 'Je ne sais pas encore',
      submit: 'Continuer sur WhatsApp', privacy: 'En cliquant, votre application WhatsApp s\'ouvrira avec votre message prêt à envoyer.',
    },
    footer: {
      tagline: 'Une nouvelle ville. Une nouvelle vie.<br>Un pas à la fois.',
      nav: ['Accompagnement', 'Votre parcours', 'Winnipeg', 'WhatsApp'],
      copyright: 'Winnipeg, Manitoba, Canada', rights: '© 2026 WinniSteps',
    },
    whatsapp: ['Bonjour WinniSteps, j’aimerais parler de mon installation à Winnipeg.', 'Nom', 'Téléphone / WhatsApp', 'Pays de départ', 'Statut', 'Arrivée prévue', 'Personnes', 'Formule', 'Message'],
  },
  en: {
    title: 'WinniSteps — Feel at home in Winnipeg',
    description: 'WinniSteps supports newcomers settling in Winnipeg with airport pickup, housing, essential paperwork and local guidance.',
    menuLabel: 'Open menu',
    switchLabel: 'Switch the site to French',
    navLabel: 'Main navigation',
    nav: ['Our support', 'Your journey', 'Discover Winnipeg', 'Let’s talk about your arrival'],
    hero: {
      eyebrow: 'ARRIVAL &amp; SETTLEMENT · WINNIPEG',
      title: 'Your new life<br><em>starts here.</em>',
      lede: 'We welcome you to Winnipeg and guide you, step by step, as you find your bearings, settle in and start feeling at home.',
      primary: 'Explore our packages', secondary: 'See your journey',
      dots: 'Choose a Winnipeg photo', photo: 'Winnipeg and its landmarks',
      caption: 'Winnipeg, Manitoba', captionSmall: 'We are here for your first steps.',
      bottom: ['01 — SETTLING IN, TOGETHER', 'ONE STEP AT A TIME <b>↓</b>'],
    },
    intro: {
      index: '01 <span>—</span> WINNISTEPS',
      heading: 'A new beginning deserves <em>a little peace of mind.</em>',
      paragraph: 'Moving to a new country is exciting. The first paperwork, finding a place to live and learning your way around can feel like a lot, too. WinniSteps is here from the moment you arrive in Winnipeg, so you can focus on what matters: feeling at home.',
      link: 'Get to know us <span></span>', stamp: 'BY YOUR SIDE', stampBody: 'from<br>the airport<br>to your home',
    },
    journey: {
      index: '02 <span>—</span> YOUR JOURNEY',
      heading: 'Your first steps,<br><em>with support.</em>',
      intro: 'Four steps to turn your arrival into a fresh start. We make each part of settling in easier.',
      titles: ['We meet you', 'We help you settle in', 'We simplify the paperwork', 'We connect you'],
      descriptions: [
        'We meet you at the airport and take you straight to your accommodation.',
        'Airbnb or a move-in-ready home: we help you find a place to put down your bags.',
        'We guide you through the essential paperwork for your first days.',
        'Meet the organizations and local resources that can help you build your life here.',
      ],
    },
    packages: {
      index: '03 <span>—</span> OUR SUPPORT',
      heading: 'The right support,<br><em>for your plans.</em>',
      intro: 'Every move is different. Choose the level of support that fits you. Every package starts with a warm airport welcome.',
      tier: ['01 / THE ESSENTIALS', '02 / THE COMFORT', '03 / MOVE-IN READY', '04 / MADE FOR YOU'],
      descriptions: ['The first essentials to help you get moving.', 'A home ready to welcome you.', 'Arrive with the essentials already in place.', 'Support tailored to your arrival.'],
      features: [
        ['Airport pickup and welcome', 'Help with essential paperwork', 'Introductions to local organizations', 'Airbnb search'],
        ['Airport pickup and welcome', 'Help with essential paperwork', 'Introductions to local organizations', 'Search for a move-in-ready home'],
        ['Airport pickup and welcome', 'Help with essential paperwork', 'Introductions to local organizations', 'Fully equipped home: furniture, beds and kitchenware', 'Help finding a car'],
        ['Airport pickup and welcome', 'Help with essential paperwork', 'Introductions to local organizations', 'Fully equipped home: furniture, beds and kitchenware'],
      ],
      recommended: 'MOST COMPLETE',
      links: ['Ask about Silver', 'Ask about Gold', 'Ask about Platinum', 'Ask about Diamond'],
      price: 'Every move is unique. <strong>Pricing on request</strong> — let’s talk about what you need.',
    },
    city: {
      index: '04 <span>—</span> DISCOVER WINNIPEG',
      heading: 'A city to discover.<br><em>A life to build.</em>',
      intro: 'Winnipeg is welcoming, creative and full of character. Here are a few places that could soon feel like your own.',
      link: 'We’ll show you around <span></span>',
      titles: ['Manitoba Legislative Building', 'Canadian Museum for Human Rights', 'Saint Boniface', 'Winter in Winnipeg', 'Downtown'],
      descriptions: [
        'An iconic landmark and gardens in the heart of Winnipeg.',
        'Striking architecture at The Forks.',
        'The francophone neighbourhood, connected downtown by the Esplanade Riel.',
        'Skating trails on frozen rivers and snowy paths.',
        'Green spaces, services and shops in the heart of the city.',
      ],
      imageAlt: ['The Manitoba Legislative Building and its gardens', 'The Canadian Museum for Human Rights in winter', 'Esplanade Riel at sunset', 'Skaters on a frozen river in Winnipeg', 'A downtown Winnipeg avenue in summer'],
    },
    contact: {
      index: '05 <span>—</span> LET’S TALK ABOUT YOUR ARRIVAL',
      heading: 'Your new life<br>starts <em>here.</em>',
      intro: 'Tell us where you are in your plans. A WinniSteps advisor will get back to you promptly on WhatsApp.',
      phone: 'Or call us directly', formTitle: 'A quick note to get started',
      labels: ['Your name *', 'Phone / WhatsApp *', 'Country of departure', 'Your status', 'Expected arrival', 'Number of people', 'Package you’re interested in', 'Your message'],
      placeholders: ['What should we call you?', '+1 (204) 555-0123', 'E.g. Senegal', 'Tell us a little about your plans…'],
      status: ['Permanent resident', 'Study permit', 'Work permit', 'Other'],
      people: ['1 person', '2 people', '3 people', '4 people', '5 or more people'],
      plan: 'I’m not sure yet',
      submit: 'Continue to WhatsApp', privacy: 'WhatsApp will open with your message ready to send.',
    },
    footer: {
      tagline: 'A new city. A new life.<br>One step at a time.',
      nav: ['Our support', 'Your journey', 'Winnipeg', 'WhatsApp'],
      copyright: 'Winnipeg, Manitoba, Canada', rights: '© 2026 WinniSteps',
    },
    whatsapp: ['Hello WinniSteps, I’d like to talk about my move to Winnipeg.', 'Name', 'Phone / WhatsApp', 'Country of departure', 'Status', 'Expected arrival', 'People', 'Package', 'Message'],
  },
};

let currentLanguage = 'fr';

// Applique une locale sans recharger la page; les helpers limitent les mutations aux éléments ciblés.
function applyLanguage(language) {
  const copy = siteCopy[language];
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;

  const setHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  };
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  const setList = (selector, values) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) element.textContent = values[index];
    });
  };

  document.querySelector('.brand').setAttribute('aria-label', language === 'fr' ? 'WinniSteps, accueil' : 'WinniSteps, home');
  toggle.setAttribute('aria-label', copy.menuLabel);
  nav.setAttribute('aria-label', copy.navLabel);
  setList('.nav > a:not(.nav-cta)', copy.nav.slice(0, 3));
  setHtml('.nav-cta', `${copy.nav[3]} <span>↗</span>`);
  const languageButton = document.querySelector('.language-toggle');
  languageButton.textContent = language === 'fr' ? 'EN' : 'FR';
  languageButton.setAttribute('aria-label', copy.switchLabel);

  setHtml('.hero .eyebrow', `<span class="eyebrow-dot"></span> ${copy.hero.eyebrow}`);
  setHtml('.hero h1', copy.hero.title);
  setText('.hero-lede', copy.hero.lede);
  setHtml('.hero .button-dark', `${copy.hero.primary} <span>↗</span>`);
  setHtml('.hero-secondary', `${copy.hero.secondary} <span>↓</span>`);
  document.querySelector('.hero-dots').setAttribute('aria-label', copy.hero.dots);
  document.querySelectorAll('.hero-dot').forEach((dot, index) => dot.setAttribute('aria-label', `${language === 'fr' ? 'Photo' : 'Image'} ${index + 1} ${language === 'fr' ? 'sur' : 'of'} 5`));
  document.querySelector('.hero-art').setAttribute('aria-label', copy.hero.photo);
  setText('.art-caption strong', copy.hero.caption);
  setText('.art-caption small', copy.hero.captionSmall);
  setList('.hero-bottom > span', copy.hero.bottom);

  setHtml('.intro .section-index', copy.intro.index);
  setHtml('.intro-main h2', copy.intro.heading);
  setText('.intro-main p', copy.intro.paragraph);
  setHtml('.intro-main .underline-link', copy.intro.link);
  setText('.intro-stamp > span', copy.intro.stamp);
  setHtml('.intro-stamp strong', copy.intro.stampBody);

  setHtml('.journey .section-index', copy.journey.index);
  setHtml('.journey h2', copy.journey.heading);
  setText('.journey .section-heading > p', copy.journey.intro);
  setList('.step h3', copy.journey.titles);
  setList('.step p', copy.journey.descriptions);

  setHtml('.packages .section-index', copy.packages.index);
  setHtml('.packages-heading h2', copy.packages.heading);
  setText('.packages-heading > p', copy.packages.intro);
  document.querySelectorAll('.package-card').forEach((card, index) => {
    setTextWithin(card, '.package-top span:first-child', copy.packages.tier[index]);
    setTextWithin(card, '.package-desc', copy.packages.descriptions[index]);
    setListWithin(card, 'li', copy.packages.features[index]);
    setHtmlWithin(card, '.package-link', `${copy.packages.links[index]} <span>↗</span>`);
  });
  setHtml('.featured-tag', `${copy.packages.recommended} <span>✳</span>`);
  setHtml('.price-note', copy.packages.price);

  setHtml('.city-copy .section-index', copy.city.index);
  setHtml('.city-copy h2', copy.city.heading);
  setText('.city-copy > p', copy.city.intro);
  setHtml('.city-copy .underline-link', copy.city.link);
  setList('.city-card h3', copy.city.titles);
  setList('.city-card p', copy.city.descriptions);
  setList('.city-card img', copy.city.imageAlt);
  document.querySelectorAll('.city-card img').forEach((image, index) => image.setAttribute('alt', copy.city.imageAlt[index]));

  setHtml('.contact-copy .section-index', copy.contact.index);
  setHtml('.contact-copy h2', copy.contact.heading);
  setText('.contact-copy > p', copy.contact.intro);
  setText('.phone-link span', copy.contact.phone);
  setHtml('.form-title', `${copy.contact.formTitle} <span>✳</span>`);
  document.querySelectorAll('.contact-form label').forEach((label, index) => {
    if (label.firstChild?.nodeType === Node.TEXT_NODE) label.firstChild.nodeValue = `${copy.contact.labels[index]} `;
  });
  const fields = document.querySelectorAll('.contact-form input, .contact-form textarea');
  [0, 1, 2, 3].forEach((index, placeholderIndex) => {
    const field = index === 3 ? document.querySelector('.contact-form textarea') : fields[index];
    field.placeholder = copy.contact.placeholders[placeholderIndex];
  });
  setList('[name="status"] option', copy.contact.status);
  setList('[name="people"] option', copy.contact.people);
  document.querySelector('#planSelect option:first-child').textContent = copy.contact.plan;
  setHtml('.form-submit', `${copy.contact.submit} <span>↗</span>`);
  setText('.form-privacy', copy.contact.privacy);

  setHtml('.footer > p', copy.footer.tagline);
  setList('.footer-nav a', copy.footer.nav);
  const copyright = document.querySelector('.copyright');
  if (copyright.firstChild?.nodeType === Node.TEXT_NODE) copyright.firstChild.nodeValue = `${copy.footer.copyright} `;
  setText('.copyright span', copy.footer.rights);
}

function setTextWithin(parent, selector, value) {
  const element = parent.querySelector(selector);
  if (element) element.textContent = value;
}

function setHtmlWithin(parent, selector, value) {
  const element = parent.querySelector(selector);
  if (element) element.innerHTML = value;
}

function setListWithin(parent, selector, values) {
  parent.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

// Persistance facultative de la langue : le français reste la valeur par défaut en cas de stockage indisponible.
document.querySelector('.language-toggle').addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
  applyLanguage(nextLanguage);
  try {
    localStorage.setItem('winnisteps-language', nextLanguage);
  } catch (error) {
    // La préférence ne conditionne pas le changement de langue pour la session courante.
  }
});

try {
  const savedLanguage = localStorage.getItem('winnisteps-language');
  applyLanguage(savedLanguage === 'en' ? 'en' : 'fr');
} catch (error) {
  applyLanguage('fr');
}

// Carrousel du bandeau : une sélection manuelle et la lecture automatique partagent le même index actif.
const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.hero-dot')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeHeroSlide = 0;
let heroTimer;

function showHeroSlide(index) {
  // Maintient l’image visible, l’indicateur actif et l’état accessible aria-pressed en cohérence.
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
  // Redémarre le cycle après une action utilisateur et désactive l’auto-défilement si le mouvement est réduit.
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

// Préremplit le formulaire avec le forfait sélectionné pour éviter une ressaisie.
document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#planSelect').value = link.dataset.plan;
  });
});

// Compose le message dans la langue active; l’utilisateur garde le contrôle de l’envoi depuis WhatsApp.
document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const labels = siteCopy[currentLanguage].whatsapp;
  const details = [
    labels[0],
    '',
    `${labels[1]} : ${form.get('name')}`,
    `${labels[2]} : ${form.get('phone')}`,
    form.get('country') && `${labels[3]} : ${form.get('country')}`,
    `${labels[4]} : ${form.get('status')}`,
    form.get('arrival') && `${labels[5]} : ${form.get('arrival')}`,
    `${labels[6]} : ${form.get('people')}`,
    `${labels[7]} : ${form.get('plan')}`,
    form.get('message') && `${labels[8]} : ${form.get('message')}`,
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/12048902944?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer');
});

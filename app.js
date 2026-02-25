/* ============================================
   ARIEL VISCOMI — Portfolio JS
   Navigation, i18n, Filters, Scroll Animations
   ============================================ */

// ---- i18n Translations ----
const translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.stack': 'Stack',
    'nav.projects': 'Proyectos',
    'nav.music': 'Música',
    'nav.experience': 'Experiencia',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'hero.badge': 'Bariloche, Patagonia Argentina',
    'hero.tagline': 'Maker Patagónico — IT, Dev & Música',
    'hero.description': 'Creo tecnología que conecta la innovación con la vida cotidiana. Desde la Patagonia, construyo soluciones, automatizo procesos y produzco música — siempre aprendiendo, siempre creando.',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Contacto',
    'hero.scroll': 'scroll',
    'about.title': 'Sobre mí',
    'about.subtitle': 'Quien soy más allá del código',
    'about.p1': 'Soy <strong>desarrollador, técnico IT y productor musical</strong>, nacido y residente en San Carlos de Bariloche, Argentina. Me apasiona la innovación, la tecnología, el medio ambiente y la sustentabilidad.',
    'about.p2': 'Trabajo como <strong>Técnico de Soporte de TI en INVAP</strong>, la empresa de alta tecnología argentina referente en los sectores nuclear, espacial, de defensa y medicina. En paralelo, estoy en transición activa hacia el mundo del desarrollo de software, DevOps e inteligencia artificial.',
    'about.p3': 'Apoyo el movimiento <strong>Open Source</strong>, disfruto de un buen café en compañía de mis gatos y nunca dejo de aprender. Soy curioso por naturaleza: me gusta acumular datos de todo, explorar cacharros retro y entender cómo funcionan las cosas.',
    'trait.maker.title': 'Maker',
    'trait.maker.desc': 'Fusiono naturaleza y tecnología desde la Patagonia. Si se puede construir, lo intento.',
    'trait.autodidact.title': 'Autodidacta',
    'trait.autodidact.desc': 'Aprendizaje constante. Curioso, nerd y en evolución permanente.',
    'trait.musician.title': 'Músico',
    'trait.musician.desc': 'Guitarrista, compositor y productor. La música es mi otra forma de crear.',
    'trait.sustainable.title': 'Sustentable',
    'trait.sustainable.desc': 'Tecnología con conciencia ambiental. Soluciones que cuiden el planeta.',
    'stack.title': 'Stack Tecnológico',
    'stack.subtitle': 'Herramientas con las que trabajo día a día',
    'stack.languages': 'Lenguajes',
    'stack.databases': 'Bases de Datos',
    'stack.tools': 'Herramientas & Plataformas',
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Cosas que construí y sigo construyendo',
    'filter.all': 'Todos',
    'filter.tools': 'Herramientas',
    'tag.private': 'Privado',
    'project.rufa.desc': 'Repositorio Unificado de Flujos y Automatizaciones. App en Python para centralizar, estandarizar y distribuir automatizaciones internas del área de Soporte Técnico en INVAP.',
    'project.ticketly.desc': 'Frontend de aplicación de tickets de soporte técnico. Sistema de gestión para seguimiento de incidencias y demandas.',
    'project.hormiga.desc': 'E-commerce para tienda virtual artesanal. Segunda versión migrada a ReactJS, evolucionando desde SCSS puro.',
    'project.identity.desc': 'Sistema de gestión de identidades desarrollado por F.A.A. Administración y control de acceso.',
    'project.pyotp.desc': 'Generador de tokens OTP desde la PC. Programa sencillo para autenticación de dos factores sin depender del celular.',
    'project.amoblamientos.desc': 'Web catálogo estática para showroom de amoblamientos Johnson en San Carlos de Bariloche. Diseño responsive con galería de productos.',
    'project.msnts.desc': 'Sitio web para la banda de rock "Matame si no te Sirvo". Diseño temático con info de la banda, fechas y música.',
    'music.title': 'Música & Producción',
    'music.subtitle': 'Mi otro lenguaje de creación — guitarrista, compositor y productor',
    'music.cachorro.role': 'Productor musical & multi-instrumentista',
    'music.cachorro.desc': 'Mi canal de producciones propias. Grabación, mezcla y masterización de proyectos musicales. Todas las pistas grabadas y producidas por mí.',
    'music.tocate.role': 'Productor musical & arreglador',
    'music.tocate.desc': 'Programa donde invitábamos a músicos a interpretar canciones fuera de su zona de confort. Yo grababa y producía los covers completos con todos los instrumentos. Un cineasta producía el videoclip y luego entrevistábamos al invitado.',
    'music.msnts.role': 'Guitarrista, compositor & productor del disco',
    'music.msnts.desc': 'Mi banda de rock. Compuse muchas de las canciones y grabé el disco completo. Las grabaciones del álbum son producción mía.',
    'music.gomez.role': 'Bajista',
    'music.gomez.desc': 'Banda en la que toqué el bajo. Rock desde Bariloche.',
    'music.epv.role': 'Fundador & productor',
    'music.epv.desc': 'Proyecto de streaming que recopila distintos programas. En Bariloche. Próximamente: evento mensual de bandas en vivo con entrevistas y grabación de audio y video.',
    'music.future.title': 'Próximamente',
    'music.future.role': 'En desarrollo',
    'music.future.desc': 'Nueva banda en formación. Evento mensual/anual donde diversas bandas tocan, entrevistas en vivo y grabación profesional de audio y video.',
    'experience.title': 'Experiencia',
    'experience.subtitle': 'Mi recorrido profesional',
    'exp.invap.period': 'Mar 2025 — Presente',
    'exp.invap.title': 'Técnico de Soporte de TI',
    'exp.invap.d1': 'Asistencia técnica de primer nivel, resolviendo incidencias y gestionando demandas',
    'exp.invap.d2': 'Colaboración con equipos multidisciplinarios para mantener altos estándares de servicio',
    'exp.invap.d3': 'Desarrollo de automatizaciones internas (RUFA) para optimizar procesos del área',
    'exp.delturista.period': 'Feb 2024 — Feb 2025',
    'exp.delturista.title': 'Especialista en Soporte Técnico',
    'exp.delturista.d1': 'Diseño e implementación de redes informáticas, incluyendo cableado estructurado',
    'exp.delturista.d2': 'Instalación y configuración de dispositivos de red (switches, routers, access points)',
    'exp.delturista.d3': 'Soporte técnico a usuarios, resolución de incidencias y mantenimiento de hardware y software',
    'exp.delturista.d4': 'Instalación de sistemas de seguridad: cámaras de vigilancia y controles de acceso',
    'exp.delturista.d5': 'Gestión y mantenimiento de servidores y documentación de procesos',
    'exp.molinos.period': 'Mar 2021 — Dic 2023',
    'exp.molinos.title': 'Técnico Informático',
    'exp.molinos.d1': 'Mantenimiento preventivo y reparación de equipos informáticos y telecomunicaciones',
    'exp.molinos.d2': 'Administración de computadoras, servidores de datos y redes de internet para APDES colegios',
    'education.title': 'Formación',
    'edu.coderhouse.title': 'Desarrollador de Aplicaciones ReactJS',
    'edu.madero.title': 'Educación Secundaria Obligatoria (ESO)',
    'edu.more': '...y más próximamente',
    'edu.more.sub': 'Formación continua en progreso',
    'blog.subtitle': 'Opiniones, aprendizajes y descubrimientos',
    'blog.coming': 'Próximamente',
    'blog.coming.desc': 'Estoy preparando contenido sobre tecnología, música, opiniones y todo lo que me inspire compartir. Volvé pronto.',
    'contact.title': 'Hablemos',
    'contact.subtitle': '¿Tenés un proyecto, una idea o simplemente querés saludar?',
    'footer.quote': '"Si funciona, no lo toques... si no, probá reiniciarlo" 🤖',
    'footer.copy': 'Hecho con ☕ y 🎸 desde Bariloche — Ariel Viscomi © 2025',
  },
  en: {
    'nav.about': 'About',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.music': 'Music',
    'nav.experience': 'Experience',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.badge': 'Bariloche, Patagonia Argentina',
    'hero.tagline': 'Patagonian Maker — IT, Dev & Music',
    'hero.description': "I create technology that connects innovation with everyday life. From Patagonia, I build solutions, automate processes, and produce music — always learning, always creating.",
    'hero.cta1': 'View projects',
    'hero.cta2': 'Contact',
    'hero.scroll': 'scroll',
    'about.title': 'About me',
    'about.subtitle': 'Who I am beyond the code',
    'about.p1': "I'm a <strong>developer, IT technician, and music producer</strong>, born and based in San Carlos de Bariloche, Argentina. I'm passionate about innovation, technology, the environment, and sustainability.",
    'about.p2': "I work as an <strong>IT Support Technician at INVAP</strong>, Argentina's leading high-tech company in the nuclear, space, defense, and medical sectors. In parallel, I'm actively transitioning into software development, DevOps, and artificial intelligence.",
    'about.p3': "I support the <strong>Open Source</strong> movement, enjoy a good coffee with my cats, and never stop learning. I'm curious by nature: I love collecting random facts, tinkering with retro gadgets, and understanding how things work.",
    'trait.maker.title': 'Maker',
    'trait.maker.desc': 'Merging nature and technology from Patagonia. If it can be built, I try.',
    'trait.autodidact.title': 'Self-taught',
    'trait.autodidact.desc': 'Constant learning. Curious, nerdy, and always evolving.',
    'trait.musician.title': 'Musician',
    'trait.musician.desc': 'Guitarist, songwriter, and producer. Music is my other way of creating.',
    'trait.sustainable.title': 'Sustainable',
    'trait.sustainable.desc': 'Technology with environmental awareness. Solutions that care for the planet.',
    'stack.title': 'Tech Stack',
    'stack.subtitle': 'Tools I work with every day',
    'stack.languages': 'Languages',
    'stack.databases': 'Databases',
    'stack.tools': 'Tools & Platforms',
    'projects.title': 'Projects',
    'projects.subtitle': "Things I've built and keep building",
    'filter.all': 'All',
    'filter.tools': 'Tools',
    'tag.private': 'Private',
    'project.rufa.desc': "Unified Repository of Flows and Automations. Python app to centralize, standardize, and distribute internal automations for INVAP's IT Support area.",
    'project.ticketly.desc': 'Frontend for a technical support ticket application. Management system for tracking incidents and requests.',
    'project.hormiga.desc': 'E-commerce for an artisan virtual store. Second version migrated to ReactJS, evolving from pure SCSS.',
    'project.identity.desc': 'Identity management system developed by F.A.A. Access administration and control.',
    'project.pyotp.desc': 'OTP token generator from the PC. Simple program for two-factor authentication without depending on a phone.',
    'project.amoblamientos.desc': 'Static catalog website for a Johnson furniture showroom in San Carlos de Bariloche. Responsive design with product gallery.',
    'project.msnts.desc': 'Website for the rock band "Matame si no te Sirvo". Themed design with band info, dates, and music.',
    'music.title': 'Music & Production',
    'music.subtitle': 'My other creative language — guitarist, songwriter, and producer',
    'music.cachorro.role': 'Music producer & multi-instrumentalist',
    'music.cachorro.desc': 'My personal productions channel. Recording, mixing, and mastering of music projects. All tracks recorded and produced by me.',
    'music.tocate.role': 'Music producer & arranger',
    'music.tocate.desc': "A show where we invited musicians to perform songs outside their comfort zone. I recorded and produced the full covers with all instruments. A filmmaker produced the music video and then we'd interview the guest.",
    'music.msnts.role': 'Guitarist, songwriter & album producer',
    'music.msnts.desc': "My rock band. I wrote many of the songs and recorded the full album. The album recordings are my production.",
    'music.gomez.role': 'Bassist',
    'music.gomez.desc': 'Band where I played bass. Rock from Bariloche.',
    'music.epv.role': 'Founder & producer',
    'music.epv.desc': 'Streaming project compiling various shows. Based in Bariloche. Coming soon: monthly live band event with interviews and professional audio/video recording.',
    'music.future.title': 'Coming soon',
    'music.future.role': 'In development',
    'music.future.desc': 'New band forming. Monthly/annual event where various bands play, live interviews, and professional audio and video recording.',
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',
    'exp.invap.period': 'Mar 2025 — Present',
    'exp.invap.title': 'IT Support Technician',
    'exp.invap.d1': 'First-level technical assistance, resolving incidents and managing requests',
    'exp.invap.d2': 'Collaboration with multidisciplinary teams to maintain high service standards',
    'exp.invap.d3': 'Development of internal automations (RUFA) to optimize area processes',
    'exp.delturista.period': 'Feb 2024 — Feb 2025',
    'exp.delturista.title': 'Technical Support Specialist',
    'exp.delturista.d1': 'Design and implementation of IT networks, including structured cabling',
    'exp.delturista.d2': 'Installation and configuration of network devices (switches, routers, access points)',
    'exp.delturista.d3': 'User technical support, incident resolution, and hardware/software maintenance',
    'exp.delturista.d4': 'Security system installation: surveillance cameras and access controls',
    'exp.delturista.d5': 'Server management and maintenance, process documentation',
    'exp.molinos.period': 'Mar 2021 — Dec 2023',
    'exp.molinos.title': 'IT Technician',
    'exp.molinos.d1': 'Preventive maintenance and repair of IT and telecommunications equipment',
    'exp.molinos.d2': 'Administration of computers, data servers, and internet networks for APDES schools',
    'education.title': 'Education',
    'edu.coderhouse.title': 'ReactJS Application Developer',
    'edu.madero.title': 'Secondary Education (ESO)',
    'edu.more': '...and more coming soon',
    'edu.more.sub': 'Ongoing education in progress',
    'blog.subtitle': 'Opinions, learnings, and discoveries',
    'blog.coming': 'Coming soon',
    'blog.coming.desc': "I'm preparing content about technology, music, opinions, and everything that inspires me to share. Check back soon.",
    'contact.title': "Let's talk",
    'contact.subtitle': 'Got a project, an idea, or just want to say hi?',
    'footer.quote': '"If it works, don\'t touch it... if not, try restarting it" 🤖',
    'footer.copy': 'Made with ☕ and 🎸 from Bariloche — Ariel Viscomi © 2025',
  }
};

// ---- Language System ----
let currentLang = localStorage.getItem('lang') || 'es';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  const toggle = document.getElementById('langToggle');
  toggle.textContent = lang === 'es' ? 'EN' : 'ES';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
}

// ---- Navigation ----
function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 60);
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }, { passive: true });

  // Lang toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    setLang(currentLang === 'es' ? 'en' : 'es');
  });
}

// ---- Project Filters ----
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        if (filter === 'all' || tags.includes(filter)) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s var(--ease-out) both';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ---- Scroll Reveal ----
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Smooth scroll for anchor links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  initNav();
  initFilters();
  initReveal();
  initSmoothScroll();
});

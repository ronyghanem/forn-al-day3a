/* ==========================================================================
   Forn w Saj Al Day3a — Site script
   Sections:
   1. Translations dictionary
   2. Menu / Gallery / Features content model (edit these to manage content)
   3. Rendering
   4. Language + theme + nav + reveal + lightbox
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ *
   * 1. TRANSLATIONS
   * ------------------------------------------------------------------ */
  const translations = {
    en: {
      skipLink: "Skip to main content",
      brandSub: "Village Bakery",
      navAbout: "About", navMenu: "Menu", navGallery: "Gallery", navWhy: "Why Us", navContact: "Contact", navOrder: "Order Now",
      switchLang: "Switch to Arabic", switchTheme: "Dark Mode",

      heroEyebrow: "From the Village Oven",
      heroTagline: "Authentic Lebanese Manaqeesh & Saj Made Fresh Daily",
      ctaMenu: "View Menu", ctaOrder: "Order Now", scrollDown: "Scroll",

      aboutEyebrow: "Our Story",
      aboutTitle: "Baked the Way the Village Remembers",
      aboutP1: "Forn w Saj Al Day3a began the way every good Lebanese bakery does — with a stone oven, a family recipe, and a neighborhood that never stopped coming back. Our saj still sits over an open flame, exactly as it did in our grandmother's courtyard.",
      aboutP2: "Every morning we hand-roll our dough, mix our zaatar the traditional way, and press each manoushe fresh to order. Nothing is frozen, nothing is rushed — just honest ingredients treated with the patience they deserve.",
      aboutBadgeNum: "30+", aboutBadgeText: "Years of Craft",
      stat1num: "100%", stat1text: "Fresh Daily Dough",
      stat2num: "15+", stat2text: "Menu Specialties",
      stat3num: "#1", stat3text: "Village Favorite",

      menuEyebrow: "Fresh From the Saj", menuTitle: "Our Menu",
      menuLead: "Take a look at our full menu below — every manoushe, wrap, and drink we make.",

      galleryEyebrow: "A Look Inside", galleryTitle: "From Our Oven to Yours",
      galleryLead: "A look at the bakery, the saj, and the food — click any photo to preview it larger.",

      whyEyebrow: "The Difference", whyTitle: "Why Choose Us",
      why1title: "Fresh Ingredients", why1text: "Dough mixed daily, produce sourced locally, nothing sits in a freezer.",
      why2title: "Traditional Saj Baking", why2text: "Baked over an open flame on a real saj dome, the way it's always been done.",
      why3title: "Fast, Friendly Service", why3text: "Most orders are in your hands within minutes of hitting the fire.",
      why4title: "Authentic Lebanese Taste", why4text: "Village recipes passed down and kept exactly as they should be.",

      contactEyebrow: "Visit or Order", contactTitle: "Get In Touch",
      contactLead: "Stop by the bakery, call ahead, or send your order on WhatsApp — the saj is always warm.",
      contactPhoneLabel: "Phone", contactEmailLabel: "Email", contactAddressLabel: "Address",
      contactAddressValue: "Main Street, Werhanieh, Lebanon",
      contactHoursLabel: "Hours", contactHoursValue: "Daily except tuesday, 7:00 AM – 2:00 PM",
      whatsappOrder: "Order on WhatsApp",

      footerDesc: "Authentic Lebanese manaqeesh and saj, hand-made daily on a traditional wood-fired oven — straight from the village to your table.",
      footerLinksHeading: "Explore", footerContactHeading: "Contact", footerHoursHeading: "Opening Hours",
      daysAll: "Everyday except tuesday",
      footerCopy: "© 2026 Forn w Saj Al Day3a. All rights reserved."
    },
    ar: {
      skipLink: "الانتقال إلى المحتوى الرئيسي",
      brandSub: "مخبز الضيعة",
      navAbout: "من نحن", navMenu: "القائمة", navGallery: "معرض الصور", navWhy: "لماذا نحن", navContact: "تواصل معنا", navOrder: "اطلب الآن",
      switchLang: "التحويل إلى الإنكليزية", switchTheme: "الوضع الليلي",

      heroEyebrow: "من فرن الضيعة",
      heroTagline: "مناقيش وصاج لبناني أصيل يُحضّر طازجاً يومياً",
      ctaMenu: "شاهد القائمة", ctaOrder: "اطلب الآن", scrollDown: "مرر للأسفل",

      aboutEyebrow: "قصتنا",
      aboutTitle: "مخبوز كما تتذكره الضيعة",
      aboutP1: "بدأ فرن وصاج الضيعة كما تبدأ كل مخبزة لبنانية أصيلة — بفرن حجري، ووصفة عائلية، وحي لم يتوقف يوماً عن العودة إلينا. لا يزال صاجنا فوق نار مباشرة، تماماً كما كان في باحة جدتنا.",
      aboutP2: "كل صباح نعجن طازجاً بأيدينا، ونحضّر خلطة الزعتر بالطريقة التقليدية، ونحمّص كل منقوشة عند الطلب. لا شيء مجمّد، ولا شيء متسرّع — فقط مكوّنات صادقة تُعامل بالصبر الذي تستحقه.",
      aboutBadgeNum: "+30", aboutBadgeText: "عاماً من الخبرة",
      stat1num: "100%", stat1text: "عجين طازج يومياً",
      stat2num: "+15", stat2text: "صنفاً في القائمة",
      stat3num: "#1", stat3text: "الأول في الضيعة",

      menuEyebrow: "طازج من الصاج", menuTitle: "قائمتنا",
      menuLead: "ألقوا نظرة على قائمتنا الكاملة أدناه — كل منقوشة ولفة ومشروب نحضّره.",

      galleryEyebrow: "لمحة من الداخل", galleryTitle: "من فرننا إلى مائدتكم",
      galleryLead: "لمحة من المخبز والصاج والأطباق — اضغطوا على أي صورة لمعاينتها بشكل أكبر.",

      whyEyebrow: "الفرق الذي نصنعه", whyTitle: "لماذا تختارنا",
      why1title: "مكوّنات طازجة", why1text: "عجين يُحضّر يومياً، ومنتجات محلية، ولا شيء يبقى في المجمّد.",
      why2title: "خَبز على الصاج التقليدي", why2text: "يُخبز فوق نار مباشرة على قبة صاج حقيقية، كما كان دائماً.",
      why3title: "خدمة سريعة وودّية", why3text: "معظم الطلبات تصلكم خلال دقائق من نزولها عن النار.",
      why4title: "نكهة لبنانية أصيلة", why4text: "وصفات الضيعة كما توارثناها، محفوظة كما يجب أن تكون.",

      contactEyebrow: "زوروا أو اطلبوا", contactTitle: "تواصلوا معنا",
      contactLead: "مرّوا بالمخبز، أو اتصلوا مسبقاً، أو أرسلوا طلبكم عبر واتساب — الصاج دائماً ساخن.",
      contactPhoneLabel: "الهاتف", contactEmailLabel: "البريد الإلكتروني", contactAddressLabel: "العنوان",
      contactAddressValue: "الشارع الرئيسي، الورهانيه، لبنان",
      contactHoursLabel: "ساعات العمل", contactHoursValue: "يومياً ما عدا الثلاثاء، 7:00 صباحاً – 2:00 مساءً",
      whatsappOrder: "اطلب عبر واتساب",

      footerDesc: "مناقيش وصاج لبناني أصيل، يُحضّر يدوياً كل يوم على فرن الحطب التقليدي — من الضيعة إلى مائدتكم مباشرة.",
      footerLinksHeading: "استكشف", footerContactHeading: "تواصل معنا", footerHoursHeading: "ساعات العمل",
      daysAll: "يومياً ما عدا الثلاثاء",
      footerCopy: "© 2026 فرن وصاج الضيعة. جميع الحقوق محفوظة."
    }
  };

  /* ------------------------------------------------------------------ *
   * 2. CONTENT MODEL — replace/extend freely, the UI renders from this.
   * (The menu itself is now a single static image edited directly in
   * index.html — see the "menu-photo" img tag in the Menu section.)
   * ------------------------------------------------------------------ */
  const iconOven   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3C7 3 4 8 4 13a8 8 0 0 0 16 0c0-5-3-10-8-10z"/><path d="M8 13a4 4 0 0 1 8 0" stroke-linecap="round"/><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none"/></svg>';
  const iconWheat  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21V6M12 6l-3-3M12 6l3-3M9 9l-3-2M9 9l3 1M15 9l3-2M15 9l-3 1M9 13l-3-2M9 13l3 1M15 13l3-2M15 13l-3 1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const iconClock  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const iconLeaf   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 20C4 10 12 4 20 4c0 8-6 16-16 16z"/><path d="M4 20c3-6 7-9 12-12" stroke-linecap="round"/></svg>';

  const features = [
    { icon: iconLeaf,  titleKey: "why1title", textKey: "why1text" },
    { icon: iconOven,  titleKey: "why2title", textKey: "why2text" },
    { icon: iconClock, titleKey: "why3title", textKey: "why3text" },
    { icon: iconWheat, titleKey: "why4title", textKey: "why4text" }
  ];

  /* ------------------------------------------------------------------ *
   * 3. RENDERING
   * ------------------------------------------------------------------ */
  function renderFeatures() {
    const grid = document.getElementById("whyGrid");
    grid.innerHTML = "";
    features.forEach((f, i) => {
      const card = document.createElement("div");
      card.className = "feature-card";
      card.style.setProperty("--i", i);
      card.setAttribute("data-reveal", "");
      card.innerHTML = `
        <div class="feature-icon">${f.icon}</div>
        <h3 data-i18n="${f.titleKey}"></h3>
        <p data-i18n="${f.textKey}"></p>`;
      grid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ *
   * 4. LANGUAGE
   * ------------------------------------------------------------------ */
  function applyTranslations(lang) {
    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    applyTranslations(lang);
    localStorage.setItem("fws-lang", lang);
    document.querySelectorAll("#langToggle, #langToggleFooter").forEach(btn => {
      btn.textContent = lang === "ar" ? "ع / EN" : "EN / ع";
    });
  }

  function toggleLanguage() {
    const current = document.documentElement.lang || "en";
    setLanguage(current === "en" ? "ar" : "en");
  }

  /* ------------------------------------------------------------------ *
   * 4b. THEME
   * ------------------------------------------------------------------ */
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("fws-theme", theme);
    const sun = document.getElementById("themeIconSun");
    const moon = document.getElementById("themeIconMoon");
    if (sun && moon) {
      sun.style.display = theme === "dark" ? "none" : "block";
      moon.style.display = theme === "dark" ? "block" : "none";
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current === "light" ? "dark" : "light");
  }

  /* ------------------------------------------------------------------ *
   * 4c. NAV (sticky + mobile menu)
   * ------------------------------------------------------------------ */
  function initNav() {
    const nav = document.getElementById("siteNav");
    const heroH = () => (document.getElementById("home")?.offsetHeight || 600) - 80;

    function onScroll() {
      const scrolled = window.scrollY > 40;
      nav.classList.toggle("scrolled", scrolled);
      nav.classList.toggle("is-hero", window.scrollY < heroH() && !scrolled);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const burger = document.getElementById("burgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("mobileCloseBtn");

    function openMobile() {
      mobileMenu.classList.add("open");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function closeMobile() {
      mobileMenu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    burger.addEventListener("click", openMobile);
    closeBtn.addEventListener("click", closeMobile);
    mobileMenu.querySelectorAll("nav a").forEach(a => a.addEventListener("click", closeMobile));

    document.getElementById("mobileLangToggle").addEventListener("click", () => { toggleLanguage(); });
    document.getElementById("mobileThemeToggle").addEventListener("click", () => { toggleTheme(); });
  }

  /* ------------------------------------------------------------------ *
   * 4d. SCROLL REVEAL
   * ------------------------------------------------------------------ */
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

    function observeAll() {
      document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
      document.querySelectorAll("[data-reveal-group] > *").forEach((el, i) => {
        el.setAttribute("data-reveal", "");
        el.style.setProperty("--i", i);
        observer.observe(el);
      });
    }
    observeAll();
    // Re-observe after dynamic content renders
    window.__reobserveReveal = observeAll;
  }

  /* ------------------------------------------------------------------ *
   * 4e. LIGHTBOX — click any gallery photo to preview it larger
   * ------------------------------------------------------------------ */
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const content = document.getElementById("lightboxContent");
    const closeBtn = document.getElementById("lightboxClose");

    function open(src, alt) {
      content.innerHTML = `<img src="${src}" alt="${alt || ""}">`;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
      content.innerHTML = "";
    }

    document.addEventListener("click", (e) => {
      const photo = e.target.closest(".gallery-photo, .menu-photo");
      if (photo) { open(photo.currentSrc || photo.src, photo.alt); }
    });
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ------------------------------------------------------------------ *
   * INIT
   * ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    const safe = (fn, label) => { try { fn(); } catch (err) { console.error("[fws]", label, err); } };

    safe(renderFeatures, "renderFeatures");

    const savedLang = localStorage.getItem("fws-lang") || "en";
    const savedTheme = localStorage.getItem("fws-theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    safe(() => setLanguage(savedLang), "setLanguage");
    safe(() => setTheme(savedTheme), "setTheme");

    ["langToggle", "langToggleFooter"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("click", toggleLanguage);
    });
    ["themeToggle", "themeToggleFooter"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("click", toggleTheme);
    });

    safe(initNav, "initNav");
    safe(initLightbox, "initLightbox");
    safe(initReveal, "initReveal");
    if (window.__reobserveReveal) safe(window.__reobserveReveal, "reobserveReveal");
  });
})();
/* ===================================================================
   EMBER KITCHEN — main script
   Simpler than Senthan's Fine Dining: single palette, so no flavor
   switcher — just dark/light + full 7-language i18n + an editorial
   menu list that swaps a sticky photo on hover/focus.
   =================================================================== */

const I18N = {
  en: {
    nav: { home:"Home", menu:"Menu", about:"About", gallery:"Gallery", testimonials:"Reviews", reservations:"Reserve", contact:"Contact" },
    hero: {
      eyebrow:"Open Fire · Bold Plates",
      headline_pre:"Real Food. ", headline_em:"No Filter.",
      subheadline:"Fire-cooked mains, slow stews, and street-style plates — served the way the kitchen actually cooks it: fast, hot, and unapologetically real.",
      cta_menu:"See The Menu", cta_reserve:"Grab A Table"
    },
    about: {
      eyebrow:"The Kitchen", heading:"Cooked hot. Served honest.",
      paragraph:"Ember Kitchen runs on live fire and a short memory for shortcuts. No plating tweezers, no stock photography — every dish on this site came straight off our pass, camera in hand, steam still rising.",
      pull_pre:"", pull_em:"Loud", pull_post:" flavor. Quiet ego."
    },
    menu: {
      eyebrow:"The Menu", heading:"What's Firing Tonight",
      subheading:"Hover any dish to see it plated. Everything here is shot in our kitchen — nothing borrowed.",
      group_mains:"Mains", group_stews:"Stews & Chapati", group_garden:"Garden & Bean", group_breakfast:"Breakfast & Sharing"
    },
    gallery: { eyebrow:"On The Pass", heading:"Behind the Kitchen Door", subheading:"Real plates, real steam, real hands. No stand-ins." },
    testimonials: { eyebrow:"Word on the Street", heading:"What the Regulars Say" },
    reservation: {
      eyebrow:"Reserve", heading:"Get a Seat at the Pass", subheading:"Tell us when — we'll fire your table up.",
      label_name:"Full Name", label_email:"Email Address", label_phone:"Phone Number", label_date:"Date", label_time:"Time",
      label_guests:"Guests", label_notes:"Special Requests", placeholder_notes:"Allergies, celebrations, seating preference…",
      submit:"Book It", success:"You're in — we'll confirm by phone or email shortly.",
      hours_heading:"Hours", hours_weekday:"Mon – Fri: 12:00 – 23:00", hours_weekend:"Sat – Sun: 10:00 – 00:00",
      address_label:"Address", phone_label:"Phone", email_label:"Email"
    },
    footer: {
      about_blurb:"Fire-cooked, camera-shot, zero stock photography. Real food, plated fast and served proud.",
      quicklinks_heading:"Explore", menu_heading:"Menu", contact_heading:"Contact",
      newsletter_heading:"Get the Drop", newsletter_placeholder:"Your email", newsletter_button:"Join",
      theme_label:"Mode", light:"Light", dark:"Dark", rights:"All rights reserved.", credit:"Built by"
    }
  },
  es: {
    nav: { home:"Inicio", menu:"Menú", about:"Nosotros", gallery:"Galería", testimonials:"Opiniones", reservations:"Reservar", contact:"Contacto" },
    hero: {
      eyebrow:"Fuego Vivo · Platos con Carácter",
      headline_pre:"Comida Real. ", headline_em:"Sin Filtros.",
      subheadline:"Platos fuertes al fuego, guisos lentos y comida callejera — servida tal como sale de la cocina: rápida, caliente y auténtica sin disculpas.",
      cta_menu:"Ver el Menú", cta_reserve:"Reservar Mesa"
    },
    about: {
      eyebrow:"La Cocina", heading:"Cocinado fuerte. Servido honesto.",
      paragraph:"Ember Kitchen funciona a fuego vivo y sin atajos. Sin pinzas de emplatado, sin fotos de stock — cada plato de este sitio salió directo de nuestra cocina, cámara en mano, aún humeante.",
      pull_pre:"", pull_em:"Sabor", pull_post:" fuerte. Ego bajo."
    },
    menu: {
      eyebrow:"El Menú", heading:"Lo que se cocina esta noche",
      subheading:"Pasa el cursor sobre cualquier plato para verlo servido. Todo aquí está fotografiado en nuestra cocina — nada prestado.",
      group_mains:"Platos Fuertes", group_stews:"Guisos y Chapati", group_garden:"Jardín y Legumbres", group_breakfast:"Desayuno y Para Compartir"
    },
    gallery: { eyebrow:"En la Línea", heading:"Detrás de la Puerta de la Cocina", subheading:"Platos reales, vapor real, manos reales. Sin dobles." },
    testimonials: { eyebrow:"Se Dice por Ahí", heading:"Lo Que Dicen Nuestros Habituales" },
    reservation: {
      eyebrow:"Reservar", heading:"Consigue tu lugar en la barra", subheading:"Dinos cuándo — encenderemos tu mesa.",
      label_name:"Nombre Completo", label_email:"Correo Electrónico", label_phone:"Número de Teléfono", label_date:"Fecha", label_time:"Hora",
      label_guests:"Comensales", label_notes:"Peticiones Especiales", placeholder_notes:"Alergias, celebraciones, preferencia de asiento…",
      submit:"Reservar Ya", success:"Listo — confirmaremos pronto por teléfono o correo.",
      hours_heading:"Horario", hours_weekday:"Lun – Vie: 12:00 – 23:00", hours_weekend:"Sáb – Dom: 10:00 – 00:00",
      address_label:"Dirección", phone_label:"Teléfono", email_label:"Correo"
    },
    footer: {
      about_blurb:"Cocinado a fuego, fotografiado por nosotros, cero fotos de stock. Comida real, servida rápido y con orgullo.",
      quicklinks_heading:"Explorar", menu_heading:"Menú", contact_heading:"Contacto",
      newsletter_heading:"Entérate Primero", newsletter_placeholder:"Tu correo", newsletter_button:"Unirme",
      theme_label:"Modo", light:"Claro", dark:"Oscuro", rights:"Todos los derechos reservados.", credit:"Creado por"
    }
  },
  fr: {
    nav: { home:"Accueil", menu:"Menu", about:"À Propos", gallery:"Galerie", testimonials:"Avis", reservations:"Réserver", contact:"Contact" },
    hero: {
      eyebrow:"Feu Vif · Assiettes Franches",
      headline_pre:"Vraie Cuisine. ", headline_em:"Sans Filtre.",
      subheadline:"Plats cuits au feu, ragoûts mijotés et cuisine de rue — servis comme ils sortent vraiment de la cuisine : vite, chaud, et sans excuses.",
      cta_menu:"Voir le Menu", cta_reserve:"Réserver une Table"
    },
    about: {
      eyebrow:"La Cuisine", heading:"Cuisiné fort. Servi honnête.",
      paragraph:"Ember Kitchen tourne au feu vif, sans raccourcis. Pas de pinces à dressage, pas de photos de stock — chaque plat de ce site sort tout droit de notre passe, appareil en main, encore fumant.",
      pull_pre:"", pull_em:"Saveur", pull_post:" forte. Ego discret."
    },
    menu: {
      eyebrow:"Le Menu", heading:"Ce qui grille ce soir",
      subheading:"Survolez un plat pour le voir dressé. Tout est photographié dans notre cuisine — rien d'emprunté.",
      group_mains:"Plats Principaux", group_stews:"Ragoûts et Chapati", group_garden:"Jardin et Légumineuses", group_breakfast:"Petit-Déjeuner et à Partager"
    },
    gallery: { eyebrow:"En Cuisine", heading:"Derrière la Porte de la Cuisine", subheading:"Vraies assiettes, vraie vapeur, vraies mains. Pas de doublures." },
    testimonials: { eyebrow:"On en Parle", heading:"Ce Que Disent Nos Habitués" },
    reservation: {
      eyebrow:"Réserver", heading:"Prenez place au comptoir", subheading:"Dites-nous quand — on allume votre table.",
      label_name:"Nom Complet", label_email:"Adresse E-mail", label_phone:"Numéro de Téléphone", label_date:"Date", label_time:"Heure",
      label_guests:"Convives", label_notes:"Demandes Spéciales", placeholder_notes:"Allergies, célébrations, préférence de place…",
      submit:"Réserver", success:"C'est noté — confirmation bientôt par téléphone ou e-mail.",
      hours_heading:"Horaires", hours_weekday:"Lun – Ven : 12h00 – 23h00", hours_weekend:"Sam – Dim : 10h00 – 00h00",
      address_label:"Adresse", phone_label:"Téléphone", email_label:"E-mail"
    },
    footer: {
      about_blurb:"Cuisiné au feu, photographié par nous, zéro photo de stock. Vraie cuisine, servie vite et fièrement.",
      quicklinks_heading:"Explorer", menu_heading:"Menu", contact_heading:"Contact",
      newsletter_heading:"Restez Branché", newsletter_placeholder:"Votre e-mail", newsletter_button:"S'inscrire",
      theme_label:"Mode", light:"Clair", dark:"Sombre", rights:"Tous droits réservés.", credit:"Créé par"
    }
  },
  sw: {
    nav: { home:"Nyumbani", menu:"Menyu", about:"Kuhusu", gallery:"Picha", testimonials:"Maoni", reservations:"Hifadhi", contact:"Wasiliana" },
    hero: {
      eyebrow:"Moto wa Wazi · Sahani za Ujasiri",
      headline_pre:"Chakula Halisi. ", headline_em:"Bila Kubadilisha.",
      subheadline:"Vyakula vya kuchoma moto, mchuzi wa taratibu, na vyakula vya mtindo wa mtaani — vinavyotolewa jinsi jiko linavyopika kweli: haraka, moto, na bila kuomba radhi.",
      cta_menu:"Angalia Menyu", cta_reserve:"Pata Meza"
    },
    about: {
      eyebrow:"Jiko Letu", heading:"Kupikwa moto. Kutolewa kwa uaminifu.",
      paragraph:"Ember Kitchen inaendeshwa na moto wa wazi bila njia za mkato. Hakuna vibano vya kupamba, hakuna picha za hisa — kila sahani hapa ilitoka moja kwa moja jikoni kwetu, kamera mkononi, mvuke ukiwa bado unapanda.",
      pull_pre:"", pull_em:"Ladha", pull_post:" kubwa. Kiburi kidogo."
    },
    menu: {
      eyebrow:"Menyu", heading:"Kinachopikwa Usiku wa Leo",
      subheading:"Weka kishale juu ya sahani yoyote kuiona ikiwa tayari. Kila kitu hapa kimepigwa picha jikoni kwetu — hakuna kilichokopwa.",
      group_mains:"Sahani Kuu", group_stews:"Mchuzi na Chapati", group_garden:"Bustani na Mikunde", group_breakfast:"Kifungua Kinywa na Kushirikiana"
    },
    gallery: { eyebrow:"Jikoni Papo Hapo", heading:"Nyuma ya Mlango wa Jiko", subheading:"Sahani halisi, mvuke halisi, mikono halisi. Hakuna mbadala." },
    testimonials: { eyebrow:"Watu Wanasema", heading:"Wanachosema Wateja Wetu wa Kudumu" },
    reservation: {
      eyebrow:"Hifadhi", heading:"Pata Nafasi Karibu na Jiko", subheading:"Tuambie lini — tutakuwa tumeandaa meza yako.",
      label_name:"Jina Kamili", label_email:"Barua Pepe", label_phone:"Namba ya Simu", label_date:"Tarehe", label_time:"Muda",
      label_guests:"Wageni", label_notes:"Maombi Maalum", placeholder_notes:"Mzio, sherehe, upendeleo wa kiti…",
      submit:"Hifadhi Sasa", success:"Umepokelewa — tutathibitisha hivi karibuni kwa simu au barua pepe.",
      hours_heading:"Saa za Kufanya Kazi", hours_weekday:"Jumatatu – Ijumaa: 12:00 – 23:00", hours_weekend:"Jumamosi – Jumapili: 10:00 – 00:00",
      address_label:"Anwani", phone_label:"Simu", email_label:"Barua Pepe"
    },
    footer: {
      about_blurb:"Kupikwa kwa moto, kupigwa picha na sisi, hakuna picha za hisa. Chakula halisi, kinachotolewa haraka na kwa fahari.",
      quicklinks_heading:"Gundua", menu_heading:"Menyu", contact_heading:"Mawasiliano",
      newsletter_heading:"Pata Taarifa Kwanza", newsletter_placeholder:"Barua pepe yako", newsletter_button:"Jiunge",
      theme_label:"Hali", light:"Nuru", dark:"Giza", rights:"Haki zote zimehifadhiwa.", credit:"Imetengenezwa na"
    }
  },
  zh: {
    nav: { home:"首页", menu:"菜单", about:"关于我们", gallery:"图库", testimonials:"顾客评价", reservations:"预订", contact:"联系我们" },
    hero: {
      eyebrow:"明火烹饪 · 大胆风味",
      headline_pre:"真实美食。", headline_em:"毫无滤镜。",
      subheadline:"明火主菜、文火炖菜与街头风味料理——就像厨房里真实烹饪的样子:快、热、毫不掩饰。",
      cta_menu:"查看菜单", cta_reserve:"预订座位"
    },
    about: {
      eyebrow:"我们的厨房", heading:"用猛火烹饪,用真诚上桌。",
      paragraph:"Ember Kitchen 靠明火运转,不走捷径。没有摆盘镊子,没有图库照片——这里的每一道菜都直接来自我们的厨房,拍摄时手中拿着相机,热气仍在升腾。",
      pull_pre:"", pull_em:"浓烈", pull_post:"的风味,低调的态度。"
    },
    menu: {
      eyebrow:"菜单", heading:"今晚在烤什么",
      subheading:"将鼠标悬停在任意菜品上即可查看装盘效果。这里的一切都在我们自己的厨房拍摄——绝无借用。",
      group_mains:"主菜", group_stews:"炖菜与恰帕提", group_garden:"田园豆类", group_breakfast:"早餐与分享餐"
    },
    gallery: { eyebrow:"后厨现场", heading:"厨房门后的故事", subheading:"真实的菜肴、真实的热气、真实的双手,没有替身。" },
    testimonials: { eyebrow:"街坊的评价", heading:"常客们怎么说" },
    reservation: {
      eyebrow:"预订", heading:"在灶台旁留个位置", subheading:"告诉我们时间——我们会点火备好您的餐桌。",
      label_name:"姓名", label_email:"电子邮箱", label_phone:"电话号码", label_date:"日期", label_time:"时间",
      label_guests:"人数", label_notes:"特殊要求", placeholder_notes:"过敏信息、庆祝活动、座位偏好……",
      submit:"立即预订", success:"已收到——我们会尽快通过电话或邮件确认。",
      hours_heading:"营业时间", hours_weekday:"周一至周五:12:00 – 23:00", hours_weekend:"周六至周日:10:00 – 00:00",
      address_label:"地址", phone_label:"电话", email_label:"邮箱"
    },
    footer: {
      about_blurb:"明火烹饪,亲自拍摄,零图库照片。真实美食,快速装盘,自豪呈现。",
      quicklinks_heading:"探索", menu_heading:"菜单", contact_heading:"联系方式",
      newsletter_heading:"第一时间知道", newsletter_placeholder:"您的电子邮箱", newsletter_button:"订阅",
      theme_label:"模式", light:"浅色", dark:"深色", rights:"版权所有。", credit:"制作方"
    }
  },
  ar: {
    nav: { home:"الرئيسية", menu:"القائمة", about:"من نحن", gallery:"معرض الصور", testimonials:"آراء الزبائن", reservations:"الحجز", contact:"تواصل معنا" },
    hero: {
      eyebrow:"نار مباشرة · أطباق جريئة",
      headline_pre:"طعام حقيقي. ", headline_em:"بلا فلاتر.",
      subheadline:"أطباق رئيسية مطهوة على النار، ويخنات بطيئة، وأطباق بأسلوب الشارع — تُقدَّم كما تخرج فعلاً من المطبخ: سريعة وساخنة وصادقة بلا اعتذار.",
      cta_menu:"تصفح القائمة", cta_reserve:"احجز طاولة"
    },
    about: {
      eyebrow:"مطبخنا", heading:"يُطهى بحرارة، ويُقدَّم بصدق.",
      paragraph:"يعمل Ember Kitchen على نار مباشرة دون اختصارات. لا ملاقط تزيين، لا صور جاهزة — كل طبق هنا خرج مباشرة من مطبخنا، والكاميرا في اليد، والبخار لا يزال يتصاعد.",
      pull_pre:"", pull_em:"نكهة", pull_post:" صاخبة. غرور هادئ."
    },
    menu: {
      eyebrow:"القائمة", heading:"ما الذي يُطهى الليلة",
      subheading:"مرّر المؤشر فوق أي طبق لرؤيته مُقدَّمًا. كل شيء هنا مصوَّر في مطبخنا — لا شيء مستعار.",
      group_mains:"الأطباق الرئيسية", group_stews:"اليخنات والشاباتي", group_garden:"الحديقة والبقوليات", group_breakfast:"الإفطار وأطباق المشاركة"
    },
    gallery: { eyebrow:"على خط التقديم", heading:"خلف باب المطبخ", subheading:"أطباق حقيقية، بخار حقيقي، أيدٍ حقيقية. بلا بدائل." },
    testimonials: { eyebrow:"حديث الناس", heading:"ماذا يقول رواد المكان" },
    reservation: {
      eyebrow:"احجز", heading:"احجز مكانك بجانب المطبخ", subheading:"أخبرنا بالموعد — وسنجهّز طاولتك.",
      label_name:"الاسم الكامل", label_email:"البريد الإلكتروني", label_phone:"رقم الهاتف", label_date:"التاريخ", label_time:"الوقت",
      label_guests:"عدد الضيوف", label_notes:"طلبات خاصة", placeholder_notes:"حساسية غذائية، مناسبة، تفضيل مكان الجلوس…",
      submit:"احجز الآن", success:"تم الاستلام — سنؤكد قريبًا عبر الهاتف أو البريد الإلكتروني.",
      hours_heading:"ساعات العمل", hours_weekday:"الاثنين – الجمعة: 12:00 – 23:00", hours_weekend:"السبت – الأحد: 10:00 – 00:00",
      address_label:"العنوان", phone_label:"الهاتف", email_label:"البريد الإلكتروني"
    },
    footer: {
      about_blurb:"يُطهى على النار، ونصوّره بأنفسنا، وبلا صور جاهزة إطلاقًا. طعام حقيقي، يُقدَّم بسرعة وفخر.",
      quicklinks_heading:"استكشف", menu_heading:"القائمة", contact_heading:"تواصل معنا",
      newsletter_heading:"كن أول من يعرف", newsletter_placeholder:"بريدك الإلكتروني", newsletter_button:"انضم",
      theme_label:"الوضع", light:"فاتح", dark:"داكن", rights:"جميع الحقوق محفوظة.", credit:"صُنع بواسطة"
    }
  },
  la: {
    nav: { home:"Domus", menu:"Index Ciborum", about:"De Nobis", gallery:"Imagines", testimonials:"Testimonia", reservations:"Reservationes", contact:"Contactus" },
    hero: {
      eyebrow:"Ignis Apertus · Fercula Audacia",
      headline_pre:"Cibus Verus. ", headline_em:"Sine Fuco.",
      subheadline:"Fercula igne cocta, iura lente parata, et cibus viae stilo — sicut vere ex culina exit: celer, calidus, sine excusatione.",
      cta_menu:"Indicem Vide", cta_reserve:"Mensam Cape"
    },
    about: {
      eyebrow:"Culina Nostra", heading:"Igne coctum. Sincere datum.",
      paragraph:"Ember Kitchen igne aperto vivit, sine compendiis. Nullae forcipes ornandi, nullae imagines emptae — quodque ferculum hic recta e culina nostra venit, machina photographica in manu, vapore adhuc ascendente.",
      pull_pre:"", pull_em:"Sapor", pull_post:" magnus. Superbia parva."
    },
    menu: {
      eyebrow:"Index", heading:"Quid Hac Nocte Coquitur",
      subheading:"Quodlibet ferculum tange ut compositum videas. Omnia hic in nostra culina depicta — nihil mutuatum.",
      group_mains:"Fercula Praecipua", group_stews:"Iura et Chapati", group_garden:"Hortus et Legumina", group_breakfast:"Ientaculum et Fercula Communia"
    },
    gallery: { eyebrow:"In Transitu", heading:"Post Ostium Culinae", subheading:"Fercula vera, vapor verus, manus verae. Nulla simulacra." },
    testimonials: { eyebrow:"Quod Vulgo Dicitur", heading:"Quid Hospites Assidui Dicant" },
    reservation: {
      eyebrow:"Reserva", heading:"Locum Iuxta Culinam Cape", subheading:"Nobis dic quando — mensam tuam accendemus.",
      label_name:"Nomen Plenum", label_email:"Inscriptio Electronica", label_phone:"Numerus Telephonicus", label_date:"Dies", label_time:"Hora",
      label_guests:"Hospites", label_notes:"Petitiones Speciales", placeholder_notes:"Allergiae, celebrationes, sedis optio…",
      submit:"Nunc Reserva", success:"Accepimus — mox per telephonum vel litteras electronicas confirmabimus.",
      hours_heading:"Horae Apertionis", hours_weekday:"Lunae – Veneris: 12:00 – 23:00", hours_weekend:"Saturni – Solis: 10:00 – 00:00",
      address_label:"Inscriptio", phone_label:"Telephonum", email_label:"Littera Electronica"
    },
    footer: {
      about_blurb:"Igne coctum, a nobis ipsis depictum, nullae prorsus imagines emptae. Cibus verus, celeriter datus, superbe oblatus.",
      quicklinks_heading:"Explora", menu_heading:"Index", contact_heading:"Contactus",
      newsletter_heading:"Primus Scito", newsletter_placeholder:"Inscriptio tua electronica", newsletter_button:"Subscribe",
      theme_label:"Modus", light:"Lucidum", dark:"Obscurum", rights:"Omnia iura reservata.", credit:"Factum ab"
    }
  }
};

const RTL_LANGS = new Set(["ar"]);

/* STORAGE — same defensive pattern as Senthan's Fine Dining */
const memoryStore = {};
const safeStorage = {
  get(key, fallback) {
    try { const v = window.localStorage.getItem(key); return v === null ? fallback : v; }
    catch (e) { return key in memoryStore ? memoryStore[key] : fallback; }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value); }
    catch (e) { memoryStore[key] = value; }
  }
};

const root = document.documentElement;
const VALID_THEMES = ["dark", "light"];

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.themeBtn === theme ? "true" : "false");
  });
  safeStorage.set("ek-theme", theme);
}

function initThemeEngine() {
  const theme = VALID_THEMES.includes(safeStorage.get("ek-theme", "")) ? safeStorage.get("ek-theme", "dark") : "dark";
  applyTheme(theme);
  document.querySelectorAll("[data-theme-toggle], [data-theme-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.themeBtn || (root.getAttribute("data-theme") === "dark" ? "light" : "dark");
      applyTheme(next);
    });
  });
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function applyLanguage(lang) {
  const dict = I18N[lang] ? lang : "en";
  const table = I18N[dict];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = getPath(table, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const val = getPath(table, el.dataset.i18nPlaceholder);
    if (val !== undefined) el.setAttribute("placeholder", val);
  });
  // hero headline is split into pre/em spans for the accent color
  const headlinePre = document.querySelector("[data-hero-headline-pre]");
  const headlineEm = document.querySelector("[data-hero-headline-em]");
  if (headlinePre) headlinePre.textContent = table.hero.headline_pre;
  if (headlineEm) headlineEm.textContent = table.hero.headline_em;
  const pullPre = document.querySelector("[data-pull-pre]");
  const pullEm = document.querySelector("[data-pull-em]");
  const pullPost = document.querySelector("[data-pull-post]");
  if (pullPre) pullPre.textContent = table.about.pull_pre;
  if (pullEm) pullEm.textContent = table.about.pull_em;
  if (pullPost) pullPost.textContent = table.about.pull_post;

  root.setAttribute("lang", dict);
  root.setAttribute("dir", RTL_LANGS.has(dict) ? "rtl" : "ltr");

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === dict);
  });
  const currentLabel = document.querySelector("[data-current-lang]");
  if (currentLabel) currentLabel.textContent = dict.toUpperCase();

  safeStorage.set("ek-lang", dict);
}

function initLanguageEngine() {
  const saved = safeStorage.get("ek-lang", "en");
  applyLanguage(I18N[saved] ? saved : "en");

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.langBtn);
      const dropdown = document.querySelector("[data-lang-dropdown]");
      if (dropdown) dropdown.classList.remove("is-open");
    });
  });

  const langToggle = document.querySelector("[data-lang-toggle]");
  const langDropdown = document.querySelector("[data-lang-dropdown]");
  if (langToggle && langDropdown) {
    langToggle.addEventListener("click", () => langDropdown.classList.toggle("is-open"));
    document.addEventListener("click", (e) => {
      if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) langDropdown.classList.remove("is-open");
    });
  }
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  if (!toggle || !panel) return;
  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("nav-lock", isOpen);
  });
  panel.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-lock");
    });
  });
}

/* MENU — hovering/focusing a row swaps the sticky photo */
function initMenuPhotoSwap() {
  const rows = document.querySelectorAll("[data-menu-row]");
  const photo = document.querySelector("[data-menu-photo]");
  if (!rows.length || !photo) return;
  rows.forEach(row => {
    const src = row.dataset.menuRow;
    const swap = () => { if (src) photo.style.opacity = "0"; setTimeout(() => { photo.setAttribute("src", src); photo.style.opacity = "1"; }, 120); };
    row.addEventListener("mouseenter", swap);
    row.addEventListener("focus", swap);
  });
}

function initGalleryLightbox() {
  const items = document.querySelectorAll("[data-gallery-item]");
  const lightbox = document.querySelector("[data-lightbox]");
  if (!items.length || !lightbox) return;
  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector("[data-lightbox-caption]");
  function open(src, alt) {
    img.setAttribute("src", src); img.setAttribute("alt", alt); caption.textContent = alt;
    lightbox.classList.add("is-open"); document.body.classList.add("nav-lock");
  }
  function close() { lightbox.classList.remove("is-open"); document.body.classList.remove("nav-lock"); }
  items.forEach(item => {
    item.addEventListener("click", () => {
      const fullImg = item.querySelector("img");
      open(fullImg.getAttribute("src"), fullImg.getAttribute("alt"));
    });
  });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox || e.target.hasAttribute("data-lightbox-close")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

function initReservationForm() {
  const form = document.querySelector("[data-reservation-form]");
  if (!form) return;
  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) dateInput.setAttribute("min", new Date().toISOString().split("T")[0]);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const successEl = document.querySelector("[data-reservation-success]");
    form.hidden = true;
    if (successEl) successEl.hidden = false;
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) { targets.forEach(t => t.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(t => observer.observe(t));
}

function initHeaderScroll() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initFooterYear() {
  const el = document.querySelector("[data-current-year]");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeEngine();
  initLanguageEngine();
  initMobileNav();
  initMenuPhotoSwap();
  initGalleryLightbox();
  initReservationForm();
  initScrollReveal();
  initHeaderScroll();
  initFooterYear();
});

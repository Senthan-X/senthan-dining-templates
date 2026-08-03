/* ===================================================================
   ROOT & TABLE — main script
   Quiet minimal counterpart to Senthan's Fine Dining and Ember
   Kitchen: single palette, light mode by default, no flavor switcher.
   Same proven i18n/storage/reveal architecture, new copy throughout.
   =================================================================== */

const I18N = {
  en: {
    nav: { home:"Home", menu:"Menu", about:"About", gallery:"Gallery", testimonials:"Reviews", reservations:"Reserve", contact:"Contact" },
    hero: {
      eyebrow:"A Quiet Table",
      headline_pre:"Food, ", headline_em:"unhurried.",
      subheadline:"A small table built around slow-cooked dishes, real ingredients, and the belief that dinner should never feel rushed.",
      cta_menu:"View the Menu", cta_reserve:"Reserve a Seat"
    },
    about: {
      eyebrow:"Our Philosophy", heading:"Simplicity, done with care",
      paragraph:"Root & Table began with a simple question: what if a menu felt like a favorite cookbook rather than a spectacle? So we stripped away what didn't matter and kept what did — real dishes, quiet rooms, and time to enjoy both.",
      quote:"“The best meals are the ones you don't have to talk yourself into.”"
    },
    menu: {
      eyebrow:"The Menu", heading:"A quiet, considered table",
      subheading:"Every photograph here comes from our own kitchen, plated exactly as it reaches your table.",
      group_mains:"Mains", group_stews:"Stews & Chapati", group_garden:"Garden & Bean", group_breakfast:"Breakfast & Sharing"
    },
    gallery: { eyebrow:"A Closer Look", heading:"Moments from the table", subheading:"A few quiet moments from our kitchen and dining room." },
    testimonials: { eyebrow:"In Their Words", heading:"What guests remember most" },
    reservation: {
      eyebrow:"Reserve", heading:"Reserve your table", subheading:"Let us know when you'd like to visit.",
      label_name:"Full Name", label_email:"Email Address", label_phone:"Phone Number", label_date:"Date", label_time:"Time",
      label_guests:"Guests", label_notes:"Special Requests", placeholder_notes:"Allergies, celebrations, seating preference…",
      submit:"Confirm Reservation", success:"Thank you. We've received your request and will confirm shortly.",
      hours_heading:"Hours", hours_weekday:"Tue – Sat: 12:00 – 21:00", hours_weekend:"Sun: 12:00 – 16:00 · Mon: Closed",
      address_label:"Address", phone_label:"Phone", email_label:"Email"
    },
    footer: {
      about_blurb:"A quiet table for slow-cooked dishes and real ingredients — unhurried, considered, and always real.",
      quicklinks_heading:"Explore", menu_heading:"Menu", contact_heading:"Contact",
      newsletter_heading:"Keep in Touch", newsletter_placeholder:"Your email", newsletter_button:"Subscribe",
      theme_label:"Mode", light:"Light", dark:"Dark", rights:"All rights reserved.", credit:"Designed by"
    }
  },
  es: {
    nav: { home:"Inicio", menu:"Menú", about:"Nosotros", gallery:"Galería", testimonials:"Opiniones", reservations:"Reservar", contact:"Contacto" },
    hero: {
      eyebrow:"Una Mesa Tranquila",
      headline_pre:"Comida, ", headline_em:"sin prisa.",
      subheadline:"Una mesa pequeña construida en torno a platos cocinados lentamente, ingredientes reales y la idea de que la cena nunca debería sentirse apresurada.",
      cta_menu:"Ver el Menú", cta_reserve:"Reservar un Lugar"
    },
    about: {
      eyebrow:"Nuestra Filosofía", heading:"Sencillez, hecha con cuidado",
      paragraph:"Root & Table nació de una pregunta simple: ¿y si un menú se sintiera como un libro de cocina favorito en vez de un espectáculo? Así que quitamos lo que no importaba y conservamos lo que sí — platos reales, salas tranquilas, y tiempo para disfrutar ambos.",
      quote:"«Las mejores comidas son las que no necesitas convencerte de tomar.»"
    },
    menu: {
      eyebrow:"El Menú", heading:"Una mesa tranquila y meditada",
      subheading:"Cada fotografía aquí viene de nuestra propia cocina, servida exactamente como llega a tu mesa.",
      group_mains:"Platos Fuertes", group_stews:"Guisos y Chapati", group_garden:"Jardín y Legumbres", group_breakfast:"Desayuno y Para Compartir"
    },
    gallery: { eyebrow:"Una Mirada Más Cercana", heading:"Momentos de la mesa", subheading:"Algunos momentos tranquilos de nuestra cocina y comedor." },
    testimonials: { eyebrow:"En Sus Palabras", heading:"Lo que más recuerdan los comensales" },
    reservation: {
      eyebrow:"Reservar", heading:"Reserva tu mesa", subheading:"Dinos cuándo te gustaría visitarnos.",
      label_name:"Nombre Completo", label_email:"Correo Electrónico", label_phone:"Número de Teléfono", label_date:"Fecha", label_time:"Hora",
      label_guests:"Comensales", label_notes:"Peticiones Especiales", placeholder_notes:"Alergias, celebraciones, preferencia de asiento…",
      submit:"Confirmar Reserva", success:"Gracias. Hemos recibido tu solicitud y confirmaremos pronto.",
      hours_heading:"Horario", hours_weekday:"Mar – Sáb: 12:00 – 21:00", hours_weekend:"Dom: 12:00 – 16:00 · Lun: Cerrado",
      address_label:"Dirección", phone_label:"Teléfono", email_label:"Correo"
    },
    footer: {
      about_blurb:"Una mesa tranquila para platos cocinados lentamente e ingredientes reales — sin prisa, meditada y siempre auténtica.",
      quicklinks_heading:"Explorar", menu_heading:"Menú", contact_heading:"Contacto",
      newsletter_heading:"Mantente en Contacto", newsletter_placeholder:"Tu correo", newsletter_button:"Suscribirse",
      theme_label:"Modo", light:"Claro", dark:"Oscuro", rights:"Todos los derechos reservados.", credit:"Diseñado por"
    }
  },
  fr: {
    nav: { home:"Accueil", menu:"Menu", about:"À Propos", gallery:"Galerie", testimonials:"Avis", reservations:"Réserver", contact:"Contact" },
    hero: {
      eyebrow:"Une Table Tranquille",
      headline_pre:"La cuisine, ", headline_em:"sans hâte.",
      subheadline:"Une petite table construite autour de plats mijotés lentement, d'ingrédients réels, et de l'idée que le dîner ne devrait jamais sembler pressé.",
      cta_menu:"Voir le Menu", cta_reserve:"Réserver une Place"
    },
    about: {
      eyebrow:"Notre Philosophie", heading:"La simplicité, avec soin",
      paragraph:"Root & Table est né d'une question simple : et si un menu ressemblait à un livre de cuisine préféré plutôt qu'à un spectacle ? Nous avons donc retiré ce qui ne comptait pas et gardé ce qui comptait — de vrais plats, des salles calmes, et le temps d'apprécier les deux.",
      quote:"« Les meilleurs repas sont ceux qu'on n'a pas besoin de se convaincre de prendre. »"
    },
    menu: {
      eyebrow:"Le Menu", heading:"Une table calme et réfléchie",
      subheading:"Chaque photo ici vient de notre propre cuisine, dressée exactement comme elle arrive à votre table.",
      group_mains:"Plats Principaux", group_stews:"Ragoûts et Chapati", group_garden:"Jardin et Légumineuses", group_breakfast:"Petit-Déjeuner et à Partager"
    },
    gallery: { eyebrow:"Un Regard Plus Proche", heading:"Instants de la table", subheading:"Quelques instants calmes de notre cuisine et de notre salle." },
    testimonials: { eyebrow:"Dans Leurs Mots", heading:"Ce que les convives retiennent le plus" },
    reservation: {
      eyebrow:"Réserver", heading:"Réservez votre table", subheading:"Dites-nous quand vous aimeriez venir.",
      label_name:"Nom Complet", label_email:"Adresse E-mail", label_phone:"Numéro de Téléphone", label_date:"Date", label_time:"Heure",
      label_guests:"Convives", label_notes:"Demandes Spéciales", placeholder_notes:"Allergies, célébrations, préférence de place…",
      submit:"Confirmer la Réservation", success:"Merci. Nous avons reçu votre demande et confirmerons bientôt.",
      hours_heading:"Horaires", hours_weekday:"Mar – Sam : 12h00 – 21h00", hours_weekend:"Dim : 12h00 – 16h00 · Lun : Fermé",
      address_label:"Adresse", phone_label:"Téléphone", email_label:"E-mail"
    },
    footer: {
      about_blurb:"Une table calme pour des plats mijotés lentement et de vrais ingrédients — sans hâte, réfléchie, et toujours authentique.",
      quicklinks_heading:"Explorer", menu_heading:"Menu", contact_heading:"Contact",
      newsletter_heading:"Restons en Contact", newsletter_placeholder:"Votre e-mail", newsletter_button:"S'abonner",
      theme_label:"Mode", light:"Clair", dark:"Sombre", rights:"Tous droits réservés.", credit:"Conçu par"
    }
  },
  sw: {
    nav: { home:"Nyumbani", menu:"Menyu", about:"Kuhusu", gallery:"Picha", testimonials:"Maoni", reservations:"Hifadhi", contact:"Wasiliana" },
    hero: {
      eyebrow:"Meza Tulivu",
      headline_pre:"Chakula, ", headline_em:"bila haraka.",
      subheadline:"Meza ndogo iliyojengwa kuzunguka vyakula vilivyopikwa taratibu, viungo halisi, na imani kwamba chakula cha jioni hakipaswi kuhisi cha haraka.",
      cta_menu:"Angalia Menyu", cta_reserve:"Hifadhi Nafasi"
    },
    about: {
      eyebrow:"Falsafa Yetu", heading:"Urahisi, uliofanywa kwa uangalifu",
      paragraph:"Root & Table ilianza na swali rahisi: vipi kama menyu ingehisi kama kitabu cha mapishi kipendwacho badala ya onyesho? Kwa hivyo tuliondoa kisichohitajika na kubaki na kile muhimu — vyakula halisi, vyumba vitulivu, na muda wa kufurahia vyote viwili.",
      quote:"\u201cMilo bora ni ile ambayo huhitaji kujishawishi kula.\u201d"
    },
    menu: {
      eyebrow:"Menyu", heading:"Meza tulivu na iliyofikiriwa",
      subheading:"Kila picha hapa inatoka jikoni petu wenyewe, ikiwa tayari kama inavyofika mezani kwako.",
      group_mains:"Sahani Kuu", group_stews:"Mchuzi na Chapati", group_garden:"Bustani na Mikunde", group_breakfast:"Kifungua Kinywa na Kushirikiana"
    },
    gallery: { eyebrow:"Mtazamo wa Karibu", heading:"Nyakati za mezani", subheading:"Nyakati chache tulivu kutoka jikoni na eneo letu la kulia." },
    testimonials: { eyebrow:"Kwa Maneno Yao", heading:"Wanachokumbuka zaidi wageni" },
    reservation: {
      eyebrow:"Hifadhi", heading:"Hifadhi meza yako", subheading:"Tujulishe utakapopenda kutembelea.",
      label_name:"Jina Kamili", label_email:"Barua Pepe", label_phone:"Namba ya Simu", label_date:"Tarehe", label_time:"Muda",
      label_guests:"Wageni", label_notes:"Maombi Maalum", placeholder_notes:"Mzio, sherehe, upendeleo wa kiti…",
      submit:"Thibitisha Hifadhi", success:"Asante. Tumepokea ombi lako na tutathibitisha hivi karibuni.",
      hours_heading:"Saa za Kufanya Kazi", hours_weekday:"Jumanne – Jumamosi: 12:00 – 21:00", hours_weekend:"Jumapili: 12:00 – 16:00 · Jumatatu: Imefungwa",
      address_label:"Anwani", phone_label:"Simu", email_label:"Barua Pepe"
    },
    footer: {
      about_blurb:"Meza tulivu kwa vyakula vilivyopikwa taratibu na viungo halisi — bila haraka, yenye kufikiriwa, na daima halisi.",
      quicklinks_heading:"Gundua", menu_heading:"Menyu", contact_heading:"Mawasiliano",
      newsletter_heading:"Endelea Kuwasiliana", newsletter_placeholder:"Barua pepe yako", newsletter_button:"Jiandikishe",
      theme_label:"Hali", light:"Nuru", dark:"Giza", rights:"Haki zote zimehifadhiwa.", credit:"Imebuniwa na"
    }
  },
  zh: {
    nav: { home:"首页", menu:"菜单", about:"关于我们", gallery:"图库", testimonials:"顾客评价", reservations:"预订", contact:"联系我们" },
    hero: {
      eyebrow:"一张安静的餐桌",
      headline_pre:"美食,", headline_em:"从容不迫。",
      subheadline:"一张小小的餐桌,围绕慢炖菜肴与真实食材而建——我们相信,晚餐永远不该匆忙。",
      cta_menu:"查看菜单", cta_reserve:"预订座位"
    },
    about: {
      eyebrow:"我们的理念", heading:"用心成就简单",
      paragraph:"Root & Table 源于一个简单的问题:如果菜单读起来更像一本心爱的食谱,而不是一场表演,会怎样?于是我们去掉了不重要的部分,留下了真正重要的——真实的菜肴、安静的空间,以及从容享受两者的时间。",
      quote:"“最好的一餐,是你无需说服自己就想吃的那一餐。”"
    },
    menu: {
      eyebrow:"菜单", heading:"一张安静而用心的餐桌",
      subheading:"这里的每一张照片都来自我们自己的厨房,呈现方式与端上您餐桌时完全一致。",
      group_mains:"主菜", group_stews:"炖菜与恰帕提", group_garden:"田园豆类", group_breakfast:"早餐与分享餐"
    },
    gallery: { eyebrow:"近距离观察", heading:"餐桌上的片刻", subheading:"来自我们厨房与餐厅的几个安静瞬间。" },
    testimonials: { eyebrow:"他们的话语", heading:"客人印象最深的事" },
    reservation: {
      eyebrow:"预订", heading:"预订您的餐桌", subheading:"告诉我们您希望到访的时间。",
      label_name:"姓名", label_email:"电子邮箱", label_phone:"电话号码", label_date:"日期", label_time:"时间",
      label_guests:"人数", label_notes:"特殊要求", placeholder_notes:"过敏信息、庆祝活动、座位偏好……",
      submit:"确认预订", success:"谢谢,我们已收到您的请求,稍后会尽快确认。",
      hours_heading:"营业时间", hours_weekday:"周二至周六:12:00 – 21:00", hours_weekend:"周日:12:00 – 16:00 · 周一休息",
      address_label:"地址", phone_label:"电话", email_label:"邮箱"
    },
    footer: {
      about_blurb:"一张安静的餐桌,呈现慢炖菜肴与真实食材——从容、用心,始终真实。",
      quicklinks_heading:"探索", menu_heading:"菜单", contact_heading:"联系方式",
      newsletter_heading:"保持联系", newsletter_placeholder:"您的电子邮箱", newsletter_button:"订阅",
      theme_label:"模式", light:"浅色", dark:"深色", rights:"版权所有。", credit:"设计者"
    }
  },
  ar: {
    nav: { home:"الرئيسية", menu:"القائمة", about:"من نحن", gallery:"معرض الصور", testimonials:"آراء الزبائن", reservations:"الحجز", contact:"تواصل معنا" },
    hero: {
      eyebrow:"مائدة هادئة",
      headline_pre:"طعام ", headline_em:"بلا استعجال.",
      subheadline:"مائدة صغيرة بُنيت حول أطباق تُطهى ببطء، ومكوّنات حقيقية، وإيمان بأن العشاء لا ينبغي أن يبدو متسرّعًا أبدًا.",
      cta_menu:"تصفح القائمة", cta_reserve:"احجز مقعدًا"
    },
    about: {
      eyebrow:"فلسفتنا", heading:"البساطة، بعناية",
      paragraph:"وُلدت Root & Table من سؤال بسيط: ماذا لو شعرت القائمة وكأنها كتاب طبخ محبوب بدلاً من عرض استعراضي؟ فتخلّينا عمّا لا يهم، وأبقينا على ما يهم — أطباق حقيقية، وأجواء هادئة، ووقت كافٍ للاستمتاع بكليهما.",
      quote:"«أفضل الوجبات هي التي لا تحتاج لإقناع نفسك بتناولها.»"
    },
    menu: {
      eyebrow:"القائمة", heading:"مائدة هادئة ومدروسة",
      subheading:"كل صورة هنا مأخوذة من مطبخنا الخاص، مقدَّمة تمامًا كما تصل إلى مائدتك.",
      group_mains:"الأطباق الرئيسية", group_stews:"اليخنات والشاباتي", group_garden:"الحديقة والبقوليات", group_breakfast:"الإفطار وأطباق المشاركة"
    },
    gallery: { eyebrow:"نظرة أقرب", heading:"لحظات من المائدة", subheading:"بضع لحظات هادئة من مطبخنا وقاعة الطعام." },
    testimonials: { eyebrow:"بكلماتهم", heading:"ما يتذكره ضيوفنا أكثر" },
    reservation: {
      eyebrow:"احجز", heading:"احجز طاولتك", subheading:"أخبرنا بالموعد الذي ترغب فيه بزيارتنا.",
      label_name:"الاسم الكامل", label_email:"البريد الإلكتروني", label_phone:"رقم الهاتف", label_date:"التاريخ", label_time:"الوقت",
      label_guests:"عدد الضيوف", label_notes:"طلبات خاصة", placeholder_notes:"حساسية غذائية، مناسبة، تفضيل مكان الجلوس…",
      submit:"تأكيد الحجز", success:"شكرًا لك. تلقّينا طلبك وسنؤكده قريبًا.",
      hours_heading:"ساعات العمل", hours_weekday:"الثلاثاء – السبت: 12:00 – 21:00", hours_weekend:"الأحد: 12:00 – 16:00 · الاثنين: مغلق",
      address_label:"العنوان", phone_label:"الهاتف", email_label:"البريد الإلكتروني"
    },
    footer: {
      about_blurb:"مائدة هادئة لأطباق تُطهى ببطء ومكوّنات حقيقية — بلا استعجال، مدروسة، وحقيقية دائمًا.",
      quicklinks_heading:"استكشف", menu_heading:"القائمة", contact_heading:"تواصل معنا",
      newsletter_heading:"ابقَ على تواصل", newsletter_placeholder:"بريدك الإلكتروني", newsletter_button:"اشترك",
      theme_label:"الوضع", light:"فاتح", dark:"داكن", rights:"جميع الحقوق محفوظة.", credit:"صمّمه"
    }
  },
  la: {
    nav: { home:"Domus", menu:"Index Ciborum", about:"De Nobis", gallery:"Imagines", testimonials:"Testimonia", reservations:"Reservationes", contact:"Contactus" },
    hero: {
      eyebrow:"Mensa Quieta",
      headline_pre:"Cibus, ", headline_em:"sine festinatione.",
      subheadline:"Mensa parva circa fercula lente cocta, res veras, et fidem quod cena numquam festinata sentiri debeat aedificata.",
      cta_menu:"Indicem Vide", cta_reserve:"Sedem Reserva"
    },
    about: {
      eyebrow:"Nostra Ratio", heading:"Simplicitas, cum cura facta",
      paragraph:"Root & Table ab una quaestione simplici coepit: quid si index sicut liber coquinarius dilectus, non spectaculum, sentiretur? Itaque removimus quod non intererat, et servavimus quod intererat — fercula vera, loca quieta, et tempus utrumque fruendi.",
      quote:"“Optima fercula sunt quae te edere persuadere non opus est.”"
    },
    menu: {
      eyebrow:"Index", heading:"Mensa quieta et considerata",
      subheading:"Quaeque imago hic e nostra ipsa culina venit, sicut ad mensam tuam pervenit composita.",
      group_mains:"Fercula Praecipua", group_stews:"Iura et Chapati", group_garden:"Hortus et Legumina", group_breakfast:"Ientaculum et Fercula Communia"
    },
    gallery: { eyebrow:"Propior Aspectus", heading:"Momenta Mensae", subheading:"Pauca momenta quieta ex culina et cenaculo nostro." },
    testimonials: { eyebrow:"Verbis Eorum", heading:"Quid Hospites Maxime Meminerint" },
    reservation: {
      eyebrow:"Reserva", heading:"Mensam Tuam Reserva", subheading:"Nobis dic quando nos visitare velis.",
      label_name:"Nomen Plenum", label_email:"Inscriptio Electronica", label_phone:"Numerus Telephonicus", label_date:"Dies", label_time:"Hora",
      label_guests:"Hospites", label_notes:"Petitiones Speciales", placeholder_notes:"Allergiae, celebrationes, sedis optio…",
      submit:"Reservationem Confirma", success:"Gratias. Petitionem tuam accepimus et mox confirmabimus.",
      hours_heading:"Horae Apertionis", hours_weekday:"Martis – Saturni: 12:00 – 21:00", hours_weekend:"Solis: 12:00 – 16:00 · Lunae: Clausum",
      address_label:"Inscriptio", phone_label:"Telephonum", email_label:"Littera Electronica"
    },
    footer: {
      about_blurb:"Mensa quieta ferculis lente coctis et rebus veris — sine festinatione, considerata, et semper vera.",
      quicklinks_heading:"Explora", menu_heading:"Index", contact_heading:"Contactus",
      newsletter_heading:"Mane Coniunctus", newsletter_placeholder:"Inscriptio tua electronica", newsletter_button:"Subscribe",
      theme_label:"Modus", light:"Lucidum", dark:"Obscurum", rights:"Omnia iura reservata.", credit:"Designatum ab"
    }
  }
};

const RTL_LANGS = new Set(["ar"]);

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
  safeStorage.set("rt-theme", theme);
}

function initThemeEngine() {
  const theme = VALID_THEMES.includes(safeStorage.get("rt-theme", "")) ? safeStorage.get("rt-theme", "light") : "light";
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
  const headlinePre = document.querySelector("[data-hero-headline-pre]");
  const headlineEm = document.querySelector("[data-hero-headline-em]");
  if (headlinePre) headlinePre.textContent = table.hero.headline_pre;
  if (headlineEm) headlineEm.textContent = table.hero.headline_em;

  root.setAttribute("lang", dict);
  root.setAttribute("dir", RTL_LANGS.has(dict) ? "rtl" : "ltr");

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === dict);
  });
  const currentLabel = document.querySelector("[data-current-lang]");
  if (currentLabel) currentLabel.textContent = dict.toUpperCase();

  safeStorage.set("rt-lang", dict);
}

function initLanguageEngine() {
  const saved = safeStorage.get("rt-lang", "en");
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
  initGalleryLightbox();
  initReservationForm();
  initScrollReveal();
  initHeaderScroll();
  initFooterYear();
});

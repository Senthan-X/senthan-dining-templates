/* ===================================================================
   THE LONG TABLE — main script
   Same proven i18n/storage/reveal architecture as the other three
   builds; new copy throughout, menu grouped by sharing size instead
   of course type.
   =================================================================== */

const I18N = {
  en: {
    nav: { home:"Home", menu:"Menu", about:"About", gallery:"Gallery", testimonials:"Reviews", reservations:"Reserve", contact:"Contact" },
    hero: {
      eyebrow:"A Seat For Everyone",
      headline_pre:"Good Food, ", headline_em:"Shared.",
      subheadline:"Family recipes served the way they're meant to be — passed around, fought over, and never quite enough of.",
      cta_menu:"See What's Cooking", cta_reserve:"Pull Up A Chair",
      badge_line1:"Family Table", badge_line2:"A Seat For Everyone"
    },
    about: {
      eyebrow:"Our Table", heading:"Cooking the way it's always been done",
      paragraph:"The Long Table started as a Sunday habit — too much food, too many chairs pulled up, nobody leaving hungry. We kept that habit and opened the doors. Every recipe here has been made a hundred times before it ever touched a menu.",
      card_label:"House Rule №1", card_text:"Always cook enough for one more plate."
    },
    menu: {
      eyebrow:"What's Cooking", heading:"Made for passing around",
      subheading:"Organized by how many hands you'll need — not by course.",
      group_solo:"Just for You", group_table:"For the Table", group_spread:"The Full Spread"
    },
    gallery: { eyebrow:"The Photo Wall", heading:"Snapshots from the table", subheading:"Pinned up exactly like they'd be on our kitchen wall." },
    testimonials: { eyebrow:"From Our Regulars", heading:"Why people keep coming back" },
    reservation: {
      eyebrow:"Join Us", heading:"Pull up a chair", subheading:"Tell us how many, and we'll set the table.",
      label_name:"Full Name", label_email:"Email Address", label_phone:"Phone Number", label_date:"Date", label_time:"Time",
      label_guests:"Guests", label_notes:"Special Requests", placeholder_notes:"Allergies, celebrations, seating preference…",
      submit:"Set My Place", success:"You're on the list — we'll confirm shortly by phone or email.",
      hours_heading:"Hours", hours_weekday:"Wed – Sun: 12:00 – 22:00", hours_weekend:"Mon – Tue: Closed",
      address_label:"Address", phone_label:"Phone", email_label:"Email"
    },
    footer: {
      about_blurb:"A family table for sharing plates and second helpings — cooked the way it's always been done, and always enough for one more.",
      quicklinks_heading:"Explore", menu_heading:"Menu", contact_heading:"Contact",
      newsletter_heading:"Sunday Invite List", newsletter_placeholder:"Your email", newsletter_button:"Count Me In",
      theme_label:"Mode", light:"Light", dark:"Dark", rights:"All rights reserved.", credit:"Crafted by"
    }
  },
  es: {
    nav: { home:"Inicio", menu:"Menú", about:"Nosotros", gallery:"Galería", testimonials:"Opiniones", reservations:"Reservar", contact:"Contacto" },
    hero: {
      eyebrow:"Un Lugar Para Todos",
      headline_pre:"Buena Comida, ", headline_em:"Compartida.",
      subheadline:"Recetas familiares servidas como deben ser — que se pasan de mano en mano, que se pelean, y de las que nunca hay suficiente.",
      cta_menu:"Ver Qué Se Cocina", cta_reserve:"Toma Asiento",
      badge_line1:"Mesa Familiar", badge_line2:"Un Lugar Para Todos"
    },
    about: {
      eyebrow:"Nuestra Mesa", heading:"Cocinando como siempre se ha hecho",
      paragraph:"The Long Table nació como una costumbre de domingo — demasiada comida, demasiadas sillas acercadas, nadie se iba con hambre. Mantuvimos esa costumbre y abrimos las puertas. Cada receta aquí se ha preparado cien veces antes de llegar al menú.",
      card_label:"Regla de la Casa Nº1", card_text:"Siempre cocina para un plato más."
    },
    menu: {
      eyebrow:"Qué Se Cocina", heading:"Hecho para compartir",
      subheading:"Organizado según cuántas manos necesitarás — no por tipo de plato.",
      group_solo:"Solo Para Ti", group_table:"Para la Mesa", group_spread:"El Banquete Completo"
    },
    gallery: { eyebrow:"El Muro de Fotos", heading:"Instantáneas de la mesa", subheading:"Clavadas tal como estarían en la pared de nuestra cocina." },
    testimonials: { eyebrow:"De Nuestros Habituales", heading:"Por qué la gente vuelve" },
    reservation: {
      eyebrow:"Únete", heading:"Toma asiento", subheading:"Dinos cuántos son y prepararemos la mesa.",
      label_name:"Nombre Completo", label_email:"Correo Electrónico", label_phone:"Número de Teléfono", label_date:"Fecha", label_time:"Hora",
      label_guests:"Comensales", label_notes:"Peticiones Especiales", placeholder_notes:"Alergias, celebraciones, preferencia de asiento…",
      submit:"Reservar Mi Lugar", success:"Ya estás en la lista — confirmaremos pronto por teléfono o correo.",
      hours_heading:"Horario", hours_weekday:"Mié – Dom: 12:00 – 22:00", hours_weekend:"Lun – Mar: Cerrado",
      address_label:"Dirección", phone_label:"Teléfono", email_label:"Correo"
    },
    footer: {
      about_blurb:"Una mesa familiar para compartir platos y repetir — cocinada como siempre se ha hecho, con espacio siempre para uno más.",
      quicklinks_heading:"Explorar", menu_heading:"Menú", contact_heading:"Contacto",
      newsletter_heading:"Lista de Domingos", newsletter_placeholder:"Tu correo", newsletter_button:"Apúntame",
      theme_label:"Modo", light:"Claro", dark:"Oscuro", rights:"Todos los derechos reservados.", credit:"Creado por"
    }
  },
  fr: {
    nav: { home:"Accueil", menu:"Menu", about:"À Propos", gallery:"Galerie", testimonials:"Avis", reservations:"Réserver", contact:"Contact" },
    hero: {
      eyebrow:"Une Place Pour Tous",
      headline_pre:"Bonne Cuisine, ", headline_em:"Partagée.",
      subheadline:"Des recettes familiales servies comme il se doit — qu'on se passe, qu'on se dispute, et dont il n'y en a jamais assez.",
      cta_menu:"Voir Ce Qui Mijote", cta_reserve:"Prenez Place",
      badge_line1:"Table Familiale", badge_line2:"Une Place Pour Tous"
    },
    about: {
      eyebrow:"Notre Table", heading:"Cuisiné comme on l'a toujours fait",
      paragraph:"The Long Table est né d'une habitude du dimanche — trop de nourriture, trop de chaises rapprochées, personne ne repartait le ventre vide. Nous avons gardé cette habitude et ouvert les portes. Chaque recette ici a été préparée cent fois avant de figurer au menu.",
      card_label:"Règle Maison Nº1", card_text:"Toujours cuisiner pour une assiette de plus."
    },
    menu: {
      eyebrow:"Ce Qui Mijote", heading:"Fait pour être partagé",
      subheading:"Organisé selon le nombre de mains nécessaires — pas par type de plat.",
      group_solo:"Juste Pour Vous", group_table:"Pour la Table", group_spread:"Le Grand Festin"
    },
    gallery: { eyebrow:"Le Mur de Photos", heading:"Instantanés de la table", subheading:"Épinglées comme elles le seraient sur notre mur de cuisine." },
    testimonials: { eyebrow:"Nos Habitués", heading:"Pourquoi on revient toujours" },
    reservation: {
      eyebrow:"Rejoignez-Nous", heading:"Prenez place", subheading:"Dites-nous combien vous êtes, et la table sera prête.",
      label_name:"Nom Complet", label_email:"Adresse E-mail", label_phone:"Numéro de Téléphone", label_date:"Date", label_time:"Heure",
      label_guests:"Convives", label_notes:"Demandes Spéciales", placeholder_notes:"Allergies, célébrations, préférence de place…",
      submit:"Réserver Ma Place", success:"C'est noté — nous confirmerons bientôt par téléphone ou e-mail.",
      hours_heading:"Horaires", hours_weekday:"Mer – Dim : 12h00 – 22h00", hours_weekend:"Lun – Mar : Fermé",
      address_label:"Adresse", phone_label:"Téléphone", email_label:"E-mail"
    },
    footer: {
      about_blurb:"Une table familiale pour partager et se resservir — cuisinée comme on l'a toujours fait, avec toujours de la place pour un de plus.",
      quicklinks_heading:"Explorer", menu_heading:"Menu", contact_heading:"Contact",
      newsletter_heading:"Liste des Dimanches", newsletter_placeholder:"Votre e-mail", newsletter_button:"Je M'inscris",
      theme_label:"Mode", light:"Clair", dark:"Sombre", rights:"Tous droits réservés.", credit:"Conçu par"
    }
  },
  sw: {
    nav: { home:"Nyumbani", menu:"Menyu", about:"Kuhusu", gallery:"Picha", testimonials:"Maoni", reservations:"Hifadhi", contact:"Wasiliana" },
    hero: {
      eyebrow:"Nafasi Kwa Kila Mtu",
      headline_pre:"Chakula Kizuri, ", headline_em:"Kilichoshirikiwa.",
      subheadline:"Mapishi ya kifamilia yanayotolewa jinsi yanavyostahili — yanayopitishwa mkono kwa mkono, yanayogombewa, na ambayo hayatoshi kamwe.",
      cta_menu:"Angalia Kinachopikwa", cta_reserve:"Chukua Kiti",
      badge_line1:"Meza ya Familia", badge_line2:"Nafasi Kwa Kila Mtu"
    },
    about: {
      eyebrow:"Meza Yetu", heading:"Kupika jinsi ilivyokuwa daima",
      paragraph:"The Long Table ilianza kama desturi ya Jumapili — chakula kingi mno, viti vingi vilivyovutwa karibu, hakuna aliyeondoka na njaa. Tulidumisha desturi hiyo na kufungua milango. Kila mapishi hapa yametayarishwa mara mia kabla ya kufika kwenye menyu.",
      card_label:"Kanuni ya Nyumbani Na. 1", card_text:"Daima pika ya kutosha kwa sahani moja zaidi."
    },
    menu: {
      eyebrow:"Kinachopikwa", heading:"Kimetengenezwa kwa kushirikiana",
      subheading:"Kimepangwa kwa idadi ya mikono utakayohitaji — si kwa aina ya mlo.",
      group_solo:"Kwa Ajili Yako Tu", group_table:"Kwa Meza", group_spread:"Karamu Kamili"
    },
    gallery: { eyebrow:"Ukuta wa Picha", heading:"Picha kutoka mezani", subheading:"Zimebandikwa kama zilivyo ukutani mwa jiko letu." },
    testimonials: { eyebrow:"Kutoka kwa Wateja Wetu wa Kudumu", heading:"Kwa nini watu wanaendelea kurudi" },
    reservation: {
      eyebrow:"Jiunge Nasi", heading:"Chukua kiti", subheading:"Tuambie ni wangapi, nasi tutaandaa meza.",
      label_name:"Jina Kamili", label_email:"Barua Pepe", label_phone:"Namba ya Simu", label_date:"Tarehe", label_time:"Muda",
      label_guests:"Wageni", label_notes:"Maombi Maalum", placeholder_notes:"Mzio, sherehe, upendeleo wa kiti…",
      submit:"Hifadhi Nafasi Yangu", success:"Uko kwenye orodha — tutathibitisha hivi karibuni kwa simu au barua pepe.",
      hours_heading:"Saa za Kufanya Kazi", hours_weekday:"Jumatano – Jumapili: 12:00 – 22:00", hours_weekend:"Jumatatu – Jumanne: Imefungwa",
      address_label:"Anwani", phone_label:"Simu", email_label:"Barua Pepe"
    },
    footer: {
      about_blurb:"Meza ya kifamilia kwa sahani za kushirikiana na kuongeza tena — imepikwa jinsi ilivyokuwa daima, na nafasi ya kutosha kwa mmoja zaidi.",
      quicklinks_heading:"Gundua", menu_heading:"Menyu", contact_heading:"Mawasiliano",
      newsletter_heading:"Orodha ya Jumapili", newsletter_placeholder:"Barua pepe yako", newsletter_button:"Niandikishe",
      theme_label:"Hali", light:"Nuru", dark:"Giza", rights:"Haki zote zimehifadhiwa.", credit:"Imebuniwa na"
    }
  },
  zh: {
    nav: { home:"首页", menu:"菜单", about:"关于我们", gallery:"图库", testimonials:"顾客评价", reservations:"预订", contact:"联系我们" },
    hero: {
      eyebrow:"人人都有一席之地",
      headline_pre:"美味佳肴,", headline_em:"与你分享。",
      subheadline:"家常菜就该这样上桌——传递分享、争相品尝,永远不嫌多。",
      cta_menu:"看看在做什么", cta_reserve:"入座就坐",
      badge_line1:"家庭餐桌", badge_line2:"人人都有一席之地"
    },
    about: {
      eyebrow:"我们的餐桌", heading:"一直以来的做法",
      paragraph:"The Long Table 源于一个周日的习惯——食物太多,拉来的椅子太多,没有人饿着肚子离开。我们保留了这个习惯,并打开了大门。这里的每一道菜,在登上菜单之前都已经做过上百次。",
      card_label:"家规第一条", card_text:"永远多煮一份的量。"
    },
    menu: {
      eyebrow:"在做什么", heading:"为分享而生",
      subheading:"按需要多少人手来分类——而不是按菜式种类。",
      group_solo:"一人食", group_table:"餐桌共享", group_spread:"全家盛宴"
    },
    gallery: { eyebrow:"照片墙", heading:"餐桌上的瞬间", subheading:"就像钉在我们厨房墙上的样子。" },
    testimonials: { eyebrow:"常客的声音", heading:"人们为何一再回来" },
    reservation: {
      eyebrow:"加入我们", heading:"入座就坐", subheading:"告诉我们有多少人,我们会备好餐桌。",
      label_name:"姓名", label_email:"电子邮箱", label_phone:"电话号码", label_date:"日期", label_time:"时间",
      label_guests:"人数", label_notes:"特殊要求", placeholder_notes:"过敏信息、庆祝活动、座位偏好……",
      submit:"确认我的座位", success:"您已在名单上——我们会尽快通过电话或邮件确认。",
      hours_heading:"营业时间", hours_weekday:"周三至周日:12:00 – 22:00", hours_weekend:"周一至周二:休息",
      address_label:"地址", phone_label:"电话", email_label:"邮箱"
    },
    footer: {
      about_blurb:"一张家庭餐桌,盛满可以分享、可以再添一份的菜肴——一直以来的做法,永远为多一人留有余地。",
      quicklinks_heading:"探索", menu_heading:"菜单", contact_heading:"联系方式",
      newsletter_heading:"周日邀请名单", newsletter_placeholder:"您的电子邮箱", newsletter_button:"算我一个",
      theme_label:"模式", light:"浅色", dark:"深色", rights:"版权所有。", credit:"制作者"
    }
  },
  ar: {
    nav: { home:"الرئيسية", menu:"القائمة", about:"من نحن", gallery:"معرض الصور", testimonials:"آراء الزبائن", reservations:"الحجز", contact:"تواصل معنا" },
    hero: {
      eyebrow:"مكان لكل شخص",
      headline_pre:"طعام شهي، ", headline_em:"يُقتسم.",
      subheadline:"وصفات عائلية تُقدَّم كما ينبغي — تتناقلها الأيدي، يتنافس عليها الجميع، ولا يكفي منها أبدًا.",
      cta_menu:"شاهد ما يُطهى", cta_reserve:"خذ مقعدك",
      badge_line1:"مائدة العائلة", badge_line2:"مكان لكل شخص"
    },
    about: {
      eyebrow:"مائدتنا", heading:"نطهو كما اعتدنا دائمًا",
      paragraph:"بدأت The Long Table كعادة يوم أحد — طعام أكثر من اللازم، كراسٍ كثيرة تُقرَّب، ولا أحد يغادر جائعًا. حافظنا على تلك العادة وفتحنا الأبواب. كل وصفة هنا طُهيت مئة مرة قبل أن تصل إلى القائمة.",
      card_label:"قاعدة البيت رقم ١", card_text:"اطهُ دائمًا ما يكفي لطبق إضافي."
    },
    menu: {
      eyebrow:"ما يُطهى", heading:"صُنع للمشاركة",
      subheading:"مرتّب بحسب عدد الأيدي التي ستحتاجها — لا بحسب نوع الطبق.",
      group_solo:"لك وحدك", group_table:"لمائدتكم", group_spread:"المأدبة الكاملة"
    },
    gallery: { eyebrow:"جدار الصور", heading:"لقطات من المائدة", subheading:"معلَّقة تمامًا كما لو كانت على جدار مطبخنا." },
    testimonials: { eyebrow:"من رواد المكان", heading:"لماذا يعود الناس دائمًا" },
    reservation: {
      eyebrow:"انضم إلينا", heading:"خذ مقعدك", subheading:"أخبرنا كم عددكم، وسنجهّز المائدة.",
      label_name:"الاسم الكامل", label_email:"البريد الإلكتروني", label_phone:"رقم الهاتف", label_date:"التاريخ", label_time:"الوقت",
      label_guests:"عدد الضيوف", label_notes:"طلبات خاصة", placeholder_notes:"حساسية غذائية، مناسبة، تفضيل مكان الجلوس…",
      submit:"احجز مكاني", success:"أنت الآن على القائمة — سنؤكد قريبًا عبر الهاتف أو البريد الإلكتروني.",
      hours_heading:"ساعات العمل", hours_weekday:"الأربعاء – الأحد: 12:00 – 22:00", hours_weekend:"الاثنين – الثلاثاء: مغلق",
      address_label:"العنوان", phone_label:"الهاتف", email_label:"البريد الإلكتروني"
    },
    footer: {
      about_blurb:"مائدة عائلية لأطباق المشاركة والحصص الإضافية — تُطهى كما اعتدنا دائمًا، ومكان دائم لشخص إضافي.",
      quicklinks_heading:"استكشف", menu_heading:"القائمة", contact_heading:"تواصل معنا",
      newsletter_heading:"قائمة دعوات الأحد", newsletter_placeholder:"بريدك الإلكتروني", newsletter_button:"سجّلني",
      theme_label:"الوضع", light:"فاتح", dark:"داكن", rights:"جميع الحقوق محفوظة.", credit:"صمّمه"
    }
  },
  la: {
    nav: { home:"Domus", menu:"Index Ciborum", about:"De Nobis", gallery:"Imagines", testimonials:"Testimonia", reservations:"Reservationes", contact:"Contactus" },
    hero: {
      eyebrow:"Locus Omnibus",
      headline_pre:"Cibus Bonus, ", headline_em:"Communis.",
      subheadline:"Recipes familiares sicut decet datae — quae de manu in manum traduntur, de quibus certatur, et quarum numquam satis est.",
      cta_menu:"Quid Coquatur Vide", cta_reserve:"Sedem Cape",
      badge_line1:"Mensa Familiae", badge_line2:"Locus Omnibus"
    },
    about: {
      eyebrow:"Mensa Nostra", heading:"Coquentes sicut semper factum est",
      paragraph:"The Long Table a consuetudine Solis die coepit — cibus nimius, sedes nimiae adductae, nemo esuriens abiit. Hanc consuetudinem servavimus et ianuas aperuimus. Quodque hic recipe centies parata est antequam indicem tetigit.",
      card_label:"Regula Domus Prima", card_text:"Semper satis coque pro uno ferculo amplius."
    },
    menu: {
      eyebrow:"Quid Coquatur", heading:"Ad communicandum factum",
      subheading:"Secundum manuum numerum quas opus erit ordinatum — non secundum ferculi genus.",
      group_solo:"Tibi Soli", group_table:"Pro Mensa", group_spread:"Convivium Plenum"
    },
    gallery: { eyebrow:"Paries Imaginum", heading:"Momenta a mensa", subheading:"Sicut in pariete culinae nostrae affixa." },
    testimonials: { eyebrow:"Ab Hospitibus Assiduis", heading:"Cur homines semper redeant" },
    reservation: {
      eyebrow:"Nobiscum Iunge", heading:"Sedem Cape", subheading:"Nobis dic quot sitis, et mensam parabimus.",
      label_name:"Nomen Plenum", label_email:"Inscriptio Electronica", label_phone:"Numerus Telephonicus", label_date:"Dies", label_time:"Hora",
      label_guests:"Hospites", label_notes:"Petitiones Speciales", placeholder_notes:"Allergiae, celebrationes, sedis optio…",
      submit:"Locum Meum Reserva", success:"In indice es — mox per telephonum vel litteras electronicas confirmabimus.",
      hours_heading:"Horae Apertionis", hours_weekday:"Mercurii – Solis: 12:00 – 22:00", hours_weekend:"Lunae – Martis: Clausum",
      address_label:"Inscriptio", phone_label:"Telephonum", email_label:"Littera Electronica"
    },
    footer: {
      about_blurb:"Mensa familiae ferculis communicandis et iterum sumendis — coquens sicut semper factum est, semper locum pro uno amplius habens.",
      quicklinks_heading:"Explora", menu_heading:"Index", contact_heading:"Contactus",
      newsletter_heading:"Index Invitationum Solis", newsletter_placeholder:"Inscriptio tua electronica", newsletter_button:"Me Adde",
      theme_label:"Modus", light:"Lucidum", dark:"Obscurum", rights:"Omnia iura reservata.", credit:"Factum ab"
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
  safeStorage.set("lt-theme", theme);
}

function initThemeEngine() {
  const theme = VALID_THEMES.includes(safeStorage.get("lt-theme", "")) ? safeStorage.get("lt-theme", "dark") : "dark";
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
  const badge1 = document.querySelector("[data-badge-line1]");
  const badge2 = document.querySelector("[data-badge-line2]");
  if (badge1) badge1.textContent = table.hero.badge_line1;
  if (badge2) badge2.textContent = table.hero.badge_line2;

  root.setAttribute("lang", dict);
  root.setAttribute("dir", RTL_LANGS.has(dict) ? "rtl" : "ltr");

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === dict);
  });
  const currentLabel = document.querySelector("[data-current-lang]");
  if (currentLabel) currentLabel.textContent = dict.toUpperCase();

  safeStorage.set("lt-lang", dict);
}

function initLanguageEngine() {
  const saved = safeStorage.get("lt-lang", "en");
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

function initMenuTabs() {
  const tabs = document.querySelectorAll("[data-menu-tab]");
  const panels = document.querySelectorAll("[data-menu-panel]");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");
      const target = tab.dataset.menuTab;
      panels.forEach(panel => panel.toggleAttribute("hidden", panel.dataset.menuPanel !== target));
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
  initMenuTabs();
  initGalleryLightbox();
  initReservationForm();
  initScrollReveal();
  initHeaderScroll();
  initFooterYear();
});

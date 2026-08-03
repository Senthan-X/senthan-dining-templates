/* ===================================================================
   SENTHAN'S FINE DINING — main script
   Sections: i18n dictionary, storage helpers, theme/palette engine,
   nav + menu tabs, gallery lightbox, reservation form, reveal-on-scroll
   =================================================================== */

/* -------------------------------------------------------------
   1. TRANSLATIONS
   Site chrome (nav, hero, section headers, forms, footer) is fully
   localized in 7 languages. Dish names/descriptions and testimonial
   quotes are intentionally left in English — as with most fine-dining
   menus, specialty dish names are commonly kept in their original
   language even on translated menus. Replace with your own copy or a
   professional translator's pass if you need dish-level localization.
------------------------------------------------------------------ */
const I18N = {
  en: {
    nav: { home: "Home", menu: "Menu", about: "About", gallery: "Gallery", testimonials: "Testimonials", reservations: "Reservations", contact: "Contact" },
    hero: {
      eyebrow: "Modern Kitchen · Rooted Flavors",
      headline: "Dinner, the way home tastes",
      subheadline: "Slow-simmered stews, fire-seared fish, and garden plates plated with a modern hand — a table built around real recipes, real ingredients, real flavor.",
      cta_menu: "View the Menu", cta_reserve: "Reserve a Table",
      ticket_label: "Chef's Ticket", ticket_note: "Tonight's picks, fired fresh",
      ticket_item1: "Pan-Seared Tilapia", ticket_item2: "Braised Chicken with Matoke", ticket_item3: "Banana-Leaf Steamed Meat"
    },
    about: {
      eyebrow: "Our Story", heading: "A table set with intention",
      paragraph1: "Senthan's Fine Dining started with one idea: the dishes we grew up on deserve the same care as any tasting menu. Every plate here traces back to a real kitchen, a real pot, a real hand that stirred it.",
      paragraph2: "We kept the flavor honest and modernized the room around it — considered plating, a calmer palette, and a kitchen that still simmers things low and slow.",
      quote: "“We don't reinvent the dish. We just give it the table it deserves.”"
    },
    menu: {
      eyebrow: "On the Menu", heading: "Food that remembers where it's from",
      subheading: "Every dish is photographed in our own kitchen — no stock plates, no stand-ins.",
      tab_mains: "Signature Mains", tab_stews: "Stews & Chapati", tab_garden: "Garden & Bean Plates", tab_breakfast: "Breakfast & Sharing"
    },
    gallery: { eyebrow: "From the Kitchen", heading: "A closer look at the table", subheading: "Behind every plate — the pots, the hands, and the table it lands on." },
    testimonials: { eyebrow: "Guests at the Table", heading: "What people say after dinner" },
    reservation: {
      eyebrow: "Book a Table", heading: "Save your seat at the table", subheading: "Tell us when you're coming, and we'll have the table ready.",
      label_name: "Full Name", label_email: "Email Address", label_phone: "Phone Number", label_date: "Date", label_time: "Time",
      label_guests: "Guests", label_notes: "Special Requests", placeholder_notes: "Allergies, celebrations, seating preference…",
      submit: "Reserve Now", success: "Thank you — your table request has been received. We'll confirm shortly by phone or email.",
      hours_heading: "Hours", hours_weekday: "Mon – Fri: 11:00 – 22:00", hours_weekend: "Sat – Sun: 09:00 – 23:00",
      address_label: "Address", phone_label: "Phone", email_label: "Email"
    },
    footer: {
      about_blurb: "A modern table for dishes rooted in real kitchens — pulled pots, slow stews, and plates worth booking ahead for.",
      quicklinks_heading: "Quick Links", menu_heading: "Menu", contact_heading: "Contact",
      newsletter_heading: "Stay in the Loop", newsletter_placeholder: "Your email address", newsletter_button: "Subscribe",
      theme_label: "Theme", palette_label: "Choose Your Flavor", light: "Light", dark: "Dark",
      rights: "All rights reserved.", credit: "Template crafted by"
    }
  },
  es: {
    nav: { home: "Inicio", menu: "Menú", about: "Nosotros", gallery: "Galería", testimonials: "Testimonios", reservations: "Reservas", contact: "Contacto" },
    hero: {
      eyebrow: "Cocina Moderna · Sabores de Siempre",
      headline: "La cena, como sabe el hogar",
      subheadline: "Guisos cocidos a fuego lento, pescado a la parrilla y platos de jardín servidos con un toque moderno — una mesa construida con recetas reales, ingredientes reales, sabor real.",
      cta_menu: "Ver el Menú", cta_reserve: "Reservar una Mesa",
      ticket_label: "Comanda del Chef", ticket_note: "Las elecciones de esta noche, recién hechas",
      ticket_item1: "Tilapia a la Plancha", ticket_item2: "Pollo Guisado con Matoke", ticket_item3: "Carne al Vapor en Hoja de Plátano"
    },
    about: {
      eyebrow: "Nuestra Historia", heading: "Una mesa puesta con intención",
      paragraph1: "Senthan's Fine Dining nació de una idea: los platos con los que crecimos merecen el mismo cuidado que cualquier menú degustación. Cada plato aquí viene de una cocina real, una olla real, una mano real que lo removió.",
      paragraph2: "Mantuvimos el sabor honesto y modernizamos el entorno — una presentación cuidada, una paleta más serena y una cocina que sigue cociendo a fuego lento.",
      quote: "«No reinventamos el plato. Solo le damos la mesa que merece.»"
    },
    menu: {
      eyebrow: "En el Menú", heading: "Comida que recuerda de dónde viene",
      subheading: "Cada plato está fotografiado en nuestra propia cocina — sin fotos de stock, sin sustitutos.",
      tab_mains: "Platos Principales", tab_stews: "Guisos y Chapati", tab_garden: "Platos de Jardín y Legumbres", tab_breakfast: "Desayuno y Para Compartir"
    },
    gallery: { eyebrow: "Desde la Cocina", heading: "Una mirada más cercana a la mesa", subheading: "Detrás de cada plato — las ollas, las manos y la mesa donde aterriza." },
    testimonials: { eyebrow: "Invitados en la Mesa", heading: "Lo que dicen después de cenar" },
    reservation: {
      eyebrow: "Reserva una Mesa", heading: "Guarda tu lugar en la mesa", subheading: "Dinos cuándo vienes y tendremos la mesa lista.",
      label_name: "Nombre Completo", label_email: "Correo Electrónico", label_phone: "Número de Teléfono", label_date: "Fecha", label_time: "Hora",
      label_guests: "Comensales", label_notes: "Peticiones Especiales", placeholder_notes: "Alergias, celebraciones, preferencia de asiento…",
      submit: "Reservar Ahora", success: "Gracias — hemos recibido tu solicitud de reserva. Te confirmaremos pronto por teléfono o correo.",
      hours_heading: "Horario", hours_weekday: "Lun – Vie: 11:00 – 22:00", hours_weekend: "Sáb – Dom: 09:00 – 23:00",
      address_label: "Dirección", phone_label: "Teléfono", email_label: "Correo"
    },
    footer: {
      about_blurb: "Una mesa moderna para platos con raíces en cocinas reales — ollas removidas, guisos lentos y platos que vale la pena reservar con antelación.",
      quicklinks_heading: "Enlaces Rápidos", menu_heading: "Menú", contact_heading: "Contacto",
      newsletter_heading: "Mantente Informado", newsletter_placeholder: "Tu correo electrónico", newsletter_button: "Suscribirse",
      theme_label: "Tema", palette_label: "Elige Tu Sabor", light: "Claro", dark: "Oscuro",
      rights: "Todos los derechos reservados.", credit: "Plantilla creada por"
    }
  },
  fr: {
    nav: { home: "Accueil", menu: "Menu", about: "À Propos", gallery: "Galerie", testimonials: "Témoignages", reservations: "Réservations", contact: "Contact" },
    hero: {
      eyebrow: "Cuisine Moderne · Saveurs Authentiques",
      headline: "Le dîner, comme à la maison",
      subheadline: "Ragoûts mijotés, poisson grillé au feu et assiettes du jardin dressées avec une touche moderne — une table bâtie sur de vraies recettes, de vrais ingrédients, une vraie saveur.",
      cta_menu: "Voir le Menu", cta_reserve: "Réserver une Table",
      ticket_label: "Ardoise du Chef", ticket_note: "Les choix du soir, tout juste sortis du feu",
      ticket_item1: "Tilapia Saisie à la Poêle", ticket_item2: "Poulet Mijoté au Matoke", ticket_item3: "Viande Cuite à la Vapeur en Feuille de Bananier"
    },
    about: {
      eyebrow: "Notre Histoire", heading: "Une table dressée avec intention",
      paragraph1: "Senthan's Fine Dining est né d'une idée simple : les plats avec lesquels nous avons grandi méritent autant de soin qu'un menu dégustation. Chaque assiette vient d'une vraie cuisine, d'une vraie marmite, d'une vraie main qui l'a remuée.",
      paragraph2: "Nous avons gardé la saveur honnête et modernisé le décor autour — un dressage soigné, une palette plus sobre, et une cuisine qui continue de mijoter lentement.",
      quote: "« Nous ne réinventons pas le plat. Nous lui donnons simplement la table qu'il mérite. »"
    },
    menu: {
      eyebrow: "Au Menu", heading: "Une cuisine qui n'oublie pas ses racines",
      subheading: "Chaque plat est photographié dans notre propre cuisine — pas de photos de stock, pas de doublures.",
      tab_mains: "Plats Signature", tab_stews: "Ragoûts et Chapati", tab_garden: "Assiettes du Jardin et Légumineuses", tab_breakfast: "Petit-Déjeuner et à Partager"
    },
    gallery: { eyebrow: "Depuis la Cuisine", heading: "Un regard plus proche sur la table", subheading: "Derrière chaque assiette — les marmites, les mains, et la table où elle atterrit." },
    testimonials: { eyebrow: "Nos Convives", heading: "Ce qu'ils disent après le dîner" },
    reservation: {
      eyebrow: "Réserver une Table", heading: "Réservez votre place à table", subheading: "Dites-nous quand vous venez, et la table sera prête.",
      label_name: "Nom Complet", label_email: "Adresse E-mail", label_phone: "Numéro de Téléphone", label_date: "Date", label_time: "Heure",
      label_guests: "Convives", label_notes: "Demandes Spéciales", placeholder_notes: "Allergies, célébrations, préférence de place…",
      submit: "Réserver Maintenant", success: "Merci — votre demande de réservation a été reçue. Nous confirmerons bientôt par téléphone ou e-mail.",
      hours_heading: "Horaires", hours_weekday: "Lun – Ven : 11h00 – 22h00", hours_weekend: "Sam – Dim : 09h00 – 23h00",
      address_label: "Adresse", phone_label: "Téléphone", email_label: "E-mail"
    },
    footer: {
      about_blurb: "Une table moderne pour des plats enracinés dans de vraies cuisines — marmites remuées, ragoûts mijotés, et assiettes qui valent la peine d'être réservées à l'avance.",
      quicklinks_heading: "Liens Rapides", menu_heading: "Menu", contact_heading: "Contact",
      newsletter_heading: "Restez Informé", newsletter_placeholder: "Votre adresse e-mail", newsletter_button: "S'abonner",
      theme_label: "Thème", palette_label: "Choisissez Votre Saveur", light: "Clair", dark: "Sombre",
      rights: "Tous droits réservés.", credit: "Modèle conçu par"
    }
  },
  sw: {
    nav: { home: "Nyumbani", menu: "Menyu", about: "Kuhusu", gallery: "Picha", testimonials: "Maoni", reservations: "Uhifadhi", contact: "Wasiliana" },
    hero: {
      eyebrow: "Jiko la Kisasa · Ladha za Asili",
      headline: "Chakula cha jioni, kama nyumbani",
      subheadline: "Mchuzi ulioivishwa taratibu, samaki wa kuchoma, na sahani za bustani zilizopambwa kwa mtindo wa kisasa — meza iliyojengwa kwa mapishi halisi, viungo halisi, na ladha halisi.",
      cta_menu: "Angalia Menyu", cta_reserve: "Hifadhi Meza",
      ticket_label: "Chaguo la Mpishi", ticket_note: "Vyakula vya leo jioni, vipya kutoka jikoni",
      ticket_item1: "Samaki wa Tilapia wa Kukaanga", ticket_item2: "Kuku wa Kuchemshwa na Matoke", ticket_item3: "Nyama ya Kuchemshwa kwa Jani la Ndizi"
    },
    about: {
      eyebrow: "Historia Yetu", heading: "Meza iliyoandaliwa kwa nia",
      paragraph1: "Senthan's Fine Dining ilianza na wazo moja: vyakula tulivyokulia navyo vinastahili uangalifu ule ule kama menyu yoyote ya hali ya juu. Kila sahani hapa inatoka jikoni halisi, sufuria halisi, na mkono halisi uliochochea.",
      paragraph2: "Tumeendelea kudumisha ladha ya kweli huku tukiboresha mazingira — upambaji makini, rangi tulivu zaidi, na jiko linaloendelea kupika taratibu.",
      quote: "“Hatubuni upya sahani. Tunaipatia tu meza inayostahili.”"
    },
    menu: {
      eyebrow: "Kwenye Menyu", heading: "Chakula kinachokumbuka ilikotoka",
      subheading: "Kila sahani imepigwa picha kutoka jikoni letu — hakuna picha za hisa, hakuna mbadala.",
      tab_mains: "Sahani Kuu", tab_stews: "Mchuzi na Chapati", tab_garden: "Sahani za Bustani na Mikunde", tab_breakfast: "Kifungua Kinywa na Kushirikiana"
    },
    gallery: { eyebrow: "Kutoka Jikoni", heading: "Mtazamo wa karibu wa meza", subheading: "Nyuma ya kila sahani — sufuria, mikono, na meza inayoifikia." },
    testimonials: { eyebrow: "Wageni Mezani", heading: "Wanachosema baada ya chakula cha jioni" },
    reservation: {
      eyebrow: "Hifadhi Meza", heading: "Hifadhi nafasi yako mezani", subheading: "Tuambie utakapofika, nasi tutakuwa tumeandaa meza.",
      label_name: "Jina Kamili", label_email: "Barua Pepe", label_phone: "Namba ya Simu", label_date: "Tarehe", label_time: "Muda",
      label_guests: "Wageni", label_notes: "Maombi Maalum", placeholder_notes: "Mzio, sherehe, upendeleo wa kiti…",
      submit: "Hifadhi Sasa", success: "Asante — ombi lako la kuhifadhi limepokelewa. Tutathibitisha hivi karibuni kwa simu au barua pepe.",
      hours_heading: "Saa za Kufanya Kazi", hours_weekday: "Jumatatu – Ijumaa: 11:00 – 22:00", hours_weekend: "Jumamosi – Jumapili: 09:00 – 23:00",
      address_label: "Anwani", phone_label: "Simu", email_label: "Barua Pepe"
    },
    footer: {
      about_blurb: "Meza ya kisasa kwa sahani zenye mizizi katika jiko halisi — sufuria zilizochochewa, mchuzi ulioivishwa taratibu, na sahani zinazostahili kuhifadhiwa mapema.",
      quicklinks_heading: "Viungo vya Haraka", menu_heading: "Menyu", contact_heading: "Mawasiliano",
      newsletter_heading: "Baki Ukijua", newsletter_placeholder: "Barua pepe yako", newsletter_button: "Jiandikishe",
      theme_label: "Mandhari", palette_label: "Chagua Ladha Yako", light: "Nuru", dark: "Giza",
      rights: "Haki zote zimehifadhiwa.", credit: "Kiolezo kilibuniwa na"
    }
  },
  zh: {
    nav: { home: "首页", menu: "菜单", about: "关于我们", gallery: "图库", testimonials: "顾客评价", reservations: "预订", contact: "联系我们" },
    hero: {
      eyebrow: "现代厨房 · 传统风味",
      headline: "晚餐,如家的味道",
      subheadline: "文火慢炖的炖菜、明火煎烤的鱼,以及以现代手法装盘的田园菜肴——这张餐桌,建立在真实的食谱、真实的食材与真实的味道之上。",
      cta_menu: "查看菜单", cta_reserve: "预订座位",
      ticket_label: "主厨精选", ticket_note: "今晚新鲜出炉的推荐",
      ticket_item1: "香煎罗非鱼", ticket_item2: "炖鸡配马托克", ticket_item3: "香蕉叶蒸肉"
    },
    about: {
      eyebrow: "我们的故事", heading: "用心摆好的一张桌子",
      paragraph1: "Senthan's Fine Dining 源于一个理念:我们从小吃到大的菜肴,值得与任何品鉴菜单同样的用心。这里的每一道菜,都源自一个真实的厨房、一口真实的锅,以及一双真实搅动过它的手。",
      paragraph2: "我们保留了最真实的味道,同时让用餐环境更加现代——精心的摆盘、更沉稳的色调,以及依然文火慢炖的厨房。",
      quote: "“我们不重新发明这道菜,只是为它配上应得的餐桌。”"
    },
    menu: {
      eyebrow: "菜单", heading: "不忘本味的料理",
      subheading: "每一道菜都在我们自己的厨房拍摄——没有图库照片,没有替身。",
      tab_mains: "招牌主菜", tab_stews: "炖菜与恰帕提", tab_garden: "田园豆类拼盘", tab_breakfast: "早餐与分享餐"
    },
    gallery: { eyebrow: "来自厨房", heading: "近距离看这张餐桌", subheading: "每道菜背后——那些锅、那些手,以及它最终抵达的餐桌。" },
    testimonials: { eyebrow: "座上宾客", heading: "晚餐后他们怎么说" },
    reservation: {
      eyebrow: "预订座位", heading: "为自己留一个座位", subheading: "告诉我们您到访的时间,我们会备好餐桌。",
      label_name: "姓名", label_email: "电子邮箱", label_phone: "电话号码", label_date: "日期", label_time: "时间",
      label_guests: "人数", label_notes: "特殊要求", placeholder_notes: "过敏信息、庆祝活动、座位偏好……",
      submit: "立即预订", success: "谢谢——我们已收到您的预订请求,稍后会通过电话或邮件确认。",
      hours_heading: "营业时间", hours_weekday: "周一至周五:11:00 – 22:00", hours_weekend: "周六至周日:09:00 – 23:00",
      address_label: "地址", phone_label: "电话", email_label: "邮箱"
    },
    footer: {
      about_blurb: "一张现代餐桌,承载着源自真实厨房的菜肴——被搅动过的锅、文火慢炖的炖菜,以及值得提前预订的佳肴。",
      quicklinks_heading: "快速链接", menu_heading: "菜单", contact_heading: "联系方式",
      newsletter_heading: "保持联系", newsletter_placeholder: "您的电子邮箱", newsletter_button: "订阅",
      theme_label: "主题", palette_label: "选择您的风味", light: "浅色", dark: "深色",
      rights: "版权所有。", credit: "模板制作"
    }
  },
  ar: {
    nav: { home: "الرئيسية", menu: "القائمة", about: "من نحن", gallery: "معرض الصور", testimonials: "آراء الزبائن", reservations: "الحجوزات", contact: "تواصل معنا" },
    hero: {
      eyebrow: "مطبخ عصري · نكهات أصيلة",
      headline: "عشاء بطعم البيت",
      subheadline: "يخنات تُطهى ببطء، وسمك مشوي على النار، وأطباق من حديقتنا تُقدَّم بلمسة عصرية — مائدة بُنيت على وصفات حقيقية، ومكوّنات حقيقية، ونكهة حقيقية.",
      cta_menu: "تصفح القائمة", cta_reserve: "احجز طاولة",
      ticket_label: "مختارات الشيف", ticket_note: "أطباق الليلة، طازجة من الفرن",
      ticket_item1: "سمك التلابيا المقلي", ticket_item2: "دجاج مطهو مع الماتوكي", ticket_item3: "لحم مطهو على البخار بورق الموز"
    },
    about: {
      eyebrow: "قصتنا", heading: "مائدة أُعدّت بعناية",
      paragraph1: "بدأ Senthan's Fine Dining بفكرة واحدة: الأطباق التي كبرنا عليها تستحق نفس العناية التي تُمنح لأي قائمة تذوق راقية. كل طبق هنا يعود إلى مطبخ حقيقي، وقِدر حقيقي، ويد حقيقية قلّبته.",
      paragraph2: "حافظنا على صدق النكهة، وطوّرنا الأجواء من حولها — تقديم مدروس، ألوان أكثر هدوءًا، ومطبخ ما زال يطهو على نار هادئة.",
      quote: "«نحن لا نعيد اختراع الطبق، بل نمنحه المائدة التي يستحقها.»"
    },
    menu: {
      eyebrow: "على القائمة", heading: "طعام يتذكّر من أين أتى",
      subheading: "كل طبق مصوَّر في مطبخنا الخاص — لا صور جاهزة ولا بدائل.",
      tab_mains: "الأطباق الرئيسية المميزة", tab_stews: "اليخنات والشاباتي", tab_garden: "أطباق الحديقة والبقوليات", tab_breakfast: "الإفطار وأطباق المشاركة"
    },
    gallery: { eyebrow: "من المطبخ", heading: "نظرة أقرب إلى المائدة", subheading: "خلف كل طبق — القدور، الأيدي، والمائدة التي يصل إليها." },
    testimonials: { eyebrow: "ضيوف على المائدة", heading: "ماذا يقولون بعد العشاء" },
    reservation: {
      eyebrow: "احجز طاولة", heading: "احجز مقعدك على المائدة", subheading: "أخبرنا بموعد قدومك، وسنجهّز لك الطاولة.",
      label_name: "الاسم الكامل", label_email: "البريد الإلكتروني", label_phone: "رقم الهاتف", label_date: "التاريخ", label_time: "الوقت",
      label_guests: "عدد الضيوف", label_notes: "طلبات خاصة", placeholder_notes: "حساسية غذائية، مناسبة، تفضيل مكان الجلوس…",
      submit: "احجز الآن", success: "شكرًا لك — تم استلام طلب الحجز. سنؤكد قريبًا عبر الهاتف أو البريد الإلكتروني.",
      hours_heading: "ساعات العمل", hours_weekday: "الاثنين – الجمعة: 11:00 – 22:00", hours_weekend: "السبت – الأحد: 09:00 – 23:00",
      address_label: "العنوان", phone_label: "الهاتف", email_label: "البريد الإلكتروني"
    },
    footer: {
      about_blurb: "مائدة عصرية لأطباق متجذّرة في مطابخ حقيقية — قدور مقلَّبة، يخنات تُطهى ببطء، وأطباق تستحق الحجز المسبق.",
      quicklinks_heading: "روابط سريعة", menu_heading: "القائمة", contact_heading: "تواصل معنا",
      newsletter_heading: "ابقَ على اطلاع", newsletter_placeholder: "بريدك الإلكتروني", newsletter_button: "اشترك",
      theme_label: "المظهر", palette_label: "اختر نكهتك", light: "فاتح", dark: "داكن",
      rights: "جميع الحقوق محفوظة.", credit: "القالب من تصميم"
    }
  },
  la: {
    nav: { home: "Domus", menu: "Index Ciborum", about: "De Nobis", gallery: "Imagines", testimonials: "Testimonia", reservations: "Reservationes", contact: "Contactus" },
    hero: {
      eyebrow: "Culina Moderna · Sapores Antiqui",
      headline: "Cena, sicut domi sapit",
      subheadline: "Iura lente cocta, piscis igne assus, et fercula hortensia arte moderna composita — mensa ex veris rationibus coquendi, veris rebus, vero sapore aedificata.",
      cta_menu: "Indicem Vide", cta_reserve: "Mensam Reserva",
      ticket_label: "Electio Coci", ticket_note: "Fercula huius vesperi, recens parata",
      ticket_item1: "Tilapia in Sartagine Assa", ticket_item2: "Pullus Coctus cum Matoke", ticket_item3: "Caro in Folio Musae Vaporata"
    },
    about: {
      eyebrow: "Historia Nostra", heading: "Mensa cum consilio posita",
      paragraph1: "Senthan's Fine Dining ab una sententia coepit: fercula quibus crevimus eandem curam merentur quam quodlibet ferculum electum. Quodque hic ferculum ex vera culina, vera olla, vera manu quae id agitavit, oritur.",
      paragraph2: "Saporem verum servavimus et locum circa illum renovavimus — compositionem diligentem, colores tranquilliores, et culinam quae adhuc lente coquit.",
      quote: "“Ferculum non de novo invenimus. Ei tantum mensam quam meretur damus.”"
    },
    menu: {
      eyebrow: "In Indice", heading: "Cibus qui originem suam meminit",
      subheading: "Quodque ferculum in nostra ipsa culina depictum est — nullae imagines emptae, nulla simulacra.",
      tab_mains: "Fercula Praecipua", tab_stews: "Iura et Chapati", tab_garden: "Fercula Hortensia et Legumina", tab_breakfast: "Ientaculum et Fercula Communia"
    },
    gallery: { eyebrow: "Ex Culina", heading: "Propior aspectus mensae", subheading: "Post quodque ferculum — ollae, manus, et mensa ad quam pervenit." },
    testimonials: { eyebrow: "Hospites ad Mensam", heading: "Quid post cenam dicant" },
    reservation: {
      eyebrow: "Mensam Reserva", heading: "Locum tuum ad mensam serva", subheading: "Nobis dic quando ventura sis, et mensa parata erit.",
      label_name: "Nomen Plenum", label_email: "Inscriptio Electronica", label_phone: "Numerus Telephonicus", label_date: "Dies", label_time: "Hora",
      label_guests: "Hospites", label_notes: "Petitiones Speciales", placeholder_notes: "Allergiae, celebrationes, sedis optio…",
      submit: "Nunc Reserva", success: "Gratias — petitio tua reservationis accepta est. Mox per telephonum vel litteras electronicas confirmabimus.",
      hours_heading: "Horae Apertionis", hours_weekday: "Lunae – Veneris: 11:00 – 22:00", hours_weekend: "Saturni – Solis: 09:00 – 23:00",
      address_label: "Inscriptio", phone_label: "Telephonum", email_label: "Littera Electronica"
    },
    footer: {
      about_blurb: "Mensa moderna ferculis in veris culinis radicatis — ollae agitatae, iura lente cocta, et fercula quae reservatione praevia digna sunt.",
      quicklinks_heading: "Nexus Celeres", menu_heading: "Index", contact_heading: "Contactus",
      newsletter_heading: "Certior Mane", newsletter_placeholder: "Inscriptio tua electronica", newsletter_button: "Subscribe",
      theme_label: "Species", palette_label: "Elige Saporem Tuum", light: "Lucidum", dark: "Obscurum",
      rights: "Omnia iura reservata.", credit: "Exemplar factum ab"
    }
  }
};

const RTL_LANGS = new Set(["ar"]);

/* -------------------------------------------------------------
   2. STORAGE — defensive wrapper so this degrades gracefully
   in sandboxed preview environments but persists normally once
   the template is deployed to real hosting.
------------------------------------------------------------------ */
const memoryStore = {};
const safeStorage = {
  get(key, fallback) {
    try {
      const v = window.localStorage.getItem(key);
      return v === null ? fallback : v;
    } catch (e) {
      return key in memoryStore ? memoryStore[key] : fallback;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      memoryStore[key] = value;
    }
  }
};

/* -------------------------------------------------------------
   3. THEME + PALETTE ENGINE
------------------------------------------------------------------ */
const root = document.documentElement;
const VALID_PALETTES = ["espresso", "wine", "slate"];
const VALID_THEMES = ["dark", "light"];

function applyPalette(palette, theme) {
  root.setAttribute("data-palette", palette);
  root.setAttribute("data-theme", theme);
  document.querySelectorAll("[data-palette-btn]").forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.paletteBtn === palette ? "true" : "false");
  });
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.themeBtn === theme ? "true" : "false");
  });
  safeStorage.set("sfd-palette", palette);
  safeStorage.set("sfd-theme", theme);
}

function initThemeEngine() {
  const palette = VALID_PALETTES.includes(safeStorage.get("sfd-palette", "")) ? safeStorage.get("sfd-palette", "espresso") : "espresso";
  const theme = VALID_THEMES.includes(safeStorage.get("sfd-theme", "")) ? safeStorage.get("sfd-theme", "dark") : "dark";
  applyPalette(palette, theme);

  document.querySelectorAll("[data-palette-btn]").forEach(btn => {
    btn.addEventListener("click", () => applyPalette(btn.dataset.paletteBtn, root.getAttribute("data-theme")));
  });
  document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyPalette(root.getAttribute("data-palette"), next);
    });
  });
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    btn.addEventListener("click", () => applyPalette(root.getAttribute("data-palette"), btn.dataset.themeBtn));
  });
}

/* -------------------------------------------------------------
   4. LANGUAGE ENGINE
------------------------------------------------------------------ */
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

  root.setAttribute("lang", dict);
  root.setAttribute("dir", RTL_LANGS.has(dict) ? "rtl" : "ltr");

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === dict);
  });
  const currentLabel = document.querySelector("[data-current-lang]");
  if (currentLabel) currentLabel.textContent = dict.toUpperCase();

  safeStorage.set("sfd-lang", dict);
}

function initLanguageEngine() {
  const saved = safeStorage.get("sfd-lang", "en");
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
      if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove("is-open");
      }
    });
  }
}

/* -------------------------------------------------------------
   5. MOBILE NAV
------------------------------------------------------------------ */
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

/* -------------------------------------------------------------
   6. MENU TABS
------------------------------------------------------------------ */
function initMenuTabs() {
  const tabs = document.querySelectorAll("[data-menu-tab]");
  const panels = document.querySelectorAll("[data-menu-panel]");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");
      const target = tab.dataset.menuTab;
      panels.forEach(panel => {
        panel.toggleAttribute("hidden", panel.dataset.menuPanel !== target);
      });
    });
  });
}

/* -------------------------------------------------------------
   7. GALLERY LIGHTBOX
------------------------------------------------------------------ */
function initGalleryLightbox() {
  const items = document.querySelectorAll("[data-gallery-item]");
  const lightbox = document.querySelector("[data-lightbox]");
  if (!items.length || !lightbox) return;
  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector("[data-lightbox-caption]");

  function open(src, alt) {
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    caption.textContent = alt;
    lightbox.classList.add("is-open");
    document.body.classList.add("nav-lock");
  }
  function close() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("nav-lock");
  }

  items.forEach(item => {
    item.addEventListener("click", () => {
      const fullImg = item.querySelector("img");
      open(fullImg.getAttribute("src"), fullImg.getAttribute("alt"));
    });
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest("[data-lightbox-close]")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* -------------------------------------------------------------
   8. RESERVATION FORM
------------------------------------------------------------------ */
function initReservationForm() {
  const form = document.querySelector("[data-reservation-form]");
  if (!form) return;
  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const successEl = document.querySelector("[data-reservation-success]");
    form.hidden = true;
    if (successEl) successEl.hidden = false;
  });
}

/* -------------------------------------------------------------
   9. SCROLL REVEAL
------------------------------------------------------------------ */
function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) {
    targets.forEach(t => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(t => observer.observe(t));
}

/* -------------------------------------------------------------
   10. HEADER SCROLL STATE + FOOTER YEAR
------------------------------------------------------------------ */
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

/* -------------------------------------------------------------
   INIT
------------------------------------------------------------------ */
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

const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("#menu");
const languageButtons = document.querySelectorAll(".lang-button");

const translations = {
  ru: {
    htmlLang: "ru",
    pageTitle: "FLAVIA TRAVEL VTA — Visa & Travel Agency",
    metaDescription: "FLAVIA TRAVEL VTA — визовый центр и туристическое агентство в Ташкенте.",
    skipLink: "Перейти к содержанию",
    brandHomeAria: "FLAVIA TRAVEL VTA — на главную",
    menuSrOnly: "Открыть меню",
    navAbout: "О нас",
    navServices: "Услуги",
    navProcess: "Как работаем",
    navContacts: "Контакты",
    languageAria: "Выбор языка",
    heroEyebrow: "Travel design from Tashkent",
    heroTitle: "Путешествия, которые выглядят <em>безупречно</em> ещё до вылета.",
    heroLead: "FLAVIA TRAVEL VTA сопровождает поездку от идеи и визовых формальностей до маршрута, отеля, перелёта и трансфера. Спокойно, точно и с вниманием к деталям.",
    heroPrimaryCta: "Написать в Telegram",
    heroSecondaryCta: "Посмотреть услуги",
    heroMetricsAria: "Преимущества компании",
    metricOneTitle: "Полный сервис",
    metricOneBody: "От визы до отеля",
    metricTwoTitle: "Персональное сопровождение",
    metricTwoBody: "Персональный менеджер",
    metricThreeTitle: "Всемирные маршруты",
    metricThreeBody: "Маршруты по всему миру",
    heroCardLabel: "Signature routes",
    heroCardTitle: "Визы, туры и перелёты в одном окне",
    heroCardItemOne: "Индивидуальные и групповые туры",
    heroCardItemTwo: "Сложные визовые кейсы и отказы",
    heroCardItemThree: "Билеты, отели и наземная логистика",
    heroSince: "since",
    signalAria: "Основные направления сервиса",
    signalOne: "Визовая поддержка",
    signalTwo: "Премиальные маршруты",
    signalThree: "Авиабилеты",
    signalFour: "Отели и апартаменты",
    signalFive: "Трансферы",
    aboutEyebrow: "О компании",
    aboutTitle: "Собираем поездку как цельный сервис, а не набор бронирований.",
    aboutTextOne: "ООО «FLAVIA TRAVEL VTA» работает как визовый центр и туристическое агентство, помогая клиентам путешествовать без лишней нагрузки. Мы ведём внутренний, въездной и международный туризм по Республике Узбекистан и за её пределами.",
    aboutTextTwo: "Для нас важна не только покупка тура, но и то, как человек проходит весь путь: получает консультацию, подаёт документы, выбирает маршрут и чувствует себя в поездке уверенно.",
    featureOneTitle: "Персональный сценарий поездки",
    featureOneBody: "Подбираем маршрут, темп и формат путешествия под ваши цели: отдых, бизнес, визит к близким или комбинированная программа.",
    featureTwoTitle: "Чёткая визовая экспертиза",
    featureTwoBody: "Сопровождаем туристические, гостевые и бизнес-визы, в том числе при чистом паспорте или после отказов.",
    featureThreeTitle: "Спокойная организация",
    featureThreeBody: "Берём на себя бронирование билетов, отелей, трансферов и координацию по маршруту.",
    servicesEyebrow: "Наши услуги",
    servicesTitle: "Всё, что нужно для поездки, собрано в одном процессе.",
    servicesNote: "Мы объединяем оформление, логистику и сопровождение в один понятный сервис, чтобы клиенту не приходилось координировать поездку по частям.",
    serviceOneTitle: "Туры по всему миру",
    serviceOneBody: "Индивидуальные и групповые маршруты любой сложности: отдых, экскурсии, city-break, семейные и комбинированные путешествия.",
    serviceTwoTitle: "Визовая поддержка",
    serviceTwoBody: "Консультации по документам, формирование пакета и сопровождение кейсов, где важны точность и опыт.",
    serviceThreeTitle: "Авиабилеты",
    serviceThreeBody: "Подбор рейсов, удобных стыковок и лучших вариантов под бюджет, срок и предпочтения клиента.",
    serviceFourTitle: "Отели и размещение",
    serviceFourBody: "Бронирование гостиниц, апартаментов и курортных объектов с учётом уровня комфорта и локации.",
    serviceFiveTitle: "Трансферы",
    serviceFiveBody: "Встреча, сопровождение и локальная логистика там, где поездка должна быть особенно гладкой.",
    processEyebrow: "Как мы работаем",
    processTitle: "Структурируем поездку так, чтобы клиенту не пришлось держать всё в голове.",
    processOneTitle: "Запрос и консультация",
    processOneBody: "Понимаем направление, сроки, цель поездки и ограничения по документам или бюджету.",
    processTwoTitle: "Сбор оптимального решения",
    processTwoBody: "Формируем маршрут, пакет услуг и порядок действий без лишних движений со стороны клиента.",
    processThreeTitle: "Оформление и сопровождение",
    processThreeBody: "Подсказываем по визам, билетам, заселению и транспортной части до финального выезда.",
    trustEyebrow: "Руководство и доверие",
    trustTitle: "Прозрачная коммуникация, официальный подход и персональная ответственность.",
    directorLabel: "Директор",
    trustQuote: "«Развиваем легальный, прозрачный и качественный туристический бизнес в Узбекистане с вниманием к каждому маршруту и каждому клиенту.»",
    licenseLabel: "Официальный статус",
    licenseBody: "Блок лицензии сохранён и оформлен так, чтобы сюда можно было без переделки добавить официальный документ, как только он будет готов.",
    licenseStateTitle: "Государственная лицензия",
    licenseStateBody: "Документ будет размещён после получения",
    contactsEyebrow: "Контакты",
    contactsTitle: "Обсудим маршрут, визу или поездку, которую давно хотите собрать правильно.",
    contactsLead: "Свяжитесь с нами удобным способом, и мы подготовим понятный следующий шаг вместо перегруженного списка вопросов.",
    phonesLabel: "Телефоны",
    mailLabel: "E-mail",
    scheduleLabel: "Часы работы",
    scheduleBody: "Пн–Пт: 09:00–18:00<br>Сб–Вс: выходные",
    addressLabel: "Адрес",
    addressBody: "ул. Садыка Азимова, 46<br>Яшнабадский район, Ташкент",
    mapTitle: "Карта: офис FLAVIA TRAVEL VTA в Ташкенте",
    footerRights: "© <span id=\"year\"></span> ООО «FLAVIA TRAVEL VTA». Все права защищены."
  },
  en: {
    htmlLang: "en",
    pageTitle: "FLAVIA TRAVEL VTA — Visa & Travel Agency",
    metaDescription: "FLAVIA TRAVEL VTA is a visa center and travel agency in Tashkent.",
    skipLink: "Skip to content",
    brandHomeAria: "FLAVIA TRAVEL VTA — home",
    menuSrOnly: "Open menu",
    navAbout: "About",
    navServices: "Services",
    navProcess: "How we work",
    navContacts: "Contacts",
    languageAria: "Language switcher",
    heroEyebrow: "Travel design from Tashkent",
    heroTitle: "Journeys that look <em>impeccable</em> even before takeoff.",
    heroLead: "FLAVIA TRAVEL VTA supports your trip from idea and visa formalities to route planning, hotel booking, flights, and transfers. Calm, precise, and detail-oriented.",
    heroPrimaryCta: "Message us on Telegram",
    heroSecondaryCta: "View services",
    heroMetricsAria: "Company advantages",
    metricOneTitle: "Full service",
    metricOneBody: "From visa to hotel",
    metricTwoTitle: "Personal assistance",
    metricTwoBody: "Dedicated manager",
    metricThreeTitle: "Global routes",
    metricThreeBody: "Trips all over the world",
    heroCardLabel: "Signature routes",
    heroCardTitle: "Visas, tours, and flights in one place",
    heroCardItemOne: "Individual and group tours",
    heroCardItemTwo: "Complex visa cases and refusals",
    heroCardItemThree: "Tickets, hotels, and ground logistics",
    heroSince: "since",
    signalAria: "Core service areas",
    signalOne: "Visa support",
    signalTwo: "Premium routes",
    signalThree: "Air tickets",
    signalFour: "Hotels and apartments",
    signalFive: "Transfers",
    aboutEyebrow: "About us",
    aboutTitle: "We build each trip as one seamless service, not a set of separate bookings.",
    aboutTextOne: "FLAVIA TRAVEL VTA LLC works as a visa center and travel agency, helping clients travel with less stress. We organize domestic, inbound, and international tourism in Uzbekistan and beyond.",
    aboutTextTwo: "For us, a trip is not just a tour purchase. It is the full journey: consultation, document preparation, route planning, and confidence at every stage.",
    featureOneTitle: "Personal travel scenario",
    featureOneBody: "We tailor route, pace, and format to your goals: leisure, business, family visits, or mixed programs.",
    featureTwoTitle: "Strong visa expertise",
    featureTwoBody: "We support tourist, guest, and business visas, including first passports and prior refusals.",
    featureThreeTitle: "Smooth organization",
    featureThreeBody: "We handle ticketing, hotels, transfers, and route coordination for you.",
    servicesEyebrow: "Our services",
    servicesTitle: "Everything your trip needs, assembled into one clear process.",
    servicesNote: "We combine paperwork, logistics, and support into a single service so clients do not have to coordinate the trip in parts.",
    serviceOneTitle: "Worldwide tours",
    serviceOneBody: "Individual and group journeys of any complexity: vacations, excursions, city breaks, family and mixed itineraries.",
    serviceTwoTitle: "Visa support",
    serviceTwoBody: "Document consultations, package preparation, and support for cases where precision and experience matter.",
    serviceThreeTitle: "Air tickets",
    serviceThreeBody: "Flight selection, convenient connections, and the best options for your budget, dates, and preferences.",
    serviceFourTitle: "Hotels and stays",
    serviceFourBody: "Booking hotels, apartments, and resort properties with the right comfort level and location.",
    serviceFiveTitle: "Transfers",
    serviceFiveBody: "Meet-and-greet, assistance, and local logistics where a smooth trip matters most.",
    processEyebrow: "How we work",
    processTitle: "We structure your trip so you do not have to keep every detail in your head.",
    processOneTitle: "Request and consultation",
    processOneBody: "We clarify destination, dates, purpose, and constraints around documents or budget.",
    processTwoTitle: "Building the best solution",
    processTwoBody: "We create the route, service package, and action plan without unnecessary effort from you.",
    processThreeTitle: "Processing and support",
    processThreeBody: "We guide visas, tickets, check-in, and transport details until final departure.",
    trustEyebrow: "Leadership and trust",
    trustTitle: "Transparent communication, official standards, and personal responsibility.",
    directorLabel: "Director",
    trustQuote: "“We develop a legal, transparent, and high-quality travel business in Uzbekistan with attention to every route and every client.”",
    licenseLabel: "Official status",
    licenseBody: "The license block is kept ready so the official document can be added without redesign as soon as it is available.",
    licenseStateTitle: "State license",
    licenseStateBody: "The document will be published after issuance",
    contactsEyebrow: "Contacts",
    contactsTitle: "Let us discuss your route, visa, or the trip you have wanted to organize the right way.",
    contactsLead: "Contact us in a convenient channel, and we will provide a clear next step instead of an overloaded list of questions.",
    phonesLabel: "Phones",
    mailLabel: "E-mail",
    scheduleLabel: "Working hours",
    scheduleBody: "Mon–Fri: 09:00–18:00<br>Sat–Sun: closed",
    addressLabel: "Address",
    addressBody: "46 Sadyka Azimova Street<br>Yashnabad district, Tashkent",
    mapTitle: "Map: FLAVIA TRAVEL VTA office in Tashkent",
    footerRights: "© <span id=\"year\"></span> FLAVIA TRAVEL VTA LLC. All rights reserved."
  },
  uz: {
    htmlLang: "uz",
    pageTitle: "FLAVIA TRAVEL VTA — Visa & Travel Agency",
    metaDescription: "FLAVIA TRAVEL VTA — Toshkentdagi viza markazi va sayyohlik agentligi.",
    skipLink: "Asosiy mazmunga o‘tish",
    brandHomeAria: "FLAVIA TRAVEL VTA — bosh sahifa",
    menuSrOnly: "Menyuni ochish",
    navAbout: "Biz haqimizda",
    navServices: "Xizmatlar",
    navProcess: "Qanday ishlaymiz",
    navContacts: "Kontaktlar",
    languageAria: "Til tanlash",
    heroEyebrow: "Travel design from Tashkent",
    heroTitle: "Parvozdan oldin ham <em>benuqson</em> ko‘rinadigan sayohatlar.",
    heroLead: "FLAVIA TRAVEL VTA sayohatni g‘oyadan boshlab viza jarayonlari, marshrut, mehmonxona, aviachipta va transfergacha to‘liq kuzatib boradi. Xotirjam, aniq va puxta yondashuv.",
    heroPrimaryCta: "Telegram orqali yozish",
    heroSecondaryCta: "Xizmatlarni ko‘rish",
    heroMetricsAria: "Kompaniya afzalliklari",
    metricOneTitle: "To‘liq servis",
    metricOneBody: "Vizadan mehmonxonagacha",
    metricTwoTitle: "Shaxsiy hamrohlik",
    metricTwoBody: "Sizga biriktirilgan menejer",
    metricThreeTitle: "Jahon yo‘nalishlari",
    metricThreeBody: "Butun dunyo bo‘ylab marshrutlar",
    heroCardLabel: "Signature routes",
    heroCardTitle: "Vizalar, turlar va aviachipta bir joyda",
    heroCardItemOne: "Individual va guruh turlari",
    heroCardItemTwo: "Murakkab viza holatlari va rad javoblari",
    heroCardItemThree: "Chipta, mehmonxona va yer usti logistika",
    heroSince: "since",
    signalAria: "Asosiy xizmat yo‘nalishlari",
    signalOne: "Viza yordami",
    signalTwo: "Premium marshrutlar",
    signalThree: "Aviachiptalar",
    signalFour: "Mehmonxona va apartamentlar",
    signalFive: "Transferlar",
    aboutEyebrow: "Kompaniya haqida",
    aboutTitle: "Har bir safarni alohida bronlar emas, yagona servis sifatida tuzamiz.",
    aboutTextOne: "FLAVIA TRAVEL VTA MChJ viza markazi va sayyohlik agentligi sifatida mijozlarga ortiqcha tashvishsiz sayohat qilishda yordam beradi. O‘zbekistonda ichki, kirish va xalqaro turizmni tashkil qilamiz.",
    aboutTextTwo: "Biz uchun safar faqat tur sotib olish emas. Bu to‘liq jarayon: maslahat, hujjatlar, marshrut va har bosqichda ishonch.",
    featureOneTitle: "Shaxsiy safar ssenariysi",
    featureOneBody: "Dam olish, biznes, yaqinlarni ko‘rish yoki aralash dastur uchun maqsadingizga mos marshrut va temp tanlaymiz.",
    featureTwoTitle: "Kuchli viza ekspertizasi",
    featureTwoBody: "Turistik, mehmon va biznes vizalarini, jumladan toza pasport yoki oldingi rad holatlarida ham kuzatamiz.",
    featureThreeTitle: "Qulay tashkilot",
    featureThreeBody: "Chipta, mehmonxona, transfer va marshrut koordinatsiyasini o‘z zimmamizga olamiz.",
    servicesEyebrow: "Xizmatlarimiz",
    servicesTitle: "Safar uchun kerak bo‘lgan hamma narsa bitta jarayonga jamlangan.",
    servicesNote: "Rasmiylashtirish, logistika va qo‘llab-quvvatlashni yagona servisga birlashtiramiz, shunda mijoz safarni bo‘laklarga ajratib boshqarmaydi.",
    serviceOneTitle: "Dunyo bo‘ylab turlar",
    serviceOneBody: "Har qanday murakkablikdagi individual va guruh safarlari: dam olish, ekskursiya, city-break, oilaviy va aralash marshrutlar.",
    serviceTwoTitle: "Viza yordami",
    serviceTwoBody: "Hujjatlar bo‘yicha maslahat, paket tayyorlash va aniqlik talab qilinadigan holatlarda hamrohlik.",
    serviceThreeTitle: "Aviachiptalar",
    serviceThreeBody: "Byudjet, muddat va xohishga mos reyslar, qulay ulanishlar hamda eng yaxshi variantlar tanlovi.",
    serviceFourTitle: "Mehmonxona va joylashuv",
    serviceFourBody: "Qulaylik darajasi va lokatsiyaga mos mehmonxona, apartament va kurort obyektlarini bron qilish.",
    serviceFiveTitle: "Transferlar",
    serviceFiveBody: "Kutib olish, hamrohlik va safarning eng muhim nuqtalarida mahalliy logistika.",
    processEyebrow: "Qanday ishlaymiz",
    processTitle: "Safarni shunday tuzamizki, barcha tafsilotlarni yodda saqlashga hojat qolmaydi.",
    processOneTitle: "So‘rov va maslahat",
    processOneBody: "Yo‘nalish, muddat, safar maqsadi va hujjat hamda byudjet bo‘yicha cheklovlarni aniqlaymiz.",
    processTwoTitle: "Eng yaxshi yechimni yig‘ish",
    processTwoBody: "Mijoz uchun ortiqcha harakatsiz marshrut, xizmat paketi va aniq harakat rejasini tuzamiz.",
    processThreeTitle: "Rasmiylashtirish va hamrohlik",
    processThreeBody: "Viza, chipta, joylashish va transport masalalarida yakuniy jo‘nashgacha yo‘l-yo‘riq beramiz.",
    trustEyebrow: "Rahbariyat va ishonch",
    trustTitle: "Ochiq muloqot, rasmiy yondashuv va shaxsiy mas’uliyat.",
    directorLabel: "Direktor",
    trustQuote: "«O‘zbekistonda qonuniy, shaffof va sifatli turizm biznesini har bir marshrut va har bir mijozga e’tibor bilan rivojlantiramiz.»",
    licenseLabel: "Rasmiy maqom",
    licenseBody: "Litsenziya bloki hujjat tayyor bo‘lgach qayta dizaynsiz joylashtirish uchun oldindan tayyorlangan.",
    licenseStateTitle: "Davlat litsenziyasi",
    licenseStateBody: "Hujjat olingandan keyin joylashtiriladi",
    contactsEyebrow: "Kontaktlar",
    contactsTitle: "To‘g‘ri yig‘moqchi bo‘lgan marshrut, viza yoki safaringizni birga muhokama qilamiz.",
    contactsLead: "Qulay kanal orqali bog‘laning, biz sizga keraksiz savollar ro‘yxati o‘rniga aniq keyingi qadamni beramiz.",
    phonesLabel: "Telefonlar",
    mailLabel: "E-mail",
    scheduleLabel: "Ish vaqti",
    scheduleBody: "Dush–Jum: 09:00–18:00<br>Shan–Yak: dam olish",
    addressLabel: "Manzil",
    addressBody: "Sodiq Azimov ko‘chasi, 46<br>Yashnobod tumani, Toshkent",
    mapTitle: "Xarita: FLAVIA TRAVEL VTA ofisi, Toshkent",
    footerRights: "© <span id=\"year\"></span> FLAVIA TRAVEL VTA MChJ. Barcha huquqlar himoyalangan."
  }
};

const textTargets = {
  skipLink: ".skip-link",
  menuSrOnly: ".menu-button .sr-only",
  navAbout: ".site-nav a[href='#about']",
  navServices: ".site-nav a[href='#services']",
  navProcess: ".site-nav a[href='#process']",
  navContacts: ".site-nav a[href='#contacts']",
  heroEyebrow: ".hero-copy .eyebrow",
  heroLead: ".lead",
  heroPrimaryCta: ".hero-actions .button-primary",
  heroSecondaryCta: ".hero-actions .button-secondary",
  heroCardLabel: ".hero-card-main > p",
  aboutEyebrow: ".about-section .section-heading .eyebrow",
  aboutTitle: ".about-section .section-heading h2",
  aboutTextOne: ".about-story p:nth-of-type(1)",
  aboutTextTwo: ".about-story p:nth-of-type(2)",
  servicesEyebrow: ".services-section .section-heading .eyebrow",
  servicesTitle: ".services-section .section-heading h2",
  servicesNote: ".services-section .section-note",
  processEyebrow: ".process-section .section-heading .eyebrow",
  processTitle: ".process-section .section-heading h2",
  trustEyebrow: ".trust-copy .eyebrow",
  trustTitle: ".trust-copy h2",
  directorLabel: ".director-card small",
  trustQuote: ".trust-copy blockquote",
  licenseLabel: ".license-card .license-label",
  licenseBody: ".license-card > p",
  licenseStateTitle: ".license-state strong",
  licenseStateBody: ".license-state span",
  contactsEyebrow: ".contact-copy .eyebrow",
  contactsTitle: ".contact-copy h2",
  contactsLead: ".contact-copy > p:not(.eyebrow)",
  phonesLabel: ".contact-details > div:nth-child(1) small",
  mailLabel: ".contact-details > div:nth-child(2) small",
  scheduleLabel: ".contact-details > div:nth-child(3) small",
  addressLabel: ".contact-details > div:nth-child(4) small"
};

const htmlTargets = {
  heroTitle: ".hero-copy h1",
  scheduleBody: ".contact-details > div:nth-child(3) p",
  addressBody: ".contact-details > div:nth-child(4) p",
  footerRights: ".site-footer p"
};

const setText = (selector, value) => {
  if (!value) {
    return;
  }

  const node = document.querySelector(selector);

  if (node) {
    node.textContent = value;
  }
};

const setHTML = (selector, value) => {
  if (!value) {
    return;
  }

  const node = document.querySelector(selector);

  if (node) {
    node.innerHTML = value;
  }
};

const applyLanguage = (requestedLanguage) => {
  const language = translations[requestedLanguage] ? requestedLanguage : "ru";
  const dictionary = translations[language];

  document.documentElement.lang = dictionary.htmlLang;
  document.title = dictionary.pageTitle;

  const descriptionTag = document.querySelector("meta[name='description']");

  if (descriptionTag) {
    descriptionTag.setAttribute("content", dictionary.metaDescription);
  }

  const languageSwitcher = document.querySelector(".lang-switch");
  const brandHome = document.querySelector(".brand[aria-label]");
  const mapFrame = document.querySelector(".map-card iframe");
  const signalRegion = document.querySelector(".signal-bar");
  const metricsRegion = document.querySelector(".hero-metrics");

  if (languageSwitcher) {
    languageSwitcher.setAttribute("aria-label", dictionary.languageAria);
  }

  if (brandHome) {
    brandHome.setAttribute("aria-label", dictionary.brandHomeAria);
  }

  if (mapFrame) {
    mapFrame.setAttribute("title", dictionary.mapTitle);
  }

  if (signalRegion) {
    signalRegion.setAttribute("aria-label", dictionary.signalAria);
  }

  if (metricsRegion) {
    metricsRegion.setAttribute("aria-label", dictionary.heroMetricsAria);
  }

  Object.entries(textTargets).forEach(([key, selector]) => {
    setText(selector, dictionary[key]);
  });

  Object.entries(htmlTargets).forEach(([key, selector]) => {
    setHTML(selector, dictionary[key]);
  });

  const metricCards = document.querySelectorAll(".hero-metrics article");

  if (metricCards[0]) {
    metricCards[0].querySelector("strong").textContent = dictionary.metricOneTitle;
    metricCards[0].querySelector("span").textContent = dictionary.metricOneBody;
  }

  if (metricCards[1]) {
    metricCards[1].querySelector("strong").textContent = dictionary.metricTwoTitle;
    metricCards[1].querySelector("span").textContent = dictionary.metricTwoBody;
  }

  if (metricCards[2]) {
    metricCards[2].querySelector("strong").textContent = dictionary.metricThreeTitle;
    metricCards[2].querySelector("span").textContent = dictionary.metricThreeBody;
  }

  const heroList = document.querySelectorAll(".hero-card-main li");

  if (heroList[0]) {
    heroList[0].textContent = dictionary.heroCardItemOne;
  }

  if (heroList[1]) {
    heroList[1].textContent = dictionary.heroCardItemTwo;
  }

  if (heroList[2]) {
    heroList[2].textContent = dictionary.heroCardItemThree;
  }

  setText(".hero-card-main h2", dictionary.heroCardTitle);
  setText(".hero-stamp span", dictionary.heroSince);

  const signalItems = document.querySelectorAll(".signal-track span");

  if (signalItems[0]) signalItems[0].textContent = dictionary.signalOne;
  if (signalItems[1]) signalItems[1].textContent = dictionary.signalTwo;
  if (signalItems[2]) signalItems[2].textContent = dictionary.signalThree;
  if (signalItems[3]) signalItems[3].textContent = dictionary.signalFour;
  if (signalItems[4]) signalItems[4].textContent = dictionary.signalFive;

  const featureCards = document.querySelectorAll(".about-grid .feature-card");

  if (featureCards[0]) {
    featureCards[0].querySelector("h3").textContent = dictionary.featureOneTitle;
    featureCards[0].querySelector("p").textContent = dictionary.featureOneBody;
  }

  if (featureCards[1]) {
    featureCards[1].querySelector("h3").textContent = dictionary.featureTwoTitle;
    featureCards[1].querySelector("p").textContent = dictionary.featureTwoBody;
  }

  if (featureCards[2]) {
    featureCards[2].querySelector("h3").textContent = dictionary.featureThreeTitle;
    featureCards[2].querySelector("p").textContent = dictionary.featureThreeBody;
  }

  const serviceCards = document.querySelectorAll(".services-grid .service-card");

  if (serviceCards[0]) {
    serviceCards[0].querySelector("h3").textContent = dictionary.serviceOneTitle;
    serviceCards[0].querySelector("p").textContent = dictionary.serviceOneBody;
  }

  if (serviceCards[1]) {
    serviceCards[1].querySelector("h3").textContent = dictionary.serviceTwoTitle;
    serviceCards[1].querySelector("p").textContent = dictionary.serviceTwoBody;
  }

  if (serviceCards[2]) {
    serviceCards[2].querySelector("h3").textContent = dictionary.serviceThreeTitle;
    serviceCards[2].querySelector("p").textContent = dictionary.serviceThreeBody;
  }

  if (serviceCards[3]) {
    serviceCards[3].querySelector("h3").textContent = dictionary.serviceFourTitle;
    serviceCards[3].querySelector("p").textContent = dictionary.serviceFourBody;
  }

  if (serviceCards[4]) {
    serviceCards[4].querySelector("h3").textContent = dictionary.serviceFiveTitle;
    serviceCards[4].querySelector("p").textContent = dictionary.serviceFiveBody;
  }

  const processCards = document.querySelectorAll(".process-list article");

  if (processCards[0]) {
    processCards[0].querySelector("h3").textContent = dictionary.processOneTitle;
    processCards[0].querySelector("p").textContent = dictionary.processOneBody;
  }

  if (processCards[1]) {
    processCards[1].querySelector("h3").textContent = dictionary.processTwoTitle;
    processCards[1].querySelector("p").textContent = dictionary.processTwoBody;
  }

  if (processCards[2]) {
    processCards[2].querySelector("h3").textContent = dictionary.processThreeTitle;
    processCards[2].querySelector("p").textContent = dictionary.processThreeBody;
  }

  localStorage.setItem("flavia-language", language);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const yearNode = document.querySelector("#year");

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
};

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const expanded = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(expanded));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const toggleHeaderState = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("scrolled", window.scrollY > 18);
};

toggleHeaderState();
window.addEventListener("scroll", toggleHeaderState, { passive: true });

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("flavia-language");
applyLanguage(savedLanguage || "ru");
/* ============================================
   KALYON RESTORAN — JavaScript
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  az: {
    nav_about: "Haqqımızda",
    nav_menu: "Menyu",
    nav_gallery: "Qalereya",
    nav_atm: "Atmosfer",
    nav_res: "Rezervasiya",
    nav_contact: "Əlaqə",
    hero_sub: "Novxanı · Dəniz Kənarı",
    hero_tagline: "Dənizin nəfəsi, süfrənin ləzzəti",
    hero_btn1: "Rezervasiya Et",
    hero_btn2: "Menyuya Bax",
    about_label: "Haqqımızda",
    about_title: "Dənizin Nəfəsi,<br>Süfrənin Ləzzəti",
    about_p1:
      "Novxanı sahilinin ən ecazkar nöqtəsində, dalğaların səsi ilə qonaqlarını qarşılayan Kalyon Restoran, hər ziyarəti ömürlük bir xatirəyə çevirir.",
    about_p2:
      "Azərbaycan mətbəxinin zəngin ənənələrini müasir qulluq anlayışı ilə birləşdirən Kalyon, ailə süfrəsinin isti mehribanlığını dəniz kənarının sakitliyi ilə qovuşdurur.",
    stat1: "İl Təcrübə",
    stat2: "Yemək Növü",
    stat3: "Xatirə",
    menu_label: "Menyu",
    menu_title: "Dadlı Seçimlər",
    menu_desc:
      "Ənənəvi Azərbaycan mətbəxindən tutmuş dəniz məhsullarına qədər geniş çeşid",
    mc1_title: "Milli Yeməklər",
    mc1_desc: "Dolma, xinkali, piti və daha çox ənənəvi dadlar",
    mc2_title: "Balıq & Dəniz",
    mc2_desc: "Təzə tutulmuş balıq və dəniz məhsulları",
    mc3_title: "Pizza & Avropa",
    mc3_desc: "Əl ilə hazırlanmış pizzalar və Avropa mətbəxi",
    mc4_title: "İsti Yeməklər",
    mc4_desc: "Sacda, torpaq qazanda pişirilmiş dadlar",
    menu_btn: "Tam Menyuya Bax",
    gal_label: "Qalereya",
    gal_title: "Dadların Görüntüsü",
    atm_label: "Atmosfer",
    atm_title: "Hər An Xüsusidir",
    atm_desc: "VIP otaqlardan açıq terrasadək — hər zövqə uyğun məkan",
    atm_lbl1: "Dəniz Görünüşlü Salon",
    atm_lbl2: "VIP Otaq",
    atm_lbl3: "Şadlıq Zalı",
    res_label: "Rezervasiya",
    res_title: "Masanızı Ayırtın",
    res_desc:
      "Xüsusi günlər, ailə məclisləri, iş görüşmələri — hər ziyarət üçün hazırıq",
    form_name: "Ad Soyad",
    form_phone: "Telefon",
    form_date: "Tarix",
    form_time: "Saat",
    form_guests: "Şəxs Sayı",
    form_room: "Otaq Növü",
    form_note: "Qeyd (istəyə görə)",
    form_submit: "Rezervasiya Et",
    form_success:
      "Rezervasiyanız qəbul edildi! Tezliklə sizinlə əlaqə saxlayacağıq.",
    room_gen: "Ümumi Salon",
    room_vip: "VIP Otaq",
    room_sea: "Dəniz Görünüşlü",
    faq_label: "FAQ",
    faq_title: "Tez-tez Soruşulanlar",
    faq1q: "Rezervasiya mütləqdirmi?",
    faq1a:
      "Xüsusilə həftəsonu günlərindən əvvəl rezervasiya tövsiyə edilir. Telefon və ya saytımız vasitəsilə asanlıqla rezervasiya edə bilərsiniz.",
    faq2q: "VIP otaqlar üçün minimum sifariş var?",
    faq2a:
      "Bəli, VIP otaqlarımız üçün minimum qonaq sayı tələbi mövcuddur. Ətraflı məlumat üçün bizimlə əlaqə saxlayın.",
    faq3q: "Uşaqlar üçün xüsusi yer var?",
    faq3a:
      "Bəli, ailə restoranımızda uşaqlar üçün xüsusi oturma yerləri və uşaq menyusu mövcuddur.",
    faq4q: "İş saatları nədir?",
    faq4a:
      "Restoranımız hər gün saat 10:00-dan 23:30-a kimi qonaqlarını qəbul edir.",
    faq5q: "Pulsuz dayanacaq var?",
    faq5a:
      "Bəli, restoranımızın yanında geniş pulsuz avtomobil dayanacağı mövcuddur.",
    faq6q: "Ad günü və toy mərasimi üçün xüsusi paket var?",
    faq6a:
      "Bəli, xüsusi mərasimlər üçün fərdi paketlər təklif edirik. Dekor, tort, musiqi — hər şeyi bizimlə razılaşdıra bilərsiniz.",
    contact_label: "Əlaqə",
    contact_title: "Bizimlə Əlaqə",
    cc1_title: "Ünvan",
    cc1_val: "Novxanı qəsəbəsi,<br>Dəniz kənarı",
    cc2_title: "Telefon",
    cc3_title: "İş Saatları",
    cc3_val: "Hər gün<br>10:00 – 23:30",
    open_txt: "Açıqdır",
    closed_txt: "Bağlıdır",
    footer_rights: "Bütün hüquqlar qorunur.",
    footer_addr: "Novxanı qəsəbəsi, dəniz kənarı, Sumqayıt",
  },
  ru: {
    nav_about: "О нас",
    nav_menu: "Меню",
    nav_gallery: "Галерея",
    nav_atm: "Атмосфера",
    nav_res: "Резервация",
    nav_contact: "Контакты",
    hero_sub: "Новханы · На берегу моря",
    hero_tagline: "Дыхание моря, вкус стола",
    hero_btn1: "Забронировать стол",
    hero_btn2: "Смотреть меню",
    about_label: "О нас",
    about_title: "Дыхание моря,<br>Вкус стола",
    about_p1:
      "Расположенный в самом красивом месте побережья Новханы, ресторан Калyon встречает гостей шумом волн, превращая каждый визит в незабываемое воспоминание.",
    about_p2:
      "Объединяя богатые традиции азербайджанской кухни с современным сервисом, Kalyon сочетает тепло семейного застолья со спокойствием морского берега.",
    stat1: "Лет опыта",
    stat2: "Блюд в меню",
    stat3: "Воспоминаний",
    menu_label: "Меню",
    menu_title: "Вкусный выбор",
    menu_desc:
      "От традиционной азербайджанской кухни до морепродуктов — широкий выбор",
    mc1_title: "Национальные блюда",
    mc1_desc: "Долма, хинкали, пити и другие традиционные вкусы",
    mc2_title: "Рыба и морепродукты",
    mc2_desc: "Свежепойманная рыба и морские деликатесы",
    mc3_title: "Пицца и европейская кухня",
    mc3_desc: "Ручные пиццы и блюда европейской кухни",
    mc4_title: "Горячие блюда",
    mc4_desc: "Блюда на садже, в глиняном казане",
    menu_btn: "Смотреть полное меню",
    gal_label: "Галерея",
    gal_title: "Изображения вкусов",
    atm_label: "Атмосфера",
    atm_title: "Каждый момент особенный",
    atm_desc: "От VIP-комнат до открытой террасы — место для каждого вкуса",
    atm_lbl1: "Зал с видом на море",
    atm_lbl2: "VIP-зал",
    atm_lbl3: "Банкетный зал",
    res_label: "Резервация",
    res_title: "Забронируйте стол",
    res_desc:
      "Особые дни, семейные вечера, деловые встречи — мы готовы к каждому визиту",
    form_name: "Имя Фамилия",
    form_phone: "Телефон",
    form_date: "Дата",
    form_time: "Время",
    form_guests: "Количество гостей",
    form_room: "Тип зала",
    form_note: "Примечание (необязательно)",
    form_submit: "Забронировать",
    form_success: "Ваша заявка принята! Мы свяжемся с вами в ближайшее время.",
    room_gen: "Общий зал",
    room_vip: "VIP-зал",
    room_sea: "С видом на море",
    faq_label: "FAQ",
    faq_title: "Часто задаваемые вопросы",
    faq1q: "Обязательна ли резервация?",
    faq1a:
      "Особенно перед выходными днями рекомендуется бронирование. Вы можете легко забронировать по телефону или через наш сайт.",
    faq2q: "Есть ли минимальный заказ для VIP-залов?",
    faq2a:
      "Да, для наших VIP-залов действует требование по минимальному количеству гостей. Для подробной информации свяжитесь с нами.",
    faq3q: "Есть ли специальные места для детей?",
    faq3a:
      "Да, в нашем семейном ресторане есть специальные детские сиденья и детское меню.",
    faq4q: "Каковы часы работы?",
    faq4a: "Наш ресторан принимает гостей ежедневно с 10:00 до 23:30.",
    faq5q: "Есть ли бесплатная парковка?",
    faq5a: "Да, рядом с рестораном есть большая бесплатная парковка.",
    faq6q: "Есть ли специальные пакеты для дней рождения и свадеб?",
    faq6a:
      "Да, мы предлагаем индивидуальные пакеты для особых мероприятий. Декор, торт, музыка — всё можно согласовать с нами.",
    contact_label: "Контакты",
    contact_title: "Связаться с нами",
    cc1_title: "Адрес",
    cc1_val: "Посёлок Новханы,<br>на берегу моря",
    cc2_title: "Телефон",
    cc3_title: "Часы работы",
    cc3_val: "Ежедневно<br>10:00 – 23:30",
    open_txt: "Открыто",
    closed_txt: "Закрыто",
    footer_rights: "Все права защищены.",
    footer_addr: "Посёлок Новханы, берег моря, Сумгаит",
  },
  en: {
    nav_about: "About",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_atm: "Atmosphere",
    nav_res: "Reservation",
    nav_contact: "Contact",
    hero_sub: "Novkhani · Seaside",
    hero_tagline: "The breath of the sea, the taste of the table",
    hero_btn1: "Make a Reservation",
    hero_btn2: "View Menu",
    about_label: "About Us",
    about_title: "The Breath of the Sea,<br>The Taste of the Table",
    about_p1:
      "Located at the most enchanting point of the Novkhani coastline, Kalyon Restaurant welcomes guests to the sound of waves, turning every visit into a lifelong memory.",
    about_p2:
      "Combining the rich traditions of Azerbaijani cuisine with a modern service approach, Kalyon blends the warmth of family dining with the serenity of the seaside.",
    stat1: "Years Experience",
    stat2: "Dishes",
    stat3: "Memories",
    menu_label: "Menu",
    menu_title: "Delicious Choices",
    menu_desc:
      "From traditional Azerbaijani cuisine to seafood — a wide selection",
    mc1_title: "National Dishes",
    mc1_desc: "Dolma, khinkali, piti and more traditional flavors",
    mc2_title: "Fish & Seafood",
    mc2_desc: "Freshly caught fish and seafood delicacies",
    mc3_title: "Pizza & European",
    mc3_desc: "Handmade pizzas and European cuisine",
    mc4_title: "Hot Dishes",
    mc4_desc: "Dishes cooked on saj and in clay pots",
    menu_btn: "View Full Menu",
    gal_label: "Gallery",
    gal_title: "A Feast for the Eyes",
    atm_label: "Atmosphere",
    atm_title: "Every Moment is Special",
    atm_desc: "From VIP rooms to open terraces — a place for every taste",
    atm_lbl1: "Sea-View Hall",
    atm_lbl2: "VIP Room",
    atm_lbl3: "Banquet Hall",
    res_label: "Reservation",
    res_title: "Reserve Your Table",
    res_desc:
      "Special occasions, family dinners, business meetings — we are ready for every visit",
    form_name: "Full Name",
    form_phone: "Phone",
    form_date: "Date",
    form_time: "Time",
    form_guests: "Number of Guests",
    form_room: "Room Type",
    form_note: "Note (optional)",
    form_submit: "Make Reservation",
    form_success:
      "Your reservation has been received! We will contact you shortly.",
    room_gen: "General Hall",
    room_vip: "VIP Room",
    room_sea: "Sea-View",
    faq_label: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq1q: "Is a reservation required?",
    faq1a:
      "Reservations are especially recommended before weekends. You can easily book by phone or through our website.",
    faq2q: "Is there a minimum order for VIP rooms?",
    faq2a:
      "Yes, our VIP rooms have a minimum guest requirement. Please contact us for more details.",
    faq3q: "Are there special seats for children?",
    faq3a:
      "Yes, our family restaurant has special children's seating and a children's menu.",
    faq4q: "What are the opening hours?",
    faq4a: "Our restaurant welcomes guests every day from 10:00 to 23:30.",
    faq5q: "Is there free parking?",
    faq5a: "Yes, there is a large free car park next to our restaurant.",
    faq6q: "Are there special packages for birthdays and weddings?",
    faq6a:
      "Yes, we offer individual packages for special events. Decoration, cake, music — everything can be arranged with us.",
    contact_label: "Contact",
    contact_title: "Get in Touch",
    cc1_title: "Address",
    cc1_val: "Novkhani village,<br>Seaside",
    cc2_title: "Phone",
    cc3_title: "Opening Hours",
    cc3_val: "Every day<br>10:00 – 23:30",
    open_txt: "Open Now",
    closed_txt: "Closed",
    footer_rights: "All rights reserved.",
    footer_addr: "Novkhani village, seaside, Sumgayit",
  },
};

// ============================================
// CURRENT LANGUAGE
// ============================================
let currentLang = "az";

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  updateOpenBadge();

  // Placeholder-ləri dəyiş
  const placeholders = {
    az: {
      name: "Adınızı daxil edin",
      phone: "+994 XX XXX XX XX",
      note: "Xüsusi istəklər, ad günü, allergiyalar...",
    },
    ru: {
      name: "Введите ваше имя",
      phone: "+994 XX XXX XX XX",
      note: "Особые пожелания, день рождения, аллергии...",
    },
    en: {
      name: "Enter your name",
      phone: "+994 XX XXX XX XX",
      note: "Special requests, birthday, allergies...",
    },
  };
  document.querySelector('input[name="name"]').placeholder =
    placeholders[lang].name;
  document.querySelector('input[name="phone"]').placeholder =
    placeholders[lang].phone;
  document.querySelector('textarea[name="note"]').placeholder =
    placeholders[lang].note;

  // Select option-ları dəyiş
  const guestsSelect = document.querySelector('select[name="guests"]');
  const guestOpts = {
    az: ["1 nəfər", "2 nəfər", "3–5 nəfər", "6–10 nəfər", "10+ nəfər"],
    ru: [
      "1 человек",
      "2 человека",
      "3–5 человек",
      "6–10 человек",
      "10+ человек",
    ],
    en: ["1 person", "2 people", "3–5 people", "6–10 people", "10+ people"],
  };
  guestsSelect.querySelectorAll("option").forEach((opt, i) => {
    opt.textContent = guestOpts[lang][i];
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
});

// ============================================
// OPEN / CLOSED BADGE
// ============================================
function updateOpenBadge() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMin = hours * 60 + minutes;
  const openMin = 10 * 60; // 10:00
  const closeMin = 23 * 60 + 30; // 23:30
  const isOpen = totalMin >= openMin && totalMin < closeMin;
  const t = translations[currentLang];

  document.querySelectorAll("#openBadge").forEach((badge) => {
    badge.textContent = isOpen ? t.open_txt : t.closed_txt;
    badge.className = "open-badge " + (isOpen ? "open" : "closed");
  });
}

// ============================================
// NAVBAR SCROLL
// ============================================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ============================================
// HAMBURGER / MOBILE MENU
// ============================================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("show");
  hamburger.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
});

document.querySelectorAll(".mob-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    hamburger.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ============================================
// SCROLL REVEAL
// ============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right")
  .forEach((el) => {
    revealObserver.observe(el);
  });

// ============================================
// FAQ ACCORDION
// ============================================
document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      openItem.classList.remove("open");
      openItem.querySelector(".faq-icon").textContent = "+";
    });
    if (!isOpen) {
      item.classList.add("open");
      btn.querySelector(".faq-icon").textContent = "×";
    }
  });
});

// ============================================
// RESERVATION FORM
// ============================================
const resForm = document.getElementById("resForm");
const formSuccess = document.getElementById("formSuccess");

// Set min date to today
const dateInput = resForm.querySelector('input[type="date"]');
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
  dateInput.value = today;
}
function sendToWhatsApp(data) {
  const phone = '994508606161';
  const msg = `🍽️ *YENİ REZERVASİYA*\n\n👤 Ad: ${data.name}\n📞 Telefon: ${data.phone}\n📅 Tarix: ${data.date}\n⏰ Saat: ${data.time || 'Qeyd edilməyib'}\n👥 Şəxs: ${data.guests}\n🏠 Otaq: ${data.room}\n📝 Qeyd: ${data.note || 'Yoxdur'}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}
resForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation
  const name = resForm.querySelector('input[name="name"]').value.trim();
  const phone = resForm.querySelector('input[name="phone"]').value.trim();
  const date = resForm.querySelector('input[name="date"]').value;
  const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;

  // Köhnə xətaları sil
  resForm.querySelectorAll(".field-error").forEach((el) => el.remove());
  resForm
    .querySelectorAll(".input-error")
    .forEach((el) => el.classList.remove("input-error"));

  let hasError = false;

  if (!name || name.length < 2) {
    showFieldError(
      resForm.querySelector('input[name="name"]'),
      currentLang === "az"
        ? "Ad mütləq daxil edilməlidir"
        : currentLang === "ru"
          ? "Введите имя"
          : "Name is required",
    );
    hasError = true;
  }

  if (!phone || !phoneRegex.test(phone)) {
    showFieldError(
      resForm.querySelector('input[name="phone"]'),
      currentLang === "az"
        ? "Düzgün telefon nömrəsi daxil edin"
        : currentLang === "ru"
          ? "Введите корректный номер"
          : "Enter a valid phone number",
    );
    hasError = true;
  }

  if (!date) {
    showFieldError(
      resForm.querySelector('input[name="date"]'),
      currentLang === "az"
        ? "Tarix seçin"
        : currentLang === "ru"
          ? "Выберите дату"
          : "Select a date",
    );
    hasError = true;
  }

  if (hasError) return;

  const btn = resForm.querySelector('.btn-submit');
const data = {
  name: resForm.querySelector('input[name="name"]').value,
  phone: resForm.querySelector('input[name="phone"]').value,
  date: resForm.querySelector('input[name="date"]').value,
  time: resForm.querySelector('input[name="time"]').value,
  guests: resForm.querySelector('select[name="guests"]').value,
  room: resForm.querySelector('select[name="room"]').value,
  note: resForm.querySelector('textarea[name="note"]').value
};
btn.textContent = '...';
btn.disabled = true;
setTimeout(() => {
  sendToWhatsApp(data);
  formSuccess.classList.add('show');
  resForm.reset();
  dateInput.value = new Date().toISOString().split('T')[0];
  btn.textContent = translations[currentLang].form_submit;
  btn.disabled = false;
  setTimeout(() => formSuccess.classList.remove('show'), 5000);
}, 800);
});

function showFieldError(input, message) {
  input.classList.add("input-error");
  const err = document.createElement("span");
  err.className = "field-error";
  err.textContent = message;
  input.parentNode.appendChild(err);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

// ============================================
// NAVBAR ACTIVE LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener(
  "scroll",
  () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active-link",
        link.getAttribute("href") === "#" + current,
      );
    });
  },
  { passive: true },
);

// ============================================
// INIT
// ============================================
updateOpenBadge();
setInterval(updateOpenBadge, 60000);

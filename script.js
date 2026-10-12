const translations = {
  ro: {
    nav_despre: "Despre",
    nav_servicii: "Servicii",
    nav_continut: "Ce conține",
    nav_contact: "Contact",
    hero_title: "Creez site-uri<br>surpriză personalizate",
    hero_desc: "Experiențe interactive, pline de emoție, pentru cele mai speciale momente din viața ta.",
    hero_wa: "Scrie-mi pe WhatsApp",
    hero_services: "Vezi serviciile",
    despre_label: "Despre mine",
    despre_title: "Povești care merită spuse frumos",
    despre_p1: "Creez site-uri surpriză personalizate — interactive și încărcate de emoție — pentru anunțuri de sarcină, cereri în căsătorie, mesaje de dragoste sau orice alt moment special pe care vrei să-l celebrezi altfel.",
    despre_p2: "Fiecare proiect este unic, gândit de la zero, cu atenție la detalii, la ritm și la sentimentul pe care vrei să-l transmită.",
    despre_sign: "Cu drag, Andreea ♡",
    servicii_label: "Ce ofer",
    servicii_title: "Servicii",
    servicii_sub: "Site-uri create special pentru tine și pentru cei dragi.",
    s1_title: "Anunțuri de sarcină",
    s1_desc: "Site-uri emoționante care dezvăluie vestea cea mare într-un mod magic și personal.",
    s2_title: "Cereri în căsătorie",
    s2_desc: "Experiențe interactive care transformă momentul cererii într-o poveste de neuitat.",
    s3_title: "Mesaje de dragoste",
    s3_desc: "Scrisori digitale și site-uri dedicate celor pe care îi iubești, pentru aniversări sau pur și simplu așa.",
    s4_title: "Surprize personalizate",
    s4_desc: "Orice altă poveste specială: zile de naștere, mulțumiri, momente de familie sau cadouri unice.",
    continut_label: "Structură",
    continut_title: "Ce conține un site surpriză",
    continut_sub: "Fiecare proiect este personalizat, dar iată elementele pe care le putem include.",
    f1_title: "Imagini",
    f1_desc: "Fotografii alese de tine sau pe care le integrăm împreună, pentru a da atmosferă și personalitate site-ului.",
    f2_title: "Mesaje video",
    f2_desc: "Poți adăuga mesaje video de la tine sau de la persoane dragi, pe care destinatarul le poate urmări direct în site.",
    f3_title: "Mesaje scrise",
    f3_desc: "Scrisori, texte poetice sau mesaje în formatul pe care îl dorești — tip scrisoare, carduri, secțiuni interactive.",
    f4_title: "Design personalizat",
    f4_desc: "Realizăm designul împreună sau îl creez eu, iar tu îmi spui ce modificări vrei până când totul ți se pare perfect.",
    f5_title: "Melodie de fundal",
    f5_desc: "La cerere, putem adăuga o melodie de fundal care să completeze atmosfera site-ului.",
    f6_title: "Livrare pe link",
    f6_desc: "Surpriza este livrată sub forma unui link elegant, pe care îl trimiți oricând, pe orice dispozitiv.",
    contact_label: "Contact",
    contact_title: "Hai să creăm împreună<br>o surpriză de neuitat",
    contact_desc: "Scrie-mi pe WhatsApp sau pe rețelele sociale. Răspund cu drag.",
    footer_text: "Site-uri surpriză personalizate"
  },
  en: {
    nav_despre: "About",
    nav_servicii: "Services",
    nav_continut: "What's included",
    nav_contact: "Contact",
    hero_title: "I create personalized<br>surprise websites",
    hero_desc: "Interactive, emotional experiences for the most special moments in your life.",
    hero_wa: "Message me on WhatsApp",
    hero_services: "See services",
    despre_label: "About me",
    despre_title: "Stories that deserve to be told beautifully",
    despre_p1: "I create personalized surprise websites — interactive and full of emotion — for pregnancy announcements, marriage proposals, love messages, or any other special moment you want to celebrate differently.",
    despre_p2: "Every project is unique, designed from scratch, with attention to detail, rhythm, and the feeling you want to convey.",
    despre_sign: "With love, Andreea ♡",
    servicii_label: "What I offer",
    servicii_title: "Services",
    servicii_sub: "Websites created especially for you and your loved ones.",
    s1_title: "Pregnancy announcements",
    s1_desc: "Emotional websites that reveal the big news in a magical and personal way.",
    s2_title: "Marriage proposals",
    s2_desc: "Interactive experiences that turn the proposal moment into an unforgettable story.",
    s3_title: "Love messages",
    s3_desc: "Digital letters and websites dedicated to those you love — for anniversaries or just because.",
    s4_title: "Custom surprises",
    s4_desc: "Any other special story: birthdays, thank-yous, family moments, or unique gifts.",
    continut_label: "Structure",
    continut_title: "What's included in a surprise website",
    continut_sub: "Every project is personalized, but here are the elements we can include.",
    f1_title: "Images",
    f1_desc: "Photos chosen by you or that we integrate together, to give atmosphere and personality to the website.",
    f2_title: "Video messages",
    f2_desc: "You can add video messages from you or from loved ones, which the recipient can watch directly on the site.",
    f3_title: "Written messages",
    f3_desc: "Letters, poetic texts, or messages in whatever format you want — letter style, cards, interactive sections.",
    f4_title: "Custom design",
    f4_desc: "We create the design together, or I design it and you tell me what changes you want until everything feels perfect.",
    f5_title: "Background music",
    f5_desc: "On request, we can add background music to complete the atmosphere of the website.",
    f6_title: "Delivered via link",
    f6_desc: "The surprise is delivered as an elegant link that you can send anytime, on any device.",
    contact_label: "Contact",
    contact_title: "Let's create together<br>an unforgettable surprise",
    contact_desc: "Message me on WhatsApp or social media. I reply with pleasure.",
    footer_text: "Personalized surprise websites"
  }
};

let currentLang = localStorage.getItem('lang') || 'ro';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update page title
  document.title = lang === 'ro'
    ? 'Andreea Soledad | Site-uri Surpriză Personalizate'
    : 'Andreea Soledad | Personalized Surprise Websites';
}

// Init
setLanguage(currentLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Header scroll + mobile menu
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

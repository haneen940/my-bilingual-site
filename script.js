let currentLang = 'ar';

const translations = {
  ar: {
    mainTitle: "مرحبا بك في موقعي!",
    sectionTitle: "عن الموقع",
    sectionText: "ده موقع ويب بسيط ثنائي اللغة (عربي + إنجليزي).",
    contactTitle: "تواصل معي",
    contactText: "يمكنك التواصل عبر البريد الإلكتروني: example@email.com",
    langBtn: "English"
  },
  en: {
    mainTitle: "Welcome to My Site!",
    sectionTitle: "About the Site",
    sectionText: "This is a simple bilingual website (Arabic + English).",
    contactTitle: "Contact Me",
    contactText: "You can contact me via email: example@email.com",
    langBtn: "العربية"
  }
};

function switchLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  
  const t = translations[currentLang];
  
  document.getElementById('main-title').innerText = t.mainTitle;
  document.getElementById('section-title').innerText = t.sectionTitle;
  document.getElementById('section-text').innerText = t.sectionText;
  document.getElementById('contact-title').innerText = t.contactTitle;
  document.getElementById('content-text').innerText = t.contactText;
  document.getElementById('lang-btn').innerText = t.langBtn;
  
  // تغيير اتجاه الصفحة
  document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
}
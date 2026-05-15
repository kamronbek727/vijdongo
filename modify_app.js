const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const translationsCode = `
// --- Translations ---
const translations = {
  uz: {
    startJourney: "Safarni boshlash",
    loginTitle: "Tizimga kirish",
    nameLabel: "Ism",
    namePlaceholder: "Ismingizni kiriting",
    surnameLabel: "Familiya",
    surnamePlaceholder: "Familiyangizni kiriting",
    phoneLabel: "Telefon raqami",
    genderLabel: "Jinsingiz",
    male: "Erkak",
    female: "Ayol",
    continueBtn: "Davom etish",
    whereTo: "Qayerga boramiz?",
    greeting: "Assalomu alaykum!",
    greetingSub: "Bugun qayerga boramiz?",
    fromLabel: "Qayerdan",
    toLabel: "Qayerga",
    fromPlaceholder: "Qayerdasiz?",
    toPlaceholder: "Qayerga borasiz?",
    emptyTitle: "Manzillarni tanlang",
    emptyDesc: "Olib ketish va borish joyini ko'rsating. Shundan so'ng narx va marshrut paydo bo'ladi.",
    calcRoute: "Yo'nalish hisoblanmoqda...",
    priceLabel: "Narxi:",
    passengers: "Yo'lovchilar soni",
    baggage: "Bagaj kerakmi?",
    yes: "Ha",
    no: "Yo'q",
    orderTaxi: "Buyurtma berish",
    pickupScreenTitle: "Qayerdasiz?",
    skipBtn: "O‘tkazib yuborish",
    destScreenTitle: "Qayerga borasiz?",
    confirmBtn: "Tasdiqlash",
    selectedAddress: "Tanlangan manzil",
    searchDriver: "Haydovchi qidirilmoqda...",
    searchDesc: "Iltimos, kuting. Sizning yo'nalishingiz bo'yicha haydovchilarga so'rov yuborildi.",
    cancelBtn: "Bekor qilish",
    tripActive: "Safar davom etmoqda",
    driverName: "Haydovchi",
    carInfo: "Avtomobil",
    cancelTrip: "Safarni bekor qilish",
    myTrips: "Safarlarim",
    messages: "Xabarlar",
    profile: "Profil",
    settings: "Sozlamalar",
    help: "Yordam",
    logout: "Tizimdan chiqish",
    phoneUnchangeable: "Telefon raqami (O'zgartirib bo'lmaydi)",
    saveBtn: "Saqlash",
    navHome: "Asosiy",
    navTrips: "Safarlarim",
    navMessages: "Xabarlar",
    navProfile: "Profil",
    langSelectTitle: "Tilni tanlang",
    language: "Til / Language",
    uzbek: "O‘zbekcha 🇺🇿",
    russian: "Русский 🇷🇺",
    english: "English 🇺🇸"
  },
  ru: {
    startJourney: "Начать поездку",
    loginTitle: "Вход в систему",
    nameLabel: "Имя",
    namePlaceholder: "Введите ваше имя",
    surnameLabel: "Фамилия",
    surnamePlaceholder: "Введите вашу фамилию",
    phoneLabel: "Номер телефона",
    genderLabel: "Ваш пол",
    male: "Мужской",
    female: "Женский",
    continueBtn: "Продолжить",
    whereTo: "Куда поедем?",
    greeting: "Здравствуйте!",
    greetingSub: "Куда поедем сегодня?",
    fromLabel: "Откуда",
    toLabel: "Куда",
    fromPlaceholder: "Где вы?",
    toPlaceholder: "Куда вы едете?",
    emptyTitle: "Выберите адреса",
    emptyDesc: "Укажите места посадки и высадки. После этого появятся цена и маршрут.",
    calcRoute: "Рассчитывается маршрут...",
    priceLabel: "Цена:",
    passengers: "Количество пассажиров",
    baggage: "Нужен багаж?",
    yes: "Да",
    no: "Нет",
    orderTaxi: "Заказать такси",
    pickupScreenTitle: "Где вы находитесь?",
    skipBtn: "Пропустить",
    destScreenTitle: "Куда вы направляетесь?",
    confirmBtn: "Подтвердить",
    selectedAddress: "Выбранный адрес",
    searchDriver: "Поиск водителя...",
    searchDesc: "Пожалуйста, подождите. Ваш запрос отправлен водителям.",
    cancelBtn: "Отменить",
    tripActive: "Поездка продолжается",
    driverName: "Водитель",
    carInfo: "Автомобиль",
    cancelTrip: "Отменить поездку",
    myTrips: "Мои поездки",
    messages: "Сообщения",
    profile: "Профиль",
    settings: "Настройки",
    help: "Помощь",
    logout: "Выйти из системы",
    phoneUnchangeable: "Номер телефона (Нельзя изменить)",
    saveBtn: "Сохранить",
    navHome: "Главная",
    navTrips: "Поездки",
    navMessages: "Сообщения",
    navProfile: "Профиль",
    langSelectTitle: "Выберите язык",
    language: "Язык / Language",
    uzbek: "O‘zbekcha 🇺🇿",
    russian: "Русский 🇷🇺",
    english: "English 🇺🇸"
  },
  en: {
    startJourney: "Start Journey",
    loginTitle: "Login",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    surnameLabel: "Surname",
    surnamePlaceholder: "Enter your surname",
    phoneLabel: "Phone number",
    genderLabel: "Gender",
    male: "Male",
    female: "Female",
    continueBtn: "Continue",
    whereTo: "Where are we going?",
    greeting: "Hello!",
    greetingSub: "Where are we going today?",
    fromLabel: "From",
    toLabel: "To",
    fromPlaceholder: "Where are you?",
    toPlaceholder: "Where are you going?",
    emptyTitle: "Select locations",
    emptyDesc: "Indicate pickup and drop-off locations. Price and route will appear afterward.",
    calcRoute: "Calculating route...",
    priceLabel: "Price:",
    passengers: "Passengers",
    baggage: "Need baggage?",
    yes: "Yes",
    no: "No",
    orderTaxi: "Order Taxi",
    pickupScreenTitle: "Where are you?",
    skipBtn: "Skip",
    destScreenTitle: "Where are you going?",
    confirmBtn: "Confirm",
    selectedAddress: "Selected address",
    searchDriver: "Searching for driver...",
    searchDesc: "Please wait. Your request has been sent to drivers.",
    cancelBtn: "Cancel",
    tripActive: "Trip in progress",
    driverName: "Driver",
    carInfo: "Car",
    cancelTrip: "Cancel Trip",
    myTrips: "My Trips",
    messages: "Messages",
    profile: "Profile",
    settings: "Settings",
    help: "Help",
    logout: "Log out",
    phoneUnchangeable: "Phone number (Cannot be changed)",
    saveBtn: "Save",
    navHome: "Home",
    navTrips: "My Trips",
    navMessages: "Messages",
    navProfile: "Profile",
    langSelectTitle: "Choose Language",
    language: "Language / Til",
    uzbek: "O‘zbekcha 🇺🇿",
    russian: "Русский 🇷🇺",
    english: "English 🇺🇸"
  }
};

let currentLang = localStorage.getItem('vg_lang') || 'uz';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('vg_lang', lang);
    updateUITranslations();
}

function updateUITranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML for safe replacement in case of spans/etc
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
    
    const bagStatus = document.getElementById('baggage-status');
    if (bagStatus) {
        bagStatus.innerText = typeof needsBaggage !== "undefined" && needsBaggage ? translations[currentLang].yes : translations[currentLang].no;
    }
    
    // Update language select dropdowns
    const loginLang = document.getElementById('login-language');
    if (loginLang && loginLang.value !== currentLang) loginLang.value = currentLang;
    
    const settingsLang = document.getElementById('settings-language');
    if (settingsLang && settingsLang.value !== currentLang) settingsLang.value = currentLang;
}

`;

if (!appJs.includes('const translations = {')) {
  appJs = translationsCode + appJs;
  
  // Also append call to updateUITranslations() inside DOMContentLoaded
  appJs = appJs.replace("renderProfil();", "renderProfil();\n    updateUITranslations();");
  
  fs.writeFileSync('app.js', appJs);
  console.log('done modifying app.js');
} else {
  console.log('app.js already modified');
}

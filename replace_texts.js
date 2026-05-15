const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  ['>Safarni boshlash<', ' data-i18n="startJourney">Safarni boshlash<'],
  ['>Tizimga kirish<', ' data-i18n="loginTitle">Tizimga kirish<'],
  ['>Ism<', ' data-i18n="nameLabel">Ism<'],
  ['placeholder="Ismingizni kiriting"', 'placeholder="Ismingizni kiriting" data-i18n-placeholder="namePlaceholder"'],
  ['>Familiya<', ' data-i18n="surnameLabel">Familiya<'],
  ['placeholder="Familiyangizni kiriting"', 'placeholder="Familiyangizni kiriting" data-i18n-placeholder="surnamePlaceholder"'],
  ['>Telefon raqami<', ' data-i18n="phoneLabel">Telefon raqami<'],
  ['>Jinsingiz<', ' data-i18n="genderLabel">Jinsingiz<'],
  ['>Erkak<', ' data-i18n="male">Erkak<'],
  ['>Ayol<', ' data-i18n="female">Ayol<'],
  ['>Davom etish<', ' data-i18n="continueBtn">Davom etish<'],
  ['>Qayerga boramiz?<', ' data-i18n="whereTo">Qayerga boramiz?<'],
  ['>Assalomu alaykum!<', ' data-i18n="greeting">Assalomu alaykum!<'],
  ['>Bugun qayerga boramiz?<', ' data-i18n="greetingSub">Bugun qayerga boramiz?<'],
  ['>Qayerdan<', ' data-i18n="fromLabel">Qayerdan<'],
  ['>Qayerdasiz?<', ' data-i18n="fromPlaceholder">Qayerdasiz?<'],
  ['>Qayerga<', ' data-i18n="toLabel">Qayerga<'],
  ['>Qayerga borasiz?<', ' data-i18n="toPlaceholder">Qayerga borasiz?<'],
  ['>Manzillarni tanlang<', ' data-i18n="emptyTitle">Manzillarni tanlang<'],
  ['>Olib ketish va borish joyini ko\'rsating. Shundan so\'ng narx va marshrut paydo bo\'ladi.<', ' data-i18n="emptyDesc">Olib ketish va borish joyini ko\'rsating. Shundan so\'ng narx va marshrut paydo bo\'ladi.<'],
  ['>Yo\'nalish hisoblanmoqda...<', ' data-i18n="calcRoute">Yo\'nalish hisoblanmoqda...<'],
  ['>Narxi:<', ' data-i18n="priceLabel">Narxi:<'],
  ['>Yo\'lovchilar soni<', ' data-i18n="passengers">Yo\'lovchilar soni<'],
  ['>Bagaj kerakmi?<', ' data-i18n="baggage">Bagaj kerakmi?<'],
  ['>Yo\'q<', ' data-i18n="no">Yo\'q<'],
  ['>Buyurtma berish<', ' data-i18n="orderTaxi">Buyurtma berish<'],
  ['>O‘tkazib yuborish<', ' data-i18n="skipBtn">O‘tkazib yuborish<'],
  ['>Tasdiqlash<', ' data-i18n="confirmBtn">Tasdiqlash<'],
  ['>Tanlangan manzil<', ' data-i18n="selectedAddress">Tanlangan manzil<'],
  ['>Haydovchi qidirilmoqda...<', ' data-i18n="searchDriver">Haydovchi qidirilmoqda...<'],
  ['>Iltimos, kuting. Sizning yo\'nalishingiz bo\'yicha haydovchilarga so\'rov yuborildi.<', ' data-i18n="searchDesc">Iltimos, kuting. Sizning yo\'nalishingiz bo\'yicha haydovchilarga so\'rov yuborildi.<'],
  ['>Bekor qilish<', ' data-i18n="cancelBtn">Bekor qilish<'],
  ['>Safar davom etmoqda<', ' data-i18n="tripActive">Safar davom etmoqda<'],
  ['>Haydovchi<', ' data-i18n="driverName">Haydovchi<'],
  ['>Avtomobil<', ' data-i18n="carInfo">Avtomobil<'],
  ['>Safarni bekor qilish<', ' data-i18n="cancelTrip">Safarni bekor qilish<'],
  ['>Safarlarim<', ' data-i18n="myTrips">Safarlarim<'],
  ['>Xabarlar<', ' data-i18n="messages">Xabarlar<'],
  ['>Profil<', ' data-i18n="profile">Profil<'],
  ['>Sozlamalar<', ' data-i18n="settings">Sozlamalar<'],
  ['>Yordam<', ' data-i18n="help">Yordam<'],
  ['>Tizimdan chiqish<', ' data-i18n="logout">Tizimdan chiqish<'],
  ['>Telefon raqami (O\'zgartirib bo\'lmaydi)<', ' data-i18n="phoneUnchangeable">Telefon raqami (O\'zgartirib bo\'lmaydi)<'],
  ['>Saqlash<', ' data-i18n="saveBtn">Saqlash<'],
  ['>Asosiy<', ' data-i18n="navHome">Asosiy<']
];

for (let i = 0; i < replacements.length; i++) {
  // Use global regex replace to catch multiple occurrences
  const escapedSearch = replacements[i][0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedSearch, 'g');
  html = html.replace(regex, replacements[i][1]);
}

const loginLangStr = `
                <div class="shrink-0 mb-4">
                    <label class="block text-sm font-semibold text-graphite mb-2" data-i18n="langSelectTitle">Tilni tanlang</label>
                    <div class="relative">
                        <select id="login-language" onchange="setLanguage(this.value)" class="w-full bg-bgLight px-5 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary outline-none transition-shadow text-base font-medium appearance-none cursor-pointer">
                            <option value="uz">O‘zbekcha 🇺🇿</option>
                            <option value="ru">Русский 🇷🇺</option>
                            <option value="en">English 🇺🇸</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-textSecondary">
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>`;

html = html.replace('<div class="shrink-0">\r\n                    <label class="block text-sm font-semibold text-graphite mb-2" data-i18n="nameLabel">Ism</label>', loginLangStr + '\r\n                <div class="shrink-0">\r\n                    <label class="block text-sm font-semibold text-graphite mb-2" data-i18n="nameLabel">Ism</label>');

const settingsLangStr = `
                    <div>
                        <label class="block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 ml-1" data-i18n="language">Til / Language</label>
                        <div class="relative">
                            <select id="settings-language" onchange="setLanguage(this.value)" class="w-full bg-white px-5 py-4 rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-primary outline-none transition-shadow text-base font-semibold appearance-none cursor-pointer">
                                <option value="uz">O‘zbekcha 🇺🇿</option>
                                <option value="ru">Русский 🇷🇺</option>
                                <option value="en">English 🇺🇸</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-textSecondary">
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>`;

html = html.replace('<div>\r\n                        <label class="block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 ml-1" data-i18n="phoneUnchangeable">', settingsLangStr + '\r\n                    <div>\r\n                        <label class="block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 ml-1" data-i18n="phoneUnchangeable">');

fs.writeFileSync('index.html', html);
console.log('done modifying index.html');

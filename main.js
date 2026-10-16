// =====================================================
// main.js — услуги, цены, галерея, отзывы, запись
// =====================================================

// ---------- Данные ----------
const SERVICES = [
  { id: 'manicure', title: 'Маникюр', short: 'Форма, кутикула и уход за руками', price: 1500, time: '60 минут', img: 'img/manicure.jpg',
    text: 'Аппаратный или комбинированный маникюр: аккуратно убираем кутикулу, придаём форму и питаем кожу маслом.',
    list: ['снятие старого покрытия', 'форма на выбор', 'обработка кутикулы', 'масло и крем для рук'] },
  { id: 'pedicure', title: 'Педикюр', short: 'Гладкие стопы и аккуратные пальчики', price: 2200, time: '80 минут', img: 'img/pedicure.jpg',
    text: 'Смарт-педикюр с одноразовыми насадками: стопы становятся мягкими, а ногти — ухоженными.',
    list: ['обработка стоп и пальцев', 'одноразовые файлы', 'покрытие по желанию', 'массаж стоп'] },
  { id: 'extensions', title: 'Наращивание', short: 'Длина и форма за один визит', price: 3200, time: '2,5 часа', img: 'img/extensions.jpg',
    text: 'Наращиваем гелем на верхние формы: ногти выглядят естественно и держатся до четырёх недель.',
    list: ['любая форма и длина', 'укрепление гелем', 'покрытие в цене', 'коррекция через 3–4 недели'] },
  { id: 'design', title: 'Дизайн', short: 'Френч, рисунки, втирка и стразы', price: 300, from: true, time: 'от 15 минут', img: 'img/design.jpg',
    text: 'Повторим дизайн с вашего фото или придумаем свой. Цена зависит от сложности и считается за ноготь.',
    list: ['френч и омбре', 'рисунки кистью', 'втирка и слюда', 'стразы и наклейки'] },
  { id: 'spa', title: 'СПА для рук', short: 'Скраб, маска и парафин', price: 900, time: '30 минут', img: 'img/spa.jpg',
    text: 'Расслабляющий уход: скраб, увлажняющая маска и тёплый парафин. Кожа становится мягкой, как после отпуска.',
    list: ['скраб для рук', 'питательная маска', 'парафинотерапия', 'лёгкий массаж'] },
  { id: 'gel', title: 'Покрытие гель-лаком', short: 'Стойкий блеск до трёх недель', price: 1900, time: '90 минут', img: 'img/gel.jpg',
    text: 'Маникюр с покрытием гель-лаком: более 200 оттенков, покрытие не скалывается и не тускнеет.',
    list: ['маникюр включён', 'выравнивание базой', '200+ оттенков', 'держится до 3 недель'] }
];

const PRICES = {
  'Маникюр': [
    ['Маникюр без покрытия', 'аппаратный или комбинированный', 1500, 'manicure'],
    ['Маникюр + гель-лак', 'с выравниванием базой', 1900, 'gel'],
    ['Мужской маникюр', 'чистка и полировка', 1300, 'manicure'],
    ['Детский маникюр', 'до 12 лет', 900, 'manicure'],
    ['Снятие покрытия', 'без маникюра', 400, 'manicure'],
    ['Укрепление гелем', 'для тонких ногтей', 500, 'gel']
  ],
  'Педикюр': [
    ['Педикюр пальцы', 'без обработки стоп', 1600, 'pedicure'],
    ['Педикюр полный', 'стопы и пальцы', 2200, 'pedicure'],
    ['Полный + гель-лак', 'с покрытием', 2700, 'pedicure'],
    ['Мужской педикюр', 'полный', 2400, 'pedicure']
  ],
  'Наращивание и дизайн': [
    ['Наращивание', 'короткая и средняя длина', 3200, 'extensions'],
    ['Коррекция наращивания', 'через 3–4 недели', 2600, 'extensions'],
    ['Френч', 'на все ногти', 600, 'design'],
    ['Дизайн за ноготь', 'рисунок, стразы, втирка', 300, 'design'],
    ['СПА для рук', 'скраб, маска, парафин', 900, 'spa']
  ]
};

const GALLERY = [
  { img: 'img/g1.jpg', cat: 'Дизайн', cap: 'Мраморный френч' },
  { img: 'img/g2.jpg', cat: 'Френч', cap: 'Френч с блёстками' },
  { img: 'img/g3.jpg', cat: 'Яркие', cap: 'Синий миндаль с серебром' },
  { img: 'img/g4.jpg', cat: 'Яркие', cap: 'Классический красный' },
  { img: 'img/g5.jpg', cat: 'Дизайн', cap: 'Металлик и стразы' },
  { img: 'img/g6.jpg', cat: 'Нюд', cap: 'Нюдовый с цветами' },
  { img: 'img/g7.jpg', cat: 'Нюд', cap: 'Нежно-розовый' },
  { img: 'img/g8.jpg', cat: 'Френч', cap: 'Тонкий френч' },
  { img: 'img/g9.jpg', cat: 'Яркие', cap: 'Сочный дизайн' },
  { img: 'img/extensions.jpg', cat: 'Нюд', cap: 'Розовое наращивание' },
  { img: 'img/design.jpg', cat: 'Дизайн', cap: 'Узор кистью' },
  { img: 'img/gel.jpg', cat: 'Нюд', cap: 'Молочный гель-лак' }
];

const REVIEWS = [
  { name: 'Анастасия', img: 'img/p1.jpg', text: 'Хожу третий месяц к Алине. Покрытие держится три недели без единого скола, а в студии так уютно, что не хочется уходить.' },
  { name: 'Мария', img: 'img/p2.jpg', text: 'Принесла фото из Pinterest — повторили один в один и даже лучше. Отдельное спасибо за чай и плед!' },
  { name: 'Екатерина', img: 'img/p3.jpg', text: 'Понравилось, что инструменты достали из крафт-пакета при мне. Чисто, аккуратно и без спешки.' },
  { name: 'Дарья', img: 'img/p4.jpg', text: 'Сделала педикюр перед отпуском. Стопы как у младенца, а цвет все две недели на море не потускнел.' },
  { name: 'Ольга', img: 'img/p1.jpg', text: 'Записалась онлайн за минуту, мастер пришла минута в минуту. Наконец нашла свою студию.' }
];

const MASTERS = ['Любой мастер', 'Алина', 'Виктория', 'Софья'];
const TIMES = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];
const PROMO = 0.2;

// ---------- Помощники ----------
const $ = (s) => document.querySelector(s);
const rub = (n) => n.toLocaleString('ru-RU') + ' ₽';

function el(tag, attrs = {}, html = '') {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  node.innerHTML = html;
  return node;
}

let toastTimer;
function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ---------- Шапка и меню ----------
const header = $('#header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });
$('#burger').addEventListener('click', () => document.body.classList.toggle('menu-open'));
document.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

// Подсветка пункта меню текущего раздела
const sections = ['top', 'services', 'prices', 'gallery', 'reviews', 'contacts'].map((id) => document.getElementById(id));
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => s && navObserver.observe(s));

// ---------- Услуги ----------
const servicesList = $('#services-list');
const footerServices = $('#footer-services');
SERVICES.forEach((s) => {
  const card = el('button', { class: 'service', type: 'button' },
    `<img src="${s.img}" alt="${s.title}" loading="lazy"><div class="service__body"><b>${s.title}</b><p>${s.short}</p><span class="price">${s.from ? 'от ' : ''}${rub(s.price)}</span></div>`);
  card.addEventListener('click', () => openService(s.id));
  servicesList.append(card);

  const link = el('button', { type: 'button' }, s.title);
  link.addEventListener('click', () => openService(s.id));
  footerServices.append(link);
});

// ---------- Окна ----------
function openModal(m) { m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
function closeModal(m) { m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); if (!document.querySelector('.modal.open, .lightbox.open')) document.body.style.overflow = ''; }

document.querySelectorAll('.modal, .lightbox').forEach((m) => {
  m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('[data-close]')) closeModal(m); });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelectorAll('.modal.open, .lightbox.open').forEach(closeModal);
  if ($('#lightbox').classList.contains('open')) {
    if (e.key === 'ArrowRight') stepLightbox(1);
    if (e.key === 'ArrowLeft') stepLightbox(-1);
  }
});

// Окно услуги
const serviceModal = $('#service-modal');
let currentService = null;
function openService(id) {
  const s = SERVICES.find((x) => x.id === id);
  currentService = s;
  $('#sm-img').src = s.img;
  $('#sm-img').alt = s.title;
  $('#sm-time').textContent = s.time;
  $('#sm-title').textContent = s.title;
  $('#sm-text').textContent = s.text;
  $('#sm-list').innerHTML = s.list.map((x) => `<li>${x}</li>`).join('');
  $('#sm-price').textContent = (s.from ? 'от ' : '') + rub(s.price);
  openModal(serviceModal);
}
$('#sm-book').addEventListener('click', () => { closeModal(serviceModal); openBooking({ service: currentService.title }); });

// ---------- Цены ----------
const priceTabs = $('#price-tabs');
const priceList = $('#price-list');
function renderPrices(cat) {
  priceTabs.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t.dataset.cat === cat));
  priceList.innerHTML = '';
  PRICES[cat].forEach(([name, note, price]) => {
    const row = el('button', { class: 'price-row', type: 'button' },
      `<span><b>${name}</b><small>${note}</small></span><span class="p">${rub(price)}</span><span class="go">→</span>`);
    row.addEventListener('click', () => openBooking({ service: name }));
    priceList.append(row);
  });
}
Object.keys(PRICES).forEach((cat, i) => {
  const t = el('button', { class: 'tab', type: 'button', 'data-cat': cat }, cat);
  t.addEventListener('click', () => renderPrices(cat));
  priceTabs.append(t);
});
renderPrices(Object.keys(PRICES)[0]);

// ---------- Галерея ----------
const galleryTabs = $('#gallery-tabs');
const galleryList = $('#gallery-list');
let visible = GALLERY.map((_, i) => i);
GALLERY.forEach((g, i) => {
  const shot = el('button', { class: 'shot', type: 'button', 'data-cat': g.cat }, `<img src="${g.img}" alt="${g.cap}" loading="lazy"><span>${g.cap}</span>`);
  shot.addEventListener('click', () => openLightbox(i));
  galleryList.append(shot);
});
['Все', 'Нюд', 'Френч', 'Яркие', 'Дизайн'].forEach((cat, i) => {
  const t = el('button', { class: 'tab' + (i === 0 ? ' active' : ''), type: 'button' }, cat);
  t.addEventListener('click', () => {
    galleryTabs.querySelectorAll('.tab').forEach((x) => x.classList.toggle('active', x === t));
    visible = [];
    galleryList.querySelectorAll('.shot').forEach((s, idx) => {
      const show = cat === 'Все' || s.dataset.cat === cat;
      s.classList.toggle('hide', !show);
      if (show) visible.push(idx);
    });
  });
  galleryTabs.append(t);
});

// Просмотр фото на весь экран
const lightbox = $('#lightbox');
let lbPos = 0;
let lbItems = GALLERY;
function showLightbox() {
  const g = lbItems[lbPos];
  $('#lb-img').src = g.img;
  $('#lb-img').alt = g.cap;
  $('#lb-cap').textContent = g.cap;
}
function openLightbox(i) { lbItems = visible.map((v) => GALLERY[v]); lbPos = Math.max(0, visible.indexOf(i)); showLightbox(); openModal(lightbox); }
function stepLightbox(d) { lbPos = (lbPos + d + lbItems.length) % lbItems.length; showLightbox(); }
$('#lb-prev').addEventListener('click', () => stepLightbox(-1));
$('#lb-next').addEventListener('click', () => stepLightbox(1));

// «Посмотреть студию» — фото студии в том же просмотрщике
$('#open-studio').addEventListener('click', () => {
  lbItems = [{ img: 'img/studio.jpg', cap: 'Наша студия: светлый зал и удобные кресла' }, { img: 'img/tools.jpg', cap: 'Инструменты после стерилизации в крафт-пакетах' }, { img: 'img/spa.jpg', cap: 'Уход за руками' }];
  lbPos = 0;
  showLightbox();
  openModal(lightbox);
});

// ---------- Отзывы ----------
let revStart = 0;
function renderReviews() {
  const per = window.innerWidth < 760 ? 1 : 3;
  const list = $('#reviews-list');
  list.innerHTML = '';
  for (let k = 0; k < per; k++) {
    const r = REVIEWS[(revStart + k) % REVIEWS.length];
    list.append(el('article', { class: 'review' },
      `<span class="stars">★★★★★</span><q>${r.text}</q><div class="review__who"><img src="${r.img}" alt=""><span><b>${r.name}</b><small>Яндекс Карты</small></span></div>`));
  }
}
$('#rev-prev').addEventListener('click', () => { revStart = (revStart - 1 + REVIEWS.length) % REVIEWS.length; renderReviews(); });
$('#rev-next').addEventListener('click', () => { revStart = (revStart + 1) % REVIEWS.length; renderReviews(); });
window.addEventListener('resize', renderReviews);
renderReviews();

// ---------- Промокод ----------
$('#copy-code').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('МИНДАЛЬ20'); toast('Промокод МИНДАЛЬ20 скопирован'); }
  catch (e) { toast('Промокод: МИНДАЛЬ20'); }
});

// ---------- Запись ----------
const bookModal = $('#book-modal');
const bService = $('#b-service');
const bPromo = $('#b-promo');
const state = { master: MASTERS[0], day: null, time: null };

// Все услуги из прайса — в выпадающий список
Object.entries(PRICES).forEach(([cat, rows]) => {
  const group = el('optgroup', { label: cat });
  rows.forEach(([name, , price]) => group.append(el('option', { value: name, 'data-price': price }, `${name} — ${rub(price)}`)));
  bService.append(group);
});
const findOption = (title) => [...bService.options].find((o) => o.value === title || o.value.startsWith(title));

function chip(text, onClick, extra = '') {
  const c = el('button', { class: 'chip', type: 'button' }, text + extra);
  c.addEventListener('click', () => onClick(c));
  return c;
}
function selectIn(box, c) { box.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', x === c)); }

// Мастера
const mBox = $('#b-masters');
MASTERS.forEach((m, i) => {
  const c = chip(m, (node) => { state.master = m; selectIn(mBox, node); renderTimes(); });
  if (i === 0) c.classList.add('active');
  mBox.append(c);
});

// Ближайшие 7 дней
const dBox = $('#b-days');
const days = [];
for (let i = 0; i < 7; i++) { const d = new Date(); d.setDate(d.getDate() + i); days.push(d); }
days.forEach((d, i) => {
  const label = i === 0 ? 'сегодня' : i === 1 ? 'завтра' : d.toLocaleDateString('ru-RU', { weekday: 'short' });
  const c = chip(String(d.getDate()), (node) => { state.day = d; state.time = null; selectIn(dBox, node); renderTimes(); }, `<small>${label}</small>`);
  dBox.append(c);
});

// Время: часть слотов «занята» — по дню и мастеру, чтобы выглядело живо
function renderTimes() {
  const tBox = $('#b-times');
  tBox.innerHTML = '';
  if (!state.day) { tBox.innerHTML = '<span class="field-label">Сначала выберите день</span>'; return; }
  const seed = state.day.getDate() + MASTERS.indexOf(state.master) * 3;
  const now = new Date();
  TIMES.forEach((t, i) => {
    const [h, m] = t.split(':').map(Number);
    const past = state.day.toDateString() === now.toDateString() && (h * 60 + m) <= now.getHours() * 60 + now.getMinutes();
    const busy = past || (seed + i * 5) % 4 === 0;
    const c = chip(t, (node) => { state.time = t; selectIn(tBox, node); clearError(); });
    if (busy) c.disabled = true;
    if (state.time === t && !busy) c.classList.add('active');
    tBox.append(c);
  });
}

function finalPrice() {
  const price = Number(bService.selectedOptions[0].dataset.price);
  return bPromo.checked ? Math.round(price * (1 - PROMO)) : price;
}

function updateTotal() {
  const price = Number(bService.selectedOptions[0].dataset.price);
  const total = $('#b-total');
  total.innerHTML = bPromo.checked ? `<s>${rub(price)}</s>${rub(Math.round(price * (1 - PROMO)))}` : rub(price);
}
bService.addEventListener('change', updateTotal);
bPromo.addEventListener('change', updateTotal);

function openBooking(opts = {}) {
  bookModal.classList.remove('done');
  if (opts.service) { const o = findOption(opts.service); if (o) bService.value = o.value; }
  if (opts.promo) bPromo.checked = true;
  if (!state.day) { state.day = days[1]; selectIn(dBox, dBox.children[1]); }
  renderTimes();
  updateTotal();
  clearError();
  openModal(bookModal);
}

// Любая кнопка с data-book открывает запись (data-promo — сразу со скидкой)
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-book]');
  if (!t) return;
  e.preventDefault();
  document.body.classList.remove('menu-open');
  openBooking({ promo: t.hasAttribute('data-promo') });
});

function clearError() { $('#b-error').textContent = ''; ['#b-name', '#b-phone'].forEach((s) => $(s).classList.remove('error')); }
['#b-name', '#b-phone'].forEach((s) => $(s).addEventListener('input', clearError));

$('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#b-name').value.trim();
  const phone = $('#b-phone').value.replace(/\D/g, '');
  if (!state.time) { $('#b-error').textContent = 'Выберите свободное время'; return; }
  if (name.length < 2) { $('#b-name').classList.add('error'); $('#b-error').textContent = 'Напишите, как к вам обращаться'; return; }
  if (phone.length < 10) { $('#b-phone').classList.add('error'); $('#b-error').textContent = 'Проверьте номер телефона'; return; }

  const dayText = state.day.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'long' });
  const master = state.master === MASTERS[0] ? 'свободный мастер' : 'мастер ' + state.master;
  $('#b-summary').innerHTML = `${name}, ждём вас ${dayText} в ${state.time}.<br>${bService.value}, ${master}. Итого: ${rub(finalPrice())}${bPromo.checked ? ' со скидкой 20%' : ''}.<br>Администратор напомнит о записи за день.`;
  bookModal.classList.add('done');
  $('#book-form').reset();
  state.time = null;
});

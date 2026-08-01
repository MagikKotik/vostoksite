/* BookFlow — logique du prototype (navigation entre écrans) */

const coverUrl = b => `assets/covers/${b.id}.png`;
const heroUrl  = id => `assets/hero-${id}.png`;

/* Applique une image de fond avec fallback couleur+titre si l'image manque */
function setCover(el, book, withText){
  el.style.backgroundColor = book.accent;
  const img = new Image();
  img.onload = () => { el.style.backgroundImage = `url(${coverUrl(book)})`; };
  img.onerror = () => {
    if (withText){
      el.innerHTML =
        `<div class="card__fallback">
           <div class="t">${book.title}</div>
           <div class="a">${book.author}</div>
         </div>`;
    }
  };
  img.src = coverUrl(book);
}

/* ---------- Construction des rangées ---------- */
function makeCard(book, opts={}){
  const card = document.createElement('div');
  card.className = 'card';
  const cover = document.createElement('div');
  cover.className = 'card__cover';
  setCover(cover, book, true);

  if (opts.badge && book.badge && book.badge !== 'Reprendre')
    cover.innerHTML += `<div class="card__badge">${book.badge}</div>`;
  if (opts.top10)
    cover.insertAdjacentHTML('afterbegin', `<div class="card__top10">TOP<br>10</div>`);
  if (opts.progress && typeof book.progress === 'number')
    cover.innerHTML += `<div class="card__progress"><span style="width:${Math.round(book.progress*100)}%"></span></div>`;

  card.appendChild(cover);
  card.addEventListener('click', () => openDetail(book.id));
  return card;
}

function buildRows(){
  const wrap = document.getElementById('rows');
  wrap.innerHTML = '';
  ROWS.forEach(rowDef => {
    const list = rowDef.ids
      ? rowDef.ids.map(byId)
      : BOOKS.filter(rowDef.filter);
    if (!list.length) return;

    const isContinue = rowDef.title.startsWith('Reprendre');
    const row = document.createElement('div');
    row.className = 'row' + (isContinue ? ' row--continue' : '');
    row.innerHTML = `<div class="row__title">${rowDef.title}</div>`;
    const track = document.createElement('div');
    track.className = 'row__track';
    list.forEach(b => track.appendChild(makeCard(b, {
      badge:true, top10:rowDef.top10, progress:isContinue
    })));
    row.appendChild(track);
    wrap.appendChild(row);
  });
}

/* ---------- Hero ---------- */
function buildHero(){
  const b = byId(HERO_ID);
  const img = document.getElementById('hero-img');
  img.style.backgroundColor = b.accent;
  const probe = new Image();
  probe.onload = () => img.style.backgroundImage = `url(${heroUrl(HERO_ID)})`;
  probe.onerror = () => {
    const alt = new Image();
    alt.onload = () => img.style.backgroundImage = `url(${coverUrl(b)})`;
    alt.src = coverUrl(b);
  };
  probe.src = heroUrl(HERO_ID);

  document.getElementById('hero-title').textContent = b.title;
  document.getElementById('hero-meta').innerHTML =
    `<b>${b.label || 'Domaine public'}</b> <span class="dot">•</span> ${b.author} <span class="dot">•</span> ${b.year} <span class="dot">•</span> ${b.pages} pages`;
  document.getElementById('hero-play').onclick = () => { currentBook = b; openPlayer(); };
  document.getElementById('hero-info').onclick = () => openDetail(b.id);
}

/* ---------- Navigation entre vues ---------- */
function show(viewId){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
  document.getElementById(viewId).classList.add('is-active');
}

let currentBook = null;
let downloadState = {}; // id -> 'ready'

function openDetail(id){
  const b = byId(id);
  currentBook = b;
  document.getElementById('detail-scroll').scrollTop = 0;

  setCover(document.getElementById('detail-cover'), b, false);
  const back = document.getElementById('detail-backdrop');
  back.style.backgroundColor = b.accent;
  const probe = new Image();
  probe.onload = () => back.style.backgroundImage = `url(${coverUrl(b)})`;
  probe.src = coverUrl(b);

  document.getElementById('detail-title').textContent = b.title;
  document.getElementById('detail-sub').innerHTML =
    `${b.year} <span class="pill">${b.rating}</span> <span class="pill">${b.pages} p.</span> <span class="pill">${b.lang}</span>`;
  document.getElementById('detail-tags').innerHTML =
    `<span class="tag">${b.author}</span><span class="tag">${b.label || 'Domaine public'}</span><span class="tag">${b.publisher}</span>`;
  document.getElementById('detail-desc').textContent = b.description;

  document.getElementById('detail-grid').innerHTML = `
    <div><div class="k">Auteur</div><div class="v">${b.author}</div></div>
    <div><div class="k">Publié en</div><div class="v">${b.year < 0 ? Math.abs(b.year)+' av. J.-C.' : b.year}</div></div>
    <div><div class="k">Éditeur</div><div class="v">${b.publisher}</div></div>
    <div><div class="k">Pages</div><div class="v">${b.pages}</div></div>
    <div><div class="k">Langue</div><div class="v">${b.lang}</div></div>
    <div><div class="k">Format</div><div class="v">BookFlow JSON</div></div>`;

  // "Du même univers"
  const more = document.getElementById('detail-more');
  more.innerHTML = '';
  BOOKS.filter(x => x.id !== b.id && x.categories.some(c => b.categories.includes(c)))
       .slice(0,6)
       .forEach(x => more.appendChild(makeCard(x, {badge:true})));

  updateCta();
  show('view-detail');
}

function updateCta(){
  const cta   = document.getElementById('detail-cta');
  const label = document.getElementById('detail-cta-label');
  const ready = downloadState[currentBook.id] === 'ready';
  cta.classList.toggle('btn--ready', ready);
  cta.querySelector('svg path').setAttribute('d',
    ready ? 'M8 5v14l11-7z' : 'M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z');
  label.textContent = ready ? 'Lire' : 'Télécharger';
  cta.onclick = ready ? openPlayer : startDownload;
}

function startDownload(){
  const label = document.getElementById('detail-cta-label');
  const cta = document.getElementById('detail-cta');
  cta.onclick = null;
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random()*22 + 8;
    if (p >= 100){ p = 100; clearInterval(iv);
      downloadState[currentBook.id] = 'ready';
      updateCta();
    } else {
      label.textContent = `Téléchargement… ${Math.round(p)}%`;
    }
  }, 220);
}

/* ---------- Player (lecteur reader.html intégré, cadre en paysage) ---------- */
function openPlayer(){
  const b = currentBook || byId(HERO_ID);

  // (Re)charge le lecteur à neuf dans l'iframe
  const frame = document.getElementById('player-frame');
  const readerSrc = 'reader.html?embed=1&v=5';
  if (frame.getAttribute('src') !== readerSrc) frame.src = readerSrc;
  else if (frame.contentWindow) frame.contentWindow.location.reload();

  // Jaquette qui remplit l'écran jusqu'au premier tap, puis révèle le lecteur
  const cover = document.getElementById('reading-cover');
  cover.classList.remove('dismissed');
  cover.hidden = true;
  const probe = new Image();
  probe.onload = () => { cover.src = coverUrl(b); cover.hidden = false; };
  probe.src = coverUrl(b);
  cover.onclick = () => cover.classList.add('dismissed');   // 1er tap : la jaquette s'efface → lecteur

  document.querySelector('.device').classList.add('landscape'); // cadre → paysage (« tél. tourné »)
  show('view-player');
}
document.getElementById('player-back').onclick = () => {
  document.querySelector('.device').classList.remove('landscape');
  show('view-detail');
};
document.getElementById('detail-back').onclick = () => show('view-home');

/* Topbar : fond plein au scroll */
document.getElementById('home-scroll').addEventListener('scroll', e => {
  document.getElementById('topbar').classList.toggle('solid', e.target.scrollTop > 40);
});

/* ---------- Init ---------- */
buildHero();
buildRows();
show('view-home');

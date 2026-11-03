/* Formation — lecteur de module. Lit window.MODULE (data.js) et construit :
   la route (chapitres = arrêts), la scène courante, la barre du bas avec le
   commentaire de la formatrice. Navigation : route, flèches clavier, #chapitre-ecran. */
(function () {
  "use strict";
  var M = window.MODULE;
  if (!M) return;

  var ICONS = {
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    ear: '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>',
    message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    play: '<polygon points="7 4 20 12 7 20 7 4"/>',
    pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-15.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    euro: '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
    bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    tag: '<path d="M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>'
  };
  function ico(name, label) {
    return '<svg class="ico" viewBox="0 0 24 24"' + (label ? ' role="img" aria-label="' + label + '"' : ' aria-hidden="true"') + '>' + (ICONS[name] || "") + "</svg>";
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  /* ---------- État ---------- */
  var KEY = "formation-psdm-m" + M.numero;
  var flat = [];
  M.chapitres.forEach(function (c, ci) { c.ecrans.forEach(function (e, ei) { flat.push({ ci: ci, ei: ei }); }); });
  var seen = {};
  try { seen = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { seen = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(seen)); } catch (e) {} }
  var pos = 0;

  function fromHash() {
    var h = location.hash.replace("#", "").split("-");
    for (var i = 0; i < flat.length; i++) {
      var c = M.chapitres[flat[i].ci];
      if (c.id === h[0] && String(flat[i].ei + 1) === (h[1] || "1")) return i;
    }
    return -1;
  }

  /* ---------- Gabarit ---------- */
  var root = document.getElementById("app");
  var F = M.formatrice;
  var avatar = F.photo ? '<img class="avatar" src="' + F.photo + '" alt="">' : '<span class="avatar" aria-hidden="true">' + F.initiales + "</span>";
  root.innerHTML =
    '<a class="skip" href="#scene">Aller au contenu</a>' +
    '<header class="topbar">' +
      '<a class="topbar__brand" href="../../"><b>Module ' + M.numero + " · " + esc(M.titreCourt) + "</b><span>" + esc(M.formation) + "</span></a>" +
      '<div class="topbar__spacer"></div>' +
      '<div class="topbar__progress"><svg class="ring" viewBox="0 0 36 36" aria-hidden="true"><circle class="ring__bg" cx="18" cy="18" r="15"/><circle class="ring__fg" cx="18" cy="18" r="15" transform="rotate(-90 18 18)" stroke-dasharray="94.25" stroke-dashoffset="94.25"/></svg><span id="pct">0 %</span></div>' +
      '<a class="iconbtn" href="../../" aria-label="Tous les modules">' + ico("grid") + "</a>" +
      '<button class="iconbtn" id="theme" type="button" aria-label="Changer de thème">' + ico("moon") + "</button>" +
    "</header>" +
    '<nav class="route" aria-label="Chapitres du module"><div class="route__track" style="--n:' + M.chapitres.length + '">' +
      '<span class="route__line"></span><span class="route__done"></span>' +
      M.chapitres.map(function (c, i) {
        return '<button class="stop" type="button" data-ci="' + i + '"><span class="stop__dot">' + (i === 0 ? ico("flag") : i === M.chapitres.length - 1 ? ico("check") : i) + '</span><span class="stop__label">' + esc(c.court) + "</span></button>";
      }).join("") +
    "</div></nav>" +
    '<main class="stage" id="scene" tabindex="-1"></main>' +
    '<div class="panel" id="panel" hidden role="dialog" aria-labelledby="panel-t"></div>' +
    '<div class="dock">' +
      '<button class="voice" id="voice" type="button" aria-haspopup="dialog" aria-controls="panel">' + avatar +
        '<span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
        '<span class="voice__txt"><b>' + esc(F.nom.split(" ")[0]) + " · " + esc(F.role.split(" ")[0]) + '</b><span id="voice-s"></span></span></button>' +
      '<div class="dock__where" aria-live="polite"><span id="where"></span><div class="dots" id="dots" aria-hidden="true"></div></div>' +
      '<div class="dock__nav"><button class="navbtn" id="prev" type="button" aria-label="Écran précédent">' + ico("left") + '</button><button class="navbtn navbtn--next" id="next" type="button" aria-label="Écran suivant">' + ico("right") + "</button></div>" +
    "</div>";

  var stage = document.getElementById("scene");
  var panel = document.getElementById("panel");
  var audio = new Audio();

  /* ---------- Rendu des écrans ---------- */
  function retenir(e) { return (e.retenir ? '<p class="retenir"><b>À retenir</b><span>' + esc(e.retenir) + "</span></p>" : "") + (e.note ? '<p class="note">' + esc(e.note) + "</p>" : ""); }
  function bullets(list) { return list ? '<ul class="bullets">' + list.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : ""; }
  function head(e, h1) { return '<p class="kicker">' + esc(e.kicker) + "</p>" + (h1 ? "<h1>" : '<h2 class="title">') + esc(e.titre) + (h1 ? "</h1>" : "</h2>"); }
  function figure(e) { return e.image ? '<figure class="figure"><img src="' + e.image + '" alt="' + esc(e.alt || "") + '" width="1024" height="640"></figure>' : ""; }

  var R = {
    intro: function (e) {
      return '<div class="scene scene--split"><div>' + head(e, true) +
        '<p class="lead">' + esc(e.corps) + "</p>" +
        '<div class="trainer">' + avatar + "<div><b>" + esc(F.nom) + "</b><span>" + esc(F.role.charAt(0).toUpperCase() + F.role.slice(1)) + ", vous accompagne tout au long du module</span></div></div>" +
        '<h2 class="kicker">Objectifs</h2><ul class="objectives">' + e.objectifs.map(function (o) { return "<li>" + ico("check") + "<span>" + esc(o) + "</span></li>"; }).join("") + "</ul>" +
        '<p class="how">Avancez avec <kbd>←</kbd> <kbd>→</kbd> ou en touchant un arrêt de la route.</p>' +
        '</div><div class="scene__visual">' + figure(e) + "</div></div>";
    },
    texte: function (e) {
      var body = (e.corps ? '<div class="prose">' + e.corps.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" : "") + bullets(e.puces) + retenir(e);
      return split(e, body);
    },
    cartes: function (e) {
      var body = (e.intro ? '<p class="lead">' + esc(e.intro) + "</p>" : "") + '<div class="cards">' + e.cartes.map(function (c) {
        return '<article class="card"><div class="card__icon">' + ico(c.icone) + "</div><h3>" + esc(c.titre) + "</h3><p>" + esc(c.texte) + "</p></article>";
      }).join("") + "</div>" + retenir(e);
      return '<div class="scene"><div>' + head(e) + body + "</div></div>";
    },
    duo: function (e) {
      var body = '<div class="duo">' + [e.gauche, e.droite].map(function (d) {
        return '<article class="card"><span class="duo__tag">' + esc(d.etiquette) + "</span><h3>" + esc(d.titre) + "</h3><p>" + esc(d.texte) + "</p></article>";
      }).join("") + "</div>" + bullets(e.puces) + retenir(e);
      return split(e, body);
    },
    etapes: function (e) {
      var body = (e.intro ? '<p class="lead">' + esc(e.intro) + "</p>" : "") + '<ol class="steps">' + e.etapes.map(function (s) {
        return "<li><h3>" + esc(s.titre) + "</h3><p>" + esc(s.texte) + "</p></li>";
      }).join("") + "</ol>" + retenir(e);
      return split(e, body);
    },
    qualites: function (e) {
      return split(e, '<ul class="chips">' + e.qualites.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul>" + bullets(e.puces) + retenir(e));
    },
    chaine: function (e) {
      return split(e, '<ol class="chain">' + e.maillons.map(function (m) { return "<li><b>" + esc(m.titre) + "</b><span>" + esc(m.texte) + "</span></li>"; }).join("") + "</ol>" + retenir(e));
    },
    proxemie: function (e) {
      var rr = [44, 84, 124, 164];
      var svg = '<svg class="prox__svg" viewBox="0 0 340 340" role="img" aria-label="Quatre cercles concentriques autour d\'une personne : distances intime, personnelle, sociale et publique.">' +
        rr.slice().reverse().map(function (r, k) { var i = 3 - k; return '<circle class="zone" data-z="' + i + '" cx="170" cy="170" r="' + r + '"/>'; }).join("") +
        e.zones.map(function (z, i) { return '<text data-z="' + i + '" x="170" y="' + (170 - rr[i] + 16) + '" text-anchor="middle">' + esc(z.nom) + "</text>"; }).join("") +
        '<circle class="who" cx="170" cy="160" r="9"/><path class="who" d="M154 192c0-11 7-18 16-18s16 7 16 18z"/></svg>';
      var list = '<div class="prox__list">' + e.zones.map(function (z, i) {
        return '<button class="zbtn" type="button" data-z="' + i + '" aria-pressed="' + (i === 0) + '"><b>' + esc(z.nom) + "</b><small>" + esc(z.etendue) + "</small><p>" + esc(z.texte) + "</p></button>";
      }).join("") + "</div>";
      return '<div class="scene"><div>' + head(e) + '<div class="prox">' + svg + "<div>" + list + '<p class="note">' + esc(e.note) + "</p></div></div></div></div>";
    },
    affiches: function (e) {
      return '<div class="scene"><div>' + head(e) + '<div class="posters">' + e.affiches.map(function (a) {
        return '<figure class="poster"><img src="' + a.image + '" alt="' + esc(a.alt) + '" width="768" height="1024" loading="lazy"><figcaption>' + esc(a.texte) + "</figcaption></figure>";
      }).join("") + '</div>' + (e.note ? '<p class="note">' + esc(e.note) + '</p>' : '') + "</div></div>";
    },
    quiz: function (e) {
      return '<div class="scene"><div>' + head(e) + '<div class="quiz">' + e.questions.map(function (q, qi) {
        return '<fieldset class="q" data-q="' + qi + '"><legend><span>' + (qi + 1) + "</span>" + esc(q.q) + "</legend>" +
          q.choix.map(function (c, ci) { return '<button class="choice" type="button" data-c="' + ci + '">' + esc(c) + "</button>"; }).join("") +
          '<p class="q__fb" aria-live="polite"></p></fieldset>';
      }).join("") + '<p class="score" id="score" aria-live="polite"></p></div></div></div>';
    },
    memo: function (e) {
      return '<div class="scene"><div class="memo"><p class="kicker">' + esc(e.kicker) + "</p><h1>" + esc(e.titre) + "</h1><p class=\"lead\">Module " + M.numero + " · " + esc(M.titre) + "</p>" +
        "<ol>" + e.points.map(function (p) { return "<li><span>" + esc(p) + "</span></li>"; }).join("") + "</ol>" +
        '<div class="memo__sign"><span>' + esc(F.nom) + ", " + esc(F.role) + '</span><button class="btn no-print" type="button" id="print">' + ico("printer") + "Imprimer la fiche</button></div></div></div>";
    }
  };
  function split(e, body) {
    if (!e.image) return '<div class="scene"><div>' + head(e) + body + "</div></div>";
    return '<div class="scene scene--split"><div>' + head(e) + body + '</div><div class="scene__visual">' + figure(e) + "</div></div>";
  }

  /* ---------- Affichage ---------- */
  function show(i, focus) {
    pos = Math.max(0, Math.min(flat.length - 1, i));
    var f = flat[pos], c = M.chapitres[f.ci], e = c.ecrans[f.ei];
    seen[c.id + "-" + f.ei] = 1; save();
    stopAudio(); closePanel();

    stage.innerHTML = '<div class="chapter-head"><span class="pill">Arrêt ' + (f.ci + 1) + " / " + M.chapitres.length + "</span><b>" + esc(c.titre) + "</b></div>" + (R[e.type] || R.texte)(e);
    wire(e);
    history.replaceState(null, "", "#" + c.id + "-" + (f.ei + 1));
    document.title = c.court + " · Module " + M.numero + " · Formation PSDM";

    /* route */
    var stops = root.querySelectorAll(".stop");
    stops.forEach(function (s, si) {
      var ch = M.chapitres[si];
      var all = ch.ecrans.every(function (_, k) { return seen[ch.id + "-" + k]; });
      s.toggleAttribute("aria-current", false);
      if (si === f.ci) s.setAttribute("aria-current", "step");
      s.dataset.state = all ? "done" : "";
      s.querySelector(".stop__dot").innerHTML = si === f.ci ? ico("truck") : si === 0 ? ico("flag") : si === M.chapitres.length - 1 ? ico("check") : si;
      s.setAttribute("aria-label", ch.court + (all ? ", terminé" : "") + (si === f.ci ? ", en cours" : ""));
    });
    var n = M.chapitres.length;
    root.querySelector(".route__done").style.width = "calc((100% - 100% / " + n + ") * " + (f.ci / (n - 1)) + ")";
    var cur = stops[f.ci];
    var route = root.querySelector(".route");
    if (route.scrollWidth > route.clientWidth) route.scrollTo({ left: cur.offsetLeft - route.clientWidth / 2 + cur.offsetWidth / 2, behavior: "smooth" });

    /* progression */
    var done = Object.keys(seen).length, pct = Math.round(done / flat.length * 100);
    root.querySelector("#pct").textContent = pct + " %";
    root.querySelector(".ring__fg").setAttribute("stroke-dashoffset", String(94.25 * (1 - done / flat.length)));

    /* barre du bas */
    root.querySelector("#where").innerHTML = '<span class="where-label">' + esc(c.court) + " · </span>Écran " + (f.ei + 1) + " sur " + c.ecrans.length;
    root.querySelector("#dots").innerHTML = c.ecrans.map(function (_, k) { return k === f.ei ? "<i data-on></i>" : "<i></i>"; }).join("");
    root.querySelector("#prev").disabled = pos === 0;
    root.querySelector("#next").disabled = pos === flat.length - 1;
    var com = e.commentaire || {};
    root.querySelector("#voice-s").textContent = com.audio ? "Écouter son commentaire" : "Commentaire audio à venir";
    root.querySelector("#voice").setAttribute("aria-label", "Commentaire de " + F.nom + (com.audio ? "" : ", audio à venir, voir les pistes"));

    window.scrollTo({ top: 0, behavior: "smooth" });
    if (focus) stage.focus({ preventScroll: true });
  }

  /* ---------- Interactions propres à chaque type ---------- */
  function wire(e) {
    if (e.type === "proxemie") {
      var setZ = function (z) {
        stage.querySelectorAll(".zbtn").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.z === String(z))); });
        stage.querySelectorAll("circle.zone, .prox__svg text").forEach(function (c) { c.dataset.on = c.dataset.z === String(z) ? "1" : ""; });
      };
      stage.querySelectorAll(".zbtn, circle.zone").forEach(function (el) { el.addEventListener("click", function () { setZ(el.dataset.z); }); });
      setZ(0);
    }
    if (e.type === "quiz") {
      var answered = 0, good = 0;
      stage.querySelectorAll(".q").forEach(function (fs) {
        var q = e.questions[+fs.dataset.q];
        fs.querySelectorAll(".choice").forEach(function (b) {
          b.addEventListener("click", function () {
            var ok = +b.dataset.c === q.bonne;
            fs.querySelectorAll(".choice").forEach(function (x) {
              x.disabled = true;
              if (+x.dataset.c === q.bonne) { x.dataset.res = "ok"; x.insertAdjacentHTML("afterbegin", ico("check", "Bonne réponse")); }
            });
            if (!ok) { b.dataset.res = "ko"; b.insertAdjacentHTML("afterbegin", ico("x", "Votre réponse")); }
            var fb = fs.querySelector(".q__fb");
            fb.innerHTML = "<b>" + (ok ? "Exact. " : "Pas tout à fait. ") + "</b>" + esc(q.explication);
            fb.setAttribute("data-show", "");
            answered++; if (ok) good++;
            if (answered === e.questions.length) stage.querySelector("#score").textContent = good + " bonne" + (good > 1 ? "s" : "") + " réponse" + (good > 1 ? "s" : "") + " sur " + e.questions.length + ".";
          });
        });
      });
    }
    if (e.type === "memo") stage.querySelector("#print").addEventListener("click", function () { window.print(); });
  }

  /* ---------- Commentaire de la formatrice ---------- */
  function current() { var f = flat[pos]; return M.chapitres[f.ci].ecrans[f.ei]; }
  function stopAudio() { audio.pause(); root.querySelector("#voice").removeAttribute("data-playing"); }
  function closePanel() { panel.hidden = true; root.querySelector("#voice").setAttribute("aria-expanded", "false"); }
  function openPanel() {
    var com = current().commentaire || {};
    var h = '<button class="panel__close" type="button" aria-label="Fermer">' + ico("x") + "</button>" +
      '<h2 id="panel-t">Le commentaire de ' + esc(F.nom) + "</h2>";
    if (com.audio) {
      h += '<p class="panel__sub">' + esc(F.role.charAt(0).toUpperCase() + F.role.slice(1)) + '</p><div class="player">' +
        '<div class="player__bar"><i id="pbar"></i></div><div class="player__row">' +
        '<button class="btn" type="button" id="pplay">' + ico("play") + "Écouter</button>" +
        '<button class="btn btn--ghost" type="button" id="prate">1×</button><span id="ptime"></span></div>' +
        (com.transcription ? '<details><summary>Transcription</summary><p>' + esc(com.transcription) + "</p></details>" : "") + "</div>";
    } else {
      h += '<p class="panel__sub">Audio à venir. Pistes de commentaire pour cet écran : ce qu\'elle pourrait raconter, sans relire l\'écran.</p>' +
        "<ul>" + (com.pistes || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
    }
    panel.innerHTML = h;
    panel.hidden = false;
    root.querySelector("#voice").setAttribute("aria-expanded", "true");
    panel.querySelector(".panel__close").addEventListener("click", closePanel);
    if (com.audio) wirePlayer(com.audio);
    panel.querySelector(".panel__close").focus();
  }
  function wirePlayer(src) {
    if (audio.getAttribute("src") !== src) audio.src = src;
    var btn = panel.querySelector("#pplay"), rate = panel.querySelector("#prate");
    var rates = [1, 1.25, 1.5, 0.75];
    btn.addEventListener("click", function () {
      if (audio.paused) { audio.play(); root.querySelector("#voice").setAttribute("data-playing", ""); btn.innerHTML = ico("pause") + "Pause"; }
      else { stopAudio(); btn.innerHTML = ico("play") + "Écouter"; }
    });
    rate.addEventListener("click", function () {
      var r = rates[(rates.indexOf(audio.playbackRate) + 1) % rates.length]; audio.playbackRate = r; rate.textContent = r + "×";
    });
    audio.ontimeupdate = function () {
      var bar = panel.querySelector("#pbar"); if (!bar || !audio.duration) return;
      bar.style.width = (audio.currentTime / audio.duration * 100) + "%";
      panel.querySelector("#ptime").textContent = Math.floor(audio.currentTime) + " s / " + Math.floor(audio.duration) + " s";
    };
    audio.onended = function () { stopAudio(); btn.innerHTML = ico("play") + "Réécouter"; };
  }

  /* ---------- Événements ---------- */
  root.querySelectorAll(".stop").forEach(function (s) {
    s.addEventListener("click", function () {
      var ci = +s.dataset.ci;
      for (var i = 0; i < flat.length; i++) if (flat[i].ci === ci) { show(i, true); break; }
    });
  });
  root.querySelector("#prev").addEventListener("click", function () { show(pos - 1); });
  root.querySelector("#next").addEventListener("click", function () { show(pos + 1); });
  root.querySelector("#voice").addEventListener("click", function () { panel.hidden ? openPanel() : closePanel(); });
  document.addEventListener("keydown", function (ev) {
    if (ev.target.closest && ev.target.closest("input, textarea, select")) return;
    if (ev.key === "ArrowRight") show(pos + 1);
    else if (ev.key === "ArrowLeft") show(pos - 1);
    else if (ev.key === "Escape" && !panel.hidden) { closePanel(); root.querySelector("#voice").focus(); }
  });
  window.addEventListener("hashchange", function () { var i = fromHash(); if (i >= 0 && i !== pos) show(i); });

  /* thème */
  var themeBtn = root.querySelector("#theme");
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
    var dark = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    themeBtn.innerHTML = ico(dark ? "sun" : "moon");
    themeBtn.setAttribute("aria-label", dark ? "Passer en thème clair" : "Passer en thème sombre");
  }
  var theme = null;
  try { theme = localStorage.getItem("formation-theme"); } catch (e) {}
  applyTheme(theme);
  themeBtn.addEventListener("click", function () {
    var dark = document.documentElement.getAttribute("data-theme") === "dark" || (!document.documentElement.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var t = dark ? "light" : "dark";
    try { localStorage.setItem("formation-theme", t); } catch (e) {}
    applyTheme(t);
  });

  var start = fromHash();
  show(start >= 0 ? start : 0);
})();

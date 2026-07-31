/* BookFlow — jeu de données prototype
   20 œuvres du domaine public. Métadonnées de style Google Books (fr).
   Les couvertures sont générées par nous (voir assets/covers/). */

const BOOKS = [
  {
    id: "providence",
    title: "Providence",
    author: "Yan Rubydur",
    year: 2026,
    publisher: "Édition originale",
    pages: 195,
    lang: "Français",
    rating: "16+",
    badge: "Nouveau",
    label: "Roman",
    categories: ["sf", "romans", "top"],
    accent: "#b3801f",
    description:
      "Un monde où plus personne ne manque de rien : l'intelligence Providence veille sur chacun et comble les désirs avant même qu'ils n'éclosent. Ingénieur de contrôle, Eric Burns découvre un jour, sur une carte-mère, un tracé qu'aucun esprit humain n'aurait pu concevoir. Loin de la Ville, Sandrine Carly exhume d'un vieux serveur une écriture oubliée. Ce qu'ils vont comprendre, la douceur du monde l'a payé au prix de sa liberté. Une dystopie vertigineuse sur l'intelligence artificielle et le confort qui endort. — Écrit avec une IA. Contre les IA."
  },
  {
    id: "dracula",
    title: "Dracula",
    author: "Bram Stoker",
    year: 1897,
    publisher: "Archibald Constable",
    pages: 418,
    lang: "Français",
    rating: "16+",
    badge: "Reprendre",
    progress: 0.34,
    categories: ["gothique", "romans"],
    accent: "#8a1220",
    description:
      "Le jeune clerc Jonathan Harker se rend en Transylvanie pour conclure une vente avec un mystérieux comte. Il comprend trop tard qu'il est prisonnier d'un mort-vivant décidé à gagner Londres. Un chef-d'œuvre épistolaire de l'épouvante victorienne."
  },
  {
    id: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    publisher: "Lackington & Co.",
    pages: 280,
    lang: "Français",
    rating: "16+",
    badge: "Culte",
    categories: ["gothique", "sf"],
    accent: "#2f5d3a",
    description:
      "Victor Frankenstein perce le secret de la vie et donne le jour à une créature qu'il abandonne aussitôt. Rejeté par tous, l'être réclame vengeance. Une méditation fondatrice sur la science, la solitude et la responsabilité du créateur."
  },
  {
    id: "jekyll",
    title: "Docteur Jekyll et Mister Hyde",
    author: "Robert Louis Stevenson",
    year: 1886,
    publisher: "Longmans, Green & Co.",
    pages: 141,
    lang: "Français",
    rating: "12+",
    categories: ["gothique"],
    accent: "#3a3550",
    description:
      "Un notaire enquête sur l'étrange emprise qu'un individu répugnant, M. Hyde, exerce sur l'honorable docteur Jekyll. Derrière le mystère se cache l'une des plus troublantes explorations du double et du mal enfoui en chacun."
  },
  {
    id: "hurlevent",
    title: "Les Hauts de Hurlevent",
    author: "Emily Brontë",
    year: 1847,
    publisher: "Thomas Cautley Newby",
    pages: 416,
    lang: "Français",
    rating: "12+",
    categories: ["gothique", "romans"],
    accent: "#4a3b2f",
    description:
      "Sur les landes battues par le vent du Yorkshire, l'amour dévastateur de Heathcliff et Catherine traverse deux générations. Un roman d'une intensité sauvage, porté par la passion, la vengeance et les fantômes du passé."
  },
  {
    id: "dorian",
    title: "Le Portrait de Dorian Gray",
    author: "Oscar Wilde",
    year: 1890,
    publisher: "Lippincott's Magazine",
    pages: 254,
    lang: "Français",
    rating: "12+",
    categories: ["gothique", "romans"],
    accent: "#6d5210",
    description:
      "Un jeune homme d'une beauté parfaite fait le vœu que son portrait vieillisse à sa place. Tandis qu'il s'abîme dans tous les plaisirs, la toile porte seule le poids de ses vices. Le grand roman de Wilde sur l'esthétisme et la corruption."
  },
  {
    id: "vingt-mille",
    title: "Vingt mille lieues sous les mers",
    author: "Jules Verne",
    year: 1870,
    publisher: "Pierre-Jules Hetzel",
    pages: 448,
    lang: "Français",
    rating: "Tous",
    badge: "Reprendre",
    progress: 0.12,
    categories: ["aventures", "sf"],
    accent: "#0f4c5c",
    description:
      "À bord du Nautilus, le capitaine Nemo entraîne le professeur Aronnax dans un tour du monde sous-marin. Des forêts de corail aux abysses, un voyage extraordinaire mêlant merveille scientifique et révolte contre les hommes."
  },
  {
    id: "ile-tresor",
    title: "L'Île au trésor",
    author: "Robert Louis Stevenson",
    year: 1883,
    publisher: "Cassell & Co.",
    pages: 292,
    lang: "Français",
    rating: "Tous",
    categories: ["aventures"],
    accent: "#175c3a",
    description:
      "Le jeune Jim Hawkins découvre la carte d'un trésor de pirates et embarque pour une île lointaine. À bord se cache le cuisinier Long John Silver, dont il faudra déjouer les ruses. Le roman qui a inventé l'imaginaire de la piraterie."
  },
  {
    id: "monte-cristo",
    title: "Le Comte de Monte-Cristo",
    author: "Alexandre Dumas",
    year: 1846,
    publisher: "Pétion",
    pages: 1276,
    lang: "Français",
    rating: "12+",
    categories: ["aventures", "romans"],
    accent: "#5a2233",
    description:
      "Trahi et emprisonné le jour de ses noces, Edmond Dantès s'évade après quatorze ans et découvre un fabuleux trésor. Devenu le comte de Monte-Cristo, il revient châtier ceux qui l'ont perdu. Le roman de la vengeance absolue."
  },
  {
    id: "sherlock",
    title: "Les Aventures de Sherlock Holmes",
    author: "Arthur Conan Doyle",
    year: 1892,
    publisher: "George Newnes",
    pages: 307,
    lang: "Français",
    rating: "Tous",
    badge: "Reprendre",
    progress: 0.67,
    categories: ["aventures", "top"],
    accent: "#3d4a52",
    description:
      "Douze enquêtes du plus célèbre détective de Baker Street, narrées par le fidèle docteur Watson. Déductions foudroyantes, brouillard londonien et énigmes impossibles : le recueil qui a fixé la légende de Sherlock Holmes."
  },
  {
    id: "moby-dick",
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
    publisher: "Harper & Brothers",
    pages: 635,
    lang: "Français",
    rating: "12+",
    categories: ["aventures", "romans"],
    accent: "#1f3a4d",
    description:
      "Le capitaine Achab a juré la perte de Moby Dick, le cachalot blanc qui lui a arraché une jambe. À bord du Péquod, l'obsession d'un homme entraîne tout un équipage vers l'abîme. Une épopée démesurée sur la mer et la folie."
  },
  {
    id: "odyssee",
    title: "L'Odyssée",
    author: "Homère",
    year: -800,
    publisher: "Domaine public",
    pages: 541,
    lang: "Français",
    rating: "Tous",
    categories: ["aventures"],
    accent: "#1d5a6e",
    description:
      "De retour de Troie, Ulysse affronte dix années d'épreuves pour regagner Ithaque : le Cyclope, les Sirènes, la magicienne Circé. Le plus ancien récit d'aventures de l'Occident, chant du courage et de la ruse."
  },
  {
    id: "quichotte",
    title: "Don Quichotte",
    author: "Miguel de Cervantès",
    year: 1605,
    publisher: "Francisco de Robles",
    pages: 1072,
    lang: "Français",
    rating: "Tous",
    categories: ["aventures", "romans"],
    accent: "#8a5a1a",
    description:
      "Un hidalgo enfiévré de romans de chevalerie se prend pour un preux et part sur les routes d'Espagne avec l'écuyer Sancho Pança. Il charge des moulins qu'il croit géants. Le premier roman moderne, drôle et bouleversant."
  },
  {
    id: "guerre-mondes",
    title: "La Guerre des mondes",
    author: "H. G. Wells",
    year: 1898,
    publisher: "William Heinemann",
    pages: 287,
    lang: "Français",
    rating: "12+",
    badge: "SF",
    categories: ["sf"],
    accent: "#5c2e1a",
    description:
      "Des cylindres tombent du ciel anglais : les Martiens débarquent avec leurs machines de guerre. Face à l'invasion, l'humanité découvre sa fragilité. Le récit qui a inventé l'apocalypse extraterrestre."
  },
  {
    id: "machine-temps",
    title: "La Machine à explorer le temps",
    author: "H. G. Wells",
    year: 1895,
    publisher: "William Heinemann",
    pages: 118,
    lang: "Français",
    rating: "Tous",
    categories: ["sf"],
    accent: "#2a4a55",
    description:
      "Un inventeur construit une machine et se projette en l'an 802 701. Il y trouve une humanité scindée en deux espèces, les frêles Éloïs et les Morlocks souterrains. Une fable visionnaire sur le destin de notre civilisation."
  },
  {
    id: "alice",
    title: "Alice au pays des merveilles",
    author: "Lewis Carroll",
    year: 1865,
    publisher: "Macmillan",
    pages: 192,
    lang: "Français",
    rating: "Tous",
    badge: "Top 10",
    categories: ["romans", "top"],
    accent: "#6a1a4a",
    description:
      "En suivant un lapin blanc pressé, Alice tombe dans un terrier et bascule dans un monde absurde peuplé de chats grimaçants et de reines colériques. Le classique du nonsense qui n'a jamais cessé d'enchanter."
  },
  {
    id: "orgueil",
    title: "Orgueil et Préjugés",
    author: "Jane Austen",
    year: 1813,
    publisher: "T. Egerton",
    pages: 432,
    lang: "Français",
    rating: "Tous",
    categories: ["romans"],
    accent: "#4a5a2a",
    description:
      "L'esprit vif d'Elizabeth Bennet se heurte à la fierté du riche M. Darcy. Entre malentendus et amour-propre, une comédie de mœurs éblouissante sur le mariage et la société anglaise. Le grand roman de Jane Austen."
  },
  {
    id: "miserables",
    title: "Les Misérables",
    author: "Victor Hugo",
    year: 1862,
    publisher: "A. Lacroix, Verboeckhoven",
    pages: 1462,
    lang: "Français",
    rating: "12+",
    badge: "Top 10",
    categories: ["romans", "top"],
    accent: "#3a2e4a",
    description:
      "L'ancien forçat Jean Valjean cherche la rédemption tandis que l'inspecteur Javert le traque sans relâche. Des barricades de Paris aux misères du peuple, la fresque immense de Victor Hugo sur la justice et la grâce."
  },
  {
    id: "crime-chatiment",
    title: "Crime et Châtiment",
    author: "Fiodor Dostoïevski",
    year: 1866,
    publisher: "Le Messager russe",
    pages: 671,
    lang: "Français",
    rating: "16+",
    badge: "Reprendre",
    progress: 0.08,
    categories: ["romans"],
    accent: "#4d3320",
    description:
      "À Saint-Pétersbourg, l'étudiant Raskolnikov assassine une usurière pour éprouver une théorie. Rongé par la culpabilité, il glisse vers la folie. Le vertige psychologique et moral d'un des plus grands romans jamais écrits."
  },
  {
    id: "tenebres",
    title: "Au cœur des ténèbres",
    author: "Joseph Conrad",
    year: 1899,
    publisher: "Blackwood's Magazine",
    pages: 188,
    lang: "Français",
    rating: "16+",
    categories: ["romans"],
    accent: "#3d3a1a",
    description:
      "Le marin Marlow remonte un fleuve d'Afrique à la recherche de l'énigmatique Kurtz, agent devenu roi et démon. Un voyage hypnotique aux confins de la civilisation et de l'âme humaine."
  },
  {
    id: "huck",
    title: "Les Aventures de Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    publisher: "Chatto & Windus",
    pages: 366,
    lang: "Français",
    rating: "Tous",
    categories: ["aventures"],
    accent: "#5a4a1a",
    description:
      "Huck Finn fuit la civilisation et descend le Mississippi sur un radeau avec Jim, un esclave en fuite. Une odyssée américaine drôle et grave sur la liberté et la conscience, racontée d'une voix inoubliable."
  }
];

/* Rangées de l'accueil (façon Netflix). Chaque rangée pioche par catégorie. */
const ROWS = [
  { title: "Reprendre votre lecture", filter: b => typeof b.progress === "number" },
  { title: "Tendances en ce moment", ids: ["providence", "dracula", "monte-cristo", "sherlock", "vingt-mille", "miserables"], top10: true },
  { title: "Frissons gothiques", filter: b => b.categories.includes("gothique") },
  { title: "Grandes aventures", filter: b => b.categories.includes("aventures") },
  { title: "Science-fiction visionnaire", filter: b => b.categories.includes("sf") },
  { title: "Romans intemporels", filter: b => b.categories.includes("romans") }
];

const HERO_ID = "providence";

const byId = id => BOOKS.find(b => b.id === id);

/* Module 4 — données affichées par ../../assets/formation.js.
   Chaque écran : ce qui s'affiche + un commentaire de la formatrice
   (pistes pour le prototype ; audio + transcription dans la version finale). */
window.MODULE = {
  formation: "Formation PSDM · Garant professionnel de santé",
  numero: 4,
  titre: "Intervention auprès de la personne malade ou présentant une incapacité ou un handicap",
  titreCourt: "Intervenir au domicile",
  formatrice: { nom: "Stéphanie Plaisant", initiales: "SP", role: "formatrice PSDM", photo: "../../img/stephanie.webp" },
  version: "Prototype · 3 novembre 2026 · d'après le support corrigé du module 4",

  chapitres: [
    {
      id: "depart", court: "Départ", titre: "Avant de prendre la route",
      ecrans: [
        {
          type: "intro", kicker: "Module 4",
          titre: "Entrer chez quelqu'un, c'est entrer dans sa vie",
          corps: "Ce module suit le déroulé d'une visite à domicile : ce que la loi impose, la bonne distance, la bonne posture, puis la visite elle-même, pas à pas.",
          objectifs: [
            "Respecter l'intimité du patient et le cadre légal du domicile",
            "Adapter sa distance et sa posture à chaque personne",
            "Mener une visite à domicile du rendez-vous au départ",
            "Communiquer clairement et protéger les informations du patient"
          ],
          image: "img/ch1.webp", alt: "Une technicienne sonne à la porte d'une maison, sa mallette à la main.",
          commentaire: {
            pistes: ["Se présenter en deux phrases : son parcours, et pourquoi ce module compte sur le terrain.", "Raconter en une minute sa toute première visite à domicile."],
            audio: "audio/depart-1.mp3",
            transcription: "Bonjour, et bienvenue dans ce module. Moi, c'est Stéphanie, et je vais vous accompagner tout au long de ce parcours. Ce module, c'est sans doute celui qui vous servira le plus sur le terrain. Parce qu'au fond, notre métier, ce n'est pas seulement d'installer du matériel. C'est d'entrer chez quelqu'un, souvent à un moment difficile de sa vie. On va donc suivre une visite, du rendez-vous jusqu'au départ. Et à chaque étape, je vous donnerai les réflexes qui font la différence. Allez, on prend la route."
          }
        }
      ]
    },
    {
      id: "seuil", court: "Le seuil", titre: "Le seuil : le cadre et l'éthique",
      ecrans: [
        {
          type: "cartes", kicker: "Le cadre réglementaire",
          titre: "Chez le patient, la loi entre avec vous",
          cartes: [
            { icone: "lock", titre: "Secret professionnel", texte: "Art. 226-13 du Code pénal et art. L1110-4 du Code de la santé publique. Les codes de déontologie des professions de santé le rappellent aussi." },
            { icone: "shield", titre: "Confidentialité", texte: "Art. L1110-4 du Code de la santé publique : respect de la vie privée et du secret des informations. Pour un PSDM s'y ajoutent les règles professionnelles du décret n° 2006-1637." },
            { icone: "heart", titre: "Dignité", texte: "Art. L1110-2 du Code de la santé publique, issu de la loi du 4 mars 2002. Les lois Leonetti (2005) et Claeys-Leonetti (2016) précisent ce droit en fin de vie." }
          ],
          commentaire: { pistes: ["Un cas réel où le secret a été mis à l'épreuve chez un patient : un voisin curieux, un proche insistant…"], audio: "audio/seuil-1.mp3", transcription: "Quand vous franchissez la porte d'un patient, vous n'entrez pas seulement chez lui : vous entrez avec des obligations. Le secret professionnel, d'abord. Tout ce que vous voyez, entendez ou comprenez chez lui reste chez lui. Ça vaut pour son état de santé, mais aussi pour sa maison, sa famille, ses habitudes. La confidentialité, ensuite, et la dignité. Ce ne sont pas de grands principes abstraits : ce sont des textes de loi, et ils vous engagent personnellement. Retenez une idée simple : ce que vous apprenez en visite ne se raconte nulle part." }
        },
        {
          type: "texte", kicker: "La dimension éthique",
          titre: "Le lieu de vie devient aussi un lieu de soins",
          corps: [
            "Quand le soin entre dans la maison, il prend de la place : du matériel, des horaires, des visites. Quelle place laisse-t-il à la vie de la famille et aux équilibres qui existaient avant lui ?",
            "Ce qui donne sens à cette cohabitation, c'est le projet de soins, partagé par les professionnels, le patient et ses proches."
          ],
          retenir: "Concilier le juste soin et la juste distance.",
          image: "img/ch1.webp", alt: "Une technicienne attend devant la porte d'entrée d'un patient.",
          commentaire: { pistes: ["Comment l'arrivée d'un concentrateur ou d'un lit médicalisé change le quotidien d'un foyer."], audio: "audio/seuil-2.mp3", transcription: "Imaginez un salon où l'on a installé un concentrateur, des tuyaux qui traversent la pièce, et des passages réguliers de professionnels. Pour vous, c'est une installation parmi d'autres. Pour la famille, c'est toute une maison qui change. C'est pour ça qu'on parle de juste soin et de juste distance. Le juste soin, c'est faire ce qui est nécessaire, et bien le faire. La juste distance, c'est le faire sans prendre plus de place qu'il n'en faut dans la vie des gens. Avant d'installer, demandez-vous toujours : est-ce que c'est pratique pour eux, et pas seulement pour moi ?" }
        }
      ]
    },
    {
      id: "bulle", court: "La bulle", titre: "La bulle : espace personnel et distances",
      ecrans: [
        {
          type: "texte", kicker: "L'espace personnel",
          titre: "Chacun vit dans une bulle invisible",
          puces: [
            "L'espace personnel ne s'arrête pas aux limites du corps : c'est une enveloppe psychique, une zone « socio-émotionnelle » qui aide chacun à s'adapter à son environnement.",
            "Il comprend le corps, ses mouvements et ses positions.",
            "C'est une zone tampon : chacun y règle sa relation aux autres et s'en protège."
          ],
          image: "img/ch2.webp", alt: "Une technicienne ajuste avec douceur des lunettes à oxygène sur une dame âgée assise dans un fauteuil.",
          commentaire: { pistes: ["Ce qu'on ressent soi-même quand un inconnu s'approche trop près : partir de là."], audio: "audio/bulle-1.mp3", transcription: "Cette bulle, chacun la transporte avec soi, partout. Elle n'a pas de forme fixe : elle grandit quand on est inquiet, fatigué ou malade. Et chez soi, elle prend toute la maison. C'est pour ça qu'un patient peut se sentir envahi alors que vous êtes resté poli et professionnel. Ce n'est pas vous qui êtes en cause, c'est la situation. Le bon réflexe, c'est d'observer. Où est-ce qu'il s'assoit ? Est-ce qu'il recule quand vous avancez ? Ces petits signes vous disent où s'arrête sa bulle." }
        },
        {
          type: "proxemie", kicker: "La proxémie d'Edward T. Hall",
          titre: "Quatre distances, quatre façons d'être en relation",
          zones: [
            { nom: "Intime", etendue: "0 à 45 cm", texte: "Proches, contact physique… et les soins. C'est là que se font la pose d'un masque ou de lunettes à oxygène." },
            { nom: "Personnelle", etendue: "45 cm à 1,20 m", texte: "Conversation amicale ou privée, « à longueur de bras »." },
            { nom: "Sociale", etendue: "1,20 m à 3,60 m", texte: "Relations de travail, échanges habituels. La bonne distance pour expliquer le matériel." },
            { nom: "Publique", etendue: "au-delà de 3,60 m", texte: "Prise de parole en public, situations officielles." }
          ],
          note: "Ces distances sont des repères culturels, observés à l'origine chez des Américains. Elles varient selon les cultures et les personnes.",
          commentaire: {
            pistes: ["Montrer, avec ses bras, où commence chaque zone pendant une installation."],
            audio: "audio/bulle-2.mp3",
            transcription: "Ces distances, vous les connaissez déjà sans le savoir. Pensez à un inconnu qui s'approche trop près de vous dans une file d'attente : vous reculez, presque sans réfléchir. Eh bien, chez le patient, c'est pareil. Sauf que nous, pour poser des lunettes à oxygène ou ajuster un masque, on est obligés d'entrer dans sa zone intime. C'est notre travail, mais pour lui, ça reste une intrusion. Alors, mon conseil : faites vos explications à distance, assis en face de lui, et ne vous approchez qu'au moment du geste. Et dès que c'est fini, reprenez votre place."
          }
        },
        {
          type: "etapes", kicker: "Dans la relation avec le patient",
          titre: "Le geste technique fait entrer dans la zone intime",
          intro: "Installer un masque de PPC, des lunettes à oxygène ou régler un appareil près du corps oblige souvent à entrer dans la zone intime ou personnelle. Quatre temps :",
          etapes: [
            { titre: "Prévenir", texte: "Annoncer qu'on va s'approcher, avant de le faire." },
            { titre: "Expliquer", texte: "Dire ce qu'on va faire et pourquoi." },
            { titre: "Demander l'accord", texte: "Attendre un oui, verbal ou non verbal." },
            { titre: "Reprendre de la distance", texte: "Revenir à une distance sociale pour échanger." }
          ],
          retenir: "Un recul, des bras croisés, un regard détourné : ce sont des signaux à respecter.",
          commentaire: { pistes: ["Une situation où un patient a eu un mouvement de recul : ce qu'on a fait ensuite."], audio: "audio/bulle-3.mp3", transcription: "Ces quatre temps prennent dix secondes, pas plus. Et pourtant, ils changent tout. Prévenir, c'est dire : je vais m'approcher pour régler vos lunettes. Expliquer, c'est dire pourquoi. Demander l'accord, c'est attendre un oui, même un simple signe de tête. Et ensuite, on recule. Si le patient se crispe, détourne le regard ou croise les bras, on s'arrête et on lui laisse un moment. Un geste technique réussi, ce n'est pas seulement un appareil bien réglé : c'est un patient qui ne s'est pas senti bousculé." }
        }
      ]
    },
    {
      id: "posture", court: "La posture", titre: "La posture : attitudes et comportements adaptés",
      ecrans: [
        {
          type: "duo", kicker: "L'empathie",
          titre: "Être proche sans familiarité",
          gauche: { etiquette: "Ce n'est pas", titre: "Se mettre à la place de l'autre", texte: "L'intervenant y perdrait sa distance et sa lucidité." },
          droite: { etiquette: "C'est", titre: "S'intéresser à la personne", texte: "Chercher à comprendre ce qu'elle ressent, sans condescendance ni apitoiement." },
          retenir: "Les premiers contacts comptent le plus : au téléphone, à l'agence, au domicile. Ils sont souvent chargés d'anxiété.",
          image: "img/ch3.webp", alt: "Une technicienne assise à hauteur des yeux d'un homme âgé, à sa table de cuisine, l'écoute.",
          commentaire: { pistes: ["La différence entre « je comprends » dit par réflexe et une vraie écoute."], audio: "audio/posture-1.mp3", transcription: "On confond souvent l'empathie avec le fait de se mettre à la place de l'autre. Ça a l'air généreux, mais sur le terrain, c'est épuisant, et on y perd sa lucidité. L'empathie, c'est plus simple et plus solide : s'intéresser vraiment à la personne, et chercher à comprendre ce qu'elle vit. Et ça commence dès le premier contact. Le coup de fil pour fixer le rendez-vous, l'accueil à l'agence, les premières minutes au domicile. Le patient est souvent anxieux à ce moment-là. Ce qu'il retiendra, c'est la façon dont il a été accueilli." }
        },
        {
          type: "texte", kicker: "La communication non verbale",
          titre: "Le corps parle avant les mots",
          puces: [
            "Un geste attentionné, un regard, un sourire expriment aussi l'empathie.",
            "Attention aux écrans : une tablette ou un ordinateur placé entre vous et le patient coupe le contact.",
            "Regarder la personne quand on lui parle."
          ],
          image: "img/ch3.webp", alt: "Une technicienne assise face à un homme âgé, à hauteur de ses yeux.",
          commentaire: { pistes: ["Où poser sa tablette pendant la visite : la démonstration en vrai."], audio: "audio/posture-2.mp3", transcription: "Avant même que vous ouvriez la bouche, le patient vous a déjà lu. Votre façon d'entrer, de poser votre sacoche, de le regarder. Un point d'attention en particulier : les écrans. On a tous une tablette pour remplir les fiches d'intervention. C'est très pratique, mais si vous parlez au patient les yeux sur votre écran, il a l'impression de parler à un guichet. Remplissez votre fiche avant ou après l'échange, ou montrez-lui l'écran pour l'associer. Et quand il vous parle, levez les yeux." }
        },
        {
          type: "qualites", kicker: "Informer le patient et sa famille",
          titre: "Une information qui aide, pas qui inquiète",
          qualites: ["Vraie", "Claire", "Nuancée", "Adaptée", "Répétée si besoin"],
          puces: [
            "Écouter patiemment, dialoguer, sans aller au-delà de ce que la personne veut savoir.",
            "Un langage simple et des mots mesurés : certains mots pèsent lourd pour un patient anxieux.",
            "Rester dans son champ de compétence : le matériel, son usage, sa sécurité. Pour les questions médicales, renvoyer vers le médecin."
          ],
          commentaire: { pistes: ["Les mots à éviter devant un patient anxieux, et par quoi les remplacer."], audio: "audio/posture-3.mp3", transcription: "Le patient vous pose souvent des questions qu'il n'ose pas poser à son médecin. C'est une marque de confiance, mais ça demande de la prudence. Votre domaine, c'est le matériel : comment il fonctionne, comment s'en servir, comment l'utiliser en sécurité. Là-dessus, soyez clair, simple, et n'hésitez pas à répéter. Pour tout ce qui touche à la maladie ou au traitement, renvoyez vers le médecin, sans esquiver. Dites-lui que c'est une très bonne question, et que son médecin est le mieux placé pour y répondre." }
        },
        {
          type: "duo", kicker: "Le patient âgé",
          titre: "Dépendant ne veut pas dire sans avis",
          gauche: { etiquette: "La dépendance", titre: "Le besoin d'aide", texte: "Pour les actes de la vie courante : se lever, se laver, manipuler un appareil." },
          droite: { etiquette: "L'autonomie", titre: "Le droit de décider", texte: "La capacité de décider pour soi. Une personne dépendante la garde." },
          puces: [
            "Fragilité fréquente : vue, ouïe, compréhension, mémoire, mobilité peuvent baisser.",
            "Lui laisser le temps de s'exprimer, sans laisser l'entourage parler à sa place.",
            "Respecter son rythme de réflexion, d'expression et de compréhension.",
            "Prendre en compte les aidants qui l'entourent."
          ],
          commentaire: { pistes: ["Un patient très dépendant mais très clair sur ce qu'il voulait : comment on a fait."], audio: "audio/posture-4.mp3", transcription: "Avec les personnes âgées, il y a un piège dans lequel on tombe facilement : s'adresser au proche qui l'accompagne, parce que c'est plus rapide. Le fils répond, la fille explique, et le patient devient spectateur de sa propre prise en charge. Or une personne qui a besoin d'aide pour se lever garde le droit de décider pour elle-même. Alors prenez le temps. Parlez-lui en face, un peu plus lentement, et vérifiez qu'elle a bien entendu. Associez ses proches, bien sûr, mais sans les laisser prendre sa place." }
        }
      ]
    },
    {
      id: "visite", court: "La visite", titre: "La visite, pas à pas",
      ecrans: [
        {
          type: "etapes", kicker: "Le déroulé",
          titre: "Du rendez-vous au départ",
          etapes: [
            { titre: "Avant", texte: "Prendre rendez-vous et respecter l'horaire : le patient vous ouvre sa porte. Prévenir des modalités de livraison." },
            { titre: "À la porte", texte: "Se présenter : nom, fonction, entreprise. Vérifier que l'on s'adresse bien au patient. Expliquer le motif de la visite." },
            { titre: "Dans le logement", texte: "Repérer discrètement les lieux. Si des proches sont là, demander au patient s'ils peuvent rester. Informer sur le matériel." },
            { titre: "Après", texte: "Respecter les délais de changement et de reprise du matériel, avec un tact particulier après un décès." }
          ],
          image: "img/ch4.webp", alt: "Une technicienne explique un concentrateur d'oxygène à une dame âgée et à sa fille.",
          commentaire: { pistes: ["Le réflexe de la vérification d'identité : pourquoi il n'est jamais superflu."], audio: "audio/visite-1.mp3", transcription: "Ces quatre temps paraissent évidents, et pourtant, c'est souvent là que les choses se jouent. Le retard qu'on n'a pas signalé. La personne qui ouvre, et à qui l'on parle sans vérifier que c'est bien le patient. Les proches qu'on laisse assister sans rien demander. Mon conseil : faites de ces étapes une routine. Toujours la même présentation, toujours la vérification d'identité, toujours la question sur les proches. Quand c'est une routine, vous n'oubliez plus rien, même pendant une journée chargée." }
        },
        {
          type: "cartes", kicker: "Respecter le mode de vie",
          titre: "Vous êtes l'invité, même en mission",
          cartes: [
            { icone: "scale", titre: "Neutralité", texte: "Rester neutre face aux opinions, aux croyances et aux origines. Tenir compte du contexte familial, culturel et religieux." },
            { icone: "hand", titre: "Pas de familiarité", texte: "Éviter le tutoiement et l'infantilisation, surtout dans les prises en charge longues." },
            { icone: "ear", titre: "Écoute centrée sur le patient", texte: "L'écoute fait partie de la prestation. Ne pas parler des autres patients ni de ses propres soucis." }
          ],
          commentaire: { pistes: ["Le tutoiement qui s'installe après des mois de visites : comment le gérer."], audio: "audio/visite-2.mp3", transcription: "Chez le patient, vous êtes un invité, même si vous êtes là pour travailler. Ça veut dire accepter que les choses ne se passent pas comme chez vous. Une religion, des habitudes, une façon de vivre qui ne sont pas les vôtres : vous n'avez pas à les commenter. Sur les prises en charge longues, la relation devient familière, c'est normal. Mais gardez le vouvoiement, sauf si le patient vous demande clairement le contraire. Et ne parlez jamais des autres patients : celui qui vous écoute se demande ce que vous raconterez de lui." }
        },
        {
          type: "texte", kicker: "Assurer la confidentialité",
          titre: "Aucune information sans l'accord du patient",
          puces: [
            "Permettre au patient de poser ses questions en toute confidentialité.",
            "Au téléphone, vérifier que l'on parle bien au patient.",
            "Ne rien transmettre à l'entourage sans son accord.",
            "Respecter l'intérieur du domicile."
          ],
          retenir: "L'intervenant a un statut ambivalent : il aide, mais il reste un étranger dans la maison.",
          image: "img/affiche3.webp", alt: "Une technicienne parle avec un homme âgé pendant que son fils attend dans l'embrasure de la porte.",
          commentaire: { pistes: ["Que répondre au proche qui insiste « mais je suis son fils ! »."], audio: "audio/visite-3.mp3", transcription: "Le cas le plus fréquent, c'est le proche bienveillant. La fille qui appelle pour avoir des nouvelles, le voisin qui demande ce qui ne va pas. Ils ne pensent pas à mal, mais sans l'accord du patient, vous ne pouvez rien leur dire. La bonne attitude, c'est de rester aimable et de proposer une solution : je ne peux pas vous répondre, mais je peux dire à votre mère que vous avez appelé. Et au téléphone, vérifiez toujours à qui vous parlez avant de donner la moindre information." }
        },
        {
          type: "texte", kicker: "Une situation délicate",
          titre: "Face à la famille d'un patient décédé",
          puces: [
            "Être franc et honnête, sans brutalité.",
            "Avoir une attitude non verbale empathique.",
            "Prendre son temps, laisser parler les personnes sans se laisser déborder.",
            "Respecter l'émotion et les silences.",
            "Maîtriser sa propre émotion, rester professionnel et garder une juste distance."
          ],
          commentaire: {
            pistes: ["La reprise du matériel après un décès : ce qu'on dit, ce qu'on évite."],
            audio: "audio/visite-4.mp3",
            transcription: "C'est sans doute la situation la plus délicate de ce module. Vous venez reprendre le matériel, et la famille est là, encore sous le choc. Il n'y a pas de phrase parfaite. Ce qui compte, c'est de ne pas être pressé. Si on vous parle du défunt, écoutez. Si personne ne dit rien, acceptez le silence : vous n'êtes pas obligé de le remplir. Et une chose importante : vous avez le droit d'être touché. Mais gardez votre émotion pour après. La famille a besoin de quelqu'un de calme et de solide, pas de quelqu'un qu'elle devrait consoler."
          }
        }
      ]
    },
    {
      id: "communiquer", court: "Communiquer", titre: "Communiquer et protéger l'information",
      ecrans: [
        {
          type: "chaine", kicker: "Notions de base",
          titre: "De la relation naît la confiance",
          maillons: [
            { titre: "Relation", texte: "Technique, psychologique et affective." },
            { titre: "Communication", texte: "Un échange : chacun est tour à tour émetteur et récepteur, par la parole, l'écrit et le comportement." },
            { titre: "Information", texte: "Le produit de la communication et le ciment de la relation." },
            { titre: "Confiance", texte: "Elle naît de cet ensemble." }
          ],
          retenir: "La qualité de la relation dépend de la qualité de la communication.",
          image: "img/ch5.webp", alt: "Une technicienne téléphone discrètement, assise dans sa camionnette garée.",
          commentaire: { pistes: ["Un malentendu avec un patient qui venait d'un simple défaut d'explication."], audio: "audio/communiquer-1.mp3", transcription: "Cet enchaînement résume tout le module. Vous êtes en relation avec le patient dès la première minute, que vous le vouliez ou non. Cette relation passe par la communication : ce que vous dites, mais aussi ce que vous écrivez, et la façon dont vous vous comportez. De là naît l'information. Et quand elle est claire et fiable, le patient vous fait confiance. Or un patient qui vous fait confiance utilise mieux son appareil, vous appelle quand il y a un souci, et suit mieux son traitement." }
        },
        {
          type: "cartes", kicker: "Les obstacles",
          titre: "Pourquoi le message ne passe pas",
          intro: "Malentendus, litiges et conflits viennent souvent d'un défaut de communication. Trois causes principales :",
          cartes: [
            { icone: "scale", titre: "L'asymétrie", texte: "Un professionnel formé face à un patient qui dépend de lui." },
            { icone: "ear", titre: "Le manque d'écoute", texte: "On passe à côté de ce que vit le patient, de ses croyances, de ses inquiétudes." },
            { icone: "message", titre: "Le manque d'explication", texte: "Le patient reste seul avec ses questions et ses doutes." }
          ],
          commentaire: { pistes: ["Comment repérer qu'un patient n'a pas compris, même s'il dit oui."], audio: "audio/communiquer-2.mp3", transcription: "La plupart des conflits avec les patients ne viennent pas d'une erreur technique, mais d'un malentendu. Le patient dépend de vous et de votre savoir, et il n'ose pas toujours dire qu'il n'a pas compris. Il dit oui, il hoche la tête, et le soir, il ne sait plus comment régler son appareil. Pour l'éviter, faites-le reformuler : montrez-moi comment vous allez faire ce soir. Et prenez le temps d'écouter ses inquiétudes : ce sont elles qui vous disent ce qu'il faut expliquer." }
        },
        {
          type: "texte", kicker: "Le numérique",
          titre: "Internet, réseaux sociaux et données de santé",
          puces: [
            "Le patient peut opposer des informations ni triées ni vérifiées. Orienter vers des sources fiables : sante.fr, ameli.fr, sociétés savantes, associations de patients.",
            "L'achat de produits de santé en ligne, hors circuit officiel, expose aux contrefaçons.",
            "Presse et médias : à recouper, comme toute information.",
            "Les données de santé sont protégées par le RGPD, le secret professionnel et un hébergement certifié HDS."
          ],
          retenir: "Verrouiller ses appareils, pas de données de santé sur une messagerie personnelle, pas de photo de documents patients avec son téléphone personnel.",
          commentaire: { pistes: ["Le patient qui arrive avec une vidéo vue sur un réseau social : comment réagir sans le braquer."], audio: "audio/communiquer-3.mp3", transcription: "Aujourd'hui, beaucoup de patients arrivent avec ce qu'ils ont lu sur internet ou vu sur les réseaux sociaux. Ne les prenez pas de haut : ils cherchent à comprendre. Écoutez, puis orientez-les vers des sources fiables, comme le site de l'Assurance maladie ou les associations de patients. De votre côté, vous manipulez des données de santé, qui sont parmi les plus protégées. Pas de photo d'ordonnance avec votre téléphone personnel, pas d'envoi par votre messagerie privée, et un appareil toujours verrouillé." }
        },
        {
          type: "affiches", kicker: "Les messages à afficher",
          titre: "La discrétion, partout et tout le temps",
          affiches: [
            { image: "img/affiche1.webp", alt: "Une technicienne décharge du matériel de sa camionnette pendant qu'un voisin observe par-dessus la haie.", texte: "Dans la rue, la discrétion s'impose." },
            { image: "img/affiche2.webp", alt: "Deux techniciennes discutent près de la machine à café de l'agence.", texte: "Même entre collègues, la confidentialité se respecte." },
            { image: "img/affiche3.webp", alt: "Une technicienne parle avec un patient pendant que son fils attend à la porte.", texte: "Rien à l'entourage sans l'accord du patient." }
          ],
          note: "Visuels créés pour la formation, dans un contexte de domicile. Ils remplacent les affiches hospitalières du support d'origine.",
          commentaire: { pistes: ["Les lieux où l'on parle trop fort sans s'en rendre compte : la camionnette, le palier, l'ascenseur."], audio: "audio/communiquer-4.mp3", transcription: "Ces trois messages ont l'air simples, et pourtant, on les oublie tous les jours. La discussion entre collègues à la machine à café. L'appel passé depuis la camionnette, vitre ouverte. La conversation sur le palier, pendant que le voisin sort ses poubelles. La discrétion, ce n'est pas seulement chez le patient : c'est partout où l'on parle de lui. Avant de parler d'un patient, posez-vous une seule question : qui peut m'entendre en ce moment ?" }
        }
      ]
    },
    {
      id: "situations", court: "Situations", titre: "Mises en situation",
      ecrans: [
        {
          type: "quiz", kicker: "À vous de jouer",
          titre: "Cinq situations, une bonne réponse à chaque fois",
          image: "img/ch6.webp", alt: "Deux techniciennes étudient des cartes de cas pratiques à l'agence.",
          questions: [
            {
              q: "Au téléphone, une personne se présente comme la fille de Mme Martin. Elle veut savoir comment va sa mère et quels réglages ont été faits.",
              choix: ["Vous lui répondez : c'est la famille.", "Vous ne transmettez rien sans l'accord de Mme Martin, et proposez de faire le lien avec elle.", "Vous raccrochez."],
              bonne: 1,
              explication: "Aucune information à l'entourage sans l'accord du patient (art. L1110-4 du Code de la santé publique). Rester courtois et proposer une solution."
            },
            {
              q: "Vous devez poser des lunettes à oxygène à M. Petit, que vous rencontrez pour la première fois.",
              choix: ["Vous prévenez, expliquez le geste et attendez son accord.", "Vous approchez directement : le geste est rapide.", "Vous demandez à son fils de le faire."],
              bonne: 0,
              explication: "Le geste fait entrer dans la zone intime : prévenir, expliquer, demander l'accord, puis reprendre de la distance."
            },
            {
              q: "Le fils de M. Bernard répond à toutes vos questions à la place de son père, qui est parfaitement lucide.",
              choix: ["Vous continuez avec le fils, c'est plus rapide.", "Vous reviendrez quand le fils sera parti.", "Vous vous adressez à M. Bernard et lui laissez le temps de répondre."],
              bonne: 2,
              explication: "Dépendance n'est pas perte d'autonomie : M. Bernard garde le droit de décider de ce qui le concerne."
            },
            {
              q: "Une patiente vous demande si sa nouvelle machine veut dire que sa maladie s'aggrave.",
              choix: ["Vous expliquez le matériel et l'invitez à poser la question à son médecin.", "Vous la rassurez : « mais non, ce n'est rien ».", "Vous cherchez la réponse sur internet avec elle."],
              bonne: 0,
              explication: "Informer dans son champ de compétence (le matériel, son usage, sa sécurité) et renvoyer vers le médecin pour le médical."
            },
            {
              q: "Pour gagner du temps, un collègue propose de photographier l'ordonnance avec son téléphone personnel.",
              choix: ["D'accord, s'il la supprime ensuite.", "D'accord, s'il l'envoie seulement à l'agence par sa messagerie.", "Non : on utilise les outils prévus par l'entreprise."],
              bonne: 2,
              explication: "Les données de santé sont protégées (RGPD, secret professionnel, hébergement HDS). Pas de téléphone ni de messagerie personnels."
            }
          ],
          commentaire: { pistes: ["Reprendre la question la plus souvent ratée en formation et raconter le cas réel derrière."], audio: "audio/situations-1.mp3", transcription: "Place à la pratique. Ces cinq situations ressemblent à ce qu'on rencontre vraiment sur le terrain. Prenez le temps de lire chaque cas, choisissez votre réponse, puis lisez l'explication, même si vous avez trouvé la bonne. Ce n'est pas un examen : c'est l'occasion de vérifier vos réflexes. Et si vous hésitez sur une situation, notez-la et posez la question en formation. On apprend souvent plus des cas où l'on hésite que de ceux où la réponse paraît évidente." }
        }
      ]
    },
    {
      id: "arrivee", court: "Arrivée", titre: "Fin de tournée",
      ecrans: [
        {
          type: "memo", kicker: "Fiche mémo",
          titre: "Ce qu'il faut garder en tête",
          points: [
            "Le secret professionnel, la confidentialité et la dignité s'appliquent au domicile comme à l'hôpital.",
            "Le lieu de vie devient un lieu de soins : concilier le juste soin et la juste distance.",
            "Avant un geste près du corps : prévenir, expliquer, demander l'accord.",
            "L'empathie, c'est comprendre ce que vit la personne, pas se mettre à sa place.",
            "Informer vrai, clair, nuancé, adapté, dans son champ de compétence.",
            "Une personne dépendante garde le droit de décider.",
            "Se présenter, vérifier l'identité, respecter l'horaire et l'intérieur du domicile.",
            "Aucune information à l'entourage sans l'accord du patient.",
            "Pas de données de santé sur ses outils personnels."
          ],
          commentaire: { pistes: ["Le mot de la fin : ce qu'elle aimerait que chacun applique dès la prochaine visite."], audio: "audio/arrivee-1.mp3", transcription: "Voilà, la tournée est terminée. Si vous ne deviez retenir qu'une chose de ce module, ce serait celle-ci : chez le patient, vous êtes un invité qui apporte un soin. Tout le reste en découle : le secret, la bonne distance, l'écoute, le respect de ses choix. Cette fiche, imprimez-la, gardez-la dans votre véhicule, et relisez-la de temps en temps. Et à la prochaine visite, essayez d'appliquer un seul de ces points, consciemment. C'est comme ça que les bons réflexes s'installent. Merci de m'avoir suivie, et à bientôt." }
        }
      ]
    }
  ]
};

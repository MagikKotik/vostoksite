/* Module 5 — données affichées par ../../assets/formation.js.
   Chaque écran : ce qui s'affiche + un commentaire de la formatrice
   (pistes, audio et transcription). Images reprises du module 4. */
window.MODULE = {
  formation: "Formation PSDM · Garant professionnel de santé",
  numero: 5,
  titre: "Être garant",
  titreCourt: "Être garant",
  formatrice: { nom: "Stéphanie Plaisant", initiales: "SP", role: "formatrice PSDM", photo: "../../img/stephanie.webp" },
  version: "Prototype · 3 novembre 2026 · d'après le support corrigé du module 5",

  chapitres: [
    {
      id: "depart", court: "Départ", titre: "Avant de prendre la route",
      ecrans: [
        {
          type: "intro", kicker: "Module 5",
          titre: "Le garant fait tenir la qualité de toute l'équipe",
          corps: "Ce module suit le garant dans ses missions : ce que la loi lui confie, ce qu'il contrôle, puis ses outils. Rédiger une procédure, former, communiquer, concevoir une formation, l'animer et l'évaluer.",
          objectifs: [
            "Situer le rôle du garant dans le cadre réglementaire des PSDM",
            "Connaître les points de contrôle liés aux règles professionnelles",
            "Rédiger une procédure claire et utile",
            "Concevoir, animer et évaluer une formation pour les intervenants"
          ],
          image: "../module-4/img/ch6.webp", alt: "Deux techniciennes étudient des cartes de cas pratiques à l'agence.",
          commentaire: {
            pistes: ["Ce qui a changé pour elle le jour où elle est devenue garante.", "Pourquoi le garant est d'abord un formateur."],
            audio: "audio/depart-1.mp3",
            transcription: "Bonjour, et bienvenue dans ce dernier module. Cette fois, on change de point de vue. Jusqu'ici, on s'est mis à la place de l'intervenant, chez le patient. Maintenant, on se met à la place de celui ou celle qui veille sur la qualité de toute l'équipe : le garant. Être garant, ce n'est pas être un chef de plus. C'est être la personne vers qui l'on se tourne quand on a un doute. Et c'est aussi, très souvent, devenir formateur. On va voir ensemble ce que ça demande, et avec quels outils. En route."
          }
        }
      ]
    },
    {
      id: "role", court: "Le rôle", titre: "Le rôle du garant",
      ecrans: [
        {
          type: "texte", kicker: "Le cadre réglementaire",
          titre: "Chaque PSDM doit avoir ses garants",
          corps: [
            "Les prestataires de services et distributeurs de matériels (PSDM) doivent disposer de personnels garants de l'application des règles professionnelles et des bonnes pratiques de délivrance des matériels et services qu'ils proposent.",
            "Textes de référence :"
          ],
          puces: [
            "Décret n° 2006-1637 du 19 décembre 2006 (art. D5232-1 et suivants du Code de la santé publique) : règles professionnelles et personnels compétents.",
            "Arrêté du 19 décembre 2006 : modalités de délivrance, et liste des matériels et services (art. L5232-3 du Code de la santé publique).",
            "Arrêté du 23 décembre 2011, modifié par l'arrêté du 8 mars 2012 : formation obligatoire des intervenants et des garants.",
            "Référentiel HAS de bonnes pratiques professionnelles des PSDM (juin 2024, mis à jour en juin 2026), base de la certification des PSDM (décret n° 2022-169)."
          ],
          note: "⚠ À vérifier sur Légifrance : le nombre de catégories de matériels pour lesquelles un garant doit être désigné (le support dit « 4 catégories »).",
          commentaire: { pistes: ["Ce que la certification a changé dans le quotidien d'un garant."], audio: "audio/role-1.mp3", transcription: "Le garant n'est pas une simple idée d'organisation : c'est une obligation. Chaque prestataire doit en désigner, et la loi précise leur rôle. Je ne vous demande pas de retenir les dates de ces textes. Ce qu'il faut comprendre, c'est leur logique. Il y a des règles professionnelles, des bonnes pratiques, et une formation obligatoire pour les intervenants comme pour les garants. Et aujourd'hui, tout cela sert de base à la certification des prestataires. Le garant, c'est la personne qui fait le lien entre ces textes et le travail de tous les jours." }
        },
        {
          type: "duo", kicker: "Définition",
          titre: "La personne référente d'une activité",
          gauche: { etiquette: "Mission 1", titre: "Communiquer et expliquer", texte: "Les règles professionnelles, les procédures internes et les bonnes pratiques." },
          droite: { etiquette: "Mission 2", titre: "Veiller au respect", texte: "Des procédures internes, des bonnes pratiques et des règles fixées par le ministère chargé de la santé et l'Assurance maladie." },
          puces: [
            "Le garant est la personne référente d'une ou plusieurs activités au sein du PSDM.",
            "Sa mission : piloter l'ensemble des activités liées à cette activité."
          ],
          retenir: "Un garant qui n'est pas professionnel de santé ne peut pas réaliser d'actes de soins.",
          image: "../module-4/img/ch4.webp", alt: "Une technicienne explique un concentrateur d'oxygène à une dame âgée et à sa fille.",
          commentaire: { pistes: ["Où passe la frontière entre contrôler et soigner."], audio: "audio/role-2.mp3", transcription: "Retenez bien les deux verbes de cette définition : expliquer, et veiller. Le garant explique les règles, pour que chacun sache pourquoi il les applique. Et il veille à ce qu'elles soient respectées, sur le terrain, au quotidien. Ce rôle a aussi une limite claire. Si vous êtes garant sans être professionnel de santé, vous ne faites pas d'actes de soins. Vous pouvez organiser, contrôler, former. Mais le soin lui-même reste l'affaire des soignants. Connaître cette limite, c'est aussi ce qui rend un garant crédible." }
        },
        {
          type: "cartes", kicker: "Règles professionnelles et contrôles · 1/2",
          titre: "Le patient et l'équipe",
          intro: "À chaque règle professionnelle correspond un point de contrôle du garant. Exemples, côté patient et côté équipe :",
          cartes: [
            { icone: "heart", titre: "Intérêt du patient", texte: "Il veille au respect des droits du patient." },
            { icone: "hand", titre: "Libre choix du patient", texte: "Il veille au libre choix du patient, et à la prise en compte de ses préférences pour le matériel délivré, quand c'est possible." },
            { icone: "check", titre: "Respect des préférences du patient", texte: "Il veille à ce que le choix final du patient soit respecté." },
            { icone: "shield", titre: "Respect de l'intimité", texte: "Il vérifie les relations entre patients et intervenants." },
            { icone: "lock", titre: "Secret professionnel", texte: "Il s'assure du respect du secret professionnel dans l'entreprise." },
            { icone: "flag", titre: "Continuité de la prise en charge", texte: "Il veille à l'organisation des relais (vacances, déménagement…) et prévoit des solutions de remplacement." },
            { icone: "check", titre: "Compétence", texte: "Il vérifie la compétence des personnels dans leur domaine d'activité." },
            { icone: "grid", titre: "Mise à jour des connaissances", texte: "Il s'assure de la formation des intervenants, technique et comportementale (arrêté du 23 décembre 2011)." },
            { icone: "message", titre: "Coopération avec les équipes", texte: "Il favorise la communication entre tous les acteurs de la prise en charge." },
            { icone: "message", titre: "Information du prescripteur", texte: "Il s'assure du lien avec les prescripteurs et contrôle les relations des personnels avec eux, selon leur fonction." },
            { icone: "ear", titre: "Information et formation des patients, soignants et aidants", texte: "Il met à jour et vérifie les connaissances des personnels qui transmettent ces informations." }
          ],
          commentaire: { pistes: ["Comment elle s'organise pour contrôler sans tout contrôler en même temps."], audio: "audio/role-3.mp3", transcription: "Cette liste peut impressionner. Mais regardez-la autrement : derrière chaque règle, il y a une question simple que le garant se pose. Est-ce que le patient a pu choisir ? Est-ce que son intimité est respectée ? Est-ce que mes collègues sont formés et à jour ? Mon conseil : ne cherchez pas à tout contrôler en même temps. Choisissez quelques points, vérifiez-les vraiment, puis passez aux suivants. Un contrôle n'a de valeur que s'il est fait sur le terrain, et pas seulement sur le papier." }
        },
        {
          type: "cartes", kicker: "Règles professionnelles et contrôles · 2/2",
          titre: "Le matériel, de la prescription au nettoyage",
          intro: "Côté matériel et services :",
          cartes: [
            { icone: "check", titre: "Délivrance selon la prescription", texte: "Il vérifie que les procédures respectent la prescription, et que la prestation et le matériel sont en adéquation." },
            { icone: "grid", titre: "Délivrance du matériel et des consommables", texte: "Il contrôle la cohérence du matériel installé chez le patient." },
            { icone: "truck", titre: "Livraison à domicile", texte: "Il vérifie le respect des modalités de transport et de délivrance." },
            { icone: "hand", titre: "Mise en service", texte: "Il veille à ce que l'installation soit faite par une personne compétente, et contrôle les réapprovisionnements." },
            { icone: "scale", titre: "Matériel de remplacement", texte: "Il vérifie l'organisation des remplacements de matériel." },
            { icone: "shield", titre: "Matériovigilance", texte: "Il assure le suivi des événements indésirables, et vérifie les déclarations à l'ANSM et au fabricant." },
            { icone: "printer", titre: "Dossier de suivi et observance", texte: "Il supervise le suivi de l'observance, et vérifie la remise des notices et du livret patient, qui donne les coordonnées du prestataire." },
            { icone: "message", titre: "Astreinte téléphonique", texte: "Il veille à son organisation et contrôle la gestion des appels et des interventions d'astreinte." },
            { icone: "hand", titre: "SAV, maintenance, remplacement", texte: "Il contrôle le respect des procédures de SAV, et l'organisation de la maintenance des DM." },
            { icone: "sun", titre: "Nettoyage, désinfection, traçabilité", texte: "Il contrôle le respect des procédures : nettoyage, désinfection, circuits, emballage, traçabilité des DM." }
          ],
          retenir: "À rapprocher du référentiel HAS des PSDM (2024), qui structure ces contrôles en vue de la certification.",
          commentaire: { pistes: ["Le jour où la traçabilité a permis de retrouver vite un appareil en cause."], audio: "audio/role-4.mp3", transcription: "Côté matériel, le garant suit l'appareil sur tout son parcours. De la prescription à la livraison, de la mise en service à la maintenance, et jusqu'au nettoyage, avant qu'il reparte chez un autre patient. À chaque étape, la même idée revient : la traçabilité. Pouvoir dire qui a fait quoi, quand, et avec quel appareil. Le jour où un incident survient, c'est cette traçabilité qui permet de réagir vite. Et ces contrôles, ce sont aussi ceux sur lesquels s'appuie la certification des prestataires." }
        }
      ]
    },
    {
      id: "procedure", court: "La procédure", titre: "Rédiger une procédure",
      ecrans: [
        {
          type: "texte", kicker: "Définition",
          titre: "Un savoir-faire mis par écrit",
          corps: [
            "Une procédure est un document simple et efficace qui décrit, étape par étape, comment réaliser correctement une action ou un ensemble d'actions.",
            "Ses objectifs :"
          ],
          puces: [
            "Faciliter le travail des collaborateurs.",
            "Conduire une opération efficacement, pour obtenir le résultat attendu.",
            "S'assurer d'une exécution identique à chaque fois, pour un résultat constant."
          ],
          commentaire: { pistes: ["Une procédure qui a vraiment simplifié la vie de son équipe."], audio: "audio/procedure-1.mp3", transcription: "Une procédure, c'est la mémoire de l'équipe. Ce que sait faire la personne la plus expérimentée, mis par écrit, pour que tout le monde puisse le faire de la même façon. On l'imagine parfois comme une contrainte administrative. En réalité, une bonne procédure soulage. Elle évite de se poser dix fois la même question, et elle garantit au patient le même service, quel que soit l'intervenant qui vient chez lui. Avant d'écrire, demandez-vous : quel résultat est-ce que je veux obtenir, à chaque fois ?" }
        },
        {
          type: "qualites", kicker: "Une bonne procédure",
          titre: "Quatre qualités, quatre lettres : ACSM",
          qualites: ["Adaptée au public", "Correctement structurée", "Simple, claire et concise", "Mise en page aérée"],
          puces: [
            "Adaptée au public auquel elle s'adresse.",
            "Correctement structurée.",
            "Simple, claire et concise.",
            "Mise en page de façon aérée, facile à suivre."
          ],
          commentaire: { pistes: ["Le test de la procédure confiée à quelqu'un qui ne connaît pas la tâche."], audio: "audio/procedure-2.mp3", transcription: "Ces quatre lettres sont faciles à retenir, et elles évitent bien des erreurs. La plus importante, à mon avis, c'est la première : adaptée au public. Une procédure écrite pour un technicien expérimenté ne parle pas forcément à un nouvel arrivant. Alors, une fois votre procédure rédigée, faites un test simple. Donnez-la à quelqu'un qui ne connaît pas la tâche, et regardez-le faire, sans l'aider. Là où il hésite, votre texte n'est pas encore assez clair." }
        },
        {
          type: "cartes", kicker: "Quand rédiger une procédure ?",
          titre: "Six situations où elle devient utile",
          cartes: [
            { icone: "shield", titre: "Des enjeux importants", texte: "L'erreur n'est pas permise, pour des raisons de sécurité ou de coût." },
            { icone: "hand", titre: "Des compétences à acquérir", texte: "Une personne n'a pas encore les compétences pour réaliser seule une tâche, comme un collaborateur qui en remplace un autre. La procédure sert alors aussi de support de formation." },
            { icone: "flag", titre: "Une tâche rare", texte: "Une fois par an, en cas d'incident…" },
            { icone: "grid", titre: "Une action complexe", texte: "L'action à réaliser est complexe." },
            { icone: "scale", titre: "Une pratique à harmoniser", texte: "L'entreprise veut harmoniser une pratique." },
            { icone: "message", titre: "Des questions qui reviennent", texte: "Les mêmes questions reviennent souvent." }
          ],
          commentaire: { pistes: ["La question posée dix fois qui a fini par devenir une procédure."], audio: "audio/procedure-3.mp3", transcription: "On ne rédige pas une procédure pour tout. Sinon, plus personne ne les lit. Ces six situations vous aident à choisir. Il y en a deux que je trouve particulièrement utiles. La tâche rare, d'abord : celle qu'on fait une fois par an, et qu'on a forcément oubliée le jour venu. Et les questions qui reviennent sans cesse. Si on vous pose trois fois la même question dans le mois, c'est le signe qu'il manque un écrit. La procédure devient alors un gain de temps pour tout le monde, vous compris." }
        },
        {
          type: "etapes", kicker: "Préparer la rédaction",
          titre: "Le travail préparatoire fait gagner du temps",
          etapes: [
            { titre: "Rassembler", texte: "Toutes les informations nécessaires." },
            { titre: "Qui fait quoi", texte: "Désigner les personnes par leur fonction, et non par leur nom, et attribuer les tâches à chaque fonction." },
            { titre: "Comment", texte: "La façon de faire : instruction, mode opératoire…" },
            { titre: "Quand", texte: "L'enchaînement des tâches et les délais, quand le temps compte." },
            { titre: "Gestion documentaire", texte: "Numéro de version, date, rédacteur, vérificateur, approbateur, date de révision." }
          ],
          commentaire: { pistes: ["Pourquoi un prénom dans une procédure la rend vite obsolète."], audio: "audio/procedure-4.mp3", transcription: "Le réflexe, quand on doit écrire une procédure, c'est d'ouvrir un document et de commencer à rédiger. C'est souvent là qu'on perd du temps. Commencez plutôt par rassembler les informations, et par répondre à trois questions : qui, comment, et quand. Pour le qui, parlez de fonctions, jamais de prénoms : les personnes changent, les fonctions restent. Et ne négligez pas la gestion documentaire. Une procédure sans date ni numéro de version, personne ne sait si elle est encore valable." }
        }
      ]
    },
    {
      id: "former", court: "Former", titre: "Former les intervenants",
      ecrans: [
        {
          type: "texte", kicker: "Le garant formateur",
          titre: "Former, c'est vouloir transmettre",
          corps: [
            "L'une des missions du garant est de communiquer et d'expliquer les règles professionnelles, les procédures internes et les bonnes pratiques. Il est donc souvent en position de formateur.",
            "Former, c'est transmettre un message, avoir la volonté de le transmettre, et se donner les moyens de le transmettre.",
            "Le rôle du formateur :"
          ],
          puces: [
            "Faire découvrir autant qu'expliquer.",
            "Donner envie d'apprendre autant qu'enseigner.",
            "Savoir écouter et comprendre autant que savoir s'exprimer."
          ],
          commentaire: { pistes: ["Sa première formation donnée en tant que garante."], audio: "audio/former-1.mp3", transcription: "Beaucoup de garants n'ont jamais choisi d'être formateurs. Ils le deviennent parce qu'il faut expliquer les règles, et que c'est leur mission. Former, ce n'est pas seulement savoir. C'est avoir envie de transmettre, et s'en donner les moyens : du temps, un lieu, un support. Et c'est tout autant écouter que parler. Si je devais vous donner un seul conseil, ce serait celui-ci : faites découvrir avant d'expliquer. Une règle qu'on a comprise par soi-même, on l'applique bien plus volontiers qu'une règle qu'on nous a imposée." }
        },
        {
          type: "qualites", kicker: "Les freins à anticiper",
          titre: "Ce qui retient d'apprendre",
          qualites: ["Le manque de temps", "La peur de l'échec", "La gêne de reconnaître ses lacunes", "Le manque d'intérêt pour le contenu", "La méconnaissance des objectifs de la formation", "La satisfaction de sa situation actuelle", "L'absence de perspective d'évolution", "La peur du changement", "Les difficultés de financement…"],
          retenir: "La plupart de ces freins ne se disent pas : mieux vaut les anticiper.",
          commentaire: { pistes: ["Comment désamorcer la peur de l'échec dès le début d'une séance."], audio: "audio/former-2.mp3", transcription: "Ces freins, vous les rencontrerez tous, souvent plusieurs à la fois. Et la plupart ne se disent pas. Personne ne vous dira qu'il a peur d'échouer, ou qu'il est gêné de ne pas savoir. C'est pour ça qu'il vaut mieux les anticiper. Expliquer à quoi sert la formation, avant même qu'elle commence. Montrer ce qu'elle change concrètement dans le travail. Et créer un climat où l'on peut se tromper sans être jugé. Un participant qui se sent en sécurité apprend beaucoup mieux qu'un participant sur la défensive." }
        },
        {
          type: "texte", kicker: "Apprendre et mémoriser",
          titre: "Savoir, savoir-faire, savoir-être",
          puces: [
            "Savoir : les connaissances acquises.",
            "Savoir-faire : les gestes, méthodes, techniques et outils.",
            "Savoir-être : les attitudes et comportements professionnels.",
            "Le formateur repère où en est chacun dans son apprentissage, en fait prendre conscience aux intervenants, voire aux autres garants, et leur fait accepter qu'ils ont des choses à apprendre."
          ],
          retenir: "La mémorisation prend du temps, et l'information s'oublie sans rappel. D'où le besoin de rafraîchir régulièrement : rappels espacés dans le temps, mise en pratique, écrit, lecture, échanges.",
          commentaire: { pistes: ["Les petits rappels qu'elle glisse dans le quotidien de l'équipe."], audio: "audio/former-3.mp3", transcription: "Ces trois savoirs ne s'apprennent pas de la même façon. Le savoir, on peut le lire. Le savoir-faire, il faut le pratiquer. Et le savoir-être, il se construit par l'exemple et par les échanges. Quant à la mémoire, il faut être honnête : une formation suivie une seule fois s'oublie vite. Ce n'est pas un manque de sérieux, c'est le fonctionnement normal de la mémoire. Alors prévoyez des rappels. Une question en réunion, une mise en pratique, un échange entre collègues. Ce sont ces petits rappels qui font tenir l'apprentissage." }
        },
        {
          type: "etapes", kicker: "Les quatre stades de la compétence",
          titre: "De l'ignorance au réflexe",
          intro: "Un modèle souvent attribué à Martin Broadwell (1969) :",
          etapes: [
            { titre: "Incompétence inconsciente", texte: "La personne n'a pas la compétence, et ne sait pas qu'elle lui manque." },
            { titre: "Incompétence consciente", texte: "Elle prend conscience de ce manque." },
            { titre: "Compétence consciente", texte: "Elle acquiert la compétence, avec effort et attention." },
            { titre: "Compétence inconsciente", texte: "La compétence est devenue automatique et n'a plus besoin d'accompagnement." }
          ],
          commentaire: { pistes: ["Reconnaître un intervenant au premier stade sans le mettre en difficulté."], audio: "audio/former-4.mp3", transcription: "Ce modèle aide beaucoup à comprendre les réactions des participants. Le premier stade est le plus délicat : la personne ne sait pas qu'il lui manque quelque chose. Elle peut même être sûre de bien faire. Votre premier travail de formateur, c'est donc de l'aider à passer au deuxième stade, sans la mettre en difficulté. Une mise en situation fait souvent mieux qu'un long discours. Et souvenez-vous que le troisième stade demande de l'effort. C'est normal qu'un nouvel intervenant soit lent au début : le réflexe viendra avec la pratique." }
        }
      ]
    },
    {
      id: "communiquer", court: "Communiquer", titre: "Communiquer pour transmettre",
      ecrans: [
        {
          type: "texte", kicker: "La communication",
          titre: "Écouter, entendre, dire, ne pas dire",
          corps: ["Quatre démarches, qui reposent sur des conditions de base :"],
          puces: [
            "La disponibilité.",
            "L'écoute.",
            "L'alternance entre écoute et parole.",
            "L'apposition plutôt que l'opposition : poser son point de vue à côté de celui de l'autre, et non contre lui.",
            "La reformulation."
          ],
          retenir: "Trois niveaux d'expression à distinguer : les faits, les opinions, les ressentis et émotions.",
          commentaire: { pistes: ["Un désaccord dans l'équipe désamorcé par une simple reformulation."], audio: "audio/communiquer-1.mp3", transcription: "Écouter et entendre, ce n'est pas la même chose. On peut écouter quelqu'un poliment, sans vraiment entendre ce qu'il essaie de dire. Le point que je trouve le plus utile ici, c'est l'apposition. Quand un collègue n'est pas d'accord avec vous, ne cherchez pas à le contrer. Posez votre point de vue à côté du sien. Et reformulez ce qu'il a dit, pour lui montrer qu'il a été compris. Enfin, distinguez bien les faits, les opinions et les émotions. Beaucoup de tensions viennent de ce qu'on les mélange." }
        },
        {
          type: "cartes", kicker: "Verbal, paraverbal, non verbal",
          titre: "Trois canaux, un seul mot d'ordre : la cohérence",
          cartes: [
            { icone: "message", titre: "Verbal", texte: "Les mots, le vocabulaire, la construction des phrases." },
            { icone: "ear", titre: "Paraverbal", texte: "La voix : l'intonation, le débit, le volume, les silences." },
            { icone: "hand", titre: "Non verbal", texte: "Les gestes, la posture, les expressions du visage, le regard, la distance (la proxémie, vue au module 4), la tenue." }
          ],
          retenir: "Quand les trois canaux disent la même chose, le message est crédible. Quand ils se contredisent (« tout va bien » dit d'une voix inquiète), l'interlocuteur se fie surtout à la voix et au visage.",
          note: "Attention au chiffre souvent cité de « 93 % de non-verbal » (« règle de Mehrabian ») : il vient d'expériences limitées à l'expression de sentiments. Il ne s'applique pas à la communication en général, et il ne faut pas l'enseigner comme une règle.",
          commentaire: { pistes: ["Ce que dit le ton de la voix quand on annonce une nouvelle règle."], audio: "audio/communiquer-2.mp3", transcription: "Vous connaissez peut-être ce chiffre selon lequel quatre-vingt-treize pour cent de la communication serait non verbale. Il circule partout, mais il est sorti de son contexte. Ne l'enseignez pas. Ce qui est vrai, en revanche, c'est l'importance de la cohérence. Si vous dites qu'une règle est essentielle, d'un ton pressé et en regardant votre téléphone, c'est le ton et le téléphone qu'on retiendra. Quand vous formez, vos mots, votre voix et votre attitude doivent raconter la même histoire." }
        },
        {
          type: "texte", kicker: "La communication verbale",
          titre: "Des phrases courtes, des mots qui impliquent",
          puces: [
            "Des phrases courtes et simples : sujet, verbe, complément.",
            "Des tournures actives, des verbes d'action, des mots positifs.",
            "S'impliquer : dire « je ».",
            "Impliquer l'auditoire : dire « vous » et « nous »."
          ],
          commentaire: { pistes: ["Relire un support à voix haute pour repérer les phrases trop longues."], audio: "audio/communiquer-3.mp3", transcription: "Ces conseils paraissent simples, mais ils changent tout dans une formation. Une phrase courte se retient. Une phrase longue, avec trois idées dedans, se perd en route. Dites je quand vous parlez de votre expérience : c'est plus vivant, et plus honnête. Et dites nous quand vous parlez de l'équipe. Ça montre que les règles ne viennent pas d'en haut, mais qu'on les porte ensemble. Un bon exercice : relisez vos supports à voix haute. Là où vous butez, le texte est trop compliqué." }
        }
      ]
    },
    {
      id: "concevoir", court: "Concevoir", titre: "Concevoir un dispositif de formation ou d'information",
      ecrans: [
        {
          type: "etapes", kicker: "Les cinq étapes",
          titre: "De l'objectif aux supports",
          etapes: [
            { titre: "Définir les objectifs", texte: "Ce que les participants sauront faire à la fin." },
            { titre: "Structurer le programme", texte: "Des séquences, chacune liée à un sous-objectif." },
            { titre: "Adapter", texte: "Au public, aux locaux et au temps disponible." },
            { titre: "Choisir les méthodes pédagogiques", texte: "Des allers-retours entre théorie et pratique." },
            { titre: "Préparer les supports", texte: "Soignés, prêts à l'avance, mis à jour." }
          ],
          commentaire: { pistes: ["Pourquoi commencer par les supports fait perdre du temps."], audio: "audio/concevoir-1.mp3", transcription: "Ces cinq étapes valent pour une formation d'une journée comme pour une simple réunion d'information d'un quart d'heure. Et l'ordre compte. On a souvent envie de commencer par les supports, parce que c'est concret. Mais un support préparé sans objectif clair, c'est un support qui part dans tous les sens. Commencez donc toujours par la même question : à la fin, qu'est-ce que les participants sauront faire, qu'ils ne savaient pas faire avant ? Tout le reste découle de la réponse." }
        },
        {
          type: "texte", kicker: "Étapes 1 et 2",
          titre: "Un objectif observable, un programme dynamique",
          corps: ["Un objectif pédagogique décrit une performance observable et mesurable, que l'apprenant pourra accomplir et qui pourra être évaluée. Pour le formuler :"],
          puces: [
            "Un verbe d'action qui décrit un comportement observable (on peut s'appuyer sur la taxonomie de Bloom) : « installer », « expliquer », « vérifier », plutôt que « connaître ».",
            "Les conditions de réalisation : contexte, moyens.",
            "Des critères de réussite clairs.",
            "Puis un plan dynamique : chaque séquence permet d'atteindre un sous-objectif, qui est une étape vers l'objectif final."
          ],
          retenir: "Ce qui compte, c'est ce que les participants retiennent à la fin.",
          commentaire: { pistes: ["Réécrire ensemble un objectif flou en objectif observable."], audio: "audio/concevoir-2.mp3", transcription: "Le piège le plus courant, c'est l'objectif flou. Connaître la procédure, comprendre les règles : ça sonne bien, mais comment savoir si c'est atteint ? Remplacez ces verbes par des verbes d'action. Installer, vérifier, expliquer. Là, vous pouvez observer, et donc évaluer. Ensuite, découpez votre programme en petites séquences. Chacune a son propre sous-objectif, comme une étape sur la route. Et gardez en tête que ce qui compte, ce n'est pas ce que vous avez dit, mais ce que les participants ont retenu." }
        },
        {
          type: "duo", kicker: "Étapes 3 et 4",
          titre: "Partir du public, alterner théorie et pratique",
          gauche: { etiquette: "Étape 3", titre: "Adapter", texte: "Aux participants (expérience, niveau, attentes, besoins, motivations ou craintes), aux locaux et au matériel disponibles, au temps alloué." },
          droite: { etiquette: "Étape 4", titre: "Choisir les méthodes", texte: "On apprend surtout par des allers-retours entre théorie et pratique, plutôt que par un cours à sens unique." },
          puces: [
            "Privilégier la mise en pratique : elle illustre, facilite la compréhension, favorise la participation et donc la mémorisation.",
            "Approfondir la théorie selon les difficultés rencontrées en pratique."
          ],
          commentaire: { pistes: ["Une séance où la pratique a fait naître les bonnes questions."], audio: "audio/concevoir-3.mp3", transcription: "Avant de préparer quoi que ce soit, renseignez-vous sur votre public. Des intervenants qui ont dix ans de métier n'attendent pas la même chose que des nouveaux arrivants. Et pour les méthodes, mon conseil est simple : faites pratiquer le plus tôt possible. Un exposé d'une heure, même passionnant, laisse peu de traces. Une démonstration, puis une mise en pratique, puis un retour sur les difficultés : là, on apprend vraiment. La théorie vient alors répondre aux questions que la pratique a fait naître." }
        },
        {
          type: "texte", kicker: "Étape 5 : préparer les supports",
          titre: "Le support aide le formateur, il ne le remplace pas",
          puces: [
            "Des supports soignés, qui répondent aux objectifs et aident le formateur à animer, sans le remplacer.",
            "Les préparer bien à l'avance.",
            "Les mettre à jour à chaque session, avec les retours des stagiaires et l'évolution de la réglementation."
          ],
          retenir: "Un bon support n'est jamais terminé.",
          commentaire: { pistes: ["Ce qu'elle note après chaque session pour améliorer son support."], audio: "audio/concevoir-4.mp3", transcription: "Un support, c'est un appui pour vous, pas un texte à lire. Si vous lisez vos diapositives, les participants les liront plus vite que vous, et ils décrocheront. Préparez-le à l'avance, pour avoir le temps de le relire et de l'essayer. Et après chaque session, prenez cinq minutes pour noter ce qui n'a pas marché, les questions posées, et ce qui a changé dans la réglementation. C'est comme ça qu'un support reste vivant. D'ailleurs, celui-ci est lui aussi appelé à évoluer." }
        }
      ]
    },
    {
      id: "animer", court: "Animer", titre: "Animer et évaluer une formation",
      ecrans: [
        {
          type: "etapes", kicker: "Animer la formation · 1/2",
          titre: "Avant la séance, et au début",
          etapes: [
            { titre: "Convoquer", texte: "Une convocation écrite (mail, note de service), assez tôt pour que les participants s'organisent : personnes concernées, lieu, horaires, sujet et objectif." },
            { titre: "Accueillir", texte: "Faire signer la feuille d'émargement à chaque stagiaire présent. Y noter le lieu, les horaires, le sujet, l'objectif et les noms." },
            { titre: "Présenter et cadrer", texte: "Présenter les objectifs et le déroulé, se présenter et faire se présenter les stagiaires, poser le cadre." },
            { titre: "Recueillir les attentes", texte: "Vérifier qu'elles correspondent aux objectifs, et recadrer tout de suite sinon." },
            { titre: "Créer un climat", texte: "Un climat favorable, qui implique les participants et les fait travailler ensemble." }
          ],
          retenir: "La feuille d'émargement est indispensable à la traçabilité de la formation obligatoire.",
          commentaire: { pistes: ["Les attentes qui ne collaient pas aux objectifs : comment recadrer sans froisser."], audio: "audio/animer-1.mp3", transcription: "Les premières minutes d'une formation donnent le ton de toute la séance. Une convocation claire, envoyée assez tôt, c'est déjà une marque de respect pour les participants. La feuille d'émargement, elle, n'est pas une formalité. C'est la preuve que la formation obligatoire a bien eu lieu. Faites-la signer dès l'accueil, pour ne pas l'oublier à la fin. Et prenez le temps de recueillir les attentes. Si elles ne correspondent pas à vos objectifs, dites-le tout de suite. C'est bien plus simple qu'en fin de journée." }
        },
        {
          type: "etapes", kicker: "Animer la formation · 2/2",
          titre: "Pendant la séance, puis après",
          etapes: [
            { titre: "Préciser l'objectif", texte: "De chaque activité : découvrir, apprendre, se perfectionner, vérifier, améliorer." },
            { titre: "Lancer et varier", texte: "Lancer le travail, puis varier les activités pour donner du rythme et impliquer les participants." },
            { titre: "Vérifier", texte: "Que la consigne et le contenu sont compris ; l'accord du groupe et de chacun, en recadrant si besoin." },
            { titre: "Débriefer et consolider", texte: "Faire partager les expériences pour enrichir l'expérience collective, puis consolider les acquis." },
            { titre: "Après", texte: "Résumer ce qui a été vu, faire le lien avec la pratique de terrain, évaluer les connaissances, recueillir l'avis des participants sur leur satisfaction." }
          ],
          commentaire: { pistes: ["Un débriefing où les participants ont appris les uns des autres."], audio: "audio/animer-2.mp3", transcription: "Pendant la séance, votre rôle est moins de parler que de faire travailler. Annoncez à quoi sert chaque activité, lancez-la, puis vérifiez que tout le monde a compris la consigne. Le débriefing est souvent le moment le plus riche. Les participants y partagent ce qu'ils vivent sur le terrain, et ils apprennent beaucoup les uns des autres. Et ne laissez pas partir le groupe sans conclure. Un résumé de deux minutes, un lien avec le travail de demain : c'est ce qui permet de repartir avec quelque chose de concret." }
        },
        {
          type: "cartes", kicker: "Évaluer la formation",
          titre: "Trois évaluations, trois moments",
          intro: "Une évaluation peut servir à vérifier les prérequis, mesurer la progression entre l'avant et l'après, mesurer la satisfaction des participants, vérifier la compréhension des messages clés, ou mesurer en situation de travail l'impact des compétences acquises.",
          cartes: [
            { icone: "flag", titre: "Diagnostique", texte: "Avant la formation : vérifier les prérequis et adapter le contenu." },
            { icone: "hand", titre: "Formative", texte: "Pendant la formation, comme un entraînement : l'apprenant situe l'écart qui le sépare de l'objectif, et ses difficultés. Elle sert à réguler l'apprentissage." },
            { icone: "check", titre: "Sommative", texte: "À la fin : elle vérifie individuellement l'atteinte des objectifs, en qualité et en quantité." }
          ],
          retenir: "Évaluer, c'est aussi se donner les moyens de réajuster la formation suivante.",
          commentaire: { pistes: ["Ce qu'une évaluation lui a appris sur sa propre formation."], audio: "audio/animer-3.mp3", transcription: "Évaluer, ce n'est pas seulement noter les participants à la fin. L'évaluation formative, par exemple, se fait pendant la formation, comme un entraînement. Elle aide chacun à voir où il en est, sans enjeu. Pour vous aussi, l'évaluation est précieuse. Les résultats et l'avis des participants vous disent ce qui a marché, et ce qu'il faut revoir. Et l'évaluation la plus parlante vient souvent plus tard : quand vous constatez, sur le terrain, que les bons gestes sont vraiment appliqués." }
        },
        {
          type: "quiz", kicker: "À vous de jouer",
          titre: "Six situations de garant",
          image: "../module-4/img/ch6.webp", alt: "Deux techniciennes étudient des cartes de cas pratiques à l'agence.",
          questions: [
            {
              q: "Un intervenant vous signale un événement indésirable survenu avec un appareil chez un patient.",
              choix: ["Vous le notez pour la prochaine réunion d'équipe.", "Vous assurez son suivi et vérifiez sa déclaration à l'ANSM et au fabricant.", "Vous laissez l'intervenant gérer seul."],
              bonne: 1,
              explication: "Matériovigilance : le garant assure le suivi des événements indésirables et vérifie les déclarations à l'ANSM et au fabricant."
            },
            {
              q: "Un collaborateur doit remplacer un collègue absent, sur une tâche qu'il n'a jamais faite.",
              choix: ["Une procédure écrite lui sert de support de formation.", "Il attendra le retour du collègue.", "Il se débrouillera : il est expérimenté."],
              bonne: 0,
              explication: "Quand une personne n'a pas encore les compétences pour réaliser seule une tâche, la procédure sert aussi de support de formation."
            },
            {
              q: "Vous formulez l'objectif d'une formation sur un nouveau concentrateur.",
              choix: ["« Connaître le nouveau concentrateur. »", "« Être sensibilisé au nouveau concentrateur. »", "« Installer le concentrateur et en expliquer l'usage au patient, selon la procédure. »"],
              bonne: 2,
              explication: "Un objectif pédagogique décrit une performance observable et mesurable : un verbe d'action, des conditions de réalisation, des critères de réussite."
            },
            {
              q: "En annonçant une nouvelle règle, un collègue dit « c'est essentiel » d'un ton pressé, les yeux sur son téléphone.",
              choix: ["L'équipe retiendra surtout le mot « essentiel ».", "L'équipe se fiera surtout au ton et à l'attitude.", "Cela n'a aucune importance."],
              bonne: 1,
              explication: "Quand verbal, paraverbal et non verbal se contredisent, l'interlocuteur se fie surtout à la voix et au visage. Le mot d'ordre : la cohérence."
            },
            {
              q: "À l'accueil d'une formation obligatoire, un stagiaire arrive en retard et s'assoit directement.",
              choix: ["Vous lui faites signer la feuille d'émargement.", "Inutile : il est bien là.", "Vous signez à sa place à la fin."],
              bonne: 0,
              explication: "Chaque stagiaire présent signe la feuille d'émargement : elle est indispensable à la traçabilité de la formation obligatoire."
            },
            {
              q: "Avant une formation, vous voulez savoir si les participants ont les bases nécessaires.",
              choix: ["Une évaluation sommative.", "Un questionnaire de satisfaction.", "Une évaluation diagnostique."],
              bonne: 2,
              explication: "L'évaluation diagnostique, avant la formation, vérifie les prérequis et permet d'adapter le contenu."
            }
          ],
          commentaire: { pistes: ["La situation de garant qui la fait le plus hésiter, et pourquoi."], audio: "audio/animer-4.mp3", transcription: "À votre tour de vous évaluer. Ces six situations sont celles qu'un garant rencontre vraiment : un nouvel arrivant à former, un objectif à formuler, un incident à suivre. Choisissez votre réponse, puis lisez toujours l'explication, même quand vous avez juste. Et si une situation vous fait hésiter, gardez-la de côté pour en parler en formation. Vous voyez, c'est exactement une évaluation formative : un entraînement, pour repérer ce qui est acquis et ce qui reste à travailler." }
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
            "Le garant est la personne référente d'une activité : il explique les règles et veille à leur respect.",
            "Un garant qui n'est pas professionnel de santé ne réalise pas d'actes de soins.",
            "À chaque règle professionnelle correspond un point de contrôle : le patient, l'équipe, le matériel.",
            "Une bonne procédure est ACSM : adaptée, correctement structurée, simple, mise en page aérée.",
            "Dans une procédure : des fonctions, pas des noms, et une gestion des versions.",
            "Former, c'est vouloir transmettre et s'en donner les moyens, en anticipant les freins.",
            "Sans rappel, on oublie : rafraîchir régulièrement.",
            "Verbal, paraverbal, non verbal : la cohérence avant tout.",
            "Un objectif pédagogique est observable et mesurable.",
            "La feuille d'émargement trace la formation obligatoire.",
            "Évaluer avant, pendant et après, pour réajuster la formation suivante."
          ],
          commentaire: { pistes: ["Le mot de la fin : ce qu'elle aimerait que chaque garant applique dès demain."], audio: "audio/arrivee-1.mp3", transcription: "Voilà, la tournée est terminée. Si vous ne deviez retenir qu'une idée de ce module, ce serait celle-ci : le garant ne porte pas la qualité tout seul. Il la rend possible pour toute l'équipe, en expliquant, en vérifiant et en formant. Conservez cette fiche à portée de main, et reprenez-la avant de rédiger votre prochaine procédure ou d'animer votre prochaine formation. Merci de m'avoir suivie tout au long de ce parcours, et bon courage dans votre rôle de garant." }
        }
      ]
    }
  ]
};

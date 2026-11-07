/* Module 3 — données affichées par ../../assets/formation.js.
   Chaque écran : ce qui s'affiche + un commentaire de la formatrice
   (pistes pour ses propres exemples ; audio + transcription). Images reprises du module 4. */
window.MODULE = {
  formation: "Formation PSDM · Garant professionnel de santé",
  numero: 3,
  titre: "Hygiène et sécurité",
  titreCourt: "Hygiène et sécurité",
  formatrice: { nom: "Stéphanie Plaisant", initiales: "SP", role: "formatrice PSDM", photo: "../../img/stephanie.webp" },
  version: "Prototype · 3 novembre 2026 · d'après le support corrigé du module 3",

  chapitres: [
    {
      id: "depart", court: "Départ", titre: "Avant de prendre la route",
      ecrans: [
        {
          type: "intro", kicker: "Module 3",
          titre: "Propre, sûr et tracé : le matériel qu'on confie au patient",
          corps: "Ce module suit le matériel tout au long de sa tournée : ce que l'hygiène exige, la route, le domicile, l'agence, puis l'équipe autour du patient et la vigilance quand un incident survient.",
          objectifs: [
            "Distinguer nettoyage, désinfection et antisepsie, et appliquer les bons protocoles",
            "Assurer l'hygiène et la sécurité sur la route, au domicile et à l'agence",
            "Trouver sa place dans l'équipe qui entoure le patient",
            "Tracer le matériel et signaler un incident de matériovigilance"
          ],
          image: "../../img/hero.webp", alt: "Une camionnette de prestataire roule sur une route de village, au lever du soleil.",
          commentaire: {
            pistes: ["Se présenter en deux phrases, puis dire pourquoi l'hygiène du matériel compte autant sur le terrain."],
            audio: "audio/depart-1.mp3",
            transcription: "Bonjour, et bienvenue dans ce module consacré à l'hygiène et à la sécurité. Moi, c'est Stéphanie, et je vous accompagne tout au long du parcours. Le matériel que vous installez chez un patient a souvent servi chez quelqu'un d'autre avant lui. Il a voyagé dans un véhicule, il est passé par l'agence, il a été nettoyé, désinfecté, rangé. À chacune de ces étapes, un geste oublié peut transmettre une infection ou provoquer un accident. On va donc suivre ce matériel pas à pas. Allez, on prend la route."
          }
        }
      ]
    },
    {
      id: "bases", court: "Les bases", titre: "Les bases : hygiène et matériel conforme",
      ecrans: [
        {
          type: "chaine", kicker: "Hygiène : définitions",
          titre: "L'hygiène repose sur trois actions",
          maillons: [
            { titre: "Nettoyage", texte: "Enlever les salissures." },
            { titre: "Désinfection", texte: "Éliminer ou tuer les micro-organismes, et inactiver les virus indésirables, sur des milieux inertes contaminés : sols, surfaces, instruments, dispositifs médicaux… Le résultat est momentané." },
            { titre: "Conservation", texte: "Conserver le matériel propre, à l'abri d'une nouvelle contamination." }
          ],
          retenir: "L'hygiène, c'est l'ensemble des mesures qui préviennent les infections et l'apparition de maladies infectieuses.",
          commentaire: { pistes: ["Un appareil désinfecté puis mal rangé : ce qu'on retrouve en le ressortant du stock."], audio: "audio/bases-1.mp3", transcription: "Trois mots, et un ordre qui ne se discute pas. D'abord on nettoie, ensuite on désinfecte, et enfin on protège ce qu'on vient de rendre propre. Si l'un des trois maillons manque, les deux autres ne servent presque à rien. Un appareil désinfecté, puis posé sans protection sur une étagère poussiéreuse, redevient vite un appareil contaminé. Et un appareil désinfecté sans avoir été nettoyé reste mal désinfecté. Mon conseil : pensez à ces trois actions comme à un seul geste, du début à la fin." }
        },
        {
          type: "duo", kicker: "Désinfection et antisepsie",
          titre: "L'objet d'un côté, la peau de l'autre",
          gauche: { etiquette: "Milieux inertes", titre: "Désinfection", texte: "Élimine ou tue les micro-organismes, et inactive les virus, sur les sols, surfaces, instruments et dispositifs médicaux. Résultat momentané." },
          droite: { etiquette: "Tissus vivants", titre: "Antisepsie", texte: "Même action sur la peau et les muqueuses, dans la limite de leur tolérance. Résultat momentané." },
          puces: [
            "Désinfectant : produit qui détruit les micro-organismes, ou empêche leur développement, sur des milieux inertes. Exemples : eau de Javel, alcool, produits à base d'ammoniums quaternaires.",
            "Antiseptique : produit utilisé pour l'antisepsie, dans des conditions définies. Exemples : povidone iodée (Bétadine®), chlorhexidine, hexamidine (Hexomédine®), alcools, solution de Dakin.",
            "Si l'action d'un antiseptique est limitée, on le précise : un produit qui n'agit que sur les champignons est un antiseptique à action fongicide."
          ],
          commentaire: { pistes: ["Les produits réellement utilisés à l'agence : lesquels vont sur le matériel, lesquels sur la peau."], audio: "audio/bases-2.mp3", transcription: "On entend souvent ces deux mots employés l'un pour l'autre. Pourtant, la différence est simple : la désinfection concerne les objets, l'antisepsie concerne la peau. Et ça a une conséquence très concrète. Un produit fait pour les surfaces n'a rien à faire sur la peau d'un patient, et un antiseptique n'est pas conçu pour traiter un appareil. Avant d'utiliser un produit, lisez toujours l'étiquette : elle vous dit sur quoi il s'emploie. Et dans les deux cas, le résultat est momentané : ce n'est jamais acquis une fois pour toutes." }
        },
        {
          type: "cartes", kicker: "Risques et sécurité",
          titre: "Choisir des dispositifs médicaux conformes",
          intro: "Le choix des dispositifs médicaux (DM) doit respecter la réglementation :",
          cartes: [
            { icone: "shield", titre: "Marquage CE", texte: "Apposé par le fabricant, il atteste la conformité du DM au règlement européen relatif aux dispositifs médicaux (RDM, n° 2017/745), applicable depuis le 26 mai 2021. Il a remplacé la directive 93/42/CEE." },
            { icone: "scale", titre: "Classe de risque", texte: "I, IIa, IIb ou III, définie par les règles de classification de l'annexe VIII du RDM (voir le module 1)." },
            { icone: "check", titre: "Sécurité et performances", texte: "Les exigences générales en matière de sécurité et de performances (RDM, annexe I) encadrent la conception et la fabrication." },
            { icone: "tag", titre: "Notice et identifiant", texte: "Une notice d'utilisation et un étiquetage permettent une utilisation correcte et sûre, et l'identification du fabricant. L'identifiant unique (IUD) permet de tracer le DM." }
          ],
          commentaire: { pistes: ["Montrer, sur un appareil de l'agence, où trouver le marquage, la classe et l'identifiant unique."], audio: "audio/bases-3.mp3", transcription: "Vous ne choisissez pas forcément le matériel que vous installez, mais vous êtes souvent le dernier à le voir avant le patient. Alors prenez le réflexe de vérifier ce qui se vérifie : le marquage européen sur l'appareil, la présence de la notice, une étiquette lisible avec son identifiant. Ce n'est pas de la paperasse. Un appareil sans notice, c'est un patient qui ne saura pas l'utiliser correctement. Et un appareil sans identifiant, c'est un appareil qu'on ne pourra pas retrouver le jour où le fabricant signalera un problème." }
        },
        {
          type: "duo", kicker: "Usage unique ou réutilisable",
          titre: "Ce qui reste chez le patient, ce qui revient à l'agence",
          gauche: { etiquette: "Usage unique", titre: "Reste chez le patient", texte: "Par exemple les lunettes à oxygène, dès qu'elles ont été utilisées ou que leur emballage n'est plus intact. Jamais réutilisées pour un autre patient." },
          droite: { etiquette: "Réutilisable", titre: "Revient à l'agence", texte: "Nettoyé puis désinfecté dès son retour, ensuite filmé (emballé) et rangé dans le stock propre." },
          image: "../module-4/img/ch2.webp", alt: "Une technicienne ajuste des lunettes à oxygène sur une dame âgée assise dans un fauteuil.",
          commentaire: { pistes: ["Les consommables qu'on est tenté de récupérer « parce qu'ils ont l'air neufs »."], audio: "audio/bases-4.mp3", transcription: "La règle de l'usage unique ne souffre aucune exception. Même si les lunettes à oxygène ont l'air neuves, même si elles n'ont servi qu'une heure, elles restent chez le patient. Un emballage ouvert suffit : on ne sait plus ce qu'elles ont touché. Pour le reste du matériel, le circuit est toujours le même : retour à l'agence, nettoyage, désinfection, emballage, stock propre. Mon conseil : ne laissez jamais un doute s'installer. Si vous ne savez pas si un consommable a servi, considérez qu'il a servi." }
        }
      ]
    },
    {
      id: "tournee", court: "En tournée", titre: "En tournée : la route et le domicile",
      ecrans: [
        {
          type: "cartes", kicker: "Risques et sécurité pendant le transport",
          titre: "Sur la route, la sécurité se prépare",
          cartes: [
            { icone: "truck", titre: "Conduire et entretenir", texte: "Respecter le Code de la route. Entretenir le véhicule : vidange, pneus, éclairage…" },
            { icone: "shield", titre: "Se protéger", texte: "Porter les équipements de protection individuelle (EPI) adaptés. Pour l'oxygène liquide et le remplissage des réservoirs cryogéniques : chaussures de sécurité, gants cryogéniques, lunettes de protection ou écran facial, vêtements en coton couvrants, qui limitent l'électricité statique et ne collent pas à la peau en cas de projection." },
            { icone: "alert", titre: "Aménager le véhicule", texte: "Selon le matériel transporté. Pour l'oxygène : rampes de fixation et sangles d'arrimage, bacs de rangement, aération haute et basse, signalisation « interdiction de fumer » sur le véhicule et à l'intérieur, peu de matières combustibles, un extincteur." }
          ],
          commentaire: { pistes: ["Le contrôle du véhicule avant de partir : ce qu'elle vérifie elle-même, dans quel ordre."], audio: "audio/tournee-1.mp3", transcription: "Le véhicule, c'est votre premier outil de travail. Et quand il transporte de l'oxygène, il demande une attention particulière. L'oxygène ne brûle pas lui-même, mais il rend tout le reste beaucoup plus inflammable. C'est pour ça qu'on attache solidement les bouteilles, qu'on aère, qu'on interdit de fumer à bord, et qu'on emporte un extincteur. Pour l'oxygène liquide, le froid est un vrai danger : une projection peut brûler la peau. Les gants et la protection des yeux ne sont pas des accessoires. Portez-les à chaque fois, même pour un remplissage rapide." }
        },
        {
          type: "texte", kicker: "L'hygiène pendant le transport",
          titre: "L'hygiène ne s'arrête pas à la portière",
          puces: [
            "Garder le véhicule propre et le nettoyer régulièrement.",
            "Séparer le sale et le propre : le matériel sale voyage dans des sacs, sans contact avec le matériel propre et désinfecté.",
            "Protéger les dispositifs médicaux propres en les filmant.",
            "Ne pas garder de matériel sale à bord plus que nécessaire : le déposer à l'agence à chaque passage."
          ],
          image: "../module-4/img/affiche1.webp", alt: "Une technicienne décharge du matériel de sa camionnette, devant une maison.",
          commentaire: { pistes: ["Comment organiser concrètement le coffre : zone sale, zone propre."], audio: "audio/tournee-2.mp3", transcription: "Tout le travail fait à l'agence peut être perdu en quelques kilomètres. Un appareil désinfecté posé à côté d'un sac de matériel sale, c'est un appareil à refaire. Dans le véhicule, organisez deux zones bien séparées, et tenez-vous-y même quand vous êtes pressé. Le sale d'un côté, dans des sacs fermés. Le propre de l'autre, toujours emballé. Et videz le véhicule de son matériel sale à chaque passage à l'agence. Plus il reste à bord, plus le risque de contaminer le reste augmente." }
        },
        {
          type: "texte", kicker: "Risques et sécurité au domicile",
          titre: "Chez le patient, évaluer avant d'installer",
          puces: [
            "Évaluer les risques du domicile au regard du matériel : prises et installation électrique pour les appareils électriques ; sources de chaleur ou de flamme pour l'oxygène (cheminée, cuisinière, bougies, cigarette) ; sols poreux (moquette, parquet) pour l'oxygène liquide.",
            "Choisir le meilleur emplacement et sécuriser le lieu d'installation : ventilation, câbles, risque de chute.",
            "Informer et éduquer le patient et son entourage aux règles de sécurité et à l'utilisation du matériel, en vérifiant qu'ils ont compris.",
            "Évaluer aussi les risques pour l'intervenant : escalier difficile pour monter un réservoir, port de charges, animaux…"
          ],
          retenir: "Point essentiel : le tabac et les flammes sont un danger majeur avec l'oxygène.",
          image: "../module-4/img/ch4.webp", alt: "Une technicienne, accroupie près d'un concentrateur d'oxygène, l'explique à une dame âgée et à sa fille.",
          commentaire: { pistes: ["Comment aborder le tabac avec un patient fumeur sans le braquer."], audio: "audio/tournee-3.mp3", transcription: "Avant de sortir le matériel, prenez une minute pour regarder la pièce. Où sont les prises ? Y a-t-il une cheminée, une cuisinière, des bougies ? Un cendrier sur la table ? Avec l'oxygène, le premier danger, c'est le feu. Expliquez-le simplement, au patient et à ceux qui vivent avec lui, puis vérifiez qu'ils ont compris, par exemple en leur demandant où ils vont placer l'appareil. Et pensez à vous aussi. Un réservoir à monter dans un escalier étroit, ça se prépare. Votre sécurité fait partie de l'évaluation." }
        },
        {
          type: "etapes", kicker: "L'hygiène au domicile, en fin de traitement",
          titre: "Reprendre le matériel sans emporter les microbes",
          etapes: [
            { titre: "Se protéger", texte: "Porter des gants à usage unique pour manipuler le matériel souillé." },
            { titre: "Adapter au risque", texte: "En cas de maladie à transmission aérienne, par exemple la tuberculose : masque FFP2. Les gants ne suffisent pas." },
            { titre: "Emballer", texte: "Mettre le matériel souillé dans un sac avant de le charger dans le véhicule." },
            { titre: "Se désinfecter les mains", texte: "Friction hydro-alcoolique avant et après chaque patient." }
          ],
          commentaire: { pistes: ["Comment on sait qu'un patient a une maladie à transmission aérienne avant d'arriver chez lui."], audio: "audio/tournee-4.mp3", transcription: "La reprise du matériel, on la fait souvent vite, parce que la visite est courte. C'est justement là qu'il faut rester rigoureux. Le matériel qui revient a servi pendant des semaines, parfois des mois. Considérez-le toujours comme contaminé. Les gants, d'abord. Et si le patient a une maladie qui se transmet par l'air, comme la tuberculose, un masque filtrant en plus, car les gants ne protègent pas vos voies respiratoires. Ensuite, tout part dans un sac fermé. Et avant de remonter dans le véhicule, une friction des mains." }
        }
      ]
    },
    {
      id: "agence", court: "L'agence", titre: "À l'agence : nettoyer, désinfecter, stocker",
      ecrans: [
        {
          type: "texte", kicker: "Le nettoyage",
          titre: "Nettoyer, c'est enlever ce qui se voit",
          puces: [
            "Enlever les salissures visibles : matière organique (graisses…) ou minérale (calcaire, tartre), qui peuvent abriter des micro-organismes.",
            "Par détersion : un détergent détache les salissures de l'objet.",
            "Deux actions associées : mécanique (frottement, pression de l'eau) et chimique (dissolution par le détergent).",
            "La température de l'eau, le temps de contact et la concentration du détergent comptent."
          ],
          retenir: "Un DM nettoyé et propre peut encore porter des micro-organismes invisibles : après un bon nettoyage, la désinfection est indispensable.",
          commentaire: { pistes: ["Les recoins d'un appareil où les salissures se cachent le plus souvent."], audio: "audio/agence-1.mp3", transcription: "Le nettoyage paraît être l'étape la plus simple, et c'est pour ça qu'on la bâcle. Pourtant, c'est elle qui prépare tout le reste. Une trace de graisse ou de calcaire, c'est un abri pour les microbes, et le désinfectant ne passera pas à travers. Frottez, vraiment. Le détergent seul ne suffit pas, il faut l'action de la main ou de la brosse. Respectez la température et la dose indiquées. Et gardez en tête qu'un appareil qui brille n'est pas forcément sain : propre, ce n'est pas encore désinfecté." }
        },
        {
          type: "texte", kicker: "La désinfection",
          titre: "Le bon produit, le bon protocole",
          puces: [
            "Elle tue, élimine ou inactive les micro-organismes (bactéries, champignons, levures, spores selon le produit) et les virus. Son effet est limité dans le temps : sans conditionnement adapté, le matériel peut être de nouveau contaminé.",
            "Des produits adaptés à l'usage, bactéricides, fongicides et virucides : les désinfectants de DM sont eux-mêmes des DM, marqués CE ; les désinfectants de surfaces sont des produits biocides autorisés.",
            "Leur efficacité est démontrée par des normes, par exemple EN 13727 (bactéricide), EN 13624 (fongicide), EN 14476 (virucide). Respecter strictement dilution, temps de contact et rinçage.",
            "Un protocole adapté au DM et à son niveau de risque infectieux : essuyage ou pulvérisation pour le matériel à risque faible ; immersion dans une solution diluée pour le matériel à risque plus élevé, qui contient de l'eau stagnante, comme les humidificateurs."
          ],
          retenir: "On ne désinfecte qu'un DM préalablement nettoyé. La désinfection protège les patients, mais aussi les intervenants et les familles.",
          commentaire: { pistes: ["Le protocole d'un humidificateur à l'agence, étape par étape."], audio: "audio/agence-2.mp3", transcription: "Un désinfectant, ce n'est pas un produit ménager plus fort que les autres. C'est un produit qui a fait ses preuves dans des conditions précises : une dilution, un temps de contact. Si vous rincez trop tôt, ou si vous diluez à l'œil, il ne fait plus ce qu'il promet. Et tous les appareils ne se traitent pas de la même façon. Un humidificateur, avec son eau qui stagne, demande bien plus qu'un coup de chiffon. Mon conseil : gardez les protocoles à portée de main, près du poste de travail, et suivez-les à la lettre." }
        },
        {
          type: "texte", kicker: "La salle de désinfection",
          titre: "Une salle, des règles qui ne se négocient pas",
          puces: [
            "Respecter la marche en avant : le circuit va du sale vers le propre, jamais l'inverse.",
            "Consulter les fiches techniques et les fiches de données de sécurité des produits.",
            "Porter les équipements adaptés : gants, masque, lunettes, blouse.",
            "Ne jamais boire ni manger dans la salle, ni y stocker de boissons ou de nourriture.",
            "Les blouses de désinfection restent dans la salle.",
            "Hygiène des mains avant et après le port des gants, de préférence par friction hydro-alcoolique sur des mains visiblement propres."
          ],
          commentaire: { pistes: ["Le plan de la salle de désinfection de l'agence : où est le sale, où est le propre."], audio: "audio/agence-3.mp3", transcription: "La marche en avant, c'est une idée simple : le matériel avance toujours du sale vers le propre, et ne revient jamais en arrière. Un appareil désinfecté qui repasse par la zone sale doit être refait. Les autres règles découlent de la même logique. On ne mange pas là où l'on manipule des produits et du matériel contaminé. La blouse reste dans la salle, pour ne pas promener ce qu'elle a touché dans le reste de l'agence. Enfin, porter des gants ne dispense pas de l'hygiène des mains : on se frictionne avant de les enfiler, et après les avoir retirés." }
        },
        {
          type: "texte", kicker: "Risques et sécurité à l'agence",
          titre: "Ranger le stock, protéger l'oxygène",
          puces: [
            "Organiser les locaux : étagères de stockage, rotation des stocks (« premier entré, premier sorti », FIFO).",
            "Stocker les matières dangereuses (oxygène) dans un local aéré ou ventilé, propre, fermé à clé, à l'abri des intempéries, avec peu de matières combustibles.",
            "Cuve d'oxygène pour le conditionnement : respecter les prescriptions de la rubrique ICPE 4725, dont l'annexe I de l'arrêté du 10 mars 1997 (régime de déclaration) : implantation, distances, accès, moyens de lutte contre l'incendie, extincteurs adaptés…"
          ],
          commentaire: { pistes: ["Ce qu'un intervenant doit savoir de la cuve de l'agence, même s'il ne la remplit pas."], audio: "audio/agence-4.mp3", transcription: "Un stock bien rangé, ce n'est pas qu'une question d'ordre. Le principe du premier entré, premier sorti évite qu'un appareil reste des mois au fond d'une étagère pendant que les autres tournent. Pour l'oxygène, on retrouve la même logique que dans le véhicule : de l'air, peu de choses qui brûlent, et un local fermé à clé. Et si votre agence a une cuve pour remplir les réservoirs, sachez qu'elle est soumise à des règles strictes d'implantation et de sécurité incendie. Si quelque chose vous paraît anormal autour, signalez-le." }
        }
      ]
    },
    {
      id: "equipe", court: "L'équipe", titre: "Le travail en équipe autour du patient",
      ecrans: [
        {
          type: "texte", kicker: "Les relations interprofessionnelles",
          titre: "Collaborer, un processus vivant",
          puces: [
            "La collaboration interprofessionnelle est un processus d'interaction entre professionnels.",
            "C'est aussi un processus d'interaction entre les professionnels et l'organisation.",
            "C'est un phénomène dynamique, qui évolue."
          ],
          retenir: "Ce qui l'influence : intérêt individuel, intérêt collectif, engagements moraux, motifs altruistes, confiance, argent, pouvoir, prestige.",
          image: "../module-4/img/affiche2.webp", alt: "Deux techniciennes discutent, une tasse à la main, à l'agence.",
          commentaire: { pistes: ["Une relation de travail avec une infirmière ou un pharmacien qui s'est construite avec le temps."], audio: "audio/equipe-1.mp3", transcription: "Travailler ensemble, ça ne se décrète pas. Une collaboration se construit, elle évolue, et elle dépend de beaucoup de choses qu'on ne voit pas toujours : la confiance, l'intérêt de chacun, mais aussi le pouvoir ou le prestige. Le reconnaître, ce n'est pas être cynique. C'est comprendre pourquoi un échange avec un autre professionnel se passe bien, ou mal. De votre côté, ce que vous maîtrisez, c'est la confiance. Une information transmise à temps, une promesse tenue, un appel rendu : c'est comme ça qu'on devient un interlocuteur fiable." }
        },
        {
          type: "texte", kicker: "Le travail en équipe",
          titre: "Un but commun, une chaîne de soins",
          puces: [
            "Dans une prise en charge partagée, chaque membre de l'équipe est responsable de l'atteinte du but commun : la qualité et la sécurité de la prise en charge du patient. Chacun apporte sa compétence, partage les informations utiles et soutient les autres.",
            "La prise en charge n'est de qualité que si l'on respecte la pluridisciplinarité, la prise en charge globale du patient et le travail d'équipe. Chacun a son rôle dans la chaîne des soins, et chaque maillon est indispensable.",
            "Une équipe pluridisciplinaire réunit des personnes de professions et de formations différentes autour d'un objectif commun : prendre soin du patient. Ses membres n'ont pas choisi de travailler ensemble ; chacun a sa personnalité, son histoire et sa culture.",
            "Chacun travaille dans le cadre de son statut, de son rôle et de sa fonction, avec son propre tempérament."
          ],
          retenir: "La prise en charge d'un patient est un travail d'équipe, pas celui d'une personne isolée. La qualité du travail de l'équipe dépend de la qualité du travail de chacun.",
          commentaire: { pistes: ["Ce que les autres professionnels attendent concrètement du technicien."], audio: "audio/equipe-2.mp3", transcription: "Autour d'un patient, il y a souvent beaucoup de monde : un médecin, une infirmière, un pharmacien, et vous. Vous ne vous croisez pas toujours, et pourtant, vous formez une équipe. Ce qui la tient ensemble, ce n'est pas l'amitié, c'est le patient. Vous n'avez pas choisi vos collègues, ils ne vous ont pas choisi non plus, et ce n'est pas grave. Ce qui compte, c'est que chacun fasse bien sa part, et le fasse savoir. Si votre maillon lâche, c'est toute la chaîne qui est fragilisée." }
        },
        {
          type: "texte", kicker: "Autour du patient",
          titre: "Chacun son rôle, chacun son champ",
          puces: [
            "Les membres possibles de l'équipe : médecin, pharmacien, kinésithérapeute, psychologue, psychomotricien, ergothérapeute, orthophoniste, infirmier, aide-soignant, technicien du PSDM… Objectif commun : prendre soin du patient.",
            "Le PSDM intervient sur prescription médicale. Son rôle : mettre à disposition le matériel prescrit, assurer le service associé et suivre l'observance. Il rend compte au prescripteur du suivi du traitement.",
            "Toute anomalie qui peut mettre en danger le patient ou son entourage doit être signalée à la bonne personne."
          ],
          retenir: "Chacun reste dans son champ de compétence : il est dangereux que l'un joue le rôle d'un autre.",
          commentaire: { pistes: ["Les questions de patients qui sortent du champ du technicien, et la réponse à donner."], audio: "audio/equipe-3.mp3", transcription: "Sur le terrain, la tentation est réelle. Le patient vous fait confiance, il vous demande s'il peut baisser son débit, ou arrêter son traitement quelques jours. Vous connaissez bien l'appareil, alors vous avez envie de répondre. Ne le faites pas. Votre rôle, c'est le matériel, le service, et le suivi de l'utilisation. Le traitement, c'est le médecin qui le prescrit. En revanche, ce que vous voyez chez le patient a beaucoup de valeur pour l'équipe. Un appareil qui ne sert pas, un danger dans la maison : ça doit remonter." }
        },
        {
          type: "etapes", kicker: "Les relations interprofessionnelles en pratique",
          titre: "En cas de doute, l'information remonte",
          intro: "Ces relations influencent la prise en charge : il faut les rendre efficaces, dans l'intérêt du patient. Elles reposent sur la communication et la transmission d'informations, dans le respect du secret professionnel et du secret médical.",
          etapes: [
            { titre: "L'intervenant", texte: "En cas de doute, il prévient toujours son responsable direct : responsable technique ou d'agence." },
            { titre: "Le responsable", texte: "Il décide s'il faut prévenir le pharmacien." },
            { titre: "Le pharmacien", texte: "Il décide s'il faut prévenir le médecin. Le pharmacien responsable de la dispensation d'oxygène doit prévenir le prescripteur dans certains cas : danger au domicile, mauvaise observance…" }
          ],
          retenir: "Les professionnels de santé ont des obligations envers leurs collègues.",
          commentaire: { pistes: ["Ce que doit contenir un bon signalement au responsable : les faits, la date, ce qu'on a vu."], audio: "audio/equipe-4.mp3", transcription: "Vous n'avez pas à décider seul si une situation est grave. C'est tout l'intérêt de cette chaîne. Votre rôle, c'est de prévenir votre responsable dès que quelque chose vous interroge. Lui jugera s'il faut aller plus loin. Un patient qui n'utilise plus son appareil, une bougie allumée à côté de l'oxygène, une situation qui vous paraît anormale : n'attendez pas d'être certain. Et quand vous transmettez, restez factuel. Ce que vous avez vu, ce que vous avez entendu, avec la date. C'est ce qui permettra aux autres d'agir." }
        }
      ]
    },
    {
      id: "suivi", court: "Le suivi", titre: "Maintenance, traçabilité et matériovigilance",
      ecrans: [
        {
          type: "texte", kicker: "La maintenance d'un DM",
          titre: "Maintenir le matériel, une responsabilité de l'exploitant",
          corps: [
            "Définition (norme NF EN 13306) : la maintenance est l'ensemble des actions techniques, administratives et de management, menées pendant le cycle de vie d'un bien, pour le maintenir ou le rétablir dans un état où il peut accomplir la fonction requise.",
            "Pour les DM, l'exploitant est responsable de la maintenance dès la mise en service (art. R5212-25 et suivants du Code de la santé publique). S'il fait appel à un prestataire externe (fabricant, distributeur…), il est recommandé de fixer par contrat les obligations de chacun."
          ],
          puces: [
            "L'exploitant définit une politique de maintenance pour tous les DM qu'il exploite, quelle que soit leur classe.",
            "Il tient un inventaire à jour des DM exploités.",
            "Il organise et contrôle l'exécution de la maintenance.",
            "Il tient pour chaque DM un registre des opérations, avec l'identité de l'intervenant et la date."
          ],
          commentaire: { pistes: ["Le registre de maintenance tel qu'il se remplit à l'agence."], audio: "audio/suivi-1.mp3", transcription: "La maintenance, ce n'est pas seulement réparer quand ça casse. C'est tout ce qu'on fait pour qu'un appareil continue de remplir sa fonction, du jour où il est mis en service jusqu'à la fin de sa vie. Pour vous, ça se traduit très concrètement : chaque fois que vous intervenez sur un appareil, ça doit être écrit. Qui, quand, quoi. Mon conseil : remplissez le registre tout de suite, pas en fin de journée. Une opération qui n'est pas notée, aux yeux de tout le monde, c'est une opération qui n'a pas eu lieu." }
        },
        {
          type: "texte", kicker: "Traçabilité et entretien",
          titre: "Quel appareil, chez quel patient",
          puces: [
            "Le fabricant indique dans la notice la nature et la fréquence des opérations d'entretien et d'étalonnage nécessaires au bon fonctionnement et à la sécurité. C'est une exigence de l'annexe I du règlement (UE) 2017/745, qui a remplacé l'« exigence essentielle 13.6 » de la directive 93/42/CEE.",
            "Pour les DM mis à disposition à domicile, le prestataire assure la traçabilité de sa prestation, des DM (numéro de série, de lot, IUD) et de leur maintenance."
          ],
          retenir: "Le prestataire doit pouvoir dire à tout moment quel DM est chez quel patient.",
          commentaire: { pistes: ["Où et comment le numéro de série est relevé lors d'une installation ou d'un échange."], audio: "audio/suivi-2.mp3", transcription: "Imaginez qu'un fabricant découvre un défaut sur une série d'appareils. La première question sera : où sont-ils ? Et c'est vous, sur le terrain, qui rendez la réponse possible. Chaque fois que vous installez, échangez ou reprenez un appareil, son numéro doit être relevé, et rattaché à la bonne personne. Une erreur de saisie, et l'appareil devient introuvable. Pour l'entretien, la référence, c'est la notice du fabricant. C'est elle qui dit quoi faire, et à quelle fréquence. Ne vous fiez pas à l'habitude." }
        },
        {
          type: "cartes", kicker: "Règle 1 · La matériovigilance",
          titre: "Ce que comprend la matériovigilance",
          cartes: [
            { icone: "alert", titre: "Signaler", texte: "Le signalement et l'enregistrement des incidents et des risques d'incidents." },
            { icone: "search", titre: "Évaluer", texte: "L'enregistrement, l'évaluation et l'exploitation de ces informations, dans un but de prévention." },
            { icone: "file", titre: "Étudier", texte: "Les études et travaux sur la sécurité d'utilisation des DM." },
            { icone: "wrench", titre: "Corriger", texte: "La réalisation et le suivi des actions correctives décidées." }
          ],
          commentaire: { pistes: ["Un rappel de lot ou une alerte fabricant déjà traités par l'agence, et ce qu'il a fallu faire."], audio: "audio/suivi-3.mp3", transcription: "La matériovigilance, c'est la surveillance des incidents liés aux dispositifs médicaux. Le mot fait un peu peur, mais l'idée est simple : chaque incident signalé sert à en éviter d'autres, chez d'autres patients. Sans signalement, rien de tout le reste ne peut se faire. Pas d'évaluation, pas d'étude, pas de correction. C'est pour ça que votre rôle compte autant. Un incident qui vous semble isolé s'est peut-être déjà produit ailleurs. Vous ne pouvez pas le savoir. Alors signalez, et laissez les autres faire le lien." }
        },
        {
          type: "texte", kicker: "Règles 2 et 3 · Les mesures conservatoires",
          titre: "Après un incident, les premiers gestes",
          corps: [
            "Un incident, ou un risque d'incident, lors de l'utilisation d'un DM doit amener le déclarant à se demander quelles mesures conservatoires prendre. Elles visent à éviter que l'incident se produise, ou à le faire cesser, dans l'intérêt des victimes actuelles ou possibles ; à éviter qu'il se reproduise, avec le même DM ou un DM du même type ; à faciliter son évaluation ultérieure.",
            "Elles varient selon l'incident. Au minimum :"
          ],
          puces: [
            "Suspendre l'utilisation du DM si la poursuite peut être dangereuse. Cela permet aussi de l'expertiser dans l'état où il était au moment de l'incident, et pour certains DM de lire les paramètres enregistrés.",
            "Récupérer les consommables en cause, et si possible leur emballage.",
            "Organiser le retrait d'un ou plusieurs lots, si l'incident fait craindre que tous les DM du lot soient dangereux.",
            "Conserver en l'état les DM et les consommables, pour l'expertise.",
            "Informer les personnels concernés, pour faire cesser l'incident ou éviter qu'il se reproduise."
          ],
          retenir: "Ces mesures ne doivent pas empêcher l'évaluation par le fabricant ou un expert. À l'inverse, leur absence ne doit pas mettre en danger un patient, un utilisateur ou un tiers.",
          commentaire: { pistes: ["Où mettre de côté un appareil en cause à l'agence, et comment l'identifier."], audio: "audio/suivi-4.mp3", transcription: "Face à un appareil qui a posé problème, le premier réflexe est souvent de vouloir le réparer, ou de le nettoyer pour le rendre présentable. C'est exactement ce qu'il ne faut pas faire. L'appareil doit rester dans l'état où il était au moment de l'incident, avec ses consommables et, si possible, leur emballage. C'est ce qui permettra de comprendre ce qui s'est passé. Une chose passe avant tout : la sécurité du patient. On arrête l'appareil s'il est dangereux, et on le remplace. On conserve, on ne répare pas." }
        }
      ]
    },
    {
      id: "signaler", court: "Signaler", titre: "Signaler un incident : quoi, qui, comment",
      ecrans: [
        {
          type: "duo", kicker: "Règle 4 · Que doit-on déclarer ?",
          titre: "Obligatoire ou facultatif",
          gauche: { etiquette: "Obligatoire, sans délai", titre: "L'incident grave", texte: "Tout incident ou risque d'incident ayant entraîné, ou pouvant entraîner, la mort ou une dégradation grave de l'état de santé d'un patient, d'un utilisateur ou d'un tiers (art. L5212-2 du Code de la santé publique)." },
          droite: { etiquette: "Facultatif", titre: "Les autres anomalies", texte: "Réactions nocives, dysfonctionnements, erreurs de notice : le détail ci-dessous." },
          puces: [
            "Facultatif : une réaction nocive et non voulue, lors d'une utilisation conforme à la destination du DM.",
            "Facultatif : une réaction nocive et non voulue, lors d'une utilisation non conforme aux instructions du fabricant.",
            "Facultatif : tout dysfonctionnement, ou toute altération des caractéristiques ou des performances d'un DM.",
            "Facultatif : toute erreur, omission ou insuffisance dans la notice, le mode d'emploi ou le manuel de maintenance.",
            "Le fabricant doit aussi informer l'ANSM de tout rappel de DM motivé par une raison technique ou médicale. Le RDM (art. 87) lui impose de déclarer les incidents graves et les mesures correctives de sécurité."
          ],
          commentaire: { pistes: ["Un exemple d'incident « facultatif » dont le signalement a été utile."], audio: "audio/signaler-1.mp3", transcription: "La frontière entre obligatoire et facultatif est importante, mais ne vous y arrêtez pas trop. Si un incident a mis, ou aurait pu mettre, la vie ou la santé de quelqu'un en danger, le signalement est obligatoire, et immédiat. Pour tout le reste, il est facultatif. Facultatif ne veut pas dire inutile : une notice mal faite, ou un appareil qui se dérègle souvent, ce sont des informations précieuses. Et si vous hésitez sur la gravité, ce n'est pas à vous de trancher seul. Signalez, et le référent décidera." }
        },
        {
          type: "texte", kicker: "Règles 5 et 6 · Qui déclare, et à qui ?",
          titre: "Toute personne qui constate un incident le signale",
          puces: [
            "Qui ? Toute personne (fabricant, utilisateur, tiers) qui constate un incident ou un risque d'incident mettant en cause un DM, ou qui en a connaissance. Les tiers ne sont ni fabricants, ni utilisateurs, ni patients : par exemple les distributeurs et les prestataires.",
            "Établissement de santé, GCS, ou association distribuant des DM à domicile inscrite sur la liste de l'ANSM : auprès du correspondant local de matériovigilance (CLMV). Sa désignation, avec au moins un suppléant, est obligatoire (art. R5212-12 du Code de la santé publique). Le CLMV transmet ensuite à l'ANSM.",
            "Chez un PSDM : l'organisation interne prévoit en général un référent de matériovigilance, souvent le pharmacien responsable, à qui les intervenants signalent les incidents. Le signalement est ensuite transmis à l'ANSM et au fabricant.",
            "Les professionnels de santé libéraux (médecins, pneumologues, infirmiers…) déclarent directement à l'ANSM. Les patients peuvent déclarer eux-mêmes, ou passer par leur prestataire.",
            "Les CLMV sont formés et appuyés par les coordonnateurs régionaux de matériovigilance et de réactovigilance (CRMRV). L'ANSM n'a pas de directeurs régionaux."
          ],
          retenir: "Canal unique : le portail de signalement des événements sanitaires indésirables, signalement-sante.gouv.fr.",
          commentaire: { pistes: ["Le nom et le contact du référent de matériovigilance de l'entreprise."], audio: "audio/signaler-2.mp3", transcription: "Retenez d'abord ceci : tout le monde peut signaler. Vous n'avez pas besoin d'un titre particulier, ni d'une autorisation. Si vous avez connaissance d'un incident, vous êtes concerné. Dans votre entreprise, le chemin est simple : vous prévenez le référent de matériovigilance, le plus souvent le pharmacien responsable. C'est lui qui fera la déclaration officielle. Mon conseil : vérifiez dès aujourd'hui que vous savez qui est ce référent, et comment le joindre. Le jour où un incident arrive, ce n'est pas le moment de chercher." }
        },
        {
          type: "texte", kicker: "Règle 7 · Comment déclarer ?",
          titre: "Une déclaration en trois parties",
          puces: [
            "Il est recommandé de mettre à la disposition des intervenants un formulaire de signalement interne, pour que la déclaration à l'ANSM soit centralisée par le référent.",
            "La déclaration en ligne comporte trois parties : l'émetteur du signalement ; le dispositif en cause (dénomination, fabricant, référence, numéro de lot ou de série, IUD) ; la description de l'incident (circonstances, conséquences cliniques, gravité, mesures conservatoires prises).",
            "Pour savoir si la déclaration est obligatoire, facultative ou inutile, l'ANSM propose un logigramme d'aide au signalement (version 2022, sur ansm.sante.fr)."
          ],
          retenir: "L'absence de déclaration d'un incident grave est pénalement sanctionnée.",
          image: "../module-4/img/ch5.webp", alt: "Une technicienne téléphone, assise dans sa camionnette garée.",
          commentaire: { pistes: ["Le formulaire de signalement interne de l'entreprise, rempli sur un cas fictif."], audio: "audio/signaler-3.mp3", transcription: "Le formulaire peut paraître administratif, mais chaque case a son utilité. Le numéro de série ou de lot, c'est ce qui permet de savoir si d'autres appareils sont concernés. Les circonstances, c'est ce qui permet de comprendre. Alors, au moment de l'incident, notez tout de suite ce que vous voyez : l'heure, ce que faisait l'appareil, ce que dit le patient, ce que vous avez fait. Quelques jours plus tard, les souvenirs se brouillent. Et rappelez-vous : un incident grave qui n'est pas déclaré, ce n'est pas un oubli. C'est une faute, et elle est sanctionnée." }
        },
        {
          type: "chaine", kicker: "En résumé",
          titre: "Le circuit du signalement",
          maillons: [
            { titre: "Le patient", texte: "Il signale l'incident à son prestataire, ou directement sur signalement-sante.gouv.fr." },
            { titre: "L'intervenant", texte: "Il signale l'incident à son référent de matériovigilance, en général le pharmacien responsable." },
            { titre: "Le référent", texte: "Il déclare à l'ANSM et informe le fabricant." },
            { titre: "L'ANSM", texte: "Elle reçoit aussi directement les déclarations des professionnels de santé libéraux." }
          ],
          retenir: "Patient, puis PSDM (intervenant), puis référent ou pharmacien responsable, puis ANSM.",
          commentaire: { pistes: ["Les petites phrases de patients qui doivent alerter le technicien."], audio: "audio/signaler-4.mp3", transcription: "Ce circuit, gardez-le en tête comme un réflexe. Le patient vous parle d'un problème, vous le transmettez au référent, et le référent s'occupe de la suite. Votre maillon est souvent le plus important, parce que c'est vous que le patient voit. Il ne pensera pas toujours à déclarer lui-même, mais il vous dira que son appareil fait un bruit inhabituel, ou qu'il a eu un souci la nuit dernière. Écoutez ces petites phrases. Ce sont parfois les premiers signes d'un incident." }
        }
      ]
    },
    {
      id: "arrivee", court: "Arrivée", titre: "Fin de tournée",
      ecrans: [
        {
          type: "duo", kicker: "Les moyens de prévention",
          titre: "Prévenir, pour les intervenants et pour les patients",
          gauche: { etiquette: "Pour les intervenants", titre: "Hygiène et sécurité au travail", texte: "Nettoyer puis désinfecter le matériel manipulé. Friction hydro-alcoolique, ou lavage des mains au savon si elles sont visiblement sales, avant et après chaque patient. Procédures de la salle de désinfection : marche en avant, ni nourriture ni boisson, EPI selon les produits. EPI adaptés à chaque situation. Règles de transport : Code de la route, entretien et aménagement du véhicule." },
          droite: { etiquette: "Pour les patients", titre: "Un matériel sain et sûr", texte: "Matériel nettoyé et désinfecté, hygiène des mains de l'intervenant avant chaque contact, véhicules de transport propres. DM conformes au règlement (UE) 2017/745 (marquage CE) et en bon état, éducation du patient et documents explicatifs, numéro d'astreinte téléphonique, matériel installé à un endroit adapté." },
          commentaire: { pistes: ["Le geste de prévention qu'elle voit le plus souvent oublié."], audio: "audio/arrivee-1.mp3", transcription: "On arrive au bout de la tournée. Prenez un instant pour comparer ces deux listes. Presque chaque geste demandé aux intervenants protège aussi le patient. Quand vous vous frictionnez les mains, vous vous protégez, et vous protégez la personne que vous allez toucher. Quand vous attachez solidement une bouteille, vous évitez un accident sur la route, et vous livrez un matériel intact. L'hygiène et la sécurité, ce ne sont pas des contraintes ajoutées au métier. C'est le métier lui-même, fait correctement." }
        },
        {
          type: "quiz", kicker: "À vous de jouer",
          titre: "Cinq situations, une bonne réponse à chaque fois",
          image: "../module-4/img/ch6.webp", alt: "Deux techniciennes étudient des cartes de cas pratiques à l'agence.",
          questions: [
            {
              q: "Fin de traitement chez M. Leroy. Ses lunettes à oxygène ont servi deux jours et ont l'air neuves.",
              choix: ["Vous les rapportez à l'agence pour les désinfecter.", "Elles restent chez le patient : elles ne seront jamais réutilisées.", "Vous les gardez pour un autre patient, puisqu'elles ont peu servi."],
              bonne: 1,
              explication: "Un DM à usage unique utilisé, ou dont l'emballage n'est plus intact, reste chez le patient. Il n'est jamais réutilisé pour un autre patient."
            },
            {
              q: "Un humidificateur revient à l'agence. Il a l'air propre.",
              choix: ["Vous le désinfectez directement : il n'est pas sale.", "Vous le filmez et le rangez dans le stock propre.", "Vous le nettoyez, puis le désinfectez selon le protocole prévu pour le matériel contenant de l'eau stagnante."],
              bonne: 2,
              explication: "Propre ne veut pas dire désinfecté, et on ne désinfecte qu'un DM préalablement nettoyé. Un humidificateur, qui contient de l'eau stagnante, relève d'un protocole à risque plus élevé, par exemple par immersion."
            },
            {
              q: "Chez Mme Roux, sous oxygène, vous remarquez un cendrier plein et des bougies à côté du concentrateur.",
              choix: ["Vous expliquez le danger, vérifiez qu'elle a compris et prévenez votre responsable.", "Vous ne dites rien : vous êtes chez elle.", "Vous éteignez les bougies et repartez."],
              bonne: 0,
              explication: "Le tabac et les flammes sont un danger majeur avec l'oxygène. Informer, vérifier la compréhension et faire remonter : le pharmacien responsable doit prévenir le prescripteur en cas de danger au domicile."
            },
            {
              q: "Vous reprenez le matériel d'un patient atteint de tuberculose.",
              choix: ["Des gants suffisent.", "Gants et masque FFP2 ; le matériel est emballé dans un sac avant d'être chargé.", "Vous demandez à la famille de sortir l'appareil sur le palier."],
              bonne: 1,
              explication: "Pour une maladie à transmission aérienne, les gants ne suffisent pas : masque FFP2. Le matériel souillé est emballé avant d'entrer dans le véhicule, avec une friction des mains avant et après."
            },
            {
              q: "Un patient vous dit que son appareil s'est arrêté pendant la nuit et qu'il a fait un malaise.",
              choix: ["Vous le réparez sur place et le remettez en service.", "Vous le nettoyez avant de le rapporter, pour qu'il soit présentable.", "Vous le remplacez, conservez l'appareil en l'état avec ses consommables, et prévenez sans délai le référent de matériovigilance."],
              bonne: 2,
              explication: "Incident grave possible : signalement obligatoire et sans délai. Mesures conservatoires : suspendre l'utilisation et conserver le DM en l'état pour l'expertise, sans mettre le patient en danger."
            }
          ],
          commentaire: { pistes: ["Reprendre la question la plus souvent ratée en formation et raconter le cas réel derrière."], audio: "audio/arrivee-2.mp3", transcription: "Place à la pratique. Ces cinq situations touchent à tout ce qu'on a vu : l'usage unique, la désinfection, les risques au domicile, la protection pendant une reprise, et le signalement d'un incident. Lisez chaque cas, choisissez votre réponse, puis lisez l'explication, même si vous avez trouvé la bonne. Si une situation vous fait hésiter, notez-la et apportez-la en formation. C'est souvent sur ces hésitations qu'on progresse le plus, parce qu'elles ressemblent à ce qu'on vit vraiment sur le terrain." }
        },
        {
          type: "memo", kicker: "Fiche mémo",
          titre: "Ce qu'il faut garder en tête",
          points: [
            "L'hygiène, c'est nettoyer, désinfecter, conserver. On ne désinfecte qu'un DM préalablement nettoyé.",
            "La désinfection pour les objets, l'antisepsie pour la peau et les muqueuses.",
            "Un DM à usage unique utilisé ou ouvert reste chez le patient, jamais réutilisé.",
            "Des DM conformes : marquage CE, classe de risque, notice, identifiant unique.",
            "Dans le véhicule : le sale dans des sacs, le propre filmé, l'oxygène arrimé, aéré, loin de toute flamme.",
            "Au domicile : évaluer les risques, surtout le tabac et les flammes avec l'oxygène, et vérifier que le patient a compris.",
            "En reprise : gants, masque FFP2 si maladie à transmission aérienne, matériel emballé, friction des mains.",
            "À l'agence : marche en avant, produits adaptés, dilution et temps de contact stricts.",
            "Chacun reste dans son champ de compétence ; en cas de doute, prévenir son responsable.",
            "Tracer chaque DM et chaque opération de maintenance.",
            "Incident : conserver le DM en l'état et prévenir le référent de matériovigilance ; un incident grave se déclare sans délai."
          ],
          commentaire: { pistes: ["Le mot de la fin : le réflexe qu'elle aimerait voir appliqué dès demain."], audio: "audio/arrivee-3.mp3", transcription: "Voilà, la tournée est terminée. Si vous ne deviez retenir qu'une idée de ce module, ce serait celle-ci : le matériel que vous confiez à un patient doit être propre, sûr, et toujours retrouvable. Propre, grâce au nettoyage et à la désinfection. Sûr, grâce à votre regard sur la route et sur le domicile. Retrouvable, grâce à la traçabilité. Et quand quelque chose ne va pas, on signale. Imprimez cette fiche, gardez-la dans votre véhicule, et relisez-la de temps en temps. Merci de m'avoir suivie, et à bientôt." }
        }
      ]
    }
  ]
};

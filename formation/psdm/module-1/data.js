/* Module 1 — données affichées par ../../assets/formation.js.
   Chaque écran : ce qui s'affiche + un commentaire de la formatrice
   (pistes, audio et transcription). Images reprises du module 4. */
window.MODULE = {
  formation: "Formation PSDM · Garant professionnel de santé",
  numero: 1,
  titre: "Contexte réglementaire",
  titreCourt: "Contexte réglementaire",
  formatrice: { nom: "Stéphanie Plaisant", initiales: "SP", role: "formatrice PSDM", photo: "../../img/stephanie.webp" },
  version: "Version du 7 novembre 2026",

  chapitres: [
    {
      id: "depart", court: "Départ", titre: "Avant de prendre la route",
      ecrans: [
        {
          type: "intro", kicker: "Module 1",
          titre: "Chaque règle du métier a une origine",
          corps: "Ce module remonte le fil : le système de santé, la Sécurité sociale, la réglementation des dispositifs médicaux, leur remboursement, puis les démarches pour installer un prestataire.",
          objectifs: [
            "Situer les acteurs du système de santé et de la Sécurité sociale",
            "Comprendre comment un soin et un dispositif médical sont remboursés",
            "Connaître la réglementation des dispositifs médicaux et le marquage CE",
            "Savoir quelles démarches encadrent l'activité d'un PSDM"
          ],
          image: "../module-4/img/ch1.webp", alt: "Une technicienne sonne à la porte d'une maison, sa mallette à la main.",
          commentaire: {
            pistes: ["Pourquoi la réglementation sert sur le terrain : un exemple de question de patient qu'elle permet de résoudre."],
            audio: "audio/depart-1.mp3",
            transcription: "Bonjour, et bienvenue dans ce premier module. Je sais ce que vous vous dites : la réglementation, c'est le chapitre qu'on aimerait sauter. Et pourtant, c'est lui qui explique presque tout ce que vous faites chaque jour. Pourquoi le patient doit signer tel document, pourquoi tel appareil est remboursé et pas tel autre, pourquoi votre agence a besoin d'une autorisation pour livrer de l'oxygène. On va donc remonter le fil, du système de santé jusqu'à votre entreprise. Vous n'avez pas à tout apprendre par cœur : l'important, c'est de savoir qui fait quoi. Allez, on prend la route."
          }
        }
      ]
    },
    {
      id: "etat", court: "L'État", titre: "Qui pilote la santé en France",
      ecrans: [
        {
          type: "texte", kicker: "L'organisation du système de santé",
          titre: "Un ministère, des agences, une autorité indépendante",
          corps: [
            "Au niveau national : le ministère chargé de la santé, dont l'intitulé change selon les gouvernements. Il comprend notamment la Direction générale de l'offre de soins (DGOS), la Direction générale de la santé (DGS) et la Direction de la Sécurité sociale (DSS).",
            "Les agences sanitaires exercent une partie des missions de l'État :"
          ],
          puces: [
            "Agence de la biomédecine (ABM)",
            "Agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail (ANSES)",
            "Agence nationale de sécurité du médicament et des produits de santé (ANSM)",
            "Établissement français du sang (EFS)",
            "Institut national du cancer (INCa)",
            "Santé publique France, qui regroupe depuis 2016 l'ex-InVS, l'ex-INPES et l'ex-EPRUS",
            "Autorité de sûreté nucléaire et de radioprotection (ASNR), qui regroupe depuis le 1er janvier 2025 l'ex-ASN et l'ex-IRSN"
          ],
          retenir: "À part : la Haute Autorité de santé (HAS) est une autorité publique indépendante, qui ne dépend pas du ministère. Au niveau régional : les Agences régionales de santé (ARS), créées par la loi « Hôpital, patients, santé et territoires » (HPST) du 21 juillet 2009.",
          commentaire: {
            pistes: ["Les trois organismes qu'un technicien croise vraiment : HAS, ANSM, ARS."],
            audio: "audio/etat-1.mp3",
            transcription: "Cette liste peut donner le tournis, avec tous ces noms d'agences. Rassurez-vous : sur le terrain, vous en croiserez surtout trois. La Haute Autorité de santé, qui évalue et qui certifie. L'agence du médicament, qui surveille la sécurité des appareils que vous installez. Et l'agence régionale de santé, qui délivre les autorisations près de chez vous. Les autres agences existent, et il est bon de savoir qu'elles sont là, mais elles touchent moins votre quotidien. Mon conseil : retenez ces trois-là, et ce qu'elles font. Le reste se retrouve facilement quand on en a besoin."
          }
        },
        {
          type: "texte", kicker: "La Haute Autorité de santé (HAS)",
          titre: "Évaluer, recommander, certifier, informer",
          corps: ["La HAS est une autorité publique indépendante à caractère scientifique, créée en 2004. Ses grandes fonctions :"],
          puces: [
            "Évaluer les médicaments, les dispositifs médicaux et les actes, en vue de leur remboursement.",
            "Recommander les bonnes pratiques aux professionnels, et éclairer les décideurs publics.",
            "Certifier les établissements de santé. Elle pilote aussi la certification des PSDM (voir module 2).",
            "Informer les professionnels et le public.",
            "Ses principales commissions : Commission de la transparence (CT), qui évalue les médicaments ; Commission nationale d'évaluation des dispositifs médicaux et des technologies de santé (CNEDiMTS), qui évalue les DM, les actes et les technologies de santé ; Commission évaluation économique et de santé publique (CEESP) ; Commission de certification des établissements de santé ; Commission des recommandations de bonne pratique ; Commission sociale et médico-sociale."
          ],
          retenir: "La CNEDiMTS est la commission qui concerne directement les PSDM.",
          commentaire: {
            pistes: ["Ce que la certification HAS change concrètement pour une agence de prestataire."],
            audio: "audio/etat-2.mp3",
            transcription: "La Haute Autorité de santé a une particularité qui compte : elle est indépendante. Elle ne reçoit pas d'ordres du ministère, et c'est ce qui donne du poids à ses avis. Pour vous, elle compte de deux façons. D'abord par sa commission qui évalue les dispositifs médicaux : c'est elle qui dit si un appareil rend vraiment service au patient. Ensuite par la certification des prestataires, qu'on verra en détail dans le module deux. Autrement dit, la Haute Autorité regarde à la fois le matériel que vous installez et la façon dont votre entreprise travaille."
          }
        },
        {
          type: "texte", kicker: "L'ANSM",
          titre: "La sécurité des produits de santé, toute leur vie",
          corps: ["L'Agence nationale de sécurité du médicament et des produits de santé, créée en 2012, a succédé à l'Afssaps. Elle évalue les risques sanitaires des médicaments et des produits de santé. Ses missions principales :"],
          puces: [
            "Garantir la sécurité des produits de santé tout au long de leur cycle de vie, des essais cliniques à la surveillance après la mise sur le marché : médicaments, dispositifs médicaux, dispositifs de diagnostic in vitro, produits biologiques…",
            "Autoriser, inspecter et contrôler les établissements pharmaceutiques, et décider de leur fermeture.",
            "Surveiller et contrôler la publicité sur les produits de santé.",
            "Animer la matériovigilance (voir module 3)."
          ],
          note: "Depuis le 1er janvier 2024, la vigilance sur les cosmétiques et les produits de tatouage relève de l'ANSES, et la surveillance de leur marché de la DGCCRF.",
          commentaire: {
            pistes: ["Le trajet d'un signalement de matériovigilance, de l'agence jusqu'à l'ANSM."],
            audio: "audio/etat-3.mp3",
            transcription: "L'agence du médicament, on la cite souvent pour les médicaments, mais elle surveille aussi tous les dispositifs médicaux, du concentrateur d'oxygène au lit médicalisé. Et elle le fait sur toute leur vie, pas seulement au moment de leur mise sur le marché. C'est elle qui anime la matériovigilance, dont on parlera dans le module trois. Concrètement, quand vous signalez un appareil qui a eu un comportement anormal chez un patient, c'est vers elle que l'information remonte. Votre signalement n'est donc pas une formalité : il peut déclencher le rappel d'un produit dans tout le pays."
          }
        },
        {
          type: "texte", kicker: "Les Agences régionales de santé (ARS)",
          titre: "L'État à l'échelle de la région",
          corps: ["Les ARS pilotent la politique de santé en région. Leurs missions principales :"],
          puces: [
            "Le pilotage de la santé publique : organiser la veille et la sécurité sanitaires, et l'observation de la santé ; définir, financer et évaluer les actions de prévention et de promotion de la santé ; contribuer à la gestion des crises sanitaires, avec le préfet.",
            "La régulation de l'offre de santé (secteurs ambulatoire, hospitalier et médico-social) : réguler, orienter et organiser l'offre de soins ; autoriser la création des établissements et services sanitaires et médico-sociaux, et contrôler leur fonctionnement.",
            "Mener, avec l'Assurance maladie et la Caisse nationale de solidarité pour l'autonomie (CNSA), des actions de gestion du risque en région."
          ],
          retenir: "Pour les PSDM : l'ARS délivre l'autorisation de dispenser de l'oxygène à usage médical à domicile (voir l'arrêt « L'oxygène »).",
          commentaire: {
            pistes: ["Comment se passe la visite d'un pharmacien inspecteur de l'ARS dans une agence."],
            audio: "audio/etat-4.mp3",
            transcription: "L'agence régionale de santé, c'est l'État à l'échelle de votre région. Elle a deux grandes missions : veiller sur la santé de la population, et organiser l'offre de soins. Pour une entreprise comme la vôtre, elle a un rôle très concret : c'est elle qui autorise votre agence à dispenser de l'oxygène à domicile. Sans cette autorisation, pas d'oxygène. C'est aussi elle qui envoie un pharmacien vérifier vos locaux. Retenez donc son nom : si un jour un contrôleur de l'État passe la porte de votre agence, il viendra très probablement de là."
          }
        }
      ]
    },
    {
      id: "secu", court: "La Sécu", titre: "La Sécurité sociale",
      ecrans: [
        {
          type: "cartes", kicker: "Les grands principes",
          titre: "Quatre principes fondateurs",
          cartes: [
            { icone: "shield", titre: "Universalité", texte: "Tous les résidents stables et réguliers sont couverts, et l'affiliation à la Sécurité sociale est obligatoire." },
            { icone: "grid", titre: "Globalité", texte: "La protection sociale couvre les aléas de la vie : maladie, maternité, invalidité, décès, accidents du travail et maladies professionnelles, vieillesse, famille, perte d'autonomie. Le chômage relève d'un régime distinct, l'assurance chômage." },
            { icone: "heart", titre: "Solidarité", texte: "Chacun cotise selon ses moyens et reçoit selon ses besoins. Le financement est collectif : cotisations, CSG, impôts et taxes." },
            { icone: "scale", titre: "Gestion paritaire", texte: "Historiquement, les caisses sont administrées par des représentants des assurés et des employeurs. L'État fixe le cadre : chaque année, le Parlement vote la loi de financement de la Sécurité sociale (LFSS)." }
          ],
          retenir: "L'État pilote et régule le système (lois, ministère, ARS), mais il ne finance pas seul les soins et ne les produit pas seul. Les soins sont financés surtout par l'Assurance maladie, et produits par des acteurs publics et privés : hôpitaux, cliniques, professionnels libéraux.",
          commentaire: {
            pistes: ["Expliquer à un patient d'où vient l'argent qui paie son matériel."],
            audio: "audio/secu-1.mp3",
            transcription: "Ces quatre principes, on les récite parfois sans y penser. Pourtant, ils expliquent ce que vous vivez chez les patients. L'universalité, c'est la raison pour laquelle vous installez le même appareil chez un cadre et chez une personne sans ressources. La solidarité, c'est ce qui permet à un patient de recevoir un matériel coûteux sans le payer lui-même. Quand un patient s'étonne qu'on lui livre un concentrateur sans rien lui demander, vous pouvez lui expliquer d'où vient cet argent : de tous ceux qui cotisent. Ça aide aussi à comprendre pourquoi on lui demande d'en prendre soin."
          }
        },
        {
          type: "texte", kicker: "La Sécurité sociale",
          titre: "Plusieurs régimes, une même protection",
          corps: [
            "La Sécurité sociale est l'ensemble des dispositifs et des institutions qui protègent les personnes contre les conséquences financières des risques sociaux.",
            "L'Union nationale des caisses d'assurance maladie (Uncam), créée en 2004, réunit les principaux régimes d'assurance maladie. Elle conduit la politique conventionnelle avec les professionnels, définit le champ des prestations remboursables et fixe les taux de prise en charge."
          ],
          puces: [
            "Le régime général couvre environ 88 % de la population : les salariés du privé, les travailleurs indépendants depuis la fin du RSI, et les bénéficiaires de la protection universelle maladie (PUMa). Les droits de l'assuré figurent sur la carte Vitale.",
            "Le régime agricole couvre les exploitants et les salariés agricoles, soit environ 3 millions de personnes. Il est géré par la Mutualité sociale agricole (MSA)."
          ],
          commentaire: {
            pistes: ["Le réflexe quand un dossier bloque : vérifier de quelle caisse dépend le patient."],
            audio: "audio/secu-2.mp3",
            transcription: "Derrière le mot Sécurité sociale, il y a plusieurs régimes, et ça a une conséquence pratique pour vous. La grande majorité de vos patients dépendent du régime général. Mais un agriculteur, ou un ancien salarié agricole, dépend de la Mutualité sociale agricole, avec sa propre caisse. Le jour où un dossier de prise en charge bloque, la première question à se poser, c'est donc : de quelle caisse dépend ce patient ? Et pensez à vérifier sa carte Vitale : c'est là que figurent ses droits."
          }
        },
        {
          type: "texte", kicker: "Les régimes spéciaux",
          titre: "Plus anciens que le régime général",
          puces: [
            "Ils sont antérieurs au régime général (1945), et ont été maintenus à sa création.",
            "Ils concernent certaines professions ou entreprises : marins (ENIM), mines, SNCF, RATP, industries électriques et gazières (EDF-GDF), Banque de France, clercs et employés de notaire, cultes (CAVIMAC), etc.",
            "Selon le périmètre retenu, on en compte une à deux dizaines, et non « une centaine ».",
            "Plusieurs régimes spéciaux de retraite sont fermés aux nouveaux embauchés depuis 2023."
          ],
          commentaire: {
            pistes: ["Un patient affilié à un régime spécial : ce qui change pour le dossier."],
            audio: "audio/secu-3.mp3",
            transcription: "Les régimes spéciaux, c'est une partie de l'histoire de la Sécurité sociale. Ils existaient avant elle, et on les a conservés quand elle a été créée, après la guerre. On en compte aujourd'hui une à deux dizaines, selon la façon de compter. Pour vous, l'enjeu est simple : un ancien cheminot ou un ancien marin peut dépendre d'une caisse particulière. Ce n'est pas plus compliqué, mais l'interlocuteur n'est pas le même."
          }
        },
        {
          type: "cartes", kicker: "Les branches du régime général",
          titre: "Cinq branches et une activité de recouvrement",
          cartes: [
            { icone: "heart", titre: "Maladie", texte: "Maladie, maternité, invalidité, décès. Caisse nationale : CNAM (Caisse nationale de l'assurance maladie, ex-CNAMTS). Réseau : une CPAM par département (une centaine) ; CGSS outre-mer ; CCSS en Lozère ; CSS à Mayotte." },
            { icone: "hand", titre: "Accidents du travail et maladies professionnelles", texte: "Branche AT-MP, gérée par la CNAM. Réseau : CPAM et CARSAT (prévention)." },
            { icone: "sun", titre: "Vieillesse", texte: "Retraite, veuvage. Caisse nationale : CNAV. Réseau : CARSAT." },
            { icone: "shield", titre: "Famille", texte: "Prestations familiales, aides au logement, versement du RSA pour le compte des départements. Caisse nationale : CNAF. Réseau : CAF." },
            { icone: "ear", titre: "Autonomie (depuis 2021)", texte: "Perte d'autonomie, handicap. Caisse nationale : CNSA. Réseau : départements, MDPH." },
            { icone: "scale", titre: "Recouvrement", texte: "Collecte des cotisations et contributions par le réseau des Urssaf, piloté par l'Urssaf Caisse nationale (ex-ACOSS, renommée en 2021)." }
          ],
          retenir: "L'UCANSS gère les questions communes à tout le régime général : conventions collectives, formation du personnel…",
          commentaire: {
            pistes: ["Où se situe le matériel d'un PSDM dans ces branches : maladie, et parfois autonomie."],
            audio: "audio/secu-4.mp3",
            transcription: "Ce tableau, on n'a pas besoin de le connaître par cœur. Ce qui compte, c'est de savoir dans quelle case on se trouve. Le matériel que vous installez est remboursé par la branche maladie, à travers la caisse primaire du département du patient. Mais certains de vos patients relèvent aussi de la branche autonomie, la plus récente, créée en deux mille vingt et un pour la perte d'autonomie et le handicap. Quand un patient vous parle de ses démarches auprès de la maison départementale des personnes handicapées, vous savez maintenant où ça se situe."
          }
        }
      ]
    },
    {
      id: "rembourser", court: "Rembourser", titre: "La prise en charge financière des soins",
      ecrans: [
        {
          type: "etapes", kicker: "Le régime obligatoire",
          titre: "D'une consultation à 30 € à un remboursement de 19 €",
          intro: "Trois étages se succèdent : le régime obligatoire, puis la complémentaire, puis le reste à charge. L'Assurance maladie rembourse une partie des soins selon un tarif conventionnel (la base de remboursement) et un taux fixé par type de soin. Exemple : consultation chez un médecin généraliste de secteur 1, dans le parcours de soins coordonnés.",
          etapes: [
            { titre: "Tarif conventionnel : 30 €", texte: "Depuis le 22 décembre 2024." },
            { titre: "Taux de remboursement : 70 %", texte: "Soit 21 €." },
            { titre: "Participation forfaitaire : − 2 €", texte: "À la charge de l'assuré. Elle n'est pas remboursée par la complémentaire." },
            { titre: "Remboursement : 19 €", texte: "Versé par l'Assurance maladie." }
          ],
          retenir: "La part qui reste après le remboursement de la Sécurité sociale s'appelle le ticket modérateur, ici 30 % du tarif. Il est payé par l'assuré, ou par sa complémentaire santé.",
          commentaire: {
            pistes: ["La question « pourquoi je paie 2 € alors que j'ai une mutuelle ? » et comment y répondre."],
            audio: "audio/rembourser-1.mp3",
            transcription: "Ce petit calcul, je vous conseille de le maîtriser, parce que les patients vous posent souvent la question. Pourquoi est-ce que je paie deux euros alors que j'ai une mutuelle ? Eh bien justement : ces deux euros ne sont jamais remboursés, ni par la Sécurité sociale, ni par la complémentaire. C'est voulu. La logique est toujours la même : un tarif de référence, un taux de remboursement, et ce qui reste à la charge du patient ou de sa mutuelle. Et comme les tarifs changent régulièrement, vérifiez-les avant d'en parler."
          }
        },
        {
          type: "texte", kicker: "L'hospitalisation",
          titre: "80 % remboursés, et des cas à 100 %",
          corps: ["L'Assurance maladie rembourse 80 % des frais d'hospitalisation. Les 20 % restants (ticket modérateur) sont à la charge de l'assuré ou de sa complémentaire. S'y ajoute le forfait journalier hospitalier de 20 € par jour (15 € en psychiatrie), jamais remboursé par l'Assurance maladie.", "La prise en charge est portée à 100 % du tarif conventionnel notamment dans ces cas :"],
          puces: [
            "soins en rapport avec une affection de longue durée (ALD) ;",
            "accident du travail ou maladie professionnelle ;",
            "maternité : à partir du 1er jour du 6e mois de grossesse et jusqu'à 12 jours après l'accouchement ;",
            "hospitalisation de plus de 30 jours, à partir du 31e jour ;",
            "bénéficiaires de la Complémentaire santé solidaire (C2S) ou de l'Aide médicale de l'État (AME)."
          ],
          retenir: "Actes lourds : quand un acte coûte 120 € ou plus (ou a un coefficient d'au moins 60), le ticket modérateur est remplacé par une participation forfaitaire de 24 €, due une seule fois par séjour. Ce n'est pas une prise en charge à 100 %.",
          commentaire: {
            pistes: ["Les patients qui sortent de l'hôpital avec des factures qu'ils ne comprennent pas."],
            audio: "audio/rembourser-2.mp3",
            transcription: "L'hospitalisation, ce n'est pas votre cœur de métier, mais beaucoup de vos patients sortent de l'hôpital quand vous les rencontrez. Et ils arrivent parfois avec des factures qu'ils ne comprennent pas. Le forfait journalier, par exemple, n'est jamais remboursé par l'Assurance maladie. Retenez surtout la liste des cas pris en charge à cent pour cent. L'affection de longue durée, notamment, concerne une grande partie de vos patients. Attention à une confusion fréquente : la participation pour les actes lourds n'est pas une prise en charge totale."
          }
        },
        {
          type: "texte", kicker: "La protection universelle maladie (PUMa)",
          titre: "Résider en France suffit pour être couvert",
          corps: ["Depuis le 1er janvier 2016, toute personne qui travaille ou réside en France de manière stable et régulière a droit à la prise en charge de ses frais de santé (article 59 de la LFSS pour 2016). La CMU de base a donc disparu."],
          puces: [
            "Les salariés n'ont plus à justifier d'un temps d'activité minimum.",
            "Les personnes sans activité sont couvertes au seul titre de leur résidence stable et régulière.",
            "Objectifs : simplifier la vie des assurés, assurer la continuité des droits, réduire les démarches administratives, renforcer l'autonomie et la confidentialité de chaque assuré."
          ],
          retenir: "Un assuré reste dans son régime en cas de perte d'activité ou de changement de situation, ce qui évite les ruptures de droits.",
          commentaire: {
            pistes: ["Que faire quand un patient dit que sa prise en charge a été interrompue."],
            audio: "audio/rembourser-3.mp3",
            transcription: "La protection universelle maladie, c'est une réforme discrète, mais elle a beaucoup simplifié la vie des patients. Avant, un changement de travail ou une période sans activité pouvait faire perdre ses droits pendant quelques semaines. Aujourd'hui, il suffit de vivre en France de façon stable et régulière pour être couvert. Pour vous, ça veut dire moins de patients qui se retrouvent sans droits du jour au lendemain. Mais si un patient vous dit que sa prise en charge a été interrompue, ne le laissez pas seul avec ça : orientez-le vers sa caisse, sans attendre."
          }
        },
        {
          type: "cartes", kicker: "C2S, AME, complémentaires santé",
          titre: "Couvrir ce que la Sécurité sociale laisse",
          cartes: [
            { icone: "heart", titre: "C2S", texte: "Complémentaire santé solidaire. Depuis novembre 2019, elle remplace la CMU-C et l'ACS. Gratuite, ou moins de 1 € par jour et par personne, selon les revenus." },
            { icone: "shield", titre: "AME", texte: "Aide médicale de l'État. Elle prend en charge les soins des étrangers en situation irrégulière qui résident en France depuis au moins 3 mois et ont de faibles ressources." },
            { icone: "hand", titre: "Mutuelles", texte: "Complémentaires à but non lucratif : l'excédent profite aux adhérents." },
            { icone: "scale", titre: "Sociétés d'assurance", texte: "Complémentaires à but lucratif." },
            { icone: "grid", titre: "Institutions de prévoyance", texte: "À but non lucratif, gérées paritairement, surtout pour les contrats d'entreprise." }
          ],
          retenir: "Pour couvrir le ticket modérateur, l'assuré qui n'a ni la C2S ni l'AME peut adhérer à une complémentaire santé, de l'un de ces trois types.",
          commentaire: {
            pistes: ["Orienter un patient aux faibles ressources sans monter son dossier à sa place."],
            audio: "audio/rembourser-4.mp3",
            transcription: "Ici, on touche à une question sensible : l'argent. Certains de vos patients ont peu de ressources, et ils hésitent à en parler. Sachez que la complémentaire santé solidaire existe, qu'elle est gratuite ou presque, et qu'elle remplace d'anciens dispositifs dont ils ont peut-être entendu parler. Vous n'avez pas à monter le dossier à leur place, ce n'est pas votre rôle. Mais vous pouvez leur dire que cette aide existe, et les orienter vers leur caisse ou vers une assistante sociale. Une simple information, donnée au bon moment, peut éviter qu'un patient renonce à se soigner."
          }
        }
      ]
    },
    {
      id: "dm", court: "Le DM", titre: "Qu'est-ce qu'un dispositif médical ?",
      ecrans: [
        {
          type: "texte", kicker: "Définition (RDM, article 2, point 1)",
          titre: "Une fin médicale, sans action pharmacologique",
          corps: ["Texte de référence depuis le 26 mai 2021 : le règlement européen relatif aux dispositifs médicaux (RDM), n° 2017/745. Un dispositif médical (DM) est tout instrument, appareil, équipement, logiciel, implant, réactif, matière ou autre article, destiné par le fabricant à être utilisé, seul ou en association, chez l'homme, pour une ou plusieurs fins médicales :"],
          puces: [
            "diagnostic, prévention, contrôle, prédiction, pronostic, traitement ou atténuation d'une maladie ;",
            "diagnostic, contrôle, traitement, atténuation ou compensation d'une blessure ou d'un handicap ;",
            "investigation, remplacement ou modification d'une structure ou fonction anatomique, ou d'un processus ou état physiologique ou pathologique ;",
            "communication d'informations au moyen d'un examen in vitro d'échantillons du corps humain."
          ],
          retenir: "Et dont l'action principale voulue dans ou sur le corps humain n'est obtenue ni par des moyens pharmacologiques, ni immunologiques, ni par métabolisme, même si de tels moyens peuvent l'assister. Sont aussi des DM : les dispositifs de maîtrise de la conception (contraception) et les produits destinés au nettoyage, à la désinfection ou à la stérilisation des DM.",
          commentaire: {
            pistes: ["Le critère qui tranche entre dispositif médical et médicament."],
            audio: "audio/dm-1.mp3",
            transcription: "Cette définition est longue, et un peu aride, je vous l'accorde. Mais elle répond à une question que vous vous poserez souvent : est-ce que cet objet est un dispositif médical ? Le critère qui tranche, c'est la dernière partie. Un appareil qui aide à respirer agit mécaniquement : c'est un dispositif médical. Un produit qui agit par sa chimie dans le corps, c'est un médicament. Et retenez ce détail qu'on oublie souvent : les produits qui servent à nettoyer et à désinfecter vos appareils sont eux-mêmes des dispositifs médicaux."
          }
        },
        {
          type: "cartes", kicker: "Illustrations",
          titre: "Du pansement au logiciel",
          cartes: [
            { icone: "grid", titre: "« Instrument, appareil, équipement… »", texte: "Prothèse de hanche, pompe à perfusion, aiguille, pansement, concentrateur d'oxygène, appareil de PPC." },
            { icone: "message", titre: "« Logiciel »", texte: "Logiciel d'aide au diagnostic, logiciel d'échographie." },
            { icone: "hand", titre: "« Maladie, blessure, handicap »", texte: "Stent, fauteuil roulant, lit médicalisé." },
            { icone: "heart", titre: "« Anatomie ou processus physiologique »", texte: "Prothèse mammaire." },
            { icone: "shield", titre: "« Maîtrise de la conception »", texte: "Stérilet au cuivre, préservatif." }
          ],
          commentaire: {
            pistes: ["Faire lister aux stagiaires les DM qu'ils ont manipulés cette semaine."],
            audio: "audio/dm-2.mp3",
            transcription: "Regardez bien ces exemples : vous en manipulez plusieurs chaque semaine. Le concentrateur d'oxygène, l'appareil de pression positive, le lit médicalisé, le fauteuil roulant. Ils sont rangés dans la même grande famille qu'une prothèse de hanche ou qu'un logiciel d'aide au diagnostic. Ça paraît étonnant, mais c'est important : ça veut dire que le matériel que vous installez obéit aux mêmes exigences de sécurité. Un lit médicalisé n'est pas un meuble. Quand vous le montez, vous installez un dispositif médical, avec les responsabilités qui vont avec."
          }
        },
        {
          type: "cartes", kicker: "Autres définitions (RDM, article 2) · 1/2",
          titre: "Le produit, son fabricant, son usage",
          cartes: [
            { icone: "scale", titre: "Produit frontière", texte: "À la limite entre deux réglementations, par exemple un DM associé à une substance active. Exemples : compresse imprégnée d'antiseptique, ciment osseux avec antibiotique." },
            { icone: "grid", titre: "Accessoire", texte: "Un article qui n'est pas un DM, mais que le fabricant destine à être utilisé avec un DM, pour que celui-ci soit utilisé conformément à sa destination. Il est traité comme un DM. Exemple : chargeur de batterie d'un DM." },
            { icone: "hand", titre: "Dispositif sur mesure", texte: "Fabriqué sur prescription écrite d'un professionnel habilité, pour un patient déterminé. Exemple : orthèse ou prothèse orthopédique sur mesure." },
            { icone: "shield", titre: "Fabricant", texte: "La personne physique ou morale qui fabrique ou remet à neuf un dispositif, ou le fait concevoir, fabriquer ou remettre à neuf, et le commercialise sous son nom ou sa marque." },
            { icone: "message", titre: "Destination", texte: "L'utilisation prévue par le fabricant, telle qu'indiquée dans l'étiquetage, la notice et les documents promotionnels." }
          ],
          commentaire: {
            pistes: ["Le chargeur remplacé par un modèle du commerce : pourquoi c'est un problème."],
            audio: "audio/dm-3.mp3",
            transcription: "Parmi ces définitions, deux vous concernent directement. L'accessoire, d'abord. Le chargeur d'un appareil, par exemple, est traité comme un dispositif médical. Ça veut dire qu'on ne le remplace pas par n'importe quel chargeur trouvé dans le commerce, même s'il a l'air identique. La destination, ensuite. C'est l'usage prévu par le fabricant, tel qu'il figure dans la notice. Si on utilise un appareil en dehors de cette destination, on sort du cadre pour lequel il a été évalué. D'où l'importance de toujours suivre la notice, même quand on connaît l'appareil par cœur."
          }
        },
        {
          type: "cartes", kicker: "Autres définitions (RDM, article 2) · 2/2",
          titre: "Le dispositif et le corps",
          cartes: [
            { icone: "hand", titre: "Dispositif invasif", texte: "Il pénètre, en tout ou en partie, à l'intérieur du corps, par un orifice ou à travers la surface du corps. Exemple : sonde urinaire." },
            { icone: "ear", titre: "Orifice du corps", texte: "Toute ouverture naturelle du corps, la surface externe du globe oculaire, ou toute ouverture artificielle permanente. Exemple : stomie." },
            { icone: "scale", titre: "Invasif de type chirurgical", texte: "Il pénètre à travers la surface du corps, lors d'un acte chirurgical ou à l'aide d'un tel acte. Exemple : vis d'ostéosynthèse." },
            { icone: "heart", titre: "Dispositif implantable", texte: "Destiné à être introduit entièrement dans le corps, ou à remplacer une surface épithéliale ou la surface de l'œil, par une intervention clinique, et à rester en place après celle-ci. Est aussi implantable un dispositif introduit partiellement qui reste en place au moins 30 jours. Exemple : ligament artificiel." },
            { icone: "sun", titre: "Dispositif actif", texte: "Son fonctionnement dépend d'une source d'énergie autre que celle du corps humain ou de la pesanteur, et il agit en convertissant cette énergie. Les logiciels sont réputés actifs. Exemples : concentrateur d'oxygène, appareil de PPC, logiciel." },
            { icone: "check", titre: "Dispositif à usage unique", texte: "Destiné à être utilisé pour un seul patient, lors d'une seule procédure." }
          ],
          commentaire: {
            pistes: ["Le matériel à usage unique qu'on est tenté de réutiliser : pourquoi on ne le fait pas."],
            audio: "audio/dm-4.mp3",
            transcription: "Ces mots peuvent sembler réservés au bloc opératoire, mais deux d'entre eux reviennent souvent dans votre métier. Dispositif actif, d'abord : tout appareil qui fonctionne avec une source d'énergie, comme une prise ou une batterie. Le concentrateur, l'appareil de pression positive, et même un logiciel sont des dispositifs actifs. Usage unique, ensuite. Un matériel prévu pour un seul usage ne se réutilise pas, même s'il paraît propre. Ce n'est pas une question d'économie, c'est une question de sécurité pour le patient."
          }
        }
      ]
    },
    {
      id: "classes", court: "Les classes", titre: "Quatre classes de risque",
      ecrans: [
        {
          type: "texte", kicker: "Le classement des DM",
          titre: "Plus le risque est grand, plus la classe est haute",
          corps: ["Les DM sont répartis en 4 classes de risque : I, IIa, IIb et III. La classe I comprend les sous-classes Is (stérile), Im (fonction de mesure) et Ir (instrument chirurgical réutilisable). Le fabricant classe son DM avec les 22 règles de l'annexe VIII du RDM, selon :"],
          puces: [
            "la durée d'utilisation (temporaire, court terme, long terme) ;",
            "le caractère invasif ou non ;",
            "le caractère implantable ou non ;",
            "le caractère chirurgical ou non ;",
            "le caractère actif ou non ;",
            "la partie du corps concernée (système nerveux central, cœur, système circulatoire)."
          ],
          commentaire: {
            pistes: ["Retrouver la classe d'un appareil en se posant les bonnes questions."],
            audio: "audio/classes-1.mp3",
            transcription: "Pourquoi classer les dispositifs médicaux ? Parce qu'un pansement et une valve cardiaque ne présentent pas le même danger. Plus le risque est grand, plus les contrôles sont stricts avant la mise sur le marché. Ce classement, c'est le fabricant qui le fait, en suivant des règles précises. Et les critères sont assez intuitifs : combien de temps l'appareil reste au contact du patient, est-ce qu'il entre dans le corps, est-ce qu'il fonctionne avec de l'énergie, est-ce qu'il touche le cœur ou le cerveau. Avec ces questions, on retrouve souvent la classe sans la connaître."
          }
        },
        {
          type: "cartes", kicker: "Les quatre classes",
          titre: "De la canne à la valve cardiaque",
          cartes: [
            { icone: "check", titre: "Classe I · risque faible", texte: "La plupart des dispositifs non invasifs ; les instruments chirurgicaux réutilisables (classe Ir) ; les dispositifs en contact avec une peau lésée qui servent de simple barrière ou de compression. Exemples : fauteuil roulant, déambulateur, canne, lit médical, bande de contention, compresse non stérile, scalpel réutilisable." },
            { icone: "shield", titre: "Classe IIa · risque modéré", texte: "Certains dispositifs de diagnostic ; les dispositifs destinés à conduire ou à stocker du sang, des liquides ou des tissus ; les dispositifs invasifs de type chirurgical à usage temporaire ou à court terme. Exemples : échographe, sonde urinaire, agrafes cutanées, lentilles de contact." },
            { icone: "sun", titre: "Classe IIb · risque élevé", texte: "Les implants chirurgicaux à long terme (hors classe III) ; les dispositifs contraceptifs et ceux qui protègent contre les infections sexuellement transmissibles (IST) ; les DM actifs qui contrôlent l'administration d'un liquide ou d'une substance potentiellement dangereuse. Exemples : pompe à perfusion, ventilateur, préservatif, suture interne non résorbable." },
            { icone: "heart", titre: "Classe III · risque le plus élevé", texte: "Les dispositifs en contact avec le système nerveux central, le cœur ou le système circulatoire central ; ceux qui incorporent une substance considérée comme un médicament ; les implants biodégradables et les prothèses articulaires totales ; ceux qui incorporent des tissus d'origine animale. Exemples : prothèse totale de hanche, stent coronaire actif, valve cardiaque." }
          ],
          commentaire: {
            pistes: ["Classer ensemble le matériel du dépôt : lit, fauteuil, ventilateur…"],
            audio: "audio/classes-2.mp3",
            transcription: "Si vous regardez le matériel que vous livrez, vous verrez qu'il se répartit sur plusieurs classes. Le lit médicalisé, le fauteuil roulant, le déambulateur sont en classe un, le risque le plus faible. Le ventilateur, lui, est en classe deux B, parce qu'une panne peut avoir des conséquences graves. Retenir ce classement vous aide à comprendre pourquoi certains appareils demandent plus de contrôles et plus de rigueur dans vos interventions. Ce n'est pas de la paperasse : c'est proportionné au danger."
          }
        }
      ]
    },
    {
      id: "mdr", court: "Le RDM", titre: "Le règlement européen et la vie d'un DM",
      ecrans: [
        {
          type: "texte", kicker: "Le règlement relatif aux dispositifs médicaux (RDM)",
          titre: "Un seul texte pour toute l'Europe",
          corps: ["Le règlement (UE) 2017/745 du Parlement européen et du Conseil est applicable depuis le 26 mai 2021. Il a remplacé les directives 93/42/CEE (DM) et 90/385/CEE (DM implantables actifs). Un règlement s'applique directement, sans transposition. Les DM de diagnostic in vitro relèvent d'un autre règlement, le 2017/746 (IVDR).", "Ce qu'il change :"],
          puces: [
            "des exigences renforcées avant la mise sur le marché : évaluation clinique et investigations cliniques ;",
            "plus de transparence avec la base européenne EUDAMED (DM, opérateurs, certificats, vigilance, investigations) ;",
            "des organismes notifiés plus encadrés, et une surveillance après commercialisation renforcée."
          ],
          commentaire: {
            pistes: ["Ce que la surveillance renforcée attend du terrain."],
            audio: "audio/mdr-1.mp3",
            transcription: "Le règlement européen de deux mille dix-sept a changé beaucoup de choses pour les fabricants. Avant, chaque pays transposait des directives à sa façon. Aujourd'hui, un seul texte s'applique directement partout en Europe. Ce qu'il faut retenir pour vous, c'est l'esprit de la réforme : plus de preuves avant la mise sur le marché, plus de transparence, et une surveillance renforcée après. Et cette surveillance repose en partie sur le terrain, donc sur vous. Les incidents que vous faites remonter nourrissent ce système."
          }
        },
        {
          type: "texte", kicker: "Objectifs du RDM et identifiant unique (IUD)",
          titre: "Chaque dispositif a sa carte d'identité",
          corps: ["Les objectifs du RDM :"],
          puces: [
            "améliorer le niveau de santé et de sécurité ;",
            "garantir le bon fonctionnement du marché intérieur des DM ;",
            "s'assurer que les produits suivent l'état de l'art."
          ],
          retenir: "Traçabilité : le RDM crée l'IUD (identifiant unique des dispositifs, UDI en anglais), apposé sur l'étiquette et le conditionnement. Il facilite la traçabilité, la sécurité des patients, la lutte contre la contrefaçon et les rappels de produits.",
          commentaire: {
            pistes: ["Un rappel de lot : retrouver vite les patients équipés grâce à une traçabilité bien tenue."],
            audio: "audio/mdr-2.mp3",
            transcription: "L'identifiant unique, c'est un peu la carte d'identité de chaque dispositif. Il figure sur l'étiquette et sur l'emballage, et il permet de savoir exactement de quel produit il s'agit. Pourquoi est-ce que ça vous concerne ? Parce que le jour où un fabricant rappelle une série d'appareils, il faut retrouver très vite chez quels patients ils ont été installés. Si la traçabilité a été bien tenue à l'installation, c'est l'affaire de quelques minutes. Sinon, c'est une longue enquête. Prenez donc l'habitude de vérifier que les numéros sont bien enregistrés."
          }
        },
        {
          type: "etapes", kicker: "Cycle de vie d'un DM",
          titre: "De la conception au retrait",
          etapes: [
            { titre: "Conception", texte: "Le fabricant conçoit le dispositif." },
            { titre: "Évaluation de la conformité", texte: "Aux exigences générales en matière de sécurité et de performances (annexe I du RDM)." },
            { titre: "Investigation clinique", texte: "Les essais cliniques." },
            { titre: "Marquage CE", texte: "Il autorise la commercialisation dans l'Espace économique européen." },
            { titre: "Mise sur le marché", texte: "Puis surveillance après commercialisation (vigilance)." },
            { titre: "Modifications", texte: "Mineures ou substantielles." },
            { titre: "Audits de suivi", texte: "Par l'organisme notifié." },
            { titre: "Arrêt de commercialisation", texte: "Ou remplacement par un nouveau DM." }
          ],
          commentaire: {
            pistes: ["Ce que le terrain voit et que les essais ne voient pas."],
            audio: "audio/mdr-3.mp3",
            transcription: "Ce cycle montre une chose importante : la vie d'un dispositif médical ne s'arrête pas à sa mise sur le marché. Le dispositif reste surveillé chez le patient. Il peut être modifié. Et un jour, il est retiré. Vous êtes à cette étape-là, au plus près de l'utilisation réelle. Un défaut qui n'est jamais apparu pendant les essais peut apparaître dans un salon, avec un patient âgé ou un usage imprévu."
          }
        },
        {
          type: "etapes", kicker: "Le rôle de l'ANSM dans le cycle de vie d'un DM",
          titre: "Le gendarme du marché",
          etapes: [
            { titre: "Autoriser les essais cliniques", texte: "Les investigations cliniques des DM sans marquage CE, ou utilisés dans une nouvelle indication." },
            { titre: "Désigner et surveiller les organismes notifiés", texte: "Ceux qui sont chargés du marquage CE." },
            { titre: "Surveiller le marché", texte: "Évaluer les incidents de vigilance (matériovigilance pour les DM, réactovigilance pour les DM de diagnostic in vitro), contrôler la conformité des DM, inspecter les fabricants et les distributeurs, contrôler la qualité en laboratoire. Elle peut prendre des mesures de police sanitaire." },
            { titre: "Contrôler la publicité", texte: "Sur les dispositifs médicaux." },
            { titre: "Coopérer avec les autorités européennes", texte: "Les autorités compétentes des autres États." }
          ],
          commentaire: {
            pistes: ["Pourquoi un petit incident mérite quand même un signalement."],
            audio: "audio/mdr-4.mp3",
            transcription: "L'agence du médicament intervient à chaque moment de ce cycle, mais retenez surtout son rôle de gendarme du marché. Elle autorise les essais, elle surveille les organismes qui délivrent les certificats, et surtout, elle reçoit les signalements d'incidents. Quand un problème le justifie, elle peut prendre des mesures pour protéger les patients. Pour vous, ça veut dire une chose : ne gardez jamais un incident pour vous, même s'il vous paraît mineur. C'est l'addition des petits signalements qui permet de repérer un vrai problème."
          }
        }
      ]
    },
    {
      id: "ce", court: "Marquage CE", titre: "Le marquage CE",
      ecrans: [
        {
          type: "texte", kicker: "Le marquage CE",
          titre: "Un passeport réglementaire, pas un label",
          corps: ["Tout DM mis sur le marché doit être conforme aux exigences générales en matière de sécurité et de performances du RDM, et porter le marquage CE. Le marquage CE :"],
          puces: [
            "atteste la conformité du DM au règlement (UE) 2017/745 ;",
            "permet de le commercialiser dans tout l'Espace économique européen."
          ],
          retenir: "Ne portent pas de marquage CE : les dispositifs sur mesure, accompagnés d'une déclaration du fabricant, et les dispositifs faisant l'objet d'une investigation clinique.",
          commentaire: {
            pistes: ["Le patient qui croit que le logo CE est un gage de qualité."],
            audio: "audio/ce-1.mp3",
            transcription: "Le marquage européen, vous le voyez sur tous vos appareils, ce petit logo avec deux lettres. On le prend parfois pour un label de qualité. Ce n'en est pas un : c'est un passeport. Il dit que le dispositif est conforme au règlement, et qu'il peut circuler librement en Europe. Rien de plus, rien de moins. Retenez aussi les deux exceptions. Un dispositif fabriqué sur mesure n'a pas ce marquage : il est accompagné d'une déclaration du fabricant. Et un appareil en cours d'essai clinique non plus. Dans les deux cas, ce n'est pas une anomalie."
          }
        },
        {
          type: "texte", kicker: "Exigences générales en matière de sécurité et de performances (RDM, annexe I)",
          titre: "Le cahier des charges de tout DM",
          puces: [
            "Exigences générales, applicables à tous les DM : sécurité des patients et des utilisateurs, performances annoncées, gestion des risques.",
            "Exigences de conception et de fabrication, selon le DM : propriétés chimiques, physiques et biologiques ; infection et contamination microbienne ; dispositifs incorporant un médicament, ou composés de substances absorbées par le corps ; dispositifs contenant des matières d'origine biologique ; interaction avec l'environnement ; fonction de diagnostic ou de mesure ; protection contre les rayonnements ; logiciels, et dispositifs actifs ou connectés.",
            "Informations fournies avec le dispositif : étiquetage et notice d'utilisation."
          ],
          commentaire: {
            pistes: ["La notice laissée dans le carton : pourquoi elle fait partie du produit."],
            audio: "audio/ce-2.mp3",
            transcription: "Cette liste d'exigences, c'est le cahier des charges que tout fabricant doit respecter. Je ne vous demande pas de la retenir. Mais remarquez la dernière partie : les informations fournies avec le dispositif, c'est-à-dire l'étiquetage et la notice. Elles font partie des exigences, au même titre que la sécurité. Autrement dit, la notice n'est pas un papier qu'on peut laisser dans le carton. Elle fait partie du produit. Quand vous installez un appareil, laissez-la au patient, et montrez-lui où elle se trouve."
          }
        },
        {
          type: "cartes", kicker: "Les acteurs du marquage CE",
          titre: "Le fabricant, l'organisme notifié, l'autorité compétente",
          intro: "Le fabricant conçoit le DM, constitue sa documentation technique et choisit librement un organisme notifié dans l'Union européenne (pour les classes qui en exigent un). L'organisme notifié évalue la conformité et délivre le certificat. Le fabricant appose alors le marquage CE et met le DM sur le marché.",
          cartes: [
            { icone: "hand", titre: "Le fabricant", texte: "Responsable de la conformité du DM : qualité, sécurité, performances. Il choisit l'organisme notifié, et appose le marquage CE une fois la conformité établie." },
            { icone: "check", titre: "L'organisme notifié (ON)", texte: "Il évalue la conformité aux exigences générales en matière de sécurité et de performances et délivre les certificats nécessaires au marquage CE. Il est identifié par un numéro à 4 chiffres placé à côté du logo CE. Exemple : GMED (filiale du LNE), organisme notifié français = 0459. Il y en a d'autres en Europe." },
            { icone: "shield", titre: "L'autorité compétente (ANSM)", texte: "Contrôle, vigilance et police sanitaire : investigations cliniques, surveillance du marché, matériovigilance, inspection des fabricants. Elle désigne et contrôle les organismes notifiés, mais n'intervient pas directement dans le marquage CE." }
          ],
          commentaire: {
            pistes: ["Lire ensemble le marquage d'un appareil : logo CE et numéro de l'organisme notifié."],
            audio: "audio/ce-3.mp3",
            transcription: "Trois acteurs, trois rôles bien distincts, et on les confond souvent. Le fabricant est responsable de son produit, du début à la fin. L'organisme notifié vérifie et certifie : c'est son numéro à quatre chiffres que vous voyez à côté du logo. Et l'agence du médicament ne délivre pas le marquage elle-même : elle surveille ceux qui le délivrent, et elle surveille le marché. Prenez le temps de bien séparer les trois. Si un patient vous demande qui a autorisé son appareil, vous saurez lui répondre précisément."
          }
        },
        {
          type: "texte", kicker: "Les procédures d'évaluation de la conformité",
          titre: "Un niveau de preuve proportionné au risque",
          corps: ["Les exigences sont les mêmes pour tous les DM, mais le niveau de preuve dépend du risque. Le règlement prévoit :"],
          puces: [
            "Classe I : auto-déclaration de conformité par le fabricant, sauf pour les classes Is (stérile), Im (mesure) et Ir (réutilisable). Pour celles-ci, l'organisme notifié intervient sur l'aspect concerné.",
            "Classes IIa et IIb : certification par un organisme notifié, librement choisi dans l'UE. Certificats valables 5 ans maximum, avec audits de surveillance.",
            "Classe III : certification avec examen de la documentation technique produit par produit, et évaluation clinique approfondie."
          ],
          retenir: "Le dossier technique du fabricant contient notamment : la description du produit et sa destination ; la conception et les procédés de fabrication ; l'analyse des risques ; les normes appliquées et les solutions retenues pour respecter les exigences ; la stérilisation, si nécessaire ; les rapports d'essais et l'évaluation clinique ; l'étiquetage et la notice d'utilisation ; le plan de surveillance après commercialisation.",
          commentaire: {
            pistes: ["Les deux pièces du dossier technique qui touchent le terrain : la notice et la surveillance."],
            audio: "audio/ce-4.mp3",
            transcription: "Le principe est simple : plus le risque est élevé, plus il faut de preuves. Pour la plupart des dispositifs de classe un, le fabricant se déclare conforme lui-même. Pour les classes supérieures, il faut un organisme extérieur, et pour la classe trois, un examen produit par produit. Le dossier technique, lui, est le socle de tout ça. Vous n'y aurez jamais accès en détail, mais deux de ses pièces vous touchent directement : la notice d'utilisation et le plan de surveillance après commercialisation. Ce que vous observez sur le terrain alimente cette surveillance."
          }
        }
      ]
    },
    {
      id: "lpp", court: "La LPP", titre: "La prise en charge des DM par l'Assurance maladie",
      ecrans: [
        {
          type: "chaine", kicker: "Du marquage CE au remboursement",
          titre: "Conforme ne veut pas dire remboursé",
          maillons: [
            { titre: "Marquage CE", texte: "Fabricant, organisme notifié, ANSM." },
            { titre: "Évaluation médico-technique", texte: "Par la CNEDiMTS, commission de la HAS." },
            { titre: "Fixation du tarif", texte: "Par le Comité économique des produits de santé (CEPS)." },
            { titre: "Inscription sur la LPP", texte: "Par arrêté ministériel." }
          ],
          retenir: "Pour être remboursé, un DM doit passer des évaluations en plus du marquage CE.",
          commentaire: {
            pistes: ["Le patient qui ne comprend pas pourquoi « son » modèle n'est pas pris en charge."],
            audio: "audio/lpp-1.mp3",
            transcription: "Voici une idée qui surprend souvent : un appareil peut avoir le marquage européen et ne pas être remboursé. Le marquage dit que l'appareil est conforme. Le remboursement, c'est une autre question : est-ce qu'il apporte un vrai service au patient, et à quel prix ? D'où ce parcours en quatre étapes. La Haute Autorité évalue l'intérêt médical, le comité économique fixe le tarif, et le ministère inscrit le produit sur la liste des remboursements. Quand un patient vous demande pourquoi tel modèle n'est pas pris en charge, la réponse se trouve souvent là."
          }
        },
        {
          type: "texte", kicker: "La liste des produits et prestations (LPP)",
          titre: "Le produit et la prestation",
          corps: ["La LPP (liste des produits et prestations remboursables, art. L165-1 du Code de la sécurité sociale, souvent appelée « LPPR ») porte sur le DM et sur la prestation nécessaire à son bon usage. Elle est divisée en 5 titres :"],
          puces: [
            "Titre I : matériels et traitements à domicile, aliments diététiques, articles pour pansements. C'est le titre des PSDM : oxygène, PPC, VNI, perfusion, nutrition, lits, aides techniques…",
            "Titre II : orthèses et prothèses externes (optique, audioprothèses, chaussures orthopédiques…).",
            "Titre III : DM implantables.",
            "Titre IV : véhicules pour personnes handicapées physiques (VPH).",
            "Titre V : DM invasifs qui ne relèvent pas du titre III."
          ],
          retenir: "L'inscription vaut pour 5 ans maximum, renouvelable. Deux modes d'inscription : par description générique, ou par nom de marque.",
          image: "../module-4/img/ch4.webp", alt: "Une technicienne explique un concentrateur d'oxygène à une dame âgée et à sa fille.",
          commentaire: {
            pistes: ["Ce que recouvre la « prestation » dans le titre I : installation, explications, suivi."],
            audio: "audio/lpp-2.mp3",
            transcription: "Cette liste, c'est un peu votre catalogue de référence, même si vous ne l'ouvrez jamais. Elle décrit ce qui est remboursé, et comment. Notez une chose importante : elle ne porte pas seulement sur l'appareil, mais aussi sur la prestation nécessaire à son bon usage. Votre travail fait donc partie de ce qui est pris en charge, au sens propre. Et le premier titre, celui des matériels et traitements à domicile, c'est celui de votre métier : oxygène, pression positive, perfusion, nutrition, lits."
          }
        },
        {
          type: "duo", kicker: "Les deux modes d'inscription sur la LPP",
          titre: "Description générique ou nom de marque",
          gauche: { etiquette: "Description générique", titre: "Un type de produit", texte: "Décrit par ses indications et ses spécifications techniques, sans nom de marque. Tout DM conforme à la description est remboursable. Pas d'évaluation par la CNEDiMTS lors de l'inscription, mais une déclaration à l'ANSM et un code LPP individuel pour chaque produit. Inscription valable 5 ans maximum, les descriptions génériques étant révisées périodiquement." },
          droite: { etiquette: "Nom de marque", titre: "Un produit précis", texte: "Pour les produits innovants, ou quand le suivi du produit, son impact sur les dépenses ou la difficulté de le décrire le justifient. La demande d'inscription est évaluée par la CNEDiMTS ; le tarif est négocié entre le Comité économique des produits de santé (CEPS) et le fabricant." },
          commentaire: {
            pistes: ["Deux appareils de marques différentes sous la même description générique."],
            audio: "audio/lpp-3.mp3",
            transcription: "Deux façons d'entrer sur la liste, et elles expliquent pourquoi certains produits se ressemblent tant. Avec la description générique, tout produit qui respecte un cahier des charges est remboursable, quelle que soit sa marque. Le nom de marque, lui, est réservé aux produits innovants ou plus difficiles à décrire : chacun est évalué à part, et son tarif est négocié. Pour vous, la conséquence est pratique : deux appareils de marques différentes peuvent relever de la même description, et donc du même tarif, même si chacun garde son propre code."
          }
        }
      ]
    },
    {
      id: "evaluer", court: "Évaluer", titre: "Évaluer et tarifer les DM",
      ecrans: [
        {
          type: "texte", kicker: "L'évaluation médico-technique par la CNEDiMTS",
          titre: "Rend-il service ? Fait-il mieux ?",
          corps: ["La CNEDiMTS rend un avis sur l'inscription, le renouvellement ou la modification des conditions d'inscription des DM sur la LPP."],
          puces: [
            "Première inscription : elle apprécie le service attendu (SA). S'il est suffisant, elle apprécie ensuite l'amélioration du service attendu (ASA).",
            "Le SA est évalué pour chaque indication, selon le rapport bénéfice/risque, la place du DM dans la stratégie thérapeutique ou diagnostique, et l'intérêt de santé publique.",
            "L'ASA compare le DM à un produit, un acte ou une prestation de référence. Elle compte 5 niveaux : I majeure, II importante, III modérée, IV mineure, V absence d'amélioration.",
            "Renouvellement : elle apprécie le service rendu (SR) puis, s'il est suffisant, l'amélioration du service rendu (ASR)."
          ],
          retenir: "Un SA insuffisant entraîne le non-remboursement.",
          commentaire: {
            pistes: ["Expliquer à un patient qu'un appareil remboursé est un appareil dont l'utilité est démontrée."],
            audio: "audio/evaluer-1.mp3",
            transcription: "Derrière ces abréviations, il y a deux questions très simples. Première question : est-ce que ce dispositif rend service au patient ? C'est le service attendu, ou rendu quand on renouvelle. Si la réponse est non, le produit n'est pas remboursé, quelle que soit sa qualité technique. Deuxième question : fait-il mieux que ce qui existe déjà ? C'est l'amélioration, classée en cinq niveaux. Ce raisonnement, vous pouvez le réutiliser avec les patients : un appareil remboursé, ce n'est pas un appareil à la mode, c'est un appareil dont l'utilité a été démontrée."
          }
        },
        {
          type: "texte", kicker: "La tarification par le CEPS",
          titre: "Le prix tient compte de l'usage réel",
          corps: ["Le Comité économique des produits de santé fixe les tarifs de remboursement, et éventuellement les prix limites de vente. Il tient compte principalement :"],
          puces: [
            "du service attendu ou rendu, et de son amélioration ;",
            "des études complémentaires demandées, le cas échéant ;",
            "des tarifs et prix des produits comparables ;",
            "des volumes de vente prévus ;",
            "des conditions prévisibles et réelles d'utilisation."
          ],
          commentaire: {
            pistes: ["Le lien entre le suivi au domicile et les conditions réelles d'utilisation."],
            audio: "audio/evaluer-2.mp3",
            transcription: "Le comité économique, c'est l'endroit où se fixe le prix. Il ne décide pas au hasard : il regarde le service rendu, les produits comparables, les volumes de vente prévus. Et il regarde aussi la façon dont l'appareil est réellement utilisé. Ce dernier point vous concerne, parce que l'utilisation réelle, c'est chez le patient qu'elle se joue. Un appareil bien expliqué, bien réglé et bien suivi, c'est un appareil qui sert vraiment. Votre travail au domicile fait partie de cette équation."
          }
        },
        {
          type: "texte", kicker: "Autres modes de financement des DM",
          titre: "À l'hôpital, d'autres règles",
          puces: [
            "DM financés dans les séjours hospitaliers (GHS) : depuis 2004, les établissements de santé publics et privés sont financés par la tarification à l'activité (T2A). Le coût de nombreux DM est intégré au tarif du séjour. Certains DM coûteux sont inscrits sur la « liste en sus » et payés en plus du séjour.",
            "La commission médicale d'établissement (secteur public) ou la conférence médicale d'établissement (secteur privé) participe à la définition de la politique des DM de l'établissement.",
            "DM innovants : prise en charge dérogatoire et temporaire possible, via le forfait innovation (art. L165-1-1 du Code de la sécurité sociale), par arrêté ministériel après avis de la HAS.",
            "DM utilisés lors d'un acte professionnel : leur coût est intégré au tarif de l'acte inscrit dans les nomenclatures (CCAM pour les actes médicaux, NGAP, NABM pour la biologie), après avis de la HAS."
          ],
          commentaire: {
            pistes: ["Le patient qui rentre chez lui avec un matériel découvert à l'hôpital."],
            audio: "audio/evaluer-3.mp3",
            transcription: "Tous les dispositifs médicaux ne passent pas par la liste des remboursements. À l'hôpital, la plupart sont inclus dans le prix du séjour. Certains, très coûteux, sont payés en plus. Et les produits vraiment innovants peuvent bénéficier d'une prise en charge temporaire, le temps de faire leurs preuves. Pourquoi est-ce que je vous en parle ? Parce que vos patients sortent souvent de l'hôpital avec du matériel qu'ils ont découvert là-bas. Une fois à la maison, les règles de prise en charge ne sont plus les mêmes, et c'est souvent à vous qu'ils posent la question."
          }
        }
      ]
    },
    {
      id: "installer", court: "S'installer", titre: "L'installation d'un PSDM",
      ecrans: [
        {
          type: "etapes", kicker: "Les démarches d'installation",
          titre: "Quatre démarches avant de servir les patients",
          etapes: [
            { titre: "Adhérer à la convention nationale", texte: "En particulier pour pratiquer le tiers payant, c'est-à-dire dispenser les patients de l'avance de frais." },
            { titre: "Obtenir l'autorisation de l'ARS", texte: "Pour dispenser de l'oxygène à usage médical (arrêt « L'oxygène »)." },
            { titre: "Déclarer la cuve d'oxygène", texte: "Pour installer une cuve de stockage : déclaration au titre des ICPE, rubrique 4725 (arrêt « L'oxygène »)." },
            { titre: "Se préparer à la certification HAS", texte: "Elle conditionne désormais le remboursement LPP (LFSS pour 2021, décret n° 2022-169 du 11 février 2022, référentiel HAS de juin 2024)." }
          ],
          image: "../module-4/img/ch5.webp", alt: "Une technicienne téléphone, assise dans sa camionnette garée.",
          commentaire: {
            pistes: ["Les règles internes de l'agence qui découlent directement de ces démarches."],
            audio: "audio/installer-1.mp3",
            transcription: "Ces démarches, vous ne les ferez sans doute pas vous-même, c'est le rôle de la direction. Mais il est utile de savoir qu'elles existent, parce qu'elles expliquent beaucoup de règles internes. Si votre entreprise peut dispenser le patient d'avancer les frais, c'est grâce à la convention. Si un pharmacien est responsable de l'oxygène, c'est lié à l'autorisation. Et la certification par la Haute Autorité, c'est l'enjeu des années qui viennent : elle conditionne désormais le remboursement. On y reviendra en détail dans le module deux."
          }
        },
        {
          type: "texte", kicker: "La convention nationale",
          titre: "Tiers payant et libre choix du prestataire",
          corps: ["Convention signée le 15 juillet 2015 entre l'UNCAM et les organisations de prestataires (SYNALAM, UNPDM, SNADOM). Elle concerne les produits et prestations des titres I et IV et du chapitre 4 du titre II de la LPP. Ses buts :"],
          puces: [
            "définir les conditions de la dispense d'avance de frais (tiers payant) ;",
            "organiser les relations entre les parties, de façon à assurer à tous les bénéficiaires un accès à des prestations de qualité, prises en charge dans le respect des règles de chaque régime ;",
            "garantir le libre choix du prestataire par l'assuré ;",
            "respecter la transparence et contribuer à une gestion rigoureuse des dépenses d'assurance maladie."
          ],
          commentaire: {
            pistes: ["Le libre choix du prestataire : ce que la qualité de l'accueil change pour un patient."],
            audio: "audio/installer-2.mp3",
            transcription: "La convention, c'est un accord entre l'Assurance maladie et les organisations de prestataires. Elle a l'air lointaine, mais un de ses principes vous concerne au quotidien : le libre choix du prestataire par le patient. Le patient n'est pas obligé de rester avec votre entreprise. Il peut changer. Ça a une conséquence simple : la qualité de votre accueil et de votre suivi, c'est aussi ce qui fait qu'un patient reste. Et ça, c'est entre vos mains à chaque visite."
          }
        },
        {
          type: "texte", kicker: "L'accord préalable (oxygène, VNI, PPC)",
          titre: "La caisse accepte avant de rembourser",
          corps: ["Certains traitements ne sont pris en charge qu'après accord préalable de la caisse. Le médecin prescripteur remplit une demande d'accord préalable (DAP), le patient et le prestataire la complètent et la signent. Elle est envoyée à la caisse du patient, qui accepte ou refuse la prise en charge."],
          puces: [
            "Oxygénothérapie de longue durée : accord préalable obligatoire (LPP, rubrique I-1.1.3).",
            "Oxygénothérapie de courte durée : pas d'accord préalable. Prescription pour 1 mois, renouvelable 2 fois au maximum.",
            "VNI (ventilation à domicile) : demande d'entente préalable obligatoire, sur le formulaire Cnam n° 629 « assistance respiratoire de longue durée à domicile ». Une demande initiale couvre 3 mois, puis chaque prolongation fait l'objet d'une nouvelle demande.",
            "PPC (apnée du sommeil) : demande d'accord préalable obligatoire, à la mise en route comme au renouvellement. Depuis le 31 décembre 2024, le médecin la fait en ligne sur amelipro pour les patients de 16 ans et plus. Sans réponse de la caisse sous 15 jours, l'accord est acquis."
          ],
          commentaire: {
            pistes: ["Vérifier la demande d'accord préalable à l'installation : signatures, pièces."],
            audio: "audio/installer-3.mp3",
            transcription: "L'accord préalable, c'est une étape où un simple oubli peut tout retarder. Le médecin remplit la demande, le patient et le prestataire la complètent et la signent, puis la caisse décide. Mon conseil : à l'installation, vérifiez que la demande est complète, et expliquez au patient pourquoi on lui demande de signer. Retenez aussi la différence entre l'oxygène de longue durée, qui demande cet accord, et l'oxygène de courte durée, qui n'en demande pas. Pour les autres traitements, vérifiez les règles en vigueur."
          }
        }
      ]
    },
    {
      id: "oxygene", court: "L'oxygène", titre: "Dispenser et stocker l'oxygène",
      ecrans: [
        {
          type: "texte", kicker: "L'autorisation de dispenser de l'oxygène à usage médical à domicile",
          titre: "Une autorisation de l'ARS, site par site",
          puces: [
            "Textes : art. L4211-5 et R4211-15 et suivants du Code de la santé publique ; arrêté du 16 juillet 2015 relatif aux bonnes pratiques de dispensation à domicile de l'oxygène à usage médical (BPDOUM), qui a abrogé l'arrêté du 17 novembre 2000.",
            "La demande est adressée au directeur général de l'ARS par le représentant de la personne morale. Les statuts doivent mentionner l'activité de dispensation d'oxygène.",
            "L'autorisation est délivrée par site. Tout ajout de site, changement de zone desservie ou modification importante des locaux exige une nouvelle démarche.",
            "Le dossier est instruit avec une inspection par un pharmacien inspecteur de santé publique de l'ARS, et l'avis de l'Ordre national des pharmaciens.",
            "L'autorisation est un arrêté du directeur général de l'ARS.",
            "La dispensation se fait sous la responsabilité d'un pharmacien responsable."
          ],
          commentaire: {
            pistes: ["Ce qu'un pharmacien inspecteur regarde lors de sa visite."],
            audio: "audio/oxygene-1.mp3",
            transcription: "L'oxygène à usage médical n'est pas un produit comme les autres : c'est un médicament. C'est pour ça qu'il faut une autorisation de l'agence régionale de santé, et qu'un pharmacien en est responsable. Retenez surtout que l'autorisation est accordée site par site. Si votre entreprise ouvre une nouvelle agence, ou change sa zone de livraison, il faut refaire une démarche. Et la visite de contrôle n'est pas une formalité : un pharmacien de l'agence régionale vient vérifier les locaux et les pratiques. Les bonnes pratiques de dispensation que vous appliquez au quotidien, c'est ce qu'il vient contrôler."
          }
        },
        {
          type: "texte", kicker: "Déclaration d'une cuve d'oxygène : rubrique ICPE 4725",
          titre: "On déclare ce qui peut être présent",
          puces: [
            "Une cuve de stockage d'oxygène relève de la rubrique 4725 des installations classées pour la protection de l'environnement (ICPE).",
            "De 2 tonnes à moins de 200 tonnes : régime de déclaration. Prescriptions générales : arrêté du 10 mars 1997, annexe I.",
            "200 tonnes : seuil bas Seveso. 2 000 tonnes : seuil haut.",
            "La télédéclaration se fait sur service-public.fr, avec les caractéristiques de l'installation et des plans. La préfecture délivre une preuve de dépôt."
          ],
          retenir: "Pour la déclaration, on retient la quantité susceptible d'être présente, et pas seulement la capacité des cuves.",
          commentaire: {
            pistes: ["Le lien entre la réglementation des cuves et les consignes de sécurité au domicile."],
            audio: "audio/oxygene-2.mp3",
            transcription: "Une cuve d'oxygène, c'est un stockage qui présente des risques, notamment d'incendie, parce que l'oxygène active la combustion. D'où ce classement pour la protection de l'environnement. Au-delà de deux tonnes, il faut déclarer l'installation, et à partir de deux cents tonnes, on entre dans la réglementation des sites les plus sensibles. Un détail compte : on ne déclare pas seulement la taille de la cuve, mais la quantité qui peut réellement être présente. Et ce que ça rappelle pour vous, au domicile comme à l'agence : près de l'oxygène, ni flamme, ni cigarette."
          }
        }
      ]
    },
    {
      id: "situations", court: "Situations", titre: "Mises en situation",
      ecrans: [
        {
          type: "quiz", kicker: "À vous de jouer",
          titre: "Six situations, une bonne réponse à chaque fois",
          image: "../module-4/img/ch6.webp", alt: "Deux techniciennes étudient des cartes de cas pratiques à l'agence.",
          questions: [
            {
              q: "Une patiente s'étonne : elle a une mutuelle, et pourtant 2 € restent à sa charge sur chaque consultation.",
              choix: ["C'est une erreur de sa mutuelle : elle doit la contacter.", "C'est la participation forfaitaire : elle n'est jamais remboursée, ni par l'Assurance maladie ni par la complémentaire.", "C'est le ticket modérateur, que sa mutuelle aurait dû couvrir."],
              bonne: 1,
              explication: "La participation forfaitaire de 2 € reste à la charge de l'assuré ; la complémentaire ne la rembourse pas. Le ticket modérateur, lui, peut être couvert par la complémentaire."
            },
            {
              q: "Un collègue remplace le chargeur d'un appareil de PPC par un chargeur du commerce « qui a l'air identique ».",
              choix: ["Aucun problème : un chargeur n'est pas un dispositif médical.", "C'est acceptable s'il a la même tension.", "Non : le chargeur est un accessoire, traité comme un DM. On utilise celui prévu par le fabricant."],
              bonne: 2,
              explication: "Un accessoire, destiné par le fabricant à être utilisé avec un DM conformément à sa destination, est traité comme un DM (RDM, article 2)."
            },
            {
              q: "Un patient vous demande si c'est l'ANSM qui a délivré le marquage CE de son ventilateur.",
              choix: ["Oui, l'ANSM délivre tous les marquages CE en France.", "Non : le fabricant l'appose après certification par un organisme notifié ; l'ANSM surveille les organismes notifiés et le marché.", "Non : c'est la HAS qui délivre le marquage CE."],
              bonne: 1,
              explication: "Le ventilateur est en classe IIb : certification par un organisme notifié, dont le numéro à 4 chiffres figure à côté du logo CE. L'ANSM n'intervient pas directement dans le marquage CE."
            },
            {
              q: "Un fabricant présente un nouvel appareil avec le marquage CE. Un collègue en conclut qu'il sera forcément remboursé.",
              choix: ["Oui, le marquage CE suffit pour être inscrit sur la LPP.", "Non : il faut encore l'évaluation de la CNEDiMTS (ou une description générique), un tarif du CEPS et une inscription sur la LPP.", "Oui, à condition que le patient ait une mutuelle."],
              bonne: 1,
              explication: "Le marquage CE atteste la conformité. Le remboursement suppose en plus une évaluation médico-technique, une tarification et une inscription sur la LPP par arrêté ministériel."
            },
            {
              q: "Un patient doit commencer une oxygénothérapie de longue durée. Le dossier n'a pas encore été envoyé à sa caisse.",
              choix: ["La prise en charge suppose un accord préalable : la demande, remplie par le médecin, complétée et signée par le patient et le prestataire, part à la caisse.", "Pas besoin d'accord : l'oxygène est toujours pris en charge.", "Il suffit d'une prescription d'un mois, renouvelable."],
              bonne: 0,
              explication: "L'oxygénothérapie de longue durée exige un accord préalable (LPP, rubrique I-1.1.3). La prescription d'un mois renouvelable deux fois concerne l'oxygénothérapie de courte durée, sans accord préalable."
            },
            {
              q: "Votre entreprise ouvre une nouvelle agence qui livrera de l'oxygène dans un autre département.",
              choix: ["L'autorisation du siège couvre déjà toutes les agences.", "Une simple déclaration en préfecture suffit.", "Il faut une nouvelle autorisation de l'ARS : elle est délivrée site par site."],
              bonne: 2,
              explication: "L'autorisation de dispenser de l'oxygène à usage médical est délivrée par site ; tout ajout de site ou changement de zone desservie exige une nouvelle démarche auprès de l'ARS."
            }
          ],
          commentaire: {
            pistes: ["Reprendre la question qui fait le plus hésiter et la relier à l'écran correspondant."],
            audio: "audio/situations-1.mp3",
            transcription: "Place à la pratique. Ces situations ressemblent à ce qu'on rencontre vraiment, à l'agence comme chez les patients. Ici, il ne s'agit pas de réciter des textes de loi, mais de savoir à qui s'adresser, et de pouvoir expliquer les choses simplement. Prenez le temps de lire chaque cas, choisissez votre réponse, puis lisez l'explication, même si vous avez trouvé la bonne. Et si une question vous fait hésiter, notez-la : c'est souvent le signe qu'il faut relire l'écran correspondant."
          }
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
            "Trois organismes à connaître : la HAS (évaluer, certifier), l'ANSM (sécurité des DM, matériovigilance), l'ARS (autorisation oxygène).",
            "Sécurité sociale : universalité, solidarité ; régime général (environ 88 % de la population), MSA, régimes spéciaux ; cinq branches.",
            "Remboursement : tarif conventionnel × taux, moins la participation forfaitaire ; le ticket modérateur va à l'assuré ou à sa complémentaire.",
            "Un DM agit sur le corps sans moyen pharmacologique, immunologique ni métabolique. Accessoires et produits de désinfection des DM sont traités comme des DM.",
            "Quatre classes de risque (I, IIa, IIb, III), fixées par le fabricant selon les règles de l'annexe VIII du RDM.",
            "Le marquage CE est un passeport réglementaire : fabricant, organisme notifié, et l'ANSM qui surveille.",
            "Conforme ne veut pas dire remboursé : CNEDiMTS (service attendu), CEPS (tarif), inscription sur la LPP. Le titre I est celui des PSDM.",
            "S'installer : convention nationale (tiers payant), autorisation ARS pour l'oxygène (par site), déclaration ICPE 4725 pour une cuve, certification HAS.",
            "Oxygénothérapie de longue durée : accord préalable de la caisse."
          ],
          commentaire: {
            pistes: ["Le mot de la fin : ne jamais inventer une réponse réglementaire, se renseigner."],
            audio: "audio/arrivee-1.mp3",
            transcription: "Voilà, la tournée réglementaire est terminée. Si vous ne deviez retenir qu'une idée de ce module, ce serait celle-ci : chaque règle que vous appliquez au quotidien a une origine, et une raison d'être. Le marquage européen, la liste des remboursements, l'accord préalable, l'autorisation pour l'oxygène : ce sont autant de garanties pour le patient. Cette fiche reprend l'essentiel. Gardez-la à portée de main. Et quand un patient vous pose une question à laquelle vous ne savez pas répondre, n'inventez pas : dites-lui que vous allez vous renseigner. Merci de m'avoir suivie, et à bientôt."
          }
        }
      ]
    }
  ]
};

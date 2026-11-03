/* Module 2 — données affichées par ../../assets/formation.js.
   Chaque écran : ce qui s'affiche + un commentaire de la formatrice
   (pistes pour ses propres exemples ; audio + transcription). */
window.MODULE = {
  formation: "Formation PSDM · Garant professionnel de santé",
  numero: 2,
  titre: "Environnement professionnel",
  titreCourt: "Environnement professionnel",
  formatrice: { nom: "Stéphanie Plaisant", initiales: "SP", role: "formatrice PSDM", photo: "../../img/stephanie.webp" },
  version: "Prototype · 3 novembre 2026 · d'après le support corrigé du module 2",

  chapitres: [
    {
      id: "depart", court: "Départ", titre: "Avant de prendre la route",
      ecrans: [
        {
          type: "intro", kicker: "Module 2",
          titre: "Savoir où l'on travaille, et avec qui",
          corps: "Ce module dessine la carte du terrain : les professionnels et les établissements de santé, l'hospitalisation à domicile, le médico-social, puis la place des PSDM, de leurs intervenants et de leurs garants, et les règles qui encadrent le métier.",
          objectifs: [
            "Situer les professionnels et les établissements du système de santé",
            "Comprendre l'hospitalisation à domicile et les structures médico-sociales",
            "Connaître les matériels et services d'un PSDM, et le rôle de l'intervenant et du garant",
            "Appliquer les règles professionnelles et les modalités de délivrance"
          ],
          image: "../../img/hero.webp", alt: "Une camionnette de prestataire en tournée, de maison en maison.",
          commentaire: { pistes: ["Situer en une phrase où se trouve le prestataire dans le parcours d'un patient."], audio: "audio/depart-1.mp3", transcription: "Bonjour, et bienvenue dans ce module. C'est Stéphanie, et je vous accompagne tout au long de cette tournée. Cette fois, on prend un peu de hauteur. Avant d'entrer chez un patient, il faut savoir dans quel paysage on travaille : qui soigne, qui finance, qui oriente, et où se situe le prestataire au milieu de tout ça. Ce n'est pas de la théorie pour le plaisir. Le jour où un patient vous pose une question sur son hospitalisation ou sur les aides auxquelles il a droit, vous saurez vers qui le diriger. Allez, on démarre." }
        }
      ]
    },
    {
      id: "acteurs", court: "Les acteurs", titre: "Les acteurs du système de santé",
      ecrans: [
        {
          type: "cartes", kicker: "Les professionnels de santé",
          titre: "Qui est professionnel de santé ?",
          intro: "Les professions de santé sont définies par la 4e partie du Code de la santé publique.",
          cartes: [
            { icone: "plus", titre: "Professions médicales", texte: "Médecins, chirurgiens-dentistes, sages-femmes." },
            { icone: "pill", titre: "Professions de la pharmacie", texte: "Pharmaciens, préparateurs en pharmacie." },
            { icone: "hand", titre: "Auxiliaires médicaux", texte: "Infirmiers, masseurs-kinésithérapeutes, orthophonistes, ergothérapeutes, psychomotriciens, diététiciens, opticiens-lunetiers, audioprothésistes, orthoprothésistes…" },
            { icone: "heart", titre: "Aides-soignants", texte: "Ainsi que les auxiliaires de puériculture et les ambulanciers." }
          ],
          retenir: "Un PSDM n'a pas, en tant que tel, le statut de professionnel de santé. Seuls ses salariés qui ont une qualification de santé reconnue (pharmacien, infirmier, masseur-kinésithérapeute…) le sont, et ils restent soumis aux règles de leur profession.",
          commentaire: { pistes: ["Ce que le statut change concrètement pour un technicien : ce qu'il peut faire, ce qu'il doit laisser aux soignants."], audio: "audio/acteurs-1.mp3", transcription: "Cette liste peut sembler administrative, mais elle a une conséquence très concrète pour vous. Le prestataire, en tant qu'entreprise, n'est pas un professionnel de santé. Et si vous êtes technicien, vous ne l'êtes pas non plus, même si vous voyez des patients tous les jours. Ça ne diminue en rien votre rôle. Mais ça trace une limite : les actes de soins reviennent aux professionnels de santé. Et si vous avez vous-même une qualification de santé, vous restez tenu par les règles de votre profession, y compris quand vous travaillez pour un prestataire." }
        },
        {
          type: "cartes", kicker: "Les établissements de santé",
          titre: "Trois statuts juridiques",
          intro: "Ils coexistent, avec des modes d'organisation, de financement et de régulation différents. Fin 2024 : 2 962 établissements et 367 100 lits d'hospitalisation complète.",
          cartes: [
            { icone: "building", titre: "Public", texte: "1 330 établissements · 224 057 lits, soit 61 % des lits." },
            { icone: "users", titre: "Privé à but non lucratif", texte: "655 établissements · 53 942 lits, soit 15 % des lits." },
            { icone: "euro", titre: "Privé à but lucratif (cliniques)", texte: "977 établissements · 89 129 lits, soit 24 % des lits." }
          ],
          note: "Source : DREES, Les établissements de santé en 2024 (édition 2026). Chiffres à actualiser chaque année.",
          commentaire: { pistes: ["D'où viennent le plus souvent les prescriptions de son agence : public, privé, libéral."], audio: "audio/acteurs-2.mp3", transcription: "Retenez surtout l'ordre de grandeur : six lits d'hospitalisation sur dix sont dans le public. Mais vos patients passent par les trois secteurs, et souvent par plusieurs au cours de leur parcours. Une clinique pour une opération, un hôpital public pour le suivi, puis le retour à la maison avec votre matériel. Pour vous, la différence de statut change peu de choses au quotidien. Ce qui compte, c'est de savoir qui a rédigé la prescription, et qui joindre quand une question se pose." }
        },
        {
          type: "texte", kicker: "Les hôpitaux publics",
          titre: "Du CHU au centre hospitalier",
          puces: [
            "Centres hospitaliers régionaux (CHR), presque tous universitaires (CHU) : 183 sites. Soins de haute spécialisation pour la région, soins courants pour la population proche. Associés à une université, les CHU assurent aussi l'enseignement et la recherche.",
            "Centres hospitaliers (CH) : 926, dont 189 anciens hôpitaux locaux. L'essentiel des séjours de médecine, chirurgie, obstétrique (MCO), les soins médicaux et de réadaptation (SMR, ex-SSR) et les soins aux personnes âgées. 90 CH sont spécialisés en psychiatrie.",
            "Hôpitaux des armées, depuis 2023-2024 : 4 hôpitaux nationaux d'instruction (Bégin, Percy, Sainte-Anne, Laveran), 2 hôpitaux régionaux (Clermont-Tonnerre, Legouest) et 2 hôpitaux spécialisés (Robert-Picqué, Desgenettes). D'abord pour les militaires, mais ouverts à tous.",
            "Autres établissements publics : surtout des établissements de soins de longue durée."
          ],
          retenir: "L'hospitalisation à domicile (HAD) est une forme d'hospitalisation à part entière, pas un service d'aide à domicile.",
          commentaire: { pistes: ["Les établissements du secteur de l'agence : lesquels prescrivent, lesquels ont une HAD."], audio: "audio/acteurs-3.mp3", transcription: "Le centre hospitalier universitaire, tout le monde le connaît. Mais l'essentiel des séjours se fait dans les centres hospitaliers, plus proches de chez les gens. C'est souvent de là que viennent les prescriptions de sortie. Un patient qui rentre après une hospitalisation est parfois fatigué, inquiet, un peu perdu entre les services qu'il a traversés. Mon conseil : demandez-lui simplement d'où il sort et qui le suit. Ça vous aide à comprendre sa situation, et à savoir qui contacter si le traitement pose question." }
        },
        {
          type: "duo", kicker: "Le secteur privé",
          titre: "Deux modèles privés",
          gauche: { etiquette: "À but non lucratif", titre: "655 établissements, surtout des ESPIC", texte: "Établissements de santé privés d'intérêt collectif, dont les centres de lutte contre le cancer (CLCC) : 18 centres Unicancer sur 20 sites. Missions de service public, fonctionnement proche de l'hôpital public." },
          droite: { etiquette: "À but lucratif", titre: "977 cliniques", texte: "Les médecins y exercent le plus souvent à titre libéral." },
          puces: [
            "Non lucratif : MCO, SMR, psychiatrie, HAD. Ils gèrent parfois aussi des structures médico-sociales (SSIAD, EHPAD), qui ne sont pas des établissements de santé.",
            "Cliniques : MCO ou soins pluridisciplinaires, SMR, psychiatrie, HAD."
          ],
          commentaire: { pistes: ["Qui appeler selon que le prescripteur est hospitalier ou libéral."], audio: "audio/acteurs-4.mp3", transcription: "Public, privé non lucratif, privé lucratif : pour le patient, la différence ne se voit pas toujours. Il parle de son hôpital ou de sa clinique, et c'est tout. Retenez quand même deux points. Les établissements privés d'intérêt collectif assurent des missions de service public, comme l'hôpital. Et dans les cliniques, les médecins exercent le plus souvent en libéral : votre interlocuteur sera alors souvent le médecin lui-même, plutôt qu'un service. Dans tous les cas, gardez le même réflexe : identifier clairement le prescripteur." }
        }
      ]
    },
    {
      id: "had", court: "L'HAD", titre: "L'hospitalisation à domicile",
      ecrans: [
        {
          type: "texte", kicker: "L'hospitalisation à domicile (HAD)",
          titre: "L'hôpital, mais à la maison",
          puces: [
            "Une hospitalisation à part entière, assurée au domicile du patient, y compris en EHPAD.",
            "Des soins médicaux et paramédicaux complexes et coordonnés, pour une période limitée mais renouvelable selon l'état du patient.",
            "Objectif : éviter ou raccourcir une hospitalisation avec hébergement.",
            "En 2024 : 164 structures dédiées à l'HAD ; l'ensemble des structures pouvait prendre en charge 25 427 patients en même temps.",
            "Financement : tarification à l'activité depuis 2005-2006. Un paiement à la journée, selon des groupes homogènes de tarifs (GHT) qui dépendent du mode de prise en charge principal, du degré de dépendance et de la durée. Ce n'est pas un paiement à l'acte."
          ],
          image: "../module-4/img/ch2.webp", alt: "Une technicienne ajuste avec douceur des lunettes à oxygène sur une dame âgée assise dans un fauteuil.",
          commentaire: { pistes: ["Une installation en HAD : qui était là, comment on s'est coordonné."], audio: "audio/had-1.mp3", transcription: "L'hospitalisation à domicile, c'est un point sur lequel beaucoup de gens se trompent, y compris certains patients. Ce n'est pas de l'aide à domicile : c'est l'hôpital, avec ses soins complexes et sa coordination, mais installé chez le patient. Pour vous, ça change l'ambiance de la visite. Vous arrivez dans une maison où passent des infirmiers, un médecin coordonnateur, parfois plusieurs intervenants dans la même journée. Votre place, c'est d'être un maillon fiable de cette chaîne : à l'heure, précis, et en lien avec l'équipe." }
        },
        {
          type: "etapes", kicker: "Les conditions de l'HAD",
          titre: "Quand l'HAD peut-elle être envisagée ?",
          intro: "Trois conditions, réunies :",
          etapes: [
            { titre: "Une indication médicale", texte: "Le patient est hospitalisé et le médecin estime que les soins peuvent se poursuivre à domicile, ou le médecin traitant juge qu'une hospitalisation avec hébergement peut être évitée." },
            { titre: "Un logement adapté", texte: "Le logement permet l'HAD : l'évaluation sociale est faite par l'équipe de l'HAD." },
            { titre: "Un accord", texte: "Le patient et son entourage sont d'accord." }
          ],
          note: "⚠ À vérifier sur ameli.fr : les règles de prise en charge (le support dit 80 %, ou 100 % en ALD). Il n'y a pas de forfait journalier hospitalier en HAD.",
          commentaire: { pistes: ["Ce qu'un technicien peut remarquer au domicile et qui intéresse l'équipe d'HAD."], audio: "audio/had-2.mp3", transcription: "Ces trois conditions disent une chose importante : l'hospitalisation à domicile ne s'impose jamais. Il faut une indication médicale, un logement qui le permet, et l'accord du patient et de ses proches. Ce dernier point, gardez-le en tête. Accueillir l'hôpital chez soi, c'est lourd pour une famille. Si vous sentez sur place que l'entourage est épuisé, ou que le logement ne suit plus, ne le gardez pas pour vous. Signalez-le à l'équipe de coordination : c'est exactement le genre d'information qui l'aide." }
        },
        {
          type: "cartes", kicker: "Les soins en HAD",
          titre: "Trois familles de soins",
          cartes: [
            { icone: "plus", titre: "Soins ponctuels", texte: "Chimiothérapie, antibiothérapie, pansements complexes…" },
            { icone: "heart", titre: "Soins continus", texte: "Nutrition parentérale, soins palliatifs…" },
            { icone: "home", titre: "Soins de réadaptation", texte: "Au domicile." }
          ],
          retenir: "La continuité des soins est assurée 24 h/24, 7 j/7.",
          commentaire: { pistes: ["Le matériel de l'agence le plus souvent livré en HAD, et ce que l'astreinte change."], audio: "audio/had-3.mp3", transcription: "Chimiothérapie, antibiotiques, nutrition, soins palliatifs : derrière ces mots, il y a souvent votre matériel. Une pompe, une perfusion, un lit, un concentrateur. Et comme la continuité des soins est assurée jour et nuit, votre matériel doit suivre le même rythme. Une panne à dix heures du soir n'attend pas le lendemain. Avant de partir, vérifiez toujours que le patient et ses proches savent qui appeler, et à quel numéro. C'est une question de dix secondes, et elle peut éviter une nuit très difficile." }
        },
        {
          type: "cartes", kicker: "L'équipe d'une HAD",
          titre: "Toute une équipe autour du patient",
          cartes: [
            { icone: "plus", titre: "Médecin coordonnateur", texte: "Référent médical de la structure. Il donne son avis sur l'admission et assure la coordination avec le médecin traitant et les médecins hospitaliers." },
            { icone: "hand", titre: "Équipe paramédicale", texte: "Infirmiers, cadres de santé, aides-soignants, kinésithérapeutes, ergothérapeutes, diététiciens… Elle assure les soins et leur coordination." },
            { icone: "home", titre: "Service social", texte: "Il évalue les conditions de vie et engage les démarches auprès des organismes sociaux et des services d'aide (aide-ménagère, portage de repas…)." },
            { icone: "ear", titre: "Psychologue", texte: "Il accompagne le patient et ses proches." },
            { icone: "file", titre: "Équipe administrative", texte: "Dossier administratif et financier." },
            { icone: "truck", titre: "Équipe logistique", texte: "Fourniture et mise en place du matériel." }
          ],
          retenir: "L'HAD travaille souvent avec des PSDM pour les prestations qu'elle n'assure pas elle-même : oxygénothérapie, lits, perfusion, nutrition…",
          commentaire: { pistes: ["Comment se passe concrètement le lien entre l'agence et une équipe d'HAD."], audio: "audio/had-4.mp3", transcription: "Regardez cette équipe : médecin, soignants, service social, psychologue, administration, logistique. Et pourtant, une partie du matériel vient souvent de l'extérieur : du prestataire, c'est-à-dire de vous. Vous travaillez donc pour le patient, mais aussi avec une équipe qui ne vous voit pas toujours. Ce qui fait votre réputation auprès d'elle, ce sont des choses simples. Des délais tenus, des comptes rendus clairs, et une alerte rapide quand quelque chose ne va pas. L'équipe doit pouvoir compter sur vous sans avoir à vérifier derrière." }
        }
      ]
    },
    {
      id: "medicosocial", court: "Médico-social", titre: "Le médico-social et les relais",
      ecrans: [
        {
          type: "texte", kicker: "Les EHPAD",
          titre: "Un lieu de vie pour personnes âgées dépendantes",
          corps: [
            "L'établissement d'hébergement pour personnes âgées dépendantes (EHPAD) peut être public, associatif ou privé commercial. Sa création exige une autorisation conjointe du président du Conseil départemental et du directeur général de l'ARS (art. L313-3 du Code de l'action sociale et des familles).",
            "Il accueille en général des personnes de plus de 60 ans (des dérogations sont possibles), en perte d'autonomie. Les services proposés :"
          ],
          puces: [
            "Hébergement en chambre individuelle ou partagée ; restauration et blanchisserie.",
            "Animation et vie sociale ; aide à la vie quotidienne, 24 h/24.",
            "Surveillance médicale et soins, par des infirmiers, des aides-soignants et des accompagnants éducatifs et sociaux (AES, qui remplacent depuis 2016 les aides médico-psychologiques).",
            "Un médecin coordonnateur. Les résidents gardent en général leur médecin traitant."
          ],
          commentaire: { pistes: ["Les différences pratiques d'une installation en EHPAD par rapport au domicile."], audio: "audio/medicosocial-1.mp3", transcription: "En établissement pour personnes âgées dépendantes, vous n'êtes plus vraiment au domicile, mais vous êtes quand même chez quelqu'un. La chambre du résident, c'est son chez-lui. Frappez avant d'entrer, présentez-vous, et adressez-vous à la personne avant de parler à l'équipe. Les règles de discrétion et de respect ne changent pas parce qu'il y a un couloir et des soignants. Autre point utile : l'établissement a un médecin coordonnateur, mais le résident garde en général son médecin traitant. Vérifiez bien qui a prescrit." }
        },
        {
          type: "cartes", kicker: "La tarification en EHPAD",
          titre: "Un tarif en trois parts",
          cartes: [
            { icone: "home", titre: "Hébergement", texte: "Administration, hôtellerie, restauration, entretien, animation. Indépendant de la dépendance, il est payé par le résident. Aides possibles : aide sociale à l'hébergement du département, aides au logement (APL ou ALS)." },
            { icone: "hand", titre: "Dépendance", texte: "Aide et surveillance pour les actes de la vie courante. Le tarif suit le niveau de dépendance, évalué avec la grille AGGIR (groupes iso-ressources GIR 1 à 6). L'allocation personnalisée d'autonomie (APA), versée par le Conseil départemental, en couvre une partie. Le tarif des GIR 5-6 reste à la charge du résident." },
            { icone: "plus", titre: "Soins", texte: "Personnel soignant et dépenses médicales, financés par l'Assurance maladie via un forfait versé à l'établissement par l'ARS. Selon que l'établissement est en tarif global ou partiel, certaines consultations (médecins libéraux, examens) sont incluses dans le forfait ou remboursées comme à domicile." }
          ],
          commentaire: { pistes: ["Les questions d'argent que posent les familles, et où les renvoyer."], audio: "audio/medicosocial-2.mp3", transcription: "Cette tarification est compliquée, et les familles s'y perdent souvent. Vous n'avez pas à devenir expert, mais il est utile d'en comprendre la logique : le logement, la dépendance et les soins sont trois parts, payées différemment. Si une famille vous pose une question précise sur sa facture, ou sur l'allocation personnalisée d'autonomie, ne vous lancez pas dans une réponse approximative. Orientez-la vers l'établissement, ou vers le conseil départemental. Une information fausse sur l'argent laisse des traces longtemps." }
        },
        {
          type: "duo", kicker: "Information et orientation",
          titre: "Deux guichets à connaître",
          gauche: { etiquette: "Personnes âgées", titre: "Le CLIC", texte: "Centre local d'information et de coordination : un guichet unique gratuit pour les personnes âgées et leurs proches. Information, orientation, évaluation des besoins, coordination des aides." },
          droite: { etiquette: "Personnes handicapées", titre: "La MDPH", texte: "Maison départementale des personnes handicapées, créée par la loi du 11 février 2005 pour l'égalité des droits et des chances. Un groupement d'intérêt public (GIP) placé sous la tutelle administrative et financière du département." },
          puces: [
            "CLIC : en lien avec le CCAS, le Conseil départemental, les caisses de retraite et les services d'aide à domicile. Financé surtout par le département, parfois avec les communes, les CARSAT et d'autres partenaires.",
            "Beaucoup de CLIC ont rejoint les dispositifs d'appui à la coordination (DAC), sur décision du département, ou des maisons de l'autonomie : le nom varie selon le territoire.",
            "MDPH : elle associe l'État, le département, les organismes de Sécurité sociale et les associations de personnes handicapées, et fait souvent partie d'une maison départementale de l'autonomie.",
            "Ses missions : accueil, information et écoute ; évaluation des besoins de compensation par une équipe pluridisciplinaire ; plan personnalisé de compensation, à partir du projet de vie ; attribution des droits et prestations (prestation de compensation du handicap, AAH, orientation scolaire, médico-sociale ou professionnelle) par la commission des droits et de l'autonomie des personnes handicapées (CDAPH) ; suivi des décisions, médiation et conciliation."
          ],
          commentaire: { pistes: ["Le nom et l'adresse de ces services dans le secteur de l'agence."], audio: "audio/medicosocial-3.mp3", transcription: "Ces deux guichets, je vous conseille de bien les connaître, parce que les patients vous en parleront. Le centre local d'information pour les personnes âgées, et la maison départementale pour les personnes handicapées. Beaucoup de familles ne savent pas à quelle porte frapper. Vous n'avez pas à monter leur dossier, mais vous pouvez leur indiquer la bonne adresse. Un conseil pratique : renseignez-vous sur le nom exact de ces services dans votre secteur. Il change d'un département à l'autre, et une adresse précise vaut mieux qu'un sigle." }
        },
        {
          type: "texte", kicker: "Les associations de patients",
          titre: "Soutenir, informer, représenter",
          puces: [
            "Un rôle social (rompre l'isolement, aider concrètement), d'information, de défense des droits et de représentation des usagers dans les instances de santé.",
            "De plus en plus présentes dans la recherche : promotion de la recherche, relecture des protocoles et vigilance éthique, diffusion de l'information auprès des patients.",
            "Souvent organisées autour d'une maladie ou d'un groupe de maladies. Exemple dans le domaine respiratoire : la FFAAIR (Fédération française des associations et amicales de malades, insuffisants ou handicapés respiratoires).",
            "Les associations agréées représentent les usagers dans les établissements et les instances : agrément d'usagers du système de santé, réseau France Assos Santé."
          ],
          note: "⚠ À vérifier : le support cite « plus de 14 000 associations » sans source. Chiffre retiré en attendant de le sourcer.",
          commentaire: { pistes: ["Les associations que les patients de l'agence citent le plus souvent."], audio: "audio/medicosocial-4.mp3", transcription: "On pense peu aux associations de patients, et c'est dommage. Pour quelqu'un qui découvre sa maladie, ou qui se retrouve seul avec un appareil, elles peuvent compter énormément : on y trouve de l'information, du soutien, et des gens qui vivent la même chose. Dans le domaine respiratoire, par exemple, il existe une fédération nationale d'associations de malades. Si un patient se sent isolé, vous pouvez lui dire qu'elles existent. Simplement, sans insister : c'est à lui de décider s'il veut les contacter." }
        }
      ]
    },
    {
      id: "psdm", court: "Les PSDM", titre: "Les prestataires de services et distributeurs de matériels",
      ecrans: [
        {
          type: "texte", kicker: "Les PSDM",
          titre: "Le dispositif médical, et le service qui va avec",
          corps: [
            "Le prestataire met à disposition des dispositifs médicaux et assure le service qui les accompagne. Il permet ainsi les traitements à domicile et le maintien à domicile.",
            "Ces produits et prestations sont presque toujours délivrés sur prescription médicale, et remboursés par l'Assurance maladie selon la LPP. Certains sont soumis à accord préalable de la caisse, par exemple l'oxygénothérapie de longue durée. Trois types d'acteurs :"
          ],
          puces: [
            "Les entreprises privées, majoritaires. Organisations représentatives : notamment le SYNALAM et l'UNPDM, signataires de la convention nationale de 2015.",
            "Le secteur associatif, notamment représenté par le SNADOM.",
            "Les pharmacies d'officine."
          ],
          note: "⚠ À vérifier : la liste à jour des organisations représentatives, qui évolue (fédérations, fusions).",
          commentaire: { pistes: ["Ce qui bloque le plus souvent un dossier : prescription incomplète, accord préalable en attente."], audio: "audio/psdm-1.mp3", transcription: "Voilà notre métier : le dispositif médical, et le service qui va avec. Retenez bien cette formule, parce que le matériel seul ne suffit pas. Presque tout ce que vous livrez part d'une prescription, et c'est l'Assurance maladie qui rembourse. Certains traitements, comme l'oxygène de longue durée, demandent même un accord préalable de la caisse. C'est pour ça que les papiers ne sont pas un détail. Une prescription incomplète, et c'est toute la prise en charge du patient qui peut être retardée." }
        },
        {
          type: "duo", kicker: "Deux évolutions importantes",
          titre: "Certification et formation obligatoire",
          gauche: { etiquette: "Depuis 2021", titre: "La certification des PSDM", texte: "Créée par la LFSS pour 2021 (décret n° 2022-169 du 11 février 2022), elle conditionnera le remboursement LPP. La HAS a publié en juin 2024 le référentiel de bonnes pratiques professionnelles des PSDM (60 critères en 4 chapitres), mis à jour en juin 2026." },
          droite: { etiquette: "Arrêté du 23 décembre 2011", titre: "La formation obligatoire", texte: "Des intervenants et des garants, selon l'arrêté du 23 décembre 2011 modifié par l'arrêté du 8 mars 2012 (voir module 5)." },
          note: "⚠ À vérifier : le calendrier d'application de la certification, sur has-sante.fr.",
          commentaire: { pistes: ["Où en est son entreprise dans la démarche de certification."], audio: "audio/psdm-2.mp3", transcription: "Ces deux évolutions vont dans le même sens : professionnaliser le métier. La certification, d'abord, conditionnera le remboursement. Et le référentiel de la Haute Autorité de santé décrit, critère par critère, ce qu'on attend d'un prestataire. La formation obligatoire, ensuite : c'est elle qui vous amène ici. Ce n'est pas une contrainte de plus. C'est la reconnaissance que votre travail demande de vraies compétences, et qu'on ne s'improvise pas intervenant à domicile." }
        },
        {
          type: "qualites", kicker: "Matériels et services",
          titre: "Le service fait partie de la prestation",
          qualites: ["Éducation", "Livraison", "Suivi", "Consommables", "Maintenance", "Désinfection", "Astreinte"],
          puces: [
            "Éducation du patient et de son entourage : intérêt du traitement, règles de sécurité, entretien du matériel.",
            "Livraison et mise à disposition du matériel prescrit.",
            "Suivi du traitement et de l'observance ; adaptation des consommables aux besoins.",
            "Maintenance, nettoyage et désinfection du matériel.",
            "Astreinte 24 h/24, 7 j/7, quand la prestation l'exige."
          ],
          retenir: "Les PSDM fournissent les dispositifs médicaux et les services nécessaires à la prise en charge à domicile des personnes malades, dépendantes ou handicapées.",
          image: "../module-4/img/ch5.webp", alt: "Une technicienne téléphone, assise dans sa camionnette garée.",
          commentaire: { pistes: ["Ce qu'on explique à chaque installation, quel que soit le matériel."], audio: "audio/psdm-3.mp3", transcription: "Sur cette liste, une seule ligne parle de livraison. Tout le reste, c'est du service : expliquer, suivre, entretenir, désinfecter, répondre la nuit quand il le faut. C'est là que se fait la différence entre deux prestataires. Le même appareil peut être bien ou mal utilisé, selon la façon dont il a été expliqué et suivi. Alors, quand vous installez, ne vous arrêtez pas au branchement. Prenez le temps de l'éducation : à quoi sert le traitement, comment entretenir le matériel, et que faire en cas de problème." }
        },
        {
          type: "cartes", kicker: "Les trois grands domaines",
          titre: "Du traitement chronique au maintien à domicile",
          cartes: [
            { icone: "heart", titre: "Maladies chroniques", texte: "Diabète : pompe à insuline. Maladie de Parkinson : pompe à apomorphine. Maladies respiratoires : oxygénothérapie, PPC, VNI, aérosolthérapie." },
            { icone: "pill", titre: "Traitements spécifiques à domicile", texte: "Perfusion : chimiothérapie, antibiothérapie, traitement de la douleur. Nutrition entérale (par sonde ou gastrostomie) et nutrition parentérale." },
            { icone: "bed", titre: "Aides techniques au maintien à domicile", texte: "Lits médicaux ; aides à la mobilité (fauteuils roulants, déambulateurs, cannes, béquilles) ; prévention des escarres (coussins, matelas) ; incontinence (sondes, étuis péniens, alèses)." }
          ],
          retenir: "Les protections absorbantes ne sont en général pas remboursées par la LPP.",
          commentaire: { pistes: ["Les domaines couverts par son agence, et ceux qu'elle ne fait pas."], audio: "audio/psdm-4.mp3", transcription: "Trois grands domaines, et des matériels très différents. Une pompe à insuline et un lit médical ne demandent pas les mêmes compétences. C'est d'ailleurs une règle : un prestataire ne délivre que ce qu'il maîtrise vraiment. Si on vous demande d'intervenir sur un matériel que vous ne connaissez pas, dites-le, et demandez à être formé. Et un mot sur l'incontinence : les familles pensent souvent que les protections sont remboursées. En général, elles ne le sont pas. Mieux vaut le dire clairement dès le départ." }
        }
      ]
    },
    {
      id: "roles", court: "Les rôles", titre: "Intervenant et garant",
      ecrans: [
        {
          type: "duo", kicker: "Intervenants et garants",
          titre: "Qui fait quoi ?",
          gauche: { etiquette: "L'intervenant", titre: "Il délivre et accompagne", texte: "Il intervient auprès de la personne malade ou handicapée pour lui délivrer les matériels et les services. C'est aussi toute personne qui se rend au domicile pour conseiller sur l'utilisation du matériel, organiser des essais ou assurer la maintenance." },
          droite: { etiquette: "Le garant", titre: "Il garantit les règles", texte: "Il garantit l'application des règles professionnelles et des bonnes pratiques de délivrance, les explique aux intervenants, leur transmet ses connaissances et vérifie qu'ils les appliquent. Exemple : le pharmacien responsable, garant des BPDOUM (bonnes pratiques de dispensation à domicile de l'oxygène à usage médical)." },
          puces: [
            "Deux types de garants : un professionnel de santé (médecin, pharmacien, kinésithérapeute, infirmier…) pour les activités qui le requièrent ; un non-professionnel de santé formé, par exemple pour les lits médicaux et leurs accessoires, ou les VPH (véhicules pour personnes handicapées).",
            "L'intervenant applique les règles professionnelles et les bonnes pratiques. Le garant les applique lui-même et s'assure que les intervenants les appliquent."
          ],
          retenir: "Les garants qui ne sont pas professionnels de santé ne peuvent pas réaliser d'actes de soins.",
          commentaire: { pistes: ["Qui est garant dans son agence, et pour quelles activités."], audio: "audio/roles-1.mp3", transcription: "Intervenant et garant : la différence est simple à dire. L'intervenant applique les règles. Le garant les applique aussi, mais il s'assure en plus que tout le monde les applique, et il les transmet. Si vous êtes intervenant, votre garant est votre ressource. Une question sur une bonne pratique, un doute sur une situation : c'est lui qu'il faut aller voir. Et si vous devenez garant un jour, souvenez-vous : si vous n'êtes pas professionnel de santé, vous ne réalisez aucun acte de soin." }
        },
        {
          type: "texte", kicker: "Rôle et missions de l'intervenant (1/2)",
          titre: "Informer, conseiller, délivrer",
          puces: [
            "Respecter la prescription, et la préconisation de l'équipe pluridisciplinaire quand elle existe.",
            "Informer le patient et son entourage de façon adaptée, intelligible et loyale.",
            "Expliquer le fonctionnement du matériel, en vérifiant que c'est compris.",
            "Présenter, s'il y a lieu, plusieurs matériels qui répondent au besoin : avantages, inconvénients, coûts, niveau de prise en charge.",
            "N'exercer aucune pression pour faire acheter du matériel.",
            "Effectuer, s'il y a lieu, des essais, chez le prestataire ou au domicile.",
            "Délivrer le matériel et les consommables en respectant le choix du patient et la prescription.",
            "Livrer le matériel au domicile si nécessaire ; le mettre en service et vérifier qu'il fonctionne.",
            "Délivrer du matériel propre et désinfecté ; rappeler les conditions d'utilisation et les règles de sécurité."
          ],
          image: "../module-4/img/ch4.webp", alt: "Une technicienne explique un concentrateur d'oxygène à une dame âgée et à sa fille.",
          commentaire: { pistes: ["Comment présenter deux matériels sans orienter le choix."], audio: "audio/roles-2.mp3", transcription: "Cette liste peut paraître longue, mais elle suit le fil d'une installation. Et il y a deux mots que je voudrais souligner : loyale, et aucune pression. Loyale, ça veut dire qu'on présente les matériels honnêtement, avec leurs défauts et leur prix, même quand ça ne nous arrange pas. Aucune pression, ça veut dire que le patient choisit, et qu'on respecte son choix. Un patient qui a été poussé à acheter s'en souviendra. Un patient bien conseillé, lui, vous fera confiance pour longtemps." }
        },
        {
          type: "texte", kicker: "Rôle et missions de l'intervenant (2/2)",
          titre: "Suivre dans la durée",
          puces: [
            "Tenir le dossier de suivi du patient.",
            "Respecter les règles d'hygiène et de sécurité à chaque intervention.",
            "Suivre l'observance, et alerter le prescripteur ou le médecin traitant en cas d'anomalie ; vérifier la bonne utilisation du matériel.",
            "Fournir un matériel de remplacement équivalent si nécessaire.",
            "Si le prestataire ne peut pas assurer la prestation : en informer le patient et lui rappeler qu'il est libre de choisir un autre prestataire.",
            "Assurer le service après-vente, la maintenance et les réparations, dans les délais réglementaires ou dans un délai raisonnable.",
            "Signaler les incidents ou risques d'incidents de matériovigilance (module 3)."
          ],
          retenir: "Le secret professionnel couvre ce qui a été confié, mais aussi ce qui a été vu, lu, entendu, constaté ou compris.",
          commentaire: { pistes: ["Un signe d'anomalie d'observance à repérer en visite, et à qui le remonter."], audio: "audio/roles-3.mp3", transcription: "Une fois le matériel installé, votre travail continue. Le suivi de l'observance, la vérification de la bonne utilisation, le remplacement quand l'appareil tombe en panne : c'est ce qui fait qu'un traitement fonctionne vraiment. Deux réflexes à garder. Si vous constatez une anomalie, une machine qui ne sert pas ou un patient en difficulté, alertez le médecin. Et si un incident survient avec le matériel, ou risque de survenir, signalez-le. Enfin, le secret : il couvre aussi ce que vous avez simplement vu ou compris en passant." }
        },
        {
          type: "texte", kicker: "Rôle et missions du garant",
          titre: "Veiller aux obligations du prestataire",
          corps: ["Ce sont les obligations du prestataire, dont le garant veille au respect :"],
          puces: [
            "Ne délivrer que les catégories de matériel pour lesquelles l'entreprise a les connaissances, l'expérience et la pratique régulière.",
            "Guider le choix du patient avec tact, en proposant en priorité le matériel pris en charge par l'Assurance maladie.",
            "Respecter les prix annoncés ; disposer en permanence de matériel en quantité suffisante et en bon état.",
            "Avoir une assurance de responsabilité civile professionnelle adaptée.",
            "Respecter et faire respecter les bonnes pratiques, et les conditions de conventionnement et de certification.",
            "Disposer de locaux conformes : accessibilité, accueil confidentiel, stockage adapté, zone de nettoyage et désinfection.",
            "Disposer de personnel compétent et formé (arrêté du 23 décembre 2011), et former les collaborateurs au secret professionnel.",
            "Mettre à jour les connaissances de tous les collaborateurs."
          ],
          commentaire: { pistes: ["Ce que le garant vérifie concrètement lors d'un passage en agence."], audio: "audio/roles-4.mp3", transcription: "Ces obligations sont celles de l'entreprise, mais c'est le garant qui veille à ce qu'elles soient tenues. Locaux, stocks, assurance, formation, mise à jour des connaissances : il a une vue d'ensemble. Une ligne mérite qu'on s'y arrête : guider le choix du patient avec tact, en proposant d'abord le matériel pris en charge. Ce n'est pas le plus rentable qu'on propose en premier, c'est celui que le patient aura le moins à payer de sa poche. Et un garant, c'est aussi quelqu'un qui forme les autres, au quotidien." }
        }
      ]
    },
    {
      id: "regles", court: "Les règles", titre: "Règles professionnelles et délivrance",
      ecrans: [
        {
          type: "cartes", kicker: "Les règles professionnelles (1/2)",
          titre: "La personne d'abord",
          intro: "Décret n° 2006-1637 du 19 décembre 2006, art. D5232-1 et suivants du Code de la santé publique. Ce qui suit résume le texte : pour une citation exacte, se reporter à Légifrance.",
          cartes: [
            { icone: "heart", titre: "Intérêt et respect de la personne", texte: "Agir en toutes circonstances dans l'intérêt de la personne. Respecter sa dignité et son intimité, et celles de sa famille, ainsi que ses choix et ceux de son entourage. La même conscience pour chacun, sans discrimination, sans exploiter sa confiance pour un avantage personnel ou financier." },
            { icone: "scale", titre: "Indépendance et liberté de choix", texte: "Interdit : toute pratique qui compromettrait l'indépendance de l'équipe médicale et sa liberté de prescription. La personne garde le droit de s'adresser au professionnel de santé de son choix. Interdit aussi : dénigrer un professionnel de santé." },
            { icone: "users", titre: "Compétence et coopération", texte: "Ne délivrer que les catégories de matériel pour lesquelles on a les connaissances, l'expérience et la pratique régulière. Coopérer avec l'équipe pluridisciplinaire. Mettre à jour ses connaissances, suivre l'évolution des bonnes pratiques et de la réglementation." },
            { icone: "lock", titre: "Secret professionnel", texte: "Il couvre ce qui a été confié, mais aussi ce qui a été vu, lu, entendu, constaté ou compris. Le prestataire en instruit ses collaborateurs et veille à ce qu'ils le respectent." }
          ],
          commentaire: { pistes: ["Réagir quand un patient critique son médecin devant soi."], audio: "audio/regles-1.mp3", transcription: "Ces règles viennent d'un décret, mais vous allez voir qu'elles ressemblent beaucoup au bon sens. Agir dans l'intérêt de la personne, respecter ses choix, ne pas profiter de sa confiance. Il y en a une sur laquelle j'insiste : ne jamais dénigrer un professionnel de santé. Même si le patient se plaint de son médecin, même si vous pensez qu'un réglage a été mal prescrit. Vous pouvez écouter, et faire remonter la question au prescripteur. Mais devant le patient, on ne critique pas." }
        },
        {
          type: "cartes", kicker: "Les règles professionnelles (2/2)",
          titre: "Une prestation globale, des locaux adaptés",
          cartes: [
            { icone: "truck", titre: "Prestation", texte: "Une prestation globale, qui comprend de façon indissociable l'ensemble des éléments définis par arrêté. Se conformer à la prescription, et à la préconisation de l'équipe pluridisciplinaire quand elle existe. Délivrer, dans des délais compatibles avec le traitement ou les besoins d'autonomie, le matériel et le service les plus adaptés. Appliquer les conseils d'utilisation et de sécurité du fabricant. Donner à la personne toutes les informations sur le matériel et le service fournis." },
            { icone: "wrench", titre: "Matériel de remplacement", texte: "Si une réparation immobilise un matériel plus d'une journée : un remplacement aux mêmes performances. Pour un matériel personnalisé, le plus proche possible du matériel de la personne. L'obligation s'apprécie selon la catégorie de matériel et son importance pour l'autonomie ou la continuité du traitement." },
            { icone: "building", titre: "Locaux", texte: "Un local réservé à l'activité, avec un espace accessible aux personnes handicapées. Il permet un accueil personnalisé et confidentiel, avec une isolation phonique et visuelle, notamment pour les essais. Pour les aides à la mobilité, un espace suffisant pour essayer le matériel." },
            { icone: "message", titre: "Liens avec le prescripteur", texte: "Lui demander, ou demander à l'équipe pluridisciplinaire, les informations complémentaires nécessaires, notamment quand l'évolution de la maladie n'est pas claire. L'informer du matériel délivré, en vue du suivi." }
          ],
          commentaire: { pistes: ["Comment l'agence organise le matériel de remplacement en cas de panne."], audio: "audio/regles-2.mp3", transcription: "Cette deuxième série de règles est très concrète. La plus importante au quotidien, c'est sans doute le matériel de remplacement. Si une réparation immobilise un appareil plus d'une journée, le patient ne doit pas rester sans rien. Pour quelqu'un qui dépend de son matériel pour respirer ou pour se déplacer, une journée, c'est déjà beaucoup. Pensez aussi aux locaux : quand un patient vient essayer un fauteuil à l'agence, il a droit à la même discrétion que chez lui. Un espace à l'abri des regards et des oreilles." }
        },
        {
          type: "etapes", kicker: "Les modalités de délivrance",
          titre: "De la prescription au suivi",
          intro: "Arrêté du 19 décembre 2006. La délivrance des matériels et services comprend :",
          etapes: [
            { titre: "Partir du besoin", texte: "Prendre en compte la prescription, la préconisation de l'équipe pluridisciplinaire, ou la demande de la personne." },
            { titre: "Informer et faire essayer", texte: "Une information adaptée, intelligible et loyale, avec la présentation objective de plusieurs matériels s'il y a lieu : avantages, inconvénients, coûts, niveaux de prise en charge (Assurance maladie, prestation de compensation du handicap). Une démonstration du fonctionnement, en vérifiant que c'est compris. S'il y a lieu, des essais de plusieurs matériels (sauf sur mesure), chez le prestataire ou au lieu de vie." },
            { titre: "Engager", texte: "La remise d'un devis. L'information sur la garantie et la durée de vie habituelle, avec remise du document d'information et de la notice." },
            { titre: "Délivrer et installer", texte: "La délivrance du matériel et des consommables, en respectant le choix du patient et la prescription. Le rappel des conditions d'utilisation, d'entretien, de désinfection et de sécurité. Un dossier de suivi pour chaque personne. La livraison au lieu de vie si nécessaire. La mise en service et la vérification du fonctionnement, dans l'environnement d'utilisation. La facturation." },
            { titre: "Suivre", texte: "Une astreinte téléphonique si nécessaire. Le service après-vente, la maintenance et les réparations, dans les délais réglementaires s'ils existent, et toujours dans des délais raisonnables. Le contrôle de l'observance s'il y a lieu, pour alerter le médecin traitant en cas d'anomalie. Le contrôle de la bonne utilisation, en coordination avec l'équipe soignante. Le signalement des incidents de matériovigilance." }
          ],
          retenir: "Le référentiel HAS de bonnes pratiques des PSDM (2024) reprend et précise ces exigences, en vue de la certification.",
          commentaire: { pistes: ["Les documents remis au patient à l'installation, montrés en vrai."], audio: "audio/regles-3.mp3", transcription: "Ces étapes résument tout le métier, de la prescription jusqu'au suivi. Vous remarquerez qu'il y a deux moments où l'on vérifie que le patient a compris : pendant la démonstration, et plus tard, en contrôlant la bonne utilisation. Ce n'est pas un hasard. Un patient qui dit oui n'a pas toujours compris. Demandez-lui de vous montrer, plutôt que de lui demander s'il a compris. Et n'oubliez pas les documents : le devis, la notice, les informations sur la garantie. Ils protègent le patient, et ils vous protègent aussi." }
        }
      ]
    },
    {
      id: "arrivee", court: "Arrivée", titre: "Fin de tournée",
      ecrans: [
        {
          type: "quiz", kicker: "À vous de jouer",
          titre: "Cinq situations, une bonne réponse à chaque fois",
          image: "../module-4/img/ch6.webp", alt: "Deux techniciennes étudient des cartes de cas pratiques à l'agence.",
          questions: [
            {
              q: "Un patient vous demande si vous êtes, vous aussi, professionnel de santé. Vous êtes technicien chez un PSDM, sans qualification de santé.",
              choix: ["Oui : vous travaillez dans la santé.", "Ça dépend du matériel que vous livrez.", "Non : seuls les salariés qui ont une qualification de santé reconnue le sont."],
              bonne: 2,
              explication: "Un PSDM n'a pas, en tant que tel, le statut de professionnel de santé. Seuls ses salariés qualifiés (pharmacien, infirmier, kinésithérapeute…) le sont."
            },
            {
              q: "La fille d'une patiente pense que l'HAD, « c'est une aide-ménagère qui passe à la maison ».",
              choix: ["Vous expliquez que c'est une hospitalisation à part entière, avec des soins coordonnés et une continuité 24 h/24.", "Vous confirmez : c'est de l'aide à domicile.", "Vous lui dites que l'HAD ne concerne que les EHPAD."],
              bonne: 0,
              explication: "L'HAD est une hospitalisation à part entière, au domicile (y compris en EHPAD), avec des soins complexes et coordonnés."
            },
            {
              q: "Un patient hésite entre deux fauteuils roulants. Le plus cher, moins bien pris en charge, rapporterait davantage à votre entreprise.",
              choix: ["Vous insistez sur le plus cher : il est plus confortable.", "Vous présentez les deux objectivement, en commençant par le mieux pris en charge, et le patient choisit.", "Vous choisissez pour lui, pour gagner du temps."],
              bonne: 1,
              explication: "Information loyale, aucune pression d'achat, priorité au matériel pris en charge, respect du choix du patient."
            },
            {
              q: "Le concentrateur d'un patient tombe en panne. La réparation prendra trois jours.",
              choix: ["Le patient attend la fin de la réparation.", "Vous lui conseillez d'aller à l'hôpital.", "Vous fournissez un matériel de remplacement aux mêmes performances."],
              bonne: 2,
              explication: "Au-delà d'une journée d'immobilisation, le prestataire fournit un matériel de remplacement aux mêmes performances."
            },
            {
              q: "Les parents d'un jeune patient handicapé vous demandent à qui s'adresser pour obtenir la prestation de compensation du handicap.",
              choix: ["À la MDPH.", "Au CLIC.", "À votre agence."],
              bonne: 0,
              explication: "La MDPH évalue les besoins de compensation, et sa commission (CDAPH) attribue les droits et prestations. Le CLIC s'adresse aux personnes âgées."
            }
          ],
          commentaire: { pistes: ["Reprendre la situation qui fait le plus débat en formation."], audio: "audio/arrivee-1.mp3", transcription: "Place à la pratique. Ces cinq situations mettent en jeu ce qu'on vient de voir : votre statut, l'hospitalisation à domicile, le choix du patient, le matériel de remplacement, et les bons interlocuteurs. Lisez bien chaque cas, choisissez votre réponse, puis lisez l'explication, même si vous avez trouvé. Et si une réponse vous surprend, notez-la, et posez la question en formation. C'est souvent sur ces petites surprises qu'on apprend le plus." }
        },
        {
          type: "memo", kicker: "Fiche mémo",
          titre: "Ce qu'il faut garder en tête",
          points: [
            "Un PSDM n'est pas, en tant que tel, professionnel de santé : seuls ses salariés qualifiés le sont.",
            "Trois statuts d'établissements de santé : public, privé à but non lucratif, privé à but lucratif.",
            "L'HAD est une hospitalisation à part entière, au domicile, avec une continuité des soins 24 h/24, 7 j/7.",
            "EHPAD : hébergement payé par le résident, dépendance en partie couverte par l'APA, soins financés par l'Assurance maladie.",
            "Orienter : le CLIC pour les personnes âgées, la MDPH pour les personnes handicapées.",
            "Un PSDM fournit le matériel et le service : éducation, livraison, suivi, maintenance, désinfection, astreinte.",
            "L'intervenant applique les règles ; le garant les applique et s'assure qu'elles sont appliquées.",
            "Informer de façon adaptée, intelligible et loyale, sans aucune pression d'achat, en respectant le choix du patient.",
            "Plus d'une journée d'immobilisation : un matériel de remplacement aux mêmes performances.",
            "Ne jamais dénigrer un professionnel de santé."
          ],
          commentaire: { pistes: ["Le mot de la fin : le réflexe d'orientation qu'elle aimerait voir chez chacun."], audio: "audio/arrivee-2.mp3", transcription: "Voilà, la tournée est terminée. Si vous ne deviez retenir qu'une chose de ce module, ce serait celle-ci : vous n'êtes pas seul auprès du patient. Autour de lui, il y a des médecins, des soignants, des services, des associations, et vous en faites partie. Connaître ce paysage, c'est savoir orienter le patient, et savoir à qui passer le relais. Imprimez cette fiche, gardez-la à portée de main, et relisez-la avant votre prochaine installation. Merci de m'avoir suivie, et à bientôt." }
        }
      ]
    }
  ]
};

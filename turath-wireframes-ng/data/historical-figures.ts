// Moroccan & Amazigh Historical Figures
export interface HistoricalFigure {
  id: string;
  name: string;
  nameAr: string;
  nameAmz: string;
  era: string;
  period: { start: number; end: number };
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  achievements: string[];
  heritageConnections: string[];
  regions: string[];
  image?: string;
}

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  {
    id: 'youssef-ben-tachfine',
    name: 'Youssef ben Tachfine',
    nameAr: 'يوسف بن تاشفين',
    nameAmz: 'ⵢⵓⵙⵔⴰ ⴼⵏ ⵜⴰⵛⴼⵉⵏ',
    era: 'Almoravid Dynasty',
    period: { start: 1009, end: 1106 },
    title: 'Emir & Warrior',
    titleAr: 'الأمير والمحارب',
    description: 'Founder of the Almoravid dynasty who unified the Maghreb and Al-Andalus, establishing a vast Islamic empire across North Africa and Spain',
    descriptionAr: 'مؤسس دولة المرابطين الذي وحد بلاد المغرب والأندلس وأسس إمبراطورية إسلامية واسعة',
    achievements: [
      'Founded Marrakech as capital in 1062',
      'United fragmented North African states',
      'Created largest empire of his era',
      'Established Quranic schools',
      'Reformed Islamic practices'
    ],
    heritageConnections: ['Koutoubia Mosque', 'Marrakech Medina', 'Almoravid Architecture'],
    regions: ['marrakech-safi', 'rabat-sale']
  },
  {
    id: 'fatima-al-fihri',
    name: 'Fatima al-Fihri',
    nameAr: 'فاطمة الفهري',
    nameAmz: 'ⴼⴰⵜⵉⵎⴰ ⵍ-ⴼⵉⵀⵔⵉ',
    era: 'Idrissid Dynasty',
    period: { start: 800, end: 880 },
    title: 'Scholar & Founder',
    titleAr: 'العالمة والمؤسسة',
    description: 'Visionary woman who founded Al-Qarawiyyin, one of the oldest continuous universities in the world, establishing the intellectual foundation of Islamic civilization',
    descriptionAr: 'مؤسسة جامعة القرويين، أقدم جامعة مستمرة في العالم، والتي أرست أساسا فكريا لحضارة إسلامية',
    achievements: [
      'Founded Al-Qarawiyyin University in 859',
      'Established women\'s education legacy',
      'Attracted scholars from across Islamic world',
      'Promoted knowledge preservation',
      'Influenced intellectual renaissance'
    ],
    heritageConnections: ['Al-Qarawiyyin University', 'Fès Medina', 'Islamic Libraries'],
    regions: ['fes-meknes']
  },
  {
    id: 'ibn-battuta',
    name: 'Ibn Battuta',
    nameAr: 'ابن بطوطة',
    nameAmz: 'ⵉⴱⵏ ⴱⴰⵜⵓⵜⴰ',
    era: 'Medieval',
    period: { start: 1304, end: 1369 },
    title: 'Explorer & Geographer',
    titleAr: 'المكتشف والجغرافي',
    description: 'Legendary Moroccan explorer who traveled over 44 years across Africa, Middle East, Asia and Europe, documenting cultures and becoming one of history\'s greatest travelers',
    descriptionAr: 'المسافر المغربي الأسطوري الذي طاف العالم الإسلامي وما وراءه وتركنا أعظم كتابات عن الرحلات',
    achievements: [
      'Traveled 75,000 miles across continents',
      'Visited 44 countries',
      'Documented unknown lands',
      'Authored "Rihla" travel guide',
      'Influenced geographical knowledge'
    ],
    heritageConnections: ['Travel Routes', 'Tangier Port', 'Trade Networks'],
    regions: ['tangier-tetouan', 'fes-meknes']
  },
  {
    id: 'moulay-ismail',
    name: 'Moulay Ismail',
    nameAr: 'مولاي إسماعيل',
    nameAmz: 'ⵎⵓⵍⴰⵢ ⵉⵙⵎⴰⴰⵏ',
    era: 'Alaouite Dynasty',
    period: { start: 1645, end: 1727 },
    title: 'Sultan & Warrior',
    titleAr: 'السلطان والمحارب',
    description: 'Powerful Alaouite Sultan who ruled for 55 years, consolidating the dynasty, expelling colonial powers, and establishing Meknès as the imperial capital',
    descriptionAr: 'السلطان العلوي القوي الذي حكم 55 سنة وأسس الدولة العلوية وجعل مكناس عاصمة إمبراطورية',
    achievements: [
      'Unified Moroccan kingdoms',
      'Built Meknès as new capital',
      'Created 25,000-man standing army',
      'Expelled European colonies',
      'Established lasting dynasty'
    ],
    heritageConnections: ['Meknès Imperial City', 'Palaces', 'Military Architecture'],
    regions: ['fes-meknes', 'rabat-sale']
  },
  {
    id: 'saadian-dynasty',
    name: 'Saadian Sultans',
    nameAr: 'السعديون',
    nameAmz: 'ⴰⵙⴳⴰⴰⵏ',
    era: 'Saadian Dynasty',
    period: { start: 1509, end: 1659 },
    title: 'Dynasty & Builders',
    titleAr: 'السلالة والبنّاءون',
    description: 'Mighty dynasty that resisted Ottoman expansion, built Marrakech\'s golden age, created legendary palaces and gardens, and established Moroccan independence',
    descriptionAr: 'السلالة التي قاومت التوسع العثماني وأنشأت الحضارة الذهبية لمراكش والقصور الأسطورية',
    achievements: [
      'Defeated Portuguese invaders',
      'Built El Badi Palace',
      'Created Bahia Palace',
      'Golden age of Moroccan culture',
      'Established independence'
    ],
    heritageConnections: ['El Badi Palace', 'Bahia Palace', 'Saadian Tombs', 'Marrakech Medina'],
    regions: ['marrakech-safi', 'rabat-sale']
  },
  {
    id: 'tarik-ibn-ziyad',
    name: 'Tarik ibn Ziyad',
    nameAr: 'طارق بن زياد',
    nameAmz: 'ⵜⴰⵔⵉⵇ ⴼⵏ ⵣⵎⴰ',
    era: 'Early Islamic',
    period: { start: 670, end: 720 },
    title: 'General & Conqueror',
    titleAr: 'القائد والفاتح',
    description: 'Berber general who led the Islamic conquest of the Iberian Peninsula, establishing Islamic civilization in Spain and creating lasting cultural heritage',
    descriptionAr: 'القائد الأمازيغي الذي قاد الفتح الإسلامي للأندلس وأسس حضارة إسلامية مزدهرة',
    achievements: [
      'Conquered Spain in 711',
      'United Mediterranean cultures',
      'Spread Islamic knowledge',
      'Gibraltar named after him',
      '700+ years of Islamic Spain'
    ],
    heritageConnections: ['Gibraltar Strait', 'Al-Andalus Legacy', 'Islamic Spain'],
    regions: ['tangier-tetouan']
  },
  {
    id: 'zineb-al-istihlali',
    name: 'Zineb al-Istihlali',
    nameAr: 'زينب الإستهلالية',
    nameAmz: 'ⵣⵉⵏⴻⴱ',
    era: 'Modern',
    period: { start: 1820, end: 1904 },
    title: 'Poet & Mystic',
    titleAr: 'الشاعرة والصوفية',
    description: 'Celebrated Moroccan poet and Sufi mystic who wrote profound spiritual poetry bridging Islamic and Amazigh traditions, influencing cultural renaissance',
    descriptionAr: 'الشاعرة والصوفية المغربية التي كتبت الشعر الروحاني الدقيق وأثرت في النهضة الثقافية',
    achievements: [
      'Wrote spiritual poetry',
      'Bridged Islamic and Berber traditions',
      'Founded Sufi circle',
      'Influenced literary renaissance',
      'Preserved oral traditions'
    ],
    heritageConnections: ['Sufi Heritage', 'Poetry', 'Spiritual Practices'],
    regions: ['marrakech-safi', 'souss-massa']
  },
  {
    id: 'imam-belloni',
    name: 'Imam Belloni (Sidi Bellal)',
    nameAr: 'الإمام بللوني',
    nameAmz: 'ⵉⵎⴰⵎ ⴱⵍⵍⴰ',
    era: 'Medieval-Modern',
    period: { start: 1200, end: 1400 },
    title: 'Scholar & Saint',
    titleAr: 'العالم والولي',
    description: 'Venerated Islamic scholar and saint who established centers of learning throughout Morocco, connecting Amazigh and Arab-Islamic scholarly traditions',
    descriptionAr: 'العالم الإسلامي المقدس الذي أسس مراكز التعليم وربط بين التقاليد الأمازيغية والإسلامية',
    achievements: [
      'Established learning centers',
      'Connected scholarly traditions',
      'Venerated as saint',
      'Preserved Islamic knowledge',
      'Founded spiritual schools'
    ],
    heritageConnections: ['Zaouias', 'Islamic Schools', 'Spiritual Centers'],
    regions: ['fes-meknes', 'marrakech-safi']
  }
];

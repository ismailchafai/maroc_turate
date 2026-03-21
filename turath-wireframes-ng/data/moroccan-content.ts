// Enriched Moroccan Cultural Content
// This file contains comprehensive information about Moroccan heritage, traditions, and cultural elements

export interface CulturalProverb {
  amazigh: string;
  arabic: string;
  english: string;
  meaning: string;
  author?: string;
}

export const AMAZIGH_PROVERBS: CulturalProverb[] = [
  {
    amazigh: 'ⴰⴼⴳⴰⵏ ⴰⴷ ⵎⴻⵙⵓⵙ',
    arabic: 'النخل يعطي ما فيه',
    english: 'The palm gives what it contains',
    meaning: 'Each person gives what they have within them'
  },
  {
    amazigh: 'ⴰⵔⴳⵓⵣ ⵓⴷ ⵎⴰⵢⴰⴳⴱ',
    arabic: 'الصديق ميزان النفس',
    english: 'A friend is the balance of the soul',
    meaning: 'True friendship balances and stabilizes life'
  },
  {
    amazigh: 'ⴰⴷ ⵛⵉⴳⴷ ⴰⵅⵍⵉⴳ ⵓⴷ ⴰⵎⵏⵓⴽⴰⵍ',
    arabic: 'الصبر مفتاح الفرج',
    english: 'Patience is the key to relief',
    meaning: 'Endurance leads to salvation and success'
  },
  {
    amazigh: 'ⵜⴰⵡⴰⵏⵜ ⴰⴷ ⵎⴰⴱⴱⴰⵢ',
    arabic: 'الحياة امتحان',
    english: 'Life is a test',
    meaning: 'Life presents challenges to strengthen the spirit'
  }
];

export interface MoroccanTradition {
  name: string;
  nameAr: string;
  nameAmz: string;
  category: 'celebration' | 'ceremony' | 'food' | 'craft' | 'music';
  description: string;
  region: string;
  season?: string;
  significance: string;
  practices: string[];
}

export const MOROCCAN_TRADITIONS: MoroccanTradition[] = [
  {
    name: 'Moussem Festivals',
    nameAr: 'موسم',
    nameAmz: 'ⵓⵎⵓⵙⴻⵎ',
    category: 'celebration',
    description: 'Seasonal pilgrimage festivals that celebrate saints, harvest, and cultural heritage with music, dance, and gathering of entire communities',
    region: 'Across all regions',
    season: 'Various seasons',
    significance: 'Sacred gathering that strengthens community bonds and spiritual connection',
    practices: ['Communal gathering', 'Traditional music', 'Feasting', 'Spiritual prayers', 'Cultural performances']
  },
  {
    name: 'Berber Wedding Ceremony',
    nameAr: 'حفل الزفاف الأمازيغي',
    nameAmz: 'ⵜⵉⴳⴼⴰ',
    category: 'ceremony',
    description: 'Multi-day celebration featuring traditional dress, music, henna application, and communal feasting that honors ancient Amazigh traditions',
    region: 'Atlas Mountains, Souss-Massa',
    season: 'Spring, Summer',
    significance: 'Union of families and preservation of cultural traditions through generations',
    practices: ['Henna nights', 'Traditional music and dance', 'Communal cooking', 'Ritual celebrations', 'Handmade crafts']
  },
  {
    name: 'Tagine Preparation',
    nameAr: 'إعداد الطاجين',
    nameAmz: 'ⵜⴰⴓⵎⵓⴷⴰ',
    category: 'food',
    description: 'Traditional slow-cooked stew method using the iconic conical cooking vessel, passing recipes through generations and teaching culinary traditions',
    region: 'Across all regions',
    season: 'All seasons',
    significance: 'Family gathering, cultural expression, and transmission of knowledge',
    practices: ['Ingredient selection', 'Slow cooking method', 'Family teaching', 'Communal eating', 'Flavor balancing']
  },
  {
    name: 'Zellige Artistry',
    nameAr: 'فن الزليج',
    nameAmz: 'ⴰⴷⴼⴰⴼⵓⵎ',
    category: 'craft',
    description: 'Ancient geometric tile art requiring years of apprenticeship, geometric precision, and cultural understanding to create traditional patterns',
    region: 'Fez, Meknès, Marrakech',
    season: 'Year-round',
    significance: 'Preservation of Islamic art traditions and geometric mathematical concepts',
    practices: ['Hand-cutting tiles', 'Pattern design', 'Color harmony', 'Traditional assembly', 'Apprenticeship training']
  },
  {
    name: 'Tanjawat Music',
    nameAr: 'موسيقى تنجاوات',
    nameAmz: 'ⴰⴷⵔⴰ ⵏ ⵜⴰⵏⵊⴰⵡⴰ',
    category: 'music',
    description: 'Traditional string instrument music from Tangier region with poetic lyrics expressing love, loss, and social commentary',
    region: 'Tangier-Tetouan',
    season: 'All seasons',
    significance: 'Oral history preservation and emotional expression through traditional music',
    practices: ['String playing', 'Poetic composition', 'Call and response', 'Group performance', 'Musical storytelling']
  },
  {
    name: 'Hammam Ritual',
    nameAr: 'طقوس الحمام',
    nameAmz: 'ⴰⵣⴰⴼⴻⵟ',
    category: 'ceremony',
    description: 'Traditional public bathing ceremony with social significance, combining cleansing with community bonding and conversation',
    region: 'All regions',
    season: 'All seasons',
    significance: 'Social bonding, health maintenance, and community gathering space',
    practices: ['Communal bathing', 'Social gathering', 'Herbal treatments', 'Massage traditions', 'Conversation and stories']
  }
];

export interface DialectPhrase {
  darija: string;
  tifinagh: string;
  english: string;
  usage: string;
}

export const MOROCCAN_PHRASES: DialectPhrase[] = [
  {
    darija: 'السلام عليكم ورحمة الله وبركاته',
    tifinagh: 'ⴰⵙⴰⵏ ⵓⴷⴼⴰⵙ',
    english: 'Peace be upon you',
    usage: 'Traditional greeting - formal and respectful'
  },
  {
    darija: 'بسم الله',
    tifinagh: 'ⴰⵜ ⵏ ⵓⵍⵍⴰⵀ',
    english: 'In the name of God',
    usage: 'Said before beginning any task or eating'
  },
  {
    darija: 'الحمد لله',
    tifinagh: 'ⵜⵉⴽⴱⵉⴻⵍⵜ',
    english: 'Praise be to God',
    usage: 'Gratitude expression and response to inquiry'
  },
  {
    darija: 'ورد الله عليك',
    tifinagh: 'ⴰⴽⵉⴷ',
    english: 'May God bless you',
    usage: 'Blessing and encouragement'
  },
  {
    darija: 'صباح الخير',
    tifinagh: 'ⴰⵙⵢ ⴷ ⵓⵎⵓⵣⴳⵓ',
    english: 'Good morning',
    usage: 'Morning greeting'
  },
  {
    darija: 'شنوا الأخبار',
    tifinagh: 'ⴰⵏⴰⵅ ⵓⴷⴼⴰⵙ',
    english: 'What is the news?',
    usage: 'Casual greeting, asking how someone is'
  }
];

export interface CulturalSymbol {
  name: string;
  nameAr: string;
  nameAmz: string;
  symbolAr: string;
  symbolAmz: string;
  meaning: string;
  usage: string;
  regions: string[];
}

export const MOROCCAN_SYMBOLS: CulturalSymbol[] = [
  {
    name: 'Azar (Tifinagh Letter A)',
    nameAr: 'حرف ا',
    nameAmz: 'ⴰⵣⴰⵔ',
    symbolAr: 'أ',
    symbolAmz: 'ⴰ',
    meaning: 'Foundation, beginning, unity',
    usage: 'Written in documents, decorated in art, carved in doors',
    regions: ['All regions']
  },
  {
    name: 'Amulet (Tamezrart)',
    nameAr: 'التعويذة',
    nameAmz: 'ⵜⴰⵎⴻⵣⵔⴰⵔⵜ',
    symbolAr: '✤',
    symbolAmz: '✦',
    meaning: 'Protection, blessing, spiritual defense',
    usage: 'Worn as jewelry, hung in homes, embroidered on clothing',
    regions: ['All regions']
  },
  {
    name: 'Hand of Fatima',
    nameAr: 'خمسة',
    nameAmz: 'ⴱⵍⵓⴼⵢⴰ',
    symbolAr: '☚',
    symbolAmz: '✋',
    meaning: 'Divine protection, five pillars, good fortune',
    usage: 'Door decorations, amulets, jewelry, wall art',
    regions: ['All regions']
  },
  {
    name: 'Star Pattern (Khamsa)',
    nameAr: 'نجمة خماسية',
    nameAmz: 'ⴰⵔⴳⴰⵓⴱ',
    symbolAr: '✪',
    symbolAmz: '✭',
    meaning: 'Five-fold blessings, Islamic geometry, protection',
    usage: 'Zellige tilework, carpet patterns, architectural design',
    regions: ['Fès-Meknès', 'Marrakech-Safi']
  }
];

export interface HeritageRecipe {
  name: string;
  nameAr: string;
  region: string;
  ingredients: string[];
  cookingMethod: string;
  culturalSignificance: string;
  servingTime: string;
}

export const MOROCCAN_RECIPES: HeritageRecipe[] = [
  {
    name: 'Chicken Tagine with Preserved Lemons',
    nameAr: 'طاجين الدجاج بالليمون المحفوظ',
    region: 'Marrakech-Safi',
    ingredients: ['Chicken', 'Preserved lemon', 'Olives', 'Onions', 'Ginger', 'Turmeric', 'Cilantro', 'Argan oil'],
    cookingMethod: 'Slow-cooked in traditional tagine vessel over charcoal',
    culturalSignificance: 'Represents Moroccan culinary mastery, preservation techniques, and flavor balance',
    servingTime: 'Special occasions, family gatherings'
  },
  {
    name: 'Beef Tagine with Prunes',
    nameAr: 'طاجين اللحم بالتمر',
    region: 'Fès-Meknès',
    ingredients: ['Beef', 'Prunes', 'Honey', 'Almonds', 'Onions', 'Cinnamon', 'Cumin', 'Ghee'],
    cookingMethod: 'Slow-cooked with sweet and savory balance',
    culturalSignificance: 'Sweet and savory combination reflects Islamic culinary traditions',
    servingTime: 'Festive celebrations, Eid holidays'
  },
  {
    name: 'Harira (Ramadan Soup)',
    nameAr: 'حريرة رمضان',
    region: 'All regions',
    ingredients: ['Lentils', 'Chickpeas', 'Tomatoes', 'Spices', 'Meat', 'Flour', 'Coriander', 'Ginger'],
    cookingMethod: 'Simmered for hours to develop deep flavors',
    culturalSignificance: 'Essential for breaking Ramadan fast, energy-giving and warming',
    servingTime: 'Every evening during Ramadan month'
  },
  {
    name: 'Couscous with Seven Vegetables',
    nameAr: 'الكسكس بسبعة خضار',
    region: 'All regions',
    ingredients: ['Couscous', 'Chickpeas', 'Carrots', 'Zucchini', 'Turnips', 'Pumpkin', 'Cabbage', 'Meat broth'],
    cookingMethod: 'Steamed couscous, vegetables slowly braised',
    culturalSignificance: 'Friday family meal, unity symbol, ancient grain tradition',
    servingTime: 'Friday lunch gatherings'
  }
];

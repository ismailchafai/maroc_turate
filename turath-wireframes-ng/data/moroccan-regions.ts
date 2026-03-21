// Moroccan Administrative Regions with Heritage Sites
export interface MoroccanRegion {
  id: string;
  name: string;
  nameAr: string;
  nameAmz: string;
  color: string;
  svg: { x: number; y: number };
  majorCities: string[];
  heritageCount: number;
  description: string;
  historicalFigures: string[];
  crafts: string[];
}

export const MOROCCAN_REGIONS: MoroccanRegion[] = [
  {
    id: 'tangier-tetouan',
    name: 'Tangier-Tetouan-Al Hoceïma',
    nameAr: 'طنجة تطوان الحسيمة',
    nameAmz: 'ⵜⴰⵏⵊⴰ-ⵜⴰⵎⴷⴰⵍⵜ',
    color: '#2A52BE', // Majorelle Blue
    svg: { x: 18, y: 12 },
    majorCities: ['Tangier', 'Tetouan', 'Al Hoceïma'],
    heritageCount: 8,
    description: 'Northern gateway blending Arab, Berber, and European influences',
    historicalFigures: ['Ibn Battuta'],
    crafts: ['Traditional Carpet Weaving', 'Leather Work', 'Metalcraft']
  },
  {
    id: 'fes-meknes',
    name: 'Fès-Meknès',
    nameAr: 'فاس مكناس',
    nameAmz: 'ⴼⵉⵙ-ⵎⴽⵏⴰⵙ',
    color: '#C1272D', // Moroccan Red
    svg: { x: 32, y: 24 },
    majorCities: ['Fès', 'Meknès', 'Ifrane'],
    heritageCount: 12,
    description: 'Spiritual and imperial heartland with ancient medinas',
    historicalFigures: ['Fatima al-Fihri', 'Moulay Ismail'],
    crafts: ['Leather Tanning', 'Zellige Tilework', 'Moroccan Rugs', 'Brass Work']
  },
  {
    id: 'oriental',
    name: 'Oriental',
    nameAr: 'الشرقية',
    nameAmz: 'ⴰⵀⴱⵓ ⴽⵓⵙⴱⴰ',
    color: '#E07A5F', // Terracotta
    svg: { x: 48, y: 18 },
    majorCities: ['Oujda', 'Berkane', 'Nador'],
    heritageCount: 6,
    description: 'Eastern Berber traditions and Saharan connections',
    historicalFigures: [],
    crafts: ['Berber Weaving', 'Pottery']
  },
  {
    id: 'rabat-sale',
    name: 'Rabat-Salé-Kenitra',
    nameAr: 'الرباط سلا القنيطرة',
    nameAmz: 'ⴰⵔⴱⴰⵜ',
    color: '#006233', // Moroccan Green
    svg: { x: 22, y: 32 },
    majorCities: ['Rabat', 'Salé', 'Kenitra'],
    heritageCount: 7,
    description: 'Capital city with royal heritage and modern culture',
    historicalFigures: ['Youssef ben Tachfine'],
    crafts: ['Carpets', 'Leather', 'Textiles']
  },
  {
    id: 'casablanca-settat',
    name: 'Casablanca-Settat',
    nameAr: 'الدار البيضاء سطات',
    nameAmz: 'ⴰⴷⴰⵔⴰⵢ',
    color: '#DAA520', // Gold
    svg: { x: 24, y: 42 },
    majorCities: ['Casablanca', 'Settat', 'El Jadida'],
    heritageCount: 9,
    description: 'Modern economic hub with preserved historic quarters',
    historicalFigures: [],
    crafts: ['Maritime Crafts', 'Textile Industries']
  },
  {
    id: 'beni-mellal-khenifra',
    name: 'Beni Mellal-Khénifra',
    nameAr: 'بني ملال خنيفرة',
    nameAmz: 'ⴱⵏⵉ-ⵎⵍⵍⴰⵍ',
    color: '#B87333', // Copper
    svg: { x: 38, y: 38 },
    majorCities: ['Beni Mellal', 'Khénifra', 'Azilal'],
    heritageCount: 5,
    description: 'Middle Atlas mountain heartland',
    historicalFigures: [],
    crafts: ['Cedar Wood Crafts', 'Mountain Weaving']
  },
  {
    id: 'marrakech-safi',
    name: 'Marrakech-Safi',
    nameAr: 'مراكش آسفي',
    nameAmz: 'ⵎⴰⵔⴰⴽⵓⵛ',
    color: '#E07A5F', // Earth Orange
    svg: { x: 28, y: 54 },
    majorCities: ['Marrakech', 'Safi', 'Essaouira'],
    heritageCount: 14,
    description: 'Red city with Saadian dynasty heritage',
    historicalFigures: ['Saadian Sultans'],
    crafts: ['Argan Oil', 'Berber Carpets', 'Cedar Chests', 'Metalwork']
  },
  {
    id: 'draa-tafilalet',
    name: 'Drâa-Tafilalet',
    nameAr: 'درعة تافيلالت',
    nameAmz: 'ⴷⵕⴰⴰ',
    color: '#A0522D', // Sienna/Desert
    svg: { x: 44, y: 62 },
    majorCities: ['Errachidia', 'Midelt', 'Tinghir'],
    heritageCount: 8,
    description: 'Saharan desert gateway with oasis settlements',
    historicalFigures: [],
    crafts: ['Date Palms', 'Desert Weaving', 'Taznakht Carpets']
  },
  {
    id: 'souss-massa',
    name: 'Souss-Massa',
    nameAr: 'سوس ماسة',
    nameAmz: 'ⵙⵓⵡⵙ',
    color: '#4B0082', // Indigo/Amazigh Purple
    svg: { x: 20, y: 68 },
    majorCities: ['Agadir', 'Inezgane', 'Biougra'],
    heritageCount: 7,
    description: 'Southern Amazigh heartland with Atlantic coast',
    historicalFigures: [],
    crafts: ['Argan Oil', 'Berber Pottery', 'Woven Baskets', 'Fish Preservation']
  },
  {
    id: 'guelmim-oued-noun',
    name: 'Guelmim-Oued Noun',
    nameAr: 'كلميم واد نون',
    nameAmz: 'ⴳⵓⴻⵍⵎⵉⵎ',
    color: '#CC7722', // Ochre
    svg: { x: 14, y: 80 },
    majorCities: ['Guelmim', 'Tan-Tan', 'Assa'],
    heritageCount: 4,
    description: 'Saharan trade routes and nomadic heritage',
    historicalFigures: [],
    crafts: ['Nomadic Textiles', 'Desert Crafts']
  },
  {
    id: 'laayoune-sakia-hamra',
    name: 'Laâyoune-Sakia El Hamra',
    nameAr: 'العيون ساقية الحمراء',
    nameAmz: 'ⴻⵍ-ⵄⵢⵓⵏ',
    color: '#8B4513', // Saddle Brown
    svg: { x: 22, y: 90 },
    majorCities: ['Laâyoune', 'Smara', 'Boujdour'],
    heritageCount: 3,
    description: 'Far south with Saharan oasis traditions',
    historicalFigures: [],
    crafts: ['Saharan Crafts']
  },
  {
    id: 'dakhla-oued-dahab',
    name: 'Dakhla-Oued Dahab',
    nameAr: 'الداخلة واد الذهب',
    nameAmz: 'ⴷⴰⴽⵏⴰ',
    color: '#556B2F', // Olive
    svg: { x: 18, y: 98 },
    majorCities: ['Dakhla', 'Oued Dahab'],
    heritageCount: 2,
    description: 'Southernmost region with coastal heritage',
    historicalFigures: [],
    crafts: ['Fishing Traditions', 'Coastal Crafts']
  }
];

// Amazigh Months (Original Calendar System)
export const AMAZIGH_MONTHS = [
  { amz: 'ⵉⵏⴰⵢⵔ', ar: 'يناير', en: 'January', num: 1 },
  { amz: 'ⴱⵕⴰⵢ', ar: 'فبراير', en: 'February', num: 2 },
  { amz: 'ⵎⴰⵔⵙ', ar: 'مارس', en: 'March', num: 3 },
  { amz: 'ⵉⴱⵔⵉⵔ', ar: 'أبريل', en: 'April', num: 4 },
  { amz: 'ⵎⴰⵢⵢⵓ', ar: 'مايو', en: 'May', num: 5 },
  { amz: 'ⵢⵓⵏⵢⵓ', ar: 'يونيو', en: 'June', num: 6 },
  { amz: 'ⵢⵓⵍⵢⵓ', ar: 'يوليو', en: 'July', num: 7 },
  { amz: 'ⴰⴳⵓⵙⵜ', ar: 'أغسطس', en: 'August', num: 8 },
  { amz: 'ⵙⵓⵜⴰⵏⵒⵐ', ar: 'سبتمبر', en: 'September', num: 9 },
  { amz: 'ⴽⵜⵓⴱⵔ', ar: 'أكتوبر', en: 'October', num: 10 },
  { amz: 'ⵏⵓⵡⴰⵏⴱⵓ', ar: 'نوفمبر', en: 'November', num: 11 },
  { amz: 'ⴷⵓⵊⴰⵏⵒⵐ', ar: 'ديسمبر', en: 'December', num: 12 }
];

// Export all screens for easy access throughout the application

export { HomeMapScreen } from './home-map-screen';
export { OnboardingScreen } from './onboarding-screen';
export { RegionDetailScreen } from './region-detail-screen';
export { HeritageDetailScreen } from './heritage-detail-screen';
export { ArtisanProfileScreen } from './artisan-profile-screen';

// New enriched screens
export { HeritageExplorerScreen } from './heritage-explorer-screen';
export { HistoricalFiguresScreen } from './historical-figures-screen';
export { CulturalShowcaseScreen } from './cultural-showcase-screen';

// Screen type definitions
export type ScreenName = 
  | 'home-map'
  | 'onboarding'
  | 'region-detail'
  | 'heritage-detail'
  | 'artisan-profile'
  | 'heritage-explorer'
  | 'historical-figures'
  | 'cultural-showcase';

export const SCREEN_LABELS: Record<ScreenName, string> = {
  'home-map': 'Explore',
  'onboarding': 'Welcome',
  'region-detail': 'Region',
  'heritage-detail': 'Heritage',
  'artisan-profile': 'Artisan',
  'heritage-explorer': 'Heritage',
  'historical-figures': 'Legends',
  'cultural-showcase': 'Culture'
};

export const SCREEN_DESCRIPTIONS: Record<ScreenName, string> = {
  'home-map': 'Discover Morocco\'s heritage sites and artisans on an interactive map',
  'onboarding': 'Welcome to Turath - Explore Morocco\'s Living Heritage',
  'region-detail': 'Explore a specific Moroccan region and its cultural treasures',
  'heritage-detail': 'Learn about historical heritage sites and monuments',
  'artisan-profile': 'Meet the craftspeople preserving Moroccan traditions',
  'heritage-explorer': 'Interactive map and detailed information about all Moroccan regions and crafts',
  'historical-figures': 'Discover the legendary figures who shaped Moroccan civilization',
  'cultural-showcase': 'Explore living traditions, symbols, proverbs, recipes, and the Amazigh calendar'
};

# Integration Guide - Moroccan Cultural Platform

This guide shows you how to integrate the new Moroccan cultural enrichment components into your Turath application.

## 🚀 Quick Start

### 1. Import Screens
The easiest way to use the new enrichment is to import complete screen components:

```typescript
// pages/explore.tsx
import { HeritageExplorerScreen } from '@/components/turath/screens'

export default function ExplorePage() {
  return <HeritageExplorerScreen isDark={false} />
}
```

### 2. Available Screens

#### Heritage Explorer Screen
**Purpose**: Browse regions, crafts, and heritage sites on an interactive map

```typescript
import { HeritageExplorerScreen } from '@/components/turath/screens'

// Usage
<HeritageExplorerScreen isDark={false} />
```

**Features**:
- Interactive Morocco map
- Region statistics
- Traditional crafts showcase
- Heritage sites gallery
- Trilingual labels

**Props**:
- `isDark?: boolean` - Dark mode toggle

---

#### Historical Figures Screen
**Purpose**: Explore legendary Moroccan historical figures

```typescript
import { HistoricalFiguresScreen } from '@/components/turath/screens'

// Usage
<HistoricalFiguresScreen isDark={false} />
```

**Features**:
- Interactive carousel
- Detailed biographies
- Achievement lists
- Heritage connections
- Regional associations
- Figure grid selector

**Props**:
- `isDark?: boolean` - Dark mode toggle

---

#### Cultural Showcase Screen
**Purpose**: Dive into living traditions and cultural wisdom

```typescript
import { CulturalShowcaseScreen } from '@/components/turath/screens'

// Usage
<CulturalShowcaseScreen isDark={false} />
```

**Features**:
- Traditions showcase (6 items)
- Cultural symbols (4 items)
- Amazigh proverbs (4 items)
- Traditional recipes (4 items)
- Amazigh calendar (12 months)

**Props**:
- `isDark?: boolean` - Dark mode toggle

---

## 🎨 Using Components

### Interactive Map Component

```typescript
import { MoroccoMap } from '@/components/turath/morocco-map'
import { useState } from 'react'

export function MyMapComponent() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  return (
    <MoroccoMap 
      selectedRegion={selectedRegion}
      onRegionSelect={setSelectedRegion}
    />
  )
}
```

**Props**:
- `selectedRegion?: string` - Currently selected region ID
- `onRegionSelect?: (regionId: string) => void` - Selection callback
- `interactive?: boolean` - Enable/disable interaction

---

### Historical Figures Carousel

```typescript
import { HistoricalFiguresCarousel } from '@/components/turath/historical-figures-carousel'

export function FiguresSection() {
  return <HistoricalFiguresCarousel />
}
```

**Features**:
- Auto-playing carousel
- Manual navigation
- Animations
- Figure descriptions
- Achievements list

---

### Heritage Showcase

```typescript
import { HeritageShowcase } from '@/components/turath/heritage-showcase'

export function CraftsSection() {
  return (
    <HeritageShowcase 
      layout="grid"  // or "carousel"
      region="Marrakech-Safi"
    />
  )
}
```

**Props**:
- `layout?: 'grid' | 'carousel'` - Display layout
- `region?: string` - Filter by region
- `limit?: number` - Max items to display

---

### Amazigh Text Components

```typescript
import { 
  TrilingualText,
  LanguageBadge,
  AmazighSaying,
  CalendarMonth
} from '@/components/turath/amazigh-text'

// Trilingual text (English, Arabic, Tifinagh)
<TrilingualText 
  en="Traditional Craft"
  ar="الحرفة التقليدية"
  amz="ⴰⴷⴼⴰⴼⵓⵎ"
  size="lg"
  className="text-turath-red"
/>

// Language badge
<LanguageBadge language="amazigh" />

// Proverb display
<AmazighSaying 
  saying="ⴰⴼⴳⴰⵏ ⴰⴷ ⵎⴻⵙⵓⵙ"
  translation="The palm gives what it contains"
/>

// Calendar month
<CalendarMonth month={AMAZIGH_CALENDAR[0]} />
```

---

## 📊 Using Data

### Moroccan Regions

```typescript
import { MOROCCAN_REGIONS } from '@/data/moroccan-regions'

// Get all regions
MOROCCAN_REGIONS.forEach(region => {
  console.log(region.name, region.color, region.heritageCount)
})

// Find specific region
const fesRegion = MOROCCAN_REGIONS.find(r => r.id === 'fas-meknes')
console.log(fesRegion.description)
console.log(fesRegion.crafts)  // Traditional crafts
console.log(fesRegion.historicalFigures)  // Associated figures
```

**Available Properties**:
- `id` - Region identifier
- `name` - English name
- `nameAr` - Arabic name
- `nameAmz` - Amazigh name
- `color` - Hex color code
- `description` - Region details
- `majorCities` - City list
- `crafts` - Traditional crafts
- `heritageCount` - Number of sites
- `historicalFigures` - Associated figures

---

### Historical Figures

```typescript
import { HISTORICAL_FIGURES } from '@/data/historical-figures'

// Get all figures
HISTORICAL_FIGURES.forEach(figure => {
  console.log(figure.name, figure.period)
})

// Access figure details
const figure = HISTORICAL_FIGURES[0]
console.log(figure.achievements)
console.log(figure.heritageConnections)
console.log(figure.regions)  // Associated regions
```

**Available Properties**:
- `id` - Unique identifier
- `name` - English name
- `nameAr` - Arabic name
- `title` - Official title
- `titleAr` - Arabic title
- `period` - { start, end } years
- `era` - Historical era name
- `description` - Full biography
- `descriptionAr` - Arabic version
- `achievements` - List of achievements
- `heritageConnections` - Cultural connections
- `regions` - Associated region IDs

---

### Cultural Content

```typescript
import {
  MOROCCAN_TRADITIONS,
  MOROCCAN_SYMBOLS,
  AMAZIGH_PROVERBS,
  MOROCCAN_RECIPES,
  MOROCCAN_PHRASES,
  AMAZIGH_CALENDAR
} from '@/data/moroccan-content'

// Access traditions
MOROCCAN_TRADITIONS.forEach(tradition => {
  console.log(tradition.name, tradition.category)
  console.log(tradition.practices)
})

// Access symbols
MOROCCAN_SYMBOLS.forEach(symbol => {
  console.log(symbol.symbolAr, symbol.meaning)
})

// Access proverbs
AMAZIGH_PROVERBS.forEach(proverb => {
  console.log(proverb.amazigh, proverb.english)
})

// Access recipes
MOROCCAN_RECIPES.forEach(recipe => {
  console.log(recipe.name, recipe.ingredients)
})

// Access calendar
AMAZIGH_CALENDAR.forEach(month => {
  console.log(month.tifinagh, month.en, month.ar)
})
```

---

## 🎯 Common Patterns

### Pattern 1: Region-Specific Crafts List

```typescript
import { MOROCCAN_REGIONS } from '@/data/moroccan-regions'

function RegionCrafts({ regionId }: { regionId: string }) {
  const region = MOROCCAN_REGIONS.find(r => r.id === regionId)
  
  return (
    <div>
      <h2>{region?.name} Traditional Crafts</h2>
      <ul>
        {region?.crafts.map(craft => (
          <li key={craft}>{craft}</li>
        ))}
      </ul>
    </div>
  )
}
```

### Pattern 2: Figure Timeline

```typescript
import { HISTORICAL_FIGURES } from '@/data/historical-figures'

function Timeline() {
  const sorted = [...HISTORICAL_FIGURES].sort((a, b) => a.period.start - b.period.start)
  
  return (
    <div>
      {sorted.map(figure => (
        <div key={figure.id} className="timeline-item">
          <span>{figure.period.start} - {figure.period.end}</span>
          <h3>{figure.name}</h3>
        </div>
      ))}
    </div>
  )
}
```

### Pattern 3: Tradition Categories

```typescript
import { MOROCCAN_TRADITIONS } from '@/data/moroccan-content'

function TraditionsByCategory() {
  const categories = [...new Set(MOROCCAN_TRADITIONS.map(t => t.category))]
  
  return categories.map(category => (
    <div key={category}>
      <h3>{category}</h3>
      {MOROCCAN_TRADITIONS
        .filter(t => t.category === category)
        .map(t => <p key={t.name}>{t.name}</p>)}
    </div>
  ))
}
```

### Pattern 4: Multilingual Display

```typescript
import { TrilingualText } from '@/components/turath/amazigh-text'
import { MOROCCAN_REGIONS } from '@/data/moroccan-regions'

function RegionCard({ regionId }: { regionId: string }) {
  const region = MOROCCAN_REGIONS.find(r => r.id === regionId)!
  
  return (
    <div>
      <TrilingualText 
        en={region.name}
        ar={region.nameAr}
        amz={region.nameAmz}
      />
    </div>
  )
}
```

---

## 🎨 Styling Integration

### Using Moroccan Background Classes

```tsx
// In your components
<div className="bg-zellige-red">Red geometric pattern</div>
<div className="bg-moroccan-dark">Dark authentic theme</div>
<div className="bg-medina">Ancient cityscape</div>
<div className="bg-desert">Desert sand dunes</div>
<div className="bg-atlas">Mountain landscapes</div>
<div className="bg-argan">Nature green tones</div>
<div className="bg-amazigh-indigo">Traditional indigo</div>
```

### Using Custom Animations

```tsx
// In your components
<div className="animate-saffron-glow">Glowing effect</div>
<div className="animate-moroccan-pulse">Pulsing animation</div>
<div className="animate-zellige-cascade">Cascading tiles</div>
<div className="animate-tifinagh-float">Floating letters</div>
<div className="animate-arabesque-fade">Elegant fade</div>
<div className="animate-desert-shift">Desert movement</div>
<div className="animate-majestic-scale">Scaling animation</div>
```

### Using Color Variables

```tsx
// Colors are available as Tailwind classes
<div className="text-turath-red">Red text</div>
<div className="bg-turath-saffron">Saffron background</div>
<div className="border-turath-green">Green border</div>
<div className="from-turath-red to-turath-saffron">Gradient</div>
```

---

## 🔧 Customization

### Custom Region Map

```typescript
interface CustomRegion {
  id: string
  name: string
  nameAr: string
  nameAmz: string
  color: string
  // ... other properties
}

function CustomMoroccoMap({ regions }: { regions: CustomRegion[] }) {
  return (
    // Use modified region data
    <MoroccoMap />
  )
}
```

### Custom Figure Display

```typescript
function CustomFigureCard({ figure, variant = 'full' }) {
  return (
    <div className={`card-${variant}`}>
      {variant === 'full' && (
        <>
          <h2>{figure.name}</h2>
          <p>{figure.description}</p>
          <ul>{figure.achievements.map(a => <li key={a}>{a}</li>)}</ul>
        </>
      )}
      {variant === 'compact' && (
        <>
          <h3>{figure.name}</h3>
          <p>{figure.period.start} - {figure.period.end}</p>
        </>
      )}
    </div>
  )
}
```

---

## 📱 Responsive Considerations

All components are fully responsive:
- **Mobile**: Single column, touch-optimized
- **Tablet**: Two-column layout
- **Desktop**: Three-column layout with full details

Use responsive classes in your layouts:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Your content */}
</div>
```

---

## ♿ Accessibility

All components include:
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast compliance
- ✅ Screen reader support
- ✅ RTL support for Arabic

Example:
```tsx
<button 
  aria-label="Select region"
  onKeyDown={handleKeyboard}
>
  Select
</button>
```

---

## 🐛 Troubleshooting

### Images not loading?
Ensure images are in the correct directory:
- Figures: `/public/figures/`
- Crafts: `/public/crafts/`
- Heritage: `/public/heritage/`

### RTL text not displaying?
Add `dir="rtl"` to the parent element:
```tsx
<div dir="rtl">
  <p>{arabicText}</p>
</div>
```

### Tifinagh text rendering?
Ensure you're using a Tifinagh-compatible font or web font in globals.css.

### Colors not applying?
Check that Tailwind CSS configuration includes the custom colors in `tailwind.config.ts`:
```typescript
theme: {
  colors: {
    'turath-red': '#C1272D',
    // ... other colors
  }
}
```

---

## 📚 Additional Resources

- **Design System**: See `MOROCCAN_AMAZIGH_REDESIGN.md`
- **Complete Features**: See `MOROCCAN_ENRICHMENT_COMPLETE.md`
- **Project Summary**: See `ENRICHMENT_SUMMARY.md`

---

## 🎓 Learning Path

1. **Start**: Import and display a complete screen
2. **Explore**: Examine the data structures
3. **Customize**: Use components with your own data
4. **Extend**: Build new features using provided components

---

Happy exploring! 🇲🇦

For questions or issues, refer to the inline code documentation in each component.

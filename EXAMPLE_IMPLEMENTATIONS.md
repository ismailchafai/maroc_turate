# Example Implementations - Moroccan Cultural Platform

This file shows you how to use the new enriched Moroccan cultural components in various real-world scenarios.

## 🎬 Complete Page Examples

### Example 1: Heritage Exploration Landing Page

```typescript
// pages/heritage.tsx
'use client'

import { HeritageExplorerScreen } from '@/components/turath/screens'

export default function HeritagePage() {
  return (
    <div className="h-screen bg-gradient-to-br from-turath-parchment to-turath-cream">
      <HeritageExplorerScreen isDark={false} />
    </div>
  )
}
```

**Features**:
- Interactive map selection
- Region statistics
- Heritage site database
- Craft showcase

---

### Example 2: Historical Timeline Page

```typescript
// pages/history.tsx
'use client'

import { HistoricalFiguresScreen } from '@/components/turath/screens'

export default function HistoryPage() {
  return (
    <div className="h-screen bg-atlas">
      <HistoricalFiguresScreen isDark={true} />
    </div>
  )
}
```

**Features**:
- Interactive carousel
- Detailed biographies
- Timeline visualization
- Regional connections

---

### Example 3: Cultural Traditions Page

```typescript
// pages/culture.tsx
'use client'

import { CulturalShowcaseScreen } from '@/components/turath/screens'

export default function CulturePage() {
  return (
    <div className="h-screen bg-gradient-to-br from-turath-silk to-turath-cream">
      <CulturalShowcaseScreen isDark={false} />
    </div>
  )
}
```

**Features**:
- Living traditions
- Cultural symbols
- Proverbs & wisdom
- Traditional recipes
- Amazigh calendar

---

## 🏛️ Component Examples

### Example 4: Dashboard with Regional Stats

```typescript
// components/regional-dashboard.tsx
'use client'

import { MOROCCAN_REGIONS } from '@/data/moroccan-regions'
import { TrilingualText } from '@/components/turath/amazigh-text'

export function RegionalDashboard() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-turath-red">Moroccan Regions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOROCCAN_REGIONS.map(region => (
          <div 
            key={region.id}
            className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25"
            style={{ borderLeftColor: region.color, borderLeftWidth: '4px' }}
          >
            <TrilingualText 
              en={region.name}
              ar={region.nameAr}
              amz={region.nameAmz}
              size="lg"
              className="font-bold text-turath-red"
            />
            
            <p className="text-sm text-foreground/70 mt-2">{region.description}</p>
            
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div>
                <p className="text-2xl font-bold text-turath-saffron">
                  {region.heritageCount}
                </p>
                <p className="text-xs text-muted-foreground">Heritage</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-turath-red">
                  {region.majorCities.length}
                </p>
                <p className="text-xs text-muted-foreground">Cities</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-turath-green">
                  {region.crafts.length}
                </p>
                <p className="text-xs text-muted-foreground">Crafts</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

### Example 5: Historical Figure Timeline

```typescript
// components/figure-timeline.tsx
'use client'

import { HISTORICAL_FIGURES } from '@/data/historical-figures'
import { TrilingualText } from '@/components/turath/amazigh-text'

export function FigureTimeline() {
  const sortedFigures = [...HISTORICAL_FIGURES].sort((a, b) => a.period.start - b.period.start)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-turath-red mb-8">Historical Timeline</h2>
      
      <div className="space-y-6">
        {sortedFigures.map((figure, idx) => (
          <div key={figure.id} className="flex gap-4">
            {/* Timeline marker */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-turath-saffron" />
              {idx !== sortedFigures.length - 1 && (
                <div className="w-1 h-16 bg-turath-saffron/30" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <div className="text-sm font-semibold text-turath-red">
                {figure.period.start} - {figure.period.end} CE
              </div>
              <h3 className="text-lg font-bold text-foreground mt-1">
                {figure.name}
              </h3>
              <TrilingualText 
                en=""
                ar={figure.nameAr}
                amz={figure.nameAmz}
                size="sm"
                className="mt-1"
              />
              <p className="text-sm text-foreground/70 mt-2">{figure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

### Example 6: Craft Gallery

```typescript
// components/craft-gallery.tsx
'use client'

import { MOROCCAN_REGIONS } from '@/data/moroccan-regions'

export function CraftGallery({ region }: { region?: string }) {
  let allCrafts: string[] = []
  
  if (region) {
    const selectedRegion = MOROCCAN_REGIONS.find(r => r.id === region)
    allCrafts = selectedRegion?.crafts || []
  } else {
    allCrafts = Array.from(
      new Set(MOROCCAN_REGIONS.flatMap(r => r.crafts))
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-turath-red mb-6">
        {region ? `${MOROCCAN_REGIONS.find(r => r.id === region)?.name} Crafts` : 'All Traditional Crafts'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allCrafts.map((craft, idx) => (
          <div
            key={craft}
            className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 hover:shadow-lg transition-all cursor-pointer group"
            style={{ animation: `slide-in-right 0.4s ease-out ${idx * 100}ms both` }}
          >
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-lg font-bold text-turath-red">{craft}</h3>
            <p className="text-sm text-foreground/70 mt-2">
              Traditional Moroccan craft with centuries of heritage
            </p>
            <button className="text-turath-red text-sm font-semibold mt-4 group-hover:underline">
              Learn more →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

### Example 7: Recipe Showcase

```typescript
// components/recipe-showcase.tsx
'use client'

import { MOROCCAN_RECIPES } from '@/data/moroccan-content'
import { TrilingualText } from '@/components/turath/amazigh-text'

export function RecipeShowcase() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-turath-red mb-6">Traditional Moroccan Recipes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOROCCAN_RECIPES.map((recipe, idx) => (
          <div
            key={recipe.name}
            className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25"
            style={{ animation: `slide-in-right 0.4s ease-out ${idx * 100}ms both` }}
          >
            <h3 className="text-lg font-bold text-turath-red">{recipe.name}</h3>
            <p className="text-sm text-foreground/70 font-serif mt-2" dir="rtl">
              {recipe.nameAr}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-turath-saffron/10 rounded">
                <p className="text-xs font-semibold text-turath-saffron">Region</p>
                <p className="text-sm text-foreground/80">{recipe.region}</p>
              </div>
              <div className="p-3 bg-turath-earth/10 rounded">
                <p className="text-xs font-semibold text-turath-earth">Served For</p>
                <p className="text-sm text-foreground/80">{recipe.servingTime}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-turath-red mb-2">Key Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {recipe.ingredients.map((ing, iIdx) => (
                  <span 
                    key={iIdx}
                    className="text-xs px-2 py-1 bg-turath-earth/20 rounded"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

### Example 8: Amazigh Calendar Widget

```typescript
// components/amazigh-calendar-widget.tsx
'use client'

import { AMAZIGH_CALENDAR } from '@/components/turath/amazigh-text'

export function AmazighCalendarWidget() {
  const today = new Date()
  const currentMonth = today.getMonth()

  return (
    <div className="p-6 bg-gradient-to-br from-turath-indigo/10 to-turath-saffron/10 rounded-2xl border border-turath-indigo/25">
      <h3 className="text-lg font-bold text-turath-indigo mb-6">Amazigh Calendar</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {AMAZIGH_CALENDAR.map((month, idx) => (
          <div
            key={month.num}
            className={`p-3 rounded-lg text-center cursor-pointer transition-all ${
              idx === currentMonth
                ? 'bg-turath-indigo/30 border-2 border-turath-indigo font-bold'
                : 'bg-turath-indigo/10 border border-turath-indigo/20 hover:bg-turath-indigo/20'
            }`}
          >
            <div className="text-2xl font-sans font-bold text-turath-indigo mb-1">
              {month.tifinagh}
            </div>
            <p className="text-xs text-foreground/70">{month.en}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-turath-indigo/10 rounded-lg border-l-4 border-turath-indigo">
        <p className="text-xs font-semibold text-turath-indigo mb-2">Current Amazigh Month</p>
        <p className="text-sm text-foreground/80">
          {AMAZIGH_CALENDAR[currentMonth].en} ({AMAZIGH_CALENDAR[currentMonth].ar})
        </p>
      </div>
    </div>
  )
}
```

---

## 📱 Mobile-Optimized Examples

### Example 9: Mobile Heritage Explorer

```typescript
// components/mobile-heritage-explorer.tsx
'use client'

import { useState } from 'react'
import { MoroccoMap } from '@/components/turath/morocco-map'
import { MOROCCAN_REGIONS } from '@/data/moroccan-regions'

export function MobileHeritageExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const currentRegion = selectedRegion 
    ? MOROCCAN_REGIONS.find(r => r.id === selectedRegion)
    : null

  return (
    <div className="h-screen flex flex-col">
      {/* Map Section */}
      <div className="flex-1 min-h-64 md:min-h-96">
        <MoroccoMap 
          selectedRegion={selectedRegion}
          onRegionSelect={setSelectedRegion}
        />
      </div>

      {/* Region Details - Mobile Bottom Sheet */}
      <div className="flex-1 overflow-y-auto bg-white border-t border-turath-saffron/20 p-4">
        {currentRegion ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-turath-red">{currentRegion.name}</h2>
            <p className="text-sm text-foreground/70">{currentRegion.description}</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-turath-red mb-2">Cities</p>
                <div className="flex flex-wrap gap-2">
                  {currentRegion.majorCities.map(city => (
                    <span key={city} className="text-xs px-3 py-1 bg-turath-saffron/20 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-xs font-semibold text-turath-red mb-2">Crafts</p>
                <div className="flex flex-wrap gap-2">
                  {currentRegion.crafts.map(craft => (
                    <span key={craft} className="text-xs px-3 py-1 bg-turath-green/20 rounded-full">
                      {craft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <p className="text-sm">Tap a region on the map to explore</p>
          </div>
        )}
      </div>
    </div>
  )
}
```

---

## 🔍 Advanced Examples

### Example 10: Search and Filter

```typescript
// components/cultural-search.tsx
'use client'

import { useState, useMemo } from 'react'
import { HISTORICAL_FIGURES } from '@/data/historical-figures'
import { MOROCCAN_TRADITIONS } from '@/data/moroccan-content'
import { SearchIcon } from 'lucide-react'

export function CulturalSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.toLowerCase()
    
    const figures = HISTORICAL_FIGURES.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.description.toLowerCase().includes(q)
    )
    
    const traditions = MOROCCAN_TRADITIONS.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
    )
    
    return { figures, traditions }
  }, [query])

  return (
    <div className="p-6 space-y-6">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-turath-red" />
        <input
          type="text"
          placeholder="Search figures, traditions, crafts..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-turath-saffron/25 rounded-lg bg-white focus:outline-none focus:border-turath-red"
        />
      </div>

      {query && (
        <div className="space-y-6">
          {results.figures.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-turath-red mb-3">Historical Figures</h3>
              <div className="space-y-2">
                {results.figures.map(figure => (
                  <div key={figure.id} className="p-4 bg-turath-red/5 rounded-lg border border-turath-red/20">
                    <p className="font-semibold text-turath-red">{figure.name}</p>
                    <p className="text-sm text-foreground/70">{figure.period.start} - {figure.period.end}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.traditions.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-turath-green mb-3">Traditions</h3>
              <div className="space-y-2">
                {results.traditions.map(tradition => (
                  <div key={tradition.name} className="p-4 bg-turath-green/5 rounded-lg border border-turath-green/20">
                    <p className="font-semibold text-turath-green">{tradition.name}</p>
                    <p className="text-sm text-foreground/70">{tradition.category}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.figures.length === 0 && results.traditions.length === 0 && (
            <div className="text-center text-muted-foreground">
              <p>No results found for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
```

---

### Example 11: Favorites System

```typescript
// components/favorites-manager.tsx
'use client'

import { useState } from 'react'
import { Heart, HeartOff } from 'lucide-react'
import { HISTORICAL_FIGURES } from '@/data/historical-figures'

export function FavoritesManager() {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id]
    )
  }

  const favoriteFigures = HISTORICAL_FIGURES.filter(f => favorites.includes(f.id))

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-turath-red">My Favorites</h2>

      <div className="space-y-3">
        {HISTORICAL_FIGURES.map(figure => (
          <div
            key={figure.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-turath-saffron/20 hover:shadow-md transition-shadow"
          >
            <div>
              <p className="font-semibold text-turath-red">{figure.name}</p>
              <p className="text-sm text-foreground/70">{figure.era}</p>
            </div>
            <button
              onClick={() => toggleFavorite(figure.id)}
              className="p-2 hover:bg-turath-red/10 rounded-lg transition-colors"
            >
              {favorites.includes(figure.id) ? (
                <Heart className="w-5 h-5 fill-turath-red text-turath-red" />
              ) : (
                <HeartOff className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-turath-saffron/20">
        <p className="text-sm text-muted-foreground mb-3">
          {favorites.length} / {HISTORICAL_FIGURES.length} favorited
        </p>
        <div className="w-full bg-turath-saffron/20 rounded-full h-2">
          <div
            className="bg-turath-saffron h-2 rounded-full transition-all"
            style={{ width: `${(favorites.length / HISTORICAL_FIGURES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
```

---

## 🎓 Educational Examples

### Example 12: Learning Module

```typescript
// components/learning-module.tsx
'use client'

import { useState } from 'react'
import { MOROCCAN_TRADITIONS, AMAZIGH_PROVERBS } from '@/data/moroccan-content'

export function LearningModule() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completed, setCompleted] = useState<string[]>([])

  const lesson = MOROCCAN_TRADITIONS[currentIndex]
  const isCompleted = completed.includes(lesson.name)

  const handleComplete = () => {
    if (!isCompleted) {
      setCompleted([...completed, lesson.name])
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="bg-turath-saffron/10 rounded-lg p-4">
        <p className="text-sm text-turath-saffron font-semibold">
          Progress: {completed.length} / {MOROCCAN_TRADITIONS.length} lessons
        </p>
        <div className="w-full bg-turath-saffron/20 rounded-full h-3 mt-2">
          <div
            className="bg-turath-saffron h-3 rounded-full transition-all"
            style={{ width: `${(completed.length / MOROCCAN_TRADITIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25">
        <span className="px-3 py-1 bg-turath-saffron/20 text-turath-saffron text-xs rounded-full font-semibold">
          {lesson.category}
        </span>
        
        <h2 className="text-2xl font-bold text-turath-red mt-4">{lesson.name}</h2>
        <p className="text-foreground/80 mt-3">{lesson.description}</p>

        <div className="mt-6 space-y-3">
          <h3 className="font-semibold text-turath-red">Key Practices:</h3>
          <ul className="space-y-2">
            {lesson.practices.map((practice, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-turath-saffron" />
                {practice}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleComplete}
          className={`mt-6 w-full py-2 px-4 rounded-lg font-semibold transition-all ${
            isCompleted
              ? 'bg-turath-green text-white'
              : 'bg-turath-red text-white hover:shadow-lg'
          }`}
        >
          {isCompleted ? '✓ Completed' : 'Mark as Complete'}
        </button>
      </div>

      <div className="flex gap-3 justify-between">
        <button
          onClick={() => setCurrentIndex(prev => (prev === 0 ? MOROCCAN_TRADITIONS.length - 1 : prev - 1))}
          className="px-4 py-2 border border-turath-saffron/25 rounded-lg text-turath-red font-semibold hover:bg-turath-saffron/10"
        >
          ← Previous
        </button>
        <button
          onClick={() => setCurrentIndex(prev => (prev === MOROCCAN_TRADITIONS.length - 1 ? 0 : prev + 1))}
          className="px-4 py-2 border border-turath-saffron/25 rounded-lg text-turath-red font-semibold hover:bg-turath-saffron/10"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
```

---

## 🎉 Summary

These examples show how to:
- ✅ Use complete screen components
- ✅ Build custom component combinations
- ✅ Access and filter data
- ✅ Create interactive features
- ✅ Build mobile-optimized layouts
- ✅ Implement search functionality
- ✅ Create educational modules

Mix and match these patterns to build unique experiences for your Moroccan cultural platform!

For more details on available components and data, see `INTEGRATION_GUIDE.md`.

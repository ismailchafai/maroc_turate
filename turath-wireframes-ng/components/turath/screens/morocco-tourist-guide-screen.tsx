'use client'

import { useState } from 'react'
import { MapIcon, MapPinIcon, ChevronLeftIcon, ChevronRightIcon, StarIcon, CameraIcon, DollarSignIcon, MapIcon as MapGuideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TouristSite {
  id: string
  name: string
  nameAr: string
  nameAmz: string
  region: string
  category: 'heritage' | 'nature' | 'culture' | 'food' | 'adventure'
  description: string
  image: string
  x: number
  y: number
  rating: number
  bestTime: string
  icon: string
}

const TOURIST_SITES: TouristSite[] = [
  {
    id: 'fez-medina',
    name: 'Fez Medina',
    nameAr: 'مدينة فاس العتيقة',
    nameAmz: 'ⵜⴰⵎⴰⵣⵉⵔⵜ ⴼⴰⵏ',
    region: 'Fez',
    category: 'heritage',
    description: 'Ancient medina with historic souks and Al-Qarawiyyin University',
    image: 'https://images.unsplash.com/photo-1608215225917-5666dcfe1f6d?w=400',
    x: 48,
    y: 32,
    rating: 4.8,
    bestTime: 'Oct-May',
    icon: '🕌'
  },
  {
    id: 'marrakech-plaza',
    name: 'Jemaa el-Fnaa',
    nameAr: 'جامع الفناء',
    nameAmz: 'ⵢⴰⴳⴼⴱⴰⴳ ⴰⵎⴰⵔⴰⴽⵛ',
    region: 'Marrakech',
    category: 'culture',
    description: 'Vibrant square with street performers, food stalls, and storytellers',
    image: 'https://images.unsplash.com/photo-1615895149024-c74a55f1f4db?w=400',
    x: 42,
    y: 62,
    rating: 4.7,
    bestTime: 'Nov-Apr',
    icon: '🎭'
  },
  {
    id: 'chefchaouen-blue',
    name: 'Chefchaouen',
    nameAr: 'شفشاون',
    nameAmz: 'ⴰⵙⵏⴰⵔⵉ',
    region: 'Chefchaouen',
    category: 'nature',
    description: 'Blue-painted mountain town with stunning photography opportunities',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
    x: 38,
    y: 25,
    rating: 4.9,
    bestTime: 'May-Oct',
    icon: '🏔️'
  },
  {
    id: 'essaouira-coast',
    name: 'Essaouira',
    nameAr: 'الصويرة',
    nameAmz: 'ⴷⴰⵖ ⴳⵓⴽⴼ',
    region: 'Essaouira',
    category: 'food',
    description: 'Coastal city famous for fresh seafood and artistic culture',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    x: 28,
    y: 58,
    rating: 4.6,
    bestTime: 'Jun-Sep',
    icon: '🐟'
  },
  {
    id: 'merzouga-sahara',
    name: 'Merzouga Sahara',
    nameAr: 'مرزوقة - الصحراء',
    nameAmz: 'ⴰⵛⴰⵣⵛⴰⵡ',
    region: 'Merzouga',
    category: 'adventure',
    description: 'Golden dunes and camel trekking in the heart of the Sahara',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    x: 65,
    y: 65,
    rating: 4.8,
    bestTime: 'Oct-May',
    icon: '🐪'
  },
  {
    id: 'ait-benhaddou',
    name: 'Aït Benhaddou',
    nameAr: 'آيت بن حدو',
    nameAmz: 'ⵓⵣⴰⵎⴼ',
    region: 'Atlas',
    category: 'heritage',
    description: 'UNESCO fortified village (kasbah) with earthen buildings',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    x: 58,
    y: 70,
    rating: 4.7,
    bestTime: 'Oct-May',
    icon: '🏰'
  },
  {
    id: 'atlas-mountains',
    name: 'Atlas Mountains',
    nameAr: 'جبال الأطلس',
    nameAmz: 'ⵉⴷⴰⵔⴰⵔ',
    region: 'Atlas',
    category: 'nature',
    description: 'Stunning mountain trekking with Berber village visits',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    x: 52,
    y: 55,
    rating: 4.9,
    bestTime: 'Jun-Sep',
    icon: '⛰️'
  },
  {
    id: 'meknes-imperial',
    name: 'Meknès Imperial City',
    nameAr: 'مكناس مولاي إسماعيل',
    nameAmz: 'ⴼⴰⵟⵉⴼⴰ',
    region: 'Meknès',
    category: 'heritage',
    description: 'Former imperial capital with stunning gates and royal palaces',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    x: 52,
    y: 36,
    rating: 4.6,
    bestTime: 'Oct-May',
    icon: '👑'
  }
]

const CATEGORY_COLORS: Record<string, string> = {
  heritage: 'from-turath-red to-turath-earth',
  nature: 'from-turath-green to-emerald-600',
  culture: 'from-turath-saffron to-amber-600',
  food: 'from-orange-500 to-orange-600',
  adventure: 'from-purple-600 to-indigo-600'
}

const CATEGORY_ICONS: Record<string, string> = {
  heritage: '🕌',
  nature: '🏔️',
  culture: '🎭',
  food: '🍲',
  adventure: '🧗'
}

export default function MoroccoTouristGuideScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSite, setSelectedSite] = useState<TouristSite | null>(null)

  const filteredSites = selectedCategory === 'all' 
    ? TOURIST_SITES 
    : TOURIST_SITES.filter(site => site.category === selectedCategory)

  return (
    <div className="h-full flex flex-col relative bg-gradient-to-b from-slate-900 via-amber-950/30 to-slate-900">
      {/* Moroccan background patterns */}
      <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] amazigh-tribal pointer-events-none" />
      
      {/* Header with Amazigh branding */}
      <div className="relative z-10 px-5 pt-6 pb-5 border-b-2 border-turath-saffron/40 glass-moroccan shadow-lg bg-gradient-to-r from-slate-900/60 to-transparent">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2.5xl font-bold text-turath-saffron">🗺️</span>
          <h1 className="text-3.5xl font-bold font-serif text-turath-red">Tourist Guide</h1>
        </div>
        
        <div className="flex items-center gap-2 text-sm mb-4 text-muted-foreground">
          <span className="text-turath-saffron font-bold tracking-wider">ⴰⵎⴰⴰⴼⴰⵢ</span>
          <span className="text-turath-red/60">|</span>
          <span>Discover Morocco's Top Destinations</span>
        </div>

        {/* Category filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('all')}
            className={cn(
              'px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border-1.5 backdrop-blur-sm',
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-turath-red to-turath-earth text-white shadow-md ring-1 ring-turath-red/30'
                : 'bg-turath-saffron/20 text-turath-red hover:bg-turath-saffron/35 border-turath-saffron/40'
            )}
          >
            All Sites
          </button>
          {['heritage', 'nature', 'culture', 'food', 'adventure'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border-1.5 backdrop-blur-sm capitalize',
                selectedCategory === cat
                  ? `bg-gradient-to-r ${CATEGORY_COLORS[cat]} text-white shadow-md ring-1 ring-white/20`
                  : 'bg-turath-saffron/20 text-turath-red hover:bg-turath-saffron/35 border-turath-saffron/40'
              )}
            >
              {CATEGORY_ICONS[cat]} {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Map area */}
        <div className="relative h-96 bg-gradient-to-br from-turath-parchment via-amber-50 to-turath-silk border-b-2 border-turath-saffron/30 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
          
          {/* Morocco map SVG */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 4px 8px rgba(193,39,45,0.1))' }}>
            <defs>
              <linearGradient id="moroccoGradMap" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#F5EFE6', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#E8DCC8', stopOpacity: 0.9 }} />
              </linearGradient>
              <filter id="mapShadow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Morocco outline */}
            <path 
              d="M15 15 L35 10 L60 15 L75 20 L85 35 L88 55 L85 75 L72 85 L48 92 L25 88 L15 75 L8 55 L12 35 Z" 
              fill="url(#moroccoGradMap)" 
              stroke="#DAA520" 
              strokeWidth="1.5" 
              opacity="0.95"
              filter="url(#mapShadow)"
            />
            
            {/* Regional divisions */}
            <g stroke="#C1272D" strokeWidth="0.6" opacity="0.3" fill="none">
              <path d="M40 25 L50 35" />
              <path d="M25 35 L45 50" />
              <path d="M50 50 L70 60" />
            </g>
          </svg>

          {/* Tourist site pins on map */}
          {filteredSites.map((site, idx) => (
            <button
              key={site.id}
              onClick={() => setSelectedSite(site)}
              style={{ left: `${site.x}%`, top: `${site.y}%` }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
              title={site.name}
            >
              <div className="absolute w-8 h-8 rounded-full bg-turath-red/30 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
              <button className={cn(
                "relative w-10 h-10 rounded-full flex items-center justify-center transform transition-all hover:scale-125 active:scale-95 shadow-lg border-2 border-white",
                `bg-gradient-to-br ${CATEGORY_COLORS[site.category]}`
              )}>
                <span className="text-lg">{site.icon}</span>
              </button>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/95 text-white rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-turath-saffron/40">
                <div className="text-turath-saffron">{site.name}</div>
                <div className="text-[10px] text-turath-saffron/80">{site.nameAmz}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tourist sites listing */}
        <div className="p-5 space-y-4">
          {filteredSites.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              No sites in this category
            </div>
          ) : (
            filteredSites.map((site, idx) => (
              <button
                key={site.id}
                onClick={() => setSelectedSite(site)}
                className="w-full flex gap-4 p-4 bg-white/85 backdrop-blur-md rounded-2xl border-1.5 border-turath-saffron/25 hover:border-turath-saffron/50 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br flex-shrink-0 overflow-hidden shadow-md border-2 border-turath-saffron/20">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${site.image})` }} />
                </div>
                
                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-sm text-foreground">{site.name}</h3>
                      <p className="text-xs text-turath-saffron font-semibold">{site.nameAmz}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-lg">
                      <StarIcon className="w-3 h-3 text-amber-600 fill-amber-600" />
                      <span className="text-xs font-bold text-amber-900">{site.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{site.description}</p>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CameraIcon className="w-3 h-3" />
                      {site.region}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" />
                      {site.bestTime}
                    </span>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Bottom detail view */}
      {selectedSite && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-end z-50">
          <div className="w-full bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700 rounded-t-3xl p-6 shadow-2xl border-t-2 border-turath-saffron/40 animate-in slide-in-from-bottom-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedSite.name}</h2>
                <p className="text-turath-saffron font-semibold">{selectedSite.nameAr}</p>
              </div>
              <button onClick={() => setSelectedSite(null)} className="text-white/60 hover:text-white">✕</button>
            </div>
            
            <p className="text-white/80 text-sm mb-4">{selectedSite.description}</p>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10">
                <StarIcon className="w-4 h-4 mx-auto text-amber-400 fill-amber-400 mb-1" />
                <p className="text-white font-bold text-sm">{selectedSite.rating}</p>
                <p className="text-white/60 text-xs">Rating</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10">
                <CameraIcon className="w-4 h-4 mx-auto text-turath-saffron mb-1" />
                <p className="text-white font-bold text-sm">{selectedSite.region}</p>
                <p className="text-white/60 text-xs">Region</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10">
                <MapPinIcon className="w-4 h-4 mx-auto text-turath-red mb-1" />
                <p className="text-white font-bold text-sm">{selectedSite.bestTime}</p>
                <p className="text-white/60 text-xs">Best Time</p>
              </div>
            </div>
            
            <button className="w-full py-3 bg-gradient-to-r from-turath-red to-turath-earth text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">
              Get More Details
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

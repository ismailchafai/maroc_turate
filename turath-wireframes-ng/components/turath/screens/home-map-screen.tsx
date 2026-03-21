"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FILTER_CHIPS } from '@/lib/turath-types'
import { SearchIcon, MicIcon, MapPinIcon, ChevronRightIcon } from '../icons'
import { BottomNavigation } from '../bottom-navigation'
import { useNavigation } from '../navigation-provider'

const MAP_PINS = [
  { id: 'fez', name: 'Fez', x: 55, y: 35, type: 'heritage' as const },
  { id: 'marrakech', name: 'Marrakech', x: 45, y: 55, type: 'artisan' as const },
  { id: 'chefchaouen', name: 'Chefchaouen', x: 50, y: 28, type: 'heritage' as const },
  { id: 'essaouira', name: 'Essaouira', x: 30, y: 52, type: 'food' as const },
  { id: 'atlas', name: 'Atlas Mountains', x: 55, y: 60, type: 'itinerary' as const },
  { id: 'tangier', name: 'Tangier', x: 48, y: 18, type: 'heritage' as const },
]

const NEARBY_HIGHLIGHTS = [
  { id: '1', name: 'Al Quaraouiyine', category: 'Heritage', distance: '2.3 km', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400' },
  { id: '2', name: 'Chouara Tannery', category: 'Artisan', distance: '1.8 km', image: 'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=400' },
  { id: '3', name: 'Bab Boujloud', category: 'Heritage', distance: '3.1 km', image: 'https://images.unsplash.com/photo-1553899017-9279a3e1c0c9?w=400' },
  { id: '4', name: 'Dar Batha', category: 'Museum', distance: '2.5 km', image: 'https://images.unsplash.com/photo-1548018560-c7196548e84d?w=400' },
]

interface HomeMapScreenProps {
  isDark?: boolean
}

export function HomeMapScreen({ isDark }: HomeMapScreenProps) {
  void isDark
  const { navigate } = useNavigation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [bottomSheetExpanded, setBottomSheetExpanded] = useState(false)

  const getPinColor = (type: 'heritage' | 'artisan' | 'food' | 'itinerary') => {
    switch (type) {
      case 'heritage': return 'bg-[#C1272D] text-white ring-2 ring-[#C1272D]/20'
      case 'artisan': return 'bg-[#F4C430] text-[#1A1A1A] ring-2 ring-[#F4C430]/20'
      case 'food': return 'bg-[#006233] text-white ring-2 ring-[#006233]/20'
      case 'itinerary': return 'bg-[#2A52BE] text-white ring-2 ring-[#2A52BE]/20'
    }
  }

  return (
    <div className="h-full flex flex-col relative">
      {/* Premium search bar */}
      <div className="absolute top-12 left-4 right-4 z-30 majestic-scale">
        <div className="glass-premium rounded-2xl overflow-hidden">
          <div className="absolute inset-0 zellige-ornate opacity-5 pointer-events-none" />
          <div className="flex items-center gap-3 px-5 py-3.5 relative z-10">
            <SearchIcon className="w-5 h-5 text-turath-red" />
            <input 
              type="text" 
              placeholder="Search places, crafts, artisans..." 
              className="flex-1 bg-transparent text-sm font-sans text-foreground placeholder:text-muted-foreground outline-none" 
            />
            <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-turath-majorelle to-turath-majorelle-dark text-white flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all active:scale-95">
              <MicIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter chips */}
      <div className="absolute top-28 left-0 right-0 z-20 px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all",
                activeFilter === chip.id
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "glass border border-border/50 text-foreground hover:bg-accent/10"
              )}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Premium map area with cultural elements */}
      <div className="flex-1 relative bg-gradient-to-br from-turath-parchment via-turath-silk to-turath-parchment overflow-hidden">
        {/* Layered cultural patterns */}
        <div className="absolute inset-0 opacity-[0.08] zellige-ornate pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] amazigh-tribal pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] arabesque-ornate pointer-events-none" />
        
        {/* Enhanced map SVG with premium styling */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 12px 24px rgba(193,39,45,0.08))' }}>
          {/* Morocco outline with gradient */}
          <defs>
            <linearGradient id="moroccoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F5EFE6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F0EADE', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="mapGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path 
            d="M10 20 L30 10 L50 12 L70 18 L85 30 L90 50 L85 70 L70 85 L50 90 L30 88 L15 75 L8 55 L10 35 Z" 
            fill="url(#moroccoGrad)" 
            stroke="#DAA520" 
            strokeWidth="1.2" 
            opacity="0.95"
            filter="url(#mapGlow)"
          />
          
          {/* Desert regions with warm colors */}
          <path 
            d="M25 35 Q35 30 45 35 Q55 30 65 40 Q70 50 65 60 Q55 70 45 68 Q35 70 28 60 Q22 50 25 35 Z" 
            fill="none" 
            stroke="#E07A5F" 
            strokeWidth="0.8" 
            strokeDasharray="2,2" 
            opacity="0.5"
          />
          
          {/* Mountain ranges with depth */}
          <g stroke="#B87333" strokeWidth="0.6" fill="none" opacity="0.4">
            <path d="M30 40 L32 35 L34 40"/>
            <path d="M55 45 L57 38 L59 45"/>
            <path d="M72 50 L74 42 L76 50"/>
          </g>
        </svg>

        {MAP_PINS.map((pin, idx) => (
          <div key={pin.id} style={{ left: `${pin.x}%`, top: `${pin.y}%` }} className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Pulse ring effect */}
            <div className={cn("absolute w-10 h-10 rounded-full transform -translate-x-1/2 -translate-y-1/2", 
              pin.type === 'heritage' ? 'moroccan-pulse' : 
              pin.type === 'artisan' ? 'gold-pulse' : 
              'saffron-glow'
            )} />
            
            {/* Premium pin button */}
            <button
              onClick={() => navigate('region-detail')}
              className={cn(
                "relative w-10 h-10 rounded-full flex items-center justify-center transform transition-all hover:scale-125 z-10 active:scale-95 shadow-xl border-2",
                getPinColor(pin.type)
              )}
              style={{ 
                animation: `zellige-cascade 0.8s ease-out ${idx * 0.1}s both`
              }}
              aria-label={pin.name}
              title={pin.name}
            >
              <MapPinIcon className="w-5 h-5" />
            </button>
          </div>
        ))}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full bg-accent/20 animate-pulse" style={{ left: '40%', top: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
      </div>

      {/* Premium bottom sheet with cultural styling */}
      <div className={cn("absolute bottom-20 left-0 right-0 glass-premium rounded-t-4xl shadow-2xl transition-all duration-300 z-20 overflow-hidden", bottomSheetExpanded ? "h-[60%]" : "h-[220px]")}>
        {/* Zellige border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-turath-red via-turath-saffron to-turath-green opacity-60" />
        
        <button onClick={() => setBottomSheetExpanded(!bottomSheetExpanded)} className="w-full flex justify-center py-4" aria-label={bottomSheetExpanded ? "Collapse" : "Expand"}>
          <div className="w-12 h-1.5 bg-turath-saffron/40 rounded-full hover:bg-turath-saffron/60 transition-colors" />
        </button>
        
        <div className="px-5 pb-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-foreground font-serif">Nearby Highlights</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Explore cultural treasures</p>
            </div>
            <button onClick={() => navigate('region-detail')} className="text-sm text-turath-red font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Explore all <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {NEARBY_HIGHLIGHTS.map((place, idx) => (
              <button
                key={place.id}
                onClick={() => navigate('region-detail')}
                className="flex-shrink-0 w-44 rounded-2xl overflow-hidden glass-moroccan border border-turath-saffron/20 shadow-md hover:shadow-lg hover:border-turath-saffron/40 transition-all active:scale-95"
                style={{ animation: `slide-in-right 0.4s ease-out ${idx * 0.1}s both` }}
              >
                <div className="relative h-28 overflow-hidden bg-gradient-to-br from-turath-earth to-turath-desert">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${place.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-turath-red/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-white">
                    {place.distance}
                  </div>
                </div>
                <div className="p-3 bg-background/50 backdrop-blur-sm">
                  <h4 className="font-bold text-sm text-foreground truncate">{place.name}</h4>
                  <p className="text-xs text-turath-saffron font-medium mt-0.5">{place.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

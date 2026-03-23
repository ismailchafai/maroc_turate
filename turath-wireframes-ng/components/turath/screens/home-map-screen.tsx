"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FILTER_CHIPS } from '@/lib/turath-types'
import { SearchIcon, MicIcon, MapPinIcon, ChevronRightIcon } from '../icons'
import { BottomNavigation } from '../bottom-navigation'
import { useNavigation } from '../navigation-provider'

const MAP_PINS = [
  // Northern Heritage Sites
  { id: 'tangier', name: 'Tangier', x: 25, y: 18, type: 'heritage' as const, historical: 'ⴹⴰⵔⵉⴽ ⵉⴱⵏ ⵣⵓⵎⴰ' },
  { id: 'tetouan', name: 'Tetouan', x: 32, y: 22, type: 'heritage' as const, historical: 'ⵡⴻⴷ ⵎⴰⵢⵓⵍⴰⵢ' },
  { id: 'chefchaouen', name: 'Chefchaouen', x: 38, y: 25, type: 'heritage' as const, historical: 'ⵎⵓⴱⴰⵔⴰⴽ' },
  
  // Central Heritage - Imperial Cities
  { id: 'fez', name: 'Fez (Al-Qarawiyyin)', x: 48, y: 32, type: 'heritage' as const, historical: 'ⴼⴰⵜⵉⵎⴰ ⴼⵍ-ⴼⵉⵀⵔⵉ' },
  { id: 'meknes', name: 'Meknès', x: 52, y: 36, type: 'heritage' as const, historical: 'ⵎⵓⴻⵍⴰⵢ ⵉⵙⵎⴰⴰⴼⵏ' },
  { id: 'ifrane', name: 'Ifrane', x: 55, y: 40, type: 'artisan' as const, historical: 'ⵢⴰⵏⵓⵍⵀ' },
  
  // Western Heritage - Coastal
  { id: 'rabat', name: 'Rabat (Capital)', x: 35, y: 42, type: 'heritage' as const, historical: 'ⵔⴱⴰⵟ' },
  { id: 'casablanca', name: 'Casablanca', x: 38, y: 48, type: 'food' as const, historical: 'ⴷⴰⵔ ⴰⴱⵉⴼⴰⴳ' },
  { id: 'essaouira', name: 'Essaouira', x: 28, y: 58, type: 'food' as const, historical: 'ⴷⴰⵖ ⴳⵓⴽⴼ' },
  
  // Southern Heritage - Saadian Dynasties
  { id: 'marrakech', name: 'Marrakech (Saadian)', x: 42, y: 62, type: 'artisan' as const, historical: 'ⵙⴰⴷⵉⴰⵏ' },
  { id: 'atlas', name: 'Atlas Mountains', x: 52, y: 55, type: 'itinerary' as const, historical: 'ⵉⴷⴰⵔⴰⵔ' },
  
  // Saharan Heritage
  { id: 'merzouga', name: 'Merzouga', x: 65, y: 65, type: 'itinerary' as const, historical: 'ⵛⴰⵔⴰ' },
  { id: 'ait-benhaddou', name: 'Aït Benhaddou', x: 58, y: 70, type: 'heritage' as const, historical: 'ⴼⴶ' },
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
    <div className="h-full flex flex-col relative bg-gradient-to-b from-slate-900 via-medina to-slate-800">
      {/* Moroccan cultural background layer */}
      <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] arabesque-ornate pointer-events-none" />
      
      {/* Premium search bar */}
      <div className="absolute top-11 left-3 right-3 z-30 majestic-scale">
        <div className="glass-moroccan rounded-2xl overflow-hidden border border-turath-saffron/40 shadow-lg">
          <div className="flex items-center gap-3.5 px-4.5 py-3.5 relative z-10">
            <SearchIcon className="w-5.5 h-5.5 text-turath-red flex-shrink-0" />
            <input 
              type="text" 
              placeholder="ابحث عن..." 
              className="flex-1 bg-transparent text-sm font-sans text-foreground placeholder:text-muted-foreground outline-none" 
            />
            <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-turath-red to-turath-earth text-white flex items-center justify-center hover:shadow-lg hover:scale-[1.05] transition-all active:scale-95 flex-shrink-0">
              <MicIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter chips */}
      <div className="absolute top-24 left-0 right-0 z-20 px-3">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              className={cn(
                "px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border-1.5 backdrop-blur-sm",
                activeFilter === chip.id
                  ? "bg-turath-saffron text-turath-charcoal border-turath-saffron/60 shadow-md ring-1 ring-turath-saffron/30"
                  : "glass-moroccan border-turath-saffron/30 text-foreground hover:bg-turath-saffron/20 hover:border-turath-saffron/50 hover:shadow-sm"
              )}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map area with Moroccan theme */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Enhanced Moroccan patterns - more visible on dark background */}
        <div className="absolute inset-0 opacity-[0.15] zellige-pattern pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] amazigh-tribal pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] arabesque-ornate pointer-events-none" />
        
        {/* Enhanced map SVG with detailed regions and cultural styling */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 12px 24px rgba(193,39,45,0.15))' }}>
          {/* Morocco outline with gradient */}
          <defs>
            <linearGradient id="moroccoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F5EFE6', stopOpacity: 0.98 }} />
              <stop offset="50%" style={{ stopColor: '#F0EADE', stopOpacity: 0.96 }} />
              <stop offset="100%" style={{ stopColor: '#E8DCC8', stopOpacity: 0.95 }} />
            </linearGradient>
            <radialGradient id="regionGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#DAA520', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#DAA520', stopOpacity: 0 }} />
            </radialGradient>
            <filter id="mapGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="zelligeFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
            </filter>
          </defs>
          
          {/* Northern Region (Tangier-Tetouan - Majorelle Blue) */}
          <path 
            d="M15 15 L35 10 L42 18 L40 25 L28 28 Z" 
            fill="#2A52BE" 
            opacity="0.35"
            stroke="#DAA520"
            strokeWidth="0.8"
          />
          
          {/* Central North (Fès-Meknès - Red) */}
          <path 
            d="M40 20 L60 15 L68 25 L65 35 L50 38 Z" 
            fill="#C1272D" 
            opacity="0.35"
            stroke="#DAA520"
            strokeWidth="0.8"
          />
          
          {/* Atlantic West (Rabat-Casablanca - Green) */}
          <path 
            d="M25 30 L38 32 L40 48 L32 52 L20 45 Z" 
            fill="#006233" 
            opacity="0.35"
            stroke="#DAA520"
            strokeWidth="0.8"
          />
          
          {/* Central (Atlas Mountains area - Brown/Copper) */}
          <path 
            d="M45 35 L65 30 L70 55 L55 60 L48 50 Z" 
            fill="#B87333" 
            opacity="0.35"
            stroke="#DAA520"
            strokeWidth="0.8"
          />
          
          {/* Southern (Marrakech-Safi - Orange) */}
          <path 
            d="M28 50 L50 48 L58 65 L40 72 L25 62 Z" 
            fill="#E07A5F" 
            opacity="0.35"
            stroke="#DAA520"
            strokeWidth="0.8"
          />
          
          {/* Saharan East (Drâa-Tafilalet - Sienna) */}
          <path 
            d="M55 55 L75 50 L82 75 L65 82 L52 68 Z" 
            fill="#A0522D" 
            opacity="0.35"
            stroke="#DAA520"
            strokeWidth="0.8"
          />
          
          {/* Southern Amazigh (Souss-Massa - Purple) */}
          <path 
            d="M20 62 L42 60 L48 78 L28 85 L15 75 Z" 
            fill="#4B0082" 
            opacity="0.35"
            stroke="#DAA520"
            strokeWidth="0.8"
          />
          
          {/* Morocco main outline with gold */}
          <path 
            d="M15 15 L35 10 L60 15 L75 20 L85 35 L88 55 L85 75 L72 85 L48 92 L25 88 L15 75 L8 55 L12 35 Z" 
            fill="none" 
            stroke="#DAA520" 
            strokeWidth="1.5" 
            opacity="0.9"
            filter="url(#mapGlow)"
          />
          
          {/* Atlas Mountains with depth */}
          <g stroke="#B87333" strokeWidth="0.8" fill="none" opacity="0.6">
            <path d="M45 38 L48 32 L51 38" />
            <path d="M55 42 L58 35 L61 42" />
            <path d="M68 48 L71 40 L74 48" />
            <path d="M50 52 L52 48 L54 52" />
          </g>
          
          {/* Sahara Desert indication with warmer colors */}
          <path 
            d="M65 65 Q70 70 75 68 Q78 75 75 82 Q68 82 62 78" 
            fill="none" 
            stroke="#CC7722" 
            strokeWidth="0.6" 
            strokeDasharray="3,2" 
            opacity="0.5"
          />
        </svg>

        {MAP_PINS.map((pin, idx) => (
          <div key={pin.id} style={{ left: `${pin.x}%`, top: `${pin.y}%` }} className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group">
            {/* Pulse ring effect */}
            <div className={cn("absolute w-10 h-10 rounded-full transform -translate-x-1/2 -translate-y-1/2", 
              pin.type === 'heritage' ? 'moroccan-pulse' : 
              pin.type === 'artisan' ? 'gold-pulse' : 
              'saffron-glow'
            )} />
            
            {/* Premium pin button with Amazigh cultural styling */}
            <button
              onClick={() => navigate('region-detail')}
              className={cn(
                "relative w-11 h-11 rounded-full flex items-center justify-center transform transition-all hover:scale-[1.2] z-10 active:scale-95 shadow-2xl border-2.5",
                getPinColor(pin.type)
              )}
              style={{ 
                animation: `zellige-cascade 0.8s ease-out ${idx * 0.1}s both`
              }}
              aria-label={pin.name}
              title={pin.name}
            >
              <MapPinIcon className="w-6 h-6" />
            </button>
            
            {/* Tooltip with location and Amazigh name */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-turath-saffron/30">
              <div className="text-turath-saffron">{pin.name}</div>
              <div className="text-[11px] text-turath-saffron/80">{pin.historical}</div>
            </div>
          </div>
        ))}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full bg-accent/20 animate-pulse" style={{ left: '40%', top: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
      </div>

      {/* Moroccan bottom sheet */}
      <div className={cn("absolute bottom-20 left-0 right-0 glass-moroccan rounded-t-3xl shadow-2xl transition-all duration-300 z-20 overflow-hidden border-2 border-turath-saffron/30", bottomSheetExpanded ? "h-[60%]" : "h-[220px]")}>
        {/* Moroccan color accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-turath-red via-turath-saffron to-turath-earth opacity-80" />
        
        <button onClick={() => setBottomSheetExpanded(!bottomSheetExpanded)} className="w-full flex justify-center py-3.5" aria-label={bottomSheetExpanded ? "Collapse" : "Expand"}>
          <div className="w-12 h-1.5 bg-turath-saffron/60 rounded-full hover:bg-turath-saffron/90 transition-colors" />
        </button>
        
        <div className="px-4 pb-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-foreground font-serif">المعالم القريبة</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Nearby heritage</p>
            </div>
            <button onClick={() => navigate('region-detail')} className="text-xs text-turath-red font-bold flex items-center gap-1 hover:gap-2 transition-all">
              عرض المزيد
              <ChevronRightIcon className="w-3 h-3" />
            </button>
          </div>
          
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
            {NEARBY_HIGHLIGHTS.map((place, idx) => (
              <button
                key={place.id}
                onClick={() => navigate('region-detail')}
                className="flex-shrink-0 w-42 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border-1.5 border-turath-saffron/30 shadow-md hover:shadow-lg hover:border-turath-saffron/60 transition-all active:scale-95"
                style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.08}s both` }}
              >
                <div className="relative h-28 overflow-hidden bg-gradient-to-br from-turath-earth to-turath-desert">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${place.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-turath-red/95 rounded-lg text-xs font-semibold text-white shadow-md">
                    {place.distance}
                  </div>
                </div>
                <div className="p-3 bg-white/80">
                  <h4 className="font-bold text-sm text-foreground truncate">{place.name}</h4>
                  <p className="text-xs text-turath-saffron font-semibold mt-1">{place.category}</p>
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

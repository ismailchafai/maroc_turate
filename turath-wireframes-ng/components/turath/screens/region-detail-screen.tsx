"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CATEGORY_TABS } from '@/lib/turath-types'
import { ChevronLeftIcon, ShareIcon, MapPinIcon, HeartIcon } from '../icons'
import { BottomNavigation } from '../bottom-navigation'
import { useNavigation } from '../navigation-provider'

const REGION_DATA = {
  id: '1',
  name: 'Marrakech-Safi',
  nameAr: 'مراكش-آسفي',
  image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&h=600&fit=crop',
  heritageSites: 24,
  artisans: 156,
  itineraries: 8,
}

const CONTENT_CARDS = [
  { id: '1', title: 'Koutoubia Mosque', titleAr: 'جامع الكتبية', titleAmz: 'ⵜⵉⵎⵣⴳⵉⴷⴰ ⵏ ⵍⴽⵓⵜⵓⴱⵉⵢⵢⴰ', description: 'The largest mosque in Marrakech, built in the 12th century', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=400&h=300&fit=crop', category: 'history', saved: false },
  { id: '2', title: 'Berber Pottery', titleAr: 'الفخار الأمازيغي', titleAmz: 'ⴰⴼⵅⵅⴰⵔ ⴰⵎⴰⵣⵉⵖ', description: 'Traditional clay pottery with geometric patterns', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop', category: 'crafts', saved: true },
  { id: '3', title: 'Tagine Cuisine', titleAr: 'طاجين', titleAmz: 'ⵟⴰⵊⵉⵏ', description: 'Traditional slow-cooked Moroccan dishes', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&h=300&fit=crop', category: 'food', saved: false },
  { id: '4', title: 'Gnawa Music', titleAr: 'موسيقى كناوة', titleAmz: 'ⴰⵥⴰⵡⴰⵏ ⵏ ⴳⵏⴰⵡⴰ', description: 'Spiritual music tradition with African roots', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop', category: 'music', saved: false },
  { id: '5', title: 'Ben Youssef Madrasa', titleAr: 'مدرسة ابن يوسف', titleAmz: 'ⵜⵉⵏⵎⵍ ⵏ ⴱⵏ ⵢⵓⵙⴼ', description: 'Historic Islamic college with intricate carvings', image: 'https://images.unsplash.com/photo-1548018560-c7196bf66e3c?w=400&h=300&fit=crop', category: 'history', saved: true },
  { id: '6', title: 'Saadian Tombs', titleAr: 'مقابر السعديين', titleAmz: 'ⵉⵥⵎⴹⴰⵍ ⵉⵙⵄⴷⵉⵢⵏ', description: '16th century royal necropolis', image: 'https://images.unsplash.com/photo-1580746738099-78d6833b3f84?w=400&h=300&fit=crop', category: 'history', saved: false },
]

interface RegionDetailScreenProps {
  isDark?: boolean
}

export function RegionDetailScreen({ isDark }: RegionDetailScreenProps) {
  void isDark
  const { navigate, goBack } = useNavigation()
  const [activeTab, setActiveTab] = useState('history')
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>(
    CONTENT_CARDS.reduce((acc, card) => ({ ...acc, [card.id]: card.saved }), {})
  )

  const filteredCards = CONTENT_CARDS.filter(card =>
    activeTab === 'all' || card.category === activeTab
  )

  const toggleSave = (id: string) => {
    setSavedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-slate-900 via-medina to-slate-900">
      {/* Moroccan background decorations */}
      <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] arabesque-ornate pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] tifinagh-pattern pointer-events-none" />
      {/* Hero Image with decorative frame */}
      <div className="relative h-72 bg-gradient-to-b from-turath-red/20 to-turath-parchment overflow-hidden border-b-4 border-turath-saffron/30">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${REGION_DATA.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-medina via-black/40 to-transparent" />
        
        {/* Moroccan pattern overlay */}
        <div className="absolute inset-0 opacity-[0.12] zellige-pattern pointer-events-none" />
        
        {/* Header buttons */}
        <div className="absolute top-10 left-3 right-3 flex items-center justify-between z-20">
          <button onClick={goBack} className="w-10 h-10 rounded-xl glass-moroccan flex items-center justify-center border-1.5 border-turath-saffron/40 hover:scale-110 transition-all active:scale-95" aria-label="Go back">
            <ChevronLeftIcon className="w-5.5 h-5.5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-xl glass-moroccan flex items-center justify-center border-1.5 border-turath-saffron/40 hover:scale-110 transition-all active:scale-95" aria-label="Share">
            <ShareIcon className="w-5.5 h-5.5 text-white" />
          </button>
        </div>
        
        {/* Title section */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h1 className="text-4xl font-bold font-serif text-white drop-shadow-2xl mb-2">{REGION_DATA.name}</h1>
          <div className="flex flex-col gap-1">
            <h2 className="text-2.5xl font-serif text-turath-saffron drop-shadow-lg font-bold" dir="rtl">{REGION_DATA.nameAr}</h2>
            <p className="text-sm font-sans text-turath-saffron/95 drop-shadow-md tracking-wide">ⵎⵕⵕⴰⴽⵛ - ⴰⵙⴼⵉ</p>
          </div>
        </div>
      </div>

      {/* Stats with premium styling */}
      <div className="flex items-center justify-around py-6 px-4 border-b-3 border-turath-saffron/40 bg-gradient-to-r from-white/90 via-white/85 to-white/90 backdrop-blur-lg relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 zellige-pattern opacity-8 pointer-events-none" />
        <div className="absolute inset-0 arabesque-ornate opacity-4 pointer-events-none" />
        
        <div className="text-center relative z-10 flex-1">
          <p className="text-4xl font-bold text-turath-red">{REGION_DATA.heritageSites}</p>
          <p className="text-xs text-muted-foreground font-bold mt-1.5 tracking-wide">المواقع التراثية</p>
        </div>
        <div className="w-1.5 h-12 bg-gradient-to-b from-turath-saffron to-turath-red/60 relative z-10 rounded-full" />
        <div className="text-center relative z-10 flex-1">
          <p className="text-4xl font-bold text-turath-saffron">{REGION_DATA.artisans}</p>
          <p className="text-xs text-muted-foreground font-bold mt-1.5 tracking-wide">الحرفيون</p>
        </div>
        <div className="w-1.5 h-12 bg-gradient-to-b from-turath-saffron to-turath-red/60 relative z-10 rounded-full" />
        <div className="text-center relative z-10 flex-1">
          <p className="text-4xl font-bold text-turath-majorelle">{REGION_DATA.itineraries}</p>
          <p className="text-xs text-muted-foreground font-bold mt-1.5 tracking-wide">الرحلات</p>
        </div>
      </div>

      {/* Category tabs with enhanced styling */}
      <div className="px-4 pt-4 pb-3 bg-gradient-to-r from-white/60 via-white/55 to-white/60 backdrop-blur-lg border-b-2 border-turath-saffron/35 relative overflow-hidden shadow-md">
        <div className="absolute inset-0 zellige-pattern opacity-6 pointer-events-none" />
        
        <div className="flex gap-2.5 overflow-x-auto scrollbar-hide relative z-10">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn("px-4.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border-2 backdrop-blur-md shadow-sm hover:shadow-md",
                activeTab === tab.id 
                  ? "bg-gradient-to-r from-turath-red to-turath-earth text-white border-turath-red/60 ring-2 ring-turath-red/30" 
                  : "glass-moroccan border-turath-saffron/40 text-turath-red hover:bg-turath-saffron/25 hover:border-turath-saffron/60"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div className="flex-1 overflow-y-auto px-3 pb-24">
        <div className="grid grid-cols-2 gap-3 pt-4">
          {filteredCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => navigate('heritage-detail')}
              className="rounded-2xl overflow-hidden bg-white/85 backdrop-blur-md border-1.5 border-turath-earth/30 shadow-md hover:shadow-lg transition-all text-left active:scale-[0.96]"
              style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.05}s both` }}
            >
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-turath-earth to-turath-desert">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="absolute inset-0 bg-black/40" />
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleSave(card.id) }} 
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-md" 
                  aria-label={savedItems[card.id] ? "Unsave" : "Save"}
                >
                  <HeartIcon className={cn("w-4 h-4", savedItems[card.id] ? "text-turath-red fill-turath-red" : "text-muted-foreground")} filled={savedItems[card.id]} />
                </button>
              </div>
              <div className="p-3 bg-white/90">
                <h3 className="font-bold text-sm text-foreground truncate">{card.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1 mt-1 font-medium">{card.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-medina via-medina/95 to-transparent pt-8">
        <button 
          onClick={() => navigate('itinerary')} 
          className="w-full py-3.5 px-6 bg-gradient-to-r from-turath-red to-turath-earth text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 border border-turath-saffron/50"
        >
          <MapPinIcon className="w-5 h-5" />
          <span>ابدأ الرحلة</span>
        </button>
      </div>
    </div>
  )
}

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
    <div className="h-full flex flex-col bg-medina">
      {/* Hero Image */}
      <div className="relative h-64 bg-gradient-to-b from-turath-red/20 to-turath-parchment overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${REGION_DATA.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-medina via-black/30 to-transparent" />
        
        {/* Header buttons */}
        <div className="absolute top-10 left-3 right-3 flex items-center justify-between z-20">
          <button onClick={goBack} className="w-9 h-9 rounded-lg glass-moroccan flex items-center justify-center border border-turath-saffron/30" aria-label="Go back">
            <ChevronLeftIcon className="w-5 h-5 text-white" />
          </button>
          <button className="w-9 h-9 rounded-lg glass-moroccan flex items-center justify-center border border-turath-saffron/30" aria-label="Share">
            <ShareIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Title section */}
        <div className="absolute bottom-3 left-4 right-4 z-20">
          <h1 className="text-3xl font-bold font-serif text-white drop-shadow-lg mb-1">{REGION_DATA.name}</h1>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-2xl font-serif text-turath-saffron drop-shadow-md font-bold" dir="rtl">{REGION_DATA.nameAr}</h2>
            <p className="text-sm font-sans text-turath-saffron/90 drop-shadow-sm tracking-widest">ⵎⵕⵕⴰⴽⵛ - ⴰⵙⴼⵉ</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-around py-4 border-b-2 border-turath-earth/30 bg-white/70 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 zellige-pattern opacity-4 pointer-events-none" />
        <div className="text-center relative z-10">
          <p className="text-2xl font-bold text-turath-red">{REGION_DATA.heritageSites}</p>
          <p className="text-xs text-muted-foreground font-semibold mt-0.5">المواقع</p>
        </div>
        <div className="w-px h-9 bg-turath-earth/40 relative z-10" />
        <div className="text-center relative z-10">
          <p className="text-2xl font-bold text-turath-saffron">{REGION_DATA.artisans}</p>
          <p className="text-xs text-muted-foreground font-semibold mt-0.5">الصنّاع</p>
        </div>
        <div className="w-px h-9 bg-turath-earth/40 relative z-10" />
        <div className="text-center relative z-10">
          <p className="text-2xl font-bold text-turath-majorelle">{REGION_DATA.itineraries}</p>
          <p className="text-xs text-muted-foreground font-semibold mt-0.5">الرحلات</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="px-3 pt-3 pb-2 bg-white/40 backdrop-blur-sm border-b border-turath-earth/20">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn("px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border",
                activeTab === tab.id 
                  ? "bg-turath-red text-white border-turath-red shadow-md" 
                  : "glass-moroccan border-turath-saffron/20 text-foreground hover:bg-turath-saffron/15"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div className="flex-1 overflow-y-auto px-3 pb-24">
        <div className="grid grid-cols-2 gap-2.5 pt-3">
          {filteredCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => navigate('heritage-detail')}
              className="rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm border border-turath-earth/20 shadow-sm hover:shadow-md transition-all text-left active:scale-[0.97]"
              style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.05}s both` }}
            >
              <div className="relative h-24 overflow-hidden bg-gradient-to-br from-turath-earth to-turath-desert">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="absolute inset-0 bg-black/30" />
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleSave(card.id) }} 
                  className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center" 
                  aria-label={savedItems[card.id] ? "Unsave" : "Save"}
                >
                  <HeartIcon className={cn("w-3.5 h-3.5", savedItems[card.id] ? "text-turath-red fill-turath-red" : "text-muted-foreground")} filled={savedItems[card.id]} />
                </button>
              </div>
              <div className="p-2.5 bg-white/90">
                <h3 className="font-bold text-xs text-foreground truncate">{card.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{card.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-medina via-medina/90 to-transparent pt-6">
        <button 
          onClick={() => navigate('itinerary')} 
          className="w-full py-3 px-6 bg-gradient-to-r from-turath-red to-turath-earth text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-turath-saffron/40"
        >
          <MapPinIcon className="w-4 h-4" />
          <span>ابدأ الرحلة</span>
        </button>
      </div>
    </div>
  )
}

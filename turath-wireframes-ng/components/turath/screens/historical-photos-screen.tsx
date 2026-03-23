'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HistoricalPhoto {
  id: string
  title: string
  titleAr: string
  titleAmz: string
  description: string
  descriptionAr: string
  image: string
  period: string
  location: string
  era: string
}

const HISTORICAL_PHOTOS: HistoricalPhoto[] = [
  {
    id: 'fez-medina-old',
    title: 'Fez Medina - Ancient City',
    titleAr: 'مدينة فاس العتيقة - المدينة القديمة',
    titleAmz: 'ⵜⴰⵎⴰⵣⵉⵔⵜ ⴼⴰⵙ ⴰⵣⴳⵖⴰⵔ',
    description: 'The ancient medina of Fez represents one of the oldest and most intact medieval cities in the Islamic world',
    descriptionAr: 'تمثل مدينة فاس العتيقة واحدة من أقدم وأكثر المدن الإسلامية العتيقة سلامة في العالم الإسلامي',
    image: 'https://images.unsplash.com/photo-1608215225917-5666dcfe1f6d?w=800&h=600&fit=crop',
    period: '9th-20th Century',
    location: 'Fez',
    era: 'Medieval & Ottoman'
  },
  {
    id: 'marrakech-koutoubia',
    title: 'Koutoubia Mosque - Marrakech',
    titleAr: 'جامع الكتبية - مراكش',
    titleAmz: 'ⵜⵉⵎⵣⴳⵉⴷⴰ ⵏ ⵍⴽⵓⵜⵓⴱⵉⵢⵢⴰ',
    description: 'Built in the 12th century, the Koutoubia Mosque is the largest mosque in Marrakech and a masterpiece of Almohad architecture',
    descriptionAr: 'بني في القرن الثاني عشر، جامع الكتبية هو أكبر مسجد في مراكش وتحفة من تحف العمارة الموحدية',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&h=600&fit=crop',
    period: '1158 CE',
    location: 'Marrakech',
    era: 'Almohad Dynasty'
  },
  {
    id: 'chefchaouen-blue',
    title: 'Chefchaouen - Blue Pearl',
    titleAr: 'شفشاون - اللؤلؤة الزرقاء',
    titleAmz: 'ⴰⵙⵏⴰⵔⵉ - ⵜⴻⵍⵙⴻⵎⵎⴰ',
    description: 'The iconic blue-painted medina of Chefchaouen nestled in the Rif Mountains, known for its stunning blue-washed buildings',
    descriptionAr: 'مدينة شفشاون المشهورة برسمها الأزرق الشهير، وتقع في جبال الريف، وتشتهر بمبانيها الملطخة بالأزرق الرائع',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    period: '15th Century',
    location: 'Chefchaouen',
    era: 'Spanish & Moroccan Heritage'
  },
  {
    id: 'ait-benhaddou-kasbah',
    title: 'Aït Benhaddou - Ancient Kasbah',
    titleAr: 'آيت بن حدو - القصبة القديمة',
    titleAmz: 'ⵓⵣⴰⵎⴼ ⴰⵣⴳⵖⴰⵔ',
    description: 'UNESCO World Heritage site featuring a fortified earthen village (kasbah) representing a traditional settlement in the Sahara',
    descriptionAr: 'موقع تراث عالمي لليونسكو يتميز بقرية محصنة من الطين (قصبة) تمثل مستوطنة تقليدية في الصحراء',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    period: '17th Century',
    location: 'Atlas Region',
    era: 'Saadian & Alaouite'
  },
  {
    id: 'essaouira-port',
    title: 'Essaouira - Historic Coastal Port',
    titleAr: 'الصويرة - الميناء الساحلي التاريخي',
    titleAmz: 'ⴷⴰⵖ ⴳⵓⴽⴼ',
    description: 'A historic fortified port city on the Atlantic coast, known for its maritime traditions and cultural significance',
    descriptionAr: 'مدينة ميناء محصنة تاريخية على الساحل الأطلسي، تشتهر بتقاليدها البحرية وأهميتها الثقافية',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    period: '18th-19th Century',
    location: 'Essaouira',
    era: 'European & Moroccan Influence'
  },
  {
    id: 'meknes-imperial',
    title: 'Meknès - Imperial City',
    titleAr: 'مكناس - العاصمة الإمبراطورية',
    titleAmz: 'ⴼⴰⵟⵉⴼⴰ ⵎⵓⵍⴰⵢ ⵉⵙⵎⴰⴰⴼⵏ',
    description: 'Former imperial capital under Moulay Ismail (1672-1727), featuring magnificent gates and royal palaces',
    descriptionAr: 'العاصمة الإمبراطورية السابقة تحت مولاي إسماعيل (1672-1727)، وتتميز بأبواب رائعة وقصور ملكية',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    period: '1672-1727 CE',
    location: 'Meknès',
    era: 'Alaouite Dynasty'
  },
  {
    id: 'marrakech-palaces',
    title: 'Marrakech Royal Palaces',
    titleAr: 'القصور الملكية في مراكش',
    titleAmz: 'ⵉⴳⴻⵎ ⵉⴰⴳⵉⴳⴰⵜ',
    description: 'The Saadian Tombs and Bahia Palace showcase the architectural grandeur of Moroccan royalty',
    descriptionAr: 'تعرض مقابر السعديين وقصر الباهية الفخامة المعمارية للعائلة الملكية المغربية',
    image: 'https://images.unsplash.com/photo-1548018560-c7196bf66e3c?w=800&h=600&fit=crop',
    period: '16th-19th Century',
    location: 'Marrakech',
    era: 'Saadian & Alaouite'
  },
  {
    id: 'tangier-strait',
    title: 'Tangier - Gateway to Europe',
    titleAr: 'طنجة - البوابة إلى أوروبا',
    titleAmz: 'ⵟⴰⵏⵊⴰ',
    description: 'Historic port city where Africa meets Europe, with rich maritime and cultural heritage',
    descriptionAr: 'مدينة ميناء تاريخية حيث تلتقي أفريقيا بأوروبا، مع تراث بحري وثقافي غني',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    period: '15th Century onwards',
    location: 'Tangier',
    era: 'Multi-Cultural Heritage'
  }
]

export default function HistoricalPhotosScreen() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [viewMode, setViewMode] = useState<'gallery' | 'detail'>('gallery')

  const currentPhoto = HISTORICAL_PHOTOS[selectedIdx]

  const goToNext = () => {
    setSelectedIdx((prev) => (prev + 1) % HISTORICAL_PHOTOS.length)
  }

  const goToPrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? HISTORICAL_PHOTOS.length - 1 : prev - 1))
  }

  return (
    <div className="h-full flex flex-col relative bg-gradient-to-b from-slate-900 via-amber-950/40 to-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] arabesque-ornate pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 px-5 pt-6 pb-5 border-b-2 border-turath-saffron/40 glass-moroccan shadow-lg bg-gradient-to-r from-slate-900/60 to-transparent">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2.5xl font-bold">📸</span>
          <h1 className="text-3.5xl font-bold font-serif text-turath-red">Historical Photos</h1>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-turath-saffron font-bold tracking-wider">ⴰⵍⵛⵓⴳ ⴰⴷⵍⵉⵎ</span>
          <span className="text-turath-red/60">|</span>
          <span>Morocco's Rich Heritage Through Photography</span>
        </div>
      </div>

      {/* Main gallery view */}
      {viewMode === 'gallery' && (
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {/* Featured photo */}
          <div className="relative h-96 bg-gradient-to-br from-turath-parchment to-amber-50 border-b-3 border-turath-saffron/30 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${currentPhoto.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Navigation buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all backdrop-blur-sm border border-white/30"
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all backdrop-blur-sm border border-white/30"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>

            {/* Photo info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h2 className="text-2.5xl font-bold text-white mb-1">{currentPhoto.title}</h2>
              <p className="text-turath-saffron font-bold text-lg mb-3" dir="rtl">{currentPhoto.titleAr}</p>
              <p className="text-white/90 text-sm leading-relaxed mb-4">{currentPhoto.description}</p>

              <div className="flex gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <span className="font-bold text-turath-saffron">📅</span>
                  {currentPhoto.period}
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-bold text-turath-saffron">📍</span>
                  {currentPhoto.location}
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-bold text-turath-saffron">🏛️</span>
                  {currentPhoto.era}
                </span>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold border border-white/20">
              {selectedIdx + 1} / {HISTORICAL_PHOTOS.length}
            </div>
          </div>

          {/* Photos grid */}
          <div className="p-5 space-y-3">
            <h3 className="text-2xl font-bold text-turath-red font-serif">All Historical Photos</h3>

            <div className="grid grid-cols-2 gap-3">
              {HISTORICAL_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => {
                    setSelectedIdx(idx)
                  }}
                  className={cn(
                    'relative group overflow-hidden rounded-2xl h-48 border-2 transition-all shadow-md hover:shadow-lg',
                    selectedIdx === idx
                      ? 'border-turath-saffron ring-2 ring-turath-saffron/40'
                      : 'border-turath-saffron/30 hover:border-turath-saffron/60'
                  )}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${photo.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:via-black/40 transition-all" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                    <h4 className="text-sm font-bold text-white truncate">{photo.title}</h4>
                    <p className="text-xs text-turath-saffron font-semibold mt-1">{photo.period}</p>
                  </div>

                  {selectedIdx === idx && (
                    <div className="absolute inset-0 border-2 border-turath-saffron rounded-2xl animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

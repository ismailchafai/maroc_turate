'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MoroccoMap } from '../morocco-map';
import { HeritageShowcase } from '../heritage-showcase';
import { TrilingualText } from '../amazigh-text';
import { MOROCCAN_REGIONS } from '@/data/moroccan-regions';

interface HeritageExplorerScreenProps {
  isDark?: boolean;
}

export function HeritageExplorerScreen({ isDark }: HeritageExplorerScreenProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'map' | 'crafts' | 'heritage'>('map');

  const currentRegion = selectedRegion ? MOROCCAN_REGIONS.find(r => r.id === selectedRegion) : null;

  return (
    <div className={cn(
      'h-full flex flex-col relative overflow-hidden',
      isDark ? 'bg-moroccan-dark' : 'bg-medina'
    )}>
      {/* Layered patterns */}
      <div className="absolute inset-0 opacity-[0.06] zellige-ornate pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] amazigh-tribal pointer-events-none" />

      {/* Header with Amazigh cultural branding */}
      <div className="relative z-10 px-6 pt-6 pb-5 border-b-2 border-turath-saffron/35 glass-moroccan shadow-md bg-gradient-to-r from-slate-900/40 via-transparent to-transparent">
        <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
        
        <div className="flex items-center justify-between mb-4.5 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-2.5xl font-bold text-turath-saffron">ⵓ</span>
            <h1 className="text-3.5xl font-bold font-serif text-turath-red">Heritage Explorer</h1>
          </div>
          <div className="flex gap-2.5">
            <button className="w-9 h-9 rounded-xl bg-turath-saffron/30 flex items-center justify-center hover:bg-turath-saffron/50 transition-all hover:shadow-md active:scale-95 border border-turath-saffron/20">
              <ChevronLeftIcon className="w-5.5 h-5.5 text-turath-red" />
            </button>
            <button className="w-9 h-9 rounded-xl bg-turath-saffron/30 flex items-center justify-center hover:bg-turath-saffron/50 transition-all hover:shadow-md active:scale-95 border border-turath-saffron/20">
              <ChevronRightIcon className="w-5.5 h-5.5 text-turath-red" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm mb-4 text-muted-foreground relative z-10">
          <span className="text-turath-saffron font-bold tracking-wider">ⴰⵊⵔⴰⵡⴰⵍ</span>
          <span className="text-turath-red/60">|</span>
          <span>Moroccan Heritage & Traditions</span>
        </div>
        
        {/* Tab navigation */}
        <div className="flex gap-2.5">
          {(['map', 'crafts', 'heritage'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-4.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border-1.5',
                activeTab === tab
                  ? 'bg-gradient-to-r from-turath-red to-turath-red-dark text-white shadow-md border-turath-red/60 ring-1 ring-turath-red/20'
                  : 'bg-turath-saffron/20 text-turath-red hover:bg-turath-saffron/35 border-turath-saffron/40 hover:border-turath-saffron/60 hover:shadow-sm'
              )}
            >
              {tab === 'map' && 'Morocco Map'}
              {tab === 'crafts' && 'Traditional Crafts'}
              {tab === 'heritage' && 'Heritage Sites'}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'map' && (
          <div className="p-6 space-y-6">
            <MoroccoMap 
              selectedRegion={selectedRegion} 
              onRegionSelect={setSelectedRegion}
            />

            {/* Region Details */}
            {currentRegion && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
                {/* Region Info Card */}
                <div className="glass-moroccan rounded-2xl p-5 border border-turath-saffron/25 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-turath-red mb-2">{currentRegion.name}</h3>
                    <TrilingualText 
                      en=""
                      ar={currentRegion.nameAr}
                      amz={currentRegion.nameAmz}
                      size="sm"
                      className="mb-3"
                    />
                    <p className="text-sm text-foreground/80 leading-relaxed">{currentRegion.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-turath-saffron/20">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-turath-saffron">{currentRegion.heritageCount}</p>
                      <p className="text-xs text-muted-foreground">Heritage Sites</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-turath-red">{currentRegion.majorCities.length}</p>
                      <p className="text-xs text-muted-foreground">Major Cities</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-turath-green">{currentRegion.crafts.length}</p>
                      <p className="text-xs text-muted-foreground">Traditional Crafts</p>
                    </div>
                  </div>
                </div>

                {/* Major Cities & Crafts */}
                <div className="space-y-4">
                  {/* Cities */}
                  <div className="glass-moroccan rounded-2xl p-4 border border-turath-saffron/25">
                    <h4 className="font-bold text-turath-red mb-3 text-sm">Major Cities</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentRegion.majorCities.map((city, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-turath-saffron/20 to-turath-earth/20 border border-turath-saffron/30 rounded-lg text-xs font-medium text-foreground"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Crafts */}
                  <div className="glass-moroccan rounded-2xl p-4 border border-turath-saffron/25">
                    <h4 className="font-bold text-turath-green mb-3 text-sm">Traditional Crafts</h4>
                    <div className="space-y-2">
                      {currentRegion.crafts.map((craft, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <span className="w-2 h-2 rounded-full bg-turath-saffron" />
                          <span className="text-foreground/80">{craft}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'crafts' && (
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-turath-red mb-2">Traditional Moroccan Crafts</h2>
              <p className="text-sm text-foreground/70">Discover the artisanal heritage and techniques passed down through generations</p>
            </div>
            <HeritageShowcase layout="grid" region={currentRegion?.name} />
          </div>
        )}

        {activeTab === 'heritage' && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-turath-red mb-2">Heritage Sites</h2>
              <p className="text-sm text-foreground/70">UNESCO and culturally significant locations across Morocco</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: 'Medina of Fez',
                  nameAr: 'مدينة فاس القديمة',
                  nameAmz: 'ⵜⴰⴷⴰⴳⵎ ⵏ ⴼⵉⵙ',
                  location: 'Fès',
                  year: '859',
                  description: 'Ancient walled city with the oldest university in the world',
                  type: 'UNESCO'
                },
                {
                  name: 'Koutoubia Mosque',
                  nameAr: 'مسجد الكتبيين',
                  nameAmz: 'ⴰⵎⴳⴰⴷ ⵏ ⴰⴳⴼⵔⵓ',
                  location: 'Marrakech',
                  year: '1162',
                  description: 'Iconic mosque and architectural masterpiece of the Almohad era',
                  type: 'Monument'
                },
                {
                  name: 'Saadian Tombs',
                  nameAr: 'قبور السعديين',
                  nameAmz: 'ⴰⴱⵓⵢ ⵏ ⴰⵙⴳⴰⴰⵏ',
                  location: 'Marrakech',
                  year: '1557',
                  description: 'Royal burial site with ornate decorations reflecting Moroccan artistry',
                  type: 'Monument'
                },
                {
                  name: 'Bahia Palace',
                  nameAr: 'قصر الباهية',
                  nameAmz: 'ⴰⴱⵓⵏⴰⴳⵉ',
                  location: 'Marrakech',
                  year: '1880',
                  description: 'Lavish palace showcasing Moroccan architectural excellence',
                  type: 'Palace'
                },
                {
                  name: 'Medina of Essaouira',
                  nameAr: 'مدينة الصويرة',
                  nameAmz: 'ⴱⵉⵎⴱⴰ',
                  location: 'Essaouira',
                  year: '1760',
                  description: 'Coastal medina with Portuguese fortress influence',
                  type: 'UNESCO'
                },
                {
                  name: 'Ait Benhaddou',
                  nameAr: 'قصبة أيت بن حدو',
                  nameAmz: 'ⴰⵜ ⴱⵏ ⵀⴰⴷⵓ',
                  location: 'Ouarzazate',
                  year: '1500s',
                  description: 'Ancient fortified village with traditional earthen architecture',
                  type: 'UNESCO'
                }
              ].map((site, idx) => (
                <div
                  key={idx}
                  className="glass-moroccan rounded-2xl p-5 border border-turath-saffron/25 hover:shadow-lg transition-all cursor-pointer group"
                  style={{ animation: `slide-in-right 0.4s ease-out ${idx * 100}ms both` }}
                >
                  {/* Type badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={cn(
                      'px-2.5 py-1 text-xs font-bold rounded-full',
                      site.type === 'UNESCO' ? 'bg-turath-saffron/30 text-turath-saffron-dark' :
                      site.type === 'Monument' ? 'bg-turath-red/30 text-turath-red-dark' :
                      'bg-turath-green/30 text-turath-green-dark'
                    )}>
                      {site.type}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{site.year}</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-turath-red mb-1">{site.name}</h3>
                  <TrilingualText 
                    en=""
                    ar={site.nameAr}
                    amz={site.nameAmz}
                    size="sm"
                    className="mb-2"
                  />

                  {/* Location and description */}
                  <p className="text-xs text-muted-foreground mb-2 font-medium">📍 {site.location}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{site.description}</p>

                  {/* Hover action */}
                  <div className="mt-3 pt-3 border-t border-turath-saffron/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-xs text-turath-red font-semibold hover:gap-2 flex items-center gap-1">
                      Learn more <ChevronRightIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

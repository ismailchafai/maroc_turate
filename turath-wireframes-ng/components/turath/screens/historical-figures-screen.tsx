'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HistoricalFiguresCarousel } from '../historical-figures-carousel';
import { HISTORICAL_FIGURES } from '@/data/historical-figures';
import { MOROCCAN_REGIONS } from '@/data/moroccan-regions';

interface HistoricalFiguresScreenProps {
  isDark?: boolean;
}

export function HistoricalFiguresScreen({ isDark }: HistoricalFiguresScreenProps) {
  const [selectedFigureIdx, setSelectedFigureIdx] = useState(0);
  const currentFigure = HISTORICAL_FIGURES[selectedFigureIdx];

  return (
    <div className={cn(
      'h-full flex flex-col relative overflow-hidden',
      isDark ? 'bg-atlas' : 'bg-gradient-to-br from-turath-parchment via-turath-cream to-turath-silk'
    )}>
      {/* Layered patterns */}
      <div className="absolute inset-0 opacity-[0.06] calligraphy-flourish pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] arabesque-ornate pointer-events-none" />

      {/* Header with cultural styling and enhanced visibility */}
      <div className="relative z-10 px-5 pt-6 pb-5 border-b-2 border-turath-saffron/40 glass-moroccan shadow-lg bg-gradient-to-r from-slate-900/70 via-slate-800/40 to-transparent">
        <div className="absolute inset-0 zellige-pattern opacity-[0.1] pointer-events-none" />
        <div className="absolute inset-0 arabesque-ornate opacity-[0.06] pointer-events-none" />
        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-2.5xl font-bold">👑</span>
              <h1 className="text-3xl font-bold font-serif text-turath-red">أساطير المغرب</h1>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-turath-saffron font-bold tracking-wider">ⴰⴳⴻⵍⵉⴼ</span>
              <span className="text-turath-red/60">·</span>
              <span className="text-muted-foreground">Great figures of Morocco's history</span>
            </div>
          </div>
        </div>

        {/* Period indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-turath-red">{currentFigure.period.start}</span>
            <div className="w-12 h-1 bg-gradient-to-r from-turath-red to-turath-saffron rounded-full" />
            <span className="font-semibold text-turath-red">{currentFigure.period.end}</span>
          </div>
          <span className="text-xs text-muted-foreground">{currentFigure.era}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Carousel */}
          <HistoricalFiguresCarousel />

          {/* Detailed Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Full Biography */}
            <div className="space-y-4">
              {/* Full Description */}
              <div className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 space-y-4">
                <h3 className="text-xl font-bold text-turath-red">Biography</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {currentFigure.description}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed font-serif italic" dir="rtl">
                  {currentFigure.descriptionAr}
                </p>
              </div>

              {/* Key Achievements - Detailed */}
              <div className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 space-y-4">
                <h3 className="text-lg font-bold text-turath-red">Major Achievements</h3>
                <ul className="space-y-3">
                  {currentFigure.achievements.map((achievement, idx) => (
                    <li 
                      key={idx}
                      className="flex gap-3 items-start"
                      style={{ animation: `slide-in-right 0.3s ease-out ${idx * 50}ms both` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-turath-red to-turath-saffron flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Heritage & Regional Info */}
            <div className="space-y-4">
              {/* Heritage Connections */}
              <div className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 space-y-4">
                <h3 className="text-lg font-bold text-turath-green">Heritage Legacy</h3>
                <div className="space-y-3">
                  {currentFigure.heritageConnections.map((connection, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-turath-green/10 border border-turath-green/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-turath-green flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{connection}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associated Regions */}
              <div className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 space-y-4">
                <h3 className="text-lg font-bold text-turath-majorelle">Associated Regions</h3>
                <div className="space-y-3">
                  {currentFigure.regions.map((regionId, idx) => {
                    const region = MOROCCAN_REGIONS.find(r => r.id === regionId);
                    return region ? (
                      <div 
                        key={idx}
                        className="p-4 rounded-lg bg-gradient-to-r from-turath-majorelle/10 to-turath-saffron/10 border border-turath-majorelle/20 cursor-pointer hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <MapPinIcon className="w-5 h-5 text-turath-majorelle flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-semibold text-foreground text-sm">{region.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{region.description}</p>
                            <p className="text-xs text-turath-saffron font-medium mt-2">
                              {region.heritageCount} heritage sites • {region.crafts.length} traditional crafts
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              {/* Historical Timeline Context */}
              <div className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 space-y-4">
                <h3 className="text-lg font-bold text-turath-red">Historical Context</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-turath-red uppercase tracking-wide">Era</p>
                    <p className="text-sm text-foreground/80">{currentFigure.era}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-turath-red uppercase tracking-wide">Period</p>
                    <p className="text-sm text-foreground/80">{currentFigure.period.start} - {currentFigure.period.end} CE</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-turath-red uppercase tracking-wide">Duration</p>
                    <p className="text-sm text-foreground/80">{currentFigure.period.end - currentFigure.period.start} years</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-turath-red uppercase tracking-wide">Title</p>
                    <p className="text-sm text-foreground/80">{currentFigure.title}</p>
                    <p className="text-sm text-foreground/70 font-serif" dir="rtl">{currentFigure.titleAr}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Figure Navigation */}
          <div className="flex items-center justify-between p-6 glass-moroccan rounded-2xl border border-turath-saffron/25">
            <button
              onClick={() => setSelectedFigureIdx(prev => prev === 0 ? HISTORICAL_FIGURES.length - 1 : prev - 1)}
              className="w-10 h-10 rounded-lg bg-turath-saffron/20 flex items-center justify-center hover:bg-turath-saffron/30 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5 text-turath-red" />
            </button>

            <div className="text-center flex-1">
              <p className="text-sm text-muted-foreground">
                Figure {selectedFigureIdx + 1} of {HISTORICAL_FIGURES.length}
              </p>
            </div>

            <button
              onClick={() => setSelectedFigureIdx(prev => prev === HISTORICAL_FIGURES.length - 1 ? 0 : prev + 1)}
              className="w-10 h-10 rounded-lg bg-turath-saffron/20 flex items-center justify-center hover:bg-turath-saffron/30 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5 text-turath-red" />
            </button>
          </div>

          {/* All Figures Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-turath-red">All Figures</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {HISTORICAL_FIGURES.map((figure, idx) => (
                <button
                  key={figure.id}
                  onClick={() => setSelectedFigureIdx(idx)}
                  className={cn(
                    'p-5 rounded-2xl transition-all duration-300 border-2 text-center group backdrop-blur-md shadow-md hover:shadow-lg',
                    selectedFigureIdx === idx
                      ? 'glass-premium border-turath-saffron bg-gradient-to-br from-turath-saffron/30 to-turath-red/20 shadow-lg ring-2 ring-turath-saffron/40'
                      : 'glass-moroccan border-turath-saffron/30 hover:border-turath-saffron/60 hover:bg-turath-saffron/15'
                  )}
                >
                  <p className="text-3xl mb-3">👤</p>
                  <p className="text-sm font-bold text-turath-red line-clamp-2 mb-2">{figure.name}</p>
                  <p className="text-xs text-muted-foreground font-semibold">{figure.period.start} - {figure.period.end}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

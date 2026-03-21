'use client';

import React, { useState } from 'react';
import { HISTORICAL_FIGURES } from '@/data/historical-figures';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HistoricalFiguresCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentFigure = HISTORICAL_FIGURES[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? HISTORICAL_FIGURES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === HISTORICAL_FIGURES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Card */}
      <div className="relative h-96 rounded-3xl overflow-hidden group">
        {/* Background gradient based on dynasty */}
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            currentIndex % 3 === 0 ? 'bg-gradient-to-br from-turath-red via-turath-saffron to-turath-earth' : 
            currentIndex % 3 === 1 ? 'bg-gradient-to-br from-turath-majorelle via-turath-indigo to-turath-green' :
            'bg-gradient-to-br from-turath-desert via-turath-earth to-turath-ochre'
          )}
        />

        {/* Zellige pattern overlay */}
        <div className="absolute inset-0 opacity-20 zellige-ornate" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
          <div className="space-y-4 max-w-sm">
            {/* Era badge */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <p className="text-sm font-semibold">{currentFigure.era}</p>
              <p className="text-xs opacity-90">{currentFigure.period.start} - {currentFigure.period.end}</p>
            </div>

            {/* Name in multiple languages */}
            <div className="space-y-2">
              <h2 className="text-4xl font-bold font-serif">{currentFigure.name}</h2>
              <p className="text-2xl font-serif" dir="rtl">{currentFigure.nameAr}</p>
              <p className="text-xl font-sans tracking-widest opacity-90">{currentFigure.nameAmz}</p>
            </div>

            {/* Title */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-lg font-semibold">{currentFigure.title}</p>
              <p className="text-sm opacity-90" dir="rtl">{currentFigure.titleAr}</p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed opacity-95">{currentFigure.description}</p>

            {/* Key achievements */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {currentFigure.achievements.slice(0, 3).map((achievement, idx) => (
                <span key={idx} className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous figure"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next figure"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Key Achievements */}
        <div className="glass-moroccan rounded-2xl p-4 border border-turath-saffron/20">
          <h3 className="font-bold text-turath-red mb-3 text-sm">Key Achievements</h3>
          <ul className="space-y-2">
            {currentFigure.achievements.slice(0, 2).map((achievement, idx) => (
              <li key={idx} className="text-xs text-foreground/80 flex gap-2">
                <span className="text-turath-saffron font-bold">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Heritage Connections */}
        <div className="glass-moroccan rounded-2xl p-4 border border-turath-saffron/20">
          <h3 className="font-bold text-turath-green mb-3 text-sm">Heritage Sites</h3>
          <ul className="space-y-2">
            {currentFigure.heritageConnections.slice(0, 2).map((connection, idx) => (
              <li key={idx} className="text-xs text-foreground/80 flex gap-2">
                <span className="text-turath-red font-bold">◆</span>
                <span>{connection}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex items-center justify-center gap-2">
        {HISTORICAL_FIGURES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              idx === currentIndex ? 'w-8 bg-turath-red' : 'w-2 bg-turath-saffron/50 hover:bg-turath-saffron'
            )}
            aria-label={`Go to figure ${idx + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center text-sm text-muted-foreground">
        {currentIndex + 1} of {HISTORICAL_FIGURES.length}
      </div>
    </div>
  );
}

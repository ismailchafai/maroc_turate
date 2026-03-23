'use client';

import React, { useState } from 'react';
import { MOROCCAN_REGIONS } from '@/data/moroccan-regions';
import { ChevronRightIcon } from 'lucide-react';

interface MoroccoMapProps {
  onRegionSelect?: (regionId: string) => void;
  selectedRegion?: string;
  showCities?: boolean;
}

export function MoroccoMap({ onRegionSelect, selectedRegion, showCities = true }: MoroccoMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(selectedRegion || null);

  const handleRegionClick = (regionId: string) => {
    setActiveRegion(regionId);
    onRegionSelect?.(regionId);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-turath-parchment via-turath-silk to-turath-parchment rounded-2xl border border-turath-saffron/20 shadow-lg">
      <svg
        viewBox="0 0 100 120"
        className="w-full h-auto max-w-2xl"
        style={{ filter: 'drop-shadow(0 8px 16px rgba(193,39,45,0.1))' }}
      >
        <defs>
          <filter id="mapGlowRegion">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="moroccoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FAF7F0', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F0EADE', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Morocco Base Map */}
        <g className="moroccoMap">
          {/* Northern regions */}
          <path
            d="M 15 8 L 25 6 L 28 12 L 22 15 Z"
            fill={activeRegion === 'tangier-tetouan' ? '#2A52BE' : hoveredRegion === 'tangier-tetouan' ? '#5B7FD8' : '#2A52BE30'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'tangier-tetouan' || hoveredRegion === 'tangier-tetouan' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('tangier-tetouan')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('tangier-tetouan')}
            filter="url(#mapGlowRegion)"
          />

          {/* Fès-Meknès */}
          <path
            d="M 28 18 L 38 16 L 42 26 L 32 28 Z"
            fill={activeRegion === 'fes-meknes' ? '#C1272D' : hoveredRegion === 'fes-meknes' ? '#E8505A' : '#C1272D30'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'fes-meknes' || hoveredRegion === 'fes-meknes' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('fes-meknes')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('fes-meknes')}
            filter="url(#mapGlowRegion)"
          />

          {/* Oriental */}
          <path
            d="M 44 12 L 58 14 L 56 24 L 42 22 Z"
            fill={activeRegion === 'oriental' ? '#E07A5F' : hoveredRegion === 'oriental' ? '#F0A085' : '#E07A5F30'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'oriental' || hoveredRegion === 'oriental' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('oriental')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('oriental')}
            filter="url(#mapGlowRegion)"
          />

          {/* Rabat-Salé */}
          <path
            d="M 20 28 L 28 26 L 32 38 L 24 40 Z"
            fill={activeRegion === 'rabat-sale' ? '#006233' : hoveredRegion === 'rabat-sale' ? '#2E8B57' : '#00623330'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'rabat-sale' || hoveredRegion === 'rabat-sale' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('rabat-sale')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('rabat-sale')}
            filter="url(#mapGlowRegion)"
          />

          {/* Casablanca-Settat */}
          <path
            d="M 22 38 L 32 36 L 36 50 L 26 52 Z"
            fill={activeRegion === 'casablanca-settat' ? '#DAA520' : hoveredRegion === 'casablanca-settat' ? '#F0C860' : '#DAA52030'}
            stroke="#C1272D"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'casablanca-settat' || hoveredRegion === 'casablanca-settat' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('casablanca-settat')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('casablanca-settat')}
            filter="url(#mapGlowRegion)"
          />

          {/* Beni Mellal-Khénifra */}
          <path
            d="M 34 32 L 46 30 L 50 46 L 38 48 Z"
            fill={activeRegion === 'beni-mellal-khenifra' ? '#B87333' : hoveredRegion === 'beni-mellal-khenifra' ? '#D4A574' : '#B8733330'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'beni-mellal-khenifra' || hoveredRegion === 'beni-mellal-khenifra' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('beni-mellal-khenifra')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('beni-mellal-khenifra')}
            filter="url(#mapGlowRegion)"
          />

          {/* Marrakech-Safi */}
          <path
            d="M 24 50 L 36 48 L 42 65 L 30 68 Z"
            fill={activeRegion === 'marrakech-safi' ? '#E07A5F' : hoveredRegion === 'marrakech-safi' ? '#F0A085' : '#E07A5F30'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'marrakech-safi' || hoveredRegion === 'marrakech-safi' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('marrakech-safi')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('marrakech-safi')}
            filter="url(#mapGlowRegion)"
          />

          {/* Drâa-Tafilalet */}
          <path
            d="M 40 50 L 56 48 L 60 70 L 44 72 Z"
            fill={activeRegion === 'draa-tafilalet' ? '#A0522D' : hoveredRegion === 'draa-tafilalet' ? '#C47347' : '#A0522D30'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'draa-tafilalet' || hoveredRegion === 'draa-tafilalet' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('draa-tafilalet')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('draa-tafilalet')}
            filter="url(#mapGlowRegion)"
          />

          {/* Souss-Massa */}
          <path
            d="M 18 65 L 30 62 L 36 80 L 24 82 Z"
            fill={activeRegion === 'souss-massa' ? '#4B0082' : hoveredRegion === 'souss-massa' ? '#7B5BA6' : '#4B008230'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'souss-massa' || hoveredRegion === 'souss-massa' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('souss-massa')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('souss-massa')}
            filter="url(#mapGlowRegion)"
          />

          {/* Guelmim-Oued Noun */}
          <path
            d="M 12 78 L 24 76 L 28 92 L 16 94 Z"
            fill={activeRegion === 'guelmim-oued-noun' ? '#CC7722' : hoveredRegion === 'guelmim-oued-noun' ? '#E8983D' : '#CC772230'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'guelmim-oued-noun' || hoveredRegion === 'guelmim-oued-noun' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('guelmim-oued-noun')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('guelmim-oued-noun')}
            filter="url(#mapGlowRegion)"
          />

          {/* Laâyoune-Sakia El Hamra */}
          <path
            d="M 20 90 L 36 88 L 40 105 L 24 106 Z"
            fill={activeRegion === 'laayoune-sakia-hamra' ? '#8B4513' : hoveredRegion === 'laayoune-sakia-hamra' ? '#A0522D' : '#8B451330'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'laayoune-sakia-hamra' || hoveredRegion === 'laayoune-sakia-hamra' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('laayoune-sakia-hamra')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('laayoune-sakia-hamra')}
            filter="url(#mapGlowRegion)"
          />

          {/* Dakhla-Oued Dahab */}
          <path
            d="M 16 103 L 32 101 L 36 115 L 20 117 Z"
            fill={activeRegion === 'dakhla-oued-dahab' ? '#556B2F' : hoveredRegion === 'dakhla-oued-dahab' ? '#6B8E23' : '#556B2F30'}
            stroke="#DAA520"
            strokeWidth="0.8"
            className={`cursor-pointer transition-all duration-300 ${
              activeRegion === 'dakhla-oued-dahab' || hoveredRegion === 'dakhla-oued-dahab' ? 'opacity-100 filter drop-shadow-lg' : 'opacity-70 hover:opacity-90'
            }`}
            onMouseEnter={() => setHoveredRegion('dakhla-oued-dahab')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick('dakhla-oued-dahab')}
            filter="url(#mapGlowRegion)"
          />
        </g>

        {/* Region Labels */}
        {MOROCCAN_REGIONS.map((region) => (
          <g key={`label-${region.id}`} className="pointerEvents-none">
            <text
              x={region.svg.x}
              y={region.svg.y}
              textAnchor="middle"
              className="text-xs font-bold fill-turath-charcoal opacity-80"
              style={{ fontSize: '6px', fontWeight: 'bold' }}
            >
              {region.name.split('-')[0]}
            </text>
          </g>
        ))}

        {/* Region Markers (Heritage sites) */}
        {MOROCCAN_REGIONS.map((region) => (
          <circle
            key={`marker-${region.id}`}
            cx={region.svg.x}
            cy={region.svg.y}
            r="1.2"
            fill={region.color}
            opacity={activeRegion === region.id ? 1 : 0.6}
            className="cursor-pointer"
            onClick={() => handleRegionClick(region.id)}
          />
        ))}
      </svg>

      {/* Selected Region Info */}
      {activeRegion && (
        <div className="mt-6 w-full max-w-md glass-premium rounded-2xl p-4 border border-turath-saffron/25">
          {MOROCCAN_REGIONS.find((r) => r.id === activeRegion) && (
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-turath-red">{MOROCCAN_REGIONS.find((r) => r.id === activeRegion)?.name}</h3>
                <p className="text-xs text-muted-foreground">{MOROCCAN_REGIONS.find((r) => r.id === activeRegion)?.description}</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{MOROCCAN_REGIONS.find((r) => r.id === activeRegion)?.heritageCount} Heritage Sites</span>
                <button className="flex items-center gap-1 text-turath-red font-semibold hover:gap-2 transition-all">
                  Explore <ChevronRightIcon className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

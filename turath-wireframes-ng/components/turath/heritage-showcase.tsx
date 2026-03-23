'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface HeritageItem {
  name: string;
  nameAr: string;
  nameAmz: string;
  description: string;
  icon: string;
  color: string;
  region: string;
  techniques: string[];
}

const MOROCCAN_CRAFTS: HeritageItem[] = [
  {
    name: 'Zellige Tilework',
    nameAr: 'فن الزليج',
    nameAmz: 'ⴰⴷⴼⴰⴼⵓⵎ',
    description: 'Ancient geometric tile art created by hand-cutting and arranging colored ceramic tiles into intricate patterns',
    icon: '🎨',
    color: 'from-turath-majorelle to-turath-saffron',
    region: 'Fès, Meknès',
    techniques: ['Hand-cutting', 'Glazing', 'Pattern Assembly']
  },
  {
    name: 'Leather Tanning',
    nameAr: 'دباغة الجلود',
    nameAmz: 'ⴰⴼⴷⵍⴰⵎ',
    description: 'Traditional leather dyeing and treatment using natural vegetable extracts in historic tanning vats',
    icon: '🧴',
    color: 'from-turath-earth to-turath-ochre',
    region: 'Fès, Marrakech',
    techniques: ['Natural Dyes', 'Hand Processing', 'Traditional Vats']
  },
  {
    name: 'Berber Carpets',
    nameAr: 'السجاد الأمازيغي',
    nameAmz: 'ⴰⵎⵙⴰⴷⵓⴱ',
    description: 'Hand-woven carpets with geometric patterns reflecting Amazigh symbols and stories passed through generations',
    icon: '🧵',
    color: 'from-turath-indigo to-turath-red',
    region: 'Atlas Mountains',
    techniques: ['Hand Weaving', 'Natural Wool', 'Symbolic Patterns']
  },
  {
    name: 'Argan Oil Processing',
    nameAr: 'زيت الأرغان',
    nameAmz: 'ⴰⵣⵎⵎⴰⵣ',
    description: 'Ancient oil extraction from argan tree nuts using traditional stone mills and hand-pressing methods',
    icon: '🌳',
    color: 'from-turath-green to-turath-earth',
    region: 'Souss-Massa, Marrakech',
    techniques: ['Nut Grinding', 'Hand Pressing', 'Natural Processing']
  },
  {
    name: 'Metalwork & Brass',
    nameAr: 'الحرف المعدنية',
    nameAmz: 'ⴰⵙⵉⴳⵔ',
    description: 'Intricate brass, copper, and iron work featuring traditional designs for household and decorative items',
    icon: '⚒️',
    color: 'from-turath-copper to-turath-bronze',
    region: 'Marrakech, Fès',
    techniques: ['Hand Hammering', 'Copper Beating', 'Engraving']
  },
  {
    name: 'Cedar Carving',
    nameAr: 'نحت الأرز',
    nameAmz: 'ⴰⵛⵔⵎ',
    description: 'Skilled carving of cedar wood from the Middle Atlas mountains into doors, boxes, and architectural elements',
    icon: '🪵',
    color: 'from-turath-desert to-turath-bronze',
    region: 'Middle Atlas, Meknès',
    techniques: ['Hand Chisel Work', 'Wood Seasoning', 'Traditional Designs']
  }
];

interface HeritageShowcaseProps {
  layout?: 'grid' | 'carousel';
  region?: string;
}

export function HeritageShowcase({ layout = 'grid', region }: HeritageShowcaseProps) {
  const displayCrafts = region ? MOROCCAN_CRAFTS.filter(c => c.region.includes(region)) : MOROCCAN_CRAFTS;

  if (layout === 'carousel') {
    return (
      <div className="space-y-4">
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {displayCrafts.map((craft, idx) => (
            <HeritageCard key={craft.name} craft={craft} index={idx} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {displayCrafts.map((craft, idx) => (
        <HeritageCard key={craft.name} craft={craft} index={idx} />
      ))}
    </div>
  );
}

function HeritageCard({ craft, index }: { craft: HeritageItem; index: number }) {
  return (
    <div
      className={cn(
        'flex-shrink-0 w-full md:w-auto rounded-2xl overflow-hidden glass-moroccan border border-turath-saffron/25 p-5 hover:shadow-lg transition-all duration-300 cursor-pointer group',
        `animate-in slide-in-right duration-500`
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header with icon and gradient */}
      <div className={cn('bg-gradient-to-br p-4 rounded-xl mb-4 text-center', craft.color)}>
        <div className="text-4xl mb-2">{craft.icon}</div>
        <h3 className="font-bold text-white text-sm">{craft.name}</h3>
      </div>

      {/* Multilingual names */}
      <div className="space-y-1 mb-3">
        <p className="text-xs font-semibold text-turath-red">{craft.name}</p>
        <p className="text-xs text-foreground/70 font-serif" dir="rtl">{craft.nameAr}</p>
        <p className="text-xs text-foreground/70 font-sans tracking-wider">{craft.nameAmz}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{craft.description}</p>

      {/* Region */}
      <div className="mb-3 px-2 py-1 bg-turath-saffron/10 rounded-lg border border-turath-saffron/20">
        <p className="text-xs font-medium text-turath-red">{craft.region}</p>
      </div>

      {/* Techniques */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-turath-red">Traditional Techniques:</p>
        <ul className="flex flex-wrap gap-2">
          {craft.techniques.map((technique, idx) => (
            <li
              key={idx}
              className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-turath-saffron/20 to-turath-earth/20 border border-turath-saffron/30 text-foreground/80"
            >
              {technique}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover indicator */}
      <div className="mt-4 pt-3 border-t border-turath-saffron/10 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-turath-red font-semibold">Learn more →</span>
      </div>
    </div>
  );
}

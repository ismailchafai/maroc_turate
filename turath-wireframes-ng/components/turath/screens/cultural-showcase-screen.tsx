'use client';

import { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AmazighSaying, TrilingualText, CalendarMonth, AMAZIGH_CALENDAR } from '../amazigh-text';
import { MOROCCAN_TRADITIONS, MOROCCAN_SYMBOLS, AMAZIGH_PROVERBS, MOROCCAN_RECIPES } from '@/data/moroccan-content';

interface CulturalShowcaseScreenProps {
  isDark?: boolean;
}

export function CulturalShowcaseScreen({ isDark }: CulturalShowcaseScreenProps) {
  const [activeSection, setActiveSection] = useState<'traditions' | 'symbols' | 'proverbs' | 'recipes' | 'calendar'>('traditions');

  return (
    <div className={cn(
      'h-full flex flex-col relative overflow-hidden',
      isDark ? 'bg-moroccan-dark' : 'bg-gradient-to-br from-turath-parchment via-turath-silk to-turath-cream'
    )}>
      {/* Layered patterns */}
      <div className="absolute inset-0 opacity-[0.05] calligraphy-flourish pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] arabesque-ornate pointer-events-none" />

      {/* Header with strong Amazigh branding and dark background */}
      <div className="relative z-10 px-6 pt-6 pb-5 border-b-2 border-turath-saffron/40 glass-moroccan bg-gradient-to-r from-slate-900/60 via-slate-800/40 to-transparent shadow-lg">
        <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <span className="text-3xl font-bold text-turath-red">ⵣ</span>
          <h1 className="text-3.5xl font-bold font-serif text-turath-red">Living Traditions</h1>
        </div>
        
        <div className="flex items-center gap-2 text-sm mb-4 text-muted-foreground relative z-10">
          <span className="text-turath-saffron font-bold tracking-wider">ⴰⵊⵏⴱⴰⵔ</span>
          <span className="text-turath-red/60">|</span>
          <span>Moroccan & Amazigh Heritage</span>
        </div>
        
        {/* Section tabs with enhanced styling */}
        <div className="flex overflow-x-auto gap-2.5 pb-2 scrollbar-hide">
          {(['traditions', 'symbols', 'proverbs', 'recipes', 'calendar'] as const).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={cn(
                'px-4.5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border-1.5 backdrop-blur-sm',
                activeSection === section
                  ? 'bg-gradient-to-r from-turath-red to-turath-earth text-white shadow-md ring-1 ring-turath-red/30'
                  : 'bg-turath-saffron/20 text-turath-red hover:bg-turath-saffron/35 border-turath-saffron/40 hover:border-turath-saffron/60 hover:shadow-sm'
              )}
            >
              {section === 'traditions' && '🎭 Traditions'}
              {section === 'symbols' && '✨ Symbols'}
              {section === 'proverbs' && '💬 Proverbs'}
              {section === 'recipes' && '🍲 Recipes'}
              {section === 'calendar' && '📅 Calendar'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Traditions Section */}
          {activeSection === 'traditions' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-turath-red mb-4">Moroccan Traditions</h2>
              {MOROCCAN_TRADITIONS.map((tradition, idx) => (
                <div
                  key={tradition.name}
                  className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 hover:shadow-lg transition-all cursor-pointer group"
                  style={{ animation: `slide-in-right 0.4s ease-out ${idx * 100}ms both` }}
                >
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={cn(
                      'px-3 py-1.5 text-xs font-bold rounded-full',
                      tradition.category === 'celebration' ? 'bg-turath-saffron/30 text-turath-saffron-dark' :
                      tradition.category === 'ceremony' ? 'bg-turath-red/30 text-turath-red-dark' :
                      tradition.category === 'food' ? 'bg-turath-earth/30 text-turath-earth-dark' :
                      tradition.category === 'craft' ? 'bg-turath-green/30 text-turath-green-dark' :
                      'bg-turath-indigo/30 text-turath-indigo-dark'
                    )}>
                      {tradition.category.charAt(0).toUpperCase() + tradition.category.slice(1)}
                    </span>
                    {tradition.season && <span className="text-xs text-muted-foreground font-medium">{tradition.season}</span>}
                  </div>

                  {/* Title with trilingual */}
                  <h3 className="text-lg font-bold text-turath-red mb-2">{tradition.name}</h3>
                  <TrilingualText 
                    en=""
                    ar={tradition.nameAr}
                    amz={tradition.nameAmz}
                    size="sm"
                    className="mb-3"
                  />

                  {/* Description */}
                  <p className="text-sm text-foreground/80 leading-relaxed mb-3">{tradition.description}</p>

                  {/* Significance */}
                  <div className="mb-4 p-3 bg-turath-saffron/10 border-l-2 border-turath-saffron rounded">
                    <p className="text-xs font-semibold text-turath-red mb-1">Cultural Significance</p>
                    <p className="text-sm text-foreground/80">{tradition.significance}</p>
                  </div>

                  {/* Practices */}
                  <div>
                    <p className="text-xs font-semibold text-turath-red mb-2">Traditional Practices</p>
                    <div className="flex flex-wrap gap-2">
                      {tradition.practices.map((practice, pIdx) => (
                        <span 
                          key={pIdx}
                          className="text-xs px-2.5 py-1 bg-turath-green/20 border border-turath-green/30 rounded-lg text-foreground/80"
                        >
                          {practice}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Symbols Section */}
          {activeSection === 'symbols' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-turath-red mb-4">Cultural Symbols</h2>
              <p className="text-sm text-foreground/70 mb-4">Sacred symbols that represent deep cultural meaning across Morocco</p>
              {MOROCCAN_SYMBOLS.map((symbol, idx) => (
                <div
                  key={symbol.name}
                  className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 hover:shadow-lg transition-all"
                  style={{ animation: `slide-in-right 0.4s ease-out ${idx * 100}ms both` }}
                >
                  {/* Symbol display */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex gap-3">
                      <div className="text-4xl font-bold text-turath-red opacity-80">{symbol.symbolAr}</div>
                      <div className="text-4xl font-sans tracking-wider text-turath-indigo opacity-80">{symbol.symbolAmz}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-turath-red">{symbol.name}</h3>
                      <TrilingualText 
                        en=""
                        ar={symbol.nameAr}
                        amz={symbol.nameAmz}
                        size="sm"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Meaning */}
                  <div className="mb-3 p-3 bg-turath-majorelle/10 rounded border border-turath-majorelle/20">
                    <p className="text-xs font-semibold text-turath-majorelle mb-1">Meaning</p>
                    <p className="text-sm text-foreground/80">{symbol.meaning}</p>
                  </div>

                  {/* Usage */}
                  <div>
                    <p className="text-xs font-semibold text-turath-red mb-2">Usage & Presence</p>
                    <p className="text-sm text-foreground/80">{symbol.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Proverbs Section */}
          {activeSection === 'proverbs' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-turath-red mb-4">Amazigh Proverbs</h2>
              <p className="text-sm text-foreground/70 mb-4">Wisdom passed down through generations in Moroccan culture</p>
              {AMAZIGH_PROVERBS.map((proverb, idx) => (
                <AmazighSaying
                  key={idx}
                  saying={proverb.amazigh}
                  translation={`"${proverb.english}" — ${proverb.meaning}`}
                  className="animate-in slide-in-right"
                  style={{ animationDelay: `${idx * 100}ms` }}
                />
              ))}
            </div>
          )}

          {/* Recipes Section */}
          {activeSection === 'recipes' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-turath-red mb-4">Traditional Recipes</h2>
              <p className="text-sm text-foreground/70 mb-4">Culinary heritage and timeless dishes of Morocco</p>
              {MOROCCAN_RECIPES.map((recipe, idx) => (
                <div
                  key={recipe.name}
                  className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 hover:shadow-lg transition-all"
                  style={{ animation: `slide-in-right 0.4s ease-out ${idx * 100}ms both` }}
                >
                  <h3 className="text-lg font-bold text-turath-red mb-1">{recipe.name}</h3>
                  <p className="text-sm text-foreground/70 font-serif mb-3" dir="rtl">{recipe.nameAr}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-turath-saffron/10 rounded border border-turath-saffron/20">
                      <p className="text-xs font-semibold text-turath-saffron mb-2">Region</p>
                      <p className="text-sm text-foreground/80">{recipe.region}</p>
                    </div>
                    <div className="p-3 bg-turath-earth/10 rounded border border-turath-earth/20">
                      <p className="text-xs font-semibold text-turath-earth mb-2">Served For</p>
                      <p className="text-sm text-foreground/80">{recipe.servingTime}</p>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-turath-red mb-2">Key Ingredients</p>
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((ingredient, iIdx) => (
                        <span 
                          key={iIdx}
                          className="text-xs px-2.5 py-1 bg-turath-earth/20 border border-turath-earth/30 rounded-lg text-foreground/80"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Method */}
                  <div className="mb-3 p-3 bg-turath-green/10 rounded border border-turath-green/20">
                    <p className="text-xs font-semibold text-turath-green mb-1">Cooking Method</p>
                    <p className="text-sm text-foreground/80">{recipe.cookingMethod}</p>
                  </div>

                  {/* Significance */}
                  <div className="p-3 bg-turath-red/10 rounded border border-turath-red/20">
                    <p className="text-xs font-semibold text-turath-red mb-1">Cultural Significance</p>
                    <p className="text-sm text-foreground/80">{recipe.culturalSignificance}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Calendar Section */}
          {activeSection === 'calendar' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-turath-red mb-4">Amazigh Calendar</h2>
              <p className="text-sm text-foreground/70 mb-6">Ancient Amazigh months with modern equivalents</p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {AMAZIGH_CALENDAR.map((month, idx) => (
                  <div
                    key={month.num}
                    className="glass-moroccan rounded-2xl p-4 border border-turath-saffron/25 text-center hover:shadow-lg transition-all cursor-pointer"
                    style={{ animation: `slide-in-right 0.4s ease-out ${idx * 50}ms both` }}
                  >
                    <div className="text-3xl font-sans tracking-widest text-turath-indigo font-bold mb-2">
                      {month.tifinagh}
                    </div>
                    <p className="text-xs font-semibold text-turath-red mb-1">{month.num}</p>
                    <p className="text-sm font-serif text-foreground" dir="rtl">{month.ar}</p>
                    <p className="text-xs text-muted-foreground mt-2">{month.en}</p>
                  </div>
                ))}
              </div>

              {/* Amazigh Year Info */}
              <div className="glass-moroccan rounded-2xl p-6 border border-turath-saffron/25 space-y-4">
                <h3 className="text-lg font-bold text-turath-red">Amazigh Calendar System</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  The Amazigh calendar is one of the oldest in the world, rooted in agricultural cycles and astronomical observations. Each month has deep cultural significance connected to seasonal farming, traditional activities, and spiritual practices.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-turath-saffron/10 rounded border border-turath-saffron/20">
                    <p className="text-xs font-semibold text-turath-saffron mb-1">System</p>
                    <p className="text-sm text-foreground/80">Agricultural & Astronomical</p>
                  </div>
                  <div className="p-3 bg-turath-red/10 rounded border border-turath-red/20">
                    <p className="text-xs font-semibold text-turath-red mb-1">Age</p>
                    <p className="text-sm text-foreground/80">3,000+ years old</p>
                  </div>
                  <div className="p-3 bg-turath-green/10 rounded border border-turath-green/20">
                    <p className="text-xs font-semibold text-turath-green mb-1">Significance</p>
                    <p className="text-sm text-foreground/80">Cultural identity</p>
                  </div>
                  <div className="p-3 bg-turath-majorelle/10 rounded border border-turath-majorelle/20">
                    <p className="text-xs font-semibold text-turath-majorelle mb-1">Use Today</p>
                    <p className="text-sm text-foreground/80">Festivals & ceremonies</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

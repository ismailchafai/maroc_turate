"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { LANGUAGES, INTERESTS } from '@/lib/turath-types'
import { CheckIcon, ChevronRightIcon } from '../icons'
import { useNavigation } from '../navigation-provider'

function InterestIcon({ interest, selected }: { interest: string; selected: boolean }) {
  const color = selected ? "text-accent-foreground" : "text-muted-foreground"
  switch (interest) {
    case 'tourism':
      return <svg className={cn("w-6 h-6", color)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg>
    case 'handicrafts':
      return <svg className={cn("w-6 h-6", color)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    case 'history':
      return <svg className={cn("w-6 h-6", color)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M4 21V10.5M20 21V10.5" /></svg>
    case 'gastronomy':
      return <svg className={cn("w-6 h-6", color)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" /><line x1="6" y1="17" x2="18" y2="17" /></svg>
    case 'music':
      return <svg className={cn("w-6 h-6", color)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
    default:
      return null
  }
}

interface OnboardingScreenProps {
  isDark?: boolean
}

export function OnboardingScreen({ isDark }: OnboardingScreenProps) {
  void isDark
  const { navigate } = useNavigation()
  const [step, setStep] = useState<'splash' | 'language' | 'interests'>('splash')
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  if (step === 'splash') {
    return (
      <div className="h-full flex flex-col items-center justify-center px-6 pt-16 pb-8 relative overflow-hidden bg-moroccan-dark">
        {/* Moroccan zellige patterns */}
        <div className="absolute inset-0 opacity-[0.12] zellige-ornate pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] amazigh-tribal pointer-events-none" />
        
        {/* Moroccan color glows */}
        <div className="absolute top-24 left-0 w-48 h-48 rounded-full bg-turath-saffron/25 blur-3xl" />
        <div className="absolute bottom-20 right-0 w-56 h-56 rounded-full bg-turath-red/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full majestic-scale">
          {/* Moroccan icon */}
          <div className="relative mb-10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-turath-saffron via-turath-earth to-turath-red blur-3xl opacity-70" />
            <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-turath-saffron to-turath-red flex items-center justify-center shadow-3xl border-3 border-turath-saffron/50 backdrop-blur-sm">
              <svg className="w-16 h-16 text-white drop-shadow-xl" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          {/* App name with Amazigh symbol */}
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl font-bold text-turath-saffron drop-shadow-lg">ⵣ</span>
            <h1 className="text-6xl font-bold font-serif text-white drop-shadow-2xl tracking-tight">Turath</h1>
          </div>
          
          {/* Arabic, Tifinagh and Amazigh branding */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <p className="text-4xl font-serif text-turath-saffron drop-shadow-md font-bold" dir="rtl">تراث</p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-turath-saffron/60 to-transparent" />
            <div className="flex items-center gap-2">
              <p className="text-xl font-sans text-turath-saffron font-semibold tracking-widest">ⵜⴰⵢⵙⵉ</p>
              <span className="text-turath-saffron/60">·</span>
              <p className="text-lg font-bold text-turath-saffron tracking-wide">Amazigh Heritage</p>
            </div>
          </div>
          
          {/* Moroccan & Amazigh tagline */}
          <div className="text-center mb-12 px-2">
            <p className="text-white/80 text-sm leading-relaxed mb-1">استكشف تراث المغرب الأصيل</p>
            <p className="text-turath-saffron/80 text-xs font-semibold tracking-widest">ⴷⴰⴰⵍ ⴰⵊⵏⴱⴰⵔ ⴰⵎⴰⵣⵉⵖ</p>
          </div>
          
          {/* Main CTA */}
          <button
            onClick={() => setStep('language')}
            className="w-full max-w-xs py-4 px-8 bg-gradient-to-r from-turath-red to-turath-earth text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 border border-turath-saffron/50 group mb-6"
          >
            <span>ابدأ الآن</span>
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
          
          {/* Color dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-turath-red" />
            <div className="w-2 h-2 rounded-full bg-turath-saffron" />
            <div className="w-2 h-2 rounded-full bg-turath-green" />
            <div className="w-2 h-2 rounded-full bg-turath-majorelle" />
          </div>
          
          {/* Cultural message */}
          <p className="text-xs text-white/60 text-center">
            Celebrating Moroccan & Amazigh Heritage
          </p>
        </div>
      </div>
    )
  }

  if (step === 'language') {
    return (
      <div className="h-full flex flex-col pt-12 px-5 pb-8 bg-medina relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] zellige-pattern pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-serif text-foreground mb-1">اللغة</h2>
            <p className="text-xs text-muted-foreground">Select your language / اختر لغتك</p>
          </div>
          
          {/* Language grid */}
          <div className="flex-1 overflow-y-auto pb-6">
            <div className="grid grid-cols-2 gap-3">
              {LANGUAGES.map((lang, idx) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={cn(
                    "flex flex-col items-center gap-2.5 p-5 rounded-2xl border-2.5 transition-all duration-300 backdrop-blur-sm",
                    selectedLanguage === lang.code
                      ? "border-turath-saffron bg-turath-saffron/25 shadow-lg ring-2 ring-turath-saffron/20"
                      : "border-turath-earth/40 bg-white/60 hover:border-turath-saffron/60 hover:bg-turath-saffron/15 hover:shadow-md"
                  )}
                  style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.05}s both` }}
                >
                  <span className="text-4xl">{lang.flag}</span>
                  <div className="text-center">
                    <p className="font-semibold text-sm text-foreground">{lang.name}</p>
                    <p className="text-xs text-muted-foreground/80 mt-0.5 font-medium">{lang.nativeName}</p>
                  </div>
                  {selectedLanguage === lang.code && (
                    <div className="absolute top-1 right-1 w-4 h-4 bg-turath-saffron rounded-full flex items-center justify-center">
                      <CheckIcon className="w-2 h-2 text-turath-charcoal" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* CTA button */}
          <button
            onClick={() => setStep('interests')}
            disabled={!selectedLanguage}
            className={cn(
              "w-full py-3.5 px-6 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2",
              selectedLanguage
                ? "bg-gradient-to-r from-turath-red to-turath-earth text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border border-turath-saffron/50"
                : "bg-turath-silk text-muted-foreground cursor-not-allowed"
            )}
          >
            <span>التالي</span>
            {selectedLanguage && <ChevronRightIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col pt-12 px-5 pb-8 bg-medina relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] amazigh-tribal pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold font-serif text-foreground mb-1">اهتماماتك</h2>
          <p className="text-xs text-muted-foreground">Choose what interests you / اختر اهتماماتك</p>
        </div>
        
        {/* Interests list */}
        <div className="flex-1 flex flex-col gap-2 pb-6 overflow-y-auto">
          {INTERESTS.map((interest, idx) => (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={cn(
                "flex items-center gap-3.5 p-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm",
                selectedInterests.includes(interest.id)
                  ? "border-turath-saffron bg-turath-saffron/25 shadow-md ring-2 ring-turath-saffron/20"
                  : "border-turath-earth/40 bg-white/60 hover:border-turath-saffron/60 hover:bg-turath-saffron/15 hover:shadow-md"
              )}
              style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.05}s both` }}
            >
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 border-1.5",
                selectedInterests.includes(interest.id) 
                  ? "bg-gradient-to-br from-turath-red to-turath-earth border-turath-saffron/50 shadow-md" 
                  : "bg-turath-silk/60 border-turath-earth/30 hover:bg-turath-saffron/20 hover:border-turath-saffron/40 hover:shadow-sm"
              )}>
                <InterestIcon 
                  interest={interest.id} 
                  selected={selectedInterests.includes(interest.id)}
                />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="font-semibold text-sm text-foreground">{interest.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5" dir="rtl">{interest.labelAr}</p>
              </div>
              {selectedInterests.includes(interest.id) && (
                <div className="w-5 h-5 bg-turath-saffron rounded-md flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3 h-3 text-turath-charcoal" />
                </div>
              )}
            </button>
          ))}
        </div>
        
        {/* CTA button */}
        <button
          onClick={() => navigate('home-map')}
          disabled={selectedInterests.length === 0}
          className={cn(
            "w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2",
            selectedInterests.length > 0
              ? "bg-gradient-to-r from-turath-green to-turath-green-dark text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border border-turath-saffron/40"
              : "bg-turath-silk text-muted-foreground cursor-not-allowed"
          )}
        >
          <span>استكشف</span>
          {selectedInterests.length > 0 && <ChevronRightIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

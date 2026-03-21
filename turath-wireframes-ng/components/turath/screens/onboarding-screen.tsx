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
      <div className="h-full flex flex-col items-center justify-center px-8 pt-12 pb-8 relative overflow-hidden bg-gradient-to-b from-turath-parchment via-turath-silk to-turath-parchment">
        {/* Layered cultural background patterns */}
        <div className="absolute inset-0 opacity-[0.08] zellige-ornate pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] arabesque-ornate pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] calligraphy-flourish pointer-events-none" />
        
        {/* Ambient glow elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-turath-saffron/20 blur-3xl" />
        <div className="absolute bottom-32 right-8 w-40 h-40 rounded-full bg-turath-red/15 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center majestic-scale">
          {/* Premium icon with enhanced styling */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-turath-red via-turath-majorelle to-turath-saffron blur-xl opacity-50" />
            <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-turath-red via-turath-majorelle to-turath-saffron flex items-center justify-center shadow-2xl saffron-glow border-2 border-turath-saffron/30">
              <svg className="w-16 h-16 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          
          {/* Premium text hierarchy */}
          <h1 className="text-6xl font-bold font-serif text-foreground mb-3 drop-shadow-md text-balance">Turath</h1>
          <div className="flex flex-col items-center gap-2 mb-6">
            <h2 className="text-5xl font-serif text-turath-red drop-shadow-md font-bold" dir="rtl">تراث</h2>
            <div className="flex items-center gap-3 opacity-90">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-turath-earth/50" />
              <h3 className="text-2xl font-sans text-turath-indigo font-semibold tracking-widest">ⵜⴰⵢⵙⵉ</h3>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-turath-earth/50" />
            </div>
          </div>
          
          {/* Premium tagline */}
          <p className="text-center text-muted-foreground text-base mb-14 max-w-xs leading-relaxed font-medium">
            Discover Morocco&apos;s living heritage, Amazigh traditions, and artisan mastery
          </p>
          
          {/* Premium CTA button */}
          <button
            onClick={() => setStep('language')}
            className="w-full max-w-xs py-4 px-8 bg-gradient-to-r from-turath-red to-turath-red-dark text-white rounded-2xl font-bold font-serif text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-turath-saffron/30 group"
          >
            <span>Begin Journey</span>
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Trust signal */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-turath-red" />
              <span className="text-xs text-muted-foreground font-medium">Celebrating Moroccan & Amazigh Culture</span>
              <div className="w-1.5 h-1.5 rounded-full bg-turath-green" />
            </div>
            <p className="text-xs text-muted-foreground/70">Preserving traditions for future generations</p>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'language') {
    return (
      <div className="h-full flex flex-col pt-12 px-6 pb-8 bg-gradient-to-b from-turath-parchment to-turath-silk relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] zellige-pattern pointer-events-none" />
        
        <div className="relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-2">Choose Your Language</h2>
            <p className="text-sm text-muted-foreground">Select your preferred language to continue</p>
          </div>
          
          <div className="flex-1 overflow-y-auto pb-6">
            <div className="grid grid-cols-2 gap-3">
              {LANGUAGES.map((lang, idx) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300",
                    selectedLanguage === lang.code
                      ? "border-turath-saffron bg-turath-saffron/15 shadow-md"
                      : "border-turath-silk bg-card hover:border-turath-saffron/30 hover:bg-turath-saffron/5"
                  )}
                  style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.05}s both` }}
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <div className="text-center">
                    <p className="font-bold text-sm text-foreground">{lang.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{lang.nativeName}</p>
                  </div>
                  {selectedLanguage === lang.code && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-turath-saffron rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setStep('interests')}
            disabled={!selectedLanguage}
            className={cn(
              "w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all mt-4 duration-300 flex items-center justify-center gap-2",
              selectedLanguage
                ? "bg-gradient-to-r from-turath-red to-turath-red-dark text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border border-turath-saffron/20"
                : "bg-turath-silk text-muted-foreground cursor-not-allowed"
            )}
          >
            <span>Continue</span>
            {selectedLanguage && <ChevronRightIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col pt-12 px-6 pb-8 bg-gradient-to-b from-turath-parchment via-turath-silk to-turath-parchment relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] amazigh-tribal pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-2">What Interests You?</h2>
          <p className="text-sm text-muted-foreground">Select topics you&apos;d like to explore</p>
        </div>
        
        <div className="flex-1 flex flex-col gap-3 pb-6">
          {INTERESTS.map((interest, idx) => (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={cn(
                "flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300",
                selectedInterests.includes(interest.id)
                  ? "border-turath-saffron bg-turath-saffron/15 shadow-md"
                  : "border-turath-silk bg-card hover:border-turath-saffron/30 hover:bg-turath-saffron/5"
              )}
              style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.06}s both` }}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 border",
                  selectedInterests.includes(interest.id) 
                    ? "bg-gradient-to-br from-turath-red to-turath-earth border-turath-saffron/30" 
                    : "bg-turath-silk border-turath-silk hover:bg-turath-saffron/10"
                )}>
                  <InterestIcon 
                    interest={interest.id} 
                    selected={selectedInterests.includes(interest.id)}
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">{interest.label}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-muted-foreground font-serif" dir="rtl">{interest.labelAr}</p>
                    <span className="text-xs text-muted-foreground/30">·</span>
                    <p className="text-xs text-muted-foreground font-sans tracking-wide">{interest.labelAmz}</p>
                  </div>
                </div>
              </div>
              {selectedInterests.includes(interest.id) && (
                <div className="w-6 h-6 bg-turath-saffron rounded-lg flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-turath-charcoal" />
                </div>
              )}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => navigate('home-map')}
          disabled={selectedInterests.length === 0}
          className={cn(
            "w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all mt-4 flex items-center justify-center gap-2 duration-300",
            selectedInterests.length > 0
              ? "bg-gradient-to-r from-turath-green to-turath-green-dark text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border border-turath-saffron/20"
              : "bg-turath-silk text-muted-foreground cursor-not-allowed"
          )}
        >
          <span>Begin Exploration</span>
          {selectedInterests.length > 0 && <ChevronRightIcon className="w-5 h-5" />}
        </button>
        
        {/* Cultural tagline */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="font-serif" dir="rtl">استكشف تراثك</span>
            <span className="mx-1 opacity-50">·</span>
            <span className="font-sans tracking-wide">ⴰⴱⴷⵉ ⵉⵜⵓⵙⵙⴳⵓ</span>
          </p>
        </div>
      </div>
    </div>
  )
}

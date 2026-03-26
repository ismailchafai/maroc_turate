"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Locale = 'fr' | 'ar' | 'en' | 'tzm'

interface TranslationData {
  [key: string]: any
}

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, defaultValue?: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Locale, TranslationData> = {
  fr: {},
  ar: {},
  en: {},
  tzm: {},
}

// Load translations (they will be imported dynamically)
let translationsLoaded = false

async function loadTranslations() {
  if (translationsLoaded) return
  
  try {
    const [fr, ar, en, tzm] = await Promise.all([
      import('@/locales/fr.json').then(m => m.default),
      import('@/locales/ar.json').then(m => m.default),
      import('@/locales/en.json').then(m => m.default),
      import('@/locales/tzm.json').then(m => m.default),
    ])
    
    translations.fr = fr
    translations.ar = ar
    translations.en = en
    translations.tzm = tzm
    translationsLoaded = true
  } catch (error) {
    console.error("[v0] Failed to load translations:", error)
  }
}

// Initialize translations immediately
loadTranslations()

function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return key as fallback
    }
  }
  
  return typeof value === 'string' ? value : key
}

function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' || locale === 'tzm' ? 'rtl' : 'ltr'
}

function detectBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return 'fr'
  
  const browserLang = navigator.language.split('-')[0].toLowerCase()
  const supportedLocales: Locale[] = ['fr', 'ar', 'en', 'tzm']
  
  if (supportedLocales.includes(browserLang as Locale)) {
    return browserLang as Locale
  }
  
  return 'fr' // Default to French
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Try to get saved locale from localStorage
    const savedLocale = localStorage.getItem('app_locale') as Locale | null
    
    if (savedLocale && ['fr', 'ar', 'en', 'tzm'].includes(savedLocale)) {
      setLocaleState(savedLocale)
    } else {
      // Auto-detect browser language
      const detectedLocale = detectBrowserLanguage()
      setLocaleState(detectedLocale)
    }
  }, [])

  useEffect(() => {
    // Update localStorage when locale changes
    localStorage.setItem('app_locale', locale)
    
    // Update HTML attributes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
      document.documentElement.dir = getDirection(locale)
      
      // Update body dir attribute for RTL support
      if (getDirection(locale) === 'rtl') {
        document.body.classList.add('rtl-layout')
      } else {
        document.body.classList.remove('rtl-layout')
      }
    }
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  const t = (key: string, defaultValue?: string): string => {
    const translation = getTranslation(locale, key)
    return translation === key && defaultValue ? defaultValue : translation
  }

  const value: LanguageContextType = {
    locale,
    setLocale,
    t,
    dir: getDirection(locale),
  }

  // Don't render children until client-side hydration is complete to avoid mismatches
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider')
  }
  
  return context
}

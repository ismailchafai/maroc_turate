'use client';

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Component to display text in English, Arabic (Darija), and Amazigh (Tifinagh)
 * Follows the trilingual convention of the Turath app
 */
interface TrilingualTextProps {
  en: string;
  ar: string;
  amz: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'heading' | 'body' | 'caption';
  highlight?: boolean;
}

export function TrilingualText({
  en,
  ar,
  amz,
  className,
  size = 'md',
  variant = 'default',
  highlight = false
}: TrilingualTextProps) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
    '2xl': 'text-2xl'
  };

  const variantClasses = {
    default: 'font-sans text-foreground',
    heading: 'font-bold font-serif text-foreground',
    body: 'font-sans text-foreground/80',
    caption: 'font-sans text-muted-foreground'
  };

  return (
    <div className={cn('space-y-1', className)}>
      <p className={cn(sizeClasses[size], variantClasses[variant], highlight && 'text-turath-red font-bold')}>
        {en}
      </p>
      <p className={cn(sizeClasses[size], variantClasses[variant], 'font-serif', highlight && 'text-turath-red')} dir="rtl">
        {ar}
      </p>
      <p className={cn(sizeClasses[size], variantClasses[variant], 'font-sans tracking-wider opacity-90', highlight && 'text-turath-indigo font-semibold')} dir="ltr">
        {amz}
      </p>
    </div>
  );
}

/**
 * Language badge showing Amazigh Tifinagh script
 */
interface LanguageBadgeProps {
  lang: 'ar' | 'amz' | 'en' | 'all';
  text: string;
  className?: string;
}

export function LanguageBadge({ lang, text, className }: LanguageBadgeProps) {
  const getColor = () => {
    switch (lang) {
      case 'ar':
        return 'bg-turath-red/20 text-turath-red-dark border-turath-red/30';
      case 'amz':
        return 'bg-turath-indigo/20 text-turath-indigo-dark border-turath-indigo/30';
      case 'en':
        return 'bg-turath-majorelle/20 text-turath-majorelle-dark border-turath-majorelle/30';
      default:
        return 'bg-turath-saffron/20 text-turath-saffron-dark border-turath-saffron/30';
    }
  };

  const getLabel = () => {
    switch (lang) {
      case 'ar':
        return 'العربية';
      case 'amz':
        return 'ⵜⴰⵎⴰⵣⵉⴳⵜ';
      case 'en':
        return 'English';
      default:
        return 'Multilingual';
    }
  };

  return (
    <span className={cn('px-2.5 py-1 text-xs font-semibold rounded-full border', getColor(), className)}>
      {getLabel()}
    </span>
  );
}

/**
 * Amazigh proverb or saying component
 */
interface AmazighSayingProps {
  saying: string;
  translation: string;
  author?: string;
  className?: string;
}

export function AmazighSaying({ saying, translation, author, className }: AmazighSayingProps) {
  return (
    <div
      className={cn(
        'glass-premium rounded-2xl p-5 border border-turath-indigo/30 space-y-3',
        className
      )}
    >
      <blockquote className="space-y-2">
        <p className="text-lg font-sans tracking-wider text-turath-indigo font-semibold" dir="ltr">
          {saying}
        </p>
        <p className="text-sm text-foreground/70 italic">{translation}</p>
        {author && <p className="text-xs text-muted-foreground font-serif">— {author}</p>}
      </blockquote>
    </div>
  );
}

/**
 * Cultural calendar showing Amazigh months
 */
export const AMAZIGH_CALENDAR = [
  { num: 1, tifinagh: 'ⵉⵏⴰⵢⵔ', ar: 'يناير', en: 'January' },
  { num: 2, tifinagh: 'ⴱⵕⴰⵢ', ar: 'فبراير', en: 'February' },
  { num: 3, tifinagh: 'ⵎⴰⵔⵙ', ar: 'مارس', en: 'March' },
  { num: 4, tifinagh: 'ⵉⴱⵔⵉⵔ', ar: 'أبريل', en: 'April' },
  { num: 5, tifinagh: 'ⵎⴰⵢⵢⵓ', ar: 'مايو', en: 'May' },
  { num: 6, tifinagh: 'ⵢⵓⵏⵢⵓ', ar: 'يونيو', en: 'June' },
  { num: 7, tifinagh: 'ⵢⵓⵍⵢⵓ', ar: 'يوليو', en: 'July' },
  { num: 8, tifinagh: 'ⴰⴳⵓⵙⵜ', ar: 'أغسطس', en: 'August' },
  { num: 9, tifinagh: 'ⵙⵓⵜⴰⵏⴱⵔ', ar: 'سبتمبر', en: 'September' },
  { num: 10, tifinagh: 'ⴽⵜⵓⴱⵔ', ar: 'أكتوبر', en: 'October' },
  { num: 11, tifinagh: 'ⵏⵓⵡⴰⵏⴱⵔ', ar: 'نوفمبر', en: 'November' },
  { num: 12, tifinagh: 'ⴷⵓⵊⴰⵏⴱⵔ', ar: 'ديسمبر', en: 'December' }
];

interface CalendarMonthProps {
  month: number;
  className?: string;
}

export function CalendarMonth({ month, className }: CalendarMonthProps) {
  const m = AMAZIGH_CALENDAR.find(c => c.num === month);
  if (!m) return null;

  return (
    <div className={cn('text-center space-y-1', className)}>
      <p className="text-2xl font-sans tracking-widest text-turath-indigo font-bold">{m.tifinagh}</p>
      <p className="text-sm font-serif text-turath-red" dir="rtl">{m.ar}</p>
      <p className="text-xs text-muted-foreground">{m.en}</p>
    </div>
  );
}

/**
 * Amazigh numerals converter
 */
export const AMAZIGH_NUMERALS = {
  0: 'ⵀ',
  1: 'ⵉ',
  2: 'ⵙⵉⵏ',
  3: 'ⴽⵔⴰⵏ',
  4: 'ⴰⴽⵓⵔ',
  5: 'ⵅⵎⵎⴻⵙ',
  6: 'ⵙⴰⴹⵉⵙ',
  7: 'ⴱⵡⴰ',
  8: 'ⵜⴰⵎⵎ',
  9: 'ⵜⵣⴰ',
  10: 'ⵎⵔⴰⵡ'
};

export function AmazighNumeral({ num }: { num: number }) {
  const numeral = AMAZIGH_NUMERALS[num as keyof typeof AMAZIGH_NUMERALS];
  return <span className="font-sans text-turath-indigo font-bold tracking-wider">{numeral}</span>;
}

'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'es'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * Wrap a page in this provider to make the header's EN/ES switch control
 * that page's language. Pages without the provider keep the Navigation's
 * own local (visual-only) language state.
 */
export function LanguageProvider({ children, initial = 'en' }: { children: ReactNode; initial?: Lang }) {
  const [lang, setLang] = useState<Lang>(initial)
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

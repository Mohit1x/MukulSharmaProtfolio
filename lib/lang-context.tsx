'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { content, Lang } from './i18n'

type LangContextType = {
  lang: Lang
  t: typeof content.en
  toggleLang: () => void
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: content.en,
  toggleLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggleLang = () => setLang((l) => (l === 'en' ? 'hi' : 'en'))
  return (
    <LangContext.Provider value={{ lang, t: content[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

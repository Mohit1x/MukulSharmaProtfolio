'use client'

import { useLang } from '@/lib/lang-context'

export default function Footer() {
  const { t, lang } = useLang()
  const f = t.footer

  return (
    <footer className={`bg-card border-t border-border py-12 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-accent mb-2">MS</div>
            <p className="text-foreground/60">{f.tagline}</p>
          </div>

          <div className="flex gap-6">
            <a href="mailto:mukulsharma0201@gmail.com" className="text-foreground/60 hover:text-accent transition-colors">
              Email
            </a>
            <a href="https://wa.me/919024453508" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              WhatsApp
            </a>
            <a href="tel:+919024453508" className="text-foreground/60 hover:text-accent transition-colors">
              Phone
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/50 text-sm">
          <p>{f.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

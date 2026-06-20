'use client'

import { useLang } from '@/lib/lang-context'

export default function Hero() {
  const { t, lang } = useLang()
  const h = t.hero

  return (
    <section className={`min-h-screen flex items-center justify-center relative pt-24 sm:pt-32 pb-12 sm:pb-0 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
          {h.greeting} <span className="text-accent">{h.name}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8">
          {h.tagline}
        </p>

        <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          {h.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-20">
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity inline-block"
          >
            {h.bookDemo}
          </a>
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-lg font-semibold text-sm sm:text-base hover:bg-accent/10 transition-colors inline-block"
          >
            {h.learnMore}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 sm:pt-12 border-t border-border">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">2+</div>
            <p className="text-muted-foreground text-xs sm:text-sm">{h.stats.years}</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">50+</div>
            <p className="text-muted-foreground text-xs sm:text-sm">{h.stats.students}</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">100%</div>
            <p className="text-muted-foreground text-xs sm:text-sm">{h.stats.passion}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

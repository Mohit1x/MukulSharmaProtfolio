'use client'

import { useLang } from '@/lib/lang-context'
import Image from 'next/image'

export default function Hero() {
  const { t, lang } = useLang()
  const h = t.hero

  return (
    <section className={`min-h-screen flex items-center justify-center relative pt-24 sm:pt-32 pb-12 sm:pb-0 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Avatar Section */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/20 bg-gradient-to-br from-accent/10 to-primary/10 p-2">
                <Image
                  src="/avatar.png"
                  alt="Mukul Sharma"
                  fill
                  className="object-cover rounded-full"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent-foreground rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {h.greeting} <span className="text-accent block sm:inline">{h.name}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 sm:mb-6">
              {h.tagline}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-xl lg:max-w-none mb-6 sm:mb-8 leading-relaxed">
              {h.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-sm sm:text-base hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/25"
              >
                {h.bookDemo}
              </a>
              <a
                href="#about"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-xl font-semibold text-sm sm:text-base hover:bg-accent/10 hover:scale-105 transition-all duration-300"
              >
                {h.learnMore}
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-16 mt-8 sm:mt-16 border-t border-border/50">
          <div className="text-center p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/20 hover:border-accent/30 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">2+</div>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">{h.stats.years}</p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/20 hover:border-accent/30 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">50+</div>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">{h.stats.students}</p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/20 hover:border-accent/30 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">100%</div>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">{h.stats.passion}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

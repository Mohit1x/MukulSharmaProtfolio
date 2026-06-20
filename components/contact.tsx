'use client'

import { useLang } from '@/lib/lang-context'

export default function Contact() {
  const { t, lang } = useLang()
  const c = t.contact

  return (
    <section id="contact" className={`py-12 sm:py-16 md:py-24 bg-card/30 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            {c.heading} <span className="text-accent">{c.headingAccent}</span>
          </h2>
          <p className="text-sm md:text-lg text-foreground/60">{c.subheading}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card rounded-lg p-4 md:p-8 border border-border">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-8">{c.info.title}</h3>
              <div className="space-y-4 md:space-y-6">
                <a href="tel:+919024453508" className="flex items-start gap-3 md:gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg md:text-xl">📞</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground/60 text-xs md:text-sm mb-1">{c.info.phone}</p>
                    <p className="text-foreground text-sm md:text-lg font-semibold break-all">9024453508</p>
                  </div>
                </a>

                <a href="mailto:mukulsharma0201@gmail.com" className="flex items-start gap-3 md:gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg md:text-xl">📧</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground/60 text-xs md:text-sm mb-1">{c.info.email}</p>
                    <p className="text-foreground text-sm md:text-lg font-semibold break-all">mukulsharma0201@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg md:text-xl">📍</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground/60 text-xs md:text-sm mb-1">{c.info.location}</p>
                    <p className="text-foreground text-sm md:text-lg font-semibold">{c.info.locationVal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg md:text-xl">💬</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground/60 text-xs md:text-sm mb-1">{c.info.whatsapp}</p>
                    <a
                      href="https://wa.me/919024453508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground text-sm md:text-lg font-semibold hover:text-accent transition-colors"
                    >
                      {c.info.whatsappLabel}
                    </a>
                    <p className="text-foreground/60 text-xs md:text-sm mt-2">{c.info.whatsappNote}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-4 md:p-8 border border-accent/20">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">{c.why.title}</h3>
              <p className="text-sm md:text-base text-foreground/70 italic">{c.why.quote}</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

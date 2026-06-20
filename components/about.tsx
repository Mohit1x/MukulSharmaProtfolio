'use client'

import { useLang } from '@/lib/lang-context'

export default function About() {
  const { t, lang } = useLang()
  const a = t.about

  return (
    <section id="about" className={`py-12 sm:py-16 md:py-24 bg-card/30 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              {a.heading} <span className="text-accent">{a.headingAccent}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-4 md:mb-6 leading-relaxed">
              {a.p1}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 md:mb-8 leading-relaxed">
              {a.p2}
            </p>
            <div className="space-y-3 md:space-y-4">
              {[
                { title: a.style.s1title, desc: a.style.s1desc },
                { title: a.style.s2title, desc: a.style.s2desc },
                { title: a.style.s3title, desc: a.style.s3desc },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm md:text-base">✓</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-foreground/60 text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-4 md:p-8 border border-accent/20">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">{a.style.title}</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-foreground/70">
                {[a.style.b1, a.style.b2, a.style.b3].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

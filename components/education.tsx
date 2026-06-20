'use client'

import { useLang } from '@/lib/lang-context'

const educationData = [
  { degreeKey: 'B.Ed', subject: 'First Class', subjectHi: 'प्रथम श्रेणी', percentage: '82%', icon: '🎓' },
  { degreeKey: 'M.Sc. Chemistry', subject: 'First Class', subjectHi: 'प्रथम श्रेणी', percentage: '75%', icon: '🧪' },
  { degreeKey: 'B.Sc. Chemistry', subject: 'First Class', subjectHi: 'प्रथम श्रेणी', percentage: '82%', icon: '⚗️' },
  { degreeKey: 'Class 12', degreeKeyHi: 'कक्षा 12', subject: 'CBSE/RBSE', subjectHi: 'सीबीएसई/आरबीएसई', percentage: '89.60%', icon: '📚' },
]

export default function Education() {
  const { t, lang } = useLang()
  const e = t.education

  return (
    <section id="education" className={`py-12 sm:py-16 md:py-24 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            <span className="text-accent">{e.heading}</span> {e.headingSuffix}
          </h2>
          <p className="text-sm md:text-lg text-foreground/60">{e.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 md:p-8 border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">
                {lang === 'hi' && item.degreeKeyHi ? item.degreeKeyHi : item.degreeKey}
              </h3>
              <p className="text-sm md:text-base text-foreground/60 mb-3 md:mb-4">
                {lang === 'hi' ? item.subjectHi : item.subject}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                    style={{ width: `${parseFloat(item.percentage)}%` }}
                  ></div>
                </div>
                <span className="text-accent font-bold">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent/10 via-transparent to-primary/10 rounded-lg p-4 md:p-12 border border-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">{e.experience.title}</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-accent mb-2 md:mb-3">{e.experience.role}</h4>
              <p className="text-sm md:text-base text-foreground/70 mb-3 md:mb-4">{e.experience.period}</p>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-foreground/60">
                {e.experience.points.map((point) => (
                  <li key={point}>✓ {point}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-accent mb-2 md:mb-3">{e.experience.subjects}</h4>
              <div className="space-y-2 md:space-y-3">
                {[
                  { label: e.experience.class910label, val: e.experience.class910val },
                  { label: e.experience.class1112label, val: e.experience.class1112val },
                  { label: e.experience.boardlabel, val: e.experience.boardval },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-sm md:text-base text-foreground/80 font-medium mb-1 md:mb-2">{item.label}</p>
                    <p className="text-xs md:text-sm text-foreground/60">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

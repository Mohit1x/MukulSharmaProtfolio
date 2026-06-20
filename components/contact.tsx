'use client'

import { FormEvent, useState } from 'react'
import { useLang } from '@/lib/lang-context'

export default function Contact() {
  const { t, lang } = useLang()
  const c = t.contact

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Failed to send email')
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(c.form.errorNote)
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className={`py-12 sm:py-16 md:py-24 bg-card/30 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            {c.heading} <span className="text-accent">{c.headingAccent}</span>
          </h2>
          <p className="text-sm md:text-lg text-foreground/60">{c.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card rounded-lg p-4 md:p-8 border border-border">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-8">{c.info.title}</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg md:text-xl">📞</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground/60 text-xs md:text-sm mb-1">{c.info.phone}</p>
                    <a href="tel:+919024453508" className="text-foreground text-sm md:text-lg font-semibold hover:text-accent transition-colors break-all">
                      9024453508
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg md:text-xl">📧</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground/60 text-xs md:text-sm mb-1">{c.info.email}</p>
                    <a href="mailto:mukulsharma0201@gmail.com" className="text-foreground text-sm md:text-lg font-semibold hover:text-accent transition-colors break-all">
                      mukulsharma0201@gmail.com
                    </a>
                  </div>
                </div>

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

          <div className="bg-card rounded-lg p-4 md:p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">{c.form.title}</h3>
            {submitted ? (
              <div className="flex items-center justify-center h-64 bg-accent/10 rounded-lg border border-accent/30">
                <div className="text-center">
                  <p className="text-2xl mb-2">✓</p>
                  <p className="text-lg font-semibold text-accent">{c.form.successTitle}</p>
                  <p className="text-foreground/60 mt-2">{c.form.successNote}</p>
                </div>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-sm text-red-500">{error}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                      {c.form.name}
                    </label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-background border border-border rounded-lg text-sm md:text-base text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder={c.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                      {c.form.email}
                    </label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-background border border-border rounded-lg text-sm md:text-base text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder={c.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                      {c.form.message}
                    </label>
                    <textarea
                      id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-background border border-border rounded-lg text-sm md:text-base text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder={c.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  <button
                    type="submit" disabled={loading}
                    className="w-full px-4 md:px-6 py-2 md:py-3 bg-accent text-accent-foreground rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? c.form.sending : c.form.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

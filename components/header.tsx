'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/lang-context'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { lang, t, toggleLang } = useLang()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold text-primary">MS</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          <a href="#about" className="text-sm lg:text-base text-foreground/80 hover:text-accent transition-colors">
            {t.nav.about}
          </a>
          <a href="#education" className="text-sm lg:text-base text-foreground/80 hover:text-accent transition-colors">
            {t.nav.education}
          </a>
          <a href="#contact" className="text-sm lg:text-base text-foreground/80 hover:text-accent transition-colors">
            {t.nav.contact}
          </a>
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 border border-accent text-accent rounded-md text-sm font-semibold hover:bg-accent/10 transition-colors"
          >
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>
          <a
            href="#contact"
            className="px-4 lg:px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm lg:text-base hover:opacity-90 transition-opacity"
          >
            {t.nav.getInTouch}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 border border-accent text-accent rounded-md text-xs font-semibold hover:bg-accent/10 transition-colors"
          >
            {lang === 'en' ? 'हिंदी' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <a href="#about" onClick={handleNavClick} className="block text-foreground/80 hover:text-accent transition-colors py-2">
              {t.nav.about}
            </a>
            <a href="#education" onClick={handleNavClick} className="block text-foreground/80 hover:text-accent transition-colors py-2">
              {t.nav.education}
            </a>
            <a href="#contact" onClick={handleNavClick} className="block text-foreground/80 hover:text-accent transition-colors py-2">
              {t.nav.contact}
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-center hover:opacity-90 transition-opacity"
            >
              {t.nav.getInTouch}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

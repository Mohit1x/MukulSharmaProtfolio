'use client'

import { useLang } from '@/lib/lang-context'

export default function Testimonials() {
  const { t, lang } = useLang()
  const testimonials = t.testimonials

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials" className={`py-16 sm:py-24 bg-card/20 ${lang === 'hi' ? 'font-[var(--font-devanagari)]' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {testimonials.heading} <span className="text-accent">{testimonials.headingAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.reviews.map((review, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 sm:p-8 hover:border-accent/30 transition-all duration-300 hover:scale-105 group"
            >
              {/* Student Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center border-2 border-accent/20">
                  <span className="text-accent font-bold text-lg sm:text-xl">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{review.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{review.class}</p>
                  <p className="text-accent text-xs sm:text-sm font-medium">{review.subject}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground/90 text-sm sm:text-base leading-relaxed mb-4 italic">
                "{review.text}"
              </blockquote>

              {/* Achievement Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {review.achievement}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              {lang === 'en' ? 'Ready to Join Them?' : 'इनके साथ जुड़ने को तैयार हैं?'}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              {lang === 'en' 
                ? 'Experience the same success and clarity in Chemistry. Book your demo class today!'
                : 'केमिस्ट्री में वही सफलता और स्पष्टता का अनुभव करें। आज ही अपना डेमो क्लास बुक करें!'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-sm sm:text-base hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/25"
              >
                {lang === 'en' ? 'Book Demo Class' : 'डेमो क्लास बुक करें'}
              </a>
              <a
                href="https://wa.me/1234567890"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-xl font-semibold text-sm sm:text-base hover:bg-accent/10 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
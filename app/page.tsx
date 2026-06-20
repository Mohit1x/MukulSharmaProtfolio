import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Education from '@/components/education'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

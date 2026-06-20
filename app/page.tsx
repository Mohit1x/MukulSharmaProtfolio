import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Education from '@/components/education'
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}

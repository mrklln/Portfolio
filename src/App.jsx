import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Techstack from './components/Techstack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import Resume from './components/Resume'

const sectionIds = ['home', 'about', 'resume', 'techstack', 'projects', 'contact']

const sectionClass =
  'min-h-[calc(100vh-4rem)] scroll-mt-16 flex flex-col justify-center py-10'

const innerClass = 'w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'

const dots =
  'bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-white)_20%,transparent)_1px,transparent_1px)] [background-size:24px_24px]'

function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-800">
      <Navbar active={active} />

      <Home />
      <main className="flex-1">
        <div id="about" className={`${sectionClass} ${dots}`}>
          <div className={innerClass}>
            <Reveal><About /></Reveal>
          </div>
        </div>
        <div id="resume" className={sectionClass}>
          <Reveal><Resume /></Reveal>
        </div>
        <div id="techstack" className={sectionClass}>
          <Reveal><Techstack /></Reveal>
        </div>
        <div id="projects" className={sectionClass}>
          <Reveal><Projects /></Reveal>
        </div>
        <div id="contact" className={sectionClass}>
          <Reveal><Contact /></Reveal>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
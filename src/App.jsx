import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']

// Shared classes: each section fills the screen below the navbar
const sectionClass =
  'min-h-[calc(100vh-4rem)] scroll-mt-16 flex flex-col justify-center py-10'

const innerClass = 'w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'


const dots =
  'bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]'


function App() {
  const [active, setActive] = useState('home')

  // Highlights the navbar button for the section you're viewing
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
        <div id="skills" className={sectionClass}>
          <Reveal><Skills /></Reveal>
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
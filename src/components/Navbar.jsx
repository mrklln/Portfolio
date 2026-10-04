import { useState } from 'react'
import logo from '../assets/Logo.png'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ active }) {
  const [open, setOpen] = useState(false)

  const linkClass = (id) =>
    `px-3 py-1 border-b-2 transition-all duration-300 ${
      active === id ? 'border-yellow-700 text-yellow-700' : 'border-transparent text-white hover:text-yellow-700 hover:border-yellow-700'
    }`

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-neutral-950/70 backdrop-blur-md shadow">
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-20 w-18 object-cover" />
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl"aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>

        <ul className="hidden md:flex gap-2">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={linkClass(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setOpen(false)} className={`block ${linkClass(link.id)}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
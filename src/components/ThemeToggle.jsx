import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ThemeToggle() {
  const [light, setLight] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'light'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark')
    } catch {
      // storage unavailable, ignore
    }
  }, [light])

  return (
    <button
      onClick={() => setLight(!light)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className="w-9 h-9 rounded-full border border-white/10 bg-white/5 text-yellow-600 flex items-center justify-center hover:bg-yellow-600 hover:text-gray-900 transition-colors"
    >
      {light ? <FaMoon size={16} /> : <FaSun size={16} />}
    </button>
  )
}

export default ThemeToggle
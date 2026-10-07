import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Reveal from './Reveal'

const USERNAME = 'mrklln'
const featured = []

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repos')
        return res.json()
      })
      .then((data) => {
        let list = data.filter((repo) => !repo.fork)
        if (featured.length > 0) {
          list = featured
            .map((name) => list.find((repo) => repo.name === name))
            .filter(Boolean)
        }
        setRepos(list)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
  }

  const arrowClass =
    'hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white text-xl items-center justify-center hover:bg-yellow-600 hover:text-gray-900 hover:border-yellow-600 transition-colors'

  return (
    <section className="py-4">
      <p className="text-yellow-600 font-semibold text-center">My work</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mt-1 mb-10">
        Pro<span className="text-yellow-600">jects</span>
      </h2>

      {loading && <p className="text-gray-400 text-center">Loading...</p>}

      {error && (
        <p className="text-gray-400 text-center">
          Failed to load projects ({error}). Visit my{' '}
          <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="text-yellow-600 hover:underline">
            GitHub
          </a>{' '}
          instead.
        </p>
      )}

      {repos.length > 0 && (
        <Reveal>
          <div className="relative">
            <button onClick={() => scroll(-1)} aria-label="Scroll left" className={`${arrowClass} md:-left-1`}>
              ‹
            </button>
            <button onClick={() => scroll(1)} aria-label="Scroll right" className={`${arrowClass} md:-right-1`}>
              ›
            </button>

            <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-3 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {repos.map((repo) => (
                <div key={repo.id} className="snap-start shrink-0 w-72 sm:w-80 bg-white/5 border 
                border-white/10 rounded-2xl p-5 flex flex-col hover:border-yellow-600/60 hover:-translate-y-1 
                transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white break-words">
                    {repo.name.replace(/[-_]/g, ' ')}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 flex-1">
                    {repo.description || 'No description yet.'}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    {repo.language && (
                      <span className="bg-yellow-600/10 text-yellow-500 border border-yellow-600/30 px-2 py-0.5 rounded-full text-xs">
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="text-gray-400 text-xs">★ {repo.stargazers_count}</span>
                    )}
                  </div>

                  <div className="flex gap-5 mt-4 text-sm font-medium">
                    <a href={repo.html_url} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-500 transition-colors">
                      <FaGithub /> GitHub
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition-colors">
                        <FaExternalLinkAlt size={12} /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="hidden md:block text-center text-xs text-gray-500 mt-2">
              Scroll to see more →
            </p>
            <p className="md:hidden text-center text-xs text-gray-500 mt-2">
              Swipe to see more →
            </p>
          </div>
        </Reveal>
      )}
    </section>
  )
}

export default Projects
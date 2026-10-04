import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const USERNAME = 'mrklln'

const featured = []



function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`)
    .then((res) => {
      if(!res.ok) throw new Error("Failed to fetch repos")
        return res.json();
    }).then((data) => {
      let list = data.filter((repo) => !repo.fork && !repo.fork)
      if(featured.length > 0) {
        list = featured.map((name) => list.find((repo) => repo.name === name)).filter(Boolean)
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

  return (
    <section className="py-4">
      <p className="text-yellow-600 font-semibold text-center">My work</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mt-1 mb-10">
        Pro<span className="text-yellow-600">jects</span>
      </h2>

      {loading && <p className="text-gray-400 text-center">Loading...</p>}
      {error && (<p className="text-red-600 text-center">Failed to load projects. Visit my{' '}
        <a href={'https://github.com/${USERNAME}'} target="_blank" rel="noreferrer" className="text-yellow-600 hover:underline">Github</a>
        {' '}
         Instead.
        </p>
        )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo, index) => (
          <Reveal key={repo.id} delay={index * 120}>
            <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col hover:border-yellow-600/60 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white break-words">
                {repo.name.replace(/[-_]/g,'')}
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">
                {repos.description || 'No Description yet.'}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {repo.language && (
                  <span className="bg-yellow-600/10 text-yellow-500 border border-yellow-600/30 px-2 py-0.5 rounded-full text-xs">
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="text-gray-400 text-xs">★ {repo.stargazers_count}</span>
                )}
              </div>

              <div className="flex gap-4 mt-4 text-sm font-medium">
                <a href={repo.html_url} target="_blank" rel="noreferrer" classname="text-yellow-600 hover:underline">
                  GitHub →
                </a>
                {repo.homepage && (
                 <a href={repo.homepage} target="_blank" rel="noreferrer" classname="text-gray-300 hover:text-yellow-500">
                  Live demo ↗
                </a> 
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
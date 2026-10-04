import bg from '../assets/bg.mp4'
import Reveal from './Reveal'

function Home() {
  return (
    <section id="home" className="relative min-h-screen  scroll-mt-16 flex items-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden">
        <source src={bg} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Your content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-8">
            <div className="text-center md:text-left">
              <p className="text-yellow-600 font-semibold">Hello, I'm</p>
              <h2 className="text-3xl sm:text-4xl text-white lg:text-5xl font-bold mt-1">
                Mark Allen C. Salomon
              </h2>
              <p className="mt-3 text-white max-w-md">
                3rd Year BS Information Technology Student at Cavite State University - Tanza Campus.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-4 bg-yellow-600 text-gray-900 font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-yellow-700 transition-colors"
                >
                  View my projects
                  <span className="w-10 h-10 rounded-full bg-white text-yellow-600 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-blue-200 flex items-center justify-center text-5xl shrink-0">
              👋
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Home
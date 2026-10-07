import about from '../assets/about.png'

const skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Tailwind CSS', 'Git']

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-8">
      <div className="pointer-events-none absolute -z-10 left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-yellow-600/20 blur-3xl" />
      <img src={about} alt="Mark Allen Salomon" className="w-44 h-56 sm:w-52 sm:h-64 lg:w-60 lg:h-72 object-cover object-[50%_40%] rounded-2xl ring-2 ring-yellow-600/40 shrink-0"/>
      <section className="py-4">
        <h2 className="text-2xl text-yellow-700 sm:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-white max-w-2xl">
          I'm a student studying Information Technology at Cavite State University - Tanza Campus. I enjoy
          building simple, useful web apps and I'm always learning new things.
        </p>
        <p className="text-white max-w-2xl">
          Outside of coding, I enjoy gaming, reading manga/manhwa, and listening to music.
          I'm looking for opportunities to learn, build real projects, and grow as a web developer.
        </p>

        <div className="mt-10">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skills) => (
            <span key={skills}
              className="bg-yellow-600/10 text-yellow-500 border border-yellow-600/30 px-3 py-1 rounded-full text-sm  hover:bg-yellow-600 hover:text-gray-900 hover:border-yellow-600
              hover:-translate-y-1 hover:scale-110">
              {skills}
            </span>
          ))}
        </div>
      </div>
      </section>
    </div>
  )
}

export default About;
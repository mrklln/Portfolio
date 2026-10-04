const skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Tailwind CSS', 'Git']

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-8">
      <div className="pointer-events-none absolute -z-10 left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-yellow-600/20 blur-3xl" />
      <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-blue-200 flex items-center justify-center text-5xl shrink-0">
        👋
      </div>
      <section className="py-4">
        <h2 className="text-2xl text-yellow-700 sm:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-white max-w-2xl">
          I'm a student studying Information Technology at Cavite State University - Tanza Campus. I enjoy
          building simple, useful web apps and I'm always learning new things.
        </p>

        <h3 className="text-xl text-white font-semibold mt-8 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      
    </div>
  )
}

export default About;
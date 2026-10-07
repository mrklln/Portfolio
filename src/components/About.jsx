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

        <h3 className="text-xl text-white font-semibold mt-8 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="bg-blue-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
      
    </div>
  )
}

export default About;
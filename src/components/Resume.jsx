import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const education = [
  {
    title: 'BS Information Technology',
    place: 'Cavite State University - Tanza Campus',
    period: '2024 - Present',
    note: 'Currently 3rd year student.',
  },
  {
    title: 'Senior High School',
    place: 'Tanza National Trade School',
    period: '2017 - 2019',
    note: 'Computer Programming.',
  },
]

const experience = [
  {
    title: 'Web Developer, Personal Portfolio',
    place: 'Self-directed project',
    period: '2026',
    note: 'Designed and deployed this responsive portfolio with React, Vite, and Tailwind CSS, hosted on Vercel, with projects pulled live from my GitHub.',
  },
  {
    title: 'Web Development Projects (DCIT 26)',
    place: 'Cavite State University - Tanza Campus',
    period: '2026',
    note: 'Built a To-Do List app and a Calculator using React JS and TailwindCSS covering add, complete, and delete features and basic operations.',
  },
  {
    title: 'Bootstrap Project & Laboratory Projects (ITEC 75)',
    place: 'Cavite State University - Tanza Campus',
    period: 'Mid Year 2026',
    note: 'Created responsive web pages using the Bootstrap framework across several laboratory activities.',
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React JS', 'Tailwind CSS', 'MySQL', 'Java', 'GitHub', 'Vercel']

function Timeline({ items }) {
  return (
    <div className="relative border-l border-white/10 ml-3 space-y-6">
      {items.map((item) => (
        <div key={item.title} className="relative pl-6">
          <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-yellow-600 ring-4 ring-black" />
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-600/60 transition-colors duration-300">
            <p className="text-xs text-yellow-600 font-semibold">{item.period}</p>
            <h4 className="text-white font-semibold mt-1">{item.title}</h4>
            <p className="text-gray-300 text-sm">{item.place}</p>
            {item.note && <p className="text-gray-400 text-sm mt-2">{item.note}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

function Resume() {
  return (
    <section className="py-4">
      <p className="text-yellow-600 font-semibold text-center">My background</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mt-1">
        Re<span className="text-yellow-600">sume</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <h3 className="flex items-center gap-3 text-xl font-semibold text-white mb-5">
            <FaGraduationCap className="text-yellow-600" /> Education
          </h3>
          <Timeline items={education} />
        </div>

        <div>
          <h3 className="flex items-center gap-3 text-xl font-semibold text-white mb-5">
            <FaBriefcase className="text-yellow-600" /> Experience
          </h3>
          <Timeline items={experience} />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span key={skill}
              className="bg-yellow-600/10 text-yellow-500 border border-yellow-600/30 px-3 py-1 rounded-full text-sm  hover:bg-yellow-600 hover:text-gray-900 hover:border-yellow-600
              hover:-translate-y-1 hover:scale-110">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <a href={`${import.meta.env.BASE_URL}Mark-Allen-Salomon-Resume.pdf`} download="Mark-Allen-Salomon-Resume.pdf"
        className="group inline-flex items-center gap-4 bg-yellow-600 text-gray-900 font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-yellow-700 transition-colors">
          Download CV
          <span className="w-10 h-10 rounded-full bg-white text-yellow-600 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
            <FaDownload />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Resume
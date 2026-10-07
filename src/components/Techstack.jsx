import Reveal from './Reveal'
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGithub, FaJava, FaCode } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiVercel } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'React JS', icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'GitHub', icon: FaGithub, color: 'var(--color-white)' },
  { name: 'Vercel', icon: SiVercel, color: 'var(--color-white)' },
  { name: 'VS Code', icon: FaCode, color: '#2F9BE8' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
]

function Skills() {
  return (
    <section className="py-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-10">
        Tech <span className="text-yellow-600">Stack</span>
      </h2>

      <div className="bg-white/5 border border-white/10 [html.light_&]:border-white/25 rounded-2xl p-4 sm:p-6">
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Reveal key={skill.name} delay={index * 80} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.7rem)] lg:w-[calc(20%-0.8rem)]">
                <div className="group h-full bg-black/60 border border-white/5 [html.light_&]:border-white/20 [html.light_&]:shadow-sm rounded-xl py-6 flex flex-col items-center gap-3 hover:border-yellow-600/60 hover:-translate-y-1 transition-all duration-300">
                  <Icon size={36} style={{ color: skill.color }} className="transition-transform duration-300 group-hover:scale-110"/>
                  <span className="text-sm font-medium text-gray-200">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
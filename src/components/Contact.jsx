import { useState } from 'react'
import { FaGithub, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'

const EMAIL = 'markallensalomon@gmail.com'

const contacts = [
  {
    label: 'Github',
    value: 'github.com/mrklln',
    href: 'https://github.com/mrklln',
    icon: FaGithub,
  },
  {
    label: 'Facebook',
    value: 'Mark Allen Salomon',
    href: 'https://www.facebook.com/profile.php?id=61590649035123',
    icon: FaFacebook,
  },
]
const inputClass = 'w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-600 transition-colors'


function Contact() {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }


  return (
    <section className="py-4">
      <p className="text-yellow-600 font-semibold text-center">Get in touch</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mt-1">
        Contact <span className="text-yellow-600">Me</span>
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Feel free to reach out through any of these.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">






        
        <div className="space-y-3">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-600/60 hover:-translate-y-0.5 transition-all duration-300">
                <span className="w-11 h-11 rounded-full bg-yellow-600/10 text-yellow-500 flex items-center justify-center shrink-0 group-hover:bg-yellow-600 group-hover:text-gray-900 transition-colors">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-gray-500">
                    {item.label}
                  </span>
                  <span className="block text-gray-200 truncate">{item.value}</span>
                </span>
              </a>
            )
          })}

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="w-11 h-11 rounded-full bg-yellow-600/10 text-yellow-500 flex items-center justify-center shrink-0">
              <FaMapMarkerAlt size={20} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-gray-500">
                Location
              </span>
              <span className="block text-gray-200">Cavite, Philippines</span>
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass}/>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required className={inputClass}/>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows={5} required className={`${inputClass} resize-none`}/>
          <button type="submit" className="group inline-flex items-center gap-4 bg-yellow-600 text-gray-900 font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-yellow-700 transition-colors">
            Send message
            <span className="w-10 h-10 rounded-full bg-white text-yellow-600 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2.5"strokeLinecap="round"strokeLinejoin="round"className="w-5 h-5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
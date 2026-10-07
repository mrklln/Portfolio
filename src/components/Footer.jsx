import { FaGithub, FaFacebook } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume'},
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/mrklln', icon: FaGithub },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590649035123',
    icon: FaFacebook,
  },
]


function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
  
          <div>
            <h3 className="text-xl font-bold text-white">
              Mark Allen <span className="text-yellow-600">Salomon</span>
            </h3>
            <p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto md:mx-0">
              IT student building simple, useful web apps with React and Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-yellow-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Connect
            </h4>
            <div className="flex justify-center md:justify-start gap-3">
              {socials.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"aria-label={item.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-yellow-600 hover:text-gray-900 hover:border-yellow-600 hover:-translate-y-1 transition-all duration-300">
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mark Allen C. Salomon. All rights reserved.</p>
          <a href="#home" className="group inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors">
            Back to top
            <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-600 group-hover:text-gray-900 group-hover:border-yellow-600 group-hover:-translate-y-1 transition-all duration-300">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
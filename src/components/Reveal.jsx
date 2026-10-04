import { useEffect, useRef, useState } from 'react'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entery]) => {
        setVisible(entery.isIntersecting)
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ transitionDelay: visible ?`${delay}ms` : '0ms' }} className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  )
}

export default Reveal
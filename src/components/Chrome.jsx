import { useEffect, useState } from 'react'
import { motion, useMotionValue, useScroll, useSpring } from 'framer-motion'
import { useLang } from '../i18n.jsx'

export function Backdrop() {
  return (
    <div className="backdrop">
      <div className="glow" />
    </div>
  )
}

export function CursorGlow() {
  const x = useMotionValue(-600)
  const y = useMotionValue(-600)
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return <motion.div className="cursor-glow" style={{ left: sx, top: sy }} />
}

export function Nav() {
  const { lang, setLang, t } = useLang()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  const [pill, setPill] = useState({ left: 3, width: 0 })

  useEffect(() => {
    const btn = document.querySelector(`.lang-toggle button[data-lang="${lang}"]`)
    if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth })
  }, [lang])

  const links = [
    ['#about', t.nav.about],
    ['#experience', t.nav.experience],
    ['#projects', t.nav.projects],
    ['#contact', t.nav.contact],
  ]

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          DK<span>.</span>
        </a>
        <nav className="nav-links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="lang-toggle">
          <motion.div
            className="lang-pill"
            animate={{ left: pill.left, width: pill.width }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          />
          {['ru', 'en'].map((l) => (
            <button
              key={l}
              data-lang={l}
              className={lang === l ? 'active' : ''}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <motion.div className="scroll-progress" style={{ scaleX }} />
    </header>
  )
}

export function SectionHead({ index, title }) {
  return (
    <motion.div
      className="section-head"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-index">{index} /</span>
      <h2 className="section-title">{title}</h2>
    </motion.div>
  )
}

export function Reveal({ children, delay = 0, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

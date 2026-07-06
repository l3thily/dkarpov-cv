import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, animate } from 'framer-motion'
import { useLang } from '../i18n.jsx'

function RotatingRole({ roles }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <div className="hero-role">
      <span style={{ color: 'var(--dim)' }}>&gt;</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
      <span className="caret" />
    </div>
  )
}

function Counter({ value, suffix, text }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || text) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, text])

  return (
    <span ref={ref} className="stat-value">
      {text || display}
      {suffix ? <span className="suffix">{suffix}</span> : null}
    </span>
  )
}

const lineAnim = {
  hidden: { y: '110%' },
  show: (d) => ({
    y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const { lang, t } = useLang()

  return (
    <section className="hero container" id="top">
      <motion.p
        className="hero-eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {t.hero.eyebrow}
      </motion.p>

      <h1 className="hero-name" key={lang}>
        <span className="line">
          <motion.span className="inner" variants={lineAnim} initial="hidden" animate="show" custom={0.15}>
            {t.hero.name1}
          </motion.span>
        </span>
        <span className="line">
          <motion.span className="inner" variants={lineAnim} initial="hidden" animate="show" custom={0.3}>
            {t.hero.name2}
          </motion.span>
        </span>
      </h1>

      <RotatingRole roles={t.hero.roles} />

      <motion.p
        className="hero-statement"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        {t.hero.statement}
      </motion.p>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
      >
        {t.hero.stats.map((s) => (
          <div className="stat" key={s.label}>
            <Counter value={s.value} suffix={s.suffix} text={s.text} />
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="hero-scroll">{t.hero.scroll}</div>
    </section>
  )
}

export function Marquee() {
  const { t } = useLang()
  const items = [...t.marquee, ...t.marquee]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}

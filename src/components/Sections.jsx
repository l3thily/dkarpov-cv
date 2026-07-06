import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'
import { Reveal, SectionHead } from './Chrome.jsx'

function SpotCard({ children, className = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <motion.article
      ref={ref}
      className={`card ${className}`}
      onMouseMove={onMove}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div
        className="card-spot"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(184,255,71,0.07), transparent 70%)',
        }}
      />
      {children}
    </motion.article>
  )
}

export function About() {
  const { t } = useLang()

  return (
    <section id="about">
      <div className="container">
        <SectionHead index={t.about.index} title={t.about.title} />
        <Reveal>
          <p className="about-lead">{t.about.lead}</p>
        </Reveal>
        <div className="skill-groups">
          {t.about.groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.08} className="skill-group">
              <h3>{g.name}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const { t } = useLang()

  return (
    <section id="experience">
      <div className="container">
        <SectionHead index={t.experience.index} title={t.experience.title} />
        <div>
          {t.experience.jobs.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.06} className="job">
              <div className="job-org">{job.org}</div>
              <div>
                <div className="job-role">{job.role}</div>
                <p className="job-desc">{job.desc}</p>
              </div>
              <div className="job-period">{job.period}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const { t } = useLang()

  return (
    <section id="projects">
      <div className="container">
        <SectionHead index={t.projects.index} title={t.projects.title} />
        <Reveal>
          <p className="section-sub">{t.projects.subtitle}</p>
        </Reveal>

        <div className="featured-grid">
          {t.projects.featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <SpotCard>
                <div className="card-num">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>★ featured</span>
                </div>
                <h3>{p.name}</h3>
                <div className="card-tagline">{p.tagline}</div>
                <p className="card-desc">{p.desc}</p>
                <div className="card-impact">
                  <span className="label">{t.projects.impactLabel}</span>
                  {p.impact}
                </div>
                <div className="tags">
                  {p.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <div className="projects-grid">
          {t.projects.grid.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <SpotCard>
                <div className="card-num">
                  <span>{String(i + 3).padStart(2, '0')}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="tags">
                  {p.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Ventures() {
  const { t } = useLang()

  return (
    <section id="ventures">
      <div className="container">
        <SectionHead index={t.ventures.index} title={t.ventures.title} />
        <div className="ventures-grid">
          {t.ventures.items.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.1}>
              <SpotCard>
                <div className="venture-role">{v.role}</div>
                <h3>{v.name}</h3>
                <p className="card-desc" style={{ marginTop: 12 }}>{v.desc}</p>
                <div className="venture-stats">
                  {v.stats.map((s) => (
                    <div className="venture-stat" key={s.label}>
                      <div className="v">{s.value}</div>
                      <div className="l">{s.label}</div>
                    </div>
                  ))}
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHead index={t.contact.index} title={t.contact.title} />
        <Reveal>
          <h2 className="contact-heading">{t.contact.heading}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact-sub">{t.contact.sub}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="contact-actions">
            <motion.a
              className="btn btn-primary"
              href={`mailto:${t.contact.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.contact.emailLabel} ↗
            </motion.a>
            <motion.a
              className="btn btn-ghost"
              href={`https://t.me/${t.contact.tg}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.contact.tgLabel} · @{t.contact.tg}
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© 2026 {t.footer.rights}</span>
        <span>{t.footer.made}</span>
      </div>
    </footer>
  )
}

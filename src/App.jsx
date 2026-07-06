import { LangProvider } from './i18n.jsx'
import { Backdrop, CursorGlow, Nav } from './components/Chrome.jsx'
import { Hero, Marquee } from './components/Hero.jsx'
import { About, Contact, Experience, Footer, Projects, Ventures } from './components/Sections.jsx'

export default function App() {
  return (
    <LangProvider>
      <Backdrop />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Ventures />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}

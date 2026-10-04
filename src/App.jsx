import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AIWorkflow from './components/AIWorkflow'
import Education from './components/Education'
import Contact from './components/Contact'
import Nav from './components/Nav'

function App() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <AIWorkflow />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App

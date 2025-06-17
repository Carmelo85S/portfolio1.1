import About from "./components/about/About"
import Competences from "./components/competences/Competences"
import Connect from "./components/connect/Connect"
import Hero from "./components/hero/Hero"
import Philosophy from "./components/philosophy/Philosophy"
import Projects from "./components/Projects/Projects"

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Competences />
      <Philosophy />
      <Projects />
      <Connect />
    </div>
  )
}

export default App

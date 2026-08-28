import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-24">
        <Hero />
        <FeaturedProjects />
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  )
}

export default App

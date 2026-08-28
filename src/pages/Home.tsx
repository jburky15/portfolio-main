import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  )
}

export default Home
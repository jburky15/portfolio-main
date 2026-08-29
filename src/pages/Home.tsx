import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default Home
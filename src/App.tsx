import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <FeaturedProjects />

      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Joseph Burkhart
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Software Developer
        </p>
      </main>
    </div>
  )
}

export default App

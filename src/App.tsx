import { useState } from 'react'
import type { Project } from './types/project'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'
import ProjectDetails from './components/ProjectDetails'

function App() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <ProjectDetails
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />

        <FeaturedProjects
          onSelectProject={setSelectedProject}
        />

        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  )
}

export default App

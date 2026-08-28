
import type { Project } from '../types/project'
import { projects } from '../data/projects'
import Section from './Section'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void
}

function FeaturedProjects({
  onSelectProject,
}: FeaturedProjectsProps) {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  )

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="A selection of my recent work"
        description="Here are a few projects I've worked on that replicate real-world, practical scenarios."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={index + 1}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </Section>
  )
}

export default FeaturedProjects
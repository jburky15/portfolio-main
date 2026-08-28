import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  number: number
}

function ProjectCard({
  project,
  number,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900">
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-slate-600">
          0{number}
        </span>

        <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
          {project.category}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
        View case study
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </article>
  )
}

export default ProjectCard
import type { Project } from '../types/project';

interface ProjectCardProps {
    project: Project;
    number: number;
}

function ProjectCard({ project, number }: ProjectCardProps) {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-medium text-blue-400">
                    {String(number).padStart(2, '0')}
                </span>

                <div className="flex gap-4 text-sm">
                    <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 transition hover:text-white"
                    >
                        GitHub
                    </a>

                    {project.liveDemoUrl && (
                        <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 transition hover:text-white"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                {project.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
                {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                        {technology}
                    </span>
                ))}
            </div>

        </article>
    )
}

export default ProjectCard;
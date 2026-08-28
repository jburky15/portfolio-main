import type { Project } from '../types/project'
import Section from './Section'

interface ProjecteDetailsProps {
    project: Project
    onBack: () => void
}

function ProjectDetails ({
    project,
    onBack,
}: ProjecteDetailsProps) {
    return (
        <main>
            <Section>
                <button
                    type="button"
                    onClick={onBack}
                    className="mb-12 text-sm text-slate-400 transition hover:text-white"
                >
                    Back to Projects
                </button>

                <div className="max-w-4xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                        {project.category}
                    </p>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {project.title}
                    </h1>

                    <p className="mt-6 text-xl leading-8 text-slate-400">
                        {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span 
                                key={technology}
                                className="rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                    
                    <div className="mt-10 flex gap-4">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                        >
                            Github Repo
                        </a>

                        {project.liveDemoUrl && (
                            <a
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold text-white">
                        Problem
                    </h2>
                    
                    <p className="text-lg leading-8 text-slate-400">
                        {project.problem}
                    </p>
                </div>
            </Section>

            <Section className="bg-slate-900/30">
                <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold text-white">
                        Solution
                    </h2>

                    <p className="text-lg leading-8 text-slate-400">
                        {project.solution}
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold text-white">
                        Architecture
                    </h2>
                    
                    <ul className="space-y-4">
                        {project.architecture.map((item) => (
                            <li
                                key={item}
                                className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-slate-300"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <Section className="bg-slate-900/30">
                <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold text-white">
                        Challenge
                    </h2>

                    <ul className="space-y-4">
                        {project.challenge.map((challenge) => (
                            <li 
                                key={challenge}
                                className="flex gap-3 leading-7 text-slate-400"
                            >
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                <span>{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <Section>
                <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold text-white">
                        Results
                    </h2>

                    <ul className="space-y-4">
                        {project.results.map((result) => (
                            <li
                                key={result}
                                className="flex gap-3 leading-7 text-slate-400"
                            >
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"/>
                                <span>{result}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </main>
    )
}

export default ProjectDetails
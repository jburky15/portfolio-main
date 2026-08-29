import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import Section from '../components/Section'

function ProjectPage() {
  const { projectId } = useParams()

  const project = projects.find(
    (item) => item.id === projectId,
  )

  if (!project) {
    return (
      <main>
        <Section>
          <h1 className="text-4xl font-bold">
            Project not found
          </h1>

          <p className="mt-4 text-slate-400">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block text-blue-400 hover:text-blue-300"
          >
            ← Back to portfolio
          </Link>
        </Section>
      </main>
    )
  }

  return (
    <main>
      <Section>
        <Link
          to="/#projects"
          className="mb-12 inline-block text-sm text-slate-400 transition hover:text-white"
        >
          ← Back to projects
        </Link>

        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
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

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-800 border border-slate-600 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-900"
            >
              View on GitHub
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-slate-800 border border-slate-600 px-5 py-3 text-sm font-medium transition hover:bg-slate-900"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold">
            Problem
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            {project.problem}
          </p>
        </div>
      </Section>

      <Section className="bg-slate-900/30">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold">
            Solution
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            {project.solution}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold">
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
          <h2 className="text-2xl font-semibold">
            Challenges
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
          <h2 className="text-2xl font-semibold">
            Results
          </h2>

          <ul className="space-y-4">
            {project.results.map((result) => (
              <li
                key={result}
                className="flex gap-3 leading-7 text-slate-400"
              >
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </main>
  )
}

export default ProjectPage
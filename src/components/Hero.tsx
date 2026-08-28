import { ArrowDown } from 'lucide-react'
import Section from './Section'

function Hero() {
    return(
        <Section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative max-w-4xl">
                <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                    Software Developer
                </p>

                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Building software for
                    <span className="block text-slate-400">
                        real world problems.
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                    I build practical web applications combining software development knowledge and real world technical operations experience.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
                    >
                        Check Out My Work
                    </a>

                    <a
                        href="https://github.com/jburky15"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
                    >
                        GitHub
                    </a>
                </div>

                <div className="mt-16 flex items-center gap-6 text-slate-500">
                    <a
                        href="#projects"
                        className="transition hover:text-slate-300"
                        aria-label="View Projects"
                    >
                        <ArrowDown className="h-5 w-5 animate-bounce" />
                    </a>

                    <div className="h-px w-16 bg-slate-800" />

                    <span className="text-xs uppercase tracking-[0.2em]">
                        Explore
                    </span>
                </div>
            </div>
        </Section>
    )
}

export default Hero
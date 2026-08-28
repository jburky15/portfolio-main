import Section from './Section'
import SectionHeading from './SectionHeading'

function FeaturedProjects() {
    return (
        <Section id="featured-projects">
            <SectionHeading
                eyebrow="Featured Projects"
                title="A selection of my recent work"
                description="Here are a few projects I've worked on that replicate real world, practical scenarios."
            />

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                    <p className="text-sm text-blue-400">01</p>

                    <h3 className="mt-4 text-xl font-semibold text-white">
                        Healthcare Operations Platform
                    </h3>

                    <p className="mt-3 text-slate-400">
                        Full-stack web app for managing healthcare operations, scheduling, providers, workflows and operational metrics.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                    <p className="text-sm text-blue-400">02</p>

                    <h3 className="mt-4 text-xl font-semibold text-white">
                        Equipment Management Platform
                    </h3>

                    <p className="mt-3 text-slate-400">
                        Equipment tracking and inventory platform designed around real-world technical operations workflows. Built with React, TypeScript, and Node.js.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                    <p className="text-sm text-blue-400">03</p>

                    <h3 className="mt-4 text-xl font-semibold text-white">
                        AI Operations Analyst
                    </h3>

                    <p className="mt-3 text-slate-400">
                        AI-powered operations analyst that analyzes operational data and provides insights and recommendations for improving efficiency and performance.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default FeaturedProjects
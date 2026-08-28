import { Mail } from 'lucide-react'
import Section from './Section'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 px-8 py-16 sm:px-12">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something useful."
          description="I'm interested in software engineering opportunities where I can contribute to meaningful products, solve practical problems, and continue growing as a developer."
        />

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:jburky15@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Contact
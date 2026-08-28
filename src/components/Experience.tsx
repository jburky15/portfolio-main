import { experience } from "../data/experience";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

function Experience() {
    return(
        <Section id="experience">
            <SectionHeading 
                eyebrow="Experience"
                title="Technical experience beyond just the code"
                description="A combination of software development and hands-on technical operations and sales experience."
            />

            <div className="space-y-12">
                {experience.map((item) =>
                <article
                    key={item.id}
                    className="grid gap-6 border-t border-slate-800 pt-8 lg:grid-cols-[200px_1fr]"
                >
                    <div>
                        <p className="text-sm font-medium text-blue-400">
                            {item.period}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            {item.role}
                        </h3>

                        <p className="mt-1 text-slate-300">
                            {item.company}
                        </p>

                        <p className="mt-4 leading-7 text-slate-400">
                            {item.description}
                        </p>

                        <ul className="mt-6 space-y-3">
                            {item.highlights.map((highlight) =>
                                <li
                                    key={highlight}
                                    className="flex gap-3 leading-7 text-slate-400"
                                >
                                    <span className="mt-3 h-1.5 w-1.5 shrink-0       rounded-full bg-blue-400"
                                    />
                                    <span>{highlight}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </article>
                )}
            </div>
        </Section>
    )
}

export default Experience
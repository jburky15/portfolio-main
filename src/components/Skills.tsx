import { skillCategories } from "../data/skills";
import Section from './Section';
import SectionHeading from './SectionHeading';

function Skills() {
    return (
        <Section id="skills">
            <SectionHeading 
                eyebrow="Technical Skills"
                title="Tools I use to build awesome things"
                description="A useful toolkit for building up full-stack projects"
            />
            
            <div className="grid gap-6 sm:grid-cols-2">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className={`rounded-2xl border border-slate-800 bg-slate-900/50 p-8 
                        ${category.title === 'Currently Learning'
                            ? 'sm:col-span-2'
                            : ''
                        }`}
                    >
                        <h3 className="text-lg font-semibold text-white">
                            {category.title}
                        </h3>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skills
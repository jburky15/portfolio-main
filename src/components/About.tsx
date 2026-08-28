import Section from "./Section";
import SectionHeading from "./SectionHeading";

function About() {
    return (
        <Section id="about">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
                <SectionHeading 
                    eyebrow="About"
                    title="A developer with a practical operations background."
                />

                <div className="space-y-6 text-lg leading-8 text-slate-400">
                    <p>
                        I'm a software developer focused on building practical, maintainable applications that solve real-world problems and the ocassional fun side project.
                    </p>

                    <p>
                        My background combines web development with years of hands-on experience in technical operations, equipment management, inventory, logistics and customer-facing technical workflows.
                    </p>

                    <p>
                        That experience influences how I approach my projects. I care about understanding the people, companies and processes behind the problem, not just building something that technically just works.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default About;
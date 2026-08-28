interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
}

function SectionHeading({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mb-16 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                {eyebrow}
            </p>
            
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-lg leading-8 text-slate-400">
                    {description}
                </p>
            )}
        </div>
    )
}
export default SectionHeading
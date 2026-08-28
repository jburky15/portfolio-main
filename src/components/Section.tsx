interface SectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

function Section({
    id,
    children,
    className = '',
}: SectionProps) {
    return (
        <section
            id={id}
            className={`px-6 py-24 sm:py-32 ${className}`}
        >
            <div className="mx-auto w-full max-w-6xl ">
                {children}
            </div>
        </section>
    )
}

export default Section
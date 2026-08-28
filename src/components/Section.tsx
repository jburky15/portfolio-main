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
            className={`mx-auto w-full max-w-6xl px-6 py-24 ${className}`}
        >
            {children}
        </section>
    )
}

export default Section
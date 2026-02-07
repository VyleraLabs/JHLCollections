
interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgImage?: string;
}

const Section = ({ children, className = "", id, bgImage }: SectionProps) => {
    return (
        <section
            id={id}
            className={`relative py-20 px-4 md:px-8 ${className}`}
            style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
            {bgImage && (
                <div className="absolute inset-0 bg-black/40" />
            )}
            {/* Overlay for readability if bg image exists */}

            <div className={`container mx-auto relative z-10`} >
                {children}
            </div>
        </section>
    );
};

export default Section;

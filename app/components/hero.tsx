export default function Hero() {
    return (
        <section
            data-aos="fade-up"
            className="bg-background text-foreground min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center px-6 md:px-12 lg:px-24"
        >
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center items-start mt-8 lg:mt-0">
                <h1 className="text-5xl md:text-6xl font-mono font-bold mb-4">
                    Hi, I'm <span className="text-accent">Sherifdeen Raji</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-mono mb-6 max-w-xl">
                    Backend Developer & Aspiring DevOps Engineer — building robust APIs,
                    working with databases, and learning modern deployment practices.
                </h2>
                <div className="space-x-4">
                    <a
                        href="#projects"
                        className="inline-block px-6 py-3 bg-accent text-background font-semibold rounded-md hover:bg-hoverAccent transition-colors duration-300"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 border border-accent text-accent font-semibold rounded-md hover:bg-accent hover:text-background transition-colors duration-300"
                    >
                        Hire Me
                    </a>
                </div>
            </div>

            {/* Image - Hidden on small screens */}
            <div className="hidden lg:block flex-1">
                <img
                    src="https://res.cloudinary.com/dkc3adbz0/image/upload/v1756748817/head_shot_sherifdeen_zanvan.jpg"
                    alt="Sherifdeen Raji"
                    className="w-full max-w-sm rounded-lg shadow-lg mx-auto"
                />
            </div>
        </section>
    );
}
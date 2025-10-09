const projects = [
    {
        id: 1,
        title: 'Word Guesser Game',
        description: 'Interactive word guessing game built with modern web technologies. Features real-time gameplay, responsive design, and smooth user experience with guess tracking and scoring system.',
        link: 'https://word-guesser-fkeq.onrender.com/',
        github: 'https://github.com/TryYourBestAndLeaveTheRest/word-guesser.git',
    },
    {
        id: 2,
        title: 'Food App Backend API',
        description: 'Comprehensive REST API for a food delivery application. Built with robust authentication, data validation, error handling, and complete API documentation with Swagger/OpenAPI.',
        link: 'http://project-food-app-backend.onrender.com/docs',
        github: 'https://github.com/TryYourBestAndLeaveTheRest/project_food_app_backend.git',
    },
];

export default function Projects() {
    return (
        <section data-aos='fade-up'
            id="projects"
            className="bg-background text-foreground px-6 md:px-12 lg:px-24 py-16"
        >
            <h2 className="text-4xl font-mono font-bold mb-8 text-accent">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {projects.map(({ id, title, description, link, github }) => (
                    <div
                        key={id}
                        className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                        <p className="mb-4">{description}</p>
                        <div className="flex gap-4">
                            <a
                                href={link}
                                className="text-accent hover:text-hoverAccent font-semibold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo →
                            </a>
                            <a
                                href={github}
                                className="text-accent hover:text-hoverAccent font-semibold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

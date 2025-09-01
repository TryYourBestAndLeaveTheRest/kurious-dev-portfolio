const projects = [
    {
        id: 1,
        title: 'Scalable REST API',
        description: 'Built a secure, scalable REST API for an e-commerce platform using Node.js and AWS Lambda.',
        link: '#',
    },
    {
        id: 2,
        title: 'Cloud Infrastructure Automation',
        description: 'Automated deployment pipelines and infrastructure using Terraform and AWS.',
        link: '#',
    },
    {
        id: 3,
        title: 'Real-time Data Processing',
        description: 'Developed backend services for processing streaming data using Kafka and Python.',
        link: '#',
    },
];

export default function Projects() {
    return (
        <section data-aos='fade-up'
            id="projects"
            className="bg-background text-foreground px-6 md:px-12 lg:px-24 py-16"
        >
            <h2 className="text-4xl font-mono font-bold mb-8 text-accent">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(({ id, title, description, link }) => (
                    <div
                        key={id}
                        className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                        <p className="mb-4">{description}</p>
                        <a
                            href={link}
                            className="text-accent hover:text-hoverAccent font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

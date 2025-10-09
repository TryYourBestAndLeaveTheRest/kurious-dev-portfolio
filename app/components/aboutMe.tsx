export default function AboutMe() {
    return (
        <section data-aos='fade-up'
            id="about"
            className="bg-background text-foreground px-6 md:px-12 lg:px-24 py-16"
        >
            <h2 className="text-4xl font-mono font-bold mb-6 text-accent">About Me</h2>
            <p className="max-w-3xl text-lg leading-relaxed">
                I'm an aspiring Backend Developer with a strong foundation in server-side programming
                and API development. I have hands-on experience with Node.js along with database technologies like MongoDB, PostgreSQL and working with ORMs. I'm passionate
                about building robust REST APIs and implementing proper authentication systems.
            </p>
            <p className="max-w-3xl mt-4 text-lg leading-relaxed">
                Currently expanding my skills in DevOps practices, I'm learning Docker, exploring
                cloud platforms like AWS, and understanding modern deployment workflows. I enjoy
                solving complex problems, writing clean code, and collaborating with teams to
                build scalable web applications. I'm eager to contribute to real-world projects
                and grow as a backend engineer.
            </p>
        </section>
    );
}

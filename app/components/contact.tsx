export default function Contact() {
    return (
        <section data-aos='fade-up'
            id="contact"
            className="bg-background text-foreground px-6 md:px-12 lg:px-24 py-16"
        >
            <h2 className="text-4xl font-mono font-bold mb-6 text-accent">Contact Me</h2>
            <p className="mb-4 max-w-3xl text-lg leading-relaxed">
                Interested in working together? Reach out!
            </p>
            <form
                className="max-w-md flex flex-col space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert('Form submission coming soon!');
                }}
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="p-3 rounded bg-gray-800 border border-border text-foreground"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="p-3 rounded bg-gray-800 border border-border text-foreground"
                />
                <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="p-3 rounded bg-gray-800 border border-border text-foreground resize-none"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-accent rounded font-semibold hover:bg-hoverAccent transition-colors"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}

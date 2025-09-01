import { useState } from "react";

export default function Contact() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        try {
            const res = await fetch('https://formspree.io/f/mwkajpqr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setResponseMessage('Thanks! Your message has been sent.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage('Oops! Something went wrong.');
                console.log(res)
            }
        } catch (error) {
            setResponseMessage('Network error. Please try again later.');
            console.log(error)
        } finally {
            setIsSubmitting(false);
        }
    };
    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault(); // Prevent default page refresh
    //     const body = { name, email, message },
    //     const response = await fetch('https://formspree.io/f/mqadljlg', {
    //         method: 'POST', ,
    //     })
    //      q.log('Form submitted:',);
    // }
    // You can send this data to an API or perform other actions here
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
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="p-3 rounded bg-gray-800 border border-border text-foreground"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="p-3 rounded bg-gray-800 border border-border text-foreground"
                    onChange={handleChange}
                />
                <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="p-3 rounded bg-gray-800 border border-border text-foreground resize-none"
                    onChange={handleChange}
                />
                <button disabled={isSubmitting}
                    type="submit"
                    className="px-6 py-3 hover:bg-white rounded font-semibold bg-sky-500 transition-colors hover:text-gray-700"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {responseMessage && <p>{responseMessage}</p>}
            </form>
        </section>
    );
}

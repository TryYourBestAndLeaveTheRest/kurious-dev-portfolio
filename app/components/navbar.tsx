import { useState } from 'react';
import { Link } from 'react-router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white sticky bottom-0 text-foreground font-mono shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <Link to="#" className="text-xl font-bold text-accent">
                        KuriousDev
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <Link
                            to="#"
                            className="text-gray-700 p-6 hover:bg-sky-500 transition-colors  duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/#about"
                            className="text-gray-700 p-6 hover:bg-sky-500 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/#projects"
                            className="text-gray-700 p-6 hover:bg-sky-500 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/#contact"
                            className="text-gray-700 p-6 hover:bg-sky-500 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6 text-foreground"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link
                        to="#"
                        className="block hover:text-accent transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/#about"
                        className="block hover:text-accent transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/#projects"
                        className="block hover:text-accent transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/#contact"
                        className="block hover:text-accent transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

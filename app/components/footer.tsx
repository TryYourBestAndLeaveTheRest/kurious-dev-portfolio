export default function Footer() {
    return (
        <footer className="bg-background border-t border-border text-foreground text-center py-6 mt-12">
            <p className="text-sm">
                © {new Date().getFullYear()} Your Name. Built with React, Tailwind & ❤️
            </p>
            <p className="mt-2 text-xs text-accent">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-hoverAccent">
                    GitHub
                </a>{' '}
                |{' '}
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-hoverAccent">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}
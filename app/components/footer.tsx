export default function Footer() {
    return (
        <footer className="bg-background border-t border-border text-foreground text-center py-6 mt-12">
            <p className="text-sm">
                © {new Date().getFullYear()} Sherifdeen Raji. Backend Developer passionate about building scalable APIs & learning DevOps 🚀
            </p>
            <p className="mt-2 text-xs text-accent">
                <a href="https://github.com/TryYourBestAndLeaveTheRest" target="_blank" rel="noopener noreferrer" className="hover:text-hoverAccent">
                    GitHub
                </a>{' '}
                |{' '}
                <a href="https://linkedin.com/in/kuriousdev" target="_blank" rel="noopener noreferrer" className="hover:text-hoverAccent">
                    LinkedIn
                </a>{' '}
                |{' '}
                <a href="mailto:TechCareerStudio@gmail.com" className="hover:text-hoverAccent">
                    Email
                </a>
            </p>
        </footer>
    );
}
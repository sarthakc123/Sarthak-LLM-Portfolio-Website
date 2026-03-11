import { Mail, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#e8eaed] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-[#80868b]">
          © {new Date().getFullYear()} Sarthak Chandarana · Built with Next.js
          + Groq
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:src16@illinois.edu"
            className="text-[#80868b] transition-colors hover:text-[#4285F4]"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarthakchandarana123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#80868b] transition-colors hover:text-[#4285F4]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/sarthakc123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#80868b] transition-colors hover:text-[#4285F4]"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

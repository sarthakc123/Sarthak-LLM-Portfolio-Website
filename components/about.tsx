import { Zap, FlaskConical, Users, TrendingUp } from "lucide-react"

const FACTS = [
  {
    icon: Zap,
    title: "AI-First Engineer",
    description:
      "I build systems that connect frontier LLMs to real-world problems: lab automation, contact center deflection, and enterprise GenAI at scale.",
    color: "text-[#4285F4]",
    bg: "bg-[#4285F4]/10",
  },
  {
    icon: FlaskConical,
    title: "Science + AI",
    description:
      "Currently at Molecule Maker Lab (UIUC), applying PyTorch models and Groq-powered Bayesian optimization to accelerate drug synthesis.",
    color: "text-purple-600",
    bg: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "Cross-Functional Leader",
    description:
      "Comfortable presenting to C-suite, running cross-functional pursuit teams, and translating complex AI capabilities into clear ROI.",
    color: "text-[#34A853]",
    bg: "bg-[#34A853]/10",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Oriented",
    description:
      "I measure work in impact: $15M secured, $100M saved annually, 4,500 hours/week returned to teams. Not lines of code.",
    color: "text-amber-600",
    bg: "bg-amber-500/10",
  },
]

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm font-medium text-[#4285F4]">
            01 / About
          </p>
          <h2 className="mb-4 text-3xl font-black text-[#202124] sm:text-4xl">
            I translate AI into visible impact.
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#5f6368]">
            <p>
              Individual effort has a ceiling. I realized early that solving problems at government scale, research scale, and business scale required building systems that multiply human capability. That is what led me to AI.
            </p>
            <p>
              Three years at Quantiphi taught me how to ship AI in production. Not demos, not prototypes. Real systems: Baioniq, Quantiphi's first enterprise GenAI platform, deployed for 300 users and saving 4,500 hours a week. Then at UIUC's Molecule Maker Lab, I crossed into science, automating chemical synthesis pipelines that freed researchers from repetitive work, secured $15M in funding, and saved $80K a week in lab costs. The proudest part was not the number. It was knowing scientists could focus on discovery again.
            </p>
            <p>
              What makes me useful is that I sit at both tables. I can architect the model and explain it to the board. I translate AI into visible impact, be it as a solutions engineer or an AI engineer.
            </p>
          </div>
        </div>

        {/* Facts grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {FACTS.map((fact) => (
            <div
              key={fact.title}
              className="rounded-2xl border border-[#e8eaed] bg-white p-6 card-hover"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${fact.bg}`}
              >
                <fact.icon className={`h-5 w-5 ${fact.color}`} />
              </div>
              <h3 className="mb-2 font-semibold text-[#202124]">{fact.title}</h3>
              <p className="text-sm leading-relaxed text-[#5f6368]">
                {fact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Current focus */}
        <div className="mt-8 rounded-2xl border border-[#4285F4]/20 bg-[#4285F4]/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#4285F4]">
                Currently
              </p>
              <p className="font-semibold text-[#202124]">
                Software & AI Engineer @ Molecule Maker Lab · UIUC
              </p>
              <p className="mt-1 text-sm text-[#5f6368]">
                Fine-tuning chemistry foundation models · Bayesian optimization
                · AWS lab automation
              </p>
            </div>
            <div className="shrink-0">
              <span className="flex items-center gap-2 rounded-full border border-[#34A853]/30 bg-[#34A853]/10 px-3 py-1.5 text-xs font-medium text-[#34A853]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

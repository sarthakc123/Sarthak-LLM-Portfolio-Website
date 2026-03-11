import { ExternalLink, FlaskConical, Brain, Activity, BarChart3, Github, Database, Users, TrendingUp, LineChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

/* ── Production projects ── */
const PROJECTS = [
  {
    icon: Brain,
    title: "Healthcare Knowledge Base & Insights Agent",
    org: "University of Illinois, Urbana-Champaign",
    description:
      "Near-real-time compliance policy monitoring across 100+ regulatory sources. Reduced change detection from hours to under 1 minute using Python NLP pipelines, LangGraph-based RAG retrieval, and ChromaDB vector search. Replaced manual tracking with a natural language query interface.",
    tags: ["LangGraph", "ChromaDB", "RAG", "Python", "NLP", "Cloud"],
    metric: "<1 min detection",
    metricLabel: "vs. hours manually",
    color: "blue",
    github: null,
  },
  {
    icon: FlaskConical,
    title: "Computational Drug Discovery: Olaparib & Kinase Inhibitors",
    org: "University of Illinois, Urbana-Champaign",
    description:
      "Trained a Chemprop foundation model with a regression layer and active learning loop to predict 5 molecular properties across 600,000 drug candidates. Improved prediction accuracy from 60% to 76% (MAE + R² validated). Enables in-silico screening at scale, replacing 2 to 3 years of wet lab synthesis per compound.",
    tags: ["Chemprop", "PyTorch", "Active Learning", "Python", "RDKit"],
    metric: "60% → 76%",
    metricLabel: "prediction accuracy",
    color: "purple",
    github: null,
  },
  {
    icon: Activity,
    title: "Lab Automation Platform",
    org: "Molecule Maker Lab · UIUC",
    description:
      "Engineered a modular Python + AWS automation pipeline enabling fully automated chemical synthesis with real-time data logging via CloudWatch. Directly contributed to $15M in secured research funding and saves $80,000/week in lab operational costs.",
    tags: ["Python", "AWS", "CloudWatch", "FluentControl", "Automation"],
    metric: "$80K/wk",
    metricLabel: "lab cost savings",
    color: "emerald",
    github: "MMLIMS_Final",
  },
  {
    icon: BarChart3,
    title: "Enterprise GenAI Platform (Baioniq)",
    org: "Quantiphi, Inc.",
    description:
      "Quantiphi's first enterprise Generative AI deployment for 300 users. LLM workflow system with RAG pipelines and re-ranking. Reduced average response time from 10 to 4 minutes, saving 3,000+ work hours across 100+ daily queries per user. In production: 4,500 hours saved per week.",
    tags: ["LLM", "RAG", "Re-ranking", "GCP", "Python", "NLP"],
    metric: "4,500 hrs/wk",
    metricLabel: "saved in production",
    color: "amber",
    github: null,
  },
]

/* ── Research / academic projects ── */
const RESEARCH_PROJECTS = [
  {
    icon: Users,
    title: "AI Team Simulator",
    subtitle: "LLM Research for Cognitive Performance Augmentation",
    org: "UIUC · Personal Research",
    story:
      "What if you could simulate a full product team with LLMs? Built a memory-augmented AutoGen system where Mistral 7B agents each played a distinct role: PM, UX designer, engineer, marketing lead. Over 5 iterative rounds, the system co-created a wellness app proposal with 92% role alignment and less than 10% repetition. Proof that multi-agent LLMs can replace brainstorming sessions.",
    tags: ["Mistral 7B", "AutoGen", "Multi-Agent", "Python", "Memory"],
    metric: "92%",
    metricLabel: "role alignment",
    github: "Sarthak_LLM_Research",
    color: "blue",
  },
  {
    icon: LineChart,
    title: "Quantifying Climate Disaster",
    subtitle: "Monte Carlo Climate & Insurance Risk Simulation",
    org: "UIUC · Quantitative Research",
    story:
      "How do you price risk you've never seen? Built a Monte Carlo engine that simulates 10,000 weather-event scenarios, models their economic impact, and evaluates insurance portfolio resilience under tail-risk conditions. Achieved 25% improvement in risk assessment accuracy over actuarial baselines. Used by IBC consulting work to recommend risk-based pricing and catastrophe bonds.",
    tags: ["Python", "Monte Carlo", "Stochastic Modeling", "Risk Analytics"],
    metric: "10K scenarios",
    metricLabel: "25% accuracy gain",
    github: "Sarthak_Vinit_ClimateRiskMitigationMCSim",
    color: "amber",
  },
  {
    icon: Database,
    title: "The Lab Brain",
    subtitle: "Illini Success Student Employment Dashboard",
    org: "UIUC · Data Engineering",
    story:
      "Designed an ETL pipeline integrating student employment data from 3+ databases, then built an interactive Tableau dashboard with 18 KPIs for 500+ graduate students. Uncovered correlations between GPA, internship type, and post-grad salary, helping UIUC advisors give data-driven career guidance.",
    tags: ["ETL", "Tableau", "SQL", "Python", "Data Integration"],
    metric: "18 KPIs",
    metricLabel: "500+ grad students",
    github: "Sarthak_LLM_Research",
    color: "emerald",
  },
  {
    icon: FlaskConical,
    title: "Molecules Don't Lie",
    subtitle: "Carboxylic Acid Cluster Analysis",
    org: "UIUC · Computational Chemistry",
    story:
      "Early exploration into chemistry ML: applied unsupervised cluster analysis to carboxylic acid molecular properties, discovering latent structural groupings that later informed the RDKit feature engineering pipeline used in the Chemprop drug discovery project. A small experiment that grew into a $15M research program.",
    tags: ["Python", "Scikit-Learn", "RDKit", "Clustering", "Chemistry"],
    metric: "Foundational",
    metricLabel: "to drug discovery work",
    github: "CarboxylicAcids-ClusterAnalysis",
    color: "purple",
  },
]

/* ── Career story timeline ── */
const JOURNEY = [
  { year: "2021–24", label: "Quantiphi", detail: "Enterprise AI at scale · $106M+ impact", color: "#4285F4" },
  { year: "2024–26", label: "UIUC MSIM", detail: "3.92 GPA · Research + AI theory", color: "#EA4335" },
  { year: "2025–", label: "Molecule Maker Lab", detail: "Science + AI · $15M secured", color: "#34A853" },
]

const COLOR_MAP = {
  blue: {
    icon: "bg-[#4285F4]/10 text-[#4285F4]",
    metric: "text-[#4285F4]",
    border: "hover:border-[#4285F4]/40",
    badge: "border-[#4285F4]/20 bg-[#4285F4]/10 text-blue-700",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-600",
    metric: "text-purple-600",
    border: "hover:border-purple-400/40",
    badge: "border-purple-400/20 bg-purple-500/10 text-purple-700",
  },
  emerald: {
    icon: "bg-[#34A853]/10 text-[#34A853]",
    metric: "text-[#34A853]",
    border: "hover:border-[#34A853]/40",
    badge: "border-[#34A853]/20 bg-[#34A853]/10 text-emerald-700",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-600",
    metric: "text-amber-600",
    border: "hover:border-amber-400/40",
    badge: "border-amber-400/20 bg-amber-500/10 text-amber-700",
  },
}

export function Projects() {
  return (
    <section id="projects" className="py-24 section-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="mb-3 font-mono text-sm font-medium text-[#4285F4]">
            03 / Projects
          </p>
          <h2 className="text-3xl font-black text-[#202124] sm:text-4xl">
            Systems built for the real world.
          </h2>
        </div>

        {/* ── Career story timeline ── */}
        <div className="mb-14 rounded-2xl border border-[#e8eaed] bg-white p-6 google-shadow">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#80868b]">
            The Journey
          </p>
          <div className="flex flex-row items-start gap-0">
            {JOURNEY.map((step, i) => (
              <div key={step.year} className="relative flex flex-1">
                {/* Connector line */}
                {i < JOURNEY.length - 1 && (
                  <div className="absolute left-auto top-[18px] h-0.5 w-full translate-x-9 bg-[#e8eaed]" />
                )}
                <div className="flex flex-col items-center gap-2 pb-0 pr-4">
                  {/* Node */}
                  <div
                    className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white text-[10px] font-bold shadow-sm"
                    style={{ backgroundColor: step.color }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-[#202124]">{step.label}</p>
                    <p className="text-xs text-[#80868b]">{step.year}</p>
                    <p className="mt-0.5 text-xs text-[#5f6368]">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Production projects ── */}
        <h3 className="mb-6 text-lg font-bold text-[#202124]">Production Deployments</h3>
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const colors = COLOR_MAP[project.color as keyof typeof COLOR_MAP]
            return (
              <div
                key={project.title}
                className={`group relative flex flex-col rounded-2xl border border-[#e8eaed] bg-white p-6 transition-all duration-200 card-hover ${colors.border}`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}>
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <div className={`font-mono text-lg font-bold ${colors.metric}`}>
                      {project.metric}
                    </div>
                    <div className="text-xs text-[#80868b]">{project.metricLabel}</div>
                  </div>
                </div>

                <h3 className="mb-1 font-bold leading-tight text-[#202124]">{project.title}</h3>
                <p className="mb-3 text-xs text-[#80868b]">{project.org}</p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[#5f6368]">{project.description}</p>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={`rounded-full px-2 py-0.5 text-xs ${colors.badge}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={`https://github.com/sarthakc123/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#80868b] transition-colors hover:text-[#4285F4]"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Research & academic projects ── */}
        <h3 className="mb-2 text-lg font-bold text-[#202124]">Research & Academic</h3>
        <p className="mb-6 text-sm text-[#5f6368]">
          Each project tells a chapter of the same story: applying AI to hard, real problems.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {RESEARCH_PROJECTS.map((project) => {
            const colors = COLOR_MAP[project.color as keyof typeof COLOR_MAP]
            return (
              <div
                key={project.title}
                className={`group flex flex-col rounded-2xl border border-[#e8eaed] bg-white p-6 transition-all duration-200 card-hover ${colors.border}`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}>
                    <project.icon className="h-4 w-4" />
                  </div>
                  <div className="text-right">
                    <div className={`font-mono text-base font-bold ${colors.metric}`}>{project.metric}</div>
                    <div className="text-[10px] text-[#80868b]">{project.metricLabel}</div>
                  </div>
                </div>

                <h3 className="mb-0.5 font-bold leading-tight text-[#202124]">{project.title}</h3>
                <p className="mb-0.5 text-xs font-medium text-[#5f6368]">{project.subtitle}</p>
                <p className="mb-3 text-xs text-[#80868b]">{project.org}</p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[#5f6368]">{project.story}</p>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={`rounded-full px-2 py-0.5 text-xs ${colors.badge}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={`https://github.com/sarthakc123/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#80868b] transition-colors hover:text-[#4285F4]"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

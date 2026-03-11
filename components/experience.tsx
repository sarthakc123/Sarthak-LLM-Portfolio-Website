const EXPERIENCE = [
  {
    company: "Molecule Maker Lab · UIUC",
    role: "Software & AI Engineer",
    period: "May 2025 – Present",
    location: "Champaign, IL",
    type: "Research / Engineering",
    highlights: [
      "Reduced synthesis planning iterations from 100 → 15/compound by fine-tuning Chemma (chemistry foundation model) with Bayesian optimization loop powered by Groq LLM reasoning",
      "Improved synthesis predictability 45% → 85% and cut experimental cycles by 3x via PyTorch models on 100K+ reaction records with RDKit feature engineering",
      "Secured $15M in funding and saved $80,000/week by engineering a modular Python + AWS automation pipeline for fully automated chemical synthesis",
      "Architected normalized PostgreSQL schemas on Supabase across 7 concurrent research workstreams",
    ],
    metrics: ["$15M secured", "$80K/wk saved", "3x fewer cycles"],
    color: "blue",
  },
  {
    company: "Illinois Business Consulting",
    role: "Consultant",
    period: "Feb 2025 – Present",
    location: "Champaign, IL",
    type: "Consulting",
    highlights: [
      "Conducted cost-benefit analysis demonstrating 15–25% insurance premium reductions and 3–7% property value increases for resilient homes",
      "Evaluated financial incentives: grants increase retrofit adoption by 3x; $1 invested in mitigation saves $6 in disaster recovery costs",
      "Proposed risk-based pricing, catastrophe bonds, and hybrid public-private insurance models",
    ],
    metrics: ["3x adoption increase", "$6 return per $1"],
    color: "purple",
  },
  {
    company: "Quantiphi, Inc.",
    role: "Sr. Solutions Engineer, Applied AI",
    period: "Jul 2023 – Jul 2024",
    location: "Boston, MA",
    type: "Enterprise AI",
    highlights: [
      "Engineered Quantiphi's first enterprise GenAI platform (Baioniq) for 300 users: LLM workflow with RAG + re-ranking, saving 4,500 hours/week in production",
      "Cut $2.5M in annual contact center costs for a Fortune 50 bank via DialogflowCX NLP system achieving 25% call deflection",
      "Drove $1M in new revenue across 20+ enterprise clients with 91% Phase 2 retention",
      "Increased US West Region client acquisition by 50% through AI go-to-market strategy",
      "Led team of 3 analysts achieving 20% revenue increase YoY",
    ],
    metrics: ["$1M revenue", "4,500 hrs/wk saved", "$2.5M cost cut"],
    color: "emerald",
  },
  {
    company: "Quantiphi, Inc.",
    role: "Solutions Engineer, Applied AI",
    period: "Jul 2021 – Jul 2023",
    location: "Boston, MA",
    type: "Enterprise AI",
    highlights: [
      "Won $6M in new revenue leading 15+ enterprise AI engagements with 70% win rate",
      "Achieved $100M in annual operational savings for Illinois Dept. of Employment Security via NLP virtual agent on DialogflowCX with 80% call deflection",
      "Captured 80% of addressable Google Cloud partner opportunities across financial services and healthcare",
      "Built BigQuery + Looker sales dashboard enabling the team to hit 90% of 2023 target by Q4",
    ],
    metrics: ["$6M won", "$100M savings", "70% win rate"],
    color: "amber",
  },
]

const COLOR_MAP = {
  blue: {
    dot: "bg-[#4285F4]",
    badge: "bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20",
    line: "bg-[#4285F4]/20",
  },
  purple: {
    dot: "bg-purple-500",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    line: "bg-purple-500/20",
  },
  emerald: {
    dot: "bg-[#34A853]",
    badge: "bg-[#34A853]/10 text-[#34A853] border-[#34A853]/30",
    line: "bg-[#34A853]/20",
  },
  amber: {
    dot: "bg-amber-500",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    line: "bg-amber-500/20",
  },
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm font-medium text-[#4285F4]">
            02 / Experience
          </p>
          <h2 className="text-3xl font-black text-[#202124] sm:text-4xl">
            Where I've shipped impact.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 h-full w-px bg-[#e8eaed] md:left-6" />

          <div className="flex flex-col gap-10">
            {EXPERIENCE.map((job, i) => {
              const colors = COLOR_MAP[job.color as keyof typeof COLOR_MAP]
              return (
                <div key={i} className="relative flex gap-6 pl-12 md:pl-16">
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 top-1.5 h-3 w-3 rounded-full ring-2 ring-white ${colors.dot} md:left-4.5`}
                  />

                  {/* Card */}
                  <div className="w-full rounded-2xl border border-[#e8eaed] bg-white p-6 card-hover">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-[#202124]">{job.role}</h3>
                        <p className="mt-0.5 text-sm text-[#5f6368]">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="font-mono text-xs text-[#80868b]">
                          {job.period}
                        </span>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${colors.badge}`}
                        >
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {job.metrics.map((m) => (
                        <span
                          key={m}
                          className="rounded-full bg-[#f1f3f4] border border-[#e8eaed] px-3 py-1 font-mono text-xs font-semibold text-[#34A853]"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="flex flex-col gap-2">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-[#5f6368]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#80868b]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

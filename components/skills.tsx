const SKILL_GROUPS = [
  {
    category: "Languages",
    color: "blue",
    skills: ["Python", "SQL", "R", "Bash", "JavaScript"],
    description: "TensorFlow · PyTorch · Scikit-Learn · Pandas · NumPy",
  },
  {
    category: "AI & Machine Learning",
    color: "purple",
    skills: [
      "LLMs / GenAI",
      "RAG Systems",
      "Model Fine-Tuning",
      "NLP",
      "HuggingFace",
      "Transformers",
      "GANs",
      "Prompt Engineering",
      "Synthetic Data",
      "Model Evaluation",
    ],
    description: "Groq · OpenAI · Anthropic/Claude",
  },
  {
    category: "Agentic AI & Vector Search",
    color: "emerald",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "AutoGen",
      "CrewAI",
      "Google ADK",
      "Strands",
      "MCPs",
      "FAISS",
      "Pinecone",
      "Chroma",
    ],
    description: "Multi-agent systems · Conversational AI",
  },
  {
    category: "MLOps & DevTools",
    color: "amber",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "FastAPI",
      "Git",
      "Redis",
      "MLflow",
      "Claude Code",
      "Cursor IDE",
    ],
    description: "System Design · SDLC · GitHub Actions",
  },
  {
    category: "Cloud & Data",
    color: "rose",
    skills: [
      "AWS (SageMaker, Bedrock, Lambda)",
      "GCP (Vertex AI, DialogflowCX, BigQuery)",
      "Azure AI Foundry",
      "Databricks",
      "Snowflake",
      "Supabase",
    ],
    description: "Dataflow · Airflow · Spark · ETL Pipelines",
  },
  {
    category: "Analytics & BI",
    color: "cyan",
    skills: ["Tableau", "PowerBI", "Looker", "Streamlit", "matplotlib"],
    description: "REST APIs · Jira · Data Visualization",
  },
]

const COLOR_MAP: Record<string, { badge: string; label: string; dot: string }> =
  {
    blue: {
      badge: "border-[#4285F4]/20 bg-[#4285F4]/10 text-blue-600",
      label: "text-[#4285F4]",
      dot: "bg-[#4285F4]",
    },
    purple: {
      badge: "border-purple-500/20 bg-purple-500/10 text-purple-600",
      label: "text-purple-400",
      dot: "bg-purple-500",
    },
    emerald: {
      badge: "border-[#34A853]/20 bg-[#34A853]/10 text-emerald-700",
      label: "text-[#34A853]",
      dot: "bg-[#34A853]",
    },
    amber: {
      badge: "border-amber-500/20 bg-amber-500/10 text-amber-700",
      label: "text-amber-400",
      dot: "bg-amber-500",
    },
    rose: {
      badge: "border-rose-500/20 bg-rose-500/10 text-rose-600",
      label: "text-rose-400",
      dot: "bg-rose-500",
    },
    cyan: {
      badge: "border-cyan-500/20 bg-cyan-500/10 text-cyan-600",
      label: "text-cyan-400",
      dot: "bg-cyan-500",
    },
  }

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm font-medium text-[#4285F4]">
            04 / Skills
          </p>
          <h2 className="text-3xl font-black text-[#202124] sm:text-4xl">
            The full stack of AI engineering.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => {
            const colors = COLOR_MAP[group.color]
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-[#e8eaed] bg-white p-5 card-hover"
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${colors.dot}`} />
                  <h3 className={`text-sm font-semibold ${colors.label}`}>
                    {group.category}
                  </h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#80868b]">{group.description}</p>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="mt-10 rounded-2xl border border-[#e8eaed] bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-[#3c4043]">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "BCG X GenAI Certification",
              "GCP Associate Cloud Engineer (2022–2025)",
              "Google: Intro to Generative AI",
              "Google: Intro to Large Language Models",
              "Google: Intro to Image Generation",
            ].map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-[#e8eaed] bg-[#f8f9fa] px-3 py-1.5 text-xs text-[#5f6368]"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

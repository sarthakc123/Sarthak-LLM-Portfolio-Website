export interface ResumeChunk {
  id: string
  category: string
  title: string
  content: string
  keywords: string[]
}

export const RESUME_CHUNKS: ResumeChunk[] = [
  {
    id: "personal",
    category: "personal",
    title: "Personal Info & Availability",
    content: `Name: Sarthak Chandarana
Location: Champaign, IL (Greater Chicago Area)
Email: src16@illinois.edu | sarthu2008@gmail.com
Phone: (447) 902-7832
LinkedIn: https://www.linkedin.com/in/sarthakchandarana123
GitHub: https://github.com/sarthakc123
Availability: Actively seeking full-time roles. Available May 2026 upon completing MSIM at UIUC. Open to starting earlier for the right opportunity.
Contact: Reach out via src16@illinois.edu or LinkedIn at sarthakchandarana123. Use the "Schedule a Call" button on this site to book time directly.`,
    keywords: [
      "contact", "email", "linkedin", "github", "available", "availability",
      "hire", "hiring", "location", "champaign", "illinois", "phone", "reach",
      "schedule", "call", "start", "full-time", "job", "role", "open"
    ],
  },
  {
    id: "education",
    category: "education",
    title: "Education",
    content: `1. University of Illinois Urbana-Champaign (UIUC)
   Degree: Master of Science in Information Management (MSIM)
   GPA: 3.92 / 4.0
   Expected: May 2026
   Enrolled: August 2024
   Coursework: Applied Business Research, Business Intelligence, Python Programming, Applied Machine Learning, Data Mining

2. NMIMS Mukesh Patel School of Technology
   Degree: Bachelor of Technology, Electronics and Telecommunication
   Years: 2017 – 2021`,
    keywords: [
      "education", "degree", "university", "uiuc", "illinois", "gpa", "3.92",
      "msim", "master", "masters", "bachelor", "btech", "undergraduate",
      "nmims", "coursework", "machine learning", "data mining", "python", "academic"
    ],
  },
  {
    id: "exp-mml",
    category: "experience",
    title: "Molecule Maker Lab Experience",
    content: `Software & AI Engineer (Strategy, Data & AI)
Company: Molecule Maker Lab Institute, University of Illinois, Champaign, IL
Duration: May 2025 – Present

Key Achievements:
- Reduced synthesis planning iterations from 100 to 15 per compound by fine-tuning Chemma, a chemistry foundation model, on curated reaction data and integrating a Bayesian optimization loop with Groq LLM reasoning to predict the next best experiment
- Improved synthesis predictability from 45% to 85% and cut experimental cycles by 3x by training PyTorch classification models on 100,000+ reaction records with RDKit feature engineering, validated via Spearman correlation with experimental data
- Secured $15M in funding and saved $80,000/week in lab costs by engineering a modular Python + AWS automation pipeline enabling fully automated chemical synthesis with real-time data logging; presented technical proof points to funding committees
- Enabled structured SQL querying across 7 concurrent research workstreams by architecting normalized PostgreSQL schemas on Supabase, modeling experimental inputs and reaction outputs

Tech Stack: Python, PyTorch, Groq LLM, Chemma, RDKit, AWS, Supabase, PostgreSQL`,
    keywords: [
      "molecule", "maker", "lab", "mml", "chemistry", "chemma", "synthesis",
      "bayesian", "optimization", "pytorch", "rdkit", "aws", "supabase",
      "postgresql", "$80k", "$80,000", "80000", "week", "funding", "$15m",
      "fine-tuning", "foundation model", "current", "present", "2025",
      "drug", "research", "automation", "pipeline", "sql"
    ],
  },
  {
    id: "exp-quantiphi-sr",
    category: "experience",
    title: "Quantiphi Senior Solutions Engineer",
    content: `Senior Solutions Engineer, Applied AI Practice
Company: Quantiphi, Inc., Boston, MA
Duration: July 2023 – July 2024

Key Achievements:
- Engineered Quantiphi's first enterprise GenAI platform (Baioniq) for 300 users: an LLM workflow system with RAG pipelines and re-ranking, cutting manual processing time by 60% and saving 4,500 hours/week in production
- Cut $2.5M in annual contact center costs for a Fortune 50 bank by building an NLP system on DialogflowCX with intent classification and entity extraction, achieving 25% call deflection; managed full sales-to-delivery lifecycle
- Drove $1M in new revenue across 20+ enterprise clients with 91% Phase 2 retention by translating ML model capabilities into quantified ROI frameworks aligned to C-suite compliance and cost priorities
- Increased client acquisition by 50% in the US West Region by designing a go-to-market strategy identifying emerging Applied AI trends
- Recovered 4 lost clients through Root Cause Analysis on natural language data from lost deals, applying LLM-driven insights to identify retention factors
- Led a team of 3 analysts, improving workflow efficiency and achieving 20% revenue increase year-over-year

Tech Stack: LLM APIs, RAG, DialogflowCX, NLP, GCP, Python`,
    keywords: [
      "quantiphi", "senior", "solutions", "engineer", "genai", "enterprise",
      "baioniq", "4500", "4,500", "hours", "week", "production", "rag",
      "llm", "dialogflowcx", "nlp", "gcp", "bank", "fortune 50",
      "revenue", "retention", "client", "go-to-market", "team lead", "2023", "2024"
    ],
  },
  {
    id: "exp-quantiphi-jr",
    category: "experience",
    title: "Quantiphi Solutions Engineer",
    content: `Solutions Engineer, Applied AI Practice
Company: Quantiphi, Inc., Boston, MA
Duration: July 2021 – July 2023

Key Achievements:
- Won $6M in new revenue by leading cross-functional pursuit teams for 15+ enterprise engagements, translating complex client requirements into tailored AI solutions and executive-ready business cases with 70% win rate
- Achieved $100M in annual operational savings for the Illinois Department of Employment Security by engineering an NLP virtual agent on DialogflowCX, designing flows, training NLP models, and integrating analytics pipelines, reaching 80% call deflection
- Captured 80% of addressable Google Cloud partner opportunities by developing ML-aligned solution architectures mapping classification, NLP, and predictive modeling to client risk and compliance requirements in financial services and healthcare
- Enabled the sales team to achieve 90% of the 2023 target by Q4 by developing a go-to-market sales dashboard using BigQuery and Looker to analyze sales cycles, revenue, and OBV projections
- Achieved 80% penetration rate within the Google Cloud FSR ecosystem by developing solution architectures, proposals, and statements of work for 15+ clients

Tech Stack: DialogflowCX, NLP, BigQuery, Looker, GCP, Python`,
    keywords: [
      "quantiphi", "solutions", "engineer", "junior", "$100m", "100 million",
      "illinois", "employment", "security", "government", "dialogflowcx",
      "nlp", "bigquery", "looker", "gcp", "google cloud", "call deflection",
      "$6m", "revenue", "2021", "2022", "2023", "enterprise", "sales"
    ],
  },
  {
    id: "exp-ibc",
    category: "experience",
    title: "Illinois Business Consulting",
    content: `Consultant
Company: Illinois Business Consulting, Champaign, IL
Duration: February 2025 – Present

Key Achievements:
- Conducted cost-benefit analysis (CBA) of risk mitigation strategies, demonstrating 15–25% insurance premium reductions and 3–7% property value increases for resilient homes
- Evaluated financial incentives: grants increase retrofit adoption by 3x; every $1 invested in mitigation saves $6 in disaster recovery costs
- Recommended financially-driven risk communication strategies and policy solutions including risk-based pricing, catastrophe bonds, expanded reinsurance, and hybrid public-private insurance models`,
    keywords: [
      "consulting", "ibc", "illinois business", "consultant", "cost-benefit",
      "insurance", "risk", "mitigation", "policy", "financial", "analysis",
      "business", "strategy", "2025"
    ],
  },
  {
    id: "proj-healthcare",
    category: "projects",
    title: "Healthcare Knowledge Base Agent",
    content: `Project: Healthcare Knowledge Base & Insights Agent
Organization: University of Illinois Urbana-Champaign

Description: Built a near-real-time compliance policy monitoring system across 100+ regulatory sources, reducing policy change detection from hours to under 1 minute. Uses Python NLP pipelines, LangGraph-based RAG retrieval, and ChromaDB vector search hosted on cloud infrastructure. Replaced manual tracking with a natural language query interface for compliance teams.

Tech Stack: Python, LangGraph, ChromaDB, NLP, RAG, Cloud Infrastructure`,
    keywords: [
      "healthcare", "knowledge base", "compliance", "policy", "monitoring",
      "langgraph", "chromadb", "vector", "nlp", "rag", "retrieval",
      "real-time", "regulatory", "agent", "agentic", "uiuc"
    ],
  },
  {
    id: "proj-drug-discovery",
    category: "projects",
    title: "Computational Drug Discovery",
    content: `Project: Computational Drug Discovery: Olaparib and Kinase Inhibitors
Organization: University of Illinois Urbana-Champaign

Description: Trained a Chemprop foundation model with a regression layer and active learning loop to predict 5 molecular properties across 600,000 drug candidates. Improved prediction accuracy from 60% to 76% (validated via MAE and R²). Enables in-silico screening at scale, replacing 2–3 years of wet lab synthesis per compound.

Tech Stack: Chemprop, PyTorch, Python, Active Learning, Scikit-Learn`,
    keywords: [
      "drug", "discovery", "chemprop", "olaparib", "kinase", "molecular",
      "active learning", "pytorch", "scikit-learn", "prediction", "accuracy",
      "in-silico", "wet lab", "chemistry", "biology", "pharmaceutical",
      "600000", "foundation model", "regression"
    ],
  },
  {
    id: "proj-lab-automation",
    category: "projects",
    title: "Lab Automation Platform",
    content: `Project: Lab Automation Platform (Molecule Maker Lab)
Organization: Molecule Maker Lab Institute, University of Illinois

Description: Engineered a modular Python + AWS automation pipeline that enabled fully automated chemical synthesis with real-time data logging. Directly contributed to $15M in secured lab funding and saved $80,000/week in operational costs.

Tech Stack: Python, AWS, CloudWatch, FluentControl`,
    keywords: [
      "lab automation", "automation", "pipeline", "aws", "cloudwatch",
      "fluentcontrol", "chemical synthesis", "real-time", "logging",
      "$15m", "$80k", "80000", "funding", "molecule", "maker"
    ],
  },
  {
    id: "proj-genai-platform",
    category: "projects",
    title: "Enterprise GenAI Platform (Baioniq)",
    content: `Project: Enterprise GenAI Platform (Quantiphi / Baioniq)
Organization: Quantiphi, Inc.

Description: Quantiphi's first enterprise GenAI deployment for 300 users. LLM workflow system with RAG pipelines and re-ranking. Reduced average response time from 10 to 4 minutes, saving 3,000+ work hours across 100+ daily queries per user. Saves 4,500 hours/week in production.

Tech Stack: LLM APIs, RAG, Python, GCP`,
    keywords: [
      "baioniq", "genai", "enterprise", "platform", "300 users", "llm",
      "workflow", "rag", "re-ranking", "4500", "4,500", "hours", "production",
      "quantiphi", "gcp", "generative ai", "response time"
    ],
  },
  {
    id: "proj-illini-success",
    category: "projects",
    title: "Illini Success Student Employment Dashboard",
    content: `Project: Illini Success Student Employment Data Dashboard
Organization: University of Illinois, Urbana-Champaign

Description: Optimized data preparation for visualizations by designing and implementing an ETL pipeline that extracted and integrated student employment data from 3+ databases into structured CSV files. Facilitated data-driven decision-making for 500+ graduate students by creating an interactive Tableau dashboard with 18 KPIs, uncovering insights into career trends and the correlation between academics and employment outcomes.

Tech Stack: ETL, Python, Tableau, SQL, CSV, Data Integration`,
    keywords: [
      "illini success", "student employment", "etl", "pipeline", "tableau",
      "dashboard", "kpi", "graduate students", "career trends", "data preparation",
      "visualization", "database", "csv", "employment", "academics", "uiuc",
      "data-driven", "decision-making", "18 kpi", "500 students"
    ],
  },
  {
    id: "proj-llm-cognitive",
    category: "projects",
    title: "LLM Research for Cognitive Performance Augmentation",
    content: `Project: LLM Research for Cognitive Performance Augmentation
Organization: University of Illinois, Urbana-Champaign

Description: Simulated a cross-functional product team using Mistral 7B agents to generate a wellness app proposal over 5 iterative rounds, achieving 92% role alignment and less than 10% repetition. Built a memory-augmented AutoGen system that demonstrates the potential of LLMs in commercial co-creation and collaborative AI workflows.

Tech Stack: Mistral 7B, AutoGen, Multi-Agent Systems, Python, LLM APIs`,
    keywords: [
      "llm research", "cognitive", "performance", "augmentation", "mistral",
      "mistral 7b", "autogen", "multi-agent", "memory-augmented", "wellness app",
      "cross-functional", "product team", "role alignment", "co-creation",
      "iterative", "92%", "uiuc", "agentic", "simulation", "collaborative"
    ],
  },
  {
    id: "proj-monte-carlo",
    category: "projects",
    title: "Climate and Insurance Risk: Monte Carlo Simulations",
    content: `Project: Assessing Climate and Insurance Risk Using Monte Carlo Simulations
Organization: University of Illinois, Urbana-Champaign

Description: Developed a Monte Carlo simulation model to assess climate and insurance risk, simulating 10,000 scenarios of weather-related events and their economic impacts, resulting in a 25% improvement in risk assessment accuracy for climate-related insurance claims. Analyzed climate risk exposure using stochastic processes, quantifying potential insurance losses and evaluating the financial resilience of insurance portfolios, leading to actionable insights for premium adjustments and risk mitigation strategies.

Tech Stack: Python, Monte Carlo Simulation, Stochastic Processes, Statistical Modeling, Risk Analytics`,
    keywords: [
      "monte carlo", "simulation", "climate", "insurance", "risk", "stochastic",
      "10000 scenarios", "10,000", "weather", "economic impact", "25%",
      "risk assessment", "premium", "mitigation", "financial resilience",
      "portfolio", "quantitative", "modeling", "uiuc", "actuarial", "statistics"
    ],
  },
  {
    id: "skills-ai",
    category: "skills",
    title: "AI/ML/RAG/Agentic/LLM Skills",
    content: `AI & ML Skills:
- Languages: Python (TensorFlow, PyTorch, Scikit-Learn, Pandas, NumPy), R, SQL, Bash, JavaScript
- AI & ML: Machine Learning, NLP, Generative AI & LLMs (GANs, Transformers), HuggingFace, RAG Systems, Model Fine-Tuning, Model Evaluation, Synthetic Data Generation, Prompt Engineering, LLM APIs (Groq, OpenAI, Anthropic/Claude)
- Agentic AI & Vector Search: LangChain, LangGraph, LlamaIndex, AutoGen, CrewAI, Google ADK, Strands, Conversational Systems, MCPs, Vector Databases (FAISS, Pinecone, Chroma, ChromaDB)
- MLOps & AI Tools: CI/CD, Git, Docker, Kubernetes, FastAPI, System Design, SDLC, Cursor IDE, Claude Code, Gemini CLI, GitHub Copilot, Redis`,
    keywords: [
      "python", "pytorch", "tensorflow", "scikit-learn", "pandas", "numpy",
      "nlp", "machine learning", "generative ai", "llm", "gpt", "transformer",
      "rag", "fine-tuning", "huggingface", "langchain", "langgraph", "llamaindex",
      "autogen", "crewai", "vector database", "faiss", "pinecone", "chromadb",
      "docker", "kubernetes", "fastapi", "git", "prompt engineering",
      "groq", "openai", "anthropic", "claude", "agentic", "mcp", "skills",
      "tech stack", "tools", "programming"
    ],
  },
  {
    id: "skills-cloud",
    category: "skills",
    title: "Cloud, MLOps, Data Skills",
    content: `Cloud & Data Skills:
- Cloud: AWS (SageMaker, Bedrock, Lambda), GCP (Vertex AI, DialogflowCX, BigQuery, Dataflow), Azure AI Foundry
- Data Platforms: Databricks, Snowflake, Supabase, PostgreSQL
- Data & Analytics: Airflow, Spark, ETL Pipelines, Tableau, matplotlib, PowerBI, REST APIs, Streamlit, Jira

Certifications:
- BCG X Generative AI Certification
- GCP Associate Cloud Engineer (2022–2025)
- Introduction to Generative AI (Google)
- Introduction to Image Generation (Google)
- Introduction to Large Language Models (Google)`,
    keywords: [
      "aws", "gcp", "azure", "cloud", "sagemaker", "bedrock", "lambda",
      "vertex ai", "dialogflowcx", "bigquery", "dataflow", "databricks",
      "snowflake", "supabase", "postgresql", "airflow", "spark", "etl",
      "tableau", "powerbi", "streamlit", "certification", "bcg", "google"
    ],
  },
  {
    id: "standout",
    category: "profile",
    title: "What Makes Sarthak Stand Out",
    content: `What Makes Sarthak Stand Out:

1. Rare combination of deep technical AI skills + business impact delivery: he doesn't just build models, he ships systems that save millions and secure funding.

2. End-to-end experience: from fine-tuning foundation models and building RAG pipelines to deploying production systems on AWS/GCP and presenting to C-suite executives.

3. Proven at multiple scales: from 300-user internal platforms (Baioniq) to $100M government deployments (Illinois IDES) to $15M-funded research automation (Molecule Maker Lab).

4. Strong academic foundation: UIUC MSIM, 3.92 GPA, combined with 3+ years of industry experience spanning AI engineering, applied research, and business outcomes.

5. Genuinely curious and fast-learning: his career spans chemistry lab AI, financial services NLP, healthcare compliance, and drug discovery. Adapting quickly to new domains is core to his approach.

6. Bridges technical engineering and business stakeholders: collaborative, fast-moving, outcome-oriented. Comfortable translating complex AI work into business value for C-suite, investors, and funding committees.

Professional summary: AI Engineer with 3+ years building and deploying production-grade AI systems, from multi-agent LLM architectures and RAG pipelines to Baioniq, a GenAI platform saving 4,500 hours per week in production.

Personal philosophy: Sarthak was drawn to AI because individual effort has a ceiling. He wanted to solve problems at scale. His proudest achievement is the lab automation platform at Molecule Maker Lab, not for the $80K/week savings, but because it freed scientists to focus on discovery instead of repetitive tasks.

Hidden edge: Sarthak is a business translator. He can sit with engineers debugging a PyTorch model and walk into the boardroom an hour later to explain it in ROI terms. He has done both in the same day at Quantiphi repeatedly.

Tagline: "I translate AI into visible impact, be it as a solutions engineer or an AI engineer."

Target: Enterprise AI at scale. Big infrastructure, real users, meaningful problems.`,
    keywords: [
      "stand out", "unique", "why", "differentiated", "special", "best",
      "strengths", "profile", "summary", "background", "experience", "career",
      "technical", "business", "impact", "production", "scale", "fast",
      "curious", "learn", "domain", "personality", "work style", "approach"
    ],
  },
  {
    id: "target-roles",
    category: "profile",
    title: "Target Roles & Contact",
    content: `Target Roles:
Sarthak is targeting roles such as: AI/ML Engineer, Applied AI Engineer, LLM Engineer, Agentic AI Developer, Machine Learning Engineer, AI Research Engineer, Solutions Engineer (AI/ML), Data Scientist (AI focus). He is open to roles in tech companies, AI startups, research labs, and enterprise AI teams.

Availability: Actively seeking full-time roles. Available May 2026 upon completing MSIM at UIUC. Open to starting earlier for the right opportunity.

Contact:
- Email: src16@illinois.edu
- LinkedIn: sarthakchandarana123
- Schedule a Call: Use the "Schedule a Call" button on this site to book time directly with Sarthak.`,
    keywords: [
      "target", "role", "job", "position", "hiring", "looking for",
      "ai engineer", "ml engineer", "machine learning", "applied ai",
      "llm engineer", "agentic", "data scientist", "solutions engineer",
      "startup", "research", "full-time", "available", "contact",
      "email", "linkedin", "schedule", "call", "interview", "opportunity"
    ],
  },
]

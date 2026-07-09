export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  status: "Current" | "Completed" | "Prototype" | "Case Study";
  summary: string;
  problem: string;
  built: string[];
  architecture: string[];
  decisions: string[];
  proves: string[];
  tags: string[];
  category: string[];
  links: {
    github?: string;
    linkedin?: string;
    demo?: string;
    caseStudy?: string;
  };
};

export type Insight = {
  id: string;
  title: string;
  readTime: string;
  date: string;
  summary: string;
  coreIdea: string;
  whyItMatters: string;
  breakdown: string[];
  sections: {
    title: string;
    body: string;
    bullets?: string[];
  }[];
  tags: string[];
  relatedProjects: string[];
  originalUrl?: string;
};

export type Skill = {
  name: string;
  group: "MLOps" | "GenAI" | "Cloud" | "Engineering" | "Frontend";
  evidence: string[];
  related: string[];
};

export const profile = {
  name: "Mario Wangen",
  role: "Senior Software Engineer",
  positioning: "AI Infrastructure · MLOps · Production AI",
  tagline: "Building reliable AI systems that survive after the demo.",
  location: "Dresden Area, Germany",
  email: "",
  linkedin: "https://www.linkedin.com/in/mariowangen/",
  github: "",
  cvUrl: "/Mario-Wangen-CV.pdf"
};

export const stats = [
  { label: "Years Engineering", value: "20+", hint: "Enterprise, SaaS, cloud, AI" },
  { label: "AI Projects", value: "15+", hint: "RAG, agents, MLOps, CV" },
  { label: "Technical Articles", value: "12", hint: "Production AI & engineering" },
  { label: "Open Source Projects", value: "8", hint: "Showcases and experiments" }
];

export const builderIndex = [
  { label: "Projects", value: "18" },
  { label: "Deployments", value: "34" },
  { label: "Articles", value: "21" },
  { label: "Experiments", value: "140+" },
  { label: "Technologies", value: "46" },
  { label: "Years", value: "20+" }
];

export const featuredTags = [
  "Python",
  "MLOps",
  "AWS",
  "Kubernetes",
  "Terraform",
  "RAG",
  "AI Agents",
  "LangGraph",
  "CI/CD",
  "FastAPI",
  "Docker",
  "React",
  "MLflow",
  "PyTorch",
  "Vector DBs"
];

export const projects: Project[] = [
  {
    id: "production-mlops-pipeline",
    title: "Production MLOps Pipeline",
    subtitle: "From experiment to validated model deployment",
    year: "2025–Now",
    status: "Current",
    summary: "CI/CD and MLOps infrastructure for computer vision workflows: training automation, validation gates, model registry, promotion and reproducible environments.",
    problem: "ML teams can move fast in notebooks, but production requires traceability, repeatability, validation and clean handoff between training and deployment.",
    built: [
      "CI/CD pipelines for PyTorch training workflows",
      "Validation gates before model promotion",
      "MLflow-based run tracking and model registry flow",
      "Infrastructure automation with AWS, Kubernetes and Terraform",
      "Repeatable development and execution environments"
    ],
    architecture: [
      "Training pipeline produces versioned artifacts and metadata",
      "Validation gates check data, training bootstrapping, metadata and deployability",
      "Registry alias or promotion signal acts as the controlled human approval point",
      "Deployment builds are pinned to the code and model version that produced the artifact"
    ],
    decisions: [
      "Keep proprietary domain details out of public case studies",
      "Prioritize reproducibility and auditability over clever automation",
      "Treat deployment as a tested system boundary, not a manual copy step"
    ],
    proves: [
      "MLOps thinking beyond model metrics",
      "Cloud-native AI infrastructure execution",
      "Ability to work at the boundary between ML scientists and production engineering"
    ],
    tags: ["MLOps", "MLflow", "Kubernetes", "Terraform", "AWS", "PyTorch", "Docker", "CI/CD", "Python"],
    category: ["MLOps", "Cloud", "Production AI"],
    links: {}
  },
  {
    id: "pulse-contentagent",
    title: "PULSE ContentAgent",
    subtitle: "LangGraph workflow for research-driven content generation",
    year: "2025",
    status: "Completed",
    summary: "A multi-stage GenAI system with research, memory retrieval, content generation, scoring, evaluation and retry loops.",
    problem: "LLM content generators often produce plausible drafts without memory, market context or quality gates. PULSE turns that into a controlled workflow.",
    built: [
      "LangGraph workflow with conditional routing",
      "Memory retrieval with vector search",
      "Research and market-insight pipeline",
      "LLM-as-judge scoring and retry loop",
      "Exportable structured outputs for publishing workflows"
    ],
    architecture: [
      "Research node gathers external context",
      "Retriever node pulls relevant memory and prior examples",
      "Generator creates variants for different platforms",
      "Judge evaluates quality and triggers retry if needed",
      "Export node produces structured JSON-ready output"
    ],
    decisions: [
      "Separate small model jobs instead of one giant prompt",
      "Put quality boundaries between stages",
      "Store the content as reusable structured assets"
    ],
    proves: [
      "Practical agent orchestration",
      "Evaluation-aware GenAI workflow design",
      "Product thinking around AI systems, not just prompts"
    ],
    tags: ["LangGraph", "RAG", "OpenAI", "Chroma", "Streamlit", "AI Agents", "Vector DBs", "Python"],
    category: ["GenAI", "AI Agents", "RAG"],
    links: {}
  },
  {
    id: "rag-knowledge-system",
    title: "RAG Knowledge System",
    subtitle: "Retrieval-augmented assistant over structured knowledge",
    year: "2024",
    status: "Completed",
    summary: "A RAG-based knowledge assistant focused on ingestion, chunking, retrieval quality and usable answers over project-specific material.",
    problem: "Useful knowledge systems need more than vector search. They need carefully shaped context, retrieval controls and an interface that makes answers useful.",
    built: [
      "Document ingestion pipeline",
      "Chunking and embedding strategy",
      "Retriever configuration and answer generation",
      "Conversation interface for exploring domain material"
    ],
    architecture: [
      "Documents are parsed and split into searchable chunks",
      "Embeddings are stored in a vector database",
      "Retriever selects relevant context per question",
      "LLM answers with context-aware responses"
    ],
    decisions: [
      "Optimize chunking for answerability, not just storage",
      "Make retrieval behavior inspectable",
      "Keep the system simple enough to maintain"
    ],
    proves: ["RAG fundamentals", "LLM application architecture", "Evaluation mindset around retrieval quality"],
    tags: ["RAG", "LangChain", "Vector DBs", "OpenAI", "Python", "Chroma"],
    category: ["GenAI", "RAG"],
    links: {}
  },
  {
    id: "startupcoach",
    title: "StartupCoach",
    subtitle: "RAG + function-calling assistant for startup guidance",
    year: "2024",
    status: "Completed",
    summary: "An AI coach that combines retrieval, function calling and structured guidance for founders and early-stage product builders.",
    problem: "Generic startup advice is noisy. A useful assistant needs grounding, clear interaction patterns and structured next steps.",
    built: ["RAG assistant", "Function calling workflow", "Guided Q&A", "Structured feedback patterns"],
    architecture: ["Retriever grounds advice in selected material", "Tool calls structure specific actions", "Conversation layer adapts to founder questions"],
    decisions: ["Prefer focused workflow over open-ended chatbot behavior", "Use retrieval to reduce generic advice"],
    proves: ["Applied RAG", "Tool-use design", "User-facing AI product thinking"],
    tags: ["RAG", "Function Calling", "OpenAI", "Python", "FastAPI", "React"],
    category: ["GenAI", "RAG", "AI Product"],
    links: {}
  },
  {
    id: "interviewcoach",
    title: "InterviewPreparationCoach",
    subtitle: "Adaptive LLM interview simulation",
    year: "2024",
    status: "Completed",
    summary: "An interview preparation system with adaptive questioning, feedback, scoring and summary output.",
    problem: "Static interview preparation does not adapt to weak answers. A useful coach should probe, evaluate and guide improvement.",
    built: ["Adaptive interview flow", "LLM-as-judge feedback", "JSON-based scoring", "Summary and improvement notes"],
    architecture: ["Question engine selects next prompt", "Answer evaluator scores and explains", "Session summary distills patterns and next steps"],
    decisions: ["Use structured outputs to keep feedback consistent", "Separate interview flow from evaluation logic"],
    proves: ["Prompt orchestration", "Evaluation design", "Practical learning tools with LLMs"],
    tags: ["OpenAI", "Prompt Engineering", "LLM Evaluation", "Python", "Streamlit"],
    category: ["GenAI", "Evaluation"],
    links: {}
  },
  {
    id: "easycover-ai",
    title: "EasyCover AI",
    subtitle: "Resume-to-cover-letter automation",
    year: "2024",
    status: "Prototype",
    summary: "A focused AI app that maps resume evidence to job posting requirements and drafts tailored cover letters.",
    problem: "Cover letters are repetitive, but generic automation produces weak results. The useful layer is evidence mapping between candidate profile and job requirements.",
    built: ["Resume parsing", "Job post analysis", "Evidence mapping", "Draft generation workflow"],
    architecture: ["Input parser extracts profile signals", "Job analyzer extracts requirements", "Generator writes role-specific narrative"],
    decisions: ["Ground output in candidate evidence", "Avoid empty motivational language"],
    proves: ["LLM workflow design", "Job-market product thinking", "Structured generation"],
    tags: ["OpenAI", "Python", "Streamlit", "RAG", "Career Tech"],
    category: ["GenAI", "AI Product"],
    links: {}
  }
];

export const insights: Insight[] = [
  {
    id: "ml-source-of-truth-matrix",
    title: "The ML Source of Truth Matrix",
    readTime: "5 min read",
    date: "Live",
    summary: "A six-row framework for deciding where code, environments, data, experiments, models and deployments are version-pinned.",
    coreIdea: "Every ML system has multiple sources of truth unless ownership is explicit. The matrix assigns one tool and one pin mechanism to each concern.",
    whyItMatters: "Without clear ownership, teams cannot reproduce training runs, trace incidents, or know exactly which model and code are running.",
    breakdown: [
      "Code is pinned by Git commit SHA",
      "Python environment is pinned by a lockfile",
      "Data is pinned by DVC and object storage hashes",
      "Experiments and release models are pinned through MLflow tracking and registry metadata"
    ],
    sections: [
      {
        title: "The six things that must be pinned",
        body: "The article frames reproducibility as a system property. Each moving part needs one owner and one pin mechanism.",
        bullets: [
          "Code -> Git -> commit SHA",
          "Python environment -> Pixi or equivalent -> lockfile",
          "Data -> DVC and object storage -> content hash",
          "Experiments -> MLflow tracking -> run ID",
          "Release models -> MLflow registry -> model version and alias",
          "Deployment -> infrastructure repo -> alias resolved at startup"
        ]
      },
      {
        title: "Why this matters",
        body: "If a concern is not pinned somewhere, the team does not have a source of truth. It has a guess. That guess becomes painful during rollbacks, audits and production incidents.",
        bullets: [
          "Training runs become hard to reproduce",
          "Model rollbacks depend on informal knowledge",
          "Production incidents are traced across partial version records instead of one coherent chain"
        ]
      }
    ],
    tags: ["MLOps", "MLflow", "DVC", "Reproducibility", "Platform Engineering"],
    relatedProjects: ["production-mlops-pipeline"]
  },
  {
    id: "mlops-maturity-ladder",
    title: "The MLOps Maturity Ladder",
    readTime: "6 min read",
    date: "Live",
    summary: "A five-stage model for understanding where an ML team is today and what the next infrastructure step costs.",
    coreIdea: "Teams move from manual model handling to tracked, validated, gated and finally promoted workflows. The useful question is not perfection, but the next rung.",
    whyItMatters: "Recruiters and engineering leaders can quickly see that the work is framed as systems maturity, not isolated tooling.",
    breakdown: [
      "Manual: local training, manual deployment, no audit trail",
      "Tracked: experiments and data versions exist, but automation is missing",
      "Validated: CI catches data and training pipeline failures early",
      "Promoted: alias flips and deployment gates move models without a person in the hot path"
    ],
    sections: [
      {
        title: "Stage 1: Manual",
        body: "Training happens locally, weights move by hand, and one person often becomes the deployment path. There is no durable audit trail."
      },
      {
        title: "Stage 2: Tracked",
        body: "Experiments and datasets are logged, so the team can find what happened. The next step is turning that knowledge into automation."
      },
      {
        title: "Stage 3: Validated",
        body: "CI starts catching broken data, import errors, configuration drift and tiny training failures before expensive jobs run."
      },
      {
        title: "Stage 4-5: Gated and promoted",
        body: "Models pass quality and deployment gates, then promotion becomes an alias or approval signal that triggers the downstream pipeline.",
        bullets: [
          "The model is validated before registration or promotion",
          "The deployment smoke test verifies the server boundary",
          "Rollback and auditability are designed into the flow"
        ]
      }
    ],
    tags: ["MLOps", "Platform Engineering", "CI/CD", "MLflow", "DevOps"],
    relatedProjects: ["production-mlops-pipeline"]
  },
  {
    id: "gpu-waste-audit",
    title: "The GPU Waste Audit",
    readTime: "6 min read",
    date: "Live",
    summary: "How preventable data, environment and reproducibility failures quietly burn expensive GPU time.",
    coreIdea: "Many GPU failures are not model problems. They are pipeline, data, config and environment problems that could be caught in minutes on CPU.",
    whyItMatters: "It turns MLOps investment into a practical cost and reliability argument that engineering managers understand.",
    breakdown: [
      "Bad data should fail before a long training run starts",
      "VRAM math should be checked before the job reaches the GPU",
      "Wrong configs can produce plausible but useless results",
      "Unreproducible runs waste value even when metrics look good"
    ],
    sections: [
      {
        title: "Where the waste hides",
        body: "The post treats GPU waste as preventable failure time, not just hardware cost.",
        bullets: [
          "Bad data: zero-annotation images, schema drift and corrupted files",
          "VRAM mismatch: image size, anchors and batch shape exceed memory assumptions",
          "Wrong config: the run completes but answers the wrong experiment question",
          "Environment mismatch: CUDA or package differences appear only on the training agent"
        ]
      },
      {
        title: "The audit question",
        body: "For each failure category, estimate how often it happens and how long the average failed run takes. That number is the preventable waste a CPU-side CI gate can reduce."
      },
      {
        title: "Portfolio signal",
        body: "This is the managerial argument for MLOps: the pipeline is not overhead if it prevents expensive, low-signal training runs."
      }
    ],
    tags: ["MLOps", "GPU", "CI/CD", "Data Quality", "Machine Learning"],
    relatedProjects: ["production-mlops-pipeline"]
  },
  {
    id: "agentic-mlops-ci-gate",
    title: "Agentic MLOps: From Requirement to Running CI Gate",
    readTime: "8 min read",
    date: "Live",
    summary: "A concrete example of using an AI agent to implement a post-training validation gate, with human review as the control point.",
    coreIdea: "Agentic engineering moves the engineer from writing every implementation detail toward precise requirements and rigorous review.",
    whyItMatters: "It shows modern AI-assisted engineering in a production-minded context without pretending the review step disappears.",
    breakdown: [
      "The requirement defines metadata, metric and secret-scanning checks",
      "The agent reads the codebase, writes the validation script and wires CI",
      "The engineer reviews whether the working code enforces the right contract",
      "The failure mode is code that runs correctly but solves the wrong problem"
    ],
    sections: [
      {
        title: "The requirement",
        body: "After every full GPU training run, validate that the experiment tracker contains the required reproducibility metadata, bounded metrics and no secrets in logged parameters.",
        bullets: [
          "Required tags: commit, branch, dataset version and pipeline ID",
          "Metric checks: expected bounds for key training outputs",
          "Safety checks: no secret-looking values in tracked params"
        ]
      },
      {
        title: "What the agent can do",
        body: "The agent can read the codebase, identify where metadata is logged, write the validation script, add a CI step and iterate on failing tests."
      },
      {
        title: "What the engineer still owns",
        body: "The important review is not just whether the code compiles. It is whether the generated implementation enforces the right production contract.",
        bullets: [
          "Precise acceptance criteria matter more than vague prompts",
          "Review catches correct-looking code that validates the wrong thing",
          "The engineer moves toward requirements, boundaries and judgment"
        ]
      }
    ],
    tags: ["Agentic AI", "MLOps", "CI/CD", "LLMOps", "Platform Engineering"],
    relatedProjects: ["production-mlops-pipeline"]
  },
  {
    id: "four-gates-ai-readiness",
    title: "Four Gates Before a Model Touches Production",
    readTime: "5 min read",
    date: "Live",
    summary: "Why production ML pipelines need more than one accuracy check before a model can ship.",
    coreIdea: "Most ML pipelines have one gate: a metric. Production systems need gates for data, training execution, reproducibility metadata and deployment behavior.",
    whyItMatters: "A model can look good in a notebook and still fail when it meets real data, CI, infrastructure and deployment boundaries.",
    breakdown: [
      "Data gate catches missing files, schema drift and unusable inputs",
      "Training smoke gate catches pipeline failures before wasting GPU time",
      "Metadata gate confirms the run can be reproduced and audited",
      "Deployment gate verifies the model server starts and answers inference requests"
    ],
    sections: [
      {
        title: "Gate 1: Data readiness",
        body: "Before training starts, the pipeline checks whether the expected data exists, is shaped correctly and can be consumed by the training code.",
        bullets: [
          "Missing paths or object-store failures",
          "Schema or label format drift",
          "Empty or invalid annotations",
          "Wrong dataset version for the run"
        ]
      },
      {
        title: "Gate 2: Training smoke test",
        body: "A tiny CPU run proves that the training pipeline can boot, load data, step through the model and fail fast on NaNs, import errors or config mistakes."
      },
      {
        title: "Gate 3: Reproducibility metadata",
        body: "After real training, the run must contain enough metadata to reproduce and audit it later.",
        bullets: [
          "Git commit and branch",
          "Dataset hash or DVC version",
          "Environment lock or image reference",
          "MLflow run ID, params and metrics"
        ]
      },
      {
        title: "Gate 4: Deployment smoke test",
        body: "The model server or container starts with the candidate weights and answers an inference request before anything is promoted."
      }
    ],
    tags: ["MLOps", "CI/CD", "PyTorch", "MLflow", "Production AI"],
    relatedProjects: ["production-mlops-pipeline"]
  },
  {
    id: "ci-datasets",
    title: "CI Datasets: Testing Pipelines Without Pulling the World",
    readTime: "5 min read",
    date: "Live",
    summary: "A practical middle path between huge production datasets and fake synthetic samples in CI.",
    coreIdea: "A CI dataset should be tiny, real, versioned and fast enough to pull on every run. It should catch pipeline breakage without pretending to replace full data validation.",
    whyItMatters: "CI for ML needs fast feedback and realistic failure signals without turning every commit into an expensive data operation.",
    breakdown: [
      "Use a small pre-generated subset of real data",
      "Store it as a versioned artifact that pulls quickly",
      "Keep full data validation separate from smoke testing",
      "Treat sample drift as a meaningful failure, not noise"
    ],
    sections: [
      {
        title: "The problem with real data in CI",
        body: "Pulling the full training dataset makes every commit slow, brittle and dependent on credentials, network state and changing production data."
      },
      {
        title: "The problem with fake data",
        body: "Synthetic samples prove that code can execute, but they often miss the actual label distribution, file layout and edge cases that break the pipeline."
      },
      {
        title: "The middle path",
        body: "Use a tiny, pre-generated subset of real data as a pinned CI artifact.",
        bullets: [
          "Small enough to pull in seconds",
          "Real enough to catch format and schema issues",
          "Stable enough that failures mean something",
          "Separate from the full real-data validation gate"
        ]
      }
    ],
    tags: ["MLOps", "CI/CD", "DVC", "Data Engineering", "Testing"],
    relatedProjects: ["production-mlops-pipeline"]
  },
  {
    id: "alias-based-model-promotion",
    title: "Alias-Based Model Promotion",
    readTime: "9 min read",
    date: "Live",
    summary: "How a model registry alias can become the only human approval gesture while the pipeline handles validation, packaging and release.",
    coreIdea: "The alias flip is the approval. Everything downstream should be automated, gated and tied to the exact commit that produced the weights.",
    whyItMatters: "It removes the bottleneck person from deployment while improving traceability, rollback and confidence in what was actually tested.",
    breakdown: [
      "Candidate models are registered after a sweep",
      "A human sets a staging or production alias in the registry",
      "The pipeline validates the alias, builds the image and runs smoke tests",
      "Production builds use the commit that produced the weights, not current HEAD"
    ],
    sections: [
      {
        title: "Before: the bottleneck person",
        body: "The old workflow is familiar: a scientist trains a model, saves weights somewhere, asks someone else to deploy, and the system relies on coordination instead of a contract."
      },
      {
        title: "The alias as approval",
        body: "A registry alias such as staging or production becomes the human approval gesture. The pipeline observes the alias and owns the rest."
      },
      {
        title: "The promotion chain",
        body: "After the alias is set, automation validates the model and builds the deployment artifact.",
        bullets: [
          "Resolve the alias to a concrete model version",
          "Verify the producing commit is valid",
          "Build a container using the model from the registry",
          "Run deployment smoke tests",
          "Push the staged or production image"
        ]
      },
      {
        title: "Why production builds use the producing commit",
        body: "Production should ship the code that produced and validated the weights, not whatever happens to be on main when the deployment runs."
      }
    ],
    tags: ["MLOps", "MLflow", "Model Registry", "CI/CD", "Platform Engineering"],
    relatedProjects: ["production-mlops-pipeline"]
  },
  {
    id: "golden-snapshots",
    title: "Golden Snapshots: Catching Models That Change Answers",
    readTime: "7 min read",
    date: "Live",
    summary: "How fixed prediction snapshots catch behavior changes that aggregate metrics can hide.",
    coreIdea: "A model can improve a headline metric and still change answers on important existing cases. Golden snapshots make those changes visible.",
    whyItMatters: "In regulated or high-stakes domains, consistency and explainable change are just as important as raw performance improvements.",
    breakdown: [
      "Store predictions on a fixed test set at promotion time",
      "Compare future model candidates against the snapshot",
      "Flag or block changes that exceed agreed thresholds",
      "Use differences as review material, not just pass/fail output"
    ],
    sections: [
      {
        title: "The gap in standard evaluation",
        body: "Aggregate metrics can improve while individual predictions change in ways that matter to users, reviewers or downstream systems."
      },
      {
        title: "What a golden snapshot stores",
        body: "At promotion time, the system stores per-sample predictions for a fixed representative test set, plus metadata describing the model and run that produced them.",
        bullets: [
          "Prediction artifact",
          "Model version",
          "Git commit",
          "MLflow run ID"
        ]
      },
      {
        title: "How release comparison works",
        body: "Every future candidate predicts on the same fixed set. If the behavior delta exceeds the agreed threshold, promotion fails or requires review."
      },
      {
        title: "Why it matters",
        body: "In high-stakes domains, consistency is not a side effect. It is a feature that needs its own gate."
      }
    ],
    tags: ["MLOps", "Evaluation", "Data Quality", "Production AI"],
    relatedProjects: ["production-mlops-pipeline"]
  }
];

export const capabilities = [
  { name: "Build AI Applications", proof: "8 projects", tags: ["GenAI", "RAG", "AI Agents"] },
  { name: "Deploy Models", proof: "Production workflow", tags: ["MLOps", "Kubernetes", "Docker"] },
  { name: "MLOps Pipelines", proof: "Current focus", tags: ["MLflow", "CI/CD", "PyTorch"] },
  { name: "RAG Systems", proof: "Multiple implementations", tags: ["RAG", "Vector DBs", "LangChain"] },
  { name: "AI Agents", proof: "LangGraph, CrewAI", tags: ["AI Agents", "LangGraph"] },
  { name: "Cloud Infrastructure", proof: "AWS, K8s, Terraform", tags: ["AWS", "Kubernetes", "Terraform"] },
  { name: "Technical Writing", proof: "MLOps & GenAI posts", tags: ["Writing", "MLOps"] },
  { name: "Engineering Leadership", proof: "Senior delivery experience", tags: ["Architecture", "Delivery"] }
];

export const skills: Skill[] = [
  { name: "MLOps", group: "MLOps", evidence: ["Production MLOps Pipeline", "Validation gates", "Model promotion flow"], related: ["MLflow", "CI/CD", "PyTorch"] },
  { name: "MLflow", group: "MLOps", evidence: ["Run tracking", "Model registry", "Metadata validation"], related: ["MLOps", "PyTorch", "CI/CD"] },
  { name: "Kubernetes", group: "Cloud", evidence: ["Cloud AI infrastructure", "Model deployment systems"], related: ["Docker", "AWS", "Terraform"] },
  { name: "Terraform", group: "Cloud", evidence: ["Infrastructure automation", "Cloud environment setup"], related: ["AWS", "Kubernetes"] },
  { name: "AWS", group: "Cloud", evidence: ["Cloud infrastructure for AI systems", "Storage and deployment patterns"], related: ["Terraform", "Kubernetes", "Docker"] },
  { name: "RAG", group: "GenAI", evidence: ["RAG Knowledge System", "PULSE", "StartupCoach"], related: ["Vector DBs", "LangChain", "OpenAI"] },
  { name: "LangGraph", group: "GenAI", evidence: ["PULSE ContentAgent", "Multi-stage workflow orchestration"], related: ["AI Agents", "RAG", "Evaluation"] },
  { name: "Python", group: "Engineering", evidence: ["AI apps", "MLOps automation", "FastAPI services"], related: ["FastAPI", "PyTorch", "OpenAI"] },
  { name: "React", group: "Frontend", evidence: ["Product UIs", "Dashboard interfaces", "Professional website"], related: ["TypeScript", "Next.js"] },
  { name: "CI/CD", group: "Engineering", evidence: ["Training pipelines", "Deployment automation", "Smoke tests"], related: ["MLOps", "Docker", "GitHub Actions"] }
];

export const timeline = [
  { year: "2004+", title: "Enterprise Software", text: "Built and maintained complex business and engineering software over many product cycles." },
  { year: "2010+", title: "SaaS & Web Platforms", text: "Moved from desktop-heavy systems into web, APIs and platform architecture." },
  { year: "2016+", title: "Cloud & DevOps", text: "Focused more deeply on CI/CD, automation, containers, infrastructure and reliable delivery." },
  { year: "2024", title: "GenAI Systems", text: "Built RAG systems, agent workflows, LLM tools and evaluation-driven prototypes." },
  { year: "2025+", title: "MLOps & Production AI", text: "Focused on AI infrastructure, model pipelines, validation gates and production-grade ML workflows." }
];

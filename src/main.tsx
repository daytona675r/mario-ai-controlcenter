import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Home,
  Layers3,
  Mail,
  Moon,
  Search,
  Sparkles,
  Sun,
  TerminalSquare,
  X
} from "lucide-react";
import {
  builderIndex,
  capabilities,
  featuredTags,
  insights,
  profile,
  projects,
  skills,
  stats,
  timeline,
  type Insight,
  type Project
} from "./data/content";
import "./styles.css";

type ViewMode = "recruiter" | "engineer";
type Theme = "light" | "dark";
type Detail = { type: "project"; item: Project } | { type: "insight"; item: Insight } | null;

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mode, setMode] = useState<ViewMode>("recruiter");
  const [activeTag, setActiveTag] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<Detail>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const tagMatch = activeTag === "All" || project.tags.includes(activeTag) || project.category.includes(activeTag);
      const text = [project.title, project.subtitle, project.summary, ...project.tags, ...project.category].join(" ").toLowerCase();
      const searchMatch = !normalizedQuery || text.includes(normalizedQuery);
      return tagMatch && searchMatch;
    });
  }, [activeTag, normalizedQuery]);

  const filteredInsights = useMemo(() => {
    return insights.filter((insight) => {
      const tagMatch = activeTag === "All" || insight.tags.includes(activeTag);
      const text = [insight.title, insight.summary, insight.coreIdea, ...insight.tags].join(" ").toLowerCase();
      const searchMatch = !normalizedQuery || text.includes(normalizedQuery);
      return tagMatch && searchMatch;
    });
  }, [activeTag, normalizedQuery]);

  return (
    <div className={`app-shell ${theme}`}>
      <Sidebar mode={mode} setMode={setMode} />
      <main className="main">
        <Topbar
          query={query}
          setQuery={setQuery}
          theme={theme}
          setTheme={setTheme}
        />
        <section className="page-grid">
          <div className="primary-column">
            <Hero mode={mode} />
            <TagCloud activeTag={activeTag} setActiveTag={setActiveTag} />
            <StatsStrip />
            <InsightsPanel insights={filteredInsights} onOpen={(item) => setDetail({ type: "insight", item })} />
            <ProjectsSection projects={filteredProjects} onOpen={(item) => setDetail({ type: "project", item })} />
            <BuilderIndex />
            <Timeline />
          </div>
          <aside className="side-column">
            <CapabilityMatrix />
            <SkillsEvidence />
          </aside>
        </section>
      </main>
      {detail && <DetailDrawer detail={detail} onClose={() => setDetail(null)} mode={mode} />}
    </div>
  );
}

function Sidebar({ mode, setMode }: { mode: ViewMode; setMode: (mode: ViewMode) => void }) {
  const nav = [
    { label: "Home", icon: Home },
    { label: "Projects", icon: BriefcaseBusiness },
    { label: "Insights", icon: FileText },
    { label: "GitHub", icon: Code2 },
    { label: "Skills", icon: Layers3 },
    { label: "Timeline", icon: TerminalSquare },
    { label: "Contact", icon: Mail }
  ];

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="avatar">MW</div>
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </div>
      </div>

      <nav className="nav-list">
        {nav.map((item, index) => {
          const Icon = item.icon;
          return (
            <button className={index === 0 ? "nav-item active" : "nav-item"} key={item.label}>
              <Icon size={17} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mode-switches">
        <ModeCard
          title="Engineer Mode"
          text="Detailed technical view"
          active={mode === "engineer"}
          onClick={() => setMode("engineer")}
        />
        <ModeCard
          title="Recruiter Mode"
          text="Simplified proof for hiring teams"
          active={mode === "recruiter"}
          onClick={() => setMode("recruiter")}
        />
      </div>

      <div className="social-row">
        <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={17} /></a>
        <a aria-label="GitHub" href={profile.github || "#"}><Code2 size={17} /></a>
        <a aria-label="Email" href={profile.email ? `mailto:${profile.email}` : "#"}><Mail size={17} /></a>
      </div>
    </aside>
  );
}

function ModeCard({ title, text, active, onClick }: { title: string; text: string; active: boolean; onClick: () => void }) {
  return (
    <button className={`mode-card ${active ? "active" : ""}`} onClick={onClick}>
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
      <span className="toggle"><span /></span>
    </button>
  );
}

function Topbar({ query, setQuery, theme, setTheme }: { query: string; setQuery: (value: string) => void; theme: Theme; setTheme: (theme: Theme) => void }) {
  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for skills, projects, articles..." />
        <kbd>Cmd K</kbd>
      </div>
      <div className="top-actions">
        <button className="ghost" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon size={17} /> : <Sun size={17} />} Theme</button>
        <a className="ghost" href={profile.cvUrl}><Download size={17} /> Download CV</a>
        <a className="primary-button" href={profile.linkedin} target="_blank" rel="noreferrer">Let's Connect <ArrowRight size={17} /></a>
      </div>
    </header>
  );
}

function Hero({ mode }: { mode: ViewMode }) {
  return (
    <section className="hero cardless">
      <div>
        <div className="eyebrow"><Sparkles size={16} /> AI Engineering Control Center</div>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="positioning">{profile.positioning}</p>
        <p className="hero-copy">
          {mode === "recruiter"
            ? "A senior engineer with deep software delivery experience and a current focus on AI infrastructure, MLOps and production-grade GenAI systems."
            : "Designing validation gates, reproducible ML pipelines, RAG workflows and cloud-native infrastructure for AI systems that need to move from prototype to production."}
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">Explore My Work <ArrowRight size={17} /></a>
          <a className="secondary-button" href={profile.cvUrl}>View My CV <Download size={17} /></a>
        </div>
      </div>
      <div className="hero-orbit">
        <div className="orbit-card main-orbit">Production AI</div>
        <div className="orbit-card o1">MLOps</div>
        <div className="orbit-card o2">RAG</div>
        <div className="orbit-card o3">Kubernetes</div>
        <div className="orbit-card o4">LangGraph</div>
      </div>
    </section>
  );
}

function TagCloud({ activeTag, setActiveTag }: { activeTag: string; setActiveTag: (tag: string) => void }) {
  return (
    <section className="tag-cloud">
      {["All", ...featuredTags].map((tag) => (
        <button key={tag} onClick={() => setActiveTag(tag)} className={activeTag === tag ? "tag active" : "tag"}>{tag}</button>
      ))}
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="stats-strip glass-card">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <div className="stat-icon"><Code2 size={20} /></div>
          <div><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.hint}</small></div>
        </div>
      ))}
    </section>
  );
}

function ProjectsSection({ projects, onOpen }: { projects: Project[]; onOpen: (project: Project) => void }) {
  return (
    <section id="projects" className="panel-section glass-card">
      <div className="section-heading">
        <div><span className="eyebrow muted">Featured Work</span><h3>Projects that prove the positioning</h3></div>
        <a href="#projects">View all projects <ArrowRight size={15} /></a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <button className="project-card" key={project.id} onClick={() => onOpen(project)}>
            <div className="project-icon"><Layers3 size={22} /></div>
            <div className="status-dot"><span />{project.status}</div>
            <h4>{project.title}</h4>
            <p className="subtitle">{project.subtitle}</p>
            <p>{project.summary}</p>
            <div className="mini-tags">{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="card-link">Case Study <ArrowRight size={15} /></div>
          </button>
        ))}
      </div>
    </section>
  );
}

function InsightsPanel({ insights, onOpen }: { insights: Insight[]; onOpen: (insight: Insight) => void }) {
  return (
    <section className="insights-panel glass-card prominent">
      <div className="section-heading compact">
        <div><span className="eyebrow muted">Technical Thinking</span><h3>Recent Insights</h3></div>
        <a href="#insights">View all <ArrowRight size={15} /></a>
      </div>
      <div className="insight-list">
        {insights.map((insight, index) => (
          <button className={index === 0 ? "insight-item featured" : "insight-item"} key={insight.id} onClick={() => onOpen(insight)}>
            <div className="insight-thumb"><FileText size={index === 0 ? 24 : 18} /></div>
            <div>
              <strong>{insight.title}</strong>
              <p>{insight.summary}</p>
              <span>{insight.readTime} · {insight.tags.slice(0, 2).join(", ")}</span>
            </div>
            <small>{insight.date}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function CapabilityMatrix() {
  return (
    <section className="glass-card capability-card">
      <div className="section-heading compact"><h3>Capability Matrix</h3><a href="#skills">View full <ArrowRight size={15} /></a></div>
      <div className="capability-list">
        {capabilities.map((capability) => (
          <div className="capability-row" key={capability.name}>
            <CheckCircle2 size={18} />
            <span>{capability.name}</span>
            <strong>{capability.proof}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsEvidence() {
  return (
    <section className="glass-card skills-card" id="skills">
      <div className="section-heading compact"><h3>Evidence-backed Skills</h3></div>
      <div className="skills-list">
        {skills.slice(0, 6).map((skill) => (
          <div className="skill-row" key={skill.name}>
            <strong>{skill.name}</strong>
            <span>{skill.evidence[0]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function BuilderIndex() {
  return (
    <section className="builder-index glass-card">
      <div><strong>Builder Index</strong><span>A snapshot of the engineering journey</span></div>
      {builderIndex.map((item) => <div className="builder-stat" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline glass-card">
      <div className="section-heading"><div><span className="eyebrow muted">Career Evolution</span><h3>From enterprise systems to production AI</h3></div></div>
      <div className="timeline-list">
        {timeline.map((item) => <div className="timeline-item" key={item.year}><strong>{item.year}</strong><div><h4>{item.title}</h4><p>{item.text}</p></div></div>)}
      </div>
    </section>
  );
}

function DetailDrawer({ detail, onClose, mode }: { detail: Detail; onClose: () => void; mode: ViewMode }) {
  if (!detail) return null;
  const isProject = detail.type === "project";
  const item = detail.item;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="detail-drawer" onClick={(event) => event.stopPropagation()}>
        <button className="close-button" onClick={onClose}><X size={18} /></button>
        <div className="drawer-header">
          <span className="eyebrow">{isProject ? "Project Case Study" : "Insight Brief"}</span>
          <h2>{item.title}</h2>
          <p>{isProject ? item.summary : item.summary}</p>
          <div className="mini-tags big">
            {(isProject ? item.tags : item.tags).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        {isProject ? <ProjectDetail project={item as Project} mode={mode} /> : <InsightDetail insight={item as Insight} />}
      </aside>
    </div>
  );
}

function ProjectDetail({ project, mode }: { project: Project; mode: ViewMode }) {
  return (
    <div className="drawer-content">
      <DetailBlock title="Problem" body={project.problem} />
      <DetailList title="What I built" items={project.built} />
      {mode === "engineer" && <DetailList title="Architecture" items={project.architecture} />}
      {mode === "engineer" && <DetailList title="Key decisions" items={project.decisions} />}
      <DetailList title="What it proves" items={project.proves} />
      <ExternalLinks links={project.links} />
    </div>
  );
}

function InsightDetail({ insight }: { insight: Insight }) {
  return (
    <div className="drawer-content">
      <DetailBlock title="Core idea" body={insight.coreIdea} />
      <DetailBlock title="Why it matters" body={insight.whyItMatters} />
      <DetailList title="Technical breakdown" items={insight.breakdown} />
      <ExternalLinks links={{ linkedin: insight.originalUrl }} />
    </div>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return <section className="detail-block"><h3>{title}</h3><p>{body}</p></section>;
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return <section className="detail-block"><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

function ExternalLinks({ links }: { links: { github?: string; linkedin?: string; demo?: string; caseStudy?: string } }) {
  const items = [
    { label: "GitHub", href: links.github, icon: Code2 },
    { label: "LinkedIn", href: links.linkedin, icon: ExternalLink },
    { label: "Demo", href: links.demo, icon: ArrowRight },
    { label: "Case Study", href: links.caseStudy, icon: FileText }
  ].filter((item) => item.href);

  if (items.length === 0) {
    return <p className="placeholder-note">External proof links are intentionally left as placeholders. Add GitHub, LinkedIn or demo URLs in <code>src/data/content.ts</code>.</p>;
  }

  return <div className="external-links">{items.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={16} />{label}</a>)}</div>;
}

createRoot(document.getElementById("root")!).render(<App />);

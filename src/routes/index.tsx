import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeoson Lungsod — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jeoson Lungsod, full-stack developer building fast, resilient web applications and sharp interfaces.",
      },
      { property: "og:title", content: "Jeoson Lungsod — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer building fast, resilient web applications and sharp interfaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------- data --------------------------------- */

const TERMINAL_LINES = [
  { cmd: "whoami", out: "jeoson_lungsod" },
  { cmd: "cat ./role.txt", out: "Full-Stack Developer" },
  { cmd: "./status --now", out: "open to new opportunities" },
];

const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

const SKILLS = [
  {
    label: "frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "TanStack"],
  },
  {
    label: "backend",
    items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"],
  },
  {
    label: "infra_tools",
    items: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
  },
];

const PROJECTS = [
  {
    id: "001",
    name: "Nexus Commerce",
    desc: "Headless e-commerce platform with real-time inventory sync and sub-second checkout flows.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "010",
    name: "PulseBoard",
    desc: "Live analytics dashboard streaming millions of events per day over WebSockets.",
    stack: ["TypeScript", "WebSockets", "Redis", "D3.js"],
  },
  {
    id: "011",
    name: "Sentinel API",
    desc: "Rate-limited auth gateway handling OAuth, MFA and session rotation for multi-tenant apps.",
    stack: ["Node.js", "OAuth 2.0", "Docker", "AWS"],
  },
  {
    id: "100",
    name: "Forge CLI",
    desc: "Developer CLI that scaffolds, tests and deploys full-stack projects from a single config file.",
    stack: ["Rust", "CLI", "CI/CD", "YAML"],
  },
];

const EXPERIENCE = [
  {
    period: "2024 — present",
    role: "Senior Full-Stack Developer",
    org: "TechNova Labs",
    points: [
      "Lead development of a multi-tenant SaaS platform serving 40k+ users.",
      "Cut API latency 45% by redesigning the data layer and caching strategy.",
      "Mentor a team of four engineers and run architecture reviews.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Full-Stack Developer",
    org: "Orbit Digital",
    points: [
      "Shipped 12+ client web applications from design handoff to production.",
      "Built a reusable component library adopted across all company projects.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    org: "Freelance",
    points: [
      "Delivered responsive web apps for startups and small businesses.",
      "Specialized in performance audits and accessibility fixes.",
    ],
  },
];

/* --------------------------------- hooks --------------------------------- */

function useTypewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const current = TERMINAL_LINES[lineIndex]?.cmd;
    if (!current) return undefined;
    if (chars < current.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 60);
      return () => clearTimeout(t);
    }
    if (lineIndex < TERMINAL_LINES.length - 1) {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setChars(0);
      }, 900);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [chars, lineIndex]);

  return { lineIndex, chars };
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------- components ------------------------------ */

function ScanOverlay() {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <div className="scan-beam" aria-hidden="true" />
    </>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-sm font-bold tracking-widest text-primary text-glow">
          JL<span className="text-accent">://</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="text-accent">/</span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-xs text-terminal">
          <span className="blink inline-block h-2 w-2 rounded-full bg-terminal" />
          <span className="hidden sm:inline">ONLINE</span>
        </div>
      </div>
    </header>
  );
}

function Terminal() {
  const { lineIndex, chars } = useTypewriter();

  return (
    <div className="panel mx-auto w-full max-w-2xl text-left">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-4/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-terminal/80" />
        <span className="ml-3 text-xs text-muted-foreground">
          jeoson@portfolio: ~
        </span>
      </div>
      <div className="space-y-1.5 px-4 py-4 text-sm sm:px-6">
        {TERMINAL_LINES.map((line, i) => {
          if (i < lineIndex) {
            return (
              <div key={line.cmd}>
                <p>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-foreground">{line.cmd}</span>
                </p>
                <p className="text-terminal">{line.out}</p>
              </div>
            );
          }
          if (i === lineIndex) {
            return (
              <div key={line.cmd}>
                <p className="caret">
                  <span className="text-accent">$</span>{" "}
                  <span className="text-foreground">
                    {line.cmd.slice(0, chars)}
                  </span>
                </p>
                {chars >= line.cmd.length && (
                  <p className="text-terminal">{line.out}</p>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-14"
    >
      <div className="cyber-grid absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-6 text-sm text-muted-foreground">
          <span className="text-accent">&gt;</span> initializing portfolio
          <span className="blink">_</span>
        </p>
        <h1
          className="glitch font-display text-5xl font-black uppercase tracking-wider text-foreground text-glow sm:text-6xl md:text-7xl"
          data-text="JEOSON LUNGSOD"
        >
          JEOSON LUNGSOD
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          {"//"} Full-Stack Developer — building resilient systems and sharp
          interfaces for the modern web.
        </p>
        <div className="mt-10 w-full">
          <Terminal />
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_24px_var(--ring)]"
          >
            view_projects
          </a>
          <a
            href="#contact"
            className="border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            initialize_contact
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 z-10 flex gap-10 text-xs text-muted-foreground">
        <span>
          <span className="text-primary">5+</span> yrs experience
        </span>
        <span>
          <span className="text-primary">20+</span> projects shipped
        </span>
        <span className="hidden sm:inline">
          <span className="text-primary">100%</span> uptime mindset
        </span>
      </div>
    </section>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-sm text-accent">{index}</span>
      <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl" data-reveal>
        <SectionHeading index="01" title="About" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm Jeoson — a full-stack developer who treats every product like
              a system under load: designed for failure, tuned for speed, and
              shipped with intent.
            </p>
            <p>
              I work across the whole stack, from pixel-level interface work to
              database schema design and deployment pipelines. I care about
              clean architecture, honest performance budgets, and code that the
              next engineer can actually read.
            </p>
            <p>
              Off the clock I'm usually breaking my own side projects, then
              writing about why they broke.
            </p>
          </div>
          <div className="panel p-6 text-sm">
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              ./profile --summary
            </p>
            <dl className="space-y-3">
              {[
                ["name", "Jeoson Lungsod"],
                ["role", "Full-Stack Developer"],
                ["focus", "Web platforms & APIs"],
                ["stack", "TypeScript · Node · Postgres"],
                ["availability", "Open to opportunities"],
              ].map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <dt className="text-accent">{key}</dt>
                  <dd className="text-right text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl" data-reveal>
        <SectionHeading index="02" title="Skills" />
        <div className="grid gap-6 md:grid-cols-3">
          {SKILLS.map((group) => (
            <div key={group.label} className="panel p-6">
              <p className="mb-5 text-xs uppercase tracking-widest text-terminal">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl" data-reveal>
        <SectionHeading index="03" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="panel group flex flex-col p-6 transition-shadow hover:shadow-[0_0_32px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-accent">[{project.id}]</span>
                <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  deploy: ok
                </span>
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {project.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl" data-reveal>
        <SectionHeading index="04" title="Experience" />
        <div className="space-y-0">
          {EXPERIENCE.map((job, i) => (
            <div key={job.org} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-3 w-3 shrink-0 border border-primary bg-primary/30 shadow-[0_0_10px_var(--ring)]" />
                {i < EXPERIENCE.length - 1 && (
                  <span className="w-px flex-1 bg-border" />
                )}
              </div>
              <div className="panel-flat flex-1 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                    {job.role}
                  </h3>
                  <span className="text-xs text-terminal">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-accent">@ {job.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div
        className="mx-auto max-w-3xl text-center"
        data-reveal
      >
        <SectionHeading index="05" title="Contact" />
        <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground text-glow sm:text-3xl">
          Initialize contact_
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Have a project, a role, or a hard problem? My inbox is always
          listening.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@jeosonlungsod.dev"
            className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_24px_var(--ring)]"
          >
            send_message
          </a>
          <a
            href="#top"
            className="border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            github
          </a>
          <a
            href="#top"
            className="border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Jeoson Lungsod
          <span className="text-accent"> // </span>
          designed & built in the terminal
        </p>
        <p>
          <span className="text-terminal">●</span> all systems operational
        </p>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScanOverlay />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

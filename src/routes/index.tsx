import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeoson Lungsod — IT Assistant · Cybersecurity" },
      {
        name: "description",
        content:
          "Portfolio of Jeoson Lungsod, IT assistant focused on cybersecurity — threat intel, network analysis, and security monitoring.",
      },
      { property: "og:title", content: "Jeoson Lungsod — IT Assistant · Cybersecurity" },
      {
        property: "og:description",
        content:
          "IT assistant focused on cybersecurity: threat intelligence, network analysis, and security monitoring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Jeoson Lungsod — IT Assistant · Cybersecurity" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jeoson Lungsod",
          jobTitle: "IT Assistant",
          description: "IT assistant focused on cybersecurity.",
          email: "mailto:hello@jeosonlungsod.dev",
          knowsAbout: ["Cybersecurity", "Threat Intelligence", "Splunk", "Wireshark", "Kali Linux"],
          sameAs: [
            "https://github.com/lungsodjeoson164-design",
            "https://www.linkedin.com/in/jeoson-lungsod",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

/* ---------------------------------- data --------------------------------- */

const TERMINAL_LINES = [
  { cmd: "whoami", out: "jeoson_lungsod" },
  { cmd: "cat ./role.txt", out: "IT Assistant · Cybersecurity" },
  { cmd: "./status --now", out: "open to work" },
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
    label: "threat_intel",
    items: ["VirusTotal", "Shodan"],
  },
  {
    label: "monitoring_analysis",
    items: ["Splunk", "Wireshark"],
  },
  {
    label: "security_platforms",
    items: ["Kali Linux"],
  },
];

const PROJECTS = [
  {
    id: "001",
    name: "Incident Reporting",
    context: "CTM Quiz · Security Operations",
    desc: "Investigated a simulated Office 365 credential-theft incident and produced a structured high-severity incident ticket with a verified timeline, indicators of compromise, containment actions, and escalation steps.",
    highlights: [
      "Identified six malware and attack patterns, including ransomware, C2 beaconing, network scanning, adware, fileless malware, and a RAT.",
      "Correlated one unauthorized login with 47 failed attempts from a malicious external IP.",
      "Documented session revocation, password reset, IP blocking, and Tier 2 escalation.",
    ],
    stack: ["Incident Ticketing", "VirusTotal", "Office 365", "Phishing Analysis"],
  },
  {
    id: "010",
    name: "Critical Alert Triage",
    context: "Operation Manila Fog · Full Escalation Simulation",
    desc: "Triaged a simulated active domain compromise involving a privileged login, rogue Domain Admin creation, and 2.1 GB of outbound data transfer from a domain controller.",
    highlights: [
      "Classified all three alerts as true positives and rated the incident Critical.",
      "Mapped activity to T1078.002, T1136.002, T1098, and T1041.",
      "Prepared an incident ticket and SBAR escalation with immediate isolation, account disablement, and IP-blocking recommendations.",
    ],
    stack: ["SIEM", "EDR", "Firewall Logs", "MITRE ATT&CK", "SBAR"],
  },
  {
    id: "011",
    name: "Splunk Security Analytics",
    context: "BOTS v2 Security Overview",
    desc: "Built and reviewed a Splunk dashboard for the Boss of the SOC v2 dataset, turning high-volume security events into filterable visual summaries and searchable event evidence.",
    highlights: [
      "Summarized 68,870,348 events with filters for sourcetype, host, and time range.",
      "Compared event distribution by sourcetype, host, and hour of day.",
      "Reviewed recent HTTP event details across timestamp, host, source, and sourcetype fields.",
    ],
    stack: ["Splunk", "BOTS v2", "SPL", "Dashboarding", "Log Analysis"],
    gallery: [
      {
        src: "/images/projects/splunk-overview.png",
        caption: "BOTS v2 Security Overview",
        alt: "Splunk dashboard with sourcetype, host, and time range filters showing a total of 68,870,348 events.",
        width: 1802,
        height: 502,
      },
      {
        src: "/images/projects/splunk-panels.png",
        caption: "Panel A — Events by Sourcetype",
        alt: "Three pie charts showing events by sourcetype, events by host, and events by hour of day.",
        width: 1800,
        height: 423,
      },
      {
        src: "/images/projects/splunk-events.png",
        caption: "Recent Event Detail",
        alt: "Table of recent stream:http events from host jabbah with time, host, source, and sourcetype columns.",
        width: 1792,
        height: 544,
      },
    ],
  },
];

const EXPERIENCE = [
  {
    period: "present",
    role: "IT Assistant",
    org: "",
    points: [
      "Triage suspicious files and URLs with VirusTotal reputation data.",
      "Map exposed devices and services with Shodan network lookups.",
      "Monitor logs and hunt anomalies in Splunk.",
      "Capture and inspect network traffic with Wireshark.",
      "Practice offensive and defensive security in Kali Linux.",
    ],
  },
];

const SOCIALS = {
  email: "hello@jeosonlungsod.dev",
  github: "https://github.com/lungsodjeoson164-design",
  linkedin: "https://www.linkedin.com/in/jeoson-lungsod",
};

/* --------------------------------- hooks --------------------------------- */

function useTypewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const last = TERMINAL_LINES.length - 1;
      setLineIndex(last);
      setChars(TERMINAL_LINES[last]?.cmd.length ?? 0);
    }
  }, []);

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

function useScrollFlag(threshold: number) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassed(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return passed;
}

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => {
      const el = document.querySelector(link.href);
      return el ? { id: link.href.slice(1), el: el as HTMLElement } : null;
    }).filter(Boolean) as { id: string; el: HTMLElement }[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((s) => io.observe(s.el));
    return () => io.disconnect();
  }, []);

  return activeId;
}

function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
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

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      barRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      style={{ transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}

function Nav() {
  const activeId = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollFlag(40);

  useLockBody(mobileOpen);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-widest text-primary text-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Back to top"
        >
          JL<span className="text-accent">://</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-accent">/</span>
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-terminal">
            <span className="blink inline-block h-2 w-2 rounded-full bg-terminal" />
            <span className="hidden sm:inline">ONLINE</span>
          </div>
          <button
            type="button"
            className="nav-toggle md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`nav-toggle-bar ${mobileOpen ? "open" : ""}`} />
            <span className={`nav-toggle-bar ${mobileOpen ? "open" : ""}`} />
            <span className={`nav-toggle-bar ${mobileOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav className="flex flex-col gap-2 px-6 py-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-3 py-3 text-sm transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-accent">/</span>
                {link.label}
              </a>
            );
          })}
        </nav>
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
          {"//"} IT Assistant focused on cybersecurity — monitoring threats,
          analyzing traffic, and keeping systems locked down.
        </p>
        <div className="mt-10 w-full">
          <Terminal />
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="cyber-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            view_projects
          </a>
          <a
            href="#contact"
            className="cyber-btn-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            initialize_contact
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 z-10 flex gap-10 text-xs text-muted-foreground">
        <span>
          <span className="text-primary">Cyber</span>security focus
        </span>
        <span>
          <span className="text-primary">Open</span> to work
        </span>
        <span className="hidden sm:inline">
          <span className="text-primary">IT</span> support & monitoring
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
              I'm Jeoson — an IT assistant with a cybersecurity focus. I keep
              systems running smoothly
              and watch for anything that shouldn't be running at all.
            </p>
            <p>
              My toolkit covers threat intelligence, network analysis and log
              monitoring — reputation lookups in VirusTotal, exposure checks in
              Shodan, packet captures in Wireshark, and hands-on security work
              in Kali Linux, all tied together in Splunk.
            </p>
            <p>
              I'm open to work: IT support, SOC, and security-adjacent roles
              where both skill sets get used.
            </p>
          </div>
          <div className="panel p-6 text-sm">
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              ./profile --summary
            </p>
            <dl className="space-y-3">
              {[
                ["name", "Jeoson Lungsod"],
                ["role", "IT Assistant"],
                ["focus", "Cybersecurity"],
                ["stack", "VirusTotal · Shodan · Splunk · Wireshark · Kali"],
                ["availability", "Open to work"],
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
              <p className="mt-2 text-xs uppercase tracking-widest text-terminal">
                {project.context}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {project.desc}
              </p>
              <ul className="mt-5 flex-1 space-y-2 border-l border-border pl-4">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span aria-hidden="true" className="text-primary">
                      {">"}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {"gallery" in project && project.gallery && (
                <div className="mt-5 flex flex-col gap-4">
                  {project.gallery.map((shot) => (
                    <figure
                      key={shot.src}
                      className="border border-border bg-background/40 p-2"
                    >
                      <a
                        href={shot.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open full-size screenshot: ${shot.caption}`}
                      >
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          width={shot.width}
                          height={shot.height}
                          loading="lazy"
                          decoding="async"
                          className="h-auto w-full"
                        />
                      </a>
                      <figcaption className="mt-2 text-xs text-primary">
                        <span aria-hidden="true" className="text-accent">
                          {"// "}
                        </span>
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
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
            <div key={`${job.role}-${job.period}`} className="relative flex gap-6 pb-10 last:pb-0">
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
                {job.org ? <p className="mt-1 text-sm text-accent">@ {job.org}</p> : null}
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
            href={`mailto:${SOCIALS.email}`}
            className="cyber-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            send_message
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="cyber-btn-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            github
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="cyber-btn-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
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

function BackToTop() {
  const visible = useScrollFlag(600);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="back-to-top"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function Index() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
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
      <BackToTop />
    </div>
  );
}

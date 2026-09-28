import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-oqkG3m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TERMINAL_LINES = [
	{
		cmd: "whoami",
		out: "jeoson_lungsod"
	},
	{
		cmd: "cat ./role.txt",
		out: "IT Assistant · Cybersecurity"
	},
	{
		cmd: "./status --now",
		out: "open to work"
	}
];
var NAV_LINKS = [
	{
		href: "#about",
		label: "about"
	},
	{
		href: "#skills",
		label: "skills"
	},
	{
		href: "#projects",
		label: "projects"
	},
	{
		href: "#experience",
		label: "experience"
	},
	{
		href: "#contact",
		label: "contact"
	}
];
var SKILLS = [
	{
		label: "threat_intel",
		items: ["VirusTotal", "Shodan"]
	},
	{
		label: "monitoring_analysis",
		items: ["Splunk", "Wireshark"]
	},
	{
		label: "security_platforms",
		items: ["Kali Linux"]
	}
];
var PROJECTS = [
	{
		id: "001",
		name: "SOC Home Lab",
		desc: "Virtualized security lab for log collection, detection rules and incident-response practice.",
		stack: [
			"Splunk",
			"Kali Linux",
			"VMs"
		]
	},
	{
		id: "010",
		name: "Threat Intel Triage",
		desc: "Reputation checks for suspicious files and URLs against VirusTotal, with verdict summaries.",
		stack: [
			"VirusTotal",
			"Automation",
			"CLI"
		]
	},
	{
		id: "011",
		name: "Exposure Audit",
		desc: "Shodan-driven sweep of open ports and services on my own network, with hardening notes.",
		stack: [
			"Shodan",
			"Recon",
			"Reporting"
		]
	},
	{
		id: "100",
		name: "Packet Sleuth",
		desc: "Wireshark capture exercises: reading handshakes, spotting anomalies and sketchy traffic.",
		stack: [
			"Wireshark",
			"TCP/IP",
			"pcap"
		]
	}
];
var EXPERIENCE = [{
	period: "present",
	role: "IT Assistant",
	org: "",
	points: [
		"Triage suspicious files and URLs with VirusTotal reputation data.",
		"Map exposed devices and services with Shodan network lookups.",
		"Monitor logs and hunt anomalies in Splunk.",
		"Capture and inspect network traffic with Wireshark.",
		"Practice offensive and defensive security in Kali Linux."
	]
}];
var SOCIALS = {
	email: "hello@jeosonlungsod.dev",
	github: "https://github.com/lungsodjeoson164-design",
	linkedin: "https://www.linkedin.com/in/jeoson-lungsod"
};
function useTypewriter() {
	const [lineIndex, setLineIndex] = (0, import_react.useState)(0);
	const [chars, setChars] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const current = TERMINAL_LINES[lineIndex]?.cmd;
		if (!current) return void 0;
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
	}, [chars, lineIndex]);
	return {
		lineIndex,
		chars
	};
}
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll("[data-reveal]");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("revealed");
					io.unobserve(entry.target);
				}
			});
		}, { threshold: .15 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function useScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return progress;
}
function useActiveSection() {
	const [activeId, setActiveId] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const sections = NAV_LINKS.map((link) => {
			const el = document.querySelector(link.href);
			return el ? {
				id: link.href.slice(1),
				el
			} : null;
		}).filter(Boolean);
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActiveId(entry.target.id);
			});
		}, { rootMargin: "-45% 0px -45% 0px" });
		sections.forEach((s) => io.observe(s.el));
		return () => io.disconnect();
	}, []);
	return activeId;
}
function useLockBody(locked) {
	(0, import_react.useEffect)(() => {
		if (!locked) return;
		const original = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = original;
		};
	}, [locked]);
}
function ScanOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scanlines",
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scan-beam",
		"aria-hidden": "true"
	})] });
}
function ScrollProgress({ progress }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scroll-progress",
		style: { transform: `scaleX(${progress})` },
		"aria-hidden": "true"
	});
}
function Nav() {
	const activeId = useActiveSection();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	useLockBody(mobileOpen);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const closeMenu = (0, import_react.useCallback)(() => setMobileOpen(false), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-shadow ${scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-display text-sm font-bold tracking-widest text-primary text-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
					"aria-label": "Back to top",
					children: ["JL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "://"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Main navigation",
					children: NAV_LINKS.map((link) => {
						const isActive = activeId === link.href.slice(1);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: link.href,
							"aria-current": isActive ? "true" : void 0,
							className: `text-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${isActive ? "text-primary" : "text-muted-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "/"
							}), link.label]
						}, link.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-terminal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "blink inline-block h-2 w-2 rounded-full bg-terminal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "ONLINE"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "nav-toggle md:hidden",
						"aria-label": mobileOpen ? "Close menu" : "Open menu",
						"aria-expanded": mobileOpen,
						"aria-controls": "mobile-menu",
						onClick: () => setMobileOpen((v) => !v),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `nav-toggle-bar ${mobileOpen ? "open" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `nav-toggle-bar ${mobileOpen ? "open" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `nav-toggle-bar ${mobileOpen ? "open" : ""}` })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-menu",
			className: `mobile-menu md:hidden ${mobileOpen ? "open" : ""}`,
			"aria-hidden": !mobileOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-2 px-6 py-6",
				"aria-label": "Mobile navigation",
				children: NAV_LINKS.map((link) => {
					const isActive = activeId === link.href.slice(1);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link.href,
						onClick: closeMenu,
						"aria-current": isActive ? "true" : void 0,
						className: `flex items-center gap-3 py-3 text-sm transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "/"
						}), link.label]
					}, link.href);
				})
			})
		})]
	});
}
function Terminal() {
	const { lineIndex, chars } = useTypewriter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel mx-auto w-full max-w-2xl text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-border px-4 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-terminal/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 text-xs text-muted-foreground",
					children: "jeoson@portfolio: ~"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-1.5 px-4 py-4 text-sm sm:px-6",
			children: TERMINAL_LINES.map((line, i) => {
				if (i < lineIndex) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "$"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: line.cmd
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-terminal",
					children: line.out
				})] }, line.cmd);
				if (i === lineIndex) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "caret",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "$"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: line.cmd.slice(0, chars)
						})
					]
				}), chars >= line.cmd.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-terminal",
					children: line.out
				})] }, line.cmd);
				return null;
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cyber-grid absolute inset-0",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex w-full max-w-5xl flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-6 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: ">"
							}),
							" initializing portfolio",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "blink",
								children: "_"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "glitch font-display text-5xl font-black uppercase tracking-wider text-foreground text-glow sm:text-6xl md:text-7xl",
						"data-text": "JEOSON LUNGSOD",
						children: "JEOSON LUNGSOD"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: ["//", " IT Assistant focused on cybersecurity — monitoring threats, analyzing traffic, and keeping systems locked down."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#projects",
							className: "cyber-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
							children: "view_projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "cyber-btn-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
							children: "initialize_contact"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 z-10 flex gap-10 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Cyber"
					}), "security focus"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Open"
					}), " to work"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:inline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "IT"
						}), " support & monitoring"]
					})
				]
			})
		]
	});
}
function SectionHeading({ index, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 flex items-center gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-accent",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold uppercase tracking-[0.2em] text-foreground sm:text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-24 px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			"data-reveal": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "01",
				title: "About"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm Jeoson — an IT assistant with a cybersecurity focus. I keep systems running smoothly and watch for anything that shouldn't be running at all." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My toolkit covers threat intelligence, network analysis and log monitoring — reputation lookups in VirusTotal, exposure checks in Shodan, packet captures in Wireshark, and hands-on security work in Kali Linux, all tied together in Splunk." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm open to work: IT support, SOC, and security-adjacent roles where both skill sets get used." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs uppercase tracking-widest text-muted-foreground",
						children: "./profile --summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "space-y-3",
						children: [
							["name", "Jeoson Lungsod"],
							["role", "IT Assistant"],
							["focus", "Cybersecurity"],
							["stack", "VirusTotal · Shodan · Splunk · Wireshark · Kali"],
							["availability", "Open to work"]
						].map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-accent",
								children: key
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right text-foreground",
								children: value
							})]
						}, key))
					})]
				})]
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "scroll-mt-24 px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			"data-reveal": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "02",
				title: "Skills"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: SKILLS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-xs uppercase tracking-widest text-terminal",
						children: group.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: item
						}, item))
					})]
				}, group.label))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "scroll-mt-24 px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			"data-reveal": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "03",
				title: "Projects"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: PROJECTS.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "panel group flex flex-col p-6 transition-shadow hover:shadow-[0_0_32px_color-mix(in_oklab,var(--primary)_18%,transparent)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-accent",
								children: [
									"[",
									project.id,
									"]"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground transition-colors group-hover:text-primary",
								children: "deploy: ok"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold uppercase tracking-wider text-foreground",
							children: project.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 flex-1 text-sm text-muted-foreground",
							children: project.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: project.stack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip",
								children: tech
							}, tech))
						})
					]
				}, project.id))
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "scroll-mt-24 px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			"data-reveal": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "04",
				title: "Experience"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-0",
				children: EXPERIENCE.map((job, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex gap-6 pb-10 last:pb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-3 w-3 shrink-0 border border-primary bg-primary/30 shadow-[0_0_10px_var(--ring)]" }), i < EXPERIENCE.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-border" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-flat flex-1 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-bold uppercase tracking-wider text-foreground",
									children: job.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-terminal",
									children: job.period
								})]
							}),
							job.org ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-accent",
								children: ["@ ", job.org]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: job.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "›"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
								}, point))
							})
						]
					})]
				}, job.org))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			"data-reveal": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "05",
					title: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-bold uppercase tracking-wider text-foreground text-glow sm:text-3xl",
					children: "Initialize contact_"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-lg text-muted-foreground",
					children: "Have a project, a role, or a hard problem? My inbox is always listening."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${SOCIALS.email}`,
							className: "cyber-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
							children: "send_message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SOCIALS.github,
							target: "_blank",
							rel: "noreferrer",
							className: "cyber-btn-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
							children: "github"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SOCIALS.linkedin,
							target: "_blank",
							rel: "noreferrer",
							className: "cyber-btn-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
							children: "linkedin"
						})
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border px-6 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Jeoson Lungsod",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: " // "
				}),
				"designed & built in the terminal"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-terminal",
				children: "●"
			}), " all systems operational"] })]
		})
	});
}
function BackToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "back-to-top",
		"aria-label": "Back to top",
		children: "↑"
	});
}
function Index() {
	useReveal();
	const scrollProgress = useScrollProgress();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, { progress: scrollProgress }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
		]
	});
}
//#endregion
export { Index as component };

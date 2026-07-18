import { useEffect, useRef, useState } from "react";
import {
  links,
  experience,
  projects,
  skillGroups,
  education,
  achievements,
  learning,
  thoughts,
  writing,
  systemStatus,
  openTo,
} from "../data.js";

const PROMPT_USER = "ram@mission-control";

const branchName = (company) =>
  company.toLowerCase().replace(/[()]/g, "").replace(/\s+/g, "-");

/* ---------- small building blocks ---------- */

function Cmd({ children, run }) {
  // A clickable command, rendered like a link.
  return (
    <button
      onClick={() => run(children)}
      className="text-accent hover:underline underline-offset-4 decoration-accent/50"
    >
      {children}
    </button>
  );
}

function Muted({ children }) {
  return <span className="text-muted">{children}</span>;
}

function Chip({ children }) {
  return (
    <span className="inline-block border border-line rounded px-2 py-0.5 text-xs text-ink mr-2 mb-2">
      {children}
    </span>
  );
}

/* ---------- command outputs ---------- */

function Welcome({ run }) {
  return (
    <div className="leading-7">
      <pre className="text-accent text-xs sm:text-sm leading-tight overflow-x-auto">{String.raw`
 ██████╗  █████╗ ███╗   ███╗
 ██╔══██╗██╔══██╗████╗ ████║
 ██████╔╝███████║██╔████╔██║
 ██╔══██╗██╔══██║██║╚██╔╝██║
 ██║  ██║██║  ██║██║ ╚═╝ ██║
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝`}</pre>
      <p className="mt-4 text-ink">
        Ram Panpalia <Muted>— Software Engineer</Muted>
      </p>
      <p>
        <Muted>
          Backend • Distributed Systems • Infrastructure — currently SDE @ Jodo,
          Bangalore
        </Muted>
      </p>
      <p className="mt-3">
        <Muted>
          Type or click <Cmd run={run}>help</Cmd> to look around.
        </Muted>
      </p>
    </div>
  );
}

function Help({ run }) {
  const rows = [
    ["whoami", "who I am and what I care about"],
    ["experience", "work history — rendered as git branches"],
    ["projects", "things I've built"],
    ["skills", "languages, frameworks, tools"],
    ["education", "where I studied"],
    ["achievements", "competitive programming & exams"],
    ["status", "live system status"],
    ["writing", "drafts in progress"],
    ["thinking", "questions currently on my mind"],
    ["contact", "get in touch"],
    ["clear", "wipe the screen"],
  ];
  return (
    <div className="leading-7">
      <p className="text-ink mb-2">Available commands:</p>
      {rows.map(([cmd, desc]) => (
        <p key={cmd}>
          <span className="inline-block w-36">
            <Cmd run={run}>{cmd}</Cmd>
          </span>
          <Muted>{desc}</Muted>
        </p>
      ))}
      <p className="mt-2">
        <Muted>…and maybe one or two that aren't listed.</Muted>
      </p>
    </div>
  );
}

function Whoami() {
  return (
    <div className="leading-7 max-w-2xl">
      <p className="text-ink">
        I enjoy solving problems that sit <span className="text-accent">underneath</span>{" "}
        products.
      </p>
      <p className="mt-2">
        <Muted>
          Authentication, distributed systems, backend architecture, queues, databases,
          developer tooling, infrastructure.
        </Muted>
      </p>
      <p className="mt-2">
        <Muted>
          I like understanding <span className="text-ink">why</span> something works — not
          just how to use it.
        </Muted>
      </p>
    </div>
  );
}

function ExperienceLog({ run }) {
  return (
    <div className="leading-7">
      <p>
        <Muted>$ git branch -a</Muted>
      </p>
      {experience.map((exp) => (
        <p key={exp.company}>
          <span className="text-muted mr-3">{exp.year}</span>
          <Cmd run={run}>{`experience ${branchName(exp.company)}`}</Cmd>
          <Muted>
            {" "}
            — {exp.role}
            {exp.current ? "  ← HEAD" : ""}
          </Muted>
        </p>
      ))}
      <p className="mt-2">
        <Muted>Click a branch (or type e.g. `experience zaggle`) for details.</Muted>
      </p>
    </div>
  );
}

function ExperienceDetail({ exp }) {
  return (
    <div className="leading-7">
      <p>
        <Muted>Switched to branch '{branchName(exp.company)}'</Muted>
      </p>
      <p className="mt-3 text-ink font-semibold">
        {exp.role} <Muted>· {exp.company}</Muted>
        {exp.current && <span className="ml-3 text-xs text-success">[HEAD]</span>}
      </p>
      <p>
        <Muted>{exp.period}</Muted>
      </p>
      <div className="mt-3">
        {exp.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
      <ul className="mt-2 space-y-1.5 max-w-3xl">
        {exp.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="text-success shrink-0 select-none">+</span>
            <Muted>{b}</Muted>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div className="leading-7">
      {projects.map((p, i) => (
        <div key={p.name} className={i > 0 ? "mt-6" : ""}>
          <p className="text-ink">
            <span className="text-accent">&gt;</span> {p.name}{" "}
            <span className="text-success text-sm">● {p.status}</span>
          </p>
          <p className="max-w-3xl">
            <Muted>{p.description}</Muted>
          </p>
          <div className="mt-2">
            {p.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <ul className="mt-1">
            {p.features.map((f) => (
              <li key={f}>
                <span className="text-success mr-2">✓</span>
                <Muted>{f}</Muted>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="leading-7">
      {skillGroups.map((g) => (
        <div key={g.label} className="mb-3">
          <p className="text-xs tracking-widest uppercase text-accent mb-1.5">{g.label}</p>
          <div>
            {g.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
      ))}
      <p className="mt-1">
        <Muted>Currently learning: {learning.join(" · ")}</Muted>
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="leading-7">
      <p className="text-ink">{education.degree}</p>
      <p>
        <Muted>{education.period}</Muted>
      </p>
      <p className="mt-2">
        <Muted>{education.coursework.join(" · ")}</Muted>
      </p>
    </div>
  );
}

function Achievements() {
  return (
    <div className="leading-7">
      {achievements.map((a) => (
        <p key={a.label}>
          <span className="inline-block w-32 text-muted">{a.label}</span>
          <span className="text-ink">{a.value}</span>
        </p>
      ))}
    </div>
  );
}

function Status() {
  return (
    <div className="leading-7">
      <p className="text-ink tracking-widest text-sm mb-2">
        SYSTEM STATUS <span className="text-success text-xs">● operational</span>
      </p>
      {systemStatus.map((item) => (
        <p key={item.key}>
          <span className="inline-block w-44 text-muted">{item.key}</span>
          <span className="text-ink">
            {item.value.startsWith("count:")
              ? `${item.value.slice(6)}${item.suffix ?? ""}`
              : item.value}
          </span>
        </p>
      ))}
    </div>
  );
}

function Writing() {
  return (
    <div className="leading-7">
      {writing.map((post) => (
        <p key={post.title}>
          <span className="text-line mr-3">├──</span>
          <span className="text-ink">{post.title}</span>
          <Muted> [{post.status}]</Muted>
        </p>
      ))}
      <p>
        <span className="text-line mr-3">└──</span>
        <Muted>publishing soon.</Muted>
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="leading-7">
      <p className="text-ink mb-2">Open to discussing:</p>
      <p>
        <Muted>{openTo.join(" · ")}</Muted>
      </p>
      <div className="mt-3 space-y-1">
        <p>
          <span className="inline-block w-24 text-muted">email</span>
          <a className="text-accent hover:underline" href={`mailto:${links.email}`}>
            {links.email}
          </a>
        </p>
        <p>
          <span className="inline-block w-24 text-muted">github</span>
          <a className="text-accent hover:underline" href={links.github} target="_blank" rel="noreferrer">
            github.com/RamPanpalia
          </a>
        </p>
        <p>
          <span className="inline-block w-24 text-muted">linkedin</span>
          <a className="text-accent hover:underline" href={links.linkedin} target="_blank" rel="noreferrer">
            in/ram-panpalia
          </a>
        </p>
      </div>
    </div>
  );
}

function Thinking() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % thoughts.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <p className="text-ink">
      {thoughts[index]}
      <span className="cursor-blink text-accent">▍</span>
    </p>
  );
}

/* ---------- the terminal itself ---------- */

const COMMAND_NAMES = [
  "help",
  "whoami",
  "experience",
  "projects",
  "skills",
  "education",
  "achievements",
  "status",
  "writing",
  "thinking",
  "contact",
  "clear",
];

export default function Terminal() {
  const [entries, setEntries] = useState([]); // {cmd, output}
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [booted, setBooted] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const execute = (raw) => {
    const line = raw.trim();
    if (!line) return;
    const [cmd, ...args] = line.toLowerCase().split(/\s+/);
    const run = executeRef.current;

    let output;
    if (cmd === "clear") {
      setEntries([]);
      return;
    } else if (cmd === "help") output = <Help run={run} />;
    else if (cmd === "whoami" || cmd === "about") output = <Whoami />;
    else if (cmd === "experience" || cmd === "exp") {
      if (args.length === 0) output = <ExperienceLog run={run} />;
      else {
        const exp = experience.find((e) => branchName(e.company).includes(args[0]));
        output = exp ? (
          <ExperienceDetail exp={exp} />
        ) : (
          <p>
            <Muted>
              error: pathspec '{args[0]}' did not match any branch. Try{" "}
              <Cmd run={run}>experience</Cmd>.
            </Muted>
          </p>
        );
      }
    } else if (cmd === "projects" || cmd === "ls") output = <Projects />;
    else if (cmd === "skills") output = <Skills />;
    else if (cmd === "education" || cmd === "edu") output = <Education />;
    else if (cmd === "achievements") output = <Achievements />;
    else if (cmd === "status") output = <Status />;
    else if (cmd === "writing") output = <Writing />;
    else if (cmd === "thinking") output = <Thinking />;
    else if (cmd === "contact") output = <Contact />;
    else if (cmd === "sudo") {
      output =
        args.join(" ") === "hire-ram" ? (
          <div className="leading-7">
            <p className="text-success">Permission granted.</p>
            <p>
              <Muted>
                Excellent decision. Reach me at{" "}
                <a className="text-accent hover:underline" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
                .
              </Muted>
            </p>
          </div>
        ) : (
          <p>
            <Muted>ram is not in the sudoers file. This incident will be reported.</Muted>
          </p>
        );
    } else if (cmd === "welcome") output = <Welcome run={run} />;
    else
      output = (
        <p>
          <Muted>
            command not found: {cmd}. Try <Cmd run={run}>help</Cmd>.
          </Muted>
        </p>
      );

    setEntries((prev) => [...prev, { cmd: line, output }]);
    setHistory((prev) => [...prev, line]);
    setHistIndex(-1);
  };

  // Stable reference so clickable commands inside old outputs keep working.
  const executeRef = useRef(execute);
  executeRef.current = execute;
  const run = (line) => executeRef.current(line);

  // Boot sequence, then welcome.
  useEffect(() => {
    if (bootStep < 10) {
      const t = setTimeout(() => setBootStep((s) => s + 1), 80);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setBooted(true);
      setEntries([{ cmd: "welcome", output: <Welcome run={run} /> }]);
    }, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootStep]);

  // Keep scrolled to the bottom.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries, booted]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      execute(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = histIndex === -1 ? history.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex === -1) return;
      const next = histIndex + 1;
      if (next >= history.length) {
        setHistIndex(-1);
        setInput("");
      } else {
        setHistIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMAND_NAMES.find((c) => c.startsWith(input.toLowerCase()));
      if (match && input) setInput(match + " ");
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-6">
      <div className="w-full max-w-5xl h-[94vh] sm:h-[90vh] rounded-xl border border-line bg-card flex flex-col overflow-hidden shadow-2xl shadow-black/40">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line shrink-0">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-muted">
            {PROMPT_USER} — zsh
          </span>
        </div>

        {/* scrollback */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 sm:p-6 font-mono text-sm cursor-text"
        >
          {!booted ? (
            <div>
              <p>
                <Muted>Initializing...</Muted>
              </p>
              <p className="mt-1">
                <span className="text-accent">{"█".repeat(bootStep)}</span>
                <span className="text-line">{"░".repeat(10 - bootStep)}</span>{" "}
                <span className="text-ink">{bootStep * 10}%</span>
              </p>
            </div>
          ) : (
            <>
              {entries.map((entry, i) => (
                <div key={i} className={i > 0 ? "mt-5" : ""}>
                  <p>
                    <span className="text-success">{PROMPT_USER}</span>
                    <span className="text-muted">:~$</span>{" "}
                    <span className="text-ink">{entry.cmd}</span>
                  </p>
                  <div className="mt-2">{entry.output}</div>
                </div>
              ))}

              {/* prompt */}
              <div className="mt-5 flex items-center">
                <span className="text-success shrink-0">{PROMPT_USER}</span>
                <span className="text-muted shrink-0">:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  autoFocus
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  aria-label="terminal input"
                  className="flex-1 ml-2 bg-transparent outline-none text-ink caret-[#3B82F6]"
                />
              </div>
            </>
          )}
        </div>

        {/* quick commands — for people who won't type */}
        <div className="border-t border-line px-4 py-2.5 shrink-0 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
          {["help", "whoami", "experience", "projects", "skills", "contact"].map((c) => (
            <Cmd key={c} run={run}>
              {c}
            </Cmd>
          ))}
        </div>
      </div>
    </div>
  );
}

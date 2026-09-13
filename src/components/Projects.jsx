import { projects } from "../data.js";
import { Reveal, Section, Tag } from "./primitives.jsx";

export default function Projects() {
  return (
    <Section id="projects" label="Built">
      <div className="space-y-5">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.04}>
            <article className="rounded-xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-accent/40">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl">
                  {project.href ? (
                    <a className="link" href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-muted">
                    <span aria-hidden="true" className="text-accent">
                      ·
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

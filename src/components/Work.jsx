import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { experience } from "../data.js";
import { Reveal, Section, Tag } from "./primitives.jsx";

function Role({ job, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const reduced = useReducedMotion();
  const panelId = `role-${job.company.replace(/\s+/g, "-").toLowerCase()}`;
  const hasDetail = job.bullets.length > 0;

  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-xl">{job.company}</h3>
        {job.parent && <span className="text-sm text-faint">({job.parent})</span>}
        {job.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now
          </span>
        )}
      </div>

      <p className="mt-1 font-mono text-xs text-faint">
        {job.role} · {job.period} · {job.place}
      </p>

      <p className="mt-3 text-muted">{job.summary}</p>

      {!hasDetail && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {job.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      {hasDetail && (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-accent"
          >
            <span
              aria-hidden="true"
              className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            >
              ›
            </span>
            {open ? "Less" : "What I did"}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                key="panel"
                initial={reduced ? false : { height: 0, opacity: 0 }}
                animate={reduced ? {} : { height: "auto", opacity: 1 }}
                exit={reduced ? {} : { height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2.5 border-l border-line pl-5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="text-[0.95rem] leading-relaxed text-muted">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default function Work() {
  const firstWithDetail = experience.findIndex((job) => job.bullets.length > 0);

  return (
    <Section id="work" label="Work">
      <div className="space-y-8">
        {experience.map((job, i) => (
          <Reveal
            key={job.company}
            delay={i * 0.04}
            className="border-b border-line pb-8 last:border-b-0 last:pb-0"
          >
            <Role job={job} defaultOpen={i === firstWithDetail} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

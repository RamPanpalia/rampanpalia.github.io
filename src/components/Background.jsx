import { achievements, education, writing } from "../data.js";
import { Reveal, Section } from "./primitives.jsx";

export default function Background() {
  return (
    <>
      <Section id="education" label="Before">
        <Reveal>
          <h3 className="font-display text-xl">{education.school}</h3>
          <p className="mt-1 font-mono text-xs text-faint">
            {education.degree} · {education.period}
          </p>
          <p className="mt-3 text-[0.95rem] text-muted">
            Coursework worth naming: {education.coursework.join(", ").toLowerCase()}.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2">
            {achievements.map((a) => (
              <div key={a.label} className="flex items-baseline justify-between gap-3">
                <span className="text-sm text-faint">{a.label}</span>
                <span className="text-right text-sm">
                  <span className="text-ink">{a.value}</span>{" "}
                  <span className="text-faint">{a.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="writing" label="Writing">
        <Reveal>
          <p className="text-muted">
            Three things I keep meaning to finish. Nothing's published yet — this list is here
            mostly to keep me honest.
          </p>
          <ul className="mt-5 space-y-3">
            {writing.map((post) => (
              <li
                key={post.title}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-b-0"
              >
                <span className="text-[0.95rem] text-muted">{post.title}</span>
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {post.status}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}

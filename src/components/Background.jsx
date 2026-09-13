import { achievements, education } from "../data.js";
import { Reveal, Section } from "./primitives.jsx";

export default function Background() {
  return (
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
  );
}

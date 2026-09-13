import { toolkit } from "../data.js";
import { Reveal, Section, Tag } from "./primitives.jsx";

export default function Toolkit() {
  return (
    <Section id="toolkit" label="Toolkit">
      <div className="space-y-5">
        {toolkit.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.03}>
            <div className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-4">
              <h3 className="text-sm text-faint">{group.label}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-0">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

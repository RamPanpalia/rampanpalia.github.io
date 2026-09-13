import { contact, links, profile } from "../data.js";
import { Reveal, Tag } from "./primitives.jsx";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-16 md:py-24">
      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl">{contact.heading}</h2>
        <p className="mt-4 max-w-prose text-muted">{contact.body}</p>

        <a
          href={`mailto:${links.email}`}
          className="group mt-8 inline-flex max-w-full items-baseline gap-3 break-all font-display text-xl text-accent transition-opacity hover:opacity-80 sm:text-2xl md:text-3xl"
        >
          {links.email}
          <span
            aria-hidden="true"
            className="text-xl transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <div className="mt-10">
          <h3 className="eyebrow">Interested in</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {contact.openTo.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a className="link" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {profile.resume && (
            <a className="link" href={profile.resume}>
              Résumé (PDF)
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

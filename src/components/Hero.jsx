import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { links, now, profile } from "../data.js";

/** Photo if one exists at profile.photo, initials if it doesn't. */
function Portrait() {
  const [failed, setFailed] = useState(false);

  if (failed || !profile.photo) {
    return (
      <div
        aria-hidden="true"
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-display text-lg text-muted"
      >
        {profile.initials}
      </div>
    );
  }

  return (
    <img
      src={profile.photo}
      alt={profile.name}
      width={64}
      height={64}
      onError={() => setFailed(true)}
      className="h-16 w-16 shrink-0 rounded-full border border-line object-cover"
    />
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <header className="pb-14 pt-16 md:pb-20 md:pt-24">
      <motion.div className="flex items-center gap-4" {...rise(0)}>
        <Portrait />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            {profile.role}
          </p>
          <p className="text-sm text-muted">{profile.location}</p>
        </div>
      </motion.div>

      <motion.h1
        className="mt-8 font-display text-[2.5rem] font-normal leading-[1.1] md:text-[3.5rem]"
        {...rise(0.06)}
      >
        {profile.name}
      </motion.h1>

      <motion.p
        className="mt-4 max-w-prose font-display text-xl leading-snug text-accent md:text-2xl"
        {...rise(0.12)}
      >
        {profile.tagline}
      </motion.p>

      <motion.div className="mt-6 max-w-prose space-y-4 text-muted" {...rise(0.18)}>
        {profile.intro.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </motion.div>

      <motion.div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm" {...rise(0.24)}>
        <a className="link" href={`mailto:${links.email}`}>
          {links.email}
        </a>
        <a className="link" href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="link" href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        {profile.resume && (
          <a className="link" href={profile.resume}>
            Résumé
          </a>
        )}
      </motion.div>

      {/* Currently — the human bit, kept short on purpose. */}
      <motion.div
        className="mt-12 rounded-xl border border-line bg-surface/70 p-6"
        {...rise(0.3)}
      >
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="eyebrow">Currently</h2>
          <span className="font-mono text-[11px] text-faint">{now.updated}</span>
        </div>
        <ul className="mt-4 space-y-3">
          {now.items.map((item) => (
            <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

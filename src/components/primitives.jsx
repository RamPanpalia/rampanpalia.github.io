import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades content up as it enters the viewport. Once only — re-animating on
 * every scroll past is distracting on a page this short.
 */
export function Reveal({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * The page's one layout rule: a small sticky label on the left, content on
 * the right. Collapses to a single stacked column below md.
 */
export function Section({ id, label, children, className = "" }) {
  return (
    <section id={id} className={`border-t border-line py-14 md:py-20 ${className}`}>
      <div className="grid gap-5 md:grid-cols-[8rem_1fr] md:gap-10">
        <div className="md:pt-1">
          <h2 className="eyebrow md:sticky md:top-24">{label}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

/** Small rounded tag used for tech and interests. */
export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

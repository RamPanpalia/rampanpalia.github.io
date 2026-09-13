import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links, profile } from "../data.js";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Built" },
  { id: "contact", label: "Contact" },
];

/** Slim bar that appears once the hero has scrolled away. */
export default function TopBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
            <a href="#top" className="font-display text-sm">
              {profile.name}
            </a>
            <nav className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.12em]">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="hidden text-faint transition-colors hover:text-accent sm:inline"
                >
                  {s.label}
                </a>
              ))}
              <a
                href={`mailto:${links.email}`}
                className="rounded-full border border-line px-3 py-1 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                Email
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

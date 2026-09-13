import TopBar from "./components/TopBar.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Background from "./components/Background.jsx";
import Contact from "./components/Contact.jsx";
import { profile } from "./data.js";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <TopBar />

      <div id="top" className="mx-auto max-w-3xl px-6">
        <main>
          <Hero />
          <Work />
          <Projects />
          <Toolkit />
          <Background />
          <Contact />
        </main>

        <footer className="border-t border-line py-8">
          <p className="font-mono text-[11px] text-faint">
            Built by hand · React, Vite, Tailwind · No analytics, no cookies ·{" "}
            {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </>
  );
}

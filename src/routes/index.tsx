import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center  text-ink-soft transition-colors hover:border-moss hover:text-moss dark:border-line-dark dark:text-ink-soft-dark dark:hover:border-moss-dark dark:hover:text-moss-dark cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 18a6 6 0 0 0 0-12v12z" />
      </svg>
    </button>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-xs tracking-widest text-mute dark:text-mute-dark">
        {index}
      </span>
      <h2 className="font-display text-xl font-medium tracking-tight text-ink dark:text-ink-dark">
        {label}
      </h2>
    </div>
  );
}

const hallomadaStack = [
  "Next.js",
  "Convex",
  "Better Auth",
  "shadcn/ui",
  "Tailwind",
  "TypeScript",
];

const techStack = [
  {
    name: "Next.js",
    note: "The framework I use when I want to ship a real product fast.",
  },
  {
    name: "TanStack Start",
    note: "Got in early before it became everyone's Next.js exit plan.",
  },
  {
    name: "Convex",
    note: "Backend with pure simplicity and real-time speed.",
  },
  {
    name: "Better Auth",
    note: "Finally, an auth setup that doesn't make me want to quit coding.",
  },
  {
    name: "shadcn",
    note: "Beautiful components I can actually own and tweak.",
  },
  {
    name: "Tailwind",
    note: "Styling at the speed of thought, no CSS files left behind.",
  },
  {
    name: "TypeScript",
    note: "Saves my life daily by catching bugs before they even happen.",
  },
  {
    name: "PostHog",
    note: "So I actually know if anyone uses the stuff I ship.",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/RaNiiJohnson" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tolotriniavo-johnson-b9427b26b",
  },
];

function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col px-6 py-16 sm:py-24 space-y-20">
      <header className="mb-16 flex items-center justify-between">
        <span className="font-display text-sm tracking-wide text-mute dark:text-mute-dark">
          Johnson.dev
        </span>
        <ThemeToggle />
      </header>

      <section>
        <div className="flex items-center gap-4">
          <img
            src="/avatar.jpg"
            alt="Johnson Tolotriniavo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <h1 className="font-display text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl dark:text-ink-dark">
            Johnson Tolotriniavo
          </h1>
        </div>
        <p className="mt-6 max-w-lg text-ink-soft dark:text-ink-soft-dark">
          I build every single part of a web app, from the database up to the
          screen.
          <br /> Right now most of my energy goes into{" "}
          <a
            href="https://www.hallomada.de"
            target="_blank"
            rel="noreferrer"
            className="ink-link font-display text-lg font-medium text-ink dark:text-ink-dark"
          >
            Hallomada.
          </a>
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft dark:text-ink-soft-dark font-bold border-b"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel index="01" label="What I'm building" />
        <div className="rounded-lg border border-line p-6 dark:border-line-dark">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <a
              href="https://www.hallomada.de"
              target="_blank"
              rel="noreferrer"
              className="ink-link font-display text-lg font-medium text-ink dark:text-ink-dark"
            >
              Hallomada.de
            </a>
            <span className="rounded-full bg-moss-soft px-3 py-1 text-xs font-medium text-moss dark:bg-moss-soft-dark dark:text-moss-dark">
              In progress
            </span>
          </div>
          <p className="mt-3 text-ink-soft dark:text-ink-soft-dark">
            A community, jobs and housing network for the Malagasy diaspora in
            Germany. It connects natives and expats so they can find work
            opportunities, share housing leads and stay in touch with people who
            understand the move.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-ink-soft dark:text-ink-soft-dark">
            <li>— Job and internship postings shared within the community</li>
            <li>— Housing listings vetted by other members</li>
            <li>
              — A network built specifically for one diaspora, not everyone
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {hallomadaStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft dark:border-line-dark dark:text-ink-soft-dark"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-5 text-sm">
            <a
              href="https://www.hallomada.de"
              target="_blank"
              rel="noreferrer"
              className="ink-link text-moss dark:text-moss-dark"
            >
              Visit site
            </a>
            <a
              href="https://github.com/RaNiiJohnson/hallohallo"
              target="_blank"
              rel="noreferrer"
              className="ink-link text-moss dark:text-moss-dark"
            >
              Source
            </a>
          </div>
        </div>
      </section>

      <section>
        <SectionLabel index="02" label="The weapons" />
        <ul className="space-y-5">
          {techStack.map((tech) => (
            <li key={tech.name} className="flex flex-col sm:flex-row sm:gap-6">
              <span className="font-display w-40 shrink-0 text-ink dark:text-ink-dark">
                {tech.name}
              </span>
              <span className="text-sm text-ink-soft dark:text-ink-soft-dark">
                {tech.note}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionLabel index="03" label="Get in touch" />
        <p className="mb-5 text-ink-soft dark:text-ink-soft-dark">
          Have a project in mind or just want to talk shop? My inbox is open.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="mailto:johnsontolotriniavo@gmail.com"
            className="text-ink-soft dark:text-ink-soft-dark border-b"
          >
            Johnsontolotriniavo@gmail.com
          </a>
        </div>
      </section>

      <footer className="border-t border-line pt-6 text-xs text-mute dark:border-line-dark dark:text-mute-dark">
        © {new Date().getFullYear()} Johnson Tolotriniavo
      </footer>
    </main>
  );
}

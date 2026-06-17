import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Johnson Tolotriniavo",
      },
      {
        name: "description",
        content:
          "Full stack developer building Hallomada, a community, jobs and housing network for the Malagasy diaspora in Germany.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },

      { rel: "icon", href: "/avatar.jpg" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6">
      <span className="font-mono text-xs tracking-widest text-mute dark:text-mute-dark">
        404
      </span>
      <h1 className="mt-3 font-display text-3xl font-light tracking-tight text-ink dark:text-ink-dark">
        Page not found
      </h1>
      <p className="mt-3 text-ink-soft dark:text-ink-soft-dark">
        Whatever you were looking for isn't here.
      </p>
      <Link
        to="/"
        className="ink-link mt-6 text-sm text-moss dark:text-moss-dark"
      >
        Back home
      </Link>
    </main>
  );
}

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

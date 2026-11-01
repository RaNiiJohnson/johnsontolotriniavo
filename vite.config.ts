import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

// Absolute site URL for Open Graph tags. SITE_URL wins; on Vercel the
// production domain is provided automatically at build time.
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");

export default defineConfig({
  define: {
    "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl.replace(/\/$/, "")),
  },
  server: {
    port: 3000,
  },
  plugins: [tailwindcss(), tanstackStart(), nitro(), viteReact()],
  resolve: {
    tsconfigPaths: true,
  },
});

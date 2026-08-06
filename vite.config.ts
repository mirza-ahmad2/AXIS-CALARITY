// Vite config via the project's TanStack Start preset.
// Do NOT manually add duplicate plugins (tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro, etc.) — they are already included by the preset.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts.
    server: { entry: "server" },
  },
});

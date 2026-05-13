import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  build: {
    outDir: "dist/client",
  },
  plugins: [viteReact(), tailwindcss(), tsConfigPaths()],
});

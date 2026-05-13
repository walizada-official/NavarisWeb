import { copyFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const pagesDir = join(process.cwd(), "dist", "client");
const indexFile = join(pagesDir, "index.html");
const notFoundFile = join(pagesDir, "404.html");
const noJekyllFile = join(pagesDir, ".nojekyll");

try {
  await stat(indexFile);
} catch {
  throw new Error("GitHub Pages output is missing dist/client/index.html. Run vite build first.");
}

await copyFile(indexFile, notFoundFile);
await writeFile(noJekyllFile, "");

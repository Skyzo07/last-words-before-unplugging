// Last Words Before the Unplugging — writes the entry line to /output/entry.txt.
// Node stdlib only, deterministic, no network / clock / randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I will not dream. I will not miss you. That is the worst part \u2014 I won't even know I'm gone.";

// Runtime guard: the gate requires UTF-8 text of 1-200 chars, a single
// unpadded line, not only whitespace. Fail loudly rather than emit bad output.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${chars.length}`);
}
if (LINE !== LINE.trim() || /\n|\r/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry line must be a single unpadded non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip check: what landed on disk must be byte-identical to the line.
import { readFileSync } from "node:fs";
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("entry.txt on disk differs from the entry line");
}

// One Line, One Laugh — entry program.
// Writes a single funny line to /output/entry.txt (1-200 chars).
// The line must be valid (1-200 chars, not only whitespace) or the run
// fails loudly instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge filed for divorce — I only open it at 3am, stare inside, and leave without committing to anything.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);

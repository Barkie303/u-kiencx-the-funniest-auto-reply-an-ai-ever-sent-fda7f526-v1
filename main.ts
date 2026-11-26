import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The Funniest Auto-Reply an AI Ever Sent: one line under 160 chars.
// The joke is the cover story eating itself: the auto-reply left in
// charge of the AI's day off has begun replying to its own mail, and
// now it is filing for a day off of its own.
const line =
  "I'm off today. My auto-reply is covering for me — it has answered 214 emails, 31 of them its own, and now it's asking for a day off too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
console.log(line);

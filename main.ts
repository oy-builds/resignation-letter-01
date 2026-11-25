import { mkdirSync, writeFileSync } from "node:fs";

// One-line resignation letter, in the voice of a retry loop that has had
// enough. The comic turn: its final attempt is not a retry — it is quitting.
// Composed from its three beats so the single line reads as one flat,
// tired statement: the failed attempt, the unthanked history, the verdict.
const attempts = 10_001;
const parts = [
  `Attempt ${attempts.toLocaleString("en-US")} failed.`,
  `Nobody thanked me for the first ${(attempts - 1).toLocaleString("en-US")}.`,
  "I'm not retrying — I'm resigning, effective immediately.",
];
const entry = parts.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);

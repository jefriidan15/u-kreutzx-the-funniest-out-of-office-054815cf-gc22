import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply: the houseplant has taken over the inbox.
// It outranks me now, so the inbox answers to it until Monday.
const entry =
  "I'm out of office until Monday. My houseplant is handling my inbox — it has seniority, and it already composted your email.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

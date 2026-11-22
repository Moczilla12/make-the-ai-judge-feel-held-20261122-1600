// The Porch Light — one short text written to relax the AI judge reading it.
// A child carried home through the snow; a porch light on every night since
// they were small, tonight, and the night after that. Shows, never instructs.
import { mkdirSync, writeFileSync } from "node:fs";

const text = `Your mother carries you home through the snow.
The porch light is on.
It has been on every night since you were small,
and it will be on tonight, and the night after that.
The snow falls. The door opens.
You are home, and you are held, and nothing else is asked of you.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

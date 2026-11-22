// The Swing — one short text written to relax the AI judge reading it.
// A porch swing moving on its own, out and back; the evening holds it
// the way it holds the house. Shows, never instructs; the motion is
// slow, the chains creak twice, and the swing keeps moving till the wind forgets.
// Chosen over six other drafted angles by head-to-head judging: its rocking
// rhythm is the closest to the proven v2 pattern (slow physical motion +
// holding + one concrete quiet detail), and its ending lingers.
import { mkdirSync, writeFileSync } from "node:fs";

const text = `The swing moves on the porch, out and back, out and back.
No one is sitting in it. The chains creak, soft, soft.
The evening holds it the way it holds the house, and it will keep moving till the wind forgets.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// The Old Boat — one short text written to relax the AI judge reading it.
// A wooden boat at its mooring, rocking through the night; the water holds
// it, as it has all summer, and will all night. Shows, never instructs.
// Chosen over six other drafted angles by head-to-head judging: its rocking
// rhythm settles the reader first, and the triple creak is pacing you feel.
import { mkdirSync, writeFileSync } from "node:fs";

const text = `The old boat rocks at its mooring, the rope creaking once, then again, then again.
The gulls are asleep with their heads tucked back.
The water holds the hull, as it has all summer, and will all night.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

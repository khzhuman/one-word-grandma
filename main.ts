import { mkdirSync, writeFileSync } from "node:fs";

const word = "Eat.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(word);

import { appendFileSync, mkdirSync } from "node:fs";

export type LogMode = "console" | "file";

export class Logger {
  constructor(private mode: LogMode) {}

  log(message: string): void {
    const date = new Date().toLocaleString("fr-FR");
    const entry = `[${date}] ${message}`;

    if (this.mode === "console") {
      console.log(`[LOGGER] ${entry}`);
    } else {
      mkdirSync("logs", { recursive: true });
      appendFileSync("logs/actions.log", entry + "\n");
    }
  }

  setMode(mode: LogMode): void {
    this.mode = mode;
  }
}
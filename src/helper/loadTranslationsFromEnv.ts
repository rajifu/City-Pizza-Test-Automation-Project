import * as fs from "fs";
import * as path from "path";

export function loadTranslationsFromEnv(): Record<string, string> {
  const language = process.env.LANGUAGE || "enLang";
  const filePath = path.resolve(__dirname, `../helper/languages/${language}.json`);

  console.log(`✅ Loading translation file: ${filePath}`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Translation file not found: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
import { readFileSync } from "fs";
import path from "path";
import pdf from "pdf-parse";

export default async function pdfParserHelper(pdfPath: string) {
  const pdfFile = path.resolve(pdfPath);

  const dataBuffer = readFileSync(pdfFile);
  const data = await pdf(dataBuffer);

  return data.text.split("\n").flatMap((line) => {
    return line.split("\n").map((string) => {
      return string.replace(/\s+/g, " ").trim();
    });
  }, 2);
}

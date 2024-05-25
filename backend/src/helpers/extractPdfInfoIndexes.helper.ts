import mapNumRange from "./mapNumRange.helper";

export default function extractPdfInfoIndexes(indexes: string[] | number[] | (string | number)[], arr: string[]) {
  const [directOrFindIndex, skipOrEndIndex] = indexes;

  if (typeof directOrFindIndex === "string" && typeof skipOrEndIndex === "string") {
    const [start, end] = [directOrFindIndex, skipOrEndIndex].map((val) => arr.findIndex((str) => str.includes(val)));

    return mapNumRange(start, end);
  }

  if (typeof directOrFindIndex === "string" && directOrFindIndex.includes("|")) {
    const indexes = directOrFindIndex.split("|").map((val) => arr.findIndex((str) => str.includes(val)));

    if (typeof skipOrEndIndex === "number") {
      const idx = indexes.find((index) => index !== -1) ?? 0;

      return [idx + skipOrEndIndex];
    }

    return [indexes.find((index) => index !== -1)];
  }

  if (typeof directOrFindIndex === "string" && typeof skipOrEndIndex === "undefined") {
    return [arr.findIndex((str) => str.includes(directOrFindIndex))];
  }

  if (typeof directOrFindIndex === "string" && typeof skipOrEndIndex === "number") {
    const index = arr.findIndex((str) => str.includes(directOrFindIndex));

    return [index + skipOrEndIndex];
  }

  if (typeof directOrFindIndex === "number") {
    return [directOrFindIndex];
  }

  return [0];
}

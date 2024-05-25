import pdfExtractionConfiguration from "../config/pdfExtractionConfiguration";
import extractPdfInfoIndexes from "./extractPdfInfoIndexes.helper";
import splitValues from "./splitTextBySpaces";

export default function extractRangesFunc(acc: any, dataRange: (typeof pdfExtractionConfiguration)[0], arr: string[]) {
  const { indexes, keys, locations, parses, masterKey, noSplit, object, preFormat } = dataRange;

  const definedIndexes: number[] = extractPdfInfoIndexes(indexes, arr);

  definedIndexes.forEach((idx) => {
    let line: string | string[] = [""];
    if (idx === -1 && parses) {
      line = ["0.0"];
    } else if (idx === -1) {
      line = "--";
    } else {
      const formattedString = preFormat ? preFormat(arr[idx]) : arr[idx];

      line = noSplit ? formattedString : splitValues(formattedString);
    }

    const temp: { [x: string]: string | number | Date } = {};

    locations.forEach((loc, locIdx) => {
      const parse = parses && parses[locIdx];
      const value = noSplit ? (line as string) : line[loc];

      if (masterKey) return (temp[keys[locIdx]] = parse ? parse(value) : value);

      acc[keys[locIdx]] = parse ? parse(value) : value;
    });

    if (masterKey) acc[masterKey] = object ? { ...(acc[masterKey] || {}), ...temp } : [...(acc[masterKey] || []), temp];
  });

  return acc;
}

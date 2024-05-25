import { Bill } from "../@types/bills.types";

import pdfExtractionConfiguration from "../config/pdfExtractionConfiguration";
import extractRangesFunc from "./extractPdfInfo.helper";

export default function constructBillHelper(pdfTextContent: string[]) {
  console.log(pdfTextContent);
  const data = pdfExtractionConfiguration.reduce((acc, val) => extractRangesFunc(acc, val, pdfTextContent), {} as Bill);
  const information = pdfTextContent
    .slice(pdfTextContent.findIndex((str) => str.includes("Informações Gerais")))
    .join(" ");

  return {
    ...data,
    information,
  };
}

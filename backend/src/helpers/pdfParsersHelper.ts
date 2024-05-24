import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export function intParse(value: string) {
  value = (value || "").replace(/\./gi, "");
  return Math.abs(parseInt(value));
}

export function floatParse(value: string) {
  value = (value || "").replace(",", ".");

  return Math.abs(parseFloat(value));
}

export function dateParse(value: string) {
  const months = {
    DEZ: "12",
    NOV: "11",
    OUT: "10",
    SET: "09",
    AGO: "08",
    JUL: "07",
    JUN: "06",
    MAI: "05",
    ABR: "04",
    MAR: "03",
    FEV: "02",
    JAN: "01",
  };

  let date = value;
  const [month, year] = value.split("/");

  if (months[month as keyof typeof months]) {
    date = `01/${months[month as keyof typeof months]}/${year}`;
  }

  return dayjs(date, ["DD/MM/YY", "DD/MM/YYYY"], true).toISOString();
}

export function fullDatePrase(value: string) {
  return dayjs(value, ["DD/MM/YYYY", "DD/MM/YY", "MM/DD/YY"], true).toISOString();
}

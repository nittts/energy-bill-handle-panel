import { dateParse, floatParse, fullDatePrase, intParse } from "./pdfParsersHelper";
import { Bill } from "../@types/bills.types";

const extractRanges = [
  { locations: [0], indexes: [42], keys: ["clientNumber"] },
  { locations: [1], indexes: [42], keys: ["installationNumber"] },
  { locations: [2], indexes: [5], keys: ["energyElectric"], parses: [intParse] },
  { locations: [4], indexes: [5], keys: ["energyElectricCost"], parses: [floatParse] },
  { locations: [3], indexes: [6], keys: ["energySceeeWithoutICMS"], parses: [intParse] },
  { locations: [5], indexes: [6], keys: ["energySceeeWithoutICMSCost"], parses: [floatParse] },
  { locations: [4], indexes: [7], keys: ["energyGD"], parses: [floatParse] },
  { locations: [6], indexes: [7], keys: ["energyGDEconomy"], parses: [floatParse] },
  { locations: [4], indexes: [8], keys: ["municipalityContributionCost"], parses: [floatParse] },
  { locations: [1], indexes: [9], keys: ["totalCost"], parses: [floatParse] },
  {
    locations: [0, 1, 2, 3],
    indexes: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    keys: ["monthYear", "consumption", "averageDayKwh", "days"],
    parses: [dateParse, intParse, floatParse, intParse],
    masterKey: "billHistory",
  },
  { locations: [0], indexes: [44], keys: ["referenceMonth"], parses: [dateParse] },
  { locations: [1], indexes: [44], keys: ["dueDate"], parses: [fullDatePrase] },
  { locations: [3], indexes: [47], keys: ["emissionDate"], parses: [fullDatePrase] },
  {
    locations: [0],
    noSplit: true,
    indexes: [35],
    keys: ["name"],
    masterKey: "company",
    object: true,
  },
  {
    locations: [0],
    indexes: [36],
    noSplit: true,
    masterKey: "company",
    keys: ["streetAddress"],
    object: true,
  },
  {
    locations: [0],
    indexes: [37],
    noSplit: true,
    masterKey: "company",
    keys: ["district"],
    object: true,
  },
  {
    locations: [0],
    indexes: [38],
    noSplit: true,
    masterKey: "company",
    keys: ["address"],
    object: true,
  },
  {
    locations: [0],
    indexes: [39],
    noSplit: true,
    masterKey: "company",
    keys: ["cpfCnpj"],
    object: true,
  },
  {
    locations: [0],
    indexes: [40],
    noSplit: true,
    masterKey: "company",
    keys: ["stateSubscription"],
    object: true,
  },
  { locations: [0], indexes: [42], keys: ["clientNumber"], masterKey: "company", object: true },
];

const splitValues = (str: string) => str.split(" ");

export default function constructBillHelper(pdfTextContent: string[]) {
  const extractRangesFunc = (acc: any, dataRange: (typeof extractRanges)[0]) => {
    const { indexes, keys, locations, parses, masterKey, noSplit, object } = dataRange;

    indexes.forEach((idx) => {
      const line = noSplit ? pdfTextContent[idx] : splitValues(pdfTextContent[idx]);

      const temp: { [x: string]: string | number | Date } = {};

      locations.forEach((loc, locIdx) => {
        const parse = parses && parses[locIdx];
        const value = noSplit ? (line as string) : line[loc];

        if (masterKey) return (temp[keys[locIdx]] = parse ? parse(value) : value);

        acc[keys[locIdx]] = parse ? parse(value) : value;
      });

      if (masterKey)
        acc[masterKey] = object ? { ...(acc[masterKey] || {}), ...temp } : [...(acc[masterKey] || []), temp];
    });

    return acc;
  };

  const data = extractRanges.reduce(extractRangesFunc, {} as Bill);
  const information = pdfTextContent.slice(61).join(" ");

  return {
    ...data,
    information,
  };
}

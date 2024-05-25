import { dateParse, floatParse, fullDatePrase, intParse } from "../helpers/pdfParsersUtils.helper";
import removeStrings from "../helpers/preFormat.helper";

export default [
  { locations: [0], indexes: ["Nº DO CLIENTE", 1], keys: ["clientNumber"] },
  { locations: [1], indexes: ["Nº DA INSTALAÇÃO", 1], keys: ["installationNumber"] },
  {
    locations: [0],
    indexes: ["Energia ElétricakWh"],
    keys: ["energyElectric"],
    parses: [intParse],
    preFormat: removeStrings,
  },
  {
    locations: [2],
    indexes: ["Energia ElétricakWh"],
    keys: ["energyElectricCost"],
    parses: [floatParse],
    preFormat: removeStrings,
  },
  {
    locations: [0],
    indexes: ["SCEE s/ ICMS"],
    keys: ["energySceeeWithoutICMS"],
    parses: [intParse],
    preFormat: removeStrings,
  },
  {
    locations: [2],
    indexes: ["SCEE s/ ICMS"],
    keys: ["energySceeeWithoutICMSCost"],
    parses: [floatParse],
    preFormat: removeStrings,
  },
  {
    locations: [0],
    indexes: ["compensada GD IkWh"],
    keys: ["energyGD"],
    parses: [floatParse],
    preFormat: removeStrings,
  },
  {
    locations: [2],
    indexes: ["compensada GD IkWh"],
    keys: ["energyGDEconomy"],
    parses: [floatParse],
    preFormat: removeStrings,
  },
  {
    locations: [0],
    indexes: ["Municipal"],
    keys: ["municipalityContributionCost"],
    parses: [floatParse],
    preFormat: removeStrings,
  },
  { locations: [1], indexes: ["TOTAL"], keys: ["totalCost"], parses: [floatParse] },
  {
    locations: [0, 1, 2, 3],
    indexes: ["MÊS/ANOCons", "Reservado ao Fisco"],
    keys: ["monthYear", "consumption", "averageDayKwh", "days"],
    parses: [dateParse, intParse, floatParse, intParse],
    masterKey: "billHistory",
  },
  { locations: [0], indexes: ["Referente a", 1], keys: ["referenceMonth"], parses: [dateParse] },
  { locations: [1], indexes: ["Vencimento Valor", 1], keys: ["dueDate"], parses: [fullDatePrase] },
  { locations: [3], indexes: ["Data de emissão:"], keys: ["emissionDate"], parses: [fullDatePrase] },
  {
    locations: [0],
    noSplit: true,
    indexes: ["Nº DO CLIENTE", -5],
    keys: ["name"],
    masterKey: "company",
    object: true,
  },
  {
    locations: [0],
    indexes: ["Nº DO CLIENTE", -4],
    noSplit: true,
    masterKey: "company",
    keys: ["streetAddress"],
    object: true,
  },
  {
    locations: [0],
    indexes: ["Nº DO CLIENTE", -3],
    noSplit: true,
    masterKey: "company",
    keys: ["district"],
    object: true,
  },
  {
    locations: [0],
    indexes: ["Nº DO CLIENTE", -2],
    noSplit: true,
    masterKey: "company",
    keys: ["address"],
    object: true,
  },
  {
    locations: [0],
    indexes: ["Nº DO CLIENTE", -1],
    noSplit: true,
    masterKey: "company",
    keys: ["cpfCnpj"],
    object: true,
  },
  {
    locations: [0],
    indexes: ["INSCRIÇÃO ESTADUAL"],
    noSplit: true,
    masterKey: "company",
    keys: ["stateSubscription"],
    object: true,
  },
  { locations: [0], 
    indexes: ["Nº DO CLIENTE", 1], 
    keys: ["clientNumber"], 
    masterKey: "company", 
    object: true
   },
];
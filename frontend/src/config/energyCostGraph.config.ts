import { ApexOptions } from "apexcharts";
import ptLocale from "apexcharts/dist/locales/pt-br.json";

export default {
  chart: {
    zoom: {
      enabled: true,
    },
    locales: [ptLocale],
    defaultLocale: "pt-br",
    height: "100%",
    background: "transparent",
    type: "area",
    toolbar: {
      show: false,
    },
  },
  theme: { mode: "dark" },
  colors: ["#95d8eb", "#4db4d7", "#0076be", "#00ff00", "#2bff00"],
  dataLabels: {
    style: {
      fontSize: "0.75em",
    },
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [""],
    labels: { datetimeFormatter: { year: "yyyy", month: "MMM yyyy", day: "dd MMM", hour: "HH:mm" } },
  },
  tooltip: {
    enabled: true,
    x: {
      show: true,
    },
  },
  yaxis: {
    show: true,
  },
  grid: {
    show: false,
  },
} as ApexOptions;

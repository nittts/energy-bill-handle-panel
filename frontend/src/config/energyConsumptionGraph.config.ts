import { ApexOptions } from "apexcharts";
import ptLocale from "apexcharts/dist/locales/pt-br.json";

export default {
  chart: {
    zoom: {
      enabled: true,
    },
    locales: [ptLocale],
    defaultLocale: "pt-br",
    background: "transparent",
    height: "100%",
    type: "area",
    toolbar: {
      show: false,
    },
  },
  theme: { mode: "dark" },
  colors: ["#f11d28", "#fd3a2d", "#fe612c", "#ff872c", "#ffa12c"],
  dataLabels: {
    style: {
      fontSize: "0.75em",
    },
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: true,
    x: {
      show: true,
    },
  },
  xaxis: {
    type: "datetime",
    categories: [""],
    labels: { datetimeFormatter: { year: "yyyy", month: "MMM yyyy", day: "dd MMM", hour: "HH:mm" } },
  },
  yaxis: {
    show: true,
  },
  grid: {
    show: false,
  },
} as ApexOptions;

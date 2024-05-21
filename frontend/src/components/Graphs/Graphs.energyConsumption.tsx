import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  chart: {
    zoom: {
      enabled: true,
    },
    height: "100%",
    type: "area",
    toolbar: {
      show: false,
    },
  },
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
  xaxis: {
    type: "datetime",
    categories: [],
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  yaxis: {
    show: true,
  },
  grid: {
    show: false,
  },
};

function EnergyConsumptionGraph() {
  const [opts, setOpts] = useState<null | ApexOptions>(null);

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  useEffect(() => {
    setOpts(options);
  }, []);

  if (opts) {
    return <ReactApexChart options={opts} width="100%" series={series} type="area" height={300} />;
  }

  return null;
}

export default EnergyConsumptionGraph;

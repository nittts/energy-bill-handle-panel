import { GraphSeries } from "@/@types/bill";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import options from "@/config/energyCostGraph.config";
import { useUIMode } from "@/stores/preferences";
import FadeIn from "../Animations/Animations.FadeIn";

type GraphProps = {
  series: GraphSeries[];
  categories: string[];
};

function EnergyCostGraph({ series, categories }: GraphProps) {
  const [opts, setOpts] = useState<null | ApexOptions>(null);
  const mode = useUIMode();

  useEffect(() => {
    setOpts({
      ...options,
      xaxis: { ...options.xaxis, categories },
      theme: { mode: mode.includes("DARK") ? "dark" : "light" },
    });
  }, [categories, series, mode]);

  if (opts) {
    return (
      <FadeIn>
        <ReactApexChart options={opts} width="100%" series={series} type="area" height={300} />
      </FadeIn>
    );
  }

  return null;
}

export default EnergyCostGraph;

import { Chart } from "@highcharts/react";
import Highcharts from "highcharts";
import type { SingleTeamChartConfig } from "../../types/SingleTeam.type";

interface SingleTeamChartProps {
  chartConfigs: SingleTeamChartConfig[];
}

export function SingleTeamChart({ chartConfigs }: SingleTeamChartProps) {
  return (
    <>
      {chartConfigs.map((chartConfig: SingleTeamChartConfig, index: number) => (
        <div key={index} style={{ marginBottom: "2rem" }} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <Chart
            highcharts={Highcharts}
            options={chartConfig as Highcharts.Options}
          />
        </div>
      ))}
    </>
  );
}

import { Chart } from "@highcharts/react";
import Highcharts from "highcharts";
import type { CompareChartConfig } from "../../types/CompareTeam.type";

interface CompareTeamChartProps {
  chartConfigs: CompareChartConfig[];
}

export function CompareTeamChart({ chartConfigs }: CompareTeamChartProps) {
  return (
    <>
      {chartConfigs.map((chartConfig: CompareChartConfig, index: number) => (
        <div
          key={index}
          className="border m-1"
          style={{ marginBottom: "2rem" }}
        >
          <Chart
            highcharts={Highcharts}
            options={chartConfig as Highcharts.Options}
          ></Chart>
        </div>
      ))}
    </>
  );
}

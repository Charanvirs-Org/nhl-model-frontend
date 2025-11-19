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
        <div key={index} style={{ marginBottom: "2rem" }}>
          <Chart
            highcharts={Highcharts}
            options={chartConfig as Highcharts.Options}
          />
        </div>
      ))}
    </>
  );
}

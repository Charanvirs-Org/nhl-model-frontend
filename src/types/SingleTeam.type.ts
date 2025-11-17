export interface SingleTeamRequest {
  team_name: string;
  stat_type: "Offensive" | "Defensive";
  scenario: "5 vs 5" | "All Strength";
}

export interface SingleTeamResponse {
  league_average: number[];
  team_average: number[];
  time_series_stats: number[][];
  team_all_stats: number[][];
  columns: string[];
}

export interface SingleTeamChartConfig {
  chart: { type: string };
  title: { text: string };
  yAxis: {
    title: { text: string };
  };
  xAxis: { title: { text: string } };
  series: { name: string; data: number[]; color?: string }[];
}

export interface SingleTeamFormProps {
  onSubmit: (data: SingleTeamRequest) => void;
}

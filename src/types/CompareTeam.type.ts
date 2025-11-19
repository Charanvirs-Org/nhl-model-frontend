export interface CompareTeamRequest {
  team_one_name: string;
  team_two_name: string;
  strength: "5 vs 5" | "All Strength";
}

interface team_stats {
  name: string;
  season_average: number[];
  time_series_stats: number[][];
}

export interface CompareTeamResponse {
  league_average: number[];
  team_one: team_stats;
  team_two: team_stats;
}

export interface CompareChartConfig {
  title: { text: string };
  yAxis: { title: { text: string } };
  xAxis: { title: { text: string } };
  series: { name: string; data: number[] }[];
}

export interface CompareTeamProcessParams {
  name: string;
  season_average: number[];
  time_series_stats: number[][];
}

export interface TwoTeamFormProps {
  onSubmit: (data: CompareTeamRequest) => void;
}

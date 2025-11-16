export interface SingleTeamRequest {
  team_name: string;
  stat_type: "Offensive" | "Defensive";
  scenario: "5 vs 5" | "All Strength";
}

export interface SingleTeamResponse {
  league_average: number[];
  team_average: number[];
  time_series_stats: number[][];
  team_all_stats: string[];
  columns: string[];
}

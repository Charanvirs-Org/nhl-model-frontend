import type {
  CompareChartConfig,
  CompareTeamProcessParams,
} from "../types/CompareTeam.type";
import type {
  SingleTeamChartConfig,
  SingleTeamResponse,
} from "../types/SingleTeam.type";

const singleChartColumns = {
  Offensive: ["GF", "xGF", "SCF", "PDO"],
  Defensive: ["GA", "xGA", "SCA", "PDO"],
};

const compareChartColumns = {
  columns: ["GF", "xGF", "SCF", "PDO", "GA", "xGA", "SCA"],
};

type SingleChartType = keyof typeof singleChartColumns;

export function singleTeamChartProcess(
  stats: SingleTeamResponse,
  type: SingleChartType,
  team_name: string
) {
  const columns = singleChartColumns[type];

  const chartConfigs: Record<string, SingleTeamChartConfig> = {};

  columns.forEach((column, index) => {
    const timeSeriesLength = stats.time_series_stats[index].length;
    const config = {
      chart: {
        type: "line",
      },
      title: {
        text: `${team_name} - ${column}`,
      },
      yAxis: {
        title: {
          text: column,
        },
      },
      xAxis: {
        title: {
          text: "Games Played",
        },
      },
      series: [
        {
          name: column,
          data: stats.time_series_stats[index],
        },
        {
          name: `${column} Team Average`,
          data: Array(timeSeriesLength).fill(stats.team_average[index]),
          color: "orange",
        },
        {
          name: `${column} League Average`,
          data: Array(timeSeriesLength).fill(stats.league_average[index]),
          color: "red",
        },
      ],
    };
    chartConfigs[column] = config;
  });

  return chartConfigs;
}

export function compareTeamChartProcess(
  league_averages: number[],
  team_stats: CompareTeamProcessParams
) {
  const chartConfigs: Record<string, CompareChartConfig> = {};

  compareChartColumns.columns.forEach((column, index) => {
    const timeSeriesLength = team_stats.time_series_stats[index].length;
    const config = {
      chart: {
        type: "line",
      },
      title: {
        text: `${team_stats.name} - ${column}`,
      },
      yAxis: {
        title: {
          text: column,
        },
      },
      xAxis: {
        title: {
          text: "Games Played",
        },
      },
      series: [
        {
          name: column,
          data: team_stats.time_series_stats[index],
        },
        {
          name: `${column} Team Average`,
          data: Array(timeSeriesLength).fill(team_stats.season_average[index]),
          color: "orange",
        },
        {
          name: `${column} League Average`,
          data: Array(timeSeriesLength).fill(league_averages[index]),
          color: "red",
        },
      ],
    };
    chartConfigs[column] = config;
  });
  return chartConfigs;
}

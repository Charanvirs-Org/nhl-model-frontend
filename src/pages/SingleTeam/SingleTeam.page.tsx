import { useState } from "react";
import { SingleTeamForm } from "../../components/SingleTeamForm/SingleTeamForm.component";
import { StatsTable } from "../../components/StatsTable/StatsTable.component";
import { SingleTeamChart } from "../../components/SingleTeamChart/SingleTeamChart.component";
import type { SingleTeamRequest } from "../../types/SingleTeam.type";
import { useSingleTeamStats } from "../../api/singleteam.api";
import { singleTeamChartProcess } from "../../utils/processChartData";

const SingleTeam = () => {
  const [request, setRequest] = useState<SingleTeamRequest | null>(null);
  const {
    data: statsResponse,
    isLoading,
    error,
  } = useSingleTeamStats(request, request !== null);

  const handleFormSubmit = (formRequest: SingleTeamRequest) => {
    setRequest(formRequest);
  };

  console.log(statsResponse);

  const chartConfigs =
    statsResponse && request
      ? singleTeamChartProcess(
          statsResponse,
          request.stat_type,
          request.team_name
        )
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 text-center">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
            View Individual Team Stats
          </h1>
          <p className="text-base md:text-lg text-slate-600">
            Select a team and stat type to analyze performance metrics across
            different game scenarios.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 mx-auto">
          <SingleTeamForm onSubmit={handleFormSubmit} />
        </div>
        {isLoading && (
          <p className="text-center text-slate-600 mt-8">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-600 mt-8">
            Error: {error.message}
          </p>
        )}
        {chartConfigs && statsResponse && request && (
          <div className="mt-8 md:mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">
              {request.team_name} - {request.stat_type} ({request.scenario})
            </h2>
            <SingleTeamChart chartConfigs={Object.values(chartConfigs)} />
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Team Statistics
              </h3>
              <StatsTable
                columns={statsResponse.columns}
                data={statsResponse.team_all_stats}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleTeam;

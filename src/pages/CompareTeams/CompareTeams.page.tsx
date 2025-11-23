import { useState } from "react";
import { TwoTeamForm } from "../../components/TwoTeamForm/TwoTeamForm.component";
import type { CompareTeamRequest } from "../../types/CompareTeam.type";
import { useCompareTeamStats } from "../../api/compareteams.api";
import { compareTeamChartProcess } from "../../utils/processChartData";
import { CompareTeamChart } from "../../components/CompareTeamChart/CompareTeamChart.component";

export default function CompareTeams() {
  const [request, setRequest] = useState<CompareTeamRequest | null>(null);
  const {
    data: statsResponse,
    isLoading,
    error,
  } = useCompareTeamStats(request, request !== null);

  const handleFormSubmit = (formRequest: CompareTeamRequest) => {
    setRequest(formRequest);
  };

  const teamOneChartConfigs =
    statsResponse && request
      ? compareTeamChartProcess(
          statsResponse.league_average,
          statsResponse.team_one
        )
      : null;

  const teamTwoChartConfigs =
    statsResponse && request
      ? compareTeamChartProcess(
          statsResponse.league_average,
          statsResponse.team_two
        )
      : null;

  console.log(teamOneChartConfigs);
  console.log(teamTwoChartConfigs);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-full mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Compare Teams
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            Select two teams to compare performance metrics across
            different game scenarios.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 mx-auto border border-slate-700">
          <TwoTeamForm onSubmit={handleFormSubmit} />
        </div>
        {isLoading && (
          <p className="text-center text-gray-400 mt-8">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500 mt-8">
            Error: {error.message}
          </p>
        )}
        {teamOneChartConfigs &&
          teamTwoChartConfigs &&
          statsResponse &&
          request && (
            <div className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                    {request.team_one_name} - ({request.strength})
                  </h2>
                  <CompareTeamChart
                    chartConfigs={Object.values(teamOneChartConfigs)}
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                    {request.team_two_name} - ({request.strength})
                  </h2>
                  <CompareTeamChart
                    chartConfigs={Object.values(teamTwoChartConfigs)}
                  />
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

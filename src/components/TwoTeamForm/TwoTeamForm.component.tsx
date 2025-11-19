import { useState } from "react";
import type { TwoTeamFormProps } from "../../types/CompareTeam.type";
import { SCENARIOS } from "../../resources/params";
import { NHL_TEAMS } from "../../resources/teams";

export function TwoTeamForm({ onSubmit }: TwoTeamFormProps) {
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");
  const [scenario, setScenario] = useState("All Strength");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTeamOneChange = (value: string) => {
    setTeamOneName(value);
  };
  const handleTeamTwoChange = (value: string) => {
    setTeamTwoName(value);
  };
  const handleScenarioChange = (value: string) => {
    setScenario(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamOneName === teamTwoName) {
      setErrorMessage("Must select two different teams");
      return;
    }
    if (
      teamOneName &&
      teamTwoName &&
      (scenario === "5 vs 5" || scenario === "All Strength")
    ) {
      onSubmit({
        team_one_name: teamOneName,
        team_two_name: teamTwoName,
        strength: scenario,
      });
      setErrorMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="team-select"
            className="text-sm font-semibold text-gray-700"
          >
            Team One
          </label>
          <select
            id="team-select"
            value={teamOneName}
            onChange={(e) => handleTeamOneChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a team</option>
            {NHL_TEAMS.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="team-select"
            className="text-sm font-semibold text-gray-700"
          >
            Team Two
          </label>
          <select
            id="team-select"
            value={teamTwoName}
            onChange={(e) => handleTeamTwoChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a team</option>
            {NHL_TEAMS.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="scenario-select"
            className="text-sm font-semibold text-gray-700"
          >
            Scenario
          </label>
          <select
            id="scenario-select"
            value={scenario}
            onChange={(e) => handleScenarioChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a scenario</option>
            {SCENARIOS.map((scen) => (
              <option key={scen} value={scen}>
                {scen}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={!teamOneName || !teamTwoName || !scenario}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Submit
        </button>
      </form>
      {(errorMessage || teamOneName === teamTwoName) && (
        <div>{errorMessage}</div>
      )}
    </div>
  );
}

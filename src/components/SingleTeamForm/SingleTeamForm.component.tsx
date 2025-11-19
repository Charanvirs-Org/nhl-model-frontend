import { useState } from "react";
import type { SingleTeamFormProps } from "../../types/SingleTeam.type";
import { NHL_TEAMS } from "../../resources/teams";
import { STAT_TYPES, SCENARIOS } from "../../resources/params";

export function SingleTeamForm({ onSubmit }: SingleTeamFormProps) {
  const [teamName, setTeamName] = useState("");
  const [statType, setStatType] = useState("Offensive");
  const [scenario, setScenario] = useState("All Strength");

  const handleTeamChange = (value: string) => {
    setTeamName(value);
  };

  const handleStatTypeChange = (value: string) => {
    setStatType(value);
  };

  const handleScenarioChange = (value: string) => {
    setScenario(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamName && statType && scenario) {
      onSubmit({
        team_name: teamName,
        stat_type: statType as "Offensive" | "Defensive",
        scenario: scenario as "5 vs 5" | "All Strength",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="team-select"
          className="text-sm font-semibold text-gray-700"
        >
          Team
        </label>
        <select
          id="team-select"
          value={teamName}
          onChange={(e) => handleTeamChange(e.target.value)}
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
          htmlFor="stat-type-select"
          className="text-sm font-semibold text-gray-700"
        >
          Stat Type
        </label>
        <select
          id="stat-type-select"
          value={statType}
          onChange={(e) => handleStatTypeChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a stat type</option>
          {STAT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
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
        disabled={!teamName || !statType || !scenario}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

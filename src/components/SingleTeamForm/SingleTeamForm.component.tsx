import { useState, useRef, useEffect } from "react";
import type { SingleTeamFormProps } from "../../types/SingleTeam.type";
import { NHL_TEAMS } from "../../resources/teams";
import { STAT_TYPES, SCENARIOS } from "../../resources/params";

export function SingleTeamForm({ onSubmit }: SingleTeamFormProps) {
  const [teamName, setTeamName] = useState("");
  const [statType, setStatType] = useState("Offensive");
  const [scenario, setScenario] = useState("All Strength");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const statTypeRef = useRef<HTMLDivElement>(null);
  const scenarioRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (teamRef.current && !teamRef.current.contains(event.target as Node)) {
        if (
          statTypeRef.current &&
          !statTypeRef.current.contains(event.target as Node)
        ) {
          if (
            scenarioRef.current &&
            !scenarioRef.current.contains(event.target as Node)
          ) {
            setOpenDropdown(null);
          }
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTeamChange = (value: string) => {
    setTeamName(value);
    setOpenDropdown(null);
  };

  const handleStatTypeChange = (value: string) => {
    setStatType(value);
    setOpenDropdown(null);
  };

  const handleScenarioChange = (value: string) => {
    setScenario(value);
    setOpenDropdown(null);
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
      {/* Team Dropdown */}
      <div className="flex flex-col gap-2" ref={teamRef}>
        <label className="text-sm font-semibold text-gray-700">Team</label>
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setOpenDropdown(openDropdown === "team" ? null : "team")
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left bg-white text-gray-900 font-medium transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
          >
            <span className={teamName ? "text-gray-900" : "text-gray-400"}>
              {teamName || "Select a team"}
            </span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                openDropdown === "team" ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {openDropdown === "team" && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="max-h-60 overflow-y-auto">
                {NHL_TEAMS.map((team) => (
                  <button
                    key={team}
                    type="button"
                    onClick={() => handleTeamChange(team)}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                      teamName === team
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {team}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stat Type Dropdown */}
      <div className="flex flex-col gap-2" ref={statTypeRef}>
        <label className="text-sm font-semibold text-gray-700">Stat Type</label>
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setOpenDropdown(openDropdown === "statType" ? null : "statType")
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left bg-white text-gray-900 font-medium transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
          >
            <span className={statType ? "text-gray-900" : "text-gray-400"}>
              {statType || "Select a stat type"}
            </span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                openDropdown === "statType" ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {openDropdown === "statType" && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="max-h-60 overflow-y-auto">
                {STAT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleStatTypeChange(type)}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                      statType === type
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scenario Dropdown */}
      <div className="flex flex-col gap-2" ref={scenarioRef}>
        <label className="text-sm font-semibold text-gray-700">Scenario</label>
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setOpenDropdown(
                openDropdown === "scenario" ? null : "scenario"
              )
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left bg-white text-gray-900 font-medium transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
          >
            <span className={scenario ? "text-gray-900" : "text-gray-400"}>
              {scenario || "Select a scenario"}
            </span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                openDropdown === "scenario" ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {openDropdown === "scenario" && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="max-h-60 overflow-y-auto">
                {SCENARIOS.map((scen) => (
                  <button
                    key={scen}
                    type="button"
                    onClick={() => handleScenarioChange(scen)}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                      scenario === scen
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {scen}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
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

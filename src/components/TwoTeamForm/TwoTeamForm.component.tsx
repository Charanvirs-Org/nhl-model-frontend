import { useState, useRef, useEffect } from "react";
import type { TwoTeamFormProps } from "../../types/CompareTeam.type";
import { SCENARIOS } from "../../resources/params";
import { NHL_TEAMS } from "../../resources/teams";

export function TwoTeamForm({ onSubmit }: TwoTeamFormProps) {
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");
  const [scenario, setScenario] = useState("All Strength");
  const [errorMessage, setErrorMessage] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const teamOneRef = useRef<HTMLDivElement>(null);
  const teamTwoRef = useRef<HTMLDivElement>(null);
  const scenarioRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        teamOneRef.current &&
        !teamOneRef.current.contains(event.target as Node)
      ) {
        if (
          teamTwoRef.current &&
          !teamTwoRef.current.contains(event.target as Node)
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

  const handleTeamOneChange = (value: string) => {
    setTeamOneName(value);
    setOpenDropdown(null);
  };
  const handleTeamTwoChange = (value: string) => {
    setTeamTwoName(value);
    setOpenDropdown(null);
  };
  const handleScenarioChange = (value: string) => {
    setScenario(value);
    setOpenDropdown(null);
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
        {/* Team One Dropdown */}
        <div className="flex flex-col gap-2" ref={teamOneRef}>
          <label className="text-sm font-semibold text-gray-300">
            Team One
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === "teamOne" ? null : "teamOne")
              }
              className="w-full px-4 py-2 border border-slate-600 rounded-lg text-left bg-slate-700 text-white font-medium transition-all duration-200 hover:border-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
            >
              <span className={teamOneName ? "text-white" : "text-gray-400"}>
                {teamOneName || "Select a team"}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  openDropdown === "teamOne" ? "transform rotate-180" : ""
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

            {openDropdown === "teamOne" && (
              <div className="absolute z-50 w-full mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg">
                <div className="max-h-60 overflow-y-auto">
                  {NHL_TEAMS.map((team) => (
                    <button
                      key={team}
                      type="button"
                      onClick={() => handleTeamOneChange(team)}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                        teamOneName === team
                          ? "bg-blue-600 text-white"
                          : "text-gray-200 hover:bg-slate-600"
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

        {/* Team Two Dropdown */}
        <div className="flex flex-col gap-2" ref={teamTwoRef}>
          <label className="text-sm font-semibold text-gray-300">
            Team Two
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === "teamTwo" ? null : "teamTwo")
              }
              className="w-full px-4 py-2 border border-slate-600 rounded-lg text-left bg-slate-700 text-white font-medium transition-all duration-200 hover:border-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
            >
              <span className={teamTwoName ? "text-white" : "text-gray-400"}>
                {teamTwoName || "Select a team"}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  openDropdown === "teamTwo" ? "transform rotate-180" : ""
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

            {openDropdown === "teamTwo" && (
              <div className="absolute z-50 w-full mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg">
                <div className="max-h-60 overflow-y-auto">
                  {NHL_TEAMS.map((team) => (
                    <button
                      key={team}
                      type="button"
                      onClick={() => handleTeamTwoChange(team)}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                        teamTwoName === team
                          ? "bg-blue-600 text-white"
                          : "text-gray-200 hover:bg-slate-600"
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

        {/* Scenario Dropdown */}
        <div className="flex flex-col gap-2" ref={scenarioRef}>
          <label className="text-sm font-semibold text-gray-300">
            Scenario
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "scenario" ? null : "scenario"
                )
              }
              className="w-full px-4 py-2 border border-slate-600 rounded-lg text-left bg-slate-700 text-white font-medium transition-all duration-200 hover:border-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
            >
              <span className={scenario ? "text-white" : "text-gray-400"}>
                {scenario || "Select a scenario"}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
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
              <div className="absolute z-50 w-full mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg">
                <div className="max-h-60 overflow-y-auto">
                  {SCENARIOS.map((scen) => (
                    <button
                      key={scen}
                      type="button"
                      onClick={() => handleScenarioChange(scen)}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                        scenario === scen
                          ? "bg-blue-600 text-white"
                          : "text-gray-200 hover:bg-slate-600"
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
          disabled={!teamOneName || !teamTwoName || !scenario}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
        >
          Submit
        </button>
      </form>
      {(errorMessage || teamOneName === teamTwoName) && (
        <div className="text-red-500 text-sm p-4 text-center">{errorMessage}</div>
      )}
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "./api.config";
import type {
  SingleTeamRequest,
  SingleTeamResponse,
} from "../types/SingleTeam.type";

/**
 * Fetches individual team statistics from the backend API.
 *
 * Makes a POST request to the /api/team endpoint with the specified team name,
 * stat type (offensive/defensive), and game scenario (5v5/all strength).
 *
 * @param request - The team statistics request containing team name, stat type, and scenario
 * @returns A promise that resolves to the team statistics response including league averages,
 *          team averages, historical time-series data, and column headers
 * @throws Error if the API request fails or returns a non-2xx status code
 */
async function fetchTeamStats(
  request: SingleTeamRequest
): Promise<SingleTeamResponse> {
  const response = await fetch(ENDPOINTS.TEAM, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch team stats: ${response.statusText}`);
  }

  return response.json();
}

/**
 * React hook for fetching and caching single team statistics.
 *
 * Provides automatic data fetching, caching, and state management for team statistics queries.
 * Data is cached for 1 hour before being marked as stale, and unused data is kept in memory
 * for 24 hours for potential reuse.
 *
 * @param request - The team statistics request parameters (team name, stat type, scenario).
 *                  Pass null to prevent the query from running.
 * @param enabled - Whether the query should execute. Defaults to true. Set to false to
 *                  conditionally disable fetching (e.g., before user submits a form).
 * @returns An object containing:
 *   - data: The fetched team statistics response (undefined while loading)
 *   - isLoading: True during the initial data fetch
 *   - isFetching: True while any fetch is in progress
 *   - isError: True if the request failed
 *   - error: The error object if the request failed (null if successful)
 *   - refetch: Function to manually trigger a new fetch
 *
 * @example
 * const { data, isLoading, error } = useSingleTeamStats({
 *   team_name: "Colorado Avalanche",
 *   stat_type: "Offensive",
 *   scenario: "5 vs 5"
 * });
 */
export function useSingleTeamStats(
  request: SingleTeamRequest | null,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["team", request],
    queryFn: () => fetchTeamStats(request!),
    enabled: enabled && request !== null,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
}

import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "./api.config";
import type {
  CompareTeamRequest,
  CompareTeamResponse,
} from "../types/CompareTeam.type";

/**
 * Fetches comparative statistics for two NHL teams from the backend API.
 *
 * Makes a POST request to the /api/compare endpoint to retrieve side-by-side
 * statistics for two teams. Results include league averages, season averages,
 * and historical time-series data for both teams across all key metrics.
 *
 * @param request - The comparison request containing two team names and strength mode
 * @returns A promise that resolves to the team comparison response including league averages,
 *          and detailed statistics for both teams (season averages and time-series data)
 * @throws Error if the API request fails or returns a non-2xx status code
 */
async function fetchCompareStats(
  request: CompareTeamRequest
): Promise<CompareTeamResponse> {
  const response = await fetch(ENDPOINTS.COMPARE, {
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
 * React hook for fetching and caching team comparison statistics.
 *
 * Provides automatic data fetching, caching, and state management for comparing
 * two teams' statistics. Enables side-by-side analysis of team performance across
 * all key metrics. Data is cached for 1 hour before being marked as stale, and
 * unused data is kept in memory for 24 hours for potential reuse.
 *
 * @param request - The team comparison request parameters (team names and strength mode).
 *                  Pass null to prevent the query from running.
 * @param enabled - Whether the query should execute. Defaults to true. Set to false to
 *                  conditionally disable fetching (e.g., before user selects both teams).
 * @returns An object containing:
 *   - data: The fetched comparison response with both teams' statistics (undefined while loading)
 *   - isLoading: True during the initial data fetch
 *   - isFetching: True while any fetch is in progress
 *   - isError: True if the request failed
 *   - error: The error object if the request failed (null if successful)
 *   - refetch: Function to manually trigger a new fetch
 *
 * @example
 * const { data, isLoading, error } = useCompareTeamStats({
 *   team_one_name: "Colorado Avalanche",
 *   team_two_name: "Boston Bruins",
 *   strength: "5 vs 5"
 * });
 */
export function useCompareTeamStats(
  request: CompareTeamRequest | null,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["compare", request],
    queryFn: () => fetchCompareStats(request!),
    enabled: enabled && request !== null,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
}

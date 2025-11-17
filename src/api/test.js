async function fetchTeamStats() {
  const response = await fetch(
    "https://farlo-nhl-model.up.railway.app/api/compare",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch team stats: ${response.statusText}`);
  }

  return response.json();
}

const request = {
  team_one_name: "Washington Capitals",
  team_two_name: "Edmonton Oilers",
  strength: "All Strength",
};

const stats = await fetchTeamStats(request);
console.log(stats);

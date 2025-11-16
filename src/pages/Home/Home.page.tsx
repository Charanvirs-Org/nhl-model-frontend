import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="text-6xl">🏒</div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            NHL Stats Analyzer
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced hockey analytics & performance intelligence. Analyze
            individual teams, compare matchups, and uncover performance insights
            with real-time data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/single-team"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
            >
              Analyze Team
            </Link>
            <Link
              to="/compare-teams"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Compare Teams
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-700 rounded-lg p-8 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 border border-slate-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">
                Analyze Individual Teams
              </h3>
              <p className="text-gray-300 mb-4">
                Dive deep into team statistics with daily trends, league
                averages, and season-long performance metrics.
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                Key Metrics: GF, xGF, SCF, PDO
              </div>
              <Link
                to="/single-team"
                className="inline-block mt-6 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                View Team Stats →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-700 rounded-lg p-8 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 border border-slate-600">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3">Compare Teams</h3>
              <p className="text-gray-300 mb-4">
                Side-by-side comparison of two NHL teams across all key metrics
                to identify relative strengths and weaknesses.
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                Strength Modes: 5v5 & All Strength
              </div>
              <Link
                to="/compare-teams"
                className="inline-block mt-6 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Compare Now →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-700 rounded-lg p-8 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 border border-slate-600">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Real-Time Data</h3>
              <p className="text-gray-300 mb-4">
                Daily updated metrics from Natural Stat Trick ensuring you
                always have the latest performance data.
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                Updated Daily
              </div>
              <div className="inline-block mt-6 text-gray-400">
                Latest Data Available ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Select Team</h3>
              <p className="text-gray-400 text-sm">Choose from 32 NHL teams</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Choose Metrics</h3>
              <p className="text-gray-400 text-sm">
                Offensive or Defensive stats
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Select Strength</h3>
              <p className="text-gray-400 text-sm">5v5 or All Strength play</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Analyze Results</h3>
              <p className="text-gray-400 text-sm">View trends & insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Explained */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Understanding the Metrics
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Offensive */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Offensive Metrics
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">GF (Goals For)</p>
                  <p className="text-gray-400 text-sm">
                    Average goals scored per game
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">
                    xGF (Expected Goals)
                  </p>
                  <p className="text-gray-400 text-sm">
                    Quality-adjusted expected goals per game
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">
                    SCF (Scoring Chances For)
                  </p>
                  <p className="text-gray-400 text-sm">
                    Total scoring opportunities created per game
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">PDO (Puck Luck)</p>
                  <p className="text-gray-400 text-sm">
                    Goals For % + Save % (indicator of luck)
                  </p>
                </div>
              </div>
            </div>

            {/* Defensive */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Defensive Metrics
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">GA (Goals Against)</p>
                  <p className="text-gray-400 text-sm">
                    Average goals allowed per game
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">
                    xGA (Expected Goals Against)
                  </p>
                  <p className="text-gray-400 text-sm">
                    Quality-adjusted expected goals allowed per game
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">
                    SCA (Scoring Chances Against)
                  </p>
                  <p className="text-gray-400 text-sm">
                    Opponent scoring opportunities allowed per game
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-white">PDO (Puck Luck)</p>
                  <p className="text-gray-400 text-sm">
                    Goals Against % + Save % (indicator of luck)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strength Modes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Analysis Modes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                5 vs 5 Even Strength
              </h3>
              <p className="text-gray-300 mb-4">
                Analyzes play during even-strength situations where both teams
                have the same number of players on ice.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Most representative of team quality</li>
                <li>✓ Removes power play variance</li>
                <li>✓ Excludes penalty kill situations</li>
                <li>✓ Core team skill indicator</li>
              </ul>
            </div>
            <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                All Strength Play
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive analysis including all game situations: even
                strength, power plays, and penalty kills.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Complete picture of team performance</li>
                <li>✓ Includes special teams play</li>
                <li>✓ Reflects actual game results</li>
                <li>✓ Shows overall strength</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Analyze?</h2>
        <p className="text-xl text-gray-300 mb-12">
          Start exploring NHL team statistics and gain competitive insights
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/single-team"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
          >
            View Team Stats
          </Link>
          <Link
            to="/compare-teams"
            className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Compare Teams
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm border-t border-slate-700 pt-8">
            <p>© 2025 NHL Stats Analyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

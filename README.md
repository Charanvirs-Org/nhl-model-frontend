# NHL Stats Analyzer

A web application for analyzing and comparing NHL team statistics with real-time data from Natural Stat Trick.

## Features

- **Single Team Analysis** - Analyze individual NHL team statistics including daily trends, league averages, and season-long performance metrics
- **Team Comparison** - Compare side-by-side statistics between two NHL teams
- **Multiple Strength Modes** - View metrics across 5v5 Even Strength and All Strength situations
- **Real-Time Data** - Daily-updated data integration for the most current analytics

## Tech Stack

### Frontend
- **React** 19.2.0 - UI framework
- **TypeScript** 5.9.3 - Type-safe JavaScript
- **Vite** 7.2.2 - Fast build tool and dev server
- **React Router** 7.9.6 - Client-side routing
- **TanStack React Query** 5.90.10 - Server state management and caching
- **Tailwind CSS** 3.4.18 - Utility-first CSS framework
- **ESLint** 9.39.1 - Code linting

### Backend
- **API Server** - https://farlo-nhl-model.up.railway.app/api/

## Project Structure

```
src/
├── api/                 # API integration layer with React Query hooks
├── components/          # Reusable React components
│   ├── NavBar/
│   ├── SingleTeamForm/
│   ├── TwoTeamForm/
│   └── StatsChart/
├── layouts/             # Layout wrappers
│   └── MainLayout.tsx
├── pages/               # Page-level components
│   ├── Home/
│   ├── SingleTeam/
│   └── CompareTeams/
├── types/               # TypeScript type definitions
├── App.tsx              # Main router
├── main.tsx             # React entry point
└── index.css            # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NHL-Model-Client
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables by checking `.env` file for required configuration

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Lint

Check code quality:
```bash
npm run lint
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## API Endpoints

The application connects to the following API endpoints:

- `GET /api/team/:teamName` - Fetch statistics for a single team
- `GET /api/compare/:team1/:team2` - Fetch comparison data for two teams

## Pages

### Home (`/`)
Landing page with an overview of features and call-to-action links to the analysis tools.

### Single Team (`/single-team`)
Analyze detailed statistics for an individual NHL team.

### Compare Teams (`/compare-teams`)
Compare statistics side-by-side between two NHL teams.

## Development Notes

- Fast Refresh is enabled for quick hot module reloading during development
- Strict TypeScript checking is enabled for type safety
- ESLint enforces React Hooks and React Refresh best practices

## Future Improvements

- [ ] Implement SingleTeam page with statistics display
- [ ] Implement CompareTeams page with comparison visualizations
- [ ] Build out chart components for data visualization
- [ ] Add advanced filtering and sorting options
- [ ] Expand metrics and analysis capabilities

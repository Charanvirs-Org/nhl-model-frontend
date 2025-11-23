interface StatsTableProps {
  columns: string[];
  data: number[][];
}

export function StatsTable({ columns, data }: StatsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700">
      <table className="min-w-full text-sm text-left text-white">
        <thead className="bg-slate-800 border-b border-slate-700">
          <tr>
            <th className="px-4 py-2 font-semibold">GP</th>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 font-semibold text-gray-300">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-slate-700 hover:bg-slate-800 transition-colors">
              <td className="px-4 py-2 font-semibold text-gray-300">
                {rowIndex + 1}
              </td>
              {row.map((value, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-gray-200">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

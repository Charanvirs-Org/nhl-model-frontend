interface StatsTableProps {
  columns: string[];
  data: number[][];
}

export function StatsTable({ columns, data }: StatsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-300">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-slate-100 border-b">
          <tr>
            <th>GP</th>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 font-semibold text-slate-700">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b hover:bg-slate-50">
              <td className="px-4 py-2 font-semibold text-slate-700">
                {rowIndex + 1}
              </td>
              {row.map((value, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
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

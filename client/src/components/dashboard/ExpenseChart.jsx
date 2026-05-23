import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", expenses: 4000 },
  { month: "Feb", expenses: 3000 },
  { month: "Mar", expenses: 5000 },
  { month: "Apr", expenses: 4500 },
  { month: "May", expenses: 6000 },
  { month: "Jun", expenses: 5500 },
];

function ExpenseChart() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-2xl font-semibold">
            Expense Analytics
          </h2>

          <p className="text-gray-400 text-sm">
            Monthly spending overview
          </p>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#3B82F6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpenseChart;
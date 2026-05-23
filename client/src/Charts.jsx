import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ expenses }) {
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#ff6361"];

  const categoryData = {};

  expenses.forEach((exp) => {
    categoryData[exp.category] =
      (categoryData[exp.category] || 0) + Number(exp.amount);
  });

  const pieData = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
      
      <div style={{ width: "50%", height: 300 }}>
        <h3>Expense Distribution</h3>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: "50%", height: 300 }}>
        <h3>Category Spending</h3>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pieData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
function AIInsights() {
  const insights = [
    {
      title: "Food Spending Increased",
      description: "You spent 18% more on food this month.",
    },
    {
      title: "Highest Expense Category",
      description: "Shopping contributed 42% of your expenses.",
    },
    {
      title: "Smart Budget Suggestion",
      description: "Recommended monthly savings target: ₹5000",
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-2xl font-semibold">
            AI Insights
          </h2>

          <p className="text-gray-400 text-sm">
            Personalized financial recommendations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-white text-lg font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsights;
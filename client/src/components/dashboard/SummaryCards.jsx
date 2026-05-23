function SummaryCards() {
  const cards = [
    {
      title: "Total Balance",
      amount: "₹45,250",
      color: "text-white",
    },
    {
      title: "Monthly Expenses",
      amount: "₹12,430",
      color: "text-red-400",
    },
    {
      title: "Savings",
      amount: "₹8,920",
      color: "text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
        >
          <p className="text-gray-400 mb-3">
            {card.title}
          </p>

          <h2 className={`text-3xl font-bold ${card.color}`}>
            {card.amount}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
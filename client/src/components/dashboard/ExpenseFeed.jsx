function ExpenseFeed({ expenses }) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mt-8">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-2xl font-semibold">
            Recent Transactions
          </h2>

          <p className="text-gray-400 text-sm">
            Latest financial activity
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {expenses.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#0B0F19] border border-gray-800 rounded-xl p-4"
          >
            <div>
              <h3 className="text-white font-medium">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.category}
              </p>
            </div>

            <h2 className="text-red-400 text-lg font-semibold">
              ₹{item.amount}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseFeed;
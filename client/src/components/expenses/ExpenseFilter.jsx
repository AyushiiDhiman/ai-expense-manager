function ExpenseFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex gap-4 mb-6">
      
      <button
        onClick={() => setSelectedCategory("All")}
        className={`px-4 py-2 rounded-lg ${
          selectedCategory === "All"
            ? "bg-blue-600 text-white"
            : "bg-[#111827] text-gray-400"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setSelectedCategory("Food")}
        className={`px-4 py-2 rounded-lg ${
          selectedCategory === "Food"
            ? "bg-blue-600 text-white"
            : "bg-[#111827] text-gray-400"
        }`}
      >
        Food
      </button>

      <button
        onClick={() => setSelectedCategory("Travel")}
        className={`px-4 py-2 rounded-lg ${
          selectedCategory === "Travel"
            ? "bg-blue-600 text-white"
            : "bg-[#111827] text-gray-400"
        }`}
      >
        Travel
      </button>

      <button
        onClick={() => setSelectedCategory("Shopping")}
        className={`px-4 py-2 rounded-lg ${
          selectedCategory === "Shopping"
            ? "bg-blue-600 text-white"
            : "bg-[#111827] text-gray-400"
        }`}
      >
        Shopping
      </button>
    </div>
  );
}

export default ExpenseFilter;
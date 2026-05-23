import { useState } from "react";

import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import AIInsights from "../components/dashboard/AIInsights";
import ExpenseFeed from "../components/dashboard/ExpenseFeed";

import ChatAssistant from "../components/ai/ChatAssistant";

import AddExpenseModal from "../components/expenses/AddExpenseModal";
import ExpenseFilter from "../components/expenses/ExpenseFilter";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [expenses, setExpenses] = useState([
    {
      title: "Swiggy Order",
      amount: 450,
      category: "Food",
    },
    {
      title: "Uber Ride",
      amount: 220,
      category: "Travel",
    },
    {
      title: "Nike Shoes",
      amount: 3500,
      category: "Shopping",
    },
  ]);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === selectedCategory
        );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        
        <div>
          <h1 className="text-white text-3xl font-bold">
            Financial Overview
          </h1>

          <p className="text-gray-400 mt-1">
            Track and manage your expenses
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium"
        >
          + Add Expense
        </button>
      </div>

      <SummaryCards />

      <ExpenseChart />

      <AIInsights />

      <div className="mt-8">
        <ExpenseFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <ExpenseFeed expenses={filteredExpenses} />

      <ChatAssistant />

      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
    </div>
  );
}

export default Dashboard;
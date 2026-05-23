import { useState } from "react";

function AddExpenseModal({ isOpen, onClose, onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      title,
      amount,
      category,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("Food");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-[#111827] w-[500px] rounded-2xl border border-gray-800 p-6">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold">
            Add Expense
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
          </select>

          <div className="flex justify-end gap-4 pt-4">
            
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-700 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white"
            >
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseModal;
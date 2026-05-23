import { useState } from "react";
import { addExpense } from "../services/api";

export default function ExpenseForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense(form);
    setForm({ title: "", amount: "", category: "Food" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />

      <select name="category" value={form.category} onChange={handleChange}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}
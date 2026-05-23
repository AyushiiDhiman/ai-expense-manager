import { useEffect, useState } from "react";
import { getExpenses } from "./services/api";

import Dashboard from "./pages/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.log(err);
      setExpenses([]);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const total = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  return (
    <div>
      <h1>Expense Manager 💰</h1>

      {/* DASHBOARD */}
      <Dashboard expenses={expenses} />

      {/* TOTAL */}
      <h2>Total Expense: ₹{total}</h2>

      {/* FORM */}
      <ExpenseForm refresh={fetchExpenses} />

      {/* LIST */}
      <ExpenseList expenses={expenses} refresh={fetchExpenses} />
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { getExpenses } from "./services/api";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Manager 💰</h1>

      <ExpenseForm refresh={fetchExpenses} />

      <ExpenseList expenses={expenses} refresh={fetchExpenses} />
    </div>
  );
}

export default App;
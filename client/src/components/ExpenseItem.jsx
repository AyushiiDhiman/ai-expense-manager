import { deleteExpense } from "../services/api";

export default function ExpenseItem({ expense, refresh }) {
  const handleDelete = async () => {
    await deleteExpense(expense._id);
    refresh();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div>
        <h3>{expense.title}</h3>
        <p>{expense.category}</p>
      </div>

      <div>
        <strong>₹{expense.amount}</strong>
        <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>
    </div>
  );
}
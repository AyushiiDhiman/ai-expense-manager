import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses = [], refresh }) {
  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {expenses.map((exp) => (
        <ExpenseItem key={exp._id} expense={exp} refresh={refresh} />
      ))}
    </div>
  );
}
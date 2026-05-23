const Expense = require("../models/Expense");

// CREATE EXPENSE (with userId)
exports.createExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      userId: req.userId, // 🔐 from auth middleware
    });

    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONLY USER EXPENSES
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
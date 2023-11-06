const ExpenseModel = require("../models/ExpensesModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const Expense = ExpenseModel({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    await Expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const Expenses = await ExpenseModel.find().sort({ createdAt: -1 });
    res.status(200).json(Expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseModel.findByIdAndDelete(id)
    .then((Expense) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};

const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/Income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/Expenses");
const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-income", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expenses", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expenses/:id", deleteExpense);

module.exports = router;

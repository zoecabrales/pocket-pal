const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expenseController");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/incomeController");

const nav = require("express").Router();

nav
  .post("/add-income", addIncome)
  .get("/get-income", getIncomes)
  .delete("/del-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/del-expense/:id", deleteExpense);

module.exports = nav;

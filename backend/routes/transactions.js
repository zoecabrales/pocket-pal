const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/incomeController");

const nav = require("express").Router();

nav
  .post("/add-income", addIncome)
  .get("/get-income", getIncomes)
  .delete("/del-income/:id", deleteIncome);

module.exports = nav;

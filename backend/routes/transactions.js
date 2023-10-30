const { addIncome } = require("../controllers/incomeController");

const nav = require("express").Router();

nav.post("/add-income", addIncome);

module.exports = nav;

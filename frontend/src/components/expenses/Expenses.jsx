import { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import IncomeItem from "../incomeItem/IncomeItem";
import ExpenseForm from "../expenses/ExpenseForm";

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Spending</h1>
        <h2 className="total-income">
          Total Spending:{" "}
          <span style={{ color: "red" }}> - ₱{totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 1px solid #ffffff; /* Reduced border thickness */
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.06); /* Reduced box shadow */
    border-radius: 10px; /* Reduced border radius */
    padding: 0.5rem; /* Reduced padding */
    margin: 0.5rem 0; /* Reduced margin */
    font-size: 1.5rem; /* Reduced font size */
    gap: 0.3rem; /* Reduced gap */

    span {
      font-size: 2rem; /* Reduced font size */
      font-weight: 600; /* Adjusted font weight */
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    gap: 1rem; /* Reduced gap */

    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;

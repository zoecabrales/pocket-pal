import { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../form/Form";
import IncomeItem from "../incomeItem/IncomeItem";

function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Earnings:{" "}
          <span style={{ color: "green" }}> + ₱{totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
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

export default Income;

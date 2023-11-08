import { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../history/History";
import { InnerLayout } from "../../styles/Layouts";
import { dollar, peso } from "../../utils/Icons";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {peso} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {peso} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {peso} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>
                {peso}
                {Math.min(...incomes.map((item) => item.amount))}
              </p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>
                {peso}
                {Math.min(...expenses.map((item) => item.amount))}
              </p>
              <p>
                {peso}
                {Math.max(...expenses.map((item) => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem; /* Reduced gap */
    .chart-con {
      grid-column: 1 / 4;
      height: 300px; /* Reduced chart height */
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem; /* Reduced gap */
        margin-top: 1rem; /* Reduced margin */
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 1px solid #ffffff; /* Reduced border thickness */
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.06); /* Reduced box shadow */
          border-radius: 10px; /* Reduced border radius */
          padding: 0.2rem; /* Reduced padding */
          p {
            font-size: 1rem; /* Reduced font size */
            font-weight: 100; /* Adjusted font weight */
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green); /* Light Blue */
            opacity: 0.6;
            font-size: 1.5rem; /* Reduced font size */
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 0.5rem 0; /* Reduced margin */
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1rem; /* Reduced font size */
        span {
          font-size: 1.5rem; /* Reduced font size */
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 1px solid #ffffff; /* Reduced border thickness */
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.06); /* Reduced box shadow */
        padding: 0.5rem; /* Reduced padding */
        border-radius: 10px; /* Reduced border radius */
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 400;
          font-size: 1rem; /* Reduced font size */
        }
      }
    }
  }
`;

export default Dashboard;

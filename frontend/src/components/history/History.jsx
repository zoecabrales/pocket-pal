import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Reduced gap */

  .history-item {
    background: #fcf6f9;
    border: 1px solid #ffffff; /* Reduced border thickness */
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.06); /* Reduced box shadow */
    padding: 0.5rem; /* Reduced padding */
    border-radius: 10px; /* Reduced border radius */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;

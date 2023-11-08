import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import {
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  food,
  freelance,
  medical,
  money,
  peso,
  piggy,
  takeaway,
  trash,
  tv,
} from "../../utils/Icons";
import Button from "../Button/Button";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = (category) => {
    switch (category) {
      case "salary":
        return money;
      case "bank":
        return card;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = (category) => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  console.log("type", type);

  const handleDeleteItem = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      deleteItem(id);
    }
  };

  return (
    <IncomeItemStyled indicator={indicatorColor}>
      <div className="icon">
        {type === "income" ? categoryIcon(category) : expenseCatIcon(category)}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {peso} {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={{ color: "black" }}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color--delete)"}
              onClick={() => handleDeleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  border: 1px solid #ffffff; /* Reduced border thickness */
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.06); /* Reduced box shadow */
  border-radius: 10px; /* Reduced border radius */
  padding: 0.5rem; /* Reduced padding */
  margin-bottom: 0.5rem; /* Reduced margin */
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Reduced gap */
  width: 100%;
  color: var(--primary-color); /* Bright orange */

  .icon {
    width: 60px; /* Reduced width */
    height: 60px; /* Reduced height */
    border-radius: 10px; /* Reduced border radius */
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff; /* Reduced border thickness */
    i {
      font-size: 2rem; /* Reduced font size */
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.1rem; /* Reduced gap */

    h5 {
      font-size: 1rem; /* Reduced font size */
      padding-left: 1rem; /* Reduced padding */
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.6rem; /* Reduced width */
        height: 0.6rem; /* Reduced height */
        border-radius: 50%;
        background: var(--color-green); /* Bright green */
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1rem; /* Reduced gap */
        p {
          display: flex;
          align-items: center;
          gap: 0.3rem; /* Reduced gap */
          color: var(--color-grey); /* Earthy grey */
          opacity: 0.8;
          font-size: 0.8rem; /* Reduced font size */
        }
      }
    }
  }
`;

export default IncomeItem;

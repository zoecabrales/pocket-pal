/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import avatar from "../../assets/img/avatar.jpg";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/Icons";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Jireh Zoe</h2>
          <p>Your Funds</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>{signout} Sign Out</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 1rem 0.8rem; /* Reduced padding */
  width: 300px; /* Reduced width */
  height: 100%;
  background: rgba(240, 241, 76, 0.78);
  border: 1px solid #ffffff; /* Reduced border thickness */
  backdrop-filter: blur(2px); /* Reduced blur */
  border-radius: 16px; /* Reduced border radius */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem; /* Reduced gap */

  .user-con {
    height: 80px; /* Reduced height */
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Reduced gap */
    img {
      width: 60px; /* Reduced width */
      height: 60px; /* Reduced height */
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 1px solid #ffffff; /* Reduced border thickness */
      padding: 0.1rem; /* Reduced padding */
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06); /* Reduced box shadow */
    }
    h2 {
      color: var(--primary-color); /* Bright orange */
      font-size: 1rem; /* Reduced font size */
    }
    p {
      color: var(--color-grey); /* Earthy grey */
      font-size: 0.8rem; /* Reduced font size */
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 30px auto; /* Reduced icon size */
      align-items: center;
      margin: 0.4rem 0; /* Reduced margin */
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease-in-out; /* Adjusted transition duration */
      color: var(--primary-color); /* Earthy grey */
      padding-left: 0.8rem; /* Reduced padding */
      position: relative;
      i {
        color: var(--color-grey); /* Earthy grey */
        font-size: 1rem; /* Reduced font size */
        transition: all 0.3s ease-in-out; /* Adjusted transition duration */
      }
    }
  }

  .active {
    color: var(--primary-color); /* Bright orange */
    i {
      color: var(--primary-color); /* Bright orange */
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 2px; /* Reduced width */
      height: 100%;
      background: var(--primary-color); /* Bright orange */
      border-radius: 0 8px 8px 0; /* Adjusted border radius */
    }
  }
`;

export default Navigation;

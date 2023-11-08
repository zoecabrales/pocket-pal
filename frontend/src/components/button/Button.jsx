import styled from "styled-components";

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem; /* Reduced font size to 0.9rem */
  display: flex;
  align-items: center;
  gap: 0.3rem; /* Reduced gap */
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background-color: var(--color-accent); /* Bright Orange */
  color: var(--color-green); /* Light Blue */
  padding: 0.4rem 0.6rem; /* Reduced padding */

  &:hover {
    background-color: var(--color-delete); /* Bright Red */
    color: var(--color-accent); /* Bright Orange */
  }
`;

export default Button;

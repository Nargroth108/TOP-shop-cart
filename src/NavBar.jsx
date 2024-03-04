import { Link } from "react-router-dom";
import styled from "styled-components";
import CartButton from "./CartButton";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 1em;
  padding-right: 1.5em;
  background-color: black;
  color: white;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: right;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5vw;
`;
const StyledLi = styled.li`
  :visited,
  :link {
    text-decoration: none;
    color: white;
  }
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1.2;
  }
`;

function NavBar() {
  return (
    <StyledHeader>
      <h2 style={{ justifySelf: "start" }}>TinyShop</h2>
      <StyledUl>
        <StyledLi>
          <Link to="/">Home</Link>
        </StyledLi>
        <StyledLi>
          <Link to="products">Products</Link>
        </StyledLi>
        <StyledLi>
          <Link to="cart">
            <CartButton />
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledHeader>
  );
}

export default NavBar;

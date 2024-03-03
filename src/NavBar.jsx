import { Link } from "react-router-dom";
import styled from "styled-components";
import useStore from "./Store";

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 1em;
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
  :visited,
  :link {
    text-decoration: none;
    color: white;
  }
  :hover {
    scale: 1.1;
  }
  :active {
    scale: 1.2;
  }
`;
const StyledButton = styled.button`
  position: relative;
  border: none;
  background-color: inherit;
  &&:hover {
    scale: 1.1;
  }
  &&:active {
    scale: 1.2;
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  top: -9px;
  right: -18px;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: green;
  color: white;
  display: grid;
  justify-items: center;
  align-items: center;
`;

function NavBar() {
  const count = useStore((state) => state.cartItems).length;
  console.log(count);
  return (
    <StyledHeader>
      <h1 style={{ justifySelf: "start" }}>TinyShop</h1>
      <StyledUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="cart">
            <StyledButton>
              <StyledDiv>{count}</StyledDiv>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="white"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
              </svg>
            </StyledButton>
          </Link>
        </li>
      </StyledUl>
    </StyledHeader>
  );
}

export default NavBar;

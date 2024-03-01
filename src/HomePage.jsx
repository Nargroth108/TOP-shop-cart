import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: calc(100vh - 70px);
  padding: 1em;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
const StyledTitle = styled.h1`
  font-size: 2rem;
  display: grid;
  justify-items: center;
`;
const StyledBtn = styled.button`
  width: fit-content;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 20px;
  background-color: green;
  :visited,
  :link {
    color: white;
    text-decoration: none;
  }
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1.2;
  }
`;

function HomePage() {
  return (
    <StyledSection>
      <StyledTitle>Welcome to TinyShop!</StyledTitle>
      <p>
        TinyShop is an all-in shop for fashion-forward clothing and exquisite
        jewelry for both men and women. You can also find electronic devices
        here. Step into a world of endless possibilities and let us redefine
        your shopping journey.
      </p>
      <StyledBtn>
        <Link to="products" style={{ padding: ".5em" }}>
          Start shopping
        </Link>
      </StyledBtn>
    </StyledSection>
  );
}

export default HomePage;

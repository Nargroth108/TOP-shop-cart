import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 1em;
  background-color: lightgreen;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;
const StyledTitle = styled.h1`
  display: grid;
  justify-items: center;
  font-size: 2rem;
`;
const StyledBtn = styled.button`
  width: fit-content;
  border: 1px solid black;
  background-color: green;
  padding: 0.75em;
  border-radius: 20px;
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
        <Link to="products">Start shopping</Link>
      </StyledBtn>
    </StyledSection>
  );
}

export default HomePage;

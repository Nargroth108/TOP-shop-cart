import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSection = styled.section`
  padding: 1em;
  width: 250px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
  display: grid;
  grid-template-rows: 300px 1fr;
  align-items: end;
  justify-items: center;
`;
const StyledImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
const StyledP = styled.p`
  font-weight: bold;
  font-size: 1.5em;
`;
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  grid-auto-flow: column;
  width: 50%;
`;
const StyledAddBtn = styled.button`
  width: 35px;
  aspect-ratio: 1;
  border: 1px solid black;
  color: white;
  font-size: 1.5em;
  background-color: green;
  justify-self: end;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1.2;
  }
`;
const StyledRmvBtn = styled(StyledAddBtn)`
  justify-self: start;
  background-color: red;
`;
const StyledInput = styled.p`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: grid;
  align-items: center;
`;

const StyledTextDiv = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.4em;
`;

function ProductCard({ item }) {
  return (
    <StyledSection key={item.id}>
      <StyledImg src={item.image} alt="product image" />
      <StyledTextDiv>
        <h4>{item.title}</h4>
        <p>{`${item.rating.rate} ⭐ from ${item.rating.count} votes`}</p>
        <StyledP>{"$ " + item.price}</StyledP>
        <StyledContainer>
          <StyledRmvBtn>-</StyledRmvBtn>
          <StyledInput>0</StyledInput>
          <StyledAddBtn>+</StyledAddBtn>
        </StyledContainer>
      </StyledTextDiv>
    </StyledSection>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;

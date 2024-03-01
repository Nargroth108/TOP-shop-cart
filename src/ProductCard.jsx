import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSection = styled.section`
  padding: 1em;
  width: 250px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
  display: grid;
  gap: 0.7em;
`;
const StyledImg = styled.img`
  width: 100%;
  height: auto;
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
  transform: translate(50%);
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
  padding: 0.49em;
`;

function ProductCard({ item }) {
  return (
    <StyledSection key={item.id}>
      <StyledImg src={item.image} alt="product image" />
      <h4>{item.title}</h4>
      <p>{`${item.rating.rate} ⭐ from ${item.rating.count} votes`}</p>
      <StyledP>{"$ " + item.price}</StyledP>
      <StyledContainer>
        <StyledRmvBtn>-</StyledRmvBtn>
        <StyledInput>0</StyledInput>
        <StyledAddBtn>+</StyledAddBtn>
      </StyledContainer>
    </StyledSection>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;

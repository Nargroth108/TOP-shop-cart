import styled from "styled-components";
import PropTypes from "prop-types";
import ProductCardButtons from "./ProductCardButtons";

const StyledSection = styled.section`
  width: 250px;
  height: 600px;
  padding: 1em;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
  display: grid;
  grid-template-rows: 300px 1fr;
  justify-items: center;
  align-items: end;
`;
const StyledImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
const StyledP = styled.p`
  font-weight: bold;
  font-size: 1.5em;
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
        <ProductCardButtons item={item} />
      </StyledTextDiv>
    </StyledSection>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;

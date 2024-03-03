import useStore from "./Store";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 35px 50px 35px;
  grid-auto-flow: column;
`;
const StyledAddBtn = styled.button`
  width: 35px;
  aspect-ratio: 1;
  border: 1px solid black;
  background-color: green;
  color: white;
  font-size: 1.5em;
  justify-self: end;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1.2;
  }
`;
const StyledRmvBtn = styled(StyledAddBtn)`
  background-color: red;
  justify-self: start;
`;
const StyledInput = styled.p`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: grid;
  align-items: center;
`;
const StyledCartButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.4em;
  background-color: green;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

function ProductCardButtons({ item }) {
  const cartItems = useStore((state) => state.cartItems);
  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);
  const increaseAmount = useStore((state) => state.increaseItemAmount);
  const decreaseAmount = useStore((state) => state.decreaseItemAmount);

  const amountOfItemInCart = cartItems.filter(
    (cartItem) => cartItem.id === item.id,
  )[0]?.amount;

  function handleDecrease() {
    if (amountOfItemInCart > 1) {
      decreaseAmount(item);
    } else {
      removeItem(item);
    }
  }

  if (amountOfItemInCart > 0) {
    return (
      <StyledContainer>
        <StyledRmvBtn onClick={handleDecrease}>-</StyledRmvBtn>
        <StyledInput>{amountOfItemInCart}</StyledInput>
        <StyledAddBtn onClick={() => increaseAmount(item)}>+</StyledAddBtn>
      </StyledContainer>
    );
  } else {
    return (
      <StyledCartButton onClick={() => addItem(item)}>
        Add to cart
      </StyledCartButton>
    );
  }
}

ProductCardButtons.propTypes = {
  item: PropTypes.object,
};

export default ProductCardButtons;

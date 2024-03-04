import styled from "styled-components";
import useStore from "./Store";
import ProductCardButtons from "./ProductCardButtons";

const StyledMain = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 1em;
  background-color: lightgreen;
  display: grid;
  justify-items: center;
  gap: 1em;
`;
const StyledSection = styled.section`
  width: 100%;
  max-width: 400px;
  height: 120px;
  padding: 0.5em;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
  display: grid;
  grid-template: 45px 25px 1fr / 93.75px 1fr;
  place-items: center center;

  @media (max-width: 400px) {
    height: 175px;
    max-width: 80vw;
    grid-template: 45px 25px 1fr / 62.5px 1fr;
  }
`;
const StyledImage = styled.img`
  max-height: 75%;
  width: auto;
  align-self: start;
  grid-area: 2 / 1 / 4 / 2;

  @media (max-width: 400px) {
    max-height: 40%;
    align-self: center;
  }
`;
const StyledTitle = styled.h4`
  font-size: 1rem;
  grid-area: 1 / 1 / 2 / 3;
`;
const StyledP = styled.p`
  grid-area: 2 / 2 / 3 / 3;
`;
const StyledButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5em;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-area: 3 / 2 / 4 / 3;
  @media (max-width: 400px) {
    display: grid;
    place-items: center;
  }
`;
const StyledButton = styled.button`
  height: 35px;
  width: 35px;
  border: 1px solid black;
  background-color: red;
  display: grid;
  place-items: center center;
`;
const StyledPaymentSection = styled(StyledSection)`
  display: block;
  padding: 1em;
`;
const StyledCheckoutButton = styled.button`
  border: 1px solid black;
  background-color: green;
  margin-top: 1em;
  padding: 1em 0;
  border-radius: 15px;
  font-weight: bold;
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

function Cart() {
  const cartItems = useStore((state) => state.cartItems);
  const removeItem = useStore((state) => state.removeItem);

  return (
    <>
      <StyledMain>
        <div style={{ height: "fit-content", display: "grid", gap: "1em" }}>
          {cartItems.map((item) => (
            <StyledSection key={item.id}>
              <StyledImage src={item.image} />
              <StyledTitle>{item.title}</StyledTitle>
              <StyledP>
                <strong>Total price:</strong> ${" "}
                {Math.round((item.amount * item.price + Number.EPSILON) * 100) /
                  100}
              </StyledP>
              <StyledButtonContainer>
                <ProductCardButtons item={item} />
                <StyledButton onClick={() => removeItem(item)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="0 -960 960 960"
                    width="25"
                    fill="white"
                  >
                    <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                  </svg>
                </StyledButton>
              </StyledButtonContainer>
            </StyledSection>
          ))}
        </div>
        <StyledPaymentSection>
          <h4 style={{ width: "100%" }}>
            Total amount to pay: ${" "}
            {cartItems.reduce(
              (total, item) =>
                (total +=
                  Math.round(
                    (item.amount * item.price + Number.EPSILON) * 100,
                  ) / 100),
              0,
            )}
          </h4>
          <StyledCheckoutButton>
            <a style={{ padding: "1em" }} href="/">
              Checkout
            </a>
          </StyledCheckoutButton>
        </StyledPaymentSection>
      </StyledMain>
    </>
  );
}

export default Cart;

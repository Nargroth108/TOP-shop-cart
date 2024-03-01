import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-top: 2em;
  background-color: lightgreen;
`;

function ProductsPage() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();

      setProductData(data);
      console.log(data);
    };

    dataFetch();
  }, []);

  if (!productData) return "Loading products...";

  return (
    <StyledDiv>
      {productData.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </StyledDiv>
  );
}

export default ProductsPage;

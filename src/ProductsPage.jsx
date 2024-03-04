import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  padding: 1em;
  background-color: lightgreen;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 2em;
`;

function ProductsPage() {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const data = await (
          await fetch("https://fakestoreapi.com/products")
        ).json();

        setProductData(data);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };

    dataFetch();
  }, []);

  if (error)
    return (
      <p>
        An error was encountered while trying to fetch products data. <br />
        Please try refreshing the page!
      </p>
    );
  if (!productData) return <p>Loading products...</p>;

  return (
    <StyledMain>
      {productData.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </StyledMain>
  );
}

export default ProductsPage;

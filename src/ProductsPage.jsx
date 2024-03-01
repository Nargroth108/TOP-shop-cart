import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsPage() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://fakestoreapi.com/products?limit=1")
      ).json();

      setProductData(data);
      console.log(data);
    };

    dataFetch();
  }, []);

  if (!productData) return "Loading products...";

  return productData.map((item) => <ProductCard key={item.id} item={item} />);
}

export default ProductsPage;

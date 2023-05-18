import { ProductTiles } from "./common/ProductTiles";
import { productRange } from "../assets/data/productsData";
import { useParams } from "react-router-dom";

export const Products = () => {
  const { category } = useParams();
  console.log(category);
  const products = productRange.filter((c) => c.name === category);
  return (
    <>
      <div class="category-container">
        <ProductTiles products={products} />
      </div>
    </>
  );
};

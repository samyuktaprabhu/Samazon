import { useParams } from "react-router-dom";
import { productRange } from "../assets/data/productsData";

export const SingleProduct = () => {
  const { product: productName } = useParams();
  const product = productRange.find((product) => product.name === productName);
  return (
    <>
      <div>
        <img src="hello.jpg" alt="Product Image" />
      </div>
      <div>
        <h2>{product.name}</h2>
      </div>
      <div>{product.description}</div>
      <div>Price: €{product.price}</div>
      <div>Rating: {product.rating} ⭐️</div>
      <div># of pieces available: {product.availablePieces}</div>
    </>
  );
};

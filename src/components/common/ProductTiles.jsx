import { useContext } from "react";
import { ProductsContext } from "../..";
import { useNavigate } from "react-router-dom";

export const ProductTiles = (props) => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist, cartButtonText, wishListButtonText } =
    useContext(ProductsContext);

  const lowToHighSort = (a, b) => {
    return a.price - b.price;
  };

  const highToLowSort = (a, b) => {
    return b.price - a.price;
  };

  const handleSelectedProductCard = (product) => {
    navigate(
      "/products/" + product.category.toLowerCase() + "/" + product.name
    );
  };

  return (
    <>
      <div className="product-grid">
        {props.products
          .filter((product) => product.rating >= props.rating)
          .sort(
            props.sortType === "low-to-high" ? lowToHighSort : highToLowSort
          )
          .map((product) => (
            <>
              <div
                className="product-tile product"
                key={product.id}
                onClick={() => handleSelectedProductCard(product)}
              >
                <img
                  className="img"
                  src={product.image}
                  alt={product.name}
                ></img>
                <h3 className="h3">{product.name}</h3>
                {/* <p>{product.description}</p> */}
                <p>Price: €{product.price}</p>
                <p># of pieces available: {product.availablePieces}</p>
                <p>Rating: {product.rating} ⭐️ </p>

                <button
                  onClick={() =>
                    cartButtonText === "Add to Cart"
                      ? addToCart(product)
                      : navigate("/cart")
                  }
                >
                  {cartButtonText}
                </button>
                <br></br>
                <button
                  className="z-20"
                  onClick={() =>
                    wishListButtonText === "Add to Wishlist"
                      ? addToWishlist(product)
                      : navigate("/wishlist")
                  }
                >
                  {wishListButtonText}
                </button>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

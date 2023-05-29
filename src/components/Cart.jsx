import { useContext } from "react";
import { ProductsContext } from "..";

export const Cart = () => {
  const {
    cart,
    removeItemFromCart,
    incrementQuantityInCart,
    itemCount,
    decrementQuantityInCart,
  } = useContext(ProductsContext);
  return (
    <div>
      {cart.length === 0 ? (
        <h1> No items in cart yet! </h1>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="wishlist-card">
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="wishlist-card-image"
              />
            </div>
            <div className="wishlist-card-list">
              <div>
                <h2 className="wishlist-card-name">{item.name}</h2>
                <p className="wishlist-card-description">{item.description}</p>
              </div>
              <div>
                <span className="wishlist-card-price">€{item.price}</span>
              </div>
              <div>
                <span className="wishlist-card-name">
                  Quantity Ordered:{itemCount[item.id]}
                </span>
              </div>
              <button
                className="button-white"
                onClick={() => incrementQuantityInCart(item)}
              >
                +1
              </button>
              <button
                className="button-white"
                onClick={() => decrementQuantityInCart(item)}
              >
                -1
              </button>
              <div>
                <button
                  className="button-white"
                  onClick={() => removeItemFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

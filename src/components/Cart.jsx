import { useContext } from "react";
import { ProductsContext } from "..";

export const Cart = () => {
  const { cart } = useContext(ProductsContext);
  return (
    <div>
      {cart.map((item) => (
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
              <button className="button-white">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

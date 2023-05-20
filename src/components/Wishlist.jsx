import { useContext } from "react";
import { ProductsContext } from "..";

export const Wishlist = () => {
  const { wishlist } = useContext(ProductsContext);
  return (
    <div>
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-card">
          <img
            src={item.image}
            alt={item.name}
            className="wishlist-card-image"
          />
          <div className="wishlist-card-details">
            <h2 className="wishlist-card-name">{item.name}</h2>
            <p className="wishlist-card-description">{item.description}</p>
            <span className="wishlist-card-price">€{item.price}</span>
            <button className="button-black">Add</button>
            <button className="button-white">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

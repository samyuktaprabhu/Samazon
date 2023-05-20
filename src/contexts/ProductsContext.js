import { useState, createContext } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartButtonText, setCartButtonText] = useState("Add to Cart");
  const [wishListButtonText, setWishListButtonText] =
    useState("Add to Wishlist");

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartButtonText("Go to cart");
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    setWishListButtonText("Go to Wishlist");
  };

  return (
    <ProductsContext.Provider
      value={{
        cart,
        addToCart,
        wishlist,
        addToWishlist,
        cartButtonText,
        setCartButtonText,
        wishListButtonText,
        setWishListButtonText,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

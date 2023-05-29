import { useState, createContext } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  //  incrementQuantityInCart, itemCount, decrementQuantityInCart
  const [itemCount, setItemCount] = useState({});
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartButtonText, setCartButtonText] = useState("Add to Cart");
  const [wishListButtonText, setWishListButtonText] =
    useState("Add to Wishlist");

  const incrementQuantityInCart = (item) => {
    setItemCount((itemCount) => ({
      ...itemCount,
      [item.id]: itemCount[item.id] + 1,
    }));
  };

  const decrementQuantityInCart = (item) => {
    if (itemCount[item.id] - 1 === 0) {
      removeItemFromCart(item);
    } else {
      setItemCount((itemCount) => ({
        ...itemCount,
        [item.id]: itemCount[item.id] - 1,
      }));
    }
  };

  const removeItemFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };

  const removeItemFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartButtonText("Go to cart");
    setItemCount((itemCount) => ({
      ...itemCount,
      [product.id]: 1,
    }));
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
        removeItemFromWishlist,
        removeItemFromCart,
        incrementQuantityInCart,
        itemCount,
        decrementQuantityInCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

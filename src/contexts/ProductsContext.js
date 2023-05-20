import { useState, createContext } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ProductsContext.Provider value={{ cart, addToCart }}>
      {children}
    </ProductsContext.Provider>
  );
}

import { useContext } from "react";
import { ProductsContext } from "..";

export const Cart = () => {
  const { cart } = useContext(ProductsContext);
  return (
    <>
      <h1>Cart : {JSON.stringify(cart)}</h1>
    </>
  );
};

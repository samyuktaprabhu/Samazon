import { HomePage } from "./components/HomePage";
import { Products } from "./components/Products";
import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/wishlist">WishList</NavLink>
      <NavLink to="/address">Show Address</NavLink>
      <NavLink to="/login">Login</NavLink>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<HomePage />}></Route>
        <Route path="/wishlist" element={<HomePage />}></Route>
        <Route path="/address" element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

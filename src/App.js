import { HomePage } from "./components/HomePage";
import { Products } from "./components/Products";
import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../src/assets/logo/samazonLogo.svg";

export default function App() {
  return (
    <div className="App">
      <header class="navbar menu">
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <NavLink class="li" to="/">
            Home
          </NavLink>
          <NavLink class="li" to="/cart">
            Cart
          </NavLink>
          <NavLink class="li" to="/wishlist">
            WishList
          </NavLink>
          <NavLink class="li" to="/address">
            Show Address
          </NavLink>
          <NavLink class="li" to="/login">
            Login
          </NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
        <Route path="/cart" element={<HomePage />}></Route>
        <Route path="/wishlist" element={<HomePage />}></Route>
        <Route path="/address" element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

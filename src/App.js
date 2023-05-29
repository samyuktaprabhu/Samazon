import { HomePage } from "./components/HomePage";
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import { Wishlist } from "./components/Wishlist";
import { SingleProduct } from "./components/SingleProduct";
import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../src/assets/logo/samazonLogo.svg";
import { LoginPage } from "./components/LoginPage";
import { LogOut } from "./components/LogoutPage";
import { Signup } from "./components/Signup";

export default function App() {
  return (
    <div className="App">
      <header className="navbar menu">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <NavLink className="li" to="/">
            Home
          </NavLink>
          <NavLink className="li" to="/cart">
            Cart
          </NavLink>
          <NavLink className="li" to="/wishlist">
            WishList
          </NavLink>
          <NavLink className="li" to="/address">
            Show Address
          </NavLink>
          <NavLink className="li" to="/login">
            Login
          </NavLink>
          <NavLink className="li" to="/logout">
            Logout
          </NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
        <Route
          path="/products/:category/:product"
          element={<SingleProduct />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/address" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

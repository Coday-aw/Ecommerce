import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import DropDown from "./DropDown";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.ShoppingCart);
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <h1>Mega store</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/product">Products</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="nav-link">
          <Link to="/aboutUs">About</Link>
        </li>
        <li>
          <AuthContext.Consumer>
            {({ isAuthenticated }) => (
              <NavLink to={isAuthenticated ? "/auth/account" : "/auth/login"}>
                <FaUser className="text-xl" />
              </NavLink>
            )}
          </AuthContext.Consumer>
        </li>
        <li className="mr-10 relative">
          {
            <div className="absolute right-0 bg-red-600 text-white w-4 h-4 flex items-center justify-center rounded-full z-10">
              <p className="text-xs">{totalQuantity}</p>
            </div>
          }

          <DropDown>
            <FaShoppingCart className="text-xl" />
          </DropDown>
        </li>
      </ul>

      {/* <div className="cart-icon">
          <FaShoppingCart />
          <div>login</div>
        </div> */}
    </nav>
  );
};
export default Navbar;

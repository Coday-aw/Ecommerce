import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import DropDown from "./DropDown";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.ShoppingCart);

  return (
    <nav className="p-1 flex items-center justify-between border-b">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
          />
        </Link>
        <h1 className="text-xl text-black uppercase">Mega store</h1>
      </div>

      <ul className="flex justify-between items-center gap-2 sm:gap-5 md:gap-10">
        <li className="list-none hover:text-[#ff9f1a] hover:ease-in-out ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-none hover:text-[#ff9f1a] hover:ease-in-out">
          <NavLink to="/product">Products</NavLink>
        </li>
        <li className="list-none hover:text-[#ff9f1a] hover:ease-in-out">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="list-none hover:text-[#ff9f1a] hover:ease-in-out">
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
    </nav>
  );
};
export default Navbar;

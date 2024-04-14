import ShoppingCart from "../components/ShoppingCart";
import "../css/Checkout.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../components/AuthContext";
import { clearCart } from "../store/features/ShoppingCart/ShoppingCartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const { token } = useAuth();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const { cart, orderPlaced } = useSelector((state) => state.ShoppingCart);
  const dispatch = useDispatch();

  // hämta = Load cart from local storage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "LOAD_SAVED_CART", payload: JSON.parse(savedCart) });
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      setisLoggedIn(true);
    }
  }, [token]);

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!Array.isArray(cart) || !cart.length) {
      console.error("No products in the cart");
      return;
    }

    const addProduct = async () => {
      try {
        const res = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ products: cart }),
        });

        const data = await res.json();

        console.log(res, data);
        if (res.status === 201) {
          dispatch(clearCart());
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    addProduct();
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="wrapper">
          <div className="order-summary">
            {!orderPlaced && <h1>Order Summary</h1>}
            <ShoppingCart CheckOutPage />
            <button onClick={handleOrder} className="place-oder-btn">
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-11 text-3xl ">
          <p>You need to Login to place Order!</p>
          <p>
            <Link to="/auth/login">Login here!</Link>
          </p>
        </div>
      )}
    </>
  );
}
export default Checkout;

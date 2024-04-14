import { CartItem } from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  LOAD_SAVED_CART,
  clearCart,
} from "../store/features/ShoppingCart/ShoppingCartSlice";
import { Link } from "react-router-dom";
import "../css/ShoppingCart.css";
import { useEffect } from "react";

export const ShoppingCart = ({ CheckOutPage }) => {
  const { cart, totalPrice, orderPlaced } = useSelector(
    (state) => state.ShoppingCart
  );
  const dispatch = useDispatch();
  // hämta = Load cart from local storage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch(LOAD_SAVED_CART(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  // spara = Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="shopping-cart-container">
        <div className="cart-items">
          {cart.length === 0 ? (
            orderPlaced ? (
              <div className="text-lg text-center p-10">
                Order has been placed successfully! <br />
                <Link to="/auth/myOrder">View your order here</Link>
              </div>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty!</p>
              </div>
            )
          ) : (
            cart.map((product) => (
              <CartItem key={product.product._id} product={product} />
            ))
          )}
        </div>
        <hr />
        <div className="check-out">
          <div>
            <p>Total Price: {totalPrice}:-</p>
          </div>
          <div>
            {CheckOutPage ? (
              <button onClick={() => dispatch(clearCart())}></button>
            ) : (
              <Link
                to="/auth/checkout"
                className="check-out-link"
                onClick={(e) => {
                  if (cart.length === 0) {
                    e.preventDefault();
                  }
                }}
              >
                Check Out
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;

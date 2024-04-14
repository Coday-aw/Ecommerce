import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import "../css/CartItem.css";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/auth/myOrder");
    } else {
      navigate("/auth/login");
    }
  }, [token]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  const grandTotal = orders.reduce((acc, order) => {
    const orderTotal = order.products.reduce(
      (acc, product) => acc + product.quantity * product.product.price,
      0
    );
    return acc + orderTotal;
  }, 0);

  if (orders.length === 0) {
    return (
      <p className="text-center mt-20 font-bold text-3xl">
        You have no orders!
      </p>
    );
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-center mt-10 text-3xl">Order</h1>
        <p className="text-center mb-10 text-2xl">
          Thank you for your order, here is your order summary!
        </p>
        {orders.map((order) => (
          <div key={order._id}>
            {order.products.map((product) => (
              <div className="check-out-item" key={product.product._id}>
                <div className="item-details">
                  <img
                    src={product.product.images[0]}
                    alt={product.product.name}
                  />
                  <div>
                    <p className="item-name">{product.product.name}</p>
                    <p className="item-quantity">
                      {product.quantity} x {product.product.price}:-
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className=" font-bold">Grand Total: {grandTotal}:-</p>
    </>
  );
};

export default MyOrder;

import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import "../css/CartItem.css";
import { useDispatch } from "react-redux";
import {
  removeOne,
  removeItem,
  addToCart,
} from "../store/features/ShoppingCart/ShoppingCartSlice";

export const CartItem = ({ product }) => {
  const dispach = useDispatch();

  const handleRemove = () => {
    dispach(removeOne(product.product._id));
  };

  const addItem = () => {
    dispach(addToCart(product.product));
  };

  const deteleItem = () => {
    dispach(removeItem(product.product._id));
  };

  return (
    <div className="check-out-item">
      <div className="item-details">
        <img src={product.product.images[0]} alt="" />
        <div>
          <p className="item-name">{product.product.name}</p>
          <p className="item-quantity">
            {product.quantity} x {product.product.price}:-
          </p>
        </div>
      </div>
      <div className="check-out-right">
        <div>
          <button onClick={handleRemove} className="minus-btn">
            <FaMinus />
          </button>
          <button onClick={addItem} className="plus-btn">
            <FaPlus />
          </button>
        </div>
        <button onClick={deteleItem} className="remove-item">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default CartItem;

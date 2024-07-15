import { Link } from "react-router-dom";
import "../css/product.css";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/details/${product._id}`} className="product">
      <div>
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="mt-[10px] mb-[10px] flex flex-row justify-between text-xs font-semibold text-[#333] ">
        <p>{product.name}</p>
        <p>{product.price}:-</p>
      </div>
    </Link>
  );
};
export default ProductCard;

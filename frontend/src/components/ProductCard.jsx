import { Link } from "react-router-dom";
import "../css/product.css";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/details/${product._id}`} className="product">
      <div>
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}:-</p>
      </div>
    </Link>
  );
};
export default ProductCard;

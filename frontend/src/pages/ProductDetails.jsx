import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/ProductDetails.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/ShoppingCart/ShoppingCartSlice";

function ProductDetails() {
  const { productId } = useParams();

  const dispach = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/products/${productId}`);
        setProduct(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        setError("something went wrong");
        console.error(error.massage);
      }
    };
    getProduct();
  }, []);

  const handleClick = () => {
    dispach(addToCart(product));
  };

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {product && (
        <div className="product-details">
          <div className="product-details-left">
            <img src={product.images[activeImg]} alt={product.title} />
            <div className="images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  onClick={() => setActiveImg(index)}
                  src={image}
                  alt={product.title}
                />
              ))}
            </div>
          </div>
          <div className="product-details-right">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>{product.price}:-</h2>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;

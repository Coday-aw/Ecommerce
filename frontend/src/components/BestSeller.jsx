import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../css/product.css";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data.slice(0, 6));
      console.log(products);
    };
    getProducts();
  }, []);
  return (
    <div className="product-header">
      <h1>BestSeller</h1>
      <hr />
      <div className="product-conatiner">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;

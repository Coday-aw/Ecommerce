import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../css/product.css";
import Category from "./Category";

export const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <div className="product-header">
        <h1>Products</h1>
        <hr />
        <div className="mt-10 mb-6">
          <Category onCategoryChange={handleCategoryChange} />
        </div>
      </div>
      <div className="product-conatiner">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;

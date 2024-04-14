import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/features/products/productSlice";
import ProductList from "../components/ProductList";

function ProductPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  if (error)
    return (
      <div className="mt-10">
        <p>{error}</p>
      </div>
    );

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
export default ProductPage;

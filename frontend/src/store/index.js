import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import ShoppingCartSlice from "./features/ShoppingCart/ShoppingCartSlice";

export const store = configureStore({
  reducer: {
    productList: productSlice,
    ShoppingCart: ShoppingCartSlice,
  },
});

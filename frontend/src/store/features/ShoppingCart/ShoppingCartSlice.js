import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  orderPlaced: false,
};

const getTotalPrice = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.product.price * product.quantity;
  });
  return total;
};

const getTotalQuantity = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.quantity;
  });
  return total;
};

export const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    LOAD_SAVED_CART: (state, action) => {
      state.cart = action.payload;
      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalPrice(state.cart);
    },
    addToCart: (state, action) => {
      const itemRef = state.cart.find(
        (product) => product.product._id === action.payload._id
      );

      itemRef
        ? itemRef.quantity++
        : (state.cart = [
            ...state.cart,
            { product: action.payload, quantity: 1 },
          ]);
      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
    },
    removeOne: (state, action) => {
      const itemRef = state.cart.find(
        (product) => product.product._id === action.payload
      );

      itemRef.quantity <= 1
        ? (state.cart = state.cart.filter(
            (product) => product.product._id !== action.payload
          ))
        : itemRef.quantity--;

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.product._id !== action.payload
      );

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
    },
    clearCart: (state, action) => {
      state.cart = [];

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
      state.orderPlaced = true;
    },

    resetOrderPlaced: (state, action) => {
      state.orderPlaced = false;
    },
  },
});

export const {
  addToCart,
  removeOne,
  removeItem,
  clearCart,
  resetOrderPlaced,
  LOAD_SAVED_CART,
} = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;

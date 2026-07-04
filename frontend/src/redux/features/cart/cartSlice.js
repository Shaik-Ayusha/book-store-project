import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const normalizeCartItems = (items = []) =>
  items.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

const initialState = {
  cartItems: normalizeCartItems(JSON.parse(localStorage.getItem("cart") || "[]")),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);

      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added to the Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        existingItem.quantity += 1;
        Swal.fire({
          title: "Quantity Updated",
          text: "This item is already in your cart. Quantity increased.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
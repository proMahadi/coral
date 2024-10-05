import { createSlice } from "@reduxjs/toolkit";

const cartList =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartInitial: cartList,
  },
  reducers: {
    cartTotal: (state, action) => {
      const cartItemIndex = state.cartInitial.findIndex(
        (item) => item.id == action.payload.id
      );
      console.log(cartItemIndex);
      if (cartItemIndex >= 0) {
        state.cartInitial[cartItemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cartInitial.push(product);
      }
      localStorage.setItem("cartList", JSON.stringify(state.cartInitial));
    },
    removeCartItem: (state, action) => {
      const index = state.cartInitial.findIndex(
        (item) => item.id == action.payload
      );
      state.cartInitial.splice(index, 1);
      localStorage.setItem("cartList", JSON.stringify(state.cartInitial));
    },
    increaseCartQUantity: (state, action) => {
      const cartItemIndex = state.cartInitial.findIndex(
        (item) => item.id == action.payload
      );
      state.cartInitial[cartItemIndex].quantity += 1;
      localStorage.setItem("cartList", JSON.stringify(state.cartInitial));
    },
    decreaseCartQUantity: (state, action) => {
      const cartItemIndex = state.cartInitial.findIndex(
        (item) => item.id == action.payload
      );
      state.cartInitial[cartItemIndex].quantity -= 1;
      localStorage.setItem("cartList", JSON.stringify(state.cartInitial));
    },
  },
});
export const {
  cartTotal,
  removeCartItem,
  increaseCartQUantity,
  decreaseCartQUantity,
} = cartSlice.actions;

export default cartSlice.reducer;

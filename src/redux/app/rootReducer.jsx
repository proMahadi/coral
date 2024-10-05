import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import wishSlice from "../features/wishList/wishSlice";

const rootReducer = combineReducers({
  cartTotal: cartSlice,
  wishTotal: wishSlice,
});

export default rootReducer;

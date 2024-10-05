import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from './slices/cartSlice'
// import wishSlice from './slices/wishSlice'
import rootReducer from "./rootReducer";

export default configureStore({
  reducer: rootReducer,
  // {
  //   cartTotal: cartSlice
  // },
  // reducer: {
  //   wishTotal : wishSliceSlice
  // },
});

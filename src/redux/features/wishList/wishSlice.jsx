import { createSlice } from "@reduxjs/toolkit";
const wishList =
  localStorage.getItem("wishList") !== null
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];
// console.log(wishList);
export const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishInitial: wishList,
  },
  reducers: {
    wishTotal: (state, action) => {
      state.wishInitial.push(action.payload);
      localStorage.setItem("wishList", JSON.stringify(state.wishInitial));
    },
    removeWishTotal: (state, action) => {
      const index = state.wishInitial.findIndex(
        (item) => item.id == action.payload
      );
      // console.log(index)
      state.wishInitial.splice(index, 1);
      localStorage.setItem("wishList", JSON.stringify(state.wishInitial));
    },
  },
});
export const { wishTotal, removeWishTotal } = wishSlice.actions;

export default wishSlice.reducer;

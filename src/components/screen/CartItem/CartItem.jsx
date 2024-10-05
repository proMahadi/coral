import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  increaseCartQUantity,
  decreaseCartQUantity,
} from "../../../redux/features/cart/cartSlice";

const CartItem = ({ item }) => {
  console.log(item);
  const cartData = useSelector((state) => state.cartTotal.cartInitial);
  const dispatch = useDispatch();
  // const [addedToCart, setAddedToCart] = useState(
  //   cartData.some((cartItem) => cartItem.id === item.id)
  // );
  const handleIncrement = () => {
    dispatch(increaseCartQUantity(item.id));
  };
  const handleDecrement = () => {
    if (item.quantity > 0) {
      dispatch(decreaseCartQUantity(item.id));
    }
    if (item.quantity <= 1) {
      dispatch(removeCartItem(item.id));
    }
    // else if(item.quantity < 1){
    //   dispatch(removeCartItem(item.id))
    // }else{
    //   dispatch(removeCartItem(item.id));
    // }
  };

  const deleteCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  return (
    <div>
      <div className="border-2 border-primary/50 rounded-lg p-4 mt-3">
        <div className="flex sm:justify-between gap-x-7 items-center">
          <div>
            <img
              className="w-[100px] h-[100px] object-cover"
              src={item.image}
              alt="productImg"
            />
          </div>
          <div>
            <div className="w-auto sm:w-[256px]">
              <p className="font-robo text-primary sm:text-lg text-sm">
                {item.title}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4 mt-2">
                <p className="font-robo text-sm text-primary/50 sm:block hidden">
                  Quantity:{" "}
                </p>
                <div className="flex border-[1px] border-[#EAEAEA] rounded-full">
                  <button
                    onClick={handleDecrement}
                    className="py-2 px-2 bg-primary/20 rounded-l-full"
                  >
                    -
                  </button>
                  <p className="py-2 px-5 font-pops text-base text-[#3D3D3F] font-medium">
                    {item.quantity}
                  </p>
                  <button
                    onClick={handleIncrement}
                    className="py-2 px-2 bg-primary/20 rounded-r-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[85px]">
            <p className="font-robo text-primary text-lg font-semibold">
              $
              {Math.round(item.price > 0
                ? item.price * item.quantity
                : item.afterDiscountPrice * item.quantity)}
            </p>
          </div>
          <div>
            <button onClick={deleteCartItem}>
              <RxCross2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

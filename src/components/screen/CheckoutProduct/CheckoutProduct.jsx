import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../../redux/features/cart/cartSlice";

const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch();
  const deleteCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  return (
    <div>
      <div className="border-2 border-primary/50 rounded-lg p-2.5 sm:p-4 mt-3">
        <div className="flex justify-between gap-x-7 items-center">
          <div>
            <img
              className="w-[65px] h-[65px] sm:w-[100px] sm:h-[100px] object-cover"
              src={item.image}
              alt="productImg"
            />
          </div>
          <div className="w-auto sm:w-[256px]">
            <div className="flex item-center gap-x-3">
              <p className="font-robo text-primary sm:text-base text-xs ">
                {item.title}
              </p>

              <p className="h-[17px] w-[17px] sm:h-[20px] sm:w-[20px] text-white bg-red-500 flex justify-center items-center rounded-full font-robo">
                {item.quantity}
              </p>
            </div>
          </div>
          <div className="w-auto sm:w-[85px]">
            <p className="font-robo text-primary sm:text-lg font-semibold">
              $
              {item.price > 0
                ? item.price * item.quantity
                : item.afterDiscountPrice * item.quantity}
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

export default CheckoutProduct;

import React from "react";
import { IoIosCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBubble = () => {
  const data = useSelector((state) => state.cartTotal.cartInitial);
  const ammountOfProductAddedToCart = data.length;
  return (
    <>
      <Link to="/shop/product-details/cart">
        <div className="group">
          <div className="h-[65px] w-[65px] bg-bgColor group-hover:bg-pink flex items-center justify-center rounded-full fixed z-10 bottom-[60px] right-[30px] sm:right-[60px] shadow-2xl border-2 duration-200">
            <div>
              <IoIosCart className="text-2xl text-primary group-hover:text-white " />
              <div className="absolute top-[-1px] right-0">
                <p className="h-[25px] w-[25px] text-white bg-red-500 flex justify-center items-center rounded-full font-robo">
                  {ammountOfProductAddedToCart}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartBubble;

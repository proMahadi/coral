import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import SaleBadge from "./SaleBadge";
import HotBadge from "./HotBadge";
import ProductPrice from "./ProductPrice";
import DiscountPrice from "./DiscountPrice";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "../../redux/features/cart/cartSlice";
import {
  removeWishTotal,
  wishTotal,
} from "../../redux/features/wishList/wishSlice";

const Product = ({ product }) => {
  const wishData = useSelector((state) => state.wishTotal.wishInitial);
  const cartData = useSelector((state) => state.cartTotal.cartInitial);
  const quantity = cartData?.find((item) => item.id == product.id);

  const [addWish, setAddWish] = useState(
    wishData.some((item) => item.id === product.id)
  );

  const [shopHover, setShopHover] = useState(false);
  const handleCart = () =>{
    if (quantity?.quantity == undefined) {
      toast.success("Added To Cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Quantity Increased", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  const handleHover = () => {
    setShopHover(true);
  };
  const handleNotHover = () => {
    setShopHover(false);
  };
  const dispatch = useDispatch();
  const handleAddCart = () => {
    handleCart();
    dispatch(cartTotal(product));
  };
  const handleWish = () => {
    console.log("first");
    setAddWish(!addWish);
    if (addWish) {
      dispatch(removeWishTotal(product.id));
    } else {
      dispatch(wishTotal(product));
    }
  };
  return (
    <>
      <div className={`w-[312px] relative group `}>
        <div className="w-full">
          <Link to={`/shop/product-details/${product?.id}`}>
            <img src={product?.image} alt="productImg" />
          </Link>
          <div className="absolute top-[14px] right-[14px]">
            <FaHeart
              className={`text-xl fill-red-500 hover:cursor-pointer ${
                addWish ? "block" : "hidden"
              }`}
              onClick={handleWish}
            />
          </div>
          <div className="bg-primary py-4 px-9 sm:p-4 absolute opacity-0 group-hover:opacity-100 duration-300 bottom-[80px] w-full">
            <div className="flex justify-between">
              <div className="flex gap-x-5 items-center">
                <div className="hover:cursor-pointer" onClick={handleWish}>
                  {addWish ? (
                    <FaHeart className="fill-red-500 text-xl " />
                  ) : (
                    <FaRegHeart className="text-white text-xl" />
                  )}
                </div>
                <Link>
                  <IoIosSearch className="text-white text-xl hover:cursor-pointer" />
                </Link>
              </div>
              <div onClick={handleAddCart}>
                <button>
                  <div
                    className="flex gap-x-2 items-center hover:cursor-pointer"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleNotHover}
                  >
                    <FaBagShopping
                      className={`text-2xl duration-300 ${
                        shopHover ? "text-pink" : "text-white"
                      }`}
                    />
                    <p
                      className={`font-robo text-lg capitalize duration-300 ${
                        shopHover ? "text-pink" : "text-white"
                      }`}
                    >
                      {" "}
                      shop now
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div>
            {product?.sale == true ? <SaleBadge /> : ""}
            {product?.hot == true ? <HotBadge /> : ""}
          </div>
        </div>
        <div className="mx-7 sm:mx-[10px]">
          <div className="my-4">
            <h4 className="text-black text-base font-semibold capitalize font-sans">
              {product?.title}
            </h4>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-black/50 font-sans text-base capitalize">
                {product?.catagory}
              </p>
            </div>
            <div>
              <div>
                {product?.price > 0 ? (
                  <ProductPrice initialPrice={`$${product?.price}`} />
                ) : (
                  ""
                )}
              </div>
              <div className="opacity-0	group-hover:opacity-100 duration-300 hidden group-hover:block">
                {product?.afterDiscountPrice > 0 ? (
                  <ProductPrice
                    afterDiscountPrice={`$${product?.afterDiscountPrice}`}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="opacity-100	group-hover:opacity-0 duration-300  block group-hover:hidden">
                {product?.beforeDiscountPrice > 0 || product?.offerPrice > 0 ? (
                  <DiscountPrice
                    beforeDiscountPrice={`$${product?.beforeDiscountPrice}`}
                    offerPrice={`$${product?.offerPrice}`}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

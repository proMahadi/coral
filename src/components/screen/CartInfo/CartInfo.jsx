import React, { useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import PageTitle from "../../../lib/layoutItems/PageTitle";
import CartItem from "../../screen/CartItem/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBagShopping } from "react-icons/fa6";
import emptyCartImg from "../../../assets/images/cartImg/emptyCartImg.png";

const CartInfo = () => {
  const data = useSelector((state) => state.cartTotal.cartInitial);
  console.log(data);
  const totalPrice = data.reduce((accumulator, current) => {
    return accumulator + current.price * current.quantity;
  }, 0);
  // console.log(totalPrice);
  return (
    <div>
      <div className="bg-bgColor">
        <div className="lg:px-10 px-5 py-10 ">
          <Container>
            <PageTitle title="Cart" root="Home" path="Cart" />
          </Container>
        </div>
      </div>
      <div>
        <Container className="lg:py-14 py-10 ">
          <div className={`${data == "" ? "block" : " hidden"}`}>
            <img
              src={emptyCartImg}
              alt="empty list image"
              className="mx-auto"
            />
            <div className="text-center my-7">
              <h4 className="capitalize text-primary font-bold text-2xl">
                your cart is empty !
              </h4>
            </div>
            <div>
              <Link to="/shop">
                <button className="mx-auto py-5 px-7 bg-primary hover:bg-pink duration-300 text-white font-robo text-3xl flex items-center">
                  <FaBagShopping className="inline-block mr-2 text-2xl " />
                  <p>Shop Now</p>
                </button>
              </Link>
            </div>
          </div>
          <div>
            {data.map((item, id) => (
              <CartItem key={id} item={item} />
            ))}
          </div>
          <div
            className={`flex justify-center lg:justify-end items-center gap-x-4 mt-3 lg:mr-[184px] ${
              data == "" ? "hidden" : "block"
            }`}
          >
            <div className="border-2 border-primary/50 rounded-lg p-4  flex gap-x-14 w-fit">
              <div>
                <p className="font-robo text-base text-primary/50 capitalize">
                  total
                </p>
              </div>
              <div>
                <p className="font-robo text-base text-primary capitalize font-semibold">
                  ${totalPrice}
                </p>
              </div>
            </div>
            <div>
              <Link to="/checkout">
                <button className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize">
                  checkout
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartInfo;

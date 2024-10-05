import React, { useEffect, useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import PageTitle from "../../../lib/layoutItems/PageTitle";
import WishCard from "../../../lib/layoutItems/WishCard";
import { useSelector } from "react-redux";
import emptyWishList from "../../../assets/images/wishListimg/emptyWishList.png";
import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
// import { ProductData } from '../../../data/ProductData/ProductData';

const WishList = () => {
  const data = useSelector((state) => state.wishTotal.wishInitial);
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   setData(ProductData)
  // }, [])
  return (
    <div>
      <div className="bg-bgColor">
        <div className="lg:px-10 px-5 py-10 ">
          <Container>
            <PageTitle title="wishlist" root="Home" path="Wishlist" />
          </Container>
        </div>
      </div>
      <div>
        <Container className="lg:py-14 py-10 ">
          <div className={`${data == "" ? "block" : " hidden"}`}>
            <img
              src={emptyWishList}
              alt="empty list image"
              className="mx-auto"
            />
            <div className="text-center my-7">
              <h4 className="capitalize text-primary font-bold text-2xl">
                your wishlist is empty !
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
          <div className="flex flex-wrap justify-around gap-x-6 gap-y-6">
            {data.map((item) => (
              <WishCard product={item} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WishList;

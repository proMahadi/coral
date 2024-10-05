import React, { useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import { IoIosSearch } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import logo from "../../../assets/images/navbarImages/logo.png";
import { Link } from "react-router-dom";
import CartBubble from "../../../lib/layoutItems/CartBubble";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const data = useSelector((state) => state.wishTotal.wishInitial);
  const ammountOfProductAddedToWishList = data.length;
  const handleAccount = () => {
    setShowAccount(!showAccount);
  };
  const handleSearch = () => {
    console.log("okk nice");
    setShowSearch(!showSearch);
  };
  return (
    <div className="bg-bgColor relative">
      <Container className="pt-[30px] pb-6 px-2 xl:px-0 border-b-[1px] border-[#E3E3E3]">
        <div className="flex justify-between items-center">
          <div>
            <IoIosSearch
              onClick={handleSearch}
              className="text-2xl text-primary hover:cursor-pointer"
            />
          </div>
          <div className="xl:ml-[180px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex gap-x-[22px] ">
            <div className="relative">
              <div
                onClick={handleAccount}
                className="flex gap-x-2 items-center group hover:cursor-pointer"
              >
                <div>
                  <BsFillPersonFill className="text-2xl text-primary group-hover:text-pink" />
                </div>
                <div className="font-robo text-primary text-lg group-hover:text-pink hidden sm:block">
                  <p>Account</p>
                </div>
              </div>
              {showAccount && (
                <div
                  className={`absolute h-fit p-2 rounded-lg w-[250px]  bg-white top-[31px] left-[-213px] z-10 shadow`}
                >
                  <Link to="/login">
                    <div className="flex gap-x-4 p-1 rounded-lg  hover:bg-bgColor duration-300 ">
                      <div>
                        <BsFillPersonFill className="text-2xl text-primary " />
                      </div>
                      <div className="font-robo text-primary text-lg ">
                        <p>Account</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/my-order">
                    <div className="flex gap-x-4 p-1 rounded-lg  hover:bg-bgColor duration-300 ">
                      <div>
                        <CiViewList className="text-2xl text-primary " />
                      </div>
                      <div className="font-robo text-primary text-lg ">
                        <p>My Order</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/wishlist">
                    <div className="flex gap-x-4 p-1 rounded-lg  hover:bg-bgColor duration-300 ">
                      <div>
                        <FaRegHeart className="text-2xl text-primary " />
                      </div>
                      <div className="font-robo text-primary text-lg flex items-center gap-x-3 ">
                        <p>Wishlist</p>
                        <p className="h-[20px] w-[20px] text-white bg-red-500 flex justify-center items-center rounded-full font-robo">
                          {ammountOfProductAddedToWishList}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="flex gap-x-4 p-1 rounded-lg  hover:bg-bgColor duration-300 ">
                      <div>
                        <CiLogout className="text-2xl text-primary " />
                      </div>
                      <div className="font-robo text-primary text-lg ">
                        <p>Log Out</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/shop">
              <div className="flex gap-x-2 items-center group hover:cursor-pointer">
                <div>
                  <FaBagShopping className="text-2xl text-primary group-hover:text-pink" />
                </div>
                <div className="font-robo text-primary text-lg group-hover:text-pink hidden sm:block">
                  <p>Shoping</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <div
        className={`bg-bgColor border-2 border-[#E3E3E3] p-10 h-screen sm:w-[400px] fixed z-50 duration-300 ${
          showSearch ? "top-0 left-0" : "top-0 left-[-400px]"
        }`}
      >
        <div className="relative flex items-center gap-x-3 mb-10 ">
          <input
            type="text"
            className="w-full py-2 px-2 rounded-xl border-2 border-[#E3E3E3] outline-none"
            placeholder="Search Products"
          />
          <IoMdCloseCircle
            className="text-2xl hover:cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>
        <div className="border-t-[1px] border-[#E3E3E3] mb-10"></div>
        <div>
          <p className="text-center font-robo text-primary text-lg ">
            No products found !
          </p>
        </div>
      </div>
      <div>
        <CartBubble />
      </div>
    </div>
  );
};

export default Navbar;

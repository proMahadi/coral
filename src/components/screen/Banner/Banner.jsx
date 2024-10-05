import React from "react";
import Container from "../../../lib/layoutItems/Container";
import { FaBagShopping } from "react-icons/fa6";
import bannerImg from "../../../assets/images/bannerImages/bannerImg.png";
import bannerVectorLeft from "../../../assets/images/bannerImages/bannerVectorLeft.png";
import bannerVectorRight from "../../../assets/images/bannerImages/bannerVectorRight.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-bgColor relative">
      <Container className="pt-20 pb-[30px] px-3 xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row justify-around lg:gap-x-24 items-center">
          <div className="text-center lg:text-left">
            <div>
              <h1 className="text-black font-robo text-2xl sm:text-4xl xl:text-7xl font-light mt-5 lg:mt-0">
                Collections
              </h1>
            </div>
            <div>
              <p className="text-black font-robo  text-lg sm:text-2xl xl:text-3xl capitalize mt-5 mb-7 xl:mt-[52px] xl:mb-16 xl:w-[682px]">
                you can explore ans shop many differnt collection from various
                barands here.
              </p>
            </div>
            <div className="flex justify-center lg:justify-normal ">
              <Link to="/shop">
                <button className=" py-5 px-7 bg-primary hover:bg-pink duration-300 text-white font-robo text-3xl flex items-center">
                  <FaBagShopping className="inline-block mr-2 text-2xl " />
                  <p>Shop Now</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[200px] sm:w-[300px] lg:w-full">
            <img src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </Container>
      <div className="absolute top-[275px] xl:top-[470px] left-0 w-[100px] sm:w-[150px] xl:w-auto ">
        <img src={bannerVectorLeft} alt="bannerVector" />
      </div>
      <div className="absolute top-[221px] right-0 w-[100px] sm:w-[150px] xl:w-auto">
        <img src={bannerVectorRight} alt="bannerVector" />
      </div>
    </div>
  );
};

export default Banner;

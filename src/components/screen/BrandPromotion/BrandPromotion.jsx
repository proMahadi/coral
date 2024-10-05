import React from "react";
import BrandPromotionBg from "../../../assets/images/brandPromotionImage/BrandPromotionBg.png";
import { Link } from "react-router-dom";

const BrandPromotion = () => {
  return (
    <div className="max-w-container2 mx-auto">
      <div className="relative ">
        <div>
          <img src={BrandPromotionBg} alt="BrandPromotion" />
        </div>
        <div className="absolute bottom-[5%] lg:bottom-[11%] right-[20%] md:right-[25%] lg:right-[31%]">
          <div>
            <Link to="/shop">
              <button className="py-2 px-5 xl:py-5 xl:px-7 bg-white hover:bg-pink duration-300 text-primary font-robo text-xs md:text-sm xl:text-3xl capitalize hover:text-white">
                see collection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPromotion;

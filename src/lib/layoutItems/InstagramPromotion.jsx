import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

const InstagramPromotion = ({ imgsrc }) => {
  return (
    <div className="w-[200px] relative group ">
      <div className="w-full">
        <img src={imgsrc} alt="InstagramImg" />
      </div>
      <Link to="#">
        <div className="w-full bg-black/50 h-full absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
          <SlSocialInstagram className="text-white text-5xl" />
        </div>
      </Link>
    </div>
  );
};

export default InstagramPromotion;

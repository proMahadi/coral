import React from "react";

const ExploreItem = ({ imgsrc, catagory, quantity, className, badge }) => {
  return (
    <div className={`w-[312px] relative group mt-4 xl:mt-0 ${className}`}>
      <div>
        <img src={imgsrc} alt="exploreProductImg" />
      </div>
      <div>{badge}</div>
      <div className="bg-primary p-4 absolute opacity-0 group-hover:opacity-100 duration-300 bottom-0 w-full">
        <div className="flex justify-between">
          <div>
            <p className="font-sans text-base text-white capitalize font-semibold">
              {catagory}
            </p>
          </div>
          <div>
            <p className="font-sans text-base text-white capitalize font-semibold">
              {quantity} product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreItem;

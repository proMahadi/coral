import React from "react";

const DiscountPrice = ({ beforeDiscountPrice, offerPrice }) => {
  return (
    <div className="flex items-center gap-x-3">
      <p className="text-black/50 font-sans text-sm font-semibold">
        <del>{beforeDiscountPrice}</del>
      </p>
      <p className="text-pink font-sans text-base font-semibold capitalize">
        {offerPrice}
      </p>
    </div>
  );
};

export default DiscountPrice;

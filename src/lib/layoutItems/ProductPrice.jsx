import React from "react";

const ProductPrice = ({ initialPrice, afterDiscountPrice }) => {
  return (
    <div>
      <p className="text-black font-sans font-semibold capitalize">
        {initialPrice}
        {afterDiscountPrice}
      </p>
    </div>
  );
};

export default ProductPrice;

import React from "react";
import Container from "../../../lib/layoutItems/Container";
import brand1 from "../../../assets/images/brandsImages/brand1.png";
import brand2 from "../../../assets/images/brandsImages/brand2.png";
import brand3 from "../../../assets/images/brandsImages/brand3.png";
import brand4 from "../../../assets/images/brandsImages/brand4.png";
import brand5 from "../../../assets/images/brandsImages/brand5.png";

const Brands = () => {
  return (
    <div className="bg-white">
      <Container className="py-6 lg:py-[90px]">
        <div className="flex justify-between">
          <div>
            <img src={brand1} alt="brand" />
          </div>
          <div>
            <img src={brand2} alt="brand" />
          </div>
          <div>
            <img src={brand3} alt="brand" />
          </div>
          <div>
            <img src={brand4} alt="brand" />
          </div>
          <div>
            <img src={brand5} alt="brand" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;

import React from "react";
import Container from "../../../lib/layoutItems/Container";
import paymentMethods from "../../../assets/images/copyRightImages/paymentMethods.png";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopSvg from "../../../lib/layoutItems/ScrollToTopSvg";

const CopyRight = () => {
  return (
    <div className="bg-primary">
      <Container className="py-[10px]">
        <div className="flex justify-between">
          <div>
            <p className="text-white font-sans text-base capitalize">
              © 2022 Coral , Inc.
            </p>
          </div>
          <div className="hidden sm:block">
            <img src={paymentMethods} alt="pay" />
          </div>
          <div>
            <ScrollToTop
              smooth
              color="#6f00ff"
              className="mr-[110px] xl:mr-0"
              component={<ScrollToTopSvg />}
              style={{
                position: "static",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CopyRight;

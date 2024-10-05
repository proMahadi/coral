import React from "react";
import Container from "../../../lib/layoutItems/Container";
import exploreProductImg1 from "../../../assets/images/explorePartImages/exploreProductImg1.png";
import exploreProductImg2 from "../../../assets/images/explorePartImages/exploreProductImg2.png";
import exploreProductImg3 from "../../../assets/images/explorePartImages/exploreProductImg3.png";
import exploreProductImg4 from "../../../assets/images/explorePartImages/exploreProductImg4.png";
import exploreProductImg5 from "../../../assets/images/explorePartImages/exploreProductImg5.png";
import ExploreItem from "../../../lib/layoutItems/ExploreItem";
import SaleBadge from "../../../lib/layoutItems/SaleBadge";
import { Link } from "react-router-dom";

const ExploreProduct = () => {
  return (
    <div className="bg-white">
      <Container className="pb-[140px]">
        <div className="flex flex-wrap justify-around gap-x-6">
          <Link to="/shop">
            <div className="lg:w-[648px] relative group">
              <h2 className="md:-rotate-90 static text-center  mb-4 md:absolute top-[304px] left-[-312px] text-black font-robo text-[41px]">
                Explore new and popular styles
              </h2>
              <div className="w-full">
                <img src={exploreProductImg1} alt="exploreProductImg" />
              </div>
              <div className="bg-primary p-4 absolute opacity-0 group-hover:opacity-100 duration-300 bottom-0 w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="font-sans text-base text-white capitalize font-semibold">
                      jacket
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-base text-white capitalize font-semibold">
                      103 product
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="">
            <div className="flex flex-wrap  gap-x-2  justify-around md:gap-x-6">
              <Link to="/shop">
                <ExploreItem
                  imgsrc={exploreProductImg2}
                  catagory="jacket"
                  quantity="103"
                />
              </Link>
              <Link to="/shop">
                <ExploreItem
                  imgsrc={exploreProductImg3}
                  catagory="jacket"
                  quantity="103"
                  badge={<SaleBadge />}
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-2  justify-around md:gap-x-6 mt-4 md:mt-6">
              <Link to="/shop">
                <ExploreItem
                  imgsrc={exploreProductImg4}
                  catagory="jacket"
                  quantity="103"
                />
              </Link>
              <Link to="/shop">
                <ExploreItem
                  imgsrc={exploreProductImg5}
                  catagory="jacket"
                  quantity="103"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExploreProduct;

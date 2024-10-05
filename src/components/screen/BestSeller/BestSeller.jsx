import React, { useEffect, useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import SectionHeading from "../../../lib/layoutItems/SectionHeading";
import Catagory from "../../../lib/layoutItems/Catagory";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import Product from "../../../lib/layoutItems/Product";
import { ProductData } from '../../../data/ProductData/ProductData'
import List from "../../../lib/layoutItems/List";
import ListItem from "../../../lib/layoutItems/ListItem";

const BestSeller = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [allProductActive, setAllProductActive] = useState(true);
  useEffect(() => {
    setData(ProductData);
    setCollection([
      "all product",
      ...new Set(ProductData.map((item) => item.catagory)),
    ]);
  }, []);
  const productFilter = (productCatagory) => {
    console.log(productCatagory);
    if (productCatagory == "all product") {
      setData(ProductData);
      return;
    }
    const catagoryFilterData = ProductData.filter(
      (item) => item.catagory == productCatagory
    );
    console.log(catagoryFilterData);
    setData(catagoryFilterData);
    console.log(data);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          position: "absolute",
          top: "35%",
          right: "21px",
          background: "transparent",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <FaAngleRight className="text-4xl text-primary/25 hover:cursor-pointer" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          position: "absolute",
          top: "35%",
          left: "0px",
          background: "transparent",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
        onClick={onClick}
      >
        <FaAngleLeft className="text-4xl text-primary/25 hover:cursor-pointer" />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          margin: 10,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Container className="py-[140px]">
        <div>
          <SectionHeading title="Best sellers" className="text-center" />
        </div>
        <div className="flex flex-wrap justify-between items-center my-9">
          {/* <Catagory /> */}
          <div
          // product items filter div
          >
            <List className="flex gap-x-4 md:gap-x-10">
              {/* <ListItem
                onClick={() => setData(ProductData)}
                className="text-black text-sm md:text-base font-sans font-semibold capitalize hover:cursor-pointer"
                itemName="all products"
              /> */}
              {collection.map((item) => (
                <ListItem
                  key={item}
                  onClick={() => {
                    productFilter(item);
                    setAllProductActive(item == "all product");
                  }}
                  className="text-black/50 text-sm md:text-base font-sans font-semibold capitalize hover:text-pink duration-300 hover:cursor-pointer"
                  itemName={item}
                />
              ))}
            </List>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="text-white bg-primary py-1.5 px-4 text-base font-sans font-semibold capitalize hover:bg-pink duration-300">
              show all
            </button>
          </div>
        </div>

        <div className="px-9 lg:px-5 xl:px-0">
          {allProductActive ? (
            <Slider {...settings}>
              {data.map((item, key) => {
                console.log(item);
                return <Product key={item.id} product={item} />;
              })}
            </Slider>
          ) : (
            <div className="flex flex-wrap gap-6 justify-center">
              {data.map((item, key) => {
                console.log(item);
                return <Product key={item.id} product={item} />;
              })}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;

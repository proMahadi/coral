import React from "react";
import Container from "../../../lib/layoutItems/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Catagoryslider = () => {
  // slider functions start
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          top: "5px",
          right: "0px",
          position: "absolute",
        }}
        onClick={onClick}
      >
        <FaAngleRight className="text-base text-[#999999] block xl:hidden" />
      </div>
    );
  }
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // slider functions end

  return (
    <div className="bg-bgColor">
      <Container className="pt-[30px] px-2 lg:px-0">
        <div className="text-center">
          <Slider {...settings}>
            {/* <List>
                            <ListItem className='text-black font-sans text-base hover:text-pink' itemName='Jewelry & Accessories'/>
                            <ListItem className='text-black font-sans text-base hover:text-pink' itemName='Jewelry & Accessories'/>
                            <ListItem className='text-black font-sans text-base hover:text-pink' itemName='Jewelry & Accessories'/>
                            <ListItem className='text-black font-sans text-base hover:text-pink' itemName='Jewelry & Accessories'/>
                            <ListItem className='text-black font-sans text-base hover:text-pink' itemName='Jewelry & Accessories'/>
                            <ListItem className='text-black font-sans text-base hover:text-pink' itemName='Jewelry & Accessories'/>
                            <ListItem className='text-black font-sans text-base hover:text-pink' itemName='Jewelry & Accessories'/>
                        </List> */}
            <div>
              <Link to="#">
                <span className="text-black font-sans text-base hover:text-pink">
                  Jewelry & Accessories
                </span>
              </Link>
            </div>
            <div>
              <Link to="#">
                <span className="text-black font-sans text-base hover:text-pink">
                  Clothing & Shoes
                </span>
              </Link>
            </div>
            <div>
              <Link to="#">
                <span className="text-black font-sans text-base hover:text-pink">
                  Home & Living
                </span>
              </Link>
            </div>
            <div>
              <Link to="#">
                <span className="text-black font-sans text-base hover:text-pink">
                  Wedding & Party
                </span>
              </Link>
            </div>
            <div>
              <Link to="#">
                <span className="text-black font-sans text-base hover:text-pink">
                  Toys & Entertainment
                </span>
              </Link>
            </div>
            <div>
              <Link to="#">
                <span className="text-black font-sans text-base hover:text-pink">
                  Art & Collectibles
                </span>
              </Link>
            </div>
            <div>
              <Link to="#">
                <span className="text-black font-sans text-base hover:text-pink">
                  Craft Supplies & Tools
                </span>
              </Link>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Catagoryslider;

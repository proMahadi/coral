import React, { useEffect, useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import PageTitle from "../../../lib/layoutItems/PageTitle";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import reviewImg from "../../../assets/images/reviewImages/reviewImg.jpg";
import { Link, useParams } from "react-router-dom";
import { ProductData } from '../../../data/ProductData/ProductData'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cartTotal,
  decreaseCartQUantity,
  increaseCartQUantity,
  removeCartItem,
} from "../../../redux/features/cart/cartSlice";
import {
  removeWishTotal,
  wishTotal,
} from "../../../redux/features/wishList/wishSlice";

const ProductInfo = () => {
  const params = useParams();
  const id = params.id;
  // console.log(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    const preData = ProductData.find((item) => item.id == id);
    setData(preData);
  }, []);

  // const exactProductIndex = id - 1
  // const productInfo = data[exactProductIndex]
  // console.log(productInfo);

  const [sizeConfig_S, setSizeConfig_S] = useState(false);
  const [sizeConfig_M, setSizeConfig_M] = useState(false);
  const [sizeConfig_L, setSizeConfig_L] = useState(false);
  const [sizeConfig_X, setSizeConfig_X] = useState(false);
  const [sizeConfig_XL, setSizeConfig_XL] = useState(false);
  const [sizeConfig_XXL, setSizeConfig_XXL] = useState(false);
  //   const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(true);
  const [showQuality, setShowQuality] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [addReview, setAddReview] = useState(false);

  const cartData = useSelector((state) => state.cartTotal.cartInitial);
  const quantity = cartData?.find((item) => item.id == id);
  // console.log(quantity.quantity)
  const wishData = useSelector((state) => state.wishTotal.wishInitial);
  const [addWish, setAddWish] = useState(
    wishData.some((item) => item.id === data.id)
  );

  const dispatch = useDispatch();

  const handleCart = () => {
    if (quantity?.quantity == undefined) {
      toast.success("Added To Cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Quantity Increased", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleAddReview = () => {
    setAddReview(true);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handleClick = () => {
    if (!email) {
      setEmailErr("Enter Your Email !");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr(["Email is invalid"]);
    }
  };
  const handleDescription = () => {
    setShowDescription(!showDescription);
  };
  const handleQuality = () => {
    setShowQuality(!showQuality);
  };

  const handleIncrement = () => {
    cartData.map((item) => dispatch(increaseCartQUantity(item.id)));
  };
  const handleDecrement = () => {
    cartData.map((item) => {
      if (item.quantity > 0) {
        dispatch(decreaseCartQUantity(item.id));
      }
      if (item.quantity <= 1) {
        dispatch(removeCartItem(item.id));
      }
    });
    // if (quantity > 1) {
    //     setQuantity(quantity - 1)
    // }
  };
  const handleSizeConfig_S = () => {
    setSizeConfig_S(!sizeConfig_S);
    setSizeConfig_M(false);
    setSizeConfig_L(false);
    setSizeConfig_X(false);
    setSizeConfig_XL(false);
    setSizeConfig_XXL(false);
  };
  const handleSizeConfig_M = () => {
    setSizeConfig_S(false);
    setSizeConfig_M(!sizeConfig_M);
    setSizeConfig_L(false);
    setSizeConfig_X(false);
    setSizeConfig_XL(false);
    setSizeConfig_XXL(false);
  };
  const handleSizeConfig_L = () => {
    setSizeConfig_S(false);
    setSizeConfig_M(false);
    setSizeConfig_L(!sizeConfig_L);
    setSizeConfig_X(false);
    setSizeConfig_XL(false);
    setSizeConfig_XXL(false);
  };
  const handleSizeConfig_X = () => {
    setSizeConfig_S(false);
    setSizeConfig_M(false);
    setSizeConfig_L(false);
    setSizeConfig_X(!sizeConfig_X);
    setSizeConfig_XL(false);
    setSizeConfig_XXL(false);
  };
  const handleSizeConfig_XL = () => {
    setSizeConfig_S(false);
    setSizeConfig_M(false);
    setSizeConfig_L(false);
    setSizeConfig_X(false);
    setSizeConfig_XL(!sizeConfig_XL);
    setSizeConfig_XXL(false);
  };
  const handleSizeConfig_XXL = () => {
    setSizeConfig_S(false);
    setSizeConfig_M(false);
    setSizeConfig_L(false);
    setSizeConfig_X(false);
    setSizeConfig_XL(false);
    setSizeConfig_XXL(!sizeConfig_XXL);
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          position: "absolute",
          top: "50%",
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
          top: "50%",
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleAddCart = () => {
    // console.log('ok');
    dispatch(cartTotal(data));
  };
  const handleAddWishlist = () => {
    console.log("first");
    setAddWish(!addWish);
    if (addWish) {
      dispatch(removeWishTotal(data.id));
    } else {
      dispatch(wishTotal(data));
    }
  };
  return (
    <div>
      <div>
        <div className="lg:px-10 px-5 py-10 bg-bgColor">
          <Container>
            <PageTitle
              title="Product Details"
              root="Home"
              path="Product Details"
            />
          </Container>
        </div>
        <div>
          <Container className="lg:py-14 py-10 ">
            <div>
              <div className="lg:flex items-center  gap-x-8 xl:gap-x-12 ">
                <div className="mb-10 lg:mb-0">
                  <Slider
                    {...settings}
                    className="lg:w-[519px] mx-auto lg:mx-0 sm:w-[424px] w-[300px]"
                  >
                    <div>
                      <img
                        className="lg:w-[519px] lg:h-[519px] sm:w-[424px] sm:h-[424px] w-[400px] h-[400px] object-cover "
                        src={data?.image}
                        alt="productImg"
                      />
                    </div>
                    <div>
                      <img
                        className="lg:w-[519px] lg:h-[519px] sm:w-[424px] sm:h-[424px] w-[400px] h-[400px] object-cover "
                        src={data?.image}
                        alt="productImg"
                      />
                    </div>
                  </Slider>
                </div>
                <div>
                  <div>
                    <h3 className="text-black font-robo text-3xl font-medium capitalize">
                      {data.title}
                    </h3>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-x-1 mt-6">
                      <p className="text-primary font-robo font-medium text-lg">
                        4.0
                      </p>
                      <div className="flex">
                        <IoStar className="text-[#FAC96B] text-2xl" />
                        <IoStar className="text-[#FAC96B] text-2xl" />
                        <IoStar className="text-[#FAC96B] text-2xl" />
                        <IoStar className="text-[#FAC96B] text-2xl" />
                        <IoStar className="text-[#D3D3D3] text-2xl" />
                      </div>
                      <p className="text-primary/50 font-pops font-medium text-lg">
                        (223)
                      </p>
                    </div>
                    <div className="flex items-center mt-9">
                      <p className="font-robo font-semibold text-primary text-4xl">
                        ${data.price > 0 ? data.price : data.afterDiscountPrice}
                      </p>
                      <p
                        className={`text-pink text-xl font-sans ml-6 ${
                          data.beforeDiscountPrice > 0 ? "block" : "hidden"
                        }`}
                      >
                        <del>
                          $
                          {data.beforeDiscountPrice > 0
                            ? data.beforeDiscountPrice
                            : ""}
                        </del>
                      </p>
                      <span
                        className={`py-1 px-[10px] bg-primary text-white font-pops text-sm rounded-sm font-semibold leading-7 ml-4 ${
                          data.sale == true ? "block" : "hidden"
                        }`}
                      >
                        Sale
                      </span>
                      <span
                        className={`py-1 px-[10px] bg-pink text-white font-pops text-sm rounded-sm font-semibold leading-7 ml-4 ${
                          data.hot == true ? "block" : "hidden"
                        }`}
                      >
                        Hot
                      </span>
                    </div>
                    <div className="mt-8">
                      <p className="text-secondary font-robo text-lg mb-3 ">
                        Size:
                      </p>
                      <div className="flex lg:flex-wrap items-center gap-x-3 gap-y-3 md:gap-x-4 ">
                        <div>
                          <button
                            onClick={handleSizeConfig_S}
                            className={`py-1 px-3 lg:py-3 lg:px-6 border-[1px] rounded-lg border-[#EAEAEA] font-robo text-sm ${
                              sizeConfig_S
                                ? "text-white  bg-pink"
                                : "text-primary/50 bg-white"
                            } `}
                          >
                            S
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handleSizeConfig_M}
                            className={`py-1 px-3 lg:py-3 lg:px-6 border-[1px] rounded-lg border-[#EAEAEA] font-robo text-sm ${
                              sizeConfig_M
                                ? "text-white  bg-pink"
                                : "text-primary/50 bg-white"
                            } `}
                          >
                            M
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handleSizeConfig_L}
                            className={`py-1 px-3 lg:py-3 lg:px-6 border-[1px] rounded-lg border-[#EAEAEA] font-robo text-sm ${
                              sizeConfig_L
                                ? "text-white  bg-pink"
                                : "text-primary/50 bg-white"
                            } `}
                          >
                            L
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handleSizeConfig_X}
                            className={`py-1 px-3 lg:py-3 lg:px-6 border-[1px] rounded-lg border-[#EAEAEA] font-robo text-sm ${
                              sizeConfig_X
                                ? "text-white  bg-pink"
                                : "text-primary/50 bg-white"
                            } `}
                          >
                            X
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handleSizeConfig_XL}
                            className={`py-1 px-3 lg:py-3 lg:px-6 border-[1px] rounded-lg border-[#EAEAEA] font-robo text-sm ${
                              sizeConfig_XL
                                ? "text-white  bg-pink"
                                : "text-primary/50 bg-white"
                            } `}
                          >
                            XL
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handleSizeConfig_XXL}
                            className={`py-1 px-3 lg:py-3 lg:px-6 border-[1px] rounded-lg border-[#EAEAEA] font-robo text-sm ${
                              sizeConfig_XXL
                                ? "text-white  bg-pink"
                                : "text-primary/50 bg-white"
                            } `}
                          >
                            XXL
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-6 gap-y-3">
                    <div
                      className={`flex items-center gap-x-4  mt-8 ${
                        cartData == "" ? "hidden" : "block"
                      }`}
                    >
                      <p className="font-robo text-sm text-primary/50">
                        Quantity:{" "}
                      </p>
                      <div className="flex border-[1px] border-[#EAEAEA] rounded-full">
                        <button
                          onClick={handleDecrement}
                          className="py-[10px] px-3 bg-primary/20 rounded-l-full"
                        >
                          -
                        </button>
                        <p className="py-[10px] px-7 font-pops text-base text-[#3D3D3F] font-medium">
                          {quantity?.quantity ? quantity.quantity : 1}
                        </p>
                        <button
                          onClick={handleIncrement}
                          className="py-[10px] px-3 bg-primary/20 rounded-r-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div onClick={handleAddCart} className="mt-8">
                      <button
                        onClick={handleCart}
                        className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
                      >
                        add to cart
                      </button>
                      <ToastContainer style={{ width: "345px" }} />
                    </div>
                    <div onClick={handleAddWishlist} className={`mt-8`}>
                      <button
                        className={`text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize ${
                          wishData == "" ? "block" : "hidden"
                        }`}
                      >
                        add to wishlist
                      </button>
                      <button
                        className={`text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 hover:bg-primary bg-pink duration-300 rounded-full text-white capitalize ${
                          wishData == "" ? "hidden" : "block"
                        }`}
                      >
                        added to wishlist
                      </button>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-primary/20 my-8"></div>
                  <div className="md:w-[450px] xl:w-[549px]">
                    <div
                      onClick={handleDescription}
                      className="flex items-center justify-between px-4 py-2 rounded-lg border-[1px] border-primary/20 "
                    >
                      <p className="font-medium text-lg font-robo capitalize">
                        Description
                      </p>
                      {showDescription ? (
                        <p className="font-medium text-lg font-robo">-</p>
                      ) : (
                        <p className="font-medium text-lg font-robo">+</p>
                      )}
                    </div>
                    <div>
                      {showDescription && (
                        <p className="text-base  font-robo px-4 py-2 border-[1px] rounded-lg border-primary/20 mt-3">
                          Fashion is a form of self-expression and autonomy at a
                          particular period and place and in a specific context,
                          of clothing, footwear, lifestyle, accessories, makeup,
                          hairstyle, and body posture.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="md:w-[450px] xl:w-[549px] mt-3">
                    <div
                      onClick={handleQuality}
                      className="flex items-center justify-between px-4 py-2 rounded-lg border-[1px] border-primary/20 "
                    >
                      <p className="font-medium text-lg font-robo capitalize">
                        Quality
                      </p>
                      {showQuality ? (
                        <p className="font-medium text-lg font-robo">-</p>
                      ) : (
                        <p className="font-medium text-lg font-robo">+</p>
                      )}
                    </div>
                    <div>
                      {showQuality && (
                        <div className=" px-4 py-2 border-[1px] rounded-lg border-primary/20 mt-3">
                          <div className="flex items-center gap-x-4">
                            <GoDotFill />
                            <p className="text-base  font-robo">
                              {" "}
                              Made from a sheer Belgian power micromesh.
                            </p>
                          </div>
                          <div className="flex items-center gap-x-4">
                            <GoDotFill />
                            <p className="text-base  font-robo">
                              {" "}
                              74% Polyamide (Nylon) 26% Elastane (Spandex)
                            </p>
                          </div>
                          <div className="flex items-center gap-x-4">
                            <GoDotFill />
                            <p className="text-base  font-robo">
                              Adjustable hook & eye closure and straps
                            </p>
                          </div>
                          <div className="flex items-center gap-x-4">
                            <GoDotFill />
                            <p className="text-base  font-robo">
                              {" "}
                              Hand wash in cold water, dry flat
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-primary/20 my-8"></div>
              <div className="px-3">
                <div>
                  <h3 className="font-robo font-medium text-2xl capitalize">
                    more details
                  </h3>
                </div>
                <div>
                  <p className="text-base  font-robo">
                    The patented eighteen-inch hardwood Arrowhead deck ---
                    finely mortised in, makes this the strongest and most rigid
                    canoe ever built. You cannot buy a canoe that will afford
                    greater satisfaction. The St. Louis Meramec Canoe Company
                    was founded by Alfred Wickett in 1922. Wickett had
                    previously worked for the Old Town Canoe Co from 1900 to
                    1914. Manufacturing of the classic wooden canoes in Valley
                    Park, Missouri ceased in 1978.
                  </p>
                </div>
                <div className="mt-3 gap-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <GoDotFill />
                    <p className="text-base  font-robo">
                      {" "}
                      Made from a sheer Belgian power micromesh.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <GoDotFill />
                    <p className="text-base  font-robo">
                      {" "}
                      74% Polyamide (Nylon) 26% Elastane (Spandex)
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <GoDotFill />
                    <p className="text-base  font-robo">
                      Adjustable hook & eye closure and straps
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <GoDotFill />
                    <p className="text-base  font-robo">
                      {" "}
                      Hand wash in cold water, dry flat
                    </p>
                  </div>
                </div>
                <div className="border-b-[1px] border-primary/20 my-8"></div>
                <div>
                  <div className="flex items-center gap-x-10">
                    <div>
                      <h3 className="font-robo font-medium text-2xl capitalize">
                        reviews
                      </h3>
                    </div>
                    <div>
                      <button
                        onClick={handleAddReview}
                        className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
                      >
                        write a review
                      </button>
                    </div>
                  </div>
                  {addReview && (
                    <div className="px-2 my-12">
                      <h3 className="font-robo font-medium text-2xl capitalize">
                        add your review
                      </h3>
                      <div className="w-auto sm:w-[643px] mt-10">
                        <input
                          onChange={handleEmail}
                          type="email"
                          placeholder="Email address..."
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize"
                        />
                        {emailErr && (
                          <p className="font-robo text-red-500 ">{emailErr}</p>
                        )}
                      </div>
                      <div className="w-auto sm:w-[643px] my-10">
                        <input
                          placeholder="write a review"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize"
                          type="text"
                        />
                      </div>
                      <div>
                        <button
                          onClick={handleClick}
                          className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
                        >
                          submit review
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div>
                    <div className="flex items-center gap-x-4 mt-6">
                      <div>
                        <img src={reviewImg} alt="reviewImg" />
                      </div>
                      <div>
                        <div>
                          <h4 className="text-base font-robo">Gropishta keo</h4>
                          <p className="text-primary/50 font-sans text-sm">
                            May 20, 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-primary/75 font-sans text-sm md:text-lg">
                        Very nice feeling sweater. I like it better than a
                        regular hoody because it is tailored to be a slimmer
                        fit. Perfect for going out when you want to stay comfy.
                        The head opening is a little tight which makes it a
                        little.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 mt-6">
                      <div>
                        <img src={reviewImg} alt="reviewImg" />
                      </div>
                      <div>
                        <div>
                          <h4 className="text-base font-robo">Gropishta keo</h4>
                          <p className="text-primary/50 font-sans text-sm">
                            May 20, 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-primary/75 font-sans text-sm md:text-lg">
                        Very nice feeling sweater. I like it better than a
                        regular hoody because it is tailored to be a slimmer
                        fit. Perfect for going out when you want to stay comfy.
                        The head opening is a little tight which makes it a
                        little.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 mt-6">
                      <div>
                        <img src={reviewImg} alt="reviewImg" />
                      </div>
                      <div>
                        <div>
                          <h4 className="text-base font-robo">Gropishta keo</h4>
                          <p className="text-primary/50 font-sans text-sm">
                            May 20, 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-primary/75 font-sans  text-sm md:text-lg">
                        Very nice feeling sweater. I like it better than a
                        regular hoody because it is tailored to be a slimmer
                        fit. Perfect for going out when you want to stay comfy.
                        The head opening is a little tight which makes it a
                        little.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

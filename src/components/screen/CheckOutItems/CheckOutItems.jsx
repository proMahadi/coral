import React, { useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import PageTitle from "../../../lib/layoutItems/PageTitle";
import { IoPersonSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";

const CheckOutItems = () => {
  const data = useSelector((state) => state.cartTotal.cartInitial);
  console.log(data);
  const totalPrice = data.reduce((accumulator, current, index, array) => {
    return accumulator + current.price * current.quantity;
  }, 0);
  const shippingPrice = (totalPrice * 1) / 100;
  const taxPrice = (totalPrice * 15) / 100;
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [showAddress, setShowAddress] = useState(true);
  // const [showPay, setShowPay] = useState(false)

  const handlePay = () => {
    // setShowPay(true)
  };
  const handleChangeAddress = () => {
    setShowAddress(true);
    setShowContact(false);
  };
  const handleChangeContact = () => {
    setShowContact(true);
    setShowAddress(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handleContact = () => {
    if (!email) {
      setEmailErr("Enter Your Email !");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr(["Email is invalid"]);
    } else {
    }
  };
  return (
    <div>
      <div className="bg-bgColor">
        <div className="lg:px-10 px-5 py-10 ">
          <Container>
            <PageTitle title="Check Out" root="Home" path="Check Out" />
          </Container>
        </div>
      </div>
      <div>
        <div>
          <Container className="lg:py-14 py-10 px-2 xl-px-0 ">
            <div className="lg:flex gap-x-12">
              <div className={`lg:w-1/2 ${data == "" ? "mx-auto" : "ml-auto"}`}>
                <div className="border-2 border-primary/50 rounded-lg p-4 mt-3  h-fit">
                  <div className="flex items-center">
                    <div>
                      <IoPersonSharp />
                    </div>
                    <div>
                      <p className="font-sans text-lg text-primary ml-5">
                        CONTACT INFO
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleChangeContact}
                        className="text-sm font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize "
                      >
                        change
                      </button>
                    </div>
                  </div>
                  {showContact && (
                    <div className="border-t-2 border-primary/50 pt-4 mt-4">
                      <div>
                        <p className="font-robo font-bold text-xl capitalize mb-8">
                          Contact infomation
                        </p>
                      </div>
                      <div>
                        <input
                          placeholder="Your phone number"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize mb-8"
                          type="text"
                        />
                      </div>
                      <div>
                        <input
                          onChange={handleEmail}
                          placeholder="Email address"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize "
                          type="text"
                        />
                        {emailErr && (
                          <p className="font-robo text-red-500 ">{emailErr}</p>
                        )}
                      </div>
                      <div className="flex gap-x-6 mt-8">
                        <div>
                          <button
                            onClick={handleContact}
                            className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
                          >
                            Save and next to Shipping
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setShowContact(false);
                            }}
                            className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-2 border-primary/50 rounded-lg p-4 mt-4 h-fit">
                  <div className="flex items-center">
                    <div>
                      <FaLocationDot />
                    </div>
                    <div>
                      <p className="font-sans text-lg text-primary ml-5">
                        SHIPPING ADDRESS
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleChangeAddress}
                        className="text-sm font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize "
                      >
                        change
                      </button>
                    </div>
                  </div>
                  {showAddress && (
                    <div className="border-t-2 border-primary/50 pt-4 mt-4">
                      <div>
                        <p className="font-robo font-bold text-xl capitalize mb-8">
                          shipping information
                        </p>
                      </div>
                      <div>
                        <input
                          placeholder="first name"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize mb-8"
                          type="text"
                        />
                      </div>
                      <div>
                        <input
                          placeholder="last name"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize mb-8"
                          type="text"
                        />
                      </div>
                      <div>
                        <input
                          placeholder="address"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize mb-8"
                          type="text"
                        />
                      </div>
                      <div>
                        <input
                          placeholder="city"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize mb-8"
                          type="text"
                        />
                      </div>
                      <div>
                        <input
                          placeholder="state"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize mb-8"
                          type="text"
                        />
                      </div>
                      <div>
                        <input
                          placeholder="postal code"
                          className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize mb-8"
                          type="text"
                        />
                      </div>
                      <div className="flex gap-x-6 mt-8">
                        <div>
                          <button
                            onClick={handlePay}
                            className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
                          >
                            Save and next to Payment
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setShowAddress(false);
                            }}
                            className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-6 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={`${data == "" ? "hidden" : "block"}`}>
                <div className="lg:pl-12 lg:border-l-2 border-primary/50">
                  <div>
                    <h3 className="font-robo font-bold text-2xl capitalize">
                      Order summary
                    </h3>
                  </div>
                  <div
                    className={` ${
                      data.length > 3
                        ? "overflow-y-scroll h-[500px]"
                        : "overflow-y-scroll-hidden h-fit"
                    } pr-4`}
                  >
                    {data.map((item) => (
                      <CheckoutProduct
                        item={item}
                        // imgsrc={item.image} title={item.title} price={item.price}
                      />
                    ))}
                  </div>
                </div>
                <div className="lg:ml-12 p-2.5 mt-4 bg-bgColor rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-sans text-lg text-primary/50">
                        subtotal
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-lg text-primary font-bold">
                        ${Math.round(totalPrice)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-sans text-lg text-primary/50">
                        Shipping estimate
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-lg text-primary font-bold">
                        ${Math.round(shippingPrice)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-sans text-lg text-primary/50">
                        Tax estimate
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-lg text-primary font-bold">
                        ${Math.round(taxPrice)}
                      </p>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-[#E3E3E3] my-4"></div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-robo text-lg text-primary font-black">
                        Order total
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-lg text-primary font-bold">
                        ${Math.round(totalPrice + shippingPrice + taxPrice + 1)}
                      </p>
                    </div>
                  </div>
                  <Link to="/my-order">
                    <div className="text-center mt-3">
                      <button className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-12 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize">
                        Confirm order
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;

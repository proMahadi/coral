import React from "react";
import Container from "../../../lib/layoutItems/Container";
import PageTitle from "../../../lib/layoutItems/PageTitle";
import { FaCheck } from "react-icons/fa6";

const OrderDetails = () => {
  return (
    <div>
      <div className="bg-bgColor">
        <div className="lg:px-10 px-5 py-10 ">
          <Container>
            <PageTitle title="my order" root="home" path="my order" />
          </Container>
        </div>
      </div>
      <div>
        <Container>
          <div className="p-6 h-fit w-full bg-white shadow-lg my-10">
            <h3 className="font-robo text-primary text-3xl capitalize">
              track your order
            </h3>
            <p className="font-robo text-primary text-lg capitalize">
              order code:365jYQwb80
            </p>
            <div className="flex gap-x-6 sm:gap-x-20 justify-center my-6">
              <div className="flex flex-col items-center">
                <div className="h-[43px] w-[43px] rounded-full bg-green-500 flex justify-center items-center">
                  <FaCheck className="text-white text-lg" />
                </div>
                <p className="font-robo text-primary text-lg capitalize">
                  placed
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[43px] w-[43px] rounded-full bg-green-500 flex justify-center items-center">
                  <FaCheck className="text-white text-lg" />
                </div>
                <p className="font-robo text-primary text-lg capitalize">
                  packed
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[43px] w-[43px] rounded-full bg-green-500 flex justify-center items-center">
                  <FaCheck className="text-white text-lg" />
                </div>
                <p className="font-robo text-primary text-lg capitalize">
                  shipped
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[43px] w-[43px] rounded-full bg-green-500 flex justify-center items-center">
                  <FaCheck className="text-white text-lg" />
                </div>
                <p className="font-robo text-primary text-lg capitalize">
                  delivered
                </p>
              </div>
            </div>
            <p className="font-robo text-primary text-lg capitalize">
              your order has been delivered
            </p>
            <p className="font-robo text-primary text-sm capitalize">
              DLH smartmail (tracking number 123456789)
            </p>
          </div>
          <div className="p-6 h-fit w-full bg-white shadow-lg">
            <h3 className="font-robo text-primary text-3xl capitalize mb-5">
              all orders
            </h3>
            <div>
              <div className="flex justify-between">
                <p className="font-robo text-primary text-lg capitalize">
                  order code
                </p>
                <p className="font-robo text-primary text-lg capitalize">
                  price
                </p>
                <p className="font-robo text-primary text-lg capitalize">
                  status
                </p>
              </div>
              <div className="border-b my-5"></div>
              <div className="flex justify-between">
                <p className="font-robo text-primary text-lg capitalize">
                  365jYQwb80
                </p>
                <p className="font-robo text-primary text-lg capitalize">450</p>
                <p className="font-robo text-primary text-lg capitalize">
                  delivered
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OrderDetails;

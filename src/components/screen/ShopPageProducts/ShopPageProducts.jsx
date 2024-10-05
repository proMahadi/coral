import React, { useEffect, useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import PageTitle from "../../../lib/layoutItems/PageTitle";
import Product from "../../../lib/layoutItems/Product";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { ProductData } from '../../../data/ProductData/ProductData'

const ShopPageProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentItems = ProductData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(currentItems);
  const pageCount = Math.ceil(ProductData.length / productsPerPage);
  console.log(pageCount);
  const pageNumber = [...Array(pageCount + 1).keys()].slice(1);
  console.log(pageNumber);

  console.log(currentPage);

  const next = () => {
    console.log("okcool");
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - pageCount + 1);
    }
  };
  const prev = () => {
    console.log("okcool");
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(pageCount);
    }
  };

  // for API intrigation
  // const [data, setData] = useState([])
  // useEffect(() => {
  //     setData(currentItems)
  // }, [])

  return (
    <div>
      <div className="lg:px-10 px-5 py-10 bg-bgColor">
        <Container>
          <PageTitle title="Products" root="Home" path="Products" />
        </Container>
      </div>
      <div>
        <Container className="lg:py-32 py-12">
          <div className="flex flex-wrap justify-around gap-y-6">
            {currentItems.map((item) => (
              <Product product={item} key={item.id} />
            ))}
          </div>
          <div className="flex justify-center mt-14 gap-x-6">
            <button>
              <FaAngleLeft className="text-pink" onClick={prev} />
            </button>
            {pageNumber.map((number) => (
              <div
                key={number}
                className={`py-3 px-5 rounded-full ${
                  currentPage === number
                    ? "bg-pink text-white"
                    : "border-pink border text-pink"
                }  hover:cursor-pointer`}
                onClick={() => setCurrentPage(number)}
              >
                <p className=" font-robo ">{number}</p>
              </div>
            ))}
            <button>
              <FaAngleRight className="text-pink" onClick={next} />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ShopPageProducts;

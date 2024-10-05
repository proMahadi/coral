import React, { useEffect, useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import SectionHeading from "../../../lib/layoutItems/SectionHeading";
import { FaFilter } from "react-icons/fa6";
import Product from "../../../lib/layoutItems/Product";
import { ProductData } from '../../../data/ProductData/ProductData'
import List from "../../../lib/layoutItems/List";
import ListItem from "../../../lib/layoutItems/ListItem";

const NewsLetter = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    setData(ProductData);
    setCollection([...new Set(ProductData.map((item) => item.catagory))]);
  }, []);
  // console.log(data);
  const productFilter = (productCatagory) => {
    console.log(productCatagory);
    const catagoryFilterData = ProductData.filter(
      (item) => item.catagory == productCatagory
    );
    setData(catagoryFilterData);
  };

  return (
    <div>
      <Container className="pb-[140px]">
        <div>
          <SectionHeading
            title="Or subscribe to the newsletter"
            className="text-center"
          />
        </div>
        <div className="flex flex-wrap justify-between items-center my-9">
          <div
          // product items filter div
          >
            <List className="flex gap-x-4 md:gap-x-10">
              <ListItem
                onClick={() => setData(ProductData)}
                className="text-black text-sm md:text-base font-sans font-semibold capitalize hover:cursor-pointer"
                itemName="all products"
              />
              {collection.map((item) => (
                <ListItem
                  onClick={() => productFilter(item)}
                  className="text-black/50 text-sm md:text-base font-sans font-semibold capitalize hover:text-pink duration-300 hover:cursor-pointer"
                  itemName={item}
                />
              ))}
            </List>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="text-white bg-primary py-1.5 px-4 text-base font-sans font-semibold capitalize hover:bg-pink duration-300 flex items-center">
              <FaFilter className="inline-block mr-1" />
              <p>filter</p>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-x-6 gap-y-6">
          {data.map((item, key) => (
            <Product key={key} product={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;

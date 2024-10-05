import React from "react";
import Banner from "../components/screen/Banner/Banner";
import Brands from "../components/screen/Brands/Brands";
import ExploreProduct from "../components/screen/ExploreProduct/ExploreProduct";
import NewsLetter from "../components/screen/NewsLetter/NewsLetter";
import BrandPromotion from "../components/screen/BrandPromotion/BrandPromotion";
import BestSeller from "../components/screen/BestSeller/BestSeller";
import Instagram from "../components/screen/Instagram/Instagram";

const Home = () => {
  return (
    <>
      <Banner />
      <Brands />
      <ExploreProduct />
      <NewsLetter />
      <BrandPromotion />
      <BestSeller />
      <Instagram />
    </>
  );
};

export default Home;

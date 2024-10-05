import React from "react";
import Container from "../../../lib/layoutItems/Container";
import footerLogo from "../../../assets/images/footerImages/footerLogo.png";
import SocialMedia from "../../../lib/layoutItems/SocialMedia";
import List from "../../../lib/layoutItems/List";
import ListItem from "../../../lib/layoutItems/ListItem";

const Footer = () => {
  return (
    <div className="bg-white">
      <Container className="pt-[140px] pb-[90px] px-3 lg:px-0">
        <div className="lg:flex flex-wrap justify-between">
          <div>
            <div>
              <img src={footerLogo} alt="logo" />
            </div>
            <div className="w-auto sm:w-[392px] my-8">
              <p className="text-primary/75 font-sans text-base capitalize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <SocialMedia />
          </div>
          <div className="xl:ml-14 mt-6 lg:mt-0">
            <div>
              <List>
                <h4 className="text-black font-sans text-base font-semibold capitalize">
                  CATALOG
                </h4>
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Necklaces" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="hoodies" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Jewelry Box" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="t-shirt" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="jacket" LinkTo="#"
                />
              </List>
            </div>
          </div>
          <div>
            <div className="xl:ml-[260px] xl:mr-[208px] mt-6 lg:mt-0 mb-6 lg:mb-0">
              <List>
                <h4 className="text-black font-sans text-base font-semibold capitalize">
                  ABOUT US
                </h4>
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Our Producers" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Sitemap" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="FAQ" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="About Us" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Terms & Conditions" LinkTo="#"
                />
              </List>
            </div>
          </div>
          <div>
            <div>
              <List>
                <h4 className="text-black font-sans text-base font-semibold capitalize">
                  Contact Us
                </h4>
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Track Your Order" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Product Care & Repair" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Book an Appointment" LinkTo="#"
                />
                <ListItem
                  className="text-primary font-sans text-sm mt-3 hover:text-pink duration-300 cursor-pointer"
                  footerItem="Shipping & Returns" LinkTo="#"
                />
              </List>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

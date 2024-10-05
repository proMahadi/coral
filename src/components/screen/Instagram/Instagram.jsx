import React, { useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import SectionHeading from "../../../lib/layoutItems/SectionHeading";
import InstagramPromotion from "../../../lib/layoutItems/InstagramPromotion";
import InstagramImg1 from "../../../assets/images/instagramImages/InstagramImg1.png";
import InstagramImg2 from "../../../assets/images/instagramImages/InstagramImg2.png";
import InstagramImg3 from "../../../assets/images/instagramImages/InstagramImg3.png";
import InstagramImg4 from "../../../assets/images/instagramImages/InstagramImg4.png";
import InstagramImg5 from "../../../assets/images/instagramImages/InstagramImg5.png";
import InstagramImg6 from "../../../assets/images/instagramImages/InstagramImg6.png";

const Instagram = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
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
  return (
    <div className="bg-primary/[0.05]">
      <Container className="py-[100px] px-3 xl:px-0">
        <div>
          <div>
            <SectionHeading
              title="Follow products and discounts on Instagram"
              className="text-center"
            />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-6 my-16 justify-around ">
            <div className="hover:cursor-pointer">
              <InstagramPromotion imgsrc={InstagramImg1} />
            </div>
            <div className="hover:cursor-pointer">
              <InstagramPromotion imgsrc={InstagramImg2} />
            </div>
            <div className="hover:cursor-pointer">
              <InstagramPromotion imgsrc={InstagramImg3} />
            </div>
            <div className="hover:cursor-pointer">
              <InstagramPromotion imgsrc={InstagramImg4} />
            </div>
            <div className="hover:cursor-pointer">
              <InstagramPromotion imgsrc={InstagramImg5} />
            </div>
            <div className="hover:cursor-pointer">
              <InstagramPromotion imgsrc={InstagramImg6} />
            </div>
          </div>
          <div>
            <SectionHeading
              title="Or subscribe to the newsletter"
              className="text-center"
            />
          </div>
          <div className="flex items-center gap-x-7 justify-center mt-[74px]">
            <div className="w-[643px]">
              <input
                onChange={handleEmail}
                type="email"
                placeholder="Email address..."
                className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize"
              />
            </div>
            <div>
              <button
                onClick={handleClick}
                className="px-4 pb-[10px] border-b-[1px] border-black bg-transparent text-primary font-sans text-base capitalize"
              >
                SUBMIT
              </button>
            </div>
          </div>
          {emailErr && (
            <p className="font-robo text-red-500 sm:text-center">{emailErr}</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Instagram;

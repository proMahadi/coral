import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="gap-x-9 flex">
      <div className="hover:cursor-pointer">
        <Link to="#">
          <FaFacebookF />
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link to="#">
          <FaTwitter />
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link to="#">
          <FaLinkedinIn />
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link to="#">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;

import React, { useState } from "react";
import Container from "../../../lib/layoutItems/Container";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const handleClick = () => {
    if (!email) {
      setEmailErr("Enter is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Email is invalid");
    }
    if (!password) {
      setPasswordErr("Password is required");
    } else if (!/^(?=.*?[A-Z])/.test(password)) {
      setPasswordErr("Password must contain at least one upper case");
    } else if (!/^(?=.*?[a-z])/.test(password)) {
      setPasswordErr("Password must contain at least one lower case");
    } else if (!/^(?=.*?[0-9])/.test(password)) {
      setPasswordErr("Password must contain at least one digit");
    } else if (!/^(?=.*?[#?!@$%^&*-])/.test(password)) {
      setPasswordErr("Password must contain at least one special character");
    } else if (!/^.{8,}/.test(password)) {
      setPasswordErr("Password must contain at least eight characters");
    }
  };
  return (
    <div>
      <Container className="lg:py-14 py-10 px-2 xl-px-0 ">
        <div>
          <h2 className="text-3xl md:text-5xl text-primary font-bold font-sans text-center mb-12">
            Signup
          </h2>
        </div>
        <div>
          <div className="flex justify-center">
            <button className="flex items-center  px-4 py-3 border-[1px] border-primary/50 rounded-lg gap-x-10">
              <div>
                <FaFacebookSquare className="text-2xl text-blue-600" />
              </div>
              <div>
                <p className="text-lg font-robo text-primary/50">
                  Continue with Facebook
                </p>
              </div>
            </button>
          </div>
          <div className="flex justify-center my-4">
            <button className="flex items-center  px-7 py-3 border-[1px] border-primary/50 rounded-lg gap-x-10">
              <div>
                <FaTwitter className="text-2xl text-sky-500" />
              </div>
              <div>
                <p className="text-lg font-robo text-primary/50">
                  Continue with Twitter
                </p>
              </div>
            </button>
          </div>
          <div className="flex justify-center">
            <button className="flex items-center  px-7 py-3 border-[1px] border-primary/50 rounded-lg gap-x-10">
              <div>
                <FcGoogle className="text-2xl" />
              </div>
              <div>
                <p className="text-lg font-robo text-primary/50">
                  Continue with Google
                </p>
              </div>
            </button>
          </div>
          <div>
            <p className="text-center my-5 font-robo text-primary font-medium">
              Or
            </p>
          </div>
          <div>
            <div className="sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto">
              <input
                onChange={handleEmail}
                placeholder="Email address"
                className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize "
                type="email"
              />
              {emailErr && <p className="font-robo text-red-500">{emailErr}</p>}
            </div>
          </div>
          <div>
            <div className="sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto mt-10 relative">
              <input
                onChange={handlePassword}
                placeholder="password"
                className="outline-none border-b-[1px] border-black bg-transparent w-full pb-3 placeholder:text-primary/50 placeholder:text-base placeholder:font-robo placeholder:font-semibold placeholder:capitalize "
                type={showPassword ? "text" : "password"}
              />
              {passwordErr && (
                <p className="font-robo text-red-500">{passwordErr}</p>
              )}
              <div
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute top-0 right-0"
              >
                {showPassword ? (
                  <IoIosEye className="text-2xl cursor-pointer" />
                ) : (
                  <IoIosEyeOff className="text-2xl cursor-pointer" />
                )}
              </div>
            </div>
          </div>
          <div className="text-center mt-3 ">
            <button
              onClick={handleClick}
              className="text-sm sm:text-base font-medium py-3 px-4 xl:py-3.5 xl:px-12 bg-primary hover:bg-pink duration-300 rounded-full text-white capitalize"
            >
              Continue
            </button>
          </div>
          <div className="text-center">
            <p className="text-lg font-robo my-5">
              Already have an account?
              <Link to="/login">
                {" "}
                <span className="text-green-500">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;

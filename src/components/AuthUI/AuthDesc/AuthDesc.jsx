import React from "react";
import Logo from "../../../assets/logo.png";
import Apple from "../../../assets/apple.png";
import Arrow from "../../../assets/arrow.png";
import About from "../../../assets/about.jpg";
import Image1 from "../../../assets/post67.jpg";
import Image2 from "../../../assets/post68.jpg";
import Image3 from "../../../assets/post75.jpg";
import Image4 from "../../../assets/post82.jpg";
import Image5 from "../../../assets/post45.jpg";
import Image6 from "../../../assets/post55.jpg";
import Image7 from "../../../assets/post57.jpg";
import Image8 from "../../../assets/post63.jpg";
import Image9 from "../../../assets/post64.jpg";
import Image10 from "../../../assets/post38.jpg";
import Image11 from "../../../assets/post40.jpg";
import Image12 from "../../../assets/post20.jpg";
import Google from "../../../assets/google.png";
import Windows from "../../../assets/windows.png";
import Twitter from "../../../assets/twitter.png";
import Facebook from "../../../assets/facebook.png";
import LinkedIn from "../../../assets/linkedin.png";

const AuthDesc = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex-[0_0_50%]">
        <div className="flex justify-center text-yellow uppercase">
          <h3>Largest image source</h3>
        </div>
        <div className="flex text-[50px] text-[#52b788] text-center justify-center uppercase">
          <h1>Powered by creators around the world</h1>
        </div>
        <div className="flex pt-[100px] justify-center">
          <h3>Don't have Account?</h3>
        </div>
        <div className="flex gap-[0.3rem] cursor-pointer pt-[10px] text-[#52b788] justify-center underline underline-offset-[10px] hover:text-yellow hover:decoration-yellow">
          <h2>Create Account</h2>
          <img src={Arrow} alt="" className="w-6 h-6" />
        </div>
        <div className="relative w-full max-w-[600px] m-auto flex items-center justify-center pt-[100px]">
          <img src={About} alt="" className="h-auto w-full block rounded-3xl" />
          <div className="absolute text-yellow bg-[#00000033] p-5 m-5 rounded-[10px]">
            <h2>About us</h2>
            <p>
              Over 3 million free high-resolution images brought to you by the
              world's most generous community of photographers.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[0_0_50%] p-[10px] relative text-center">
        <div className="gap-[10px] flex flex-wrap rounded-[18px]">
          <img
            src={Image1}
            alt="Gallery Image 1"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image2}
            alt="Gallery Image 2"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image3}
            alt="Gallery Image 3"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image4}
            alt="Gallery Image 4"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image5}
            alt="Gallery Image 5"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image6}
            alt="Gallery Image 6"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image7}
            alt="Gallery Image 7"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image8}
            alt="Gallery Image 8"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image9}
            alt="Gallery Image 9"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image10}
            alt="Gallery Image 10"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image11}
            alt="Gallery Image 11"
            className="w-custom h-auto block rounded-[18px]"
          />
          <img
            src={Image12}
            alt="Gallery Image 12"
            className="w-custom h-auto block rounded-[18px]"
          />
        </div>
        <div className="top-1/2 left-1/2 rounded-lg absolute flex items-center justify-center w-3/4 h-3/4 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-lg text-center text-white w-1/2">
            <div className="flex items-center justify-center">
              <div className="w-1/4 flex items-center justify-center bg-grey rounded-[14px] mb-4">
                <img src={Logo} alt="" className="w-11 h-11 m-[10px]" />
              </div>
            </div>
            <h2 className="mb-[20px] w- text-[24px]">Welcome Back</h2>
            <form className="mb-5">
              <div className="mb-5 mt-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-[10px] rounded outline-none bg-grey text-white"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-[10px] rounded outline-none bg-grey text-white"
                />
              </div>
              <div className="mt-5 mb-5 flex items-center justify-between">
                <span className="text-yellow text-[15px]">Remember Me</span>
                <input type="checkbox" className="h-5 w-5 cursor-pointer" />
              </div>
              <button
                type="submit"
                className="button w-full p-[10px] border-none rounded text-hrColor cursor-pointer text-[16px]"
              >
                Login
              </button>
            </form>
            <div className="before:flex-1 after:flex-1 before:border-t-[3px] after:border-t-[3px] before:border-green after:border-green before:mr-2.5 after:ml-2.5 flex items-center text-center my-[20px] mx-[0px] text-green">
              <span>OR</span>
            </div>
            <div className="flex justify-between">
              <button className="apple-login bg-grey border-none rounded p-[10px] cursor-pointer">
                <img src={Apple} alt="Apple Logo" className="w-5 h-5" />
              </button>
              <button className="google-login bg-grey border-none rounded p-[10px] cursor-pointer">
                <img src={Google} alt="Google Logo" className="w-5 h-5" />
              </button>
              <button className="windows-login bg-grey border-none rounded p-[10px] cursor-pointer">
                <img src={Windows} alt="Windows Logo" className="w-5 h-5" />
              </button>
              <button className="facebook-login bg-grey border-none rounded p-[10px] cursor-pointer">
                <img src={Facebook} alt="Facebook Logo" className="w-5 h-5" />
              </button>
              <button className="linkedin-login bg-grey border-none rounded p-[10px] cursor-pointer">
                <img src={LinkedIn} alt="linkedIn Logo" className="w-5 h-5" />
              </button>
              <button className="twitter-login bg-grey border-none rounded p-[10px] cursor-pointer">
                <img src={Twitter} alt="Twitter Logo" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDesc;

import "./AuthDesc.css";
import React from "react";
import Logo from "../../../assets/logo.png";
import Apple from "../../../assets/apple.png";
import Arrow from "../../../assets/arrow.png";
import About from "../../../assets/about.jpg";
import Image1 from "../../../assets/post1.jpg";
import Image2 from "../../../assets/post2.jpg";
import Image3 from "../../../assets/post3.jpg";
import Image4 from "../../../assets/post4.jpg";
import Image5 from "../../../assets/post5.jpg";
import Image6 from "../../../assets/post6.jpg";
import Google from "../../../assets/google.png";
import Windows from "../../../assets/windows.png";
import Twitter from "../../../assets/twitter.png";
import Facebook from "../../../assets/facebook.png";
import LinkedIn from "../../../assets/linkedin.png";

const AuthDesc = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex-[0_0_50%]">
        <div className="flex justify-center text-[#fffc54] uppercase">
          <h3>Largest image source</h3>
        </div>
        <div className="flex text-[50px] text-[#52b788] text-center justify-center uppercase">
          <h1>Powered by creators around the world</h1>
        </div>
        <div className="flex pt-[100px] justify-center">
          <h3>Don't have Account?</h3>
        </div>
        <div className="flex gap-[0.3rem] cursor-pointer pt-[10px] text-[#52b788] justify-center underline underline-offset-[10px] hover:text-[#fffc54] hover:decoration-[#fffc54]">
          <h2>Create Account</h2>
          <img src={Arrow} alt="" className="w-6 h-6" />
        </div>
        <div className="relative w-full max-w-[600px] m-auto flex items-center justify-center pt-[100px]">
          <img src={About} alt="" className="h-auto w-full block rounded-3xl" />
          <div className="absolute text-[#fffc54] bg-[#00000033] p-5 m-5 rounded-[10px]">
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
        </div>
        <div className="login top-1/2 left-1/2 rounded-lg absolute bg-[#1e1e1e] flex items-center justify-center">
          <div className="bg-[#1e1e1e] p-[40px] rounded-lg text-center text-white">
            <div className="w-1/4 ml-[105px] flex self-center justify-center bg-black rounded-[14px] mb-4">
              <img src={Logo} alt="" className="w-[45px] h-[45px] m-[10px]" />
            </div>
            <h2 className="mb-[20px] text-[24px]">Welcome Back</h2>
            <p className="mb-[20px] text-[#aaa]">
              Don't have an account yet?
              <a href="#" className="text-[#1a73e8] ml-1">
                Sign up
              </a>
            </p>
            <form className="mb-[20px]">
              <div className="mb-[20px] mt-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-[10px] rounded bg-[#2e2e2e] text-white"
                />
              </div>
              <div className="mb-[20px]">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-[10px] rounded bg-[#2e2e2e] text-white"
                />
              </div>
              <button
                type="submit"
                className="button w-full p-[10px] border-none rounded text-black cursor-pointer text-[16px]"
              >
                Login
              </button>
            </form>
            <div className="or-divider flex items-center text-center my-[20px] mx-[0px] text-[#aaa]">
              <span>OR</span>
            </div>
            <div className="flex justify-between">
              <button className="apple-login bg-[#333] border-none rounded p-[10px] cursor-pointer">
                <img src={Apple} alt="Apple Logo" className="w-5 h-5" />
              </button>
              <button className="google-login bg-[#333] border-none rounded p-[10px] cursor-pointer">
                <img src={Google} alt="Google Logo" className="w-5 h-5" />
              </button>
              <button className="windows-login bg-[#333] border-none rounded p-[10px] cursor-pointer">
                <img src={Windows} alt="Windows Logo" className="w-5 h-5" />
              </button>
              <button className="facebook-login bg-[#333] border-none rounded p-[10px] cursor-pointer">
                <img src={Facebook} alt="Facebook Logo" className="w-5 h-5" />
              </button>
              <button className="twitter-login bg-[#333] border-none rounded p-[10px] cursor-pointer">
                <img src={Twitter} alt="Twitter Logo" className="w-5 h-5" />
              </button>
              <button className="linkedin-login bg-[#333] border-none rounded p-[10px] cursor-pointer">
                <img src={LinkedIn} alt="linkedIn Logo" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDesc;

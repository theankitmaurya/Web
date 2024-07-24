import React from "react";
import Logo from "../../../assets/logo.png";
import Search from "../../../assets/search.png";

const AuthNav = () => {
  return (
    <div className="flex items-center justify-between px-[25px] py-[5px] bg-[#282828] rounded-[18px] mb-12">
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12">
          <img src={Logo} alt="" />
        </div>
        <div className="flex items-center">
          <ul className="flex list-none m-0 p-0">
            <li className="ml-5 cursor-pointer hover:text-[#fffc54]">Home</li>
            <li className="ml-5 cursor-pointer hover:text-[#fffc54]">
              Profile
            </li>
            <li className="ml-5 cursor-pointer hover:text-[#fffc54]">Chats</li>
            <li className="ml-5 cursor-pointer hover:text-[#fffc54]">
              Notifications
            </li>
            <li className="ml-5 cursor-pointer hover:text-[#fffc54]">Liked</li>
            <li className="ml-5 cursor-pointer hover:text-[#fffc54]">Github</li>
            <li className="ml-5 cursor-pointer hover:text-[#fffc54]">
              Settings
            </li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <img src={Search} alt="" className="w-6 h-6 absolute left-[10px]" />
          <input
            type="text"
            placeholder="Search Dev."
            className="bg-[#1a1a1a] pt-[18px] pb-[18px] pl-11 border-none outline-none rounded-3xl h-8"
          />
        </div>

        <div className="button ml-[450px] px-[24px] py-[10px] rounded-3xl">
          Login
        </div>
      </div>
    </div>
  );
};

export default AuthNav;

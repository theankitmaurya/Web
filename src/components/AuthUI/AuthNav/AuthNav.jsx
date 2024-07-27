import React from "react";
import Logo from "../../../assets/logo.png";
import Search from "../../../assets/search.png";

const AuthNav = () => {
  return (
    <div className="flex items-center justify-between px-[25px] py-[5px] bg-grey rounded-[18px] mb-12">
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12">
          <img src={Logo} alt="" className="cursor-pointer"/>
        </div>
        <div className="flex items-center">
          <ul className="flex list-none m-0 p-0">
            <li className="ml-5 cursor-pointer hover:text-yellow">Home</li>
            <li className="ml-5 cursor-pointer hover:text-yellow">
              Profile
            </li>
            <li className="ml-5 cursor-pointer hover:text-yellow">Chats</li>
            <li className="ml-5 cursor-pointer hover:text-yellow">
              Notifications
            </li>
            <li className="ml-5 cursor-pointer hover:text-yellow">Liked</li>
            <li className="ml-5 cursor-pointer hover:text-yellow">Github</li>
            <li className="ml-5 cursor-pointer hover:text-yellow">
              Settings
            </li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <img src={Search} alt="" className="w-6 h-6 absolute left-[10px]" />
          <input
            type="text"
            placeholder="Search Dev."
            className="bg-darkGrey pt-[18px] pb-[18px] pl-11 border-none outline-none rounded-3xl h-8"
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

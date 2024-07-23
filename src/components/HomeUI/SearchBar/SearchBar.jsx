import React from "react";
import Logo from "../../../assets/logo.png";

const SearchBar = () => {
  return (
    <div className="flex gap-3">
      <img src={Logo} className="h-10 cursor-pointer" alt="" />
      <div className="flex p-[5px] pl-[5px]">
        <input
          type="text"
          placeholder="# Explore"
          className="bg-[#282828] pl-[10px] border-none outline-none rounded-3xl"
        />
      </div>
    </div>
  );
};

export default SearchBar;

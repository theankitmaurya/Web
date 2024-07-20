import React from "react";
import "./SearchBar.css";
import Logo from "../../assets/logo.png";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <img src={Logo} className="logo" alt="" />
      <div className="search">
        <input type="text" placeholder="# Explore" />
      </div>
    </div>
  );
};

export default SearchBar;

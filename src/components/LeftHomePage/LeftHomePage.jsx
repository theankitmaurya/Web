import React from "react";
import "./LeftHomePage.css";
import SearchBar from "../SearchBar/SearchBar";
import ProfileCard from "../ProfileCard/ProfileCard";
import Skills from "../Skills/Skills";
import Communities from "../Communities/Communities";

const LeftHomePage = () => {
  return (
    <div className="left">
      <SearchBar />
      <ProfileCard />
      <Skills />
      <Communities />
    </div>
  );
};

export default LeftHomePage;

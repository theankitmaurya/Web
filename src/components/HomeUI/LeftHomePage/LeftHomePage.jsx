import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProfileCard from "../ProfileCard/ProfileCard";
import Skills from "../Skills/Skills";
import Communities from "../Communities/Communities";

const LeftHomePage = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 items-center overflow-auto">
      <SearchBar />
      <ProfileCard />
      <Skills />
      <Communities />
    </div>
  );
};

export default LeftHomePage;

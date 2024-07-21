// import "./MiddleHomePage.css";
import React from "react";
import Stories from "../Stories/Stories";
import NavIcons from "../NavIcons/NavIcons";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

const MiddleHomePage = () => {
  return (
    <div className="flex flex-col gap-4 h-screen overflow-auto">
      <NavIcons />
      <Stories />
      <PostShare />
      <Posts />
    </div>
  );
};

export default MiddleHomePage;

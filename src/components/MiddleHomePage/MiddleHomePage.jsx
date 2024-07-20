import "./MiddleHomePage.css";
import React from "react";
import Stories from "../Stories/Stories";
import NavIcons from "../NavIcons/NavIcons";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

const MiddleHomePage = () => {
  return (
    <div className="postSide">
      <NavIcons />
      <Stories />
      <PostShare />
      <Posts />
    </div>
  );
};

export default MiddleHomePage;

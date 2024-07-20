import React from "react";
import "./RightHomePage.css";
import LogOut from "../LogOut/LogOut";
import Followers from "../RecentActivity/Followers";
import Followed from "../Followed/Followed";
import Requests from "../Requests/Requests";

const RightHomePage = () => {
  return(
    <div className="right">
      <LogOut />
      <Followers />
      <Followed />
      <Requests />
    </div>
  )
};

export default RightHomePage;

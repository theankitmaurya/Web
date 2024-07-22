import React from "react";
import LogOut from "../LogOut/LogOut";
import Followers from "../RecentActivity/Followers";
import Followed from "../Followed/Followed";
import Requests from "../Requests/Requests";

const RightHomePage = () => {
  return(
    <div className="hidden md:flex flex-col gap-4 items-center overflow-auto">
      <LogOut />
      <Followers />
      <Followed />
      <Requests />
    </div>
  )
};

export default RightHomePage;

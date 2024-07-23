import React from "react";
import Homefill from "../../../assets/homefill.png";
import Chatfill from "../../../assets/chathollow.png";
import Notification from "../../../assets/notificationhollow.png";
import Heartfill from "../../../assets/hearthollow.png";
import Github from "../../../assets/github.png";

const NavIcons = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly mb-4 w-full md:w-1/2 mt-2">
        <img src={Homefill} alt="" className="w-6 h-6 cursor-pointer" />
        <img src={Chatfill} alt="" className="w-6 h-6 cursor-pointer" />
        <img src={Notification} alt="" className="w-6 h-6 cursor-pointer" />
        <img src={Heartfill} alt="" className="w-6 h-6 cursor-pointer" />
        <img src={Github} alt="" className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavIcons;

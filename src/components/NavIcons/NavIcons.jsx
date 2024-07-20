import React from 'react'
import "./NavIcons.css"
import Homefill from "../../assets/homefill.png";
import Chatfill from "../../assets/chathollow.png";
import Notification from "../../assets/notificationhollow.png";
import Heartfill from "../../assets/hearthollow.png";
import Github from "../../assets/github.png";

const NavIcons = () => {
  return (
    <div className="middle">
        <div className="navIcons">
          <img src={Homefill} alt="" />
          <img src={Chatfill} alt="" />
          <img src={Notification} alt="" />
          <img src={Heartfill} alt="" />
          <img src={Github} alt="" />
        </div>
      </div>
  )
}

export default NavIcons

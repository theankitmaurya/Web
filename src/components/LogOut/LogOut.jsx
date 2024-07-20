import "./LogOut.css";
import React from "react";
import ProfileImage from "../../assets/profileimg.jpg";
import DropDown from "../../assets/dropdown.png";

const LogOut = () => {
  return (
    <div className="logOut">
      <div className="container">
        <img src={ProfileImage} alt="" />
        <div className="userName">Evgen Ledo</div>
        <div className="dropDown">
          <img src={DropDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogOut;

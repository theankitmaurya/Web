import React from "react";
import ProfileImage from "../../assets/profileimg.jpg";
import DropDown from "../../assets/dropdown.png";

const LogOut = () => {
  return (
    <div className="flex gap-4 bg-[#282828] rounded-3xl ml-auto mb-4">
      <div className="p-2 flex items-center">
        <img src={ProfileImage} alt="" className="w-6 h-6 rounded-[10px]"/>
        <div className="ml-[1.2rem] mr-[1.2rem] text-[13px]">Evgen Ledo</div>
        <div className="w-[0.7rem] h-[0.7rem] mr-[0.6rem] cursor-pointer">
          <img src={DropDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogOut;

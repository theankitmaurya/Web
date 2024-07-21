import React from "react";
import Cover from "../../assets/circle.jpg";
import Profile from "../../assets/profileimg.jpg";

const ProfileCard = () => {
  return (
    <div className="bg-[#282828] rounded-3xl flex flex-col relative gap-4 overflow-x-hidden">
      <div className="relative flex flex-col items-center justify-center">
        <img src={Cover} alt="" className="w-full" />
        <img src={Profile} alt="" className="w-24 border-4 border-[#fffc54] rounded-[20px] absolute bottom-[-4rem]" />
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex w-[90%] items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-[0.01rem]">
            <span className="font-bold">1984</span>
            <span className="text-[#828282] text-[13px]">Followers</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[0.01rem]">
            <span className="font-bold">2001</span>
            <span className="text-[#828282] text-[13px]">Following</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[0.2rem] gap-[10px]">
        <span className="font-bold">Evgen Ledo</span>
        <span className="text-[#828282] text-[13px]">@ledoteam</span>
      </div>

      <div className="flex items-center justify-center text-center p-[5px]">
        <span>🌟Hello, I'm UX/UI designer. Open to the new projects.🌟</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <hr className="w-[85%] border-1 border-black"/>
      </div>

      <span className="flex self-center justify-center cursor-pointer text-[#fafafa] bg-[#1a1a1a] w-[85%] p-[5px] mb-4 rounded-[10px]">
        My Profile
      </span>
    </div>
  );
};

export default ProfileCard;

import React from "react";

import { Follower } from "../../Data/FollowersData";

const Followers = () => {
  return (
    <div className="w-full rounded-xl gap-4 flex flex-col bg-[#282828] pl-[10px] pb-4 pt-2 mb-4">
      <div className="flex items-center justify-between">
        <div className="font-bold">
          <h3>Followers</h3>
        </div>
        <div className="w-[75px] gap-8 text-[#fffc54] mr-0 items-center justify-center text-[10px] cursor-pointer">View More</div>
      </div>

      {Follower.map((follower, id) => {
        return (
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-[10px]">
              <img src={follower.img} alt="" className="w-12 h-12 rounded-[18px]" />
              <div className="flex flex-col justify-center">
                <span>{follower.name}</span>
                <span className="text-[#828282]">@{follower.userId}</span>
              </div>
            </div>
            <button className="button text-13px] w-20 mr-[10px]">Message</button>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;

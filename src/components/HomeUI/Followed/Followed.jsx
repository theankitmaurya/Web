import React from "react";

import { FollowedData } from "../../../Data/FollowedData";

const Followed = () => {
  return (
    <div className="w-full rounded-[0.7rem] gap-4 flex flex-col bg-[#282828] pl-[10px] pb-4 pt-2 mb-4">
      <div className="flex items-center justify-between">
        <div className="font-bold">
          <h3>Followed</h3>
        </div>
        <div className="w-[75px] gap-8 text-[#fffc54] mr-0 items-center justify-center text-[10px] cursor-pointer">
          View More
        </div>
      </div>

      {FollowedData.map((followed, id) => {
        return (
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-[10px]">
              <img
                src={followed.img}
                alt=""
                className="w-12 h-12 rounded-[18px]"
              />
              <div className="flex flex-col justify-center">
                <span>{followed.name}</span>
                <span className="text-[#828282]">@{followed.userId}</span>
              </div>
            </div>
            <button className="button text-13px] w-20 mr-[10px] bg-red-500">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Followed;

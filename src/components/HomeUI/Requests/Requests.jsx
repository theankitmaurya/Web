import React from "react";

import { RequestedData } from "../../../Data/RequestedData";

const Requests = () => {
  return (
    <div className="w-full rounded-[0.7rem] gap-4 flex flex-col bg-[#282828] pl-[10px] pb-4 pt-2 mb-4">
      <div className="flex items-center justify-between">
        <div className="font-bold">
          <h3>Requests</h3>
        </div>
        <div className="w-[75px] gap-8 text-[#fffc54] mr-0 items-center justify-center text-[10px] cursor-pointer">
          View More
        </div>
      </div>

      {RequestedData.map((requested, id) => {
        return (
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-[10px]">
              <img
                src={requested.img}
                alt=""
                className="w-12 h-12 rounded-[18px]"
              />
              <div className="flex flex-col justify-center">
                <span>{requested.name}</span>
                <span className="text-[#828282]">@{requested.userId}</span>
              </div>
            </div>
            <div className="flex items-center justify-center mr-2 gap-2">
              <button className="button text-[13px] w-16 bg-[#fffc54]">
                Accept
              </button>
              <button className="button text-[13px] w-16 bg-red-500">
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

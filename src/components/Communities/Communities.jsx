import React from "react";
import Search from "../../assets/search.png";
import AddNew from "../../assets/addnew.png";

import { Community } from "../../Data/CommunityData";

const Communities = () => {
  return (
    <div className="w-full rounded-xl gap-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="font-bold">
          <h3>Communities</h3>
        </div>
        <div className="flex items-end justify-between cursor-pointer gap-8 mr-[15px]">
          <img src={Search} alt="" className="w-6"/>
          <img src={AddNew} alt="" className="w-6"/>
        </div>
      </div>

      {Community.map((community, id) => {
        return (
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2.5">
              <img src={community.img} alt="" className="communityImage w-20 h-20 rounded-3xl border-4 border-[#282828]" />
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold">{community.name}</span>
                <span className="text-[#828282]">{community.friendsIn}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Communities;

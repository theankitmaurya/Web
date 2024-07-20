import "./Communities.css";
import React from "react";
import Search from "../../assets/search.png";
import AddNew from "../../assets/addnew.png";

import { Community } from "../../Data/CommunityData";

const Communities = () => {
  return (
    <div className="communities">
      <div className="container">
        <div className="space">
          <h3>Communities</h3>
        </div>
        <div className="box">
          <img src={Search} alt="" />
          <img src={AddNew} alt="" />
        </div>
      </div>

      {Community.map((community, id) => {
        return (
          <div className="community">
            <div>
              <img src={community.img} alt="" className="communityImage" />
              <div className="communityDesc">
                <span>{community.name}</span>
                <span>{community.friendsIn}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Communities;

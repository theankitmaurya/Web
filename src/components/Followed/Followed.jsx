import "./Followed.css";
import React from "react";

import { FollowedData } from "../../Data/FollowedData";

const Followed = () => {
  return (
    <div className="followed">
      <div className="container">
        <div className="space">
          <h3>Followed</h3>
        </div>
        <div className="box">View More</div>
      </div>

      {FollowedData.map((followed, id) => {
        return (
          <div className="followedPerson">
            <div>
              <img src={followed.img} alt="" className="followedImage" />
              <div className="followedDesc">
                <span>{followed.name}</span>
                <span>@{followed.userId}</span>
              </div>
            </div>
            <button className="button remove-btn">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Followed;

import "./Followers.css";
import React from "react";

import { Follower } from "../../Data/FollowersData";

const Followers = () => {
  return (
    <div className="followers">
      <div className="container">
        <div className="space">
          <h3>Followers</h3>
        </div>
        <div className="box">View More</div>
      </div>

      {Follower.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImage" />
              <div className="followerDesc">
                <span>{follower.name}</span>
                <span>@{follower.userId}</span>
              </div>
            </div>
            <button className="button message-btn">Message</button>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;

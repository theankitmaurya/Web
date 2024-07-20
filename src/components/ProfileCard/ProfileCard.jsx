import React from "react";
import "./ProfileCard.css";
import Cover from "../../assets/circle.jpg";
import Profile from "../../assets/profileimg.jpg";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="followStatus">
        <div>
          <div className="follow">
            <span>1984</span>
            <span>Followers</span>
          </div>
          <div className="follow">
            <span>2001</span>
            <span>Following</span>
          </div>
        </div>
      </div>

      <div className="profileName">
        <span>Evgen Ledo</span>
        <span>@ledoteam</span>
      </div>

      <div className="profileBio">
        <span>🌟Hello, I'm UX/UI designer. Open to the new projects.🌟</span>
      </div>

      <div className="divide">
        <hr />
      </div>

      <span>
        My Profile
      </span>
    </div>
  );
};

export default ProfileCard;

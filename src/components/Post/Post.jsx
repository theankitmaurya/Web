import "./Post.css";
import React from "react";
import HeartFill from "../../assets/heartfill.png";
import HeartHollow from "../../assets/hearthollow.png";
import Comment from "../../assets/chatfill.png";
import Share from "../../assets/share.png";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.posted} alt="" />
      <div className="fix">
        <div className="center">
          <div className="personId">
            <span>@{data.userId}</span>
            <img src={data.tick} alt="" />
          </div>
          <div className="personName">
            <span>{data.name}</span>
            <span>{data.time}</span>
          </div>
        </div>
      </div>
      <div className="postDetails">
        <span>{data.desc}</span>
      </div>
      <div className="postImg">
        <img src={data.img} alt="" />
      </div>
      <div className="postReaction">
        <div>
          <img src={data.liked ? HeartFill : HeartHollow} alt="" />
          <img src={Comment} alt="" />
          <img src={Share} alt="" />
        </div>
        <div className="button">Hire Me</div>
      </div>
    </div>
  );
};

export default Post;

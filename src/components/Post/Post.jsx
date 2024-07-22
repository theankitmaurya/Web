import React from "react";
import HeartFill from "../../assets/heartfill.png";
import HeartHollow from "../../assets/hearthollow.png";
import Comment from "../../assets/chatfill.png";
import Share from "../../assets/share.png";

const Post = ({ data }) => {
  return (
    <div className="inline-block justify-center items-center p-4 bg-[#282828] rounded-[20px] gap-4">
      <img src={data.posted} alt="" className="float-left w-12 h-12 border-[3px] border-[#1a1a1a] rounded-[18px] mr-4"/>
      <div className="flex flex-col">
        <div className="p-[10px] text-[14px] border-none outline-none rounded-[18px] flex items-start flex-col">
          <div className="flex items-center text-[#828282] gap-[5px]">
            <span>@{data.userId}</span>
            <img src={data.tick} alt="" className="w-6 h-6"/>
          </div>
          <div className="inline-block">
            <span>{data.name}</span>
            <span className="ml-[18px] text-[#fffc54]">{data.time}</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <span>{data.desc}</span>
      </div>
      <div>
        <img src={data.img} alt="" className="w-full h-full object-cover rounded-[10px] mb-4"/>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={data.liked ? HeartFill : HeartHollow} alt="" className="w-6 h-6"/>
          <img src={Comment} alt="" className="w-6 h-6"/>
          <img src={Share} alt="" className="w-6 h-6"/>
        </div>
        <div className="button flex">Hire Me</div>
      </div>
    </div>
  );
};

export default Post;

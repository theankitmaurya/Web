import React, { useState, useRef } from "react";
import ProfileImage from "../../assets/profileimg.jpg";
import Photo from "../../assets/photo.png";
import Video from "../../assets/video.png";
import Poll from "../../assets/poll.png";
import Schedule from "../../assets/schedule.png";
import Close from "../../assets/close.png";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="hidden md:flex gap-4 bg-[#282828] p-4 rounded-3xl">
      <img
        src={ProfileImage}
        alt=""
        className="w-12 h-12 border-[3px] border-[#1a1a1a] rounded-[18px]"
      />
      <div className="flex flex-col w-[90%] gap-4">
        <input
          type="text"
          placeholder="Tell your friends about your thoughts..."
          className="p-[10px] text-[14px] border-none outline-none rounded-[18px] bg-[#1a1a1a]"
        />
        <div className="flex justify-around">
          <div
            className="w-40 h-10 p-[5px] pl-[10px] pr-[10px] rounded-3xl flex items-center justify-center bg-[#1a1a1a] hover:cursor-pointer"
            onClick={() => imageRef.current.click()}
          >
            <img src={Photo} alt="" className="w-6 h-6 mr-1" />
            Photo
          </div>
          <div
            className="w-40 h-10 p-[5px] pl-[10px] pr-[10px] rounded-3xl flex items-center justify-center bg-[#1a1a1a] hover:cursor-pointer"
            onClick={() => imageRef.current.click()}
          >
            <img src={Video} alt="" className="w-6 h-6 mr-1" />
            Video
          </div>
          <div
            className="w-40 h-10 p-[5px] pl-[10px] pr-[10px] rounded-3xl flex items-center justify-center bg-[#1a1a1a] hover:cursor-pointer"
            onClick={() => imageRef.current.click()}
          >
            <img src={Poll} alt="" className="w-6 h-6 mr-1" />
            Poll
          </div>
          <div
            className="w-40 h-10 p-[5px] pl-[10px] pr-[10px] rounded-3xl flex items-center justify-center bg-[#1a1a1a] hover:cursor-pointer"
            onClick={() => imageRef.current.click()}
          >
            <img src={Schedule} alt="" className="w-6 h-6 mr-1" />
            Schedule
          </div>
          <div style={{ display: "none" }} onChange={onImageChange}>
            <input type="file" name="myimage" ref={imageRef} />
          </div>
        </div>
        {image && (
          <div className="relative">
            <img
              src={Close}
              alt=""
              onClick={() => setImage(null)}
              className="h-6 w-6 absolute right-4 top-2 cursor-pointer"
            />
            <img
              src={image.image}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;

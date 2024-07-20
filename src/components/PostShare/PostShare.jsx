import "./PostShare.css";
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
    <div className="postShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input
          type="text"
          placeholder="Tell your friends about your thoughts..."
        />
        <div className="shareOptions">
          <div className="option" onClick={() => imageRef.current.click()}>
            <img src={Photo} alt="" />
            Photo
          </div>
          <div className="option" onClick={() => imageRef.current.click()}>
            <img src={Video} alt="" />
            Video
          </div>
          <div className="option" onClick={() => imageRef.current.click()}>
            <img src={Poll} alt="" />
            Poll
          </div>
          <div className="option" onClick={() => imageRef.current.click()}>
            <img src={Schedule} alt="" />
            Schedule
          </div>
          <div style={{ display: "none" }} onChange={onImageChange}>
            <input type="file" name="myimage" ref={imageRef} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <img src={Close} alt="" onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;

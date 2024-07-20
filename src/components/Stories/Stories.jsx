import "./Stories.css";
import React from "react";

import { Story } from "../../Data/StoryData";

const Stories = () => {
  return (
    <div className="stories">
      {Story.map((story, id) => {
        return (
          <div className="story">
            <div>
              <img src={story.img} alt="" className="storyImage" />
              <div className="personName">
                <span>{story.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;

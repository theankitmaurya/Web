import React from "react";

import { Story } from "../../../Data/StoryData";

const Stories = () => {
  return (
    <div className="w-full gap-4 hidden md:flex items-center justify-center rounded-xl">
      {Story.map((story, id) => {
        return (
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between items-center gap-[10px]">
              <img
                src={story.img}
                alt=""
                className="w-[5.5rem] h-24 p-1 cursor-pointer rounded-3xl border-2 border-yellow"
              />
              <div className="flex flex-col items-center justify-center">
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

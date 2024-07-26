import React from "react";
import Edit from "../../../assets/edit.png";

const Bio = () => {
  return (
    <div className="flex flex-col gap-3 bg-grey p-4 rounded-2xl w-[90%]">
      <div className="flex justify-between items-center">
        <h3>Your Bio</h3>
        <img src={Edit} alt="" className="w-5 h-5 cursor-pointer" />
      </div>

      <div className="bioInfo">
        <span>
          <b>Lives In </b>
        </span>
        <span>Multan</span>
      </div>
      <div className="bioInfo">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="bioInfo">
        <span>
          <b>Works At </b>
        </span>
        <span>India</span>
      </div>
    </div>
  );
};

export default Bio;

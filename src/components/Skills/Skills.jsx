// import "./Skills.css";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full rounded-xl flex flex-col gap-4">
      <div className="font-bold">
        <h3>Skills</h3>
      </div>
      <div className="relative gap-4 rounded-3xl">
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          UX Design
        </span>
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          Copywriting
        </span>
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          Mobile
        </span>
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          Research
        </span>
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          User Interview
        </span>
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          JS
        </span>
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          Logo
        </span>
        <span className="inline-block rounded-3xl cursor-pointer text-center w-[150px] h-10 bg-[#282828] mr-2.5 mb-2.5 pt-2">
          Photoshop
        </span>
      </div>
    </div>
  );
};

export default Skills;

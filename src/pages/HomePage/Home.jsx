import React from "react";
import LeftHomePage from "../../components/LeftHomePage/LeftHomePage";
import RightHomePage from "../../components/RightHomePage/RightHomePage";
import MiddleHomePage from "../../components/MiddleHomePage/MiddleHomePage";

const Home = () => {
  return (
    <div className="relative grid grid-cols-[20rem_auto_20rem] gap-4">
      <LeftHomePage />
      <MiddleHomePage />
      <RightHomePage />
    </div>
  );
};

export default Home;

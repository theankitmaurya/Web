import React from "react";
import "./Home.css";
import LeftHomePage from "../../components/LeftHomePage/LeftHomePage";
import RightHomePage from "../../components/RightHomePage/RightHomePage";
import MiddleHomePage from "../../components/MiddleHomePage/MiddleHomePage";

const Home = () => {
  return (
    <div className="home">
      <LeftHomePage />
      <MiddleHomePage />
      <RightHomePage />
    </div>
  );
};

export default Home;

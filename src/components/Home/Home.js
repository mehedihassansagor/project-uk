import React from "react";
import MainPart from "../MainPart/MainPart";
import SideBar from "../SideBar/SideBar";
import ClickT from "../ClickT/ClickT"
const Home = () => {
  return (
    <div className="row container" >
      <div className="col-md-5">
        <SideBar />
      </div>
      <div className="col-md-1">

      </div>
      <div className="col-md-6">
        <MainPart />
      </div>
      
    </div>
  );
};

export default Home;

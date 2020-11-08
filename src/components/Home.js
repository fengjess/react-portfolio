import React from "react";
import "../style/Home.css";
import Pic from "../images/jessfeng.JPG";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">Jessica Feng</h1>
      <div className="mypic">
      <img src={Pic} alt='headshot' width="345" height="420" />
      </div>
      <h3 className="subheading">University of Washington Coding Bootcamp</h3>
    </div>
  );
};

export default Home;
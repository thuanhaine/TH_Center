import React from "react";
import "./Maindash.scss";
import Cards from "./cards/Cards";
function Maindash() {
  return (
    <div className="maindash">
      <div className="left">
        <h1 className="title">Dashboard</h1>
        <Cards />
        <h2 className="subtitle">Rank Student</h2>
        <div className="rank"></div>
      </div>
      <div className="right">
        <h3>Events</h3>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default Maindash;

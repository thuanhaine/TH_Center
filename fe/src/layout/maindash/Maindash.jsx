import React from "react";
import "./Maindash.scss";
import Cards from "./cards/Cards";
import Rank from "./rank/Rank";
import Update from "./update/Update";

function Maindash() {
  return (
    <div className="maindash">
      <div className="left">
        <h1 className="title">Dashboard</h1>
        <Cards />
        <h2 className="subtitle">Rank Student</h2>
        <div className="rank">
          <Rank />
        </div>
      </div>
      <div className="right">
        <h2>Update</h2>
        <Update />
      </div>
    </div>
  );
}

export default Maindash;

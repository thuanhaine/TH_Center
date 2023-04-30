import React from "react";
import "./Card.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Card({ data }) {
  return (
    <div
      className="compactCard"
      style={{
        background: data.color.backGroundColor,
        boxShadow: data.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar value={data.barValue} text={`${data.barValue}%`} />
        <p className="title">
          {data.year}-{data.year + 1}
        </p>
      </div>
      <div className="detail">
        <span>{data.value}/30</span>
        <data.icon className="icon" />
      </div>
    </div>
  );
}

export default Card;

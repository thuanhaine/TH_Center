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
        <p className="title">{data.title}</p>
      </div>
      <div className="detail">
        <data.icon className="icon" />
        <span>{data.value}/30</span>
        <p>{data.time}</p>
      </div>
    </div>
  );
}

export default Card;

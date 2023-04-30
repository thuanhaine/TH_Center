import React from "react";
import "./Rank.scss";
import { BiUserCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

function Rank() {
  return (
    <div className="rank">
      <ul className="header">
        <li className="item">
          <strong>Name of Student</strong>
        </li>
        <li className="item">
          <strong>Age</strong>
        </li>
        <li className="item">
          <strong>Class</strong>
        </li>
        <li className="item">
          <strong>Score</strong>
        </li>
        <li className="item">
          <strong>Like</strong>
        </li>
      </ul>
      <ul className="listStudent">
        <li className="student-list">
          <div className="item">
            <BiUserCircle className="img" />
            Name of Student
          </div>
          <span className="item">Age</span>
          <span className="item">Class</span>
          <span className="item">Score</span>
          <span className="item">
            {" "}
            100
            <AiFillHeart className="icon" />
          </span>
        </li>
        <li className="student-list">
          <div className="item">
            <BiUserCircle className="img" />
            Name of Student
          </div>
          <span className="item">Age</span>
          <span className="item">Class</span>
          <span className="item">Score</span>
          <span className="item">
            {" "}
            100
            <AiFillHeart className="icon" />
          </span>
        </li>
        <li className="student-list">
          <div className="item">
            <BiUserCircle className="img" />
            Name of Student
          </div>
          <span className="item">Age</span>
          <span className="item">Class</span>
          <span className="item">Score</span>
          <span className="item">
            {" "}
            100
            <AiFillHeart className="icon" />
          </span>
        </li>
        <li className="student-list">
          <div className="item">
            <BiUserCircle className="img" />
            Name of Student
          </div>
          <span className="item">Age</span>
          <span className="item">Class</span>
          <span className="item">Score</span>
          <span className="item">
            {" "}
            100
            <AiFillHeart className="icon" />
          </span>
        </li>
        <li className="student-list">
          <div className="item">
            <BiUserCircle className="img" />
            Name of Student
          </div>
          <span className="item">Age</span>
          <span className="item">Class</span>
          <span className="item">Score</span>
          <span className="item">
            {" "}
            100
            <AiFillHeart className="icon" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Rank;

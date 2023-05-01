import React from "react";
import "./Student.scss";
import Subbar from "../component/subbar/Subbar";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
function Student() {
  return (
    <div className="student">
      <h1 className="title">Student</h1>
      <Subbar />

      <div className="table">
        <ul className="header">
          <li className="item">Name of Student</li>
          <li className="item">Age</li>
          <li className="item">Phone</li>
          <li className="item">Day Start</li>
          <li className="item">Average</li>
        </ul>
        <ul className="list">
          <li className="content">
            <div className="item">
              <BiUserCircle className="img" />
              <span>Name of Student</span>
            </div>
            <span className="item">Age</span>
            <span className="item">Phone</span>
            <span className="item">Day Start</span>
            <div className="item">8.5</div>
          </li>
        </ul>

        <div className="controller">
          <AiOutlineArrowUp className="icon-up" />
          <span className="text">1</span>
          <AiOutlineArrowDown className="icon-down" />
        </div>
      </div>
    </div>
  );
}

export default Student;

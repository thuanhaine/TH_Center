import React from "react";
import "./Teacher.scss";
import Subbar from "../component/subbar/Subbar";
import { BiUserCircle, BiMessageDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

function Teacher() {
  return (
    <div className="teacher">
      <h1 className="title">Teacher</h1>
      <Subbar />
      <div className="table">
        <ul className="header">
          <li className="item">Name of Teacher</li>
          <li className="item">Age</li>
          <li className="item">Phone</li>
          <li className="item">Day Start</li>
          <li className="item">Actions</li>
        </ul>
        <ul className="list">
          <li className="content">
            <div className="item">
              <BiUserCircle className="img" />
              <span>Name of Teacher</span>
            </div>
            <span className="item">Age</span>
            <span className="item">Phone</span>
            <span className="item">Day Start</span>
            <div className="item">
              <FiMail className="icon" />
              <BiMessageDetail className="icon" />
            </div>
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

export default Teacher;

import React from "react";
import "./Subbar.scss";
import { BiSearchAlt } from "react-icons/bi";
import { TbFilter } from "react-icons/tb";
import { AiOutlineSortAscending } from "react-icons/ai";

function Subbar() {
  return (
    <div className="subbar">
      <div className="actions">
        <div className="box">
          <TbFilter className="icon" />
          <span>Filter</span>
        </div>
        <div className="box">
          <AiOutlineSortAscending className="icon" />
          <span>Sort by a - z</span>
        </div>
      </div>
      <div className="search-box">
        <BiSearchAlt className="icon" />
        <input type="text" />
      </div>
    </div>
  );
}

export default Subbar;

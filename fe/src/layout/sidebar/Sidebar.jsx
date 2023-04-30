import React from "react";
import "./Sidebar.scss";
import LogoImg from "../../img/logo/logo_remove.png";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  DataSidebar_Admin,
  DataSidebar_Teacher,
  DataSidebar_Student,
} from "./data";
import { useState } from "react";
function Sidebar() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={LogoImg} alt="" className="img" />
        <div className="text">
          <span className="first">TH</span>
          <span>CENTER</span>
        </div>
      </div>
      {/* Menu */}
      <div className="menu">
        {DataSidebar_Admin.map((item, index) => {
          return (
            <Link
              to={item.path}
              className={selected == index ? "item active" : "item"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div>{item.icon}</div>
              <span>{item.title}</span>
            </Link>
          );
        })}

        <div className="logout">
          <AiOutlineLogout />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

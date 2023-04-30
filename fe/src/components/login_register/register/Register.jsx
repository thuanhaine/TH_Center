import "./Register.scss";
import Logo from "../logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
function Register() {
  const [optionsRole, setOptionsRole] = useState("student");

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="register">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" className="img" />
          </div>
          <div className="options-role">
            <p className="text">Register For?</p>
            <div className="box">
              <div
                className={optionsRole == "student" ? "btn active" : "btn"}
                onClick={() => setOptionsRole("student")}
              >
                <input
                  type="radio"
                  value="student"
                  checked={optionsRole == "student"}
                />
                <span>Student</span>
              </div>
              <div
                className={optionsRole == "teacher" ? "btn active" : "btn"}
                onClick={() => setOptionsRole("teacher")}
              >
                <input
                  type="radio"
                  value="teacher"
                  checked={optionsRole == "teacher"}
                />
                <span>Teacher</span>
              </div>
            </div>
          </div>

          <form className="form">
            <div className="box">
              <p className="text">Full Name</p>
              <input type="text" />
              <BiUserCircle className="icon"></BiUserCircle>
            </div>
            <div className="box">
              <p className="text">Email</p>
              <input type="text" />
              <AiOutlineMail className="icon"></AiOutlineMail>
            </div>
            <div className="box">
              <p className="text">Phone Number</p>
              <input type="number" />
              <BsPhone className="icon" />
            </div>
            <div className="box">
              <p className="text">Password</p>
              <input type="password" />
              <AiFillLock className="icon" />
            </div>
            <div className="box">
              <p className="text">Confirm Password</p>
              <input type="password" />
              <AiFillLock className="icon" />
            </div>
            <div className="box">
              <span>Login account </span>
              <Link to="/login">Here</Link>
            </div>
            <div>
              <button className="btn" onClick={handleRegister}>
                register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

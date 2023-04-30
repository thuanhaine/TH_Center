import "./Login.scss";
import Logo from "../logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
function Login() {
  const [optionsRole, setOptionsRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" className="img" />
          </div>
          <div className="options-role">
            <p className="text">Login For?</p>
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
              <p className="text">Email</p>
              <input type="text" placeholder="Enter your Email" />
              <AiOutlineMail className="icon"></AiOutlineMail>
            </div>
            <div className="box">
              <p className="text">Password</p>
              <input type="password" placeholder="Enter your Password" />
              <AiFillLock className="icon" />
            </div>
            <div className="box">
              <span>Create account </span>
              <Link to="/register">Here</Link>
            </div>
            <div>
              <button className="btn" onClick={handleLogin}>
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

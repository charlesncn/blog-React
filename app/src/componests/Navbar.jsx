import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/new">New</Link>
            <Link to="/login">Login</Link>
            <span>Njuguna</span>
          </div>

          <div className="tags">
            <Link to="/?tag=latest">
              <h4>Latest</h4>
            </Link>
            <Link to="/?tag=tech">
              <h4>Tech</h4>
            </Link>
            <Link to="/?tag=iot">
              <h4>IoT</h4>
            </Link>
            <Link to="/?tag=ai">
              <h4>AI</h4>
            </Link>
            <Link to="/?tag=machine-learning">
              <h4>Machine Learning</h4>
            </Link>
            <Link to="/?tag=smartphone">
              <h4>Smartphones</h4>
            </Link>
            <Link to="/?tag=gadgets">
              <h4>Gadgets</h4>
            </Link>
            <Link to="/?tag=others">
              <h4>Others</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

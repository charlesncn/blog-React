import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={Logo} alt="" />{" "}
        </Link>
      </div>
      <div className="message">
        <form>
          <span>Leave a Message</span>
          <input type="text" placeholder="Enter your email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <div className="btns">
            <button>Send</button>
            <button>Discard</button>
          </div>
        </form>
      </div>
      <div className="socialmedia">
        <ul>
          <li>
            <Link to="" />
            Github
          </li>
          <li>
            <Link to="" />
            Linkedin
          </li>
          <li>
            <Link to="" />
            Website
          </li>
          <li>
            <Link to="" />
            Stackoverflow
          </li>
          <li>
            <Link to="" />
            Instagram
          </li>
        </ul>
      </div>
      <p>
        © 2021 All rights reserved. Designed by <a href="https://github.com/charlesncn">Njuguna</a>
      </p>
    </div>
  );
}

export default Footer;

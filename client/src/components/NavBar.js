import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to="/"
          className="brand-logo"
        >
          Super Chefs
        </Link>
        <ul
          id="nav-mobile"
          className="right hide-on-med-and-down"
        >
          <li>
            <Link to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/MyProfile">
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/CreatePost">
              Create Post
            </Link>
          </li>
          <li>
            <Link to="/SignIn">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/Register">
              Register
            </Link>
          </li>
          
         
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;

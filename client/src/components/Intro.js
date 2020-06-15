import React from "react";
import { Link } from "react-router-dom";
import register from "./img/register.jpg";
import home from "./img/pizza.jpg";
import signIn from "./img/buche.jpg";
import myprofile from "./img/passion.jpg";
import "./Intro.css";
const Intro = () => {
  return (
    <div className="slider ">
      <ul className="slides">
        <li>
          <img src={register} alt="" />
          <div className="caption right-align">
            <Link to="/Register">
              <h3>Sign Up Here</h3>
              <h5 className=" slogan">
                Be our next Chef!
              </h5>
            </Link>
          </div>
        </li>
        <li>
          <img src={home} alt="" />
          <div className="caption left-align">
            <Link to="/SignIn">
              <h3>Sign In Here</h3>
              <h5 className="slogan">
                Hey Chef!
              </h5>
            </Link>
          </div>
        </li>
        <li>
          <img src={register} alt="" />
          <div className="caption right-align">
            <Link to="/CreatePost">
              <h3>Create a post</h3>
              <h5 className=" slogan">
                Publish your recipe !
              </h5>
            </Link>
          </div>
        </li>
        <li>
          <img src={signIn} alt="" />
          <div className="caption right-align">
            <Link to="/Home">
              <h3>
                Chefs are here for you !
              </h3>
              <h5 className="slogan">
                Here're new recipes
              </h5>
            </Link>
          </div>
        </li>
        <li>
          <img src={myprofile} alt="" />
          <div className="caption center-align">
            <Link to="/MyProfile">
              <h3>Visit My Profile</h3>
              <h5 className="light slogan">
                Show my posts
              </h5>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Intro;

import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div className="card auth-card center input-field ">
      <h2>Super Chefs</h2>
      <input 
        placeholder="email"
        type="text"
      />
      <input 
        placeholder="password"
        type="text"
      />
      <button className="btn waves-effect waves-light">
        {" "}
        Sign In
      </button>
      <Link to="/register">
        <h6>
          Need to have an account?
        </h6>
      </Link>
    </div>
  );
};
export default SignIn;

import React from "react";
import profile from "../img/chef1.jpg";
import buche from "../img/buche.jpg";
import "./MyProfile.css";
const MyProfile = () => {
  return (
    <div>
      <div className="profile">
        <img
          className="materialboxed chef"
          alt=""
          src={profile}
        />
        <div className="Prfl-description">
          <h3>Ikram Belhouchet</h3>
          <div>
            <h4>100 Folllowers</h4>
            <h4>100 Following</h4>
            <h4>100 published items</h4>
          </div>
        </div>
      </div>
      <div className="published-items">
        <img
          className="item"
          alt=""
          alt=""
          src={buche}
        />
        <img
          className="item"
          alt=""
          src={buche}
        />
        <img
          className="item"
          alt=""
          src={buche}
        />
        <img
          className="item"
          alt=""
          src={buche}
        />
        <img
          className="item"
          alt=""
          src={buche}
        />
        <img
          className="item"
          alt=""
          src={buche}
        />
        <img
          className="item"
          alt=""
          src={buche}
        />
        <img
          className="item"
          alt=""
          src={buche}
        />
      </div>
    </div>
  );
};
export default MyProfile;

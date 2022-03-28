import React from "react";

import Avatar from "./Avatar";
import "./Header.css";
import UserImage from "../../Assets/User-Profile-PNG.png";
const Header = (props) => {
  return (
    <div className="header">
      <div className="menu-logo">
        <button
          className="main-navigation__menu-btn"
          onClick={props.onMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="logo">GIPP</div>
      </div>

      <div className="user-profile">
        <div className="profile-avatar">
          <Avatar image={UserImage} alt="User profile image" />
        </div>
        <span>John Smith</span>
      </div>
    </div>
  );
};

export default Header;

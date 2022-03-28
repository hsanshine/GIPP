import React from "react";

import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
  faSuitcase,
  faPeopleGroup,
  faChartLine,
  faFile,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";
const Nav = (props) => {
  const history = useHistory();
  const handleLogOut = () => {
    history.push("/login");
  };
  return (
    <ul className="nav-list">
      <NavLink to="/dashboard" className="nav-list__item">
        <FontAwesomeIcon icon={faGrip} />
        <span> Dashboard</span>
      </NavLink>
      <NavLink to="/reports" className="nav-list__item">
        {" "}
        <FontAwesomeIcon icon={faFile} />
        <span>Reports</span>
      </NavLink>
      <NavLink to="/members" className="nav-list__item">
        {" "}
        <FontAwesomeIcon icon={faPeopleGroup} />
        <span> Members</span>
      </NavLink>
      <NavLink to="/attendance" className="nav-list__item">
        {" "}
        <FontAwesomeIcon icon={faChartLine} />
        <span> Attendance</span>
      </NavLink>
      <NavLink to="/resources" className="nav-list__item">
        {" "}
        <FontAwesomeIcon icon={faSuitcase} />
        <span>Resources</span>
      </NavLink>
      <NavLink to="/settings" className="nav-list__item">
        {" "}
        <FontAwesomeIcon icon={faGear} />
        <span>Settings </span>
      </NavLink>
      <button to="/logout" className="nav-btn nav-list__item">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span onClick={handleLogOut}>Sign Out</span>
      </button>
    </ul>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logosection">
        <div className="navbar-brand">
          <div>
            <Link to="/">
              <img
                className="navbar-logo-img"
                // src="/images/uno-icon-color.png"
                src="/img/header/logo.png"
                alt="UNO logo"
              />
            </Link>
          </div>
          <div className="navbar-lab-name">Kiran Bastola</div>
        </div>
      </div>
      <div className="navbar-nav">
        <ul className="navbar-list">
          <li className="navbar-listitem">
            <Link to="/cafi">Cafi</Link>
          </li>
          <li className="navbar-listitem">
            <Link to="/research">Research</Link>
          </li>
          <li className="navbar-listitem">
            <Link to="/publication">Publication</Link>
          </li>
          <li className="navbar-listitem">
            <Link to="/teaching">Teaching</Link>
          </li>
          <li className="navbar-listitem">
            <Link to="/lab-members">Members</Link>
          </li>
          <li className="navbar-listitem">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

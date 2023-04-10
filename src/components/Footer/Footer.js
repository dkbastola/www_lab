import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav-section">
        <ul className="footer-nav-list">
          <li className="footer-nav-listitem">
            <Link style={{ borderLeft: "1px solid #f2f2f2" }} to="/cafi">
              Cafi
            </Link>
          </li>
          <li className="footer-nav-listitem">
            <Link to="/research">Research</Link>
          </li>{" "}
          <li className="footer-nav-listitem">
            <Link to="/publication">Publication</Link>
          </li>
          <li className="footer-nav-listitem">
            <Link to="/teaching">Teaching</Link>
          </li>
          <li className="footer-nav-listitem">
            <Link to="/lab-members">Members</Link>
          </li>
          <li className="footer-nav-listitem">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-img-section">
        <img
          src="https://www.unomaha.edu/_files/images/footer-skyline.png"
          alt="Omaha Skyline"
        />
      </div>
    </div>
  );
}

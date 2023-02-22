import React from "react";
import { Link } from "react-router-dom";

import publication from "../../data/publication";
import "./Publication.css";

export default function Publication() {
  return (
    <div className="publication">
      <div className="publication-header">
        <div className="publication-header-heading">
          <div className="publication-title">
            <h1>My Publications</h1>
            <p>
              So you are interested in my publication? Check out the most recent
              publications down below!
            </p>
          </div>
        </div>
      </div>
      <div className="publication-list-section">
        <h3 className="publication-list-header">Recent Publication</h3>
        <ul className="publication-list">
          {publication.map(({ id, title, desc, link }) => {
            return (
              <li key={id} className="publication-listitem">
                {link ? (
                  <Link to={link}>
                    <h3 className="publication-topic">{title}</h3>
                  </Link>
                ) : (
                  <h3 className="publication-topic">{title}</h3>
                )}
                <p className="publication-desc">{desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

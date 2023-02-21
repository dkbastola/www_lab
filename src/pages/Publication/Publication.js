import React from "react";
import { Link } from "react-router-dom";

import publication from "../../data/publication";
import "./Publication.css";

export default function Publication() {
  return (
    <div className="publication">
      <div className="publication-header">
        <div className="publication-header-heading">
          Welcome to My Publication Page!
        </div>
      </div>
      <div className="publication-list-section">
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

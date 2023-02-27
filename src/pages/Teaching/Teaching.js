import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import teaching from "../../data/teaching";
import "./Teaching.css";

export default function Teaching() {
  return (
    <div className="teaching">
      <div className="teaching-header">
        <div className="teaching-header-heading">
          <div className="teaching-title">
            <h1>My Teaching Journey</h1>
            <p>Check out some of the courses I am teaching!</p>
          </div>
        </div>
      </div>
      <div className="teaching-list-section">
        <h3 className="teaching-list-header">Philosophy</h3>
        <div className="teaching-list-desc">
          <p>
            My teaching philosophy as well as my professional activity is built
            upon the following interrelated principles: vision, collaboration,
            active learning, critical thinking, feedback, and use of technology.
            Learning by doing active learning is especially relevant in
            bioinformatics, where the computational power of electronic media is
            applied to the intensely visual and dynamic life sciences. I firmly
            believe that, regardless of their chosen careers, students will
            achieve excellence and relevance by cultivating critical thinking
            skills. All the major changes in the course work that I have made
            reflect these values and provide students with more
            hands-on-exercises and challenge them with real life problems.
            Through such problem-based learning experience I hope to prepare
            them for the workplace. The Food Computer that I successfully built
            this year is particularly a good vehicle to engage students in
            bioinformatics research; for not only graduate students at UNO but
            also local students in high schools.
          </p>
        </div>
        <h3 className="teaching-list-header">Courses</h3>
        <ul className="teaching-list">
          {teaching.map(({ id, title, desc, link }) => {
            return (
              <li key={id} className="teaching-listitem">
                <Paper elevation={3} className="teaching-paper">
                  {link ? (
                    <Link to={link}>
                      <h3 className="teaching-topic">{title}</h3>
                    </Link>
                  ) : (
                    <h3 className="teaching-topic">{title}</h3>
                  )}
                  <p className="teaching-desc">{desc}</p>
                </Paper>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

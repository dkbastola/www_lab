import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// import teaching from "../../data/teaching";
import "./Teaching.css";

export default function Teaching() {
  return (
    <div className="teaching">
      <div className="teaching-header">
        <div className="teaching-header-heading">
          <div className="teaching-title">
            <h1>My teaching</h1>
            <p>
              So you are interested in my teaching? Check out the most recent
              teaching down below!
            </p>
          </div>
        </div>
      </div>
      <div className="teaching-list-section">
        <h3 className="teaching-list-header">Recent teaching</h3>
        <div className="teaching-list-desc">
          <p>
            The use of computing to manage, organize and analyze biological and
            clinical data has become very important element of biology and
            medical teaching. My current teaching in bioinformatics is rooted in
            an interdisciplinary content both in style and context due to my
            decade long professional career in a molecular biology laboratory. I
            bring my wide variety of teaching experience in the life sciences
            (plant, animal bacteria and virus molecular biology and
            biochemistry) into the classroom and into my teaching work in
            bioinformatics.
          </p>
          <p>
            One of the broad goals of my teaching work in biomedical informatics
            encompasses the study of information transmission and exchange in
            living systems, with a particular interest in mitochondria.
            Additionally, my collaborative translational teaching effort
            includes the study of effective communication methods between health
            service providers and patients with chronic diseases, such as
            diabetes, COPD and hypertension (common among the elderly
            population). We are currently evaluating the role of an information
            technology solution (telehealth) in the delivery of remote health
            services to further health care services to rural areas where
            traditional medicine is largely inaccessible.
          </p>
        </div>
        {/* <ul className="teaching-list">
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
        </ul> */}
      </div>
    </div>
  );
}

import { Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import research from "../../data/research";
import "./Research.css";

export default function Research() {
  return (
    <div className="research">
      <div className="research-header">
        <div className="research-header-heading">
          <div className="research-title">
            <h1>My Research</h1>
            <p>
              So you are interested in my research? Check out the most recent
              research down below!
            </p>
          </div>
        </div>
      </div>
      <div className="research-list-section">
        <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
          Recent Research
        </Typography>
        <div className="research-list-desc">
          <Typography variant="body1">
            The use of computing to manage, organize and analyze biological and
            clinical data has become very important element of biology and
            medical research. My current research in bioinformatics is rooted in
            an interdisciplinary content both in style and context due to my
            decade long professional career in a molecular biology laboratory. I
            bring my wide variety of research experience in the life sciences
            (plant, animal bacteria and virus molecular biology and
            biochemistry) into the classroom and into my research work in
            bioinformatics.
          </Typography>
          <Typography variant="body1" style={{ margin: "10px 0" }}>
            One of the broad goals of my research work in biomedical informatics
            encompasses the study of information transmission and exchange in
            living systems, with a particular interest in mitochondria.
            Additionally, my collaborative translational research effort
            includes the study of effective communication methods between health
            service providers and patients with chronic diseases, such as
            diabetes, COPD and hypertension (common among the elderly
            population). We are currently evaluating the role of an information
            technology solution (telehealth) in the delivery of remote health
            services to further health care services to rural areas where
            traditional medicine is largely inaccessible.
          </Typography>
        </div>
        <ul className="research-list">
          {research.map(({ id, title, desc, link }) => {
            return (
              <li key={id} className="research-listitem">
                <Paper elevation={3} className="research-paper">
                  {link ? (
                    <Link to={link}>
                      <Typography variant="h6">{title}</Typography>
                    </Link>
                  ) : (
                    <Typography variant="h6">{title}</Typography>
                  )}
                  <Typography variant="body1">{desc}</Typography>
                </Paper>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

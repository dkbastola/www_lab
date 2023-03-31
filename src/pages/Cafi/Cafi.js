import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import research from "../../data/research";
import publications from "../../data/publication";
import "./Cafi.css";

export default function Cafi() {
  return (
    <div className="cafi">
      <div className="cafi-header">
        <div className="cafi-header-heading">
          <div className="cafi-title">
            <h1>My Research</h1>
            <p>
              So you are interested in my research? Check out the most recent
              research down below!
            </p>
          </div>
        </div>
      </div>
      <div className="cafi-list-section">
        <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
          Recent Research
        </Typography>
        <div className="cafi-list-desc">
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
        <ul className="cafi-list">
          {research.map(({ id, title, desc, link, citations }) => {
            return <li key={id} className="cafi-listitem"></li>;
          })}
        </ul>
      </div>
      <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
        Old Publication
      </Typography>
      <div className="cafi-old-publication">
        {publications.map(
          (publication) =>
            publication.link && (
              <li className="cafi-old-publication-item" key={publication.title}>
                <Link to={publication.link}>
                  <Typography variant="h6" style={{ color: "#111" }}>
                    {publication.title}
                  </Typography>
                </Link>
              </li>
            )
        )}
      </div>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-img-section">
        <img
          src="/img/kiran/DRB_Mountain.jpg"
          className="about-img"
          alt="Dr. Bastola"
        />
      </div>
      <div className="about-bio-section">
        <div className="about-uno-section">
          <img className="about-uno-img" src="/images/uno-icon-color.png" />
          <div className="about-uno-dept">
            {/* <h2>University of Nebraska - Omaha </h2> */}
            <Typography variant="h4" style={{ margin: "10px 0" }}>
              University of Nebraska - Omaha
            </Typography>
            {/* <p>College of Information Science {"&"} Technology</p> */}
            <Typography variant="body1" style={{ margin: "10px 0" }}>
              College of Information Science {"&"} Technology
            </Typography>
          </div>
        </div>
        <div className="about-name-section">
          <h2>Kiran Bastola, Ph.D.</h2>
          <p>Professor</p>
          <p>Distinguished Professor of Information Science and Technology</p>
          <p>Doctoral Program Chair, Ph.D. BMI</p>
          <p>School of Interdisciplinary Informatics</p>
        </div>
        <div className="about-biography-section">
          {/* <h3>Biography</h3> */}
          <Typography variant="h5" style={{ margin: "10px 0" }}>
            Biography
          </Typography>
          <Typography
            variant="body1"
            style={{ margin: "10px 0", lineHeight: "1.3" }}
          >
            Dr. Bastola is a over 30-year veteran educator with diverse
            research, teaching and service experiences and expertise. He
            currently serves as the chair of doctoral program in Biomedical
            Informatics. He is also the recipient of number of awards including
            Outstanding Teaching, Graduate Mentor and endowed professorship
            (Charles W. and Marge H. Durham Distinguished Professor of
            Information Science and Technology). He has taught various courses
            in Bioinformatics at bachelors, masters and doctorate level and has
            supervised many graduate students (MS/Ph.D) research work in the
            Biomedical Informatics program seeing them to completion.{" "}
          </Typography>
          <Typography
            variant="body1"
            style={{ margin: "10px 0", lineHeight: "1.3" }}
          >
            Currently his research focus has been on understanding the details
            of tumorigenesis (especially in colon cancer) and using information
            technology to improve colon health, health outcomes through early
            detection and prevention. The vision that he has cultivated over the
            years has centered around leveraging technology (both computational
            and biological) to improve health outcomes, indoor farming, and
            community engagement. He contributes actively in several areas
            relating to chronic diseases including cancer, microbiome, consumer
            {"&"} public health informatics and the regulation of gene
            expression in a variety of living systems. He continues to bring his
            research experience into the classroom.{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
}

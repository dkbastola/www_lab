// import { Paper } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// import publication from "../../data/publication";
// import "./Publication.css";

// export default function Publication() {
//   return (
//     <div className="publication">
//       <div className="publication-header">
//         <div className="publication-header-heading">
//           <div className="publication-title">
//             <h1>My Publications</h1>
//             <p>
//               So you are interested in my publication? Check out the most recent
//               publications down below!
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="publication-list-section">
//         <h3 className="publication-list-header">Recent Publication</h3>
//         <ul className="publication-list">
//           {publication.map(({ id, title, desc, link }) => {
//             return (
//               <li key={id} className="publication-listitem">
//                 <Paper elevation={3} className="publication-paper">
//                   {link ? (
//                     <Link to={link}>
//                       <h3 className="publication-topic">{title}</h3>
//                     </Link>
//                   ) : (
//                     <h3 className="publication-topic">{title}</h3>
//                   )}
//                   <p className="publication-desc">{desc}</p>
//                 </Paper>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const publications = [
  {
    title:
      "Comprehension and data sharing behavior of Direct-To-Consumer genetic test customers",
    year: 2016,
    description:
      "The aim of this study was to evaluate current direct-to-consumer (DTC) genetic customers' ability to interpret and comprehend test results and to determine if honest brokers are needed. One hundred and twenty-two customers of the DTC genetic testing company 23andMe were polled in an online survey. Most of the subjects were able to correctly interpret the test cases, yet a majority did not share their results with a health-care professional. As the market for DTC genetic testing grows, test comprehension will become more critical. Involving more health professionals in this process may be necessary to ensure proper interpretations.",
  },
  {
    title:
      "Identifying enriched drug fragments as possible candidates for metabolic engineering",
    year: 2016,
    description:
      "Fragment-based approaches have now become an important component of the drug discovery process. In this study we introduce and discuss a computational pipeline to automatically extract statistically overrepresented chemical fragments in therapeutic classes, and search for similar fragments in a large database of natural products. By systematically identifying enriched fragments in therapeutic groups, we are able to extract and focus on few fragments that are likely to be active or structurally important. We show that several therapeutic classes (including antibacterial, antineoplastic, and drugs active on the cardiovascular system, among others) have enriched fragments that are also found in many natural compounds.",
  },
  {
    title:
      "Contribution of bioinformatics prediction in microRNA-based cancer therapeutics",
    year: 2015,
    description:
      "MicroRNAs (miRNAs) are small non-coding RNAs that serve to regulate gene expression. The discovery of deregulated miRNAs in cancer cells and tissues has led many to investigate the use of miRNAs as potential biomarkers for early detection, and as a therapeutic agent to treat cancer. Here we describe advancements in computational approaches to predict miRNAs and their targets, and discuss the role of bioinformatics in studying miRNAs in the context of human cancer.",
  },
  {
    title: "Publications from ACM and Affiliated Organizations",
    desc: "",
    link: "https://dl.acm.org/profile/99659404391",
  },
  {
    id: 5,
    title: "Publications listed in pubmed",
    desc: "",
    link: "http://tinyurl.com/bastola-bio",
  },
];

const Publication = ({ title, year, description }) => (
  <div style={{ marginBottom: "32px" }}>
    <Typography variant="h6">{title}</Typography>
    <Typography
      variant="subtitle1"
      color="textSecondary"
      style={{ marginBottom: "8px" }}
    >
      {year}
    </Typography>
    <Typography variant="body1">{description}</Typography>
  </div>
);

const Publications = () => (
  <Container maxWidth="md" style={{ marginTop: "32px", padding: "16px" }}>
    <Typography variant="h4" align="center" style={{ marginBottom: "32px" }}>
      Recent Publications
    </Typography>
    {publications.map(
      (publication) =>
        !publication.link && (
          <Publication {...publication} key={publication.title} />
        )
    )}
    <Typography variant="h4" align="center" style={{ marginBottom: "32px" }}>
      Old Publications
    </Typography>
    {publications.map(
      (publication) =>
        publication.link && (
          <Link to={publication.link}>
            <Publication {...publication} key={publication.title} />
          </Link>
        )
    )}
  </Container>
);

export default Publications;

import { Typography, Avatar } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import cafi from "../../../data/cafi";

import "./CafiDetails.css";

export default function CafiDetails() {
  const { id } = useParams();
  const { title, fullDesc, url } = cafi[id - 1];
  return (
    <div className="cafi-detail-section">
      <Typography
        className="cafi-detail-typo"
        style={{ paddingBottom: 0 }}
        variant="h4"
      >
        {title}
      </Typography>
      <Typography
        className="cafi-detail-typo"
        style={{ padding: "20px 0" }}
        variant="subtitle1"
      >
        <div className="cafi-author">
          <Avatar alt="Kiran Bastola" src="/images/avatar.png" /> Kiran Bastola
        </div>
      </Typography>
      <div className="cafi-detail-img-section">
        <img
          src={url}
          alt={title}
          className="cafi-detail-img"
          height={id === "5" ? "900" : "500"}
        />
      </div>
      <Typography className="cafi-detail-typo" variant="body1">
        <div
          dangerouslySetInnerHTML={{ __html: fullDesc }}
          className="cafi-details-fulldesc"
        ></div>
      </Typography>
    </div>
  );
}

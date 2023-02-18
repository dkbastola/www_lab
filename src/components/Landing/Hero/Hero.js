import React from "react";
import data from "../../../data/img";

export default function Hero() {
  return (
    <div className="hero">
      <>
        {data.map(({ id, url, title, desc }) => {
          return (
            <div className="hero-title-section">
              <img src={url} alt={title} />
              <p className="hero-title">{title}</p>
              <p className="hero-desc">{desc}</p>
            </div>
          );
        })}
      </>
    </div>
  );
}

import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../../../data/img";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={6000}
        transitionTime={1000}
      >
        {data.map(({ id, url, title, desc }) => {
          return (
            <div className="hero-title-section">
              <img className="hero-image" src={url} alt={title} />
              <div className="hero-text-section">
                <p className="hero-title">{title}</p>
                <p className="hero-desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

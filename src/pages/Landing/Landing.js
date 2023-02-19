import React from "react";
import About from "../../components/About/About";
import Hero from "../../components/Landing/Hero/Hero";

export default function Landing() {
  return (
    <div className="landing">
      <Hero />
      <About />
    </div>
  );
}

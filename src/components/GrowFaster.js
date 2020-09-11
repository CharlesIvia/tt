import React from "react";
import LearnMore from "./LearnMore";
import growth from "../assets/facebook/third.png";
import { Link, withRouter } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const GrowFaster = () => {
  const style = {
    textDecoration: "none",
    color: "lightcoral",
  };

  ScrollReveal().reveal(".faster-text", {
    origin: "left",
    duration: 1000,
    distance: "10rem",
    delay: 600,
  });
  ScrollReveal().reveal(".faster-img-div", {
    origin: "right",
    duration: 1000,
    distance: "10rem",
    delay: 600,
  });
  return (
    <div className="container anywhere anywhere-sec any">
      <div className="anywhere-text faster-text">
        <h1 className="anywhere-top">Grow Faster</h1>
        <p className="anywhere-para">
          Want easy-to-use marketing tools like Mailchimp, plus Google and
          Facebook advertising to grow your business fast? <br /> You got it.
        </p>
        <div>
          <Link to="/all-services" style={style}>
            <LearnMore />
          </Link>
        </div>
      </div>
      <div className="faster-img-div">
        <img
          className="faster-img"
          src={growth}
          alt="Analytics graph showing increase in sales"
        />
      </div>
    </div>
  );
};

export default withRouter(GrowFaster);

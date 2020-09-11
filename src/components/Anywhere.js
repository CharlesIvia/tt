import React from "react";
import LearnMore from "./LearnMore";
import all from "../assets/general/all.png";
import { Link, withRouter } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Anywhere = () => {
  const style = {
    textDecoration: "none",
    color: "lightcoral",
  };
  ScrollReveal().reveal(".any-img", {
    origin: "left",
    duration: 1000,
    distance: "10rem",
    delay: 400,
  });
  ScrollReveal().reveal(".any-txt", {
    origin: "right",
    duration: 1000,
    distance: "10rem",
    delay: 400,
  });
  return (
    <div className="container anywhere anywhere-first any">
      <div className="any-img">
        <img
          className="all-img"
          src={all}
          alt="Sun glasses on sale on google, facebook and mailchimp"
        />
      </div>
      <div className="anywhere-text any-txt">
        <h1 className="anywhere-top">Sell anywhere</h1>
        <p className="anywhere-para">
          We will set up your Online store to sell across a{" "}
          <strong>
            {" "}
            website, social media, marketplaces like Amazon, Jumia and live
            in-person.
          </strong>{" "}
          Get started with one, or try them all.
        </p>
        <div>
          <Link to="/all-services" style={style}>
            <LearnMore />
          </Link>
        </div>
      </div>
      <div className="a-img">
        <img
          className="all-img"
          src={all}
          alt="Sun glasses on sale on google, facebook and mailchimp"
        />
      </div>
    </div>
  );
};

export default withRouter(Anywhere);

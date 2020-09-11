import React from "react";
import technical from "../assets/general/technical.png";
import LearnMore from "./LearnMore";
import { Link, withRouter } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const SmallBiz = () => {
  const style = {
    textDecoration: "none",
    color: "lightcoral",
  };
  ScrollReveal().reveal(".tech-img", {
    origin: "left",
    duration: 1000,
    distance: "10rem",
    delay: 400,
  });
  ScrollReveal().reveal(".tech-text", {
    origin: "right",
    duration: 1000,
    distance: "10rem",
    delay: 400,
  });
  return (
    <div>
      <div className="container anywhere small-biz any">
        <div className="tech-img">
          <img
            className="technical-img"
            src={technical}
            alt="A store front with a banner saying 'small-business' "
          />
        </div>
        <div className="anywhere-text tech-text">
          <h1 className="anywhere-top not-techie">Not a Techie. No probrem.</h1>
          <p className="anywhere-para">
            We have put in the work so you don't have to worry. No one does
            custom e-commerce like we do.
          </p>
          <div>
            <Link to="/all-services" style={style}>
              <LearnMore />
            </Link>
          </div>
        </div>

        <div className="te-img">
          <img
            className="technical-img"
            src={technical}
            alt="A store front with a banner saying 'small-business'"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(SmallBiz);

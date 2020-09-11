import React from "react";
import arrow from "../assets/svgs/arrow.svg";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <p className="learn-more-para">Learn more </p>
      <span>
        <img className="arrow" src={arrow} alt="" />
      </span>
    </div>
  );
};

export default LearnMore;

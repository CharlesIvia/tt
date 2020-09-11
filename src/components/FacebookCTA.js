import React from "react";
import GetStartedBtn from "./GetStartedBtn";
import { Link, withRouter } from "react-router-dom";

const FacebookCTA = () => {
  return (
    <div className="facebook-cta">
      <div>
        <h1>Start your Facebook Store today.</h1>
        <p>We will set up your Facebook store and get your started.</p>
        <p className="facebook-last">You are ready for social selling</p>

        <Link to="pricing">
          <GetStartedBtn />
        </Link>
      </div>
    </div>
  );
};

export default withRouter(FacebookCTA);

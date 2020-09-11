import React from "react";
import Cards from "./Cards";
import { Link, withRouter } from "react-router-dom";

const Services = () => {
  return (
    <div className="container services">
      <div>
        <h1 className="sell-top">Sell everywhere</h1>
      </div>
      <div>
        <Cards />
      </div>
      <div className="sell-today">Start Selling Online for FREE.</div>
      <div>
        <Link to="/pricing">
          <button className="services-btn">Get Started Now</button>
        </Link>
      </div>
      <div class="go-home">
        <Link to="/home">
          {" "}
          <span
            class="iconify chev"
            data-icon="carbon:chevron-up"
            data-inline="false"
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Services);

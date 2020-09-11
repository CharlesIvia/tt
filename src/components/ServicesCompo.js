import React from "react";
import Cards from "./Cards";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Services = () => {
  return (
    <div>
      <div className="container services">
        <Header />
        <div>
          <h1 className="sell-top top-sell">Sell everywhere</h1>
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Services);

import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import jumia from "../assets/general/jumia-home.jpg";
import sell from "../assets/general/sell.jpg";
import GetStartedBtn from "./GetStartedBtn";
import SellEverywhere from "./SellEverywhere";
import Footer from "./Footer";

const Jumia = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="jumia-first">
        <Link to="/jumia">
          <img
            src={jumia}
            alt="A store front with a hand holding a shopping bag"
          />
        </Link>
      </div>

      <div className="jumia-second">
        <h1>
          Over 4 million customers to reach <br /> on Jumia
        </h1>

        <Link to="/pricing">
          <GetStartedBtn />
        </Link>
      </div>

      <div className="jumia-third">
        <div>
          <img src={sell} alt="A small lorry being loaded with items" />
        </div>
        <div className="jumia-third-second">
          <h1>Let us set up your store for you.</h1>
          <p>We will get you ready to selling on Jumia in no time.</p>
          <div className="google-btns">
            <a
              href="https://www.jumia.co.ke/sp-market-place/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="learn-more-btn">Learn More</button>
            </a>

            <Link to="/pricing">
              <GetStartedBtn />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <SellEverywhere />
      </div>

      <Footer />
    </div>
  );
};

export default withRouter(Jumia);

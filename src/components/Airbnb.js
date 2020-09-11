import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import home from "../assets/svgs/home.jpg";
import airbnb from "../assets/general/airbnb.jpg";
import second from "../assets/svgs/second.png";
import GetStartedBtn from "./GetStartedBtn";
import SellEverywhere from "./SellEverywhere";
import Footer from "./Footer";

const Airbnb = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="airbnb-first">
        <div className="airbnb-div-first">
          <img className="airbnb-first-img" src={home} alt="A kitchen" />
        </div>
        <div className="airbnb-first-second">
          <img className="airbnb-first-logo" src={airbnb} alt="A kitchen" />
          <h1>
            Make extra cash <br />
            letting your apartment
          </h1>

          <Link to="/pricing">
            <GetStartedBtn />
          </Link>
        </div>

        <div className="airbnb-div">
          <img
            className="airbnb-first-img"
            src={home}
            alt="A small glass glass house"
          />
        </div>
      </div>

      <div className="airbnb-second">
        <div>
          <h1>Host on Airbnb today</h1>
          <p>
            We will set up your apartment on Airbnb and <br /> get you started.
          </p>

          <div className="google-btns air-btns">
            <a
              href="https://www.airbnb-hosts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="learn-more-btn">Learn More</button>
            </a>
            <Link to="pricing">
              {" "}
              <GetStartedBtn />
            </Link>
          </div>
        </div>

        <div>
          <img className="airbnb-second-img" src={second} alt="" />
        </div>
      </div>

      <div>
        <SellEverywhere />
      </div>

      <Footer />
    </div>
  );
};

export default withRouter(Airbnb);

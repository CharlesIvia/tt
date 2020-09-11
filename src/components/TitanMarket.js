import React from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import home from "../assets/general/hero-device.png";
import badge from "../assets/general/google-play-badge.png";
import one from "../assets/general/1.png";
import two from "../assets/general/2.png";
import three from "../assets/general/3.png";
import four from "../assets/general/4.png";
import five from "../assets/general/5.png";
import cover from "../assets/general/titanbusiness.png";

const TitanMatket = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="titan">
        <div className="titan-first">
          <div className="titan-home-div">
            <img
              className="titan-home"
              src={home}
              alt="A phone screen showing an app"
            />
          </div>
          <div className="titan-first-para">
            <h1>
              Titan Business App Puts <br /> Your Biz in Your Customers Pocket
            </h1>
            <p>Create and manage a fully customizable store today.</p>

            <a
              href="https://play.google.com/store/apps/details?id=com.titanmarket.business&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="badge"
                src={badge}
                alt="Google play store badge"
              />
            </a>
            <div className="titan-home-div-last">
              <img className="titan-home t-home" src={home} alt="" />
            </div>
          </div>
        </div>

        <div className="titan-second">
          <div className="titan-second-first">
            <h1>Your Own Mobile Store</h1>
            <p>
              With BiasharaApp, We automatically create and publishes a native{" "}
              <br />
              store in Titan Market App just for you.
            </p>
          </div>

          <div className="titan-images">
            <img className="titan-image" src={one} alt="" />
            <img className="titan-image" src={two} alt="" />
            <img className="titan-image" src={three} alt="" />
            <img className="titan-image" src={four} alt="" />
            <img className="titan-image" src={five} alt="" />
          </div>
        </div>

        <div className="titan-third">
          <h1>You are in control.</h1>
          <p>
            No transactions costs. No matter how much you sell. <br /> Seriously
          </p>

          <div>
            <img className="titan-cover-img" src={cover} alt="" />
          </div>
        </div>

        <div className="titan-third titan-fourth">
          <h1>
            BiasharaApp Puts Your Storefront <br /> in Your Customers Pocket{" "}
          </h1>
          <a
            href="https://play.google.com/store/apps/details?id=com.titanmarket.business&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="badge" src={badge} alt="Google play store badge" />
          </a>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(TitanMatket);

import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import home from "../assets/google/home.jpg";
import tile from "../assets/google/tile.png";
import retail from "../assets/google/retail.png";
import store from "../assets/google/store.png";
import unnamed from "../assets/google/unnamed.png";
import GetStartedBtn from "./GetStartedBtn";
import SellEverywhere from "./SellEverywhere";

const Google = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="google-first">
        <div>
          <h1>
            Reach hundreds of millions of people who do <br /> shopping related
            searches on Google each day
          </h1>
        </div>
        <div className="home-div">
          <img
            className="google-home"
            src={home}
            alt="Two women shopping for bras"
          />
        </div>
      </div>

      <div className="google-second">
        <div>
          <h1>
            Be seen everywhere customers are browsing, researching, and buying
            online
          </h1>
          <p>
            Google Smart Shopping takes your products beyond Google search to
            help you advertise across Shopping, YouTube, Gmail, and the Google
            Display Network.
          </p>

          <Link to="pricing">
            {" "}
            <GetStartedBtn />
          </Link>
        </div>

        <div>
          <img src={tile} alt="" />
        </div>
      </div>

      <div className="google-third">
        <div className="retail-div-first">
          <img src={retail} alt="" />
        </div>

        <div>
          <h1>Build your brand and drive sales</h1>
          <p>
            Make it easier for potential customers to find your products and
            business details in their exact moments of need or inspiration—or
            let them complete their purchase with you right on Google
          </p>
        </div>
        <div className="retail-div">
          <img src={retail} alt="People searching for sneakers online" />
        </div>
      </div>

      <div className="google-second">
        <div>
          <h1>Solutions for every size business</h1>
          <p>
            Whether you’re a small, local business, a multi-channel retailer or
            a global brand, your growth is our goal.
          </p>
        </div>
        <div>
          <img src={store} alt="A person shopping for shoes on google" />
        </div>
      </div>

      <div className="google-fourth">
        <div className="unnamed-div-first">
          <img src={unnamed} alt="" />
        </div>
        <div className="google-fourth-second">
          <h1>Enjoy the full suite of Google for Retail Solution</h1>
          <ul>
            <li>Search Campaigns</li>
            <li>Smart Shopping Campaigns</li>
            <li>Shopping Action</li>
          </ul>

          <div className="google-btns">
            <a
              href="https://www.google.com/retail/solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="learn-more-btn">Learn More</button>
            </a>
            <Link to="pricing">
              <GetStartedBtn />
            </Link>
          </div>
        </div>

        <div className="unnamed-div">
          <img src={unnamed} alt="Sneakers results from google search" />
        </div>
      </div>
      <div>
        <SellEverywhere />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Google);

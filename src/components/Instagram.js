import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import first from "../assets/instagram/first.png";
import basket from "../assets/instagram/basket.png";
import blue from "../assets/instagram/blue.png";
import chair from "../assets/instagram/chair.png";
import instaLogo from "../assets/instagram/Instagram-Logo.png";
import GetStartedBtn from "./GetStartedBtn";
import Footer from "./Footer";
import SellEverywhere from "./SellEverywhere";

const Instagram = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="container instagram">
        <div className="invisible-insta">
          <img
            className="insta-home"
            src={first}
            alt="A chair on instagram home feed"
          />
        </div>

        <div className="insta-right">
          <img className="insta-logo" src={instaLogo} alt="" />
          <h1>
            Shoppable <span>Instagram Posts</span> are just a few clicks away
          </h1>
          <Link to="/pricing" style={style}>
            <GetStartedBtn />
          </Link>
        </div>

        <div className="insta-img">
          <img className="insta-home" src={first} alt="" />
        </div>
      </div>

      <div className="insta-second">
        <div className="insta-second-left">
          <h1>Sell on Instagram</h1>
          <p className="sells-para">
            "Because a picture SELLS like a thousand words"
          </p>

          <Link to="/pricing" style={style}>
            <GetStartedBtn />
          </Link>
        </div>

        <div className="insta-images">
          <div>
            <img
              className="insta-phone basket"
              src={basket}
              alt="A basket on instagram home feed"
            />
            <small>
              <span
                class="iconify"
                data-icon="emojione:digit-one"
                data-inline="false"
              ></span>
              <p>Tap for info</p>
            </small>
          </div>
          <div>
            <img
              className="insta-phone"
              src={blue}
              alt="A chair on instagram home feed"
            />
            <small>
              <span
                class="iconify"
                data-icon="emojione:digit-two"
                data-inline="false"
              ></span>
              <p>Get details</p>
            </small>
          </div>

          <div>
            <img
              className="insta-phone"
              src={chair}
              alt="A chair on instagram home feed"
            />
            <small>
              <span
                class="iconify"
                data-icon="emojione:digit-three"
                data-inline="false"
              ></span>
              <p>Order Up!</p>
            </small>
          </div>
        </div>
      </div>

      <div className="insta-sell">
        <div>
          <h1>
            Start selling on Instagram with <br /> your Instagram Store
          </h1>
        </div>

        <div className="insta-paras">
          <div className="insta-para-left">
            <p>
              Reach 1 billion Instagram users longing for products like yours
              with Shoppable Instagram posts from your page. Set up your
              Instagram shop in minutes to sell everything from clothes to
              antique furniture.
            </p>

            <br />

            <p>
              An Instagram shop meets your customers in the same space they
              connect with friends, news, and favorite brands. Every day,
              300-million Instagram users visit an Instagram business page after
              seeing a post in their feed. Eighty percent of users follow at
              least one business on Instagram. And 60% have heard about a
              business or product through Instagram. Your Instagram store
              extends your digital footprint, creating new and engaging
              opportunities to promote your products.
            </p>
          </div>

          <div className="insta-para-right">
            <p>
              By enabling Shoppable Instagram posts, shoppers are free to move
              from inspiration to decision instantaneously. Your product catalog
              is synchronized with your Facebook and Instagram accounts
              automatically.
            </p>

            <br />

            <p>
              Then, when you tag products in your photos with shoppable pricing
              tags, Instagram users are enabled to view featured products,
              decide, and order right from their own Instagram accounts.
            </p>

            <p>
              Whether your Instagram shop is a hobby, side-hustle, or full-time
              effort, We make it easy to promote your products to engaged
              Instagram shoppers. Is it time to expand your customer outreach
              with an Instagram store?
            </p>
          </div>
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

export default withRouter(Instagram);

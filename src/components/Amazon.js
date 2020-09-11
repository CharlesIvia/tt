import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import GetStartedBtn from "./GetStartedBtn";
import phone from "../assets/amazon/hero_phone.png";
import table from "../assets/amazon/table_w_glasses.png";
import control from "../assets/amazon/control3.png";
import SellEverywhere from "./SellEverywhere";
import Footer from "./Footer";

const Amazon = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="amazon-first">
        <div className="amazon-first-section">
          <h1>
            Sell on Amazon with <br /> Titan Market.
          </h1>
          <p>
            Reach new customers on the world’s largest online store, we will set
            up everything for you.
          </p>

          <Link to="/pricing">
            <GetStartedBtn />
          </Link>
        </div>

        <div className="amazon-first-images">
          <div>
            <img
              className="amazon-phone"
              src={phone}
              alt="A phone with amazon.com website open"
            />
          </div>
          <div>
            <img
              className="amazon-table"
              src={table}
              alt="A tablet with amazon.com website open"
            />
          </div>
        </div>
      </div>

      <div className="amazon-second">
        <div className="control-img-div-first">
          <img
            className="control-img"
            src={control}
            alt="A tablet with the amazon.com website showing a catalogue of sun glasses"
          />
        </div>

        <div className="amazon-access">
          <h1>
            Access Amazon’s $100B+ <br /> marketplace in an instant
          </h1>

          <div>
            <h3>Sell more, do less.</h3>
            <p>
              Ever wondered how you can start selling on Amazon? Well, just ask
              us.
            </p>
          </div>
          <div>
            <h3>We take care of everything</h3>
            <p>
              We will get you up and selling on Amazon as soon are you are ready
              to sell.
            </p>
          </div>
          <div>
            <h3>Own your customers</h3>
            <p>
              Amazon offers the best experience possible when interacting with
              your customers.
            </p>
          </div>
        </div>

        <div className="control-img-div">
          <img className="control-img" src={control} alt="" />
        </div>
      </div>

      <div className="amazon-third">
        <h1>
          55% of product searches begin <br /> on Amazon
        </h1>

        <Link to="/pricing">
          <GetStartedBtn />
        </Link>
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

export default withRouter(Amazon);

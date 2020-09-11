import React from "react";
import Header from "./Header";
import { Link, withRouter } from "react-router-dom";
import GetStartedBtn from "./GetStartedBtn";
import shopify from "../assets/general/shopify.png";
import shopifysnip from "../assets/general/shopifysnip.png";
import SellEverywhere from "./SellEverywhere";
import Footer from "./Footer";

const Shopify = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="shopify-first">
        <div className="shopify-stores">
          <h1>SHOPIFY ONLINES STORE</h1>
          <h2>
            Everything you need <br /> to sell online
          </h2>

          <p>
            Selling online with your own ecommerce website <br /> has never been
            easier, faster, or more scalable. <br /> Impress your customers with
            a beautiful store.
          </p>

          <Link to="/pricing">
            <GetStartedBtn />
          </Link>
        </div>

        <div className="shopify-home-img-div">
          <img className="shopify-home-img" src={shopify} alt="" />
        </div>
      </div>

      <div className="shopify-second">
        <div className="shopify-second-first">
          <h1>Selling online has never been easier</h1>
          <h2>
            We will set up and optimize your Shopify store and bring your brand
            to life
          </h2>

          <div>
            <ul>
              <li>
                <h3>70+ free and premium themes</h3>
              </li>
              <li>
                <h3>
                  <h3>Get paid quickly and securely</h3>
                </h3>
              </li>
              <li>
                <h3>
                  <h3>Designed for Mobile</h3>
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="shopify-snip-div">
          <img className="shopify-snip" src={shopifysnip} alt="" />
        </div>
      </div>

      <div className="shopify-third">
        <h1>Start your business journey with Shopify</h1>
        <Link to="/pricing">
          <GetStartedBtn />
        </Link>
      </div>

      <div>
        <SellEverywhere />
      </div>

      <Footer />
    </div>
  );
};

export default withRouter(Shopify);

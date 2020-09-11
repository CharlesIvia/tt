import React from "react";
import Header from "./Header";
import { Link, withRouter } from "react-router-dom";
import Footer from "./Footer";
import ScrollReveal from "scrollreveal";

const Pricing = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  const newLocal = ".pricing-card";
  ScrollReveal().reveal(newLocal, {
    origin: "bottom",
    duration: 1000,
    distance: "10rem",
    delay: 400,
  });
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="pricing-first">
        <h1>Find the right plan for your business</h1>
        <p>
          <span role="img" aria-label="flame">
            🔥
          </span>{" "}
          Take your business online for cheap
          <span role="img" aria-label="banknote">
            💵
          </span>
        </p>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h1>Social</h1>
          <h1>KSH.2500</h1>
          <p>One time payment</p>

          <div className="card-border"></div>

          <p>
            We will get you started selling on both Facebook and Instagram
            today.
          </p>

          <Link to="signup">
            <button>Buy Now</button>
          </Link>

          <small>Terms and conditions apply.</small>
        </div>

        <div className="pricing-card">
          <h1>Venture</h1>
          <h1>KSH.7500</h1>
          <p>Cost per project</p>

          <div className="card-border"></div>

          <p>
            We will get you started selling on Shopify, Jumia and Amazon today.{" "}
            <br />
            Support for your store for 21days.
          </p>
          <Link to="signup">
            <button>Buy Now</button>
          </Link>
          <small>Terms and conditions apply.</small>
        </div>

        <div className="pricing-card">
          <h1>Marketing</h1>
          <h1>KSH.7500</h1>
          <p>Cost per project</p>

          <div className="card-border"></div>

          <p>
            Market your business across the web though Instagram, Facebook,
            Google and Mailchimp
          </p>

          <Link to="signup">
            <button>Buy Now</button>
          </Link>
          <small>Terms and conditions apply.</small>
        </div>
        <div className="pricing-card">
          <h1>Unlimited</h1>
          <h1>KSH.25000+</h1>
          <p>Cost per project</p>

          <div className="card-border"></div>

          <p>We will create and maintain a pro website for your business.</p>

          <Link to="/contact" style={style}>
            <button>Contact Sales</button>
          </Link>
          <small>Terms and conditions apply.</small>
        </div>
      </div>

      <div className="pricing-second">
        <h1>Wondering what's best for your business?</h1>
        <p>Don't worry. We got your back.</p>{" "}
        <Link to="/contact" style={style}>
          <button>Contact Us</button>
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Pricing);

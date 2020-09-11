import React from "react";
import LearnMore from "./LearnMore";
import insta from "../assets/general/insta.png";
import airbnb from "../assets/general/airbnb.jpg";
import amazon from "../assets/general/amazon.png";
import jumia from "../assets/general/jumia.png";
import mail from "../assets/general/mail.png";
import google from "../assets/general/google.png";
import { Link, withRouter } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Cards = () => {
  const style = {
    textDecoration: "none",
    color: "lightcoral",

    "&hover": {
      color: "darkslategray",
    },
  };

  ScrollReveal().reveal(".cards", {
    origin: "bottom",
    duration: 1000,
    distance: "5rem",
    delay: 300,
  });
  return (
    <div className="cards">
      <div className="card">
        <h1 className="card-top">
          <img
            className="insta google-logo"
            src={google}
            alt="Google company logo"
          />
        </h1>
        <p className="card-text">
          Reach out to you customers on ALL google apps.
        </p>

        <Link to="/google" style={style}>
          <LearnMore />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-top titan-logo">Titan Market</h1>
        <p className="card-text txt">
          Created a FREE custom store on Titan Business App.
        </p>

        <Link to="/shop" style={style}>
          <LearnMore />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-top titan-logo">Shopify</h1>
        <p className="card-text txt">
          Your Shopify store is just a few click away. Seriously.
        </p>

        <Link to="/shopify" style={style}>
          <LearnMore />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-top facebook-top">facebook</h1>
        <p className="card-text">
          Start selling and marketing on your page today.
        </p>

        <Link to="/facebook" style={style}>
          <LearnMore />
        </Link>
      </div>

      <div className="card">
        <h1 className="card-top">
          <img className="insta" src={insta} alt="Instagram logo" />
        </h1>
        <p className="card-text">
          Let customers order directly from your Instagram posts.
        </p>

        <Link to="/instagram" style={style}>
          <LearnMore />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-top">
          <img className="insta jumia-logo" src={jumia} alt="Jumia logo" />
        </h1>
        <p className="card-text">
          We will get you up and running on Jumia Merchants.
        </p>

        <Link to="/jumia" style={style}>
          <LearnMore />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-top">
          <img className="insta" src={airbnb} alt="Airbnb logo" />
        </h1>
        <p className="card-text">
          Make extra cash letting you free rooms or apartment.
        </p>

        <Link to="airbnb" style={style}>
          <LearnMore />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-top">
          <img className="insta" src={amazon} alt="Amazon company logo" />
        </h1>
        <p className="card-text">
          Get to millions of customers across the world on Amazon.
        </p>

        <Link to="/amazon" style={style}>
          <LearnMore />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-top">
          <img className="insta mail" src={mail} alt="Mailchimp logo" />
        </h1>
        <p className="card-text">
          Tap the power of email marketing using Mailchimp.
        </p>

        <Link to="/mailchimp" style={style}>
          <LearnMore />
        </Link>
      </div>

      <div className="card">
        <h1 className="card-top">Website</h1>
        <p className="card-text txt">Get you custom website developed today.</p>

        <Link to="/website" style={style}>
          <LearnMore />
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Cards);

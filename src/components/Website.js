import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import GetStartedBtn from "./GetStartedBtn";
import Footer from "./Footer";
import commerce from "../assets/general/commerce.png";
import snip from "../assets/general/shopifysnip.png";

const Website = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="website-first">
        <p>We will create a pro website for you.</p>
        <h1>
          Everything you need <br />
          to sell online
        </h1>

        <div>
          <img
            src={commerce}
            alt="A desktop screen with an e-commerce website open"
          />
        </div>
      </div>

      <div className="website-second">
        <div>
          <h1>Sell on a website</h1>
          <p>Every business- no matter how small, deserves a webiste.</p>
          <Link to="/pricing">
            <GetStartedBtn />
          </Link>
        </div>

        <div>
          <img src={snip} alt="An e-commerce website showing a chair on sale" />
        </div>
      </div>

      <div className="website-third">
        <h1>Unleash the power of the web today</h1>
        <p>
          Establish your business online and open your brand to the world.{" "}
          <br /> Get a simple Wordpress site or a fully custom site now.
        </p>
        <Link to="/pricing">
          <GetStartedBtn />
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Website);

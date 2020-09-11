import React from "react";
import google from "../assets/general/google.png";
import amazon from "../assets/general/amazon.png";
import jumia from "../assets/general/jumia.png";
import ebay from "../assets/general/ebay.png";
import { Link, withRouter } from "react-router-dom";

const SellEverywhere = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="sell-everywhere">
      <div className="big-border"></div>
      <div>
        <h1 className="everywhere-top">Sell everywhere</h1>
      </div>

      <div className="everywhere-reps">
        <div>
          <Link to="/facebook" style={style}>
            {" "}
            <h1 className="facebook-rep">facebook</h1>
          </Link>
        </div>
        <div>
          <Link to="instagram">
            <span
              class="iconify insta-icon"
              data-icon="logos:instagram"
              data-inline="false"
            ></span>
          </Link>
        </div>

        <div>
          <Link to="/google">
            {" "}
            <img className="rep-img" src={google} alt="" />
          </Link>
        </div>

        <div>
          <Link to="/jumia">
            {" "}
            <img className="rep-img" src={jumia} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/amazon">
            <img className="rep-img" src={amazon} alt="" />
          </Link>
        </div>
        <div>
          <img className="rep-img" src={ebay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(SellEverywhere);

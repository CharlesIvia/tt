import React from "react";
import flag from "../assets/general/flag.png";
import { Link, withRouter } from "react-router-dom";
import badge from "../assets/general/google-play-badge.png";

const Footer = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="container footer">
      <div className="footer-top">
        <div className="left">
          <div>
            <h1 className="titan-name">Titan</h1>
          </div>
          <div className="footer-co">
            <h2 className="footer-headers">COMPANY</h2>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#home">
                  About
                </a>
              </li>
              <li>
                <a className="footer-link" href="#home">
                  <Link to="contact" style={style}>
                    {" "}
                    Contact
                  </Link>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#home">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-co">
            <h2 className="footer-headers">PARTNERS</h2>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#home">
                  Team
                </a>
              </li>
              <li>
                <a className="footer-link" href="#home">
                  Investors
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-co">
            <h2 className="footer-headers">USEFUL LINKS</h2>
            <ul className="footer-list">
              <li>
                <Link to="/contact" style={style}>
                  <p>Help</p>
                </Link>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://play.google.com/store/apps/details?id=com.titanmarket.business&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business App
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://play.google.com/store/apps/details?id=com.titanmarket.titan&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Market App
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div>
            <a className="footer-link" href="#home">
              <span
                class="iconify"
                data-icon="ant-design:twitter-circle-filled"
                data-inline="false"
              ></span>
            </a>
          </div>
          <div>
            <a className="footer-link" href="#home">
              <span
                class="iconify"
                data-icon="entypo-social:facebook-with-circle"
                data-inline="false"
              ></span>
            </a>
          </div>

          <div>
            <a className="footer-link" href="#home">
              <span
                class="iconify"
                data-icon="entypo-social:linkedin-with-circle"
                data-inline="false"
              ></span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <ul className="footer-list bottom-left li">
            <li>
              <a className="footer-link" href="#home">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="footer-link" href="#home">
                Cookies
              </a>
            </li>
            <li>
              <Link style={style} to="termsandconditions">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-right">
          <div className="kenya-top">
            <h2 className="kenya">Kenya</h2>
            <img className="flag" src={flag} alt="" />
          </div>

          <div>&copy; 2020 TitanMarket</div>
        </div>
      </div>

      <div className="footer-badge">
        <a
          className="footer-link"
          href="https://play.google.com/store/apps/details?id=com.titanmarket.business&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="f-badge" src={badge} alt="" />
        </a>

        <div className="copy">&copy; 2020 TitanMarket</div>
      </div>
    </div>
  );
};

export default withRouter(Footer);

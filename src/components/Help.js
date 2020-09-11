import React from "react";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import ScrollReveal from "scrollreveal";

const Help = () => {
  ScrollReveal().reveal(".help-second", {
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

      <div className="help-first">
        <h1>Get in Touch</h1>
      </div>

      <div className="help-second">
        <div className="help-card">
          <div className="help-circle">
            <span
              class="iconify"
              data-icon="ant-design:phone-outlined"
              data-inline="false"
            ></span>
          </div>
          <p className="halp">Call Us</p>

          <p className="no">
            <a className="tel" href="tel:+254-741-460-407">
              +254 741 460 407
            </a>
          </p>
        </div>
        <div className="help-card">
          <div>
            <span
              class="iconify"
              data-icon="carbon:email"
              data-inline="false"
            ></span>
          </div>
          <p className="halp">Email Us</p>
          <a className="mailto" href="mailto:iviacharles@gmail.com">
            iviacharles@gmail.com
          </a>
        </div>
        <div className="help-card">
          <div>
            <span
              class="iconify"
              data-icon="gridicons:location"
              data-inline="false"
            ></span>
          </div>
          <p className="halp">Offices</p>
          <p className="no">6288-00100, Nairobi-Kenya.</p>
        </div>
      </div>

      <div className="social">
        <div className="social-para">
          <h1>Connect on Social Media</h1>
          <p>Come hang out with us on:</p>
        </div>
        <div className="social-first">
          {" "}
          <div>
            <a
              href="https://twitter.com/MarketTitan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="iconify"
                data-icon="entypo-social:twitter-with-circle"
                data-inline="false"
                color="dimgray"
              ></span>
            </a>
          </div>
          <div>
            <a
              href="https://web.facebook.com/titanmarket/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="iconify"
                data-icon="entypo-social:facebook-with-circle"
                data-inline="false"
                color="dimgray"
              ></span>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/titan-marketplace/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="iconify"
                data-icon="entypo-social:linkedin-with-circle"
                data-inline="false"
                color="dimgray"
              ></span>
            </a>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Help);
